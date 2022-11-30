import React, { useState } from "react";
import { objectValueString } from "../../../models/types/common";
import useFormHook from "../../../utils/useFormHook";
import Validator, { IValidator } from "../../../utils/Validator";
import validatorObject from "./validator";

export interface IFormData {
  selectType: string;
  emailType: string;
  inputType: string;
}

export default function Index() {
  const { formData, handleInputChange, inValidRules, validateAllRules } =
    useFormHook(
      { selectType: "", emailType: "", inputType: "" } as IFormData,
      validatorObject
    );

  const emailTypeInvalid = inValidRules.get("emailType");
  const selectTypeInvalid = inValidRules.get("selectType");
  const inputTypeInvalid = inValidRules.get("inputType");

  const renderValidaion = (selectType: string) => {
    const invalidObject = inValidRules.get(selectType);
    if(invalidObject) {
      const objectArray = Object.entries(invalidObject);
      return objectArray.map(([key, value], index) => <div key={index}>{value}</div>);
    }

  }
  return (
    <form>
      <label>
        Pick your favorite flavor:
        <select
          value={formData.selectType}
          onChange={handleInputChange}
          name="selectType"
        >
          <option value="">please choose</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      {renderValidaion('selectType')}
      <br />
      <label>
        Member email:
        <input
          name="emailType"
          type="email"
          value={formData.emailType}
          onChange={handleInputChange}
        />
      </label>
      {renderValidaion('emailType')}
      <br />
      <label>
        Number of guests:
        <input
          name="inputType"
          type="number"
          value={formData.inputType}
          onChange={handleInputChange}
        />
      </label>
      {renderValidaion('inputType')}
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          validateAllRules();
        }}
      >
        submit
      </button>
    </form>
  );
}
