import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import {
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
} from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles(() => ({
  formControl: {
    background: "#fff",
    border: " 1px solid #6f6f6f",
    width: "100%",
    borderRadius: "3px",
    "&:hover": {
      boxShadow: "0px 2px 5px -1px #d6d6d6",
    },
  },
  root: {
    padding: "5px",
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
  root1: {
    marginTop: "8px !important",
    fontSize: "13px",
  },
  iconFilled: {
    right: "0px",
    top: -1,
  },
  root2: {
    fontSize: "12px",
    top: "-7px",
    left: "-4px",
    textTransform: "capitalize",
  },
  shrink: {
    fontSize: "13px",
    top: "-26px",
    left: "-6px",
  },
  menu: {
    marginBottom: "2px",
    padding: "5px 10px",
    "&.Mui-selected": {
      background: "#ffc107",
    },
    "&:hover": {
      background: "#ffc107",
    },
  },
  ListItemText: {
    fontSize: "12px",
  },
  /* selectWrapper:{
    marginRight:'10px',
    width:'120px',
    
    '&:last-child':{
      marginRight:0,
      width:'135px'
    },
  }, */
  check: {
    display: "none",
  },
  listItem: {
    padding: 0,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelect = (props) => {
  const { label, name, options, id, getSelectClicked, obj } = props;
  const classes = useStyles();

  const handleChange = (e, selectId) => {
    getSelectClicked(e, selectId);
  };
  const selectedVal = obj.length && obj[0].id === id ? obj[0].value : [];
  return (
    <div className={classes.selectWrapper} id={name}>
      <FormControl className={classes.formControl} variant="filled">
        <InputLabel
          htmlFor="demo-mutiple-checkbox-label"
          classes={{ root: classes.root2, shrink: classes.shrink }}
          shrink={!!selectedVal.length}
          focused={false}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={selectedVal}
          label={name}
          onChange={handleChange}
          disableUnderline
          input={
            <Input
              classes={{
                root: classes.root1,
              }}
            />
          }
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          inputProps={{
            name,
          }}
          classes={{
            iconFilled: classes.iconFilled,
            root: classes.root,
          }}
        >
          {options &&
            options.map((item, index) => (
              <MenuItem
                key={index}
                value={item}
                id={id}
                classes={{ root: classes.menu }}
              >
                <Checkbox
                  checked={selectedVal.indexOf(item) > -1}
                  className={classes.check}
                />
                <ListItemText
                  primary={item}
                  classes={{
                    primary: classes.ListItemText,
                    root: classes.listItem,
                  }}
                />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

const mapStateToProps = (state) => ({
  updatedFilter: state.search.currentFilter,
  appliedFilter: state.search.appliedFilter,
});

export default connect(mapStateToProps)(MultipleSelect);
export { MultipleSelect };
