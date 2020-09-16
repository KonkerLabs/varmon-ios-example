import {sumSpec} from "./pages/sum";

describe("Soma", function() {
    beforeEach(async () => {
        const wait = 1250;
        await browser.pause(wait);
    });
    sumSpec();
});
