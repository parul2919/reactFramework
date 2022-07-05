import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";

const useStyles = makeStyles(() => ({
  formControl: {
    marginRight: "10px",
    width: "120px",
    background: "#fff",
  },
  inputLabel: {
    fontSize: "14px",
    top: "-7px",
    left: "-4px",
    textTransform: "capitalize",
  },
  root: {
    padding: "10px",
  },
  iconOutlined: {
    right: "0px",
  },
}));

const SelectBox = (props) => {
  const classes = useStyles();
  const {
    label,
    name,
    options,
    id,
    getSelectClicked,
    isResetFilter,
    selectedCountry,
    disabled,
  } = props;
  const [filter, setFilter] = useState(selectedCountry || "");
  const handleChange = (e, filterId) => {
    getSelectClicked(e, filterId);
    setFilter(e.target.value);
  };
  useEffect(() => {
    if (isResetFilter) {
      setFilter([]);
    }
  }, [isResetFilter]);
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="demo-label" className={classes.inputLabel}>
        {label}
      </InputLabel>
      <Select
        labelId="demo-label"
        id="demo-select"
        value={filter}
        onChange={handleChange}
        disabled={disabled}
        label={name}
        inputProps={{
          name,
          id: "filled-age-native-simple",
        }}
        classes={{
          iconOutlined: classes.iconOutlined,
          root: classes.root,
        }}
      >
        {options && Array.isArray(options) ? (
          options.map((item, index) => (
            <MenuItem value={item} key={index} className={classes.menu} id={id}>
              {item}
            </MenuItem>
          ))
        ) : (
          <MenuItem value={options} className={classes.menu} id={id}>
            {options}
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

const mapStateToProps = (state) => ({
  updatedFilter: state.search.currentFilter,
  appliedFilter: state.search.appliedFilter,
});

export default connect(mapStateToProps)(SelectBox);
export { SelectBox };
