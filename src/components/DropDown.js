import React, { useState } from "react";

const DropDown = (props) => {
  const resetValues = () => {
    const rep = document.getElementById("rep");
    const state = document.getElementById("state");

    rep.value = "value";
    state.value = "value";
  };

  const [selectedState, setSelectedState] = useState("");
  const [selectedRep, setSelectedRep] = useState("");

  const onStateHandler = (event) => {
    setSelectedState(event.target.value);
  };

  const onRepHandler = (event) => {
    setSelectedRep(event.target.value);
  };

  const onSearchHandler = () => {
    if (
      selectedState !== "" &&
      selectedRep !== "" &&
      selectedState !== "value" &&
      selectedRep !== "value"
    ) {
      const selectedValues = {
        rep: selectedRep,
        state: selectedState,
      };
      props.onGetValues(selectedValues);
      setSelectedState("");
      setSelectedRep("");

      resetValues();
    }
  };

  return (
    <div className="flex v-center">
      <div className="px-1">
        <label htmlFor="rep">Search By:</label>
        <select className="max-height ml-1" id="rep" onChange={onRepHandler}>
          <option value="value">Select</option>
          <option value="rep">Representative</option>
          <option value="sen">Senator</option>
        </select>
      </div>
      <div className="px-1 max-height ">
        <label htmlFor="state">Choose a State:</label>
        <select className="ml-1" id="state" onChange={onStateHandler}>
          <option value="value">Select</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
      <div>
        <button className="button" onClick={onSearchHandler}>
          Search
        </button>
      </div>
    </div>
  );
};

export default DropDown;
