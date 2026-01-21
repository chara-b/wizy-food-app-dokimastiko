function Button({ styles, text, icon, onClick, disabled }) {
  return (
    <button className={styles} onClick={onClick} disabled={disabled}>
      {text && text + " "}
      <i className={icon}></i>
    </button>
  );
}

export default Button;
