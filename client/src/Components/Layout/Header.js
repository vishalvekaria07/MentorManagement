import React from "react";

function Header() {
  return (
    <header style={styleHeader}>
      <h1>Mentor Management</h1>
      <a href="./" className="btn btn-primary">Home</a>
    </header>
  );
}

const styleHeader = {
  background: "#335",
  color: "#fff",
  textAlign: "center",
  padding: "1px"
};

export default Header;
