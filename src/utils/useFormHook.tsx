import React, { useState } from "react";
import { objectValueString } from "../models/types/common";
import { IValidator } from "./Validator";

const useFormHook = (initialState = {}, validators: Map<string,IValidator>) => {
  const [formData, setFormData] = useState(initialState);

  const inValidRules: Map<string, objectValueString> = new Map();

  const handleInputChange = (e:  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const validateName = e.target.name;
    const formDataCopy = { ...formData, [e.target.name]: e.target.value };
    validateInput(formDataCopy);
    setFormData(formDataCopy);
  };

  const validateInput(formData: objectValueString):Map<string, objectValueString> => {
    const InValidateRuls: Map<string, objectValueString> = new Map();
    Object.keys(formData).forEach((key)=> {
      
    })
    return InValidateRuls
  }

  return { formData, handleInputChange, inValidRules };
};

export default useFormHook;
