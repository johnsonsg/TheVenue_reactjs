import React from "react";
import Fade from "react-reveal/Fade";

import steelersLogo from  "../../resources/images/steelers.png";

const Footer = () => {
  return (
    <footer className="bck_dkblack">
      <Fade delay={500}>
      <div>
        <img 
          src={ steelersLogo }
          style={{width:"200px"}}
          alt="Steelers"
      /></div>

        {/* <div className="font_righteous footer_logo_venue">Pittsburgh Steelers</div> */}
        <div className="footer_copyright">
          Steelers Football 2019 Season. All Rights Revserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;