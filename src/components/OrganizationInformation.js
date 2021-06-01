import LabelInput from "./LabelInput";
import LabelSelect from "./LabelSelect";
import TextareaLabel from "./TextareaLabel";
import Button from "./Button";
import { useState } from "react";
import Select2 from "./Select2";
import React from "react";

const OrganizationInformation = ({ data }) => {
  const primaryOrganizationContact = [
    "John Doe",
    "Daniel Wilson",
    "Thomas Taylor",
    "Robert Smith",
    "Oliver Johnson",
  ];

  const [formValue, setFormValue] = useState({
    // {field name: field value}
    organizationName: null,
    priamaryOrganizationContact: null,
    billingContact: null,
    billingAddress: null,
    vatNumber: null,
    additionalInformation: null,
  });

  const [billingOptions, setBillingOptions] = useState([
    { label: "john@doe.co", value: "john@doe.co" },
  ]);
  const [isdisabled, setIsdisabled] = useState(true);
  const [isempty, setIsempty] = useState({});

  const onChange = (e) => {
    setIsdisabled(false);
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSelect2 = (selectedOption, { name }) => {
    setIsdisabled(false);
    if (Array.isArray(selectedOption)) {
      setBillingOptions(selectedOption);
    }
    setFormValue({
      ...formValue,
      [name]: selectedOption.map((option) => option.value),
    });
  };

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}, ${typeof value}`);

      if (Array.isArray(value)) {
        setIsempty((state) => ({
          ...state,
          [key]: value.length === 0, // check if array is empty
        }));
      } else {
        setIsempty((state) => ({
          ...state,
          [key]: [null, ""].includes(value),
        }));
      }

      // if (
      //   Object.values(formValue).every((value) => {
      //     return value.length > 0;
      //   })
      // ) {
      //   setIsdisabled(true);
      // }
    }
  };

  return (
    <div className="organizationinformation">
      <div className="organizationinformationarea">
        <h5 className="organizationinformationlabel">
          Organization Information
        </h5>
        <div className="organizationinformationbox">
          <form onSubmit={onSubmit} className="organizationinformationform">
            <div className="organizationinformationcontent">
              <div className="col1">
                <LabelInput
                  name="organizationName"
                  text="Organization Name"
                  value={data.organization.name}
                  onChange={onChange}
                />
                <i
                  style={{
                    display: Boolean(isempty.organizationName)
                      ? "block"
                      : "none",
                    color: "red",
                    fontSize: "12px",
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  This field is required
                </i>

                <LabelSelect
                  name="priamaryOrganizationContact"
                  onChange={onChange}
                  text="Priamary Organization Contact"
                />

                <i
                  style={{
                    display: Boolean(isempty.priamaryOrganizationContact)
                      ? "block"
                      : "none",
                    color: "red",
                    fontSize: "12px",
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  This field is required
                </i>

                <Select2
                  onChange={onChangeSelect2}
                  name="billingContact"
                  text="Billing Contact(s)"
                  placeholder="Add your billing contact(s)"
                  options={data.organization.billing_contacts.map((val) => ({
                    value: val,
                    label: val,
                  }))}
                  value={billingOptions}
                />
                <i
                  style={{
                    display: Boolean(isempty.billingContact) ? "block" : "none",
                    color: "red",
                    fontSize: "12px",
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  This field is required
                </i>
              </div>
              <div className="col2">
                <TextareaLabel
                  onChange={onChange}
                  name="billingAddress"
                  text="Billing Address"
                  value={data.organization.billing_address}
                  rows="8"
                  cols="40"
                />
                <i
                  style={{
                    display: Boolean(isempty.billingAddress) ? "block" : "none",
                    color: "red",
                    fontSize: "12px",
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  This field is required
                </i>
              </div>
              <div className="col3">
                <LabelInput
                  onChange={onChange}
                  name="vatNumber"
                  text="VAT Number"
                  placeholder="123 456 789"
                  value={data.organization.var_number}
                />
                <i
                  style={{
                    display: Boolean(isempty.vatNumber) ? "block" : "none",
                    color: "red",
                    fontSize: "12px",
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  This field is required
                </i>
                <TextareaLabel
                  onChange={onChange}
                  name="additionalInformation"
                  text="Additional Information"
                  placeholder="Add any additional info here..."
                  value={data.organization.additional_information}
                  rows="4"
                  cols="40"
                />
                <i
                  style={{
                    display: Boolean(isempty.additionalInformation)
                      ? "block"
                      : "none",
                    color: "red",
                    fontSize: "12px",
                    paddingBottom: "3px",
                    paddingTop: "3px",
                  }}
                >
                  This field is required
                </i>
              </div>
            </div>
            <div className="savebutton">
              <Button
                disabled={isdisabled}
                style={{ backgroundColor: isdisabled ? "#E0E0E0" : "#00cc66" }}
                type="submit"
                className="button"
                textButton="Save"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrganizationInformation;
