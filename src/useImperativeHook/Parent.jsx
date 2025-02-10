import * as React from "react";
import ChildComponent from "./ChildComponent";
import Button from "@mui/material/Button";

export default function Parent() {
  const data = {
    APJ: { countries: ["India", "Pakistan"], rupees: ["rupee", "dollar"] },
    BPJ: { countries: ["Thailand", "Vietnam"], rupees: ["nan", "euro"] }
  };
  const [options, setOptions] = React.useState({
    market: [],
    rupees: []
  });

  const ref = React.useRef();

  const handleRegionChange = event => {
    const region = event.target.value;

    // Dynamically set market and rupees options based on selected region
    const regionData = data[region];
    setOptions({
      ...options,
      market: regionData ? regionData.countries : [],
      rupees: regionData ? regionData.rupees : []
    });
  };

  const fields = [
    {
      id: "region",
      label: "Region",
      options: Object.keys(data) // List of regions (APJ, BPJ)
    },
    {
      id: "market",
      label: "Market",
      options: options["market"] // Market options will be dynamically populated based on region
    },
    {
      id: "rupees",
      label: "Rupees",
      options: options["rupees"] // Rupees options will be dynamically populated based on region
    }
  ];

  const handleClick = () => {
    if (ref.current) {
      const state = ref.current.getState();
      console.log("State from Child:", state);
    }
  };

  return (
    <div>
      <ChildComponent
        ref={ref}
        fields={fields}
        onRegionChange={handleRegionChange}
      />
      <Button onClick={handleClick}>Get State</Button>
    </div>
  );
}
