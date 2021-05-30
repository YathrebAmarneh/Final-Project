import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const HorizontalButtonGroup = ({ buttons, onClick, perMonthCost }) => {
  return (
    <div>
      <div class="switches-container">
        <input
          type="radio"
          id="switchMonthly"
          name="switchPlan"
          value="Monthly"
          checked="checked"
        />
        <input
          type="radio"
          id="switchAnnually"
          name="switchPlan"
          value="Annually"
        />
        <label
          for="switchMonthly"
          onClick={() => {
            onClick("monthly");
          }}
        >
          Monthly
        </label>
        <Tippy
          placement="right"
          content={<span style={{ color: "#fff" }}>SAVE 15%</span>}
        >
          <label
            for="switchAnnually"
            onClick={() => {
              onClick("yearly");
            }}
          >
            Annually
          </label>
        </Tippy>
        <div class="switch-wrapper">
          <div class="switch">
            <div>Monthly</div>

            <div>Annually</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalButtonGroup;
