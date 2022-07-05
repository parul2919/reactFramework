import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      margin: "0",
      font: "inherit",
      textTransform: "capitalize",
      backgroundColor: "inherit",
      color: "inherit",
      padding: "6px 2px",
      textAlign: "center",
    },
  },
  outlined: {
    borderRadius: 0,
  },
  link: {
    textDecoration: "underline",
  },
  contained: {
    boxShadow: "none",
    "&:focus, &:hover": {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
  },
  text: {},
}));

const ButtonAtom = (props) => {
  const classes = useStyles();
  const { label, buttonClickHandler, variant, linkButton, to } = props;
  const classNames = {
    link: classes.link,
    outlined: classes.outlined,
    contained: classes.contained,
  };
  const buttonClass = classNames[variant] || classes.text;
  const onButtonClick = (event) => {
    buttonClickHandler && buttonClickHandler(event);
  };
  return (
    <div className={classes.root}>
      {linkButton ? (
        <Button
          variant={variant}
          className={buttonClass}
          onClick={onButtonClick}
          component={Link}
          to={to}
        >
          {label}
        </Button>
      ) : (
        <Button
          variant={variant}
          className={buttonClass}
          onClick={onButtonClick}
        >
          {label}
        </Button>
      )}
    </div>
  );
};

export default ButtonAtom;
