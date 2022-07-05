import * as React from "react";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 0,
    height: "34px",
    padding: "12px",
    width: "50px",
  },
  thumb: {
    borderRadius: 0,
    height: "14px",
    width: "14px",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.5)",
    backgroundColor: "#fff",
  },
  track: {
    borderRadius: 0,
    backgroundColor: "#d8d8d8",
  },
}));
export default function BasicSwitches(props) {
  const { toggleSwitch, checked } = props;
  const classes = useStyles();
  const handleChange = () => {
    toggleSwitch();
  };
  return (
    <div>
      <Switch
        classes={{
          root: classes.root,
          thumb: classes.thumb,
          track: classes.track,
        }}
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      Show Favorites
    </div>
  );
}
