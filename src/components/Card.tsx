import styles from "../styles/card.module.css";

interface CardProps {
    bgcolor?: string;
    children?: any;
}

export default function Card(props: CardProps) {
    return (
        <div
            className={styles.card}
            style={{ backgroundColor: props.bgcolor ?? "#dda15e" }}
        >
            {props.children}
        </div>
    );
}
