import React from "react";
import { CSVLink } from "react-csv";

// I also attempted to make this a stateful component
// then performed a fetch to get the survey data based on this.props.surveyId
const DownloadCSV = (props) => {
  const { headers, data, fileName } = props;
  return (
    <CSVLink headers={headers} data={data} filename={fileName}>
      <button type="button" className=" btn p-1 shadow-none">
        Export
      </button>
    </CSVLink>
  );
};

export default DownloadCSV;
