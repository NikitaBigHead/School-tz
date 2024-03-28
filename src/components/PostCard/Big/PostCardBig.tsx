import React from "react";
import styles from "./PostCardBig.module.css";
import Rating from "../../Rating/Rating";
import ReadMoreButton from "../../ReadMoreButton/ReadMoreButton";

export default function PostCardBig({
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
            <img src={image} className={styles.card_image} />
            <section className={styles.card_info}>
                <div className={styles.title_rating_container}>
                    <h2 className={styles.title}>{title}</h2>
                    <Rating rating={rating} />
                </div>
                <p className={styles.description}>{description}</p>
                <div className={styles.button_container}>
                    <ReadMoreButton link={`/posts/${id}`} />
                </div>
            </section>
        </section>
    );
}
