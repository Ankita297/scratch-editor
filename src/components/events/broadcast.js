import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useSnackbar } from "notistack";

const BroadcastMessage = ({ comp_id }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [state, setState] = useState({
    message: "",
  });

  /* Display Snackbar */
  const handleClick = () => {
    enqueueSnackbar(state.message, { variant: "info" });
    setTimeout(() => {
      closeSnackbar();
    }, 2000);
  };

  return (
    <Paper elevation={3}>
      <div className="text-center rounded bg-yellow-100 border border-yellow-400 py-2 my-2 text-xs cursor-pointer">
        <div className="grid grid-cols-2 my-2">
          <div>Message</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={state.message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ message: e.target.value });
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex bg-yellow-400 my-2 mx-6 p-2 rounded text-xs cursor-pointer text-center"
          onClick={() => state.message.length > 0 && handleClick()}
        >
          {`Broadcast ${state.message}`}
        </div>
      </div>
    </Paper>
  );
};

export default BroadcastMessage;
