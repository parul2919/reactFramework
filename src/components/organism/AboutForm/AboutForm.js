import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import styles from "./AboutForm.style";

const AboutForm = (props) => {
  const { className } = props;
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form
      onSubmit={handleSubmit(() => setData(JSON.stringify(data)))}
      className={className}
    >
      <input {...register("firstName")} placeholder="First name" />
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
};

export default styled(AboutForm)`
  ${styles}
`;
