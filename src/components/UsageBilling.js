import { useState, useEffect } from "react";
import axios from "axios";
import OrganizationInformation from "./OrganizationInformation";
import PlanDetails from "./PlanDetails";
import CurrPaymentMethod from "./CurruntPaymentMethodh";
import Invoices from "./Invoices";
import SubscriptionCancellation from "./SubscriptionCancellation";

const UsageBilling = ({ className, id }) => {
  const [data, setdata] = useState([]);

  const [isFetch, setIsFetch] = useState(true);

  const getData = async () => {
    setIsFetch(true);
    const response = await axios.get(
      "https://mocki.io/v1/cffdf9e2-36af-42b7-ae34-6bc7f197169f"
    );
    setdata(response.data);
    setIsFetch(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isFetch) {
    return "Data is Loading ...";
  }

  return (
    <div className={className}>
      <div id={id}>
        <OrganizationInformation data={data} />
        <PlanDetails data={data} />
        <CurrPaymentMethod data={data} />
        <Invoices data={data} />
        <SubscriptionCancellation />
      </div>
    </div>
  );
};

export default UsageBilling;
