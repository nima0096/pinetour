import React from "react";
import "./Footer.css";
import { FooterFaceLogo, FooterInstaLogo, HeaderLogo } from "../../assets";

export const Footer = () => {
  return (
    <div id="footer-container">
      <div id="footer-text-container">
        <div id="footer-text-left-container">
          <HeaderLogo />
        </div>
        <div id="footer-text-right-container">
          <div>
            <FooterFaceLogo />
            <span> Facebook</span>
          </div>
          <div>
            <FooterInstaLogo />
            <span> Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
};
