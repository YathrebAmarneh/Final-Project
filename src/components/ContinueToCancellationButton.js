import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import CancelSubscriptionButton from "./CancelSubscriptionButton";
import CancelSubscriptionReasons from "./CancelSubscriptionReasons"
Modal.setAppElement("#root");

const ContinueToCancellationButton = ({ className }) => {
  const [modalIsOPen, setmodalIsOPen] = useState(false);
  const cancel_subscription_reasons = [
    "Not compatible with our product",
    "Too Complicated",
    "Don’t have enough time to optimize Userpilot or need to rethink how to implement it",
    "My project has finished and I no longer need Userpilot",
    "Poor funtionality",
    "It’s too expensive",
    "Going with a different provider",
    "Didn’t meet our expectations",
  ]
  return (
    <div className="continueCancellationButton">
      <Button
        textButton="Continue to Cancellation"
        className={className}
        onClick={() => setmodalIsOPen(true)}
      />
      <Modal
        className="downgradeMethodModal"
        style={{
          content: {
            position: "fixed",
            top: 0,
            bottom: 0,
            left: "65%",
            right: 0,
          },
          overlay: {
            backgroundColor: "transparent",
          },
        }}
        isOpen={modalIsOPen}
        onRequestClose={() => setmodalIsOPen(false)}
      >
        <div>
          <div className="downgradeMethodHead">
            <Button
              className="xIcon xDowngrademethod"
              textButton="&times;"
              onClick={() => setmodalIsOPen(false)}
            />
            <h5>Cancel Subscription</h5>
          </div>

         <div className="continueCancellationBody">
         <div className="divOne">
            <b>We’re sorry to see you go. In order to process the cancelation, we
            need to ask you a few simple questions. </b>This will help us improve
            the products for others.
          </div>
          <hr/>
          <CancelSubscriptionReasons
          cancelSubscriptionReasons = {cancel_subscription_reasons}
          />
          <div className="doNotCancelSubscription ">
            <Button
              className=" doNotCancel"
              textButton="Don't Cancel"
              onClick={() => setmodalIsOPen(false)}
            />
            <CancelSubscriptionButton />
          </div>
         </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContinueToCancellationButton;
