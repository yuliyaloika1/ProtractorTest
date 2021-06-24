// epam_careers.spec.js
describe('Selecting skills on careers page', function seleniumTest() {


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.epam.com');
    });
    it('should select Management skill', function () {


        browser.driver.findElement(by.css('button.cookie-disclaimer__button')).click();
        browser.driver.findElement(by.css('li a[href *= careers]')).click();
        const locationArrow = browser.driver.findElement(by.css('span.select2-selection__arrow'));
        browser.sleep(100);
        locationArrow.click();
        browser.driver.findElement(by.css('li[id *= -Minsk')).click();
        const skillsArrow = browser.driver.findElement(by.css('div.selected-params'));
        skillsArrow.click();
        browser.sleep(100);
        browser.driver.findElement(by.xpath('//span[contains(text(), \'Management\')]')).click();
        skillsArrow.click();
        const managementItem = browser.driver.findElement(by.css('ul.selected-items li[data-value=\'Management\']'));
        expect(managementItem.getText()).toEqual('MANAGEMENT');
    });
});