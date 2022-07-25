import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import styles from "./AboutForm.style";
import formElements from "../../../common/style/theme/formElement";

const AboutForm = (props) => {
  const { className } = props;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={`form-wrapper ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="form-block">
        <formElements.Input
          {...register("firstName")}
          placeholder="first name"
        />
        <formElements.Input
          {...register("lastName")}
          placeholder="last name"
          className="ml-30"
        />
        <formElements.Input
          {...register("department")}
          placeholder="department"
        />
        <formElements.Select {...register("gender")} className="ml-30">
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </formElements.Select>
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};

export default styled(AboutForm)`
  ${styles}${formElements}
`;
