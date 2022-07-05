import React, { useState, forwardRef, useImperativeHandle } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
}));

const FlashMessage = forwardRef((props, ref) => {
  const classes = useStyles();
  const { duration, variant, wrapperClass, callback } = props;
  const [flashMessageObj, setFlashMessageObj] = useState({
    msg: "",
    severity: "",
  });

  useImperativeHandle(ref, () => ({
    show(msg, severity) {
      if (msg) {
        setFlashMessageObj({ msg, severity });
        setTimeout(() => {
          setFlashMessageObj({ ...flashMessageObj });
          callback && callback();
        }, duration || 3000);
      }
    },
  }));

  return (
    flashMessageObj.msg && (
      <div className={`${classes.root} ${wrapperClass || ""}`}>
        <Alert
          variant={variant || "filled"}
          severity={flashMessageObj.severity || "info"}
          classes={{ root: "flash-msg" }}
        >
          {flashMessageObj.msg}
        </Alert>
      </div>
    )
  );
});

export default FlashMessage;
