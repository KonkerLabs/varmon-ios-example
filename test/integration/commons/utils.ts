import {getElement} from "varmon-jest";

type AttributesType = {
  id?: string;
  className?: string;
  text?: string;
};

export function skipIfFails() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  if (previousFailureEvent) throw new Error("SKIPPED");
}

export async function scroll(initialY = 500, finalY = 50): Promise<void> {
  await browser.pause(2000);

  console.log("scrolling");

  // @ts-ignore
  await browser.touchPerform([
    {
      action: "press",
      options: {x: 100, y: initialY},
    },
    {
      action: "wait",
      options: {ms: 1000},
    },
    {
      action: "moveTo",
      options: {x: 100, y: finalY},
    },
    {
      action: "release",
    },
  ]);
  await browser.pause(2000);
}

export const getInputAndSetValue = async (
  selector: string,
  value: string
): Promise<void> => {
  const input = await getElement({selector});
  await input.setValue(value);
};

export const getElementAndExpectToBe = async (
  selector: string,
  value: string
): Promise<void> => {
  const element = await getElement({selector});
  console.log(element.getText())
  await expect(await element.getText()).toBe(`${value}`);
};

export const getElementAndClick = async (
  selector: string,
  timeOut?: number
): Promise<void> => {
  const element = await getElement({selector, timeout: timeOut});
  if (await element.isExisting()) await element.click();
};

export function logMessage(message: string) {
  console.log(message);
}