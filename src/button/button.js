import styles from "./button.module.css";

export default function Button({ onClick }) {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        Press me
      </button>
    </>
  );
}
