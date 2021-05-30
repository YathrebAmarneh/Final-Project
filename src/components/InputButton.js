import Button from "./Button"

export const InputButton = ({ placeholder, textButton, className, id }) => {
    return (
        <div className={className}>
            <input placeholder={placeholder}></input>
            <Button id={id} textButton={textButton} />
        </div>
    )
}

export default InputButton