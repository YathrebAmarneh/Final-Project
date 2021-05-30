import Label from './Label'
import Textarea from './Textarea'

const TextareaLabel = ({ onChange, text, placeholder, value, rows, cols, ...rest }) => {

    return (
        <div>
            <Label text={text} />
            <Textarea {...rest} onChange={onChange} placeholder={placeholder} value={value} rows={rows} cols={cols} />
        </div>
    )
}

export default TextareaLabel
