const Textarea = ({ placeholder, value, rows, cols, onChange, ...rest }) => {

    return (
        <div>
            <textarea {...rest} onChange={onChange} value={value} placeholder={placeholder} rows={rows} cols={cols} />
        </div>
    )
}

export default Textarea
