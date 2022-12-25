import React from "react";
import { CheckBoxWrapper } from "../styledComponents/CheckBoxWrapper";
import { Label } from "../styledComponents/Label";

const PasswordValidation = ({ list }) => {
  return (
    <CheckBoxWrapper>
      <input
        onChange={list.onChange}
        checked={list.checked}
        name={list.name}
        type="checkbox"
      />
      <Label>{list.label}</Label>
    </CheckBoxWrapper>
  );
};

export default PasswordValidation;
