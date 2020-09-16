import {getElementAndClick, getElementAndExpectToBe, logMessage} from "../commons";
import {skipIfFails} from "varmon-jest";
import DIGITS from "../commons/numbers";
import OPERATORS from "../commons/operators";
import {clearStep} from "./clear";

const INPUT = "accessibility id:Resultado";

jest.setTimeout(120000);

const TIMEOUT = 1250;

const multiplyStep = async () => {

  skipIfFails();

  const expectedValue = "9";

  logMessage("Inserting number 3");
  await getElementAndClick(DIGITS.THREE, TIMEOUT);

  logMessage("Click at multiply operator");
  await getElementAndClick(OPERATORS.MULTIPLY, TIMEOUT);

  logMessage("Inserting number 3");
  await getElementAndClick(DIGITS.THREE, TIMEOUT);

  logMessage("Click at equal operator");
  await getElementAndClick(OPERATORS.EQUAL, TIMEOUT);

  logMessage("Verify input number");
  await getElementAndExpectToBe(INPUT, expectedValue);

  await clearStep();

}

const multiplyByZeroSpec = async () => {

  skipIfFails();

  const expectedValue = "0";

  logMessage("Inserting number 2");
  await getElementAndClick(DIGITS.TWO, TIMEOUT);

  logMessage("Click at multiply operator");
  await getElementAndClick(OPERATORS.MULTIPLY, TIMEOUT);

  logMessage("Inserting number 0");
  await getElementAndClick(DIGITS.ZERO, TIMEOUT);

  logMessage("Click at equal operator");
  await getElementAndClick(OPERATORS.EQUAL, TIMEOUT);

  logMessage("Verify input number");
  await getElementAndExpectToBe(INPUT, expectedValue);

  await clearStep();

}

export function multiplySpec() {
  describe("Multiplicacao", function() {
    it("deve trazer 9 como resultado da multiplicacao de 3 x 3", multiplyStep);
    it("deve trazer 0 como resultado da multiplicacao de 2 x 0", multiplyByZeroSpec)
  });
}


