import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import DowngradeButtonChild from "./DowngradeButtonChild";

Modal.setAppElement("#root");
const DowngradePlanButton = (className) => {
  const [modalIsOPen, setmodalIsOPen] = useState(false);
  return (
    <div className="downgradePlanButton">
      <Button
        textButton="Downgrade Plan"
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
            <h5>Downgrade your Plan</h5>
          </div>

          <DowngradeButtonChild
            className="currentPlan"
            head="Current Plan"
            mau="10,000 "
            perMonth="700.00"
          />

          <DowngradeButtonChild
            className="newPlan"
            head="New Plan"
            mau="7,000 "
            perMonth="500.00"
            paragraph="Any remaining days in your plan will 
                                automatically be refunded and discounted 
                                from the total price."
          />

          <div className="cancelDowngradeMethod">
            <Button
              className="cancelDowngrade"
              textButton="Cancel"
              onClick={() => setmodalIsOPen(false)}
            />
            <Button className="downgradePlan" textButton="Downgrade Plan" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DowngradePlanButton;
