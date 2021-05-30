import Label from './Label'
import Select from './Select'

const LabelSelect = ({name, text, onChange}) => {
    return (
        <div>

            <Label text={text}/>
            <Select name={name} onChange={onChange} />

        </div>
    )
}

export default LabelSelect
