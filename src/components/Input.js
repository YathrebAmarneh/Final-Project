const Input = ({ name, className, placeholder, value, onChange, style }) => {
  return (
    <div>
      <input
        name={name}
        className={className}
        style={style}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
