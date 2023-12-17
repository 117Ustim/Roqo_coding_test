import styles from "./name.module.css";

export default function Name({ data, InputChange, errorMessageName }) {
  return (
    <>
      <label className={styles.textName}>Name</label>

      <input
        type="text"
        name="name"
        value={data.name || ""}
        onChange={InputChange}
        placeholder="Enter your name"
        required
        maxLength="12"
      />
      <div className={styles.text}>{errorMessageName}</div>
    </>
  );
}
