import React, { useEffect, useState } from "react";
import './headericon.css';

const Headericon = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const response = await fetch(
          "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config"
        );
        const data = await response.json();
        
        // Log the fetched data to check the structure
        console.log("Fetched data:", data);

        // Access the page_config array from the fetched data
        const pageConfig = data[0]?.page_config || [];

        // Log the page_config to inspect the structure
        console.log("Page Config:", pageConfig);

        // Find the item with id "1" in the page_config array
        const item = pageConfig.find((item) => item.id === "1");

        // Log the item to ensure you're finding the correct object
        console.log("Item with id 1:", item);

        if (item && item.props) {
          setIcons(item.props); // Set the props array as icons
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchIcons();
  }, []);

  return (
    <div className="container">
      {icons.map((icon, index) => (
        <div className="card" key={index}>
          <img src={icon.iconUrl} alt={icon.iconText} className="icon-image" />
          <p className="icon-text">{icon.iconText}</p>
        </div>
      ))}
    </div>
  );
};

export default Headericon;
