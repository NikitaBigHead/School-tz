import React, { useState } from "react";
import styles from "./SearchField.module.css";

export default function SearchField({
    filterPostsByTitle,
}: {
    filterPostsByTitle: (title: string) => void;
}) {
    const onKeyDownEnter = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            filterPostsByTitle(value);
        }
    };
    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            filterPostsByTitle("");
        }
        setValue(e.target.value);
    };
    const [value, setValue] = useState("");
    return (
        <div className={styles.field}>
            <img
                className={styles.icon}
                src={"/assets/icons/search_icon.svg"}
                onClick={(e) => filterPostsByTitle(value)}
            />
            <input
                className={styles.input}
                placeholder="Поиск по названию статьи"
                onKeyDown={(e) => onKeyDownEnter(e)}
                value={value}
                onChange={(e) => onChangeValue(e)}
            />
        </div>
    );
}
