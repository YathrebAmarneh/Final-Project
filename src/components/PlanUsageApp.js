import Button from "./Button";
const PlanUsageApp = ({ apps, numberWithCommas }) => {
  return (
    <div>
      <h5 className="planUsageName">Plan Usage</h5>
      <div className="planUsageApp">
        {apps.map((app, index) => (
          <div className="application" key={index}>
            <h6>{app.application_name}</h6>
            <div>
              <div>
                <span>Production</span>
                <strong>{numberWithCommas(app.production_usage)} MAU</strong>
              </div>
              <div className="upgradeDiv">
                <span>Staging</span>
                {app.staging_usage > 0 && (
                  <strong>{numberWithCommas(app.staging_usage)} MAU</strong>
                )}
                {app.staging_usage === 0 && (
                  <Button className="upgradeButton" textButton="Upgrade" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanUsageApp;
