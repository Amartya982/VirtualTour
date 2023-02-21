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
        src="https://orbix360.com/t/9g8XKxMqJubuoNhNjwwG9nBATwB3/5155886892843008/1122-king-road-property-where-4-idaho-student-murders-took-place?embed=yes"
      ></iframe>
    </div>
  );
};

export default VirtualTour;
