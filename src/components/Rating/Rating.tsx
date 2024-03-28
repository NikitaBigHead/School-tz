import React, { useState } from "react";
import styles from "./Rating.module.css";
export default function Rating({
    rating,
}: {
    rating: { likes: number; dislikes: number };
}) {
    const [isLiked, setLike] = useState(false);
    const [isDisliked, setDislike] = useState(false);
    const toogleLike = () => {
        if (isDisliked) {
            rating.dislikes--;
            setDislike(false);
        }
        isLiked ? rating.likes-- : rating.likes++;
        setLike(!isLiked);
    };
    const toogleDislike = () => {
        if (isLiked) {
            rating.likes--;
            setLike(false);
        }
        isDisliked ? rating.dislikes-- : rating.dislikes++;
        setDislike(!isDisliked);
    };
    return (
        <section className={styles.rating_container}>
            <div className={styles.rating} onClick={(e) => toogleLike()}>
                <img
                    src={
                        isLiked
                            ? "/assets/icons/active/like.svg"
                            : "/assets/icons/like.svg"
                    }
                    className={styles.rating_icon}
                />
                <span className={styles.rating_Count}>{rating.likes}</span>
            </div>
            <div className={styles.rating} onClick={(e) => toogleDislike()}>
                <img
                    src={
                        isDisliked
                            ? "/assets/icons/active/dislike.svg"
                            : "/assets/icons/dislike.svg"
                    }
                    className={styles.rating_icon}
                />
                <span className={styles.rating_Count}>{rating.dislikes}</span>
            </div>
        </section>
    );
}
