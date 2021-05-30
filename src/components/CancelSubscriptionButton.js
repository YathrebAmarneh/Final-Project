import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import { GiHand } from "react-icons/gi";
const CancelSubscriptionButton = () => {
  const [modalIsOPen, setmodalIsOPen] = useState(false);

  return (
    <div>
      <Button
        textButton="Cancel Subscription"
        className="cancelSubscriptionButton"
        onClick={() => setmodalIsOPen(true)}
      />

      <Modal
        className="cancelSubscriptionButtonModal"
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
          <div className="cancelSubscriptionButtonBody">
            <GiHand size="3rem" color="#ffb23b" />
            <div style={{ fontSize: "14px" }}>
              Thanks for your help. Your opinion is really important to us
            </div>
            <div>
              <b style={{ fontSize: "14px" }}>
                You subscription has been successfully canceled.
              </b>
            </div>
          </div>

          <Button
            className="doneCancelSubscription"
            textButton="Done"
            onClick={() => setmodalIsOPen(false)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default CancelSubscriptionButton;
