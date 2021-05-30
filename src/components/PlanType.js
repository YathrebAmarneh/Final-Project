import { TiPlaneOutline } from "react-icons/ti";
import { VscRocket } from "react-icons/vsc";
import DowngradePlanButton from "./DowngradePlanButton";
import Button from "./Button";
const PlanType = ({
  className,
  planName,
  planType,
  perMonthCost,
  perMonthText,
  textOne,
  textTwo,
  textButton,
  textThree,
  features,
  style,
  id,
  mua,
  sliderValue,
}) => {
  console.log(planType);
  return (
    <div className="planTypeChange" id={id}>
      <div className="planTypeChangeFirst">
        {planName === "Standard" && (
          <TiPlaneOutline color="#00cc66" size="1.5rem" />
        )}
        {planName === "Enterprise" && (
          <VscRocket color="#6600cc" size="1.5rem" />
        )}

        <h4>{planName}</h4>
        {planName === "Standard" ? (
          <div>
            <h2
              style={{ fontSize: "28px", marginTop: "5px", color: "#383838" }}
            >
              ${perMonthCost}
            </h2>
            <span className="perMonthText">{perMonthText}</span>
          </div>
        ) : (
          <div>
            <h3 className="textOne">{textOne}</h3>
            <span className="textTwo">{textTwo}</span>
          </div>
        )}

        {planType === "trial" && (
          <Button className={className} textButton={textButton} style={style} />
        )}

        {planType === "enterprise" && (
          <Button className={className} textButton={textButton} style={style} />
        )}

        {planType == "standard" &&
          (sliderValue == mua ? (
            <Button
              className={className}
              textButton={textButton}
              style={style}
            />
          ) : sliderValue > mua ? (
            <Button className="upgradeStandard" textButton="upgrade" />
          ) : (
            sliderValue < mua && (
              <DowngradePlanButton className="downgradeStandard" />
            )
          ))}
      </div>
      <div>
        <span className="textThree">{textThree}</span>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanType;
