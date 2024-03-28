import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import SearchField from "../../components/SearchField/SearchField";
import PostCardBig from "../../components/PostCard/Big/PostCardBig";
import PostCardSmall from "../../components/PostCard/Small/PostCardSmall";
import getRandomNumber from "../../functions/getRandomNumber";
import getSrcImage from "../../functions/getPhotoById";

interface post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function Main() {
    const [posts, setPosts] = useState<post[]>([
        { userId: 0, id: 0, title: "", body: "" },
    ]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            });
    };
    const filterPostsByTitle = (title: string) => {
        setLoading(true);
        if (title === "") {
            fetchPosts();
            return;
        }
        fetch(`https://jsonplaceholder.typicode.com/posts?title=${title}`)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            });
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Блог</h1>
            <p className={styles.description}>
                Здесь мы делимся интересными кейсами из наших проектов, пишем
                про IT, а также переводим зарубежные статьи
            </p>
            <div className={styles.search_field}>
                <SearchField filterPostsByTitle={filterPostsByTitle} />
            </div>
            {isLoading && <div>Loading...</div>}
            {!isLoading && posts.length > 0 && (
                <section className={styles.posts}>
                    <PostCardBig
                        title={posts[0].title}
                        id={posts[0].id}
                        description={posts[0].body}
                        rating={{
                            likes: getRandomNumber(0, 50),
                            dislikes: getRandomNumber(0, 50),
                        }}
                        image={getSrcImage(posts[0].id)}
                    />
                    <section className={styles.mini_cards_posts}>
                        {[...posts].slice(1, posts.length).map((post: post) => {
                            return (
                                <PostCardSmall
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    description={post.body}
                                    rating={{
                                        likes: getRandomNumber(0, 50),
                                        dislikes: getRandomNumber(0, 50),
                                    }}
                                    image={getSrcImage(post.id)}
                                />
                            );
                        })}
                    </section>
                </section>
            )}
        </div>
    );
}
