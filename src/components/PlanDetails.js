import { RiCarLine } from "react-icons/ri";
import { VscRocket } from "react-icons/vsc";
import { TiPlaneOutline } from "react-icons/ti";
import PlanUsageApp from "./PlanUsageApp";
import ChangePlanButton from "./ChangePlanButton";
import "react-circular-progressbar/dist/styles.css";
import CircularProgressChart from "./CircularProgressChart";
import MonthlyActiveUserAllowedMonthlyCost from "./MonthlyActiveUserAllowedMonthlyCost";

const PlanDetails = ({ data }) => {
  const apps = data.organization.plan_details.applications;
  const mua = data.organization.plan_details.mua;
  const arr = [];
  apps.map((app) => {
    arr.push(app.production_usage);
    arr.push(app.staging_usage);
  });

  const t = arr.reduce((total, num) => {
    return total + num;
  });
  const percentage = (t / mua) * 100;
  //   const percentage = 170
  const plan_type = data.organization.plan_details.plan_type;
  //   const plan_type = "standard"
  //   const plan_type = "enterprise"

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div>
      <h5 className="planDetailsLabel">Plan Details</h5>
      <div className="planDetailsContainer">
        <div className="changeUsagePlan">
          <div className="changePlan">
            <div>
              {plan_type === "trial" && (
                <div>
                  <RiCarLine color="#f00" size="1.5rem" />
                  <p>
                    <span> You are on the </span>
                    <strong style={{ color: "#f00" }}>Free Plan</strong>
                  </p>
                </div>
              )}

              {plan_type === "standard" && (
                <div>
                  <TiPlaneOutline color="#00cc66" size="1.5rem" />
                  <p>
                    <span> You are on the </span>
                    <strong style={{ color: "#00cc66" }}>Standard Plan</strong>
                  </p>
                </div>
              )}

              {plan_type === "enterprise" && (
                <div>
                  <VscRocket color="#6600cc" size="1.5rem" />
                  <p>
                    <span> You are on the </span>
                    <strong style={{ color: "#6600cc" }}>
                      Enterprise Plan
                    </strong>
                  </p>
                </div>
              )}

              <ChangePlanButton
                data={data}
                numberWithCommas={numberWithCommas}
              />
            </div>
            {plan_type === "trial" && (
              <p
                className="expiryDate"
                style={{ color: "#f00", fontSize: "12px" }}
              >
                Your plan expires on{" "}
                {data.organization.plan_details.plan_expiry}
              </p>
            )}
          </div>
          <MonthlyActiveUserAllowedMonthlyCost
            data={data}
            numberWithCommas={numberWithCommas}
          />

          <hr />
          <div className="planUsage">
            <PlanUsageApp
              textButton="Upgrade"
              apps={data.organization.plan_details.applications}
              numberWithCommas={numberWithCommas}
            />
          </div>
        </div>

        <div className="circularChart">
          <div>
            <strong>Plan Total Usage</strong>
          </div>
          <CircularProgressChart percentage={percentage} />
          <div>
            <strong style={{ color: "#b8b8b8" }}>Total Used</strong>
          </div>
          <div>
            <span>
              {plan_type === "trial" ? (
                <strong style={{ color: "red" }}>{numberWithCommas(t)}</strong>
              ) : (
                <strong>{t}</strong>
              )}
              <span> out of </span>
              <strong>
                {" "}
                {numberWithCommas(data.organization.plan_details.mua)} MAU
              </strong>
            </span>
          </div>

          <div>
            <span className="reset">Resets May 01, 2021 at 3:00 am</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
