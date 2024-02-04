//firstTimeUserPage.tsx (creates a first time user page for SwampScheduelr)
import React from "react";

//Inline style compononets to decorate subPage
const FirstTimeUserPage: React.FC = () => {

  //centers the page
  const pageContainerStyle: React.CSSProperties = {
    textAlign: "center",
  };

  //Creates header (changes font and color)
  const pageHeaderStyle: React.CSSProperties = {
    fontSize: "50px",
    fontFamily: "Palanquin, sans-serif",
    color: "#000022",
  };

  //centers content style
  const pageContentStyle: React.CSSProperties = {
    marginTop: "22px",
    textAlign: "center", 
  };

  // Adjust the font size of subheadings as needed and adds margin for better spacing
  const subheadingStyle: React.CSSProperties = {
    fontSize: "30px", 
    margin: "10px 0", 
  };

  return (
    <div style={pageContainerStyle}>
      <h1 style={pageHeaderStyle}>First Time User Page</h1>
      {/* Add content specific to the subpage */}
      <div style={pageContentStyle}>
        <div>
        <h2 style={subheadingStyle}>About the App</h2>
        <p>An open-source web app developed to help students at the University of Florida plan for classes next semester.</p>
    </div>

    <div>
        <h2 style={subheadingStyle}>Meet The Team & OSC!</h2>
        <p>Techincal Leads, Product Managers, and Metors:
            Robert Conde
            Brian Nielson
        </p>
    </div>

    <div>
        <h2>Contact Info</h2>
        <p>Files issues on our github: https://github.com/ufosc/SwampScheduler </p>
        </div>
      </div>
    </div>

  );
};

export default FirstTimeUserPage;