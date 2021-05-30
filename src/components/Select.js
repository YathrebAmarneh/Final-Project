const Select = ({ onChange, name 
    // primaryOrganizationContact 
}) => {
    return (
        <div>
            <select name={name} onChange={onChange}>

                {/* {primaryOrganizationContact.map((POC) => (<option >POC</option>))} */}
                <option selected value="John Doe">John Doe</option>
                <option value="Daniel Wilson">Daniel Wilson</option>
                <option value="Thomas Taylor">Thomas Taylor</option>
                <option value="Robert Smith">Robert Smith</option>
                <option value="Oliver Johnson">Oliver Johnson</option>
            </select>
        </div>
    )
}

export default Select


