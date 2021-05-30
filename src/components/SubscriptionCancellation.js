import CancelSubscription from './CancelSubscription'
const SubscriptionCancellation = () => {
    return (
        <div className="cancelSubscription">
            <CancelSubscription />
           
           <div>All future payments will be canceled. Your plan ends on 11/11/2021</div>
        </div>
    )
}

export default SubscriptionCancellation