import AddPaymentMethod from './AddPaymentMethod'
import UpdateMethod from './UpdateMethod'
const CurrPaymentMethod = ({ data }) => {
    return (
        <div>
            <h5 className="currentpaymentmethodlabel">Current Payment Method</h5>
            { Object.entries(data.organization.payment_method).length ? <UpdateMethod data={data} /> : <AddPaymentMethod />}
            {/* <AddPaymentMethod/> */}
        </div>
    )
}
export default CurrPaymentMethod

