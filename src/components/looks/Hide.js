import { VisibilityOff } from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";

const Hide = ({ character, comp_id }) => {
  // To handle hide component
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    console.log(el.style);
    el.style.display = "none";
  };
  return (
    <>
      <div id={comp_id} onClick={() => handleDisplay()}>
        <VisibilityOff />
      </div>
    </>
  );
};

// mapping state to props
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Hide);
