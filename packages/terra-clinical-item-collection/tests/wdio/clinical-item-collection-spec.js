/* eslint no-unused-expressions: 0 */
/* global before, browser, Terra, expect */

Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous').forEach((viewport) => {
  describe('Item Collection', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Displays an item collection with all possible elements', () => {
      before(() => {
        browser.url('/#/raw/tests/clinical-item-collection/item-collection-all-elements');
      });

      Terra.should.matchScreenshot(viewport);
    });

    describe('Displays the correct collection when responding to breakpoint', () => {
      before(() => {
        browser.url('/#/raw/tests/clinical-item-collection/item-collection-all-elements');
      });

      Terra.should.matchScreenshot(viewport);
    });

    describe('Displays a selectable item collection', () => {
      before(() => {
        browser.url('/#/raw/tests/clinical-item-collection/item-collection-selectable');
      });

      Terra.should.matchScreenshot(viewport);
    });

    describe('Returns child key for click when onSelect is given to a selectable item collection', () => {
      before(() => {
        browser.url('/#/raw/tests/clinical-item-collection/item-collection-selectable');
        browser.waitForValue('#item1', 3000);
        browser.click('#item1');
        browser.click('#selected-key');
      });

      Terra.should.matchScreenshot(viewport);
    });

    describe('Returns child key for ENTER when onSelect is given to a selectable item collection', () => {
      before(() => {
        browser.url('/#/raw/tests/clinical-item-collection/item-collection-selectable');
        expect(browser.element('#item2')).to.exist;
        browser.keys(['Tab', 'Tab', 'Tab', 'Enter']);
        browser.click('#selected-key');
      });

      Terra.should.matchScreenshot();
    });

    describe('Returns child key for SPACE when onSelect is given to a selectable item collection', () => {
      before(() => {
        browser.url('/#/raw/tests/clinical-item-collection/item-collection-selectable');
        expect(browser.element('#item3')).to.exist;
        browser.keys(['Tab', 'Tab', 'Tab', 'Tab', 'Tab', ' ']);
        browser.click('#selected-key');
      });

      Terra.should.matchScreenshot(viewport);
    });

    describe('Displays an item collection with table styles', () => {
      before(() => {
        browser.url('/#/raw/tests/clinical-item-collection/item-collection-table-styles');
      });

      Terra.should.matchScreenshot(viewport);
    });

    describe('Displays an item collection with list styles', () => {
      before(() => {
        browser.url('/#/raw/tests/clinical-item-collection/item-collection-list-styles');
      });

      Terra.should.matchScreenshot(viewport);
    });

    describe('Displays an item collection with styles applied to list items', () => {
      before(() => {
        browser.url('/#/raw/tests/clinical-item-collection/item-collection-item-styles');
      });

      Terra.should.matchScreenshot(viewport);
    });

    describe('Displays an item collection with items with varying content', () => {
      before(() => {
        browser.url('/#/raw/tests/clinical-item-collection/item-collection-varying-items');
      });

      Terra.should.matchScreenshot(viewport);
    });
  });
});
