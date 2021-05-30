import UpdateMethodButton from './UpdateMethodButton'
import { FaCcVisa } from 'react-icons/fa'

const UpdateMethod = ({ data }) => {
    const card_Type = data.organization.payment_method.cc_type
    const last_four_digits = data.organization.payment_method.last_four_digits
    const card_holder_name = data.organization.payment_method.card_holder_name
    return (

        <div>
            <div className="updateMethodBox">
                {card_Type === "VISA" && (<div className="cardHolderData">
                    <FaCcVisa color='rgb(55 20 140)' size='3rem' />
                    <div className="cardHolderNameNumber">
                        <span className="cardTypeLast4Digit">{card_Type}*{last_four_digits}</span>
                        <span className="cardHolderName">{card_holder_name}</span>
                    </div>
                </div>)}
                <UpdateMethodButton />
            </div>
        </div>
    )
}

export default UpdateMethod
