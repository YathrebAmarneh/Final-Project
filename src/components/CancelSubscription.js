import { useState } from "react";
import { ImNewspaper } from "react-icons/im";
import { VscRocket } from "react-icons/vsc";
import Modal from "react-modal";
import Button from "./Button";
import ContinueToCancellationButton from "./ContinueToCancellationButton";

Modal.setAppElement("#root");
const CancelSubscription = () => {
  const [modalIsOPen, setmodalIsOPen] = useState(false);

  return (
    <div className="cancelSubscription">
      <div onClick={() => setmodalIsOPen(true)}>
        <strong style={{ color: "red", cursor: "pointer", width: "20px" }}>
          CANCEL SUBSCRIPTION
        </strong>
      </div>

      <Modal
        className="cancelSubscriptionModal"
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
          <div className=" cancelSubscriptionHead">
            <Button
              className="xIcon xDowngrademethod"
              textButton="&times;"
              onClick={() => setmodalIsOPen(false)}
            />
            <h5>Cancel Subscription</h5>
          </div>

          <div className=" cancelSubscriptionBody">
            <div className=" divOne">
              <p>
                <b>Are you sure you want to cancel your subscription? </b>
                You will not longer have access to Userpilot features after May
                20, 2021
              </p>
            </div>

            <div className=" divTwo">
              <div>
                <ImNewspaper
                  size="3rem"
                  color="#538e86"
                  style={{
                    padding: "5px",
                    marginRight: "15px",
                    marginBottom: "5px",
                  }}
                />
              </div>
              <div>
                <strong>Have Issues or Questions?</strong>
                <p style={{ paddingBottom: "0.5em", fontSize: "13px" }}>
                  Our support team can help you with any problems you might be
                  facing
                </p>
                <Button textButton="Contact Us" />
              </div>
            </div>
            <div>
              <div className=" divThree">
                <div>
                  <VscRocket
                    size="3rem"
                    color="#6600cc"
                    style={{
                      padding: "5px",
                      marginRight: "15px",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <div>
                  <strong>Try a Different Plan?</strong>
                  <p style={{ paddingBottom: "0.5em", fontSize: "13px" }}>
                    Unsatisfied with your plan? Try another
                  </p>
                  <Button textButton="Change plan" />
                </div>
              </div>
            </div>
          </div>

          <div className="closeContinueCancellation">
            <Button
              className="closeSubscription"
              textButton="Close"
              onClick={() => setmodalIsOPen(false)}
            />
            <ContinueToCancellationButton />
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default CancelSubscription;
