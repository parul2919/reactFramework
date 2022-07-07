import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    "& > *": {
      marginTop: theme.spacing(2),
    },
    "& .Mui-selected": {
      backgroundColor: "#ffc107",
    },
  },
  pager: {
    "& .MuiPaginationItem-root": {
      minWidth: "25px",
      height: "25px",
    },
  },
}));

const paginationAtom = (props) => {
  const classes = useStyles();
  const {
    variant,
    shape,
    showFirstButton,
    showLastButton,
    count,
    page,
    paginationClick,
  } = props;
  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        defaultPage={1}
        page={page}
        variant={variant}
        shape={shape}
        className={classes.pager}
        siblingCount={1}
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        onChange={paginationClick}
      />
    </div>
  );
};

export default paginationAtom;
