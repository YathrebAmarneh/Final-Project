import { WiStars } from "react-icons/wi";
import { FiMessageCircle } from "react-icons/fi";

const Button = ({
  textButton,
  onClick,
  type,
  className,
  disabled,
  style,
  id,
}) => {
  return (
    <div>
      <button
        style={style}
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={className}
        id={id}
      >
        {textButton === "Upgrade" && <WiStars color="#fff" />}
        {textButton === "Contact Us" && (
          <FiMessageCircle
            size="0.9rem"
            style={{
              color: "#fff",
              paddingTop: "5px",
              paddingRight: "3px",
              fontSize: "bold",
            }}
          />
        )}
        {textButton}
      </button>
    </div>
  );
};

export default Button;
