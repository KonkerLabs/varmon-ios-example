import {multiplySpec} from "./pages/multiply";

describe("Multiplicacao", function() {
    beforeEach(async () => {
        const wait = 1250;
        await browser.pause(wait);
    });
    multiplySpec();
});
