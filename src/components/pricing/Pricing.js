import React from "react";
import "./Pricing.css";
export const Pricing = () => {
  return (
    <div id="pricing-container">
      <h1>Pricing</h1>
      <div id="pricing-container-title">
        <h2>Pricing of Our Agency</h2>
      </div>
      <div id="pricing-container-small">
        <div id="pricing-container-small-left">
          <h1>Starter pack</h1>
          <ul>
            <li>Trip</li>
            <li>Hotel</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>
          <div id="pricing-left-price">2100$</div>
        </div>

        <div id="pricing-container-small-right">
          <h1>Luxury pack</h1>
          <ul>
            <li>Starter Pack</li>
            <li>Flights</li>
            <li>Cruise trip</li>
            <li>Cruise trip</li>
          </ul>
          <div id="pricing-right-price">4200$</div>
        </div>
      </div>
    </div>
  );
};
