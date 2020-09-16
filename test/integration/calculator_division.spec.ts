import {divisionSpec} from "./pages/division";

describe("Divisao", function() {
    beforeEach(async () => {
        const wait = 1250;
        await browser.pause(wait);
    });
    divisionSpec();
});
