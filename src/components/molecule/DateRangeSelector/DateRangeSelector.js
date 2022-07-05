import React from "react";
import { DateRangePicker, createStaticRanges } from "react-date-range";
import styled from "styled-components";
import { staticDateRanges } from "./DateRanges";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; // theme css file
import Buttons from "../../../common/style/theme/buttons";
import styles from "./DateRangeSelector.style";

const DateRangeSelector = (props) => {
  const { className, closeDatePicker, dateRange, handleDateSelect } = props;

  // need to check these 2 buttons
  const handleButtonClose = () => {
    closeDatePicker(dateRange[0], "date");
  };

  // need to check
  const handleSelect = (ranges) => {
    handleDateSelect(ranges);
  };
  const staticRanges = createStaticRanges(staticDateRanges);
  return (
    <div className={`${className}`}>
      <DateRangePicker
        onChange={handleSelect}
        showSelectionPreview={false}
        moveRangeOnFirstSelection={false}
        months={2}
        inputRanges={[]}
        ranges={dateRange}
        direction="horizontal"
        editableDateInputs
        staticRanges={staticRanges}
        startDatePlaceholder="Start Date"
        endDatePlaceholder="End Date"
      />
      <button
        className="button button--grey submit-date"
        onClick={handleButtonClose}
        type="button"
      >
        Submit
      </button>
    </div>
  );
};

export default styled(DateRangeSelector)`
  ${styles}${Buttons}
`;
