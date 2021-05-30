
const MonthlyActiveUserAllowedMonthlyCost = ({ data, numberWithCommas }) => {
    return (
        <div className="monthlyActiveUserAllowedMonthlyCost">
            <div>
                <span>Monthly Active Users Allowed </span>
                <strong>{numberWithCommas(data.organization.plan_details.mua)}</strong><br/>
            </div>
            
            <div>
                <span>Monthly Cost</span>
                <strong>${data.organization.plan_details.price}</strong>
            </div>
        </div>
    )
}

export default MonthlyActiveUserAllowedMonthlyCost
