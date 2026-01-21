function Button({ styles, text, icon, onClick }) {
  return (
    <button className={styles} onClick={onClick}>
      {text + " "}
      <i className={icon}></i>
    </button>
  );
}

export default Button;
