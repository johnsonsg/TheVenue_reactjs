import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">


      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12145.151536484622!2d-80.0157603!3d40.4467648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8590d1891f55b9c8!2sHeinz+Field!5e0!3m2!1sen!2sus!4v1560285625196!5m2!1sen!2sus" 
      width="100%" 
      height="500px" 
      frameBorder="0"
      title="Pittsburgh PA" 
      allowFullScreen
      ></iframe>

      <div className="location_tag">
        <div>Heinz Field</div>
      </div>
    </div>
  );
};

export default Location;
