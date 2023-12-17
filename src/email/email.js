import styles from "./email.module.css";

export default function Email({ data, InputChange, errorMessageEmail }) {
  return (
    <>
      <div className={styles.textEmail}>Email</div>
      <input
        type="email"
        name="email"
        value={data.email || ""}
        onChange={InputChange}
        placeholder="Enter your Email"
      />
      <div className={styles.text}>{errorMessageEmail}</div>
    </>
  );
}
