import {getElementAndClick, getElementAndExpectToBe, logMessage} from "../commons";
import {skipIfFails} from "varmon-jest";
import DIGITS from "../commons/numbers";
import OPERATORS from "../commons/operators";
import {clearStep} from "./clear";

const INPUT = "accessibility id:Resultado";

jest.setTimeout(120000);

const TIMEOUT = 1250;

const subractStep = async () => {

  skipIfFails();

  const expectedValue = "2";

  logMessage("Inserting number 4");
  await getElementAndClick(DIGITS.FOUR, TIMEOUT);

  logMessage("Click at subtract operator");
  await getElementAndClick(OPERATORS.SUBTRACT, TIMEOUT);

  logMessage("Inserting number 2");
  await getElementAndClick(DIGITS.TWO, TIMEOUT);

  logMessage("Click at equal operator");
  await getElementAndClick(OPERATORS.EQUAL, TIMEOUT);

  logMessage("Verify input number");
  await getElementAndExpectToBe(INPUT, expectedValue);

}

export function subtractSpec() {
  describe("Subtracão", function() {
    it("deve retornar 2 como resultado da subtracao de 4 - 2", subractStep);
  });
}


