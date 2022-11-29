import { objectValueString } from "../models/types/common";
import { IValidateRule } from "./ValidateRule";

export interface IValidator {
  column: string,
  validRule: Map<string, IValidateRule>;
  setValidRule?: (ruleName: string, validateRule: IValidateRule) => void;
  getValidRule?: (ruleName: string) => IValidateRule | undefined;
  getAllInvalidRule?: (value: string, requiredRule: Set<string>) => objectValueString;
}


export default class Validator implements IValidator {
  column: string;
  validRule: Map<string, IValidateRule>;
  readonly inValidRule: { [key: string]: string } = {};;

  constructor(
    column: string,
    validRule: Map<string, IValidateRule>,
  ) {
    this.column = column;
    this.validRule = validRule;
  }

  setValidRule(ruleName: string, validateRule: IValidateRule) {
    this.validRule.set(ruleName, validateRule);
  }

  getValidRule(ruleName: string) {
    return this.validRule.get(ruleName);
  }

  getAllInvalidRule(value: string, requiredRule: Set<string>): objectValueString { 
    requiredRule.forEach(required => {
      const currentValidRule = this.getValidRule(required);
      if(currentValidRule) {
        if(!currentValidRule.regex.test(value)) {
          this.inValidRule[required] = currentValidRule.errorMessage;
        }
      }
    })
    return this.inValidRule;
  }
}
