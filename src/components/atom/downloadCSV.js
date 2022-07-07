import React from "react";
import { CSVLink } from "react-csv";

/*
 * Converts Json array to CSV and download it
 * Props -->
 *  headers : all keys of array which we want to accept in CSV
 *  data    : Json Array
 *  fileName: The name of the downloaded csv file
 */

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
