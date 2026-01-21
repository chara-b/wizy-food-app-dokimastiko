function Button({ styles, text, icon, onClick }) {
  return (
    <button className={styles} onClick={onClick}>
      {text && text + " "}
      <i className={icon}></i>
    </button>
  );
}

export default Button;
