import {subtractSpec} from "./pages/subtract";

describe("Subtracão", function() {
    beforeEach(async () => {
        const wait = 1250;
        await browser.pause(wait);
    });
    subtractSpec();
});
