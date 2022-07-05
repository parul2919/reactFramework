import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  clonedInfo: {
    display: "flex",
    alignItems: "center",
    marginTop: "0px",
    cursor: "pointer",
  },
  infoIcon: {
    fontSize: "22px",
    fill: "#666",
  },
  infoText: {
    paddingLeft: "4px",
    fontSize: "12px",
    lineHeight: "14px",
  },
}));

const ToolTipAtom = (props) => {
  const { info } = props;
  const classes = useStyles();

  const CustomTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: "#666",
      boxShadow: theme.shadows[1],
      fontSize: 12,
      width: "290px",
    },
  }))(Tooltip);

  return (
    <CustomTooltip title={info} placement="right-end">
      <div className={classes.clonedInfo}>
        <InfoOutlinedIcon className={classes.infoIcon} />
      </div>
    </CustomTooltip>
  );
};

export default ToolTipAtom;
