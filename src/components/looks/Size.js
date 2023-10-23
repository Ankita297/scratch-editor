import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const Size = ({ character, comp_id }) => {
  const [state, setState] = useState({
    scale: 1,
  });
  // To change Size of Sprint
  const changeSize = () => {
    const el = document.getElementById(character.active);
    el.style.transform = `scale(${state.scale})`;
  };

  return (
    <Paper elevation={3}>
      <div className="text-center rounded bg-purple-100 border border-purple-400 text-xs cursor-pointer">
        <div className="grid grid-cols-2 my-2">
          <div>Size:</div>
          <input
            style={{ width: "50px" }}
            className="mx-1 p-1 py-0 text-center"
            type="number"
            value={state.scale}
            onChange={(e) =>
              setState({ ...state, scale: parseInt(e.target.value) })
            }
          />
        </div>
        <div
          id={comp_id}
          className="flex  bg-purple-400 my-2 mx-2 p-1 rounded text-xs cursor-pointer text-center"
          onClick={() => changeSize()}
        >
          <p className="text-center"> {state.scale}</p>
        </div>
      </div>
    </Paper>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Size);
