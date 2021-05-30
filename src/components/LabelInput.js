import Label from "./Label";
import Input from "./Input";

const LabelInput = ({
  className,
  text,
  placeholder,
  value,
  onChange,
  name,
  ...rest
}) => {
  return (
    <div>
      <Label text={text} />
      <Input
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name={name}
        {...rest}
      />
    </div>
  );
};

export default LabelInput;
