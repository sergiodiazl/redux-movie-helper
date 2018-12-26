
import React from "react";
import InputRange from "react-input-range";

import 'react-input-range/lib/css/index.css';
import "./Slider.css"


class Slider extends React.Component {
 /* constructor(props){
    super(props);
    this.state={
      value:this.props.data.value,
    }
  }
 */
  

  render() {
    const {min,max,value}=this.props.data;
    const {label}=this.props;
    const onSliderChange=range=>{
      this.props.onSliderChange({
        type: this.props.data.label,
        value: range
      });
    }
    return (
      <div className="slider">
        <label>{label}</label>
        <InputRange
       onChange={onSliderChange}
       maxValue={max}
       
       minValue={min}
       value={value}
       allowSameValues={true}
       
        />
      </div>
    )
  }
}

export default Slider;