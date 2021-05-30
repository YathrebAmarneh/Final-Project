import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import PlanType from "./PlanType";
import Slide from "./Slide";
import HorizontalButtonGroup from "./HorizontalButtonGroup";

Modal.setAppElement("#root");

const ChangePlanButton = ({ data, numberWithCommas }) => {
  const mua = data.organization.plan_details.mua;
  // const mua = "10000";
  const [sliderValue, setSliderValue] = useState(mua);
  // console.log("sliderValue", sliderValue);
  // const plan_type = data.organization.plan_details.plan_type;
  const plan_type = "standard";
  // const plan_type = "enterprise";

  const standard_features = [
    "People & Tracking",
    "Growth Insights",
    "Engagement Layer",
    "User Sentiment",
    "Reporting, Targeting & Customizatio",
    "Integrations",
  ];

  const enterprise_features = [
    "Unlimited Seat",
    " Unlimited Feature Tag?",
    "Phone Support & Priority Troubleshooting",
    "Security Audi",
    "Service Level Agreement (SLA)",
  ];

  const per_month_cost = 399;
  const [permonthcost, setPermonthcost] = useState(per_month_cost);
  const [modalIsOPen, setmodalIsOPen] = useState(false);

  return (
    <div className="changePlanButton">
      <Button textButton="change plan" onClick={() => setmodalIsOPen(true)} />
      <Modal
        className="changeButtonModal"
        style={{
          content: {
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}
        isOpen={modalIsOPen}
        onRequestClose={() => setmodalIsOPen(false)}
      >
        <div className="xIconbox">
          <Button
            className="xIcon"
            textButton="&times;"
            onClick={() => setmodalIsOPen(false)}
          />
        </div>
        {plan_type === "trial" && (
          <div className="turnGrowthEngine">
            <h5>Turn your product into a growth engine</h5>
          </div>
        )}
        {plan_type === "standard" && (
          <div className="turnGrowthEngine">
            <h5>Your current plan is Standard</h5>
          </div>
        )}
        {plan_type === "enterprise" && (
          <div className="turnGrowthEngine">
            <h5>Your current plan is Enterprise</h5>
          </div>
        )}

        <div className="aboveSlider">
          <div className="monthlyAnnually">
            <p>How would you like to pay?</p>
            <div className="App">
              <HorizontalButtonGroup
                per_month_cost
                perMonthCost={permonthcost}
                onClick={(howToPay) => {
                  //if monthly
                  if (howToPay === "monthly") setPermonthcost(per_month_cost);
                  //if yearly
                  else
                    setPermonthcost(
                      parseInt(per_month_cost - per_month_cost * 0.15)
                    );
                }}
              />
            </div>
          </div>
          <div className="monthlyActiveUsers">
            <span>Monthly Active Users</span>
            <span style={{ fontSize: "17px" }}>
              {numberWithCommas(sliderValue)}
            </span>
          </div>
        </div>

        <Slide
          styles={{
            track: {
              backgroundColor: "#C8C8C8",
              width: "41em",
            },
            active: {
              backgroundColor: "	#FF1493",
            },
            thumb: {
              width: 20,
              height: 20,
              border: "2px solid #FF1493",
            },
          }}
          axis="x"
          xmax="50000"
          xstep="100"
          value={mua}
          onChange={(value) => {
            setSliderValue(value);
          }}
        />

        <div className="standardEnterprise">
          <PlanType
            className="standardMargin"
            mua={mua}
            sliderValue={sliderValue}
            id="standardd"
            planName="Standard"
            perMonthCost={permonthcost}
            perMonthText="per month"
            planType={plan_type}
            textButton={
              plan_type === "standard" ? "Your Current Plan" : "Buy Now"
            }
            features={standard_features}
            style={{ color: "#00cc66", backgroundColor: "rgb(190 239 214)" }}
          />

          <PlanType
            className="enterpriseMargin"
            id="enterprisee"
            planName="Enterprise"
            textOne="Reach out for pricing"
            textTwo="Let’s talk"
            planType={plan_type}
            textButton={
              plan_type === "enterprise" ? "Your Current Plan" : "Contact us"
            }
            textThree="Everything in Standard +"
            features={enterprise_features}
            style={{ color: "#6600cc", backgroundColor: "rgb(215 184 247)" }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ChangePlanButton;
