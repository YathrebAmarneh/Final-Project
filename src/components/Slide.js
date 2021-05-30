import Slider from "react-input-slider";
import { useState } from "react";

const Slide = ({ axis, xmax, xstep, styles,value, onChange }) => {

  const [state, setState] = useState({ x: value });

  return (
    <div className="slider">
      <Slider
        styles={styles}
        axis={axis}
        xmax={xmax}
        xstep={xstep}
        x={state.x}
        // value={2500}
        onChange={({ x }) => {
          setState((state) => ({ ...state, x }));
          onChange(x);
        }}
      />
      <div className="maxSlider">
        <span>50,000+</span>
      </div>
    </div>
  );
};

export default Slide;
