import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";
import { useLoaderData, Link } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import getRandomNumber from "../../functions/getRandomNumber";
import getSrcImage from "../../functions/getPhotoById";
export default function Post() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState({ likes: 0, dislikes: 0 });
    const [image, setImage] = useState("");

    const [isLoading, setLoading] = useState(true);
    const { id } = useLoaderData() as { id: number };
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTitle(data.title);
                setDescription(data.body);
                setImage(getSrcImage(data.id));
                setRating({
                    likes: getRandomNumber(0, 50),
                    dislikes: getRandomNumber(0, 50),
                });
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.container}>
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
                <>
                    <div className={styles.back_rating_container}>
                        <div className={styles.back_button_container}>
                            <img
                                className={styles.arrow_icon}
                                src="/assets/icons/arrow.svg"
                            />
                            <Link to="/" className={styles.button_link}>
                                <button className={styles.button_back}>
                                    Вернуться к статьям
                                </button>
                            </Link>
                        </div>
                        <Rating rating={rating} />
                    </div>
                    <h1 className={styles.title}>{title}</h1>
                    <img className={styles.post_image} src={image} />
                    <div className={styles.description_container}>
                        <p className={styles.description}>{description}</p>
                    </div>
                </>
            )}
        </div>
    );
}
