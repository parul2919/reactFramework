import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import loaderImg from "../../static/img/loader.gif";

const useStyles = makeStyles(() => ({
  root: {
    width: "50px",
    height: "50px",
    margin: "20px",
    display: "inline-block",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
  },
}));

const LoaderGif = (props) => {
  const classes = useStyles();
  const { classWrapBg, imgWidth } = props;

  return (
    <div className={`${classes.wrapper} ${classWrapBg || ""}`}>
      <img src={loaderImg} alt="loading" width={`${imgWidth || 400}px`} />
    </div>
  );
};

export default LoaderGif;
