
const DowngradeButtonChild = ({ className, head, mau, perMonth, paragraph }) => {
    return (
        <div className ={className}>
            <h4>{head}</h4>
            <h5>Standard Plan</h5>
            <div>Monthly Active Users:<span className="mau">{mau}</span></div>
            <span><strong>${perMonth}</strong>/month</span>
            { <p>{paragraph}</p>}
        </div>
    )
}

export default DowngradeButtonChild
