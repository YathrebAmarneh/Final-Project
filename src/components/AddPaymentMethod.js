import { MdPayment } from 'react-icons/md'
import AddPaymentMethodButton from './AddPaymentMethodButton'

const AddPaymentMethod = () => {

    return (
        <div>
            <div className="addPaymentMethodBox">
                <div className="emptyPaymentMethod"> 
                    <MdPayment className="mdpayment" size="2rem" />
                    <span className="noPaymentMethod">No Payment Method Available</span>
                </div>
                <AddPaymentMethodButton />
            </div>
        </div>
    )
}

export default AddPaymentMethod