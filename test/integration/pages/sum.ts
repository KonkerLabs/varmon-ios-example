import {getElementAndClick, getElementAndExpectToBe, logMessage} from "../commons";
import {skipIfFails} from "varmon-jest";
import DIGITS from "../commons/numbers";
import OPERATORS from "../commons/operators";
import {clearStep} from "./clear";

const INPUT = "accessibility id:Resultado";

const TIMEOUT = 1250;

jest.setTimeout(120000);

const sumStep = async () => {

  skipIfFails();

  const expectedValue = "4";

  logMessage("Inserting number 2");
  await getElementAndClick(DIGITS.TWO, TIMEOUT);

  logMessage("Click at sum operator");
  await getElementAndClick(OPERATORS.SUM, TIMEOUT);

  logMessage("Inserting number 2");
  await getElementAndClick(DIGITS.TWO, TIMEOUT);

  logMessage("Click at equal operator");
  await getElementAndClick(OPERATORS.EQUAL, TIMEOUT);

  logMessage("Verify input number");
  await getElementAndExpectToBe(INPUT, expectedValue);

}

export function sumSpec() {
  describe("Soma", function() {
    it("deve retornar 4 como resultado da soma de 2 + 2", sumStep);
  });
}


