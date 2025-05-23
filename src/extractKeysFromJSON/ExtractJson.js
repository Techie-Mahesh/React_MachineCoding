import React, { useEffect } from "react";
import invokeJsonFromKeys from "./useJson";
import sampleData from "./sample.json";

const ExtractJson = () => {
  const [data, setData] = React.useState(null);
  const result = invokeJsonFromKeys();
  useEffect(() => {
    const searchedData = result(sampleData, "todo");
    setData(searchedData);
  }, []);
  const renderData = (jsonData, parentKey = "") => {
    if (Array.isArray(jsonData)) {
      return jsonData.map((item, idx) => (
        <div key={`${parentKey}-arr-${idx}`}>
          {renderData(item, `${parentKey}-arr-${idx}`)}
        </div>
      ));
    } else if (typeof jsonData === "object" && jsonData !== null) {
      return Object.entries(jsonData).map(([key, value]) => (
        <div key={`${parentKey}-${key}`}>
          {typeof value === "object" && value !== null ? (
            <div>
              {key}: {renderData(value, `${parentKey}-${key}`)}
            </div>
          ) : (
            <div>
              {key}: {value}
            </div>
          )}
        </div>
      ));
    } else {
      return <div>{jsonData}</div>;
    }
  };
  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("data", data);
  return <div>{renderData(data)}</div>;
};

export default ExtractJson;
