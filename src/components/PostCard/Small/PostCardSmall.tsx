import React from "react";
import styles from "./PostCardSmall.module.css";
import Rating from "../../Rating/Rating";
import ReadMoreButton from "../../ReadMoreButton/ReadMoreButton";
export default function PostCardSmall({
    title,
    id,
    description,
    rating,
    image,
}: {
    title: string;
    id: number;
    description: string;
    rating: { likes: number; dislikes: number };
    image: string;
}) {
    return (
        <section className={styles.card}>
            <img
                src={process.env.PUBLIC_URL + image}
                className={styles.card_image}
            />
            <section className={styles.card_info}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.rating_button_container}>
                    <Rating rating={rating} />
                    <ReadMoreButton link={`/posts/${id}`} />
                </div>
            </section>
        </section>
    );
}
