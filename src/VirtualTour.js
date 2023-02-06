import React from "react";

const VirtualTour = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        width="100%"
        height="100%"
    
        allow="autoplay; fullscreen; microphone; camera;"
        allowFullScreen
        style={{ border: "none" }}
        src="https://panoroo.com/virtual-tours/ABNWeL42?auto_rotate=-5&scene_slider=show&slider_initial_visibility=auto&share_btn=show&like_btn=show&click_to_call_to_prompt_time=60&user_interaction_required=true&click_to_call_wait_time=300"
      ></iframe>
    </div>
  );
};

export default VirtualTour;
