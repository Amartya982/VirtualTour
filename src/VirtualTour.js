import React from "react";

const VirtualTour = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        width="100%"
        height="100%"
        allowvr="yes"
        allow="xr-spatial-tracking"
        allowfullscreen="yes"
        frameborder="0"
        src="https://orbix360.com/t/PxJB2QKDOuaRbPgIbfyfXJUCPJw1/4545543988576256/frays-court-demo?embed=yes"
      ></iframe>
    </div>
  );
};

export default VirtualTour;
