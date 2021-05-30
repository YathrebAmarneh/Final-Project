import Select from 'react-select'
import Label from './Label'

export const Select2 = ({ text, options, value, onChange, placeholder, ...rest }) => {

    return (

        <div>
            <Label text={text} style={{marginBottom: '0.4em'}} />
            <Select
            {...rest}
                classNamePrefix="test-prefix"
                onChange={onChange}
                isMulti
                options={options}
                placeholder={placeholder}
                value={value}  //to set the default value
                components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                    ClearIndicator: () => null,
                }}
            />
        </div>
    )
}

export default Select2

