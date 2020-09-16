import {getElementAndClick, getElementAndExpectToBe, logMessage} from "../commons";
import {skipIfFails} from "varmon-jest";
import DIGITS from "../commons/numbers";
import OPERATORS from "../commons/operators";
import {clearStep} from "./clear";

const INPUT = "accessibility id:Resultado";

jest.setTimeout(120000);

const TIMEOUT = 1250;

const divisionStep = async () => {

  skipIfFails();

  const expectedValue = "5";

  logMessage("Inserting number 1");
  await getElementAndClick(DIGITS.ONE, TIMEOUT);

  logMessage("Inserting number 5");
  await getElementAndClick(DIGITS.FIVE, TIMEOUT);

  logMessage("Click at division operator");
  await getElementAndClick(OPERATORS.DIVISION, TIMEOUT);

  logMessage("Inserting number 3");
  await getElementAndClick(DIGITS.THREE, TIMEOUT);

  logMessage("Click at equal operator");
  await getElementAndClick(OPERATORS.EQUAL, TIMEOUT);

  logMessage("Verify input number");
  await getElementAndExpectToBe(INPUT, expectedValue);

  await clearStep();

}

const divisionByZeroStep = async () => {

  skipIfFails();

  const expectedValue = "Erro";

  logMessage("Inserting number 3");
  await getElementAndClick(DIGITS.THREE, TIMEOUT);

  logMessage("Click at division operator");
  await getElementAndClick(OPERATORS.DIVISION, TIMEOUT);

  logMessage("Inserting number 0");
  await getElementAndClick(DIGITS.ZERO, TIMEOUT);

  logMessage("Click at equal operator");
  await getElementAndClick(OPERATORS.EQUAL, TIMEOUT);

  logMessage("Verify input number");
  await getElementAndExpectToBe(INPUT, expectedValue);

}

export function divisionSpec() {
  describe("Divisao", function() {
    it("deve trazer 5 como resultado da divisao de 15 por 3", divisionStep);
    it("deve trazer a mensagem - 'Erro' quando houver uma divisao por zero", divisionByZeroStep)
  });
}


