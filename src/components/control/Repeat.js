import React, { useState } from "react";
import { connect } from "react-redux";
import { setRepeat } from "../../redux/events/eventActions";
import Paper from "@material-ui/core/Paper";

const Repeat = ({ comp_id, events, set_repeat }) => {
  const [repeat, setStateRepeat] = useState(0);

  // Set Repeat value for current component
  function handleChange(e) {
    let val = parseInt(e.target.value);
    setStateRepeat(val);
    let curr = events.repeat;
    curr[comp_id] = val;
    set_repeat(curr);
  }
  return (
    // Repeat Component
    <Paper elevation={3}>
      <div className=" text-center rounded bg-red-100 border border-red-400 py-2 my-2 text-xs cursor-pointer">
        <div className="grid grid-cols-2 my-2">
          <div>Repeat</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={repeat}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex bg-red-400 my-2 mx-6 p-2 rounded text-xs cursor-pointer text-center"
        >
          Repeat By {repeat}
        </div>
      </div>
    </Paper>
  );
};

// map state to component
const mapStateToProps = (state) => {
  return {
    events: state.event,
  };
};

// map function to component
const mapDispatchToProps = (dispatch) => {
  return {
    set_repeat: (value) => dispatch(setRepeat(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repeat);
