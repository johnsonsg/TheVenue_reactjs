import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50622.991235487476!2d-77.50285796233683!3d37.532983469109446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b111095799c9ed%3A0xbfd83e6de2423cc5!2sRichmond%2C+VA!5e0!3m2!1sen!2sus!4v1560271985040!5m2!1sen!2sus" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        title="Richmond, VA"
        allowFullScreen
        ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
