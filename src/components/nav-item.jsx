function NavBarItem({
  type,
  value,
  placeholder,
  onChange,
  styles,
  text,
  icon,
}) {
  if (type === "input") {
    return (
      <input
        type="text"
        value={value || ""}
        placeholder={placeholder || ""}
        onChange={onChange}
        className={styles}
      />
    );
  }
  return (
    <div className={styles}>
      {text}
      <i className={icon}></i>
    </div>
  );
}
export default NavBarItem;
