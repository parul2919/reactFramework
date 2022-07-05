/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import { confirmPopStyle } from "./ConfirmPopOverStyle";

const ConfirmPopover = (props) => {
  const { takenAction, index, classList, children, wrapperClass, message } =
    props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popno, setPopno] = React.useState(-1);

  const useStyles = makeStyles(() => ({
    paper: confirmPopStyle,
  }));

  const handleClose = () => {
    setAnchorEl(null);
    setPopno(-1);
  };
  const confirmAction = () => {
    takenAction();
    setAnchorEl(null);
    setPopno(-1);
  };
  const comfirmPopover = (event) => {
    setAnchorEl(event.currentTarget);
    setPopno(index || 1);
  };
  const open = Boolean(anchorEl);

  const classes = useStyles();
  const popN = index || 1;
  return (
    <div className={wrapperClass}>
      <button
        className={classList}
        type="button"
        onClick={(e) => comfirmPopover(e)}
        aria-describedby="confirmPopover"
      >
        {children}
      </button>
      {popno === popN && (
        <Popover
          classes={{ root: classes.root, paper: classes.paper }}
          id="confirmPopover"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div className="popover-wrapper">
            <p className="text-center">{message}</p>
            <button type="button" onClick={confirmAction}>
              Confirm
            </button>
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </div>
        </Popover>
      )}
    </div>
  );
};

export default ConfirmPopover;
