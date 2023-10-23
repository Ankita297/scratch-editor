import React from "react";
import { connect } from "react-redux";
import { Visibility } from "@material-ui/icons";

const Show = ({ character, comp_id }) => {
  // To handle show component
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    el.style.display = "inline-block";
  };

  return (
    <>
      <div id={comp_id} onClick={() => handleDisplay()}>
        <Visibility className="mr-1" />
      </div>
    </>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Show);
