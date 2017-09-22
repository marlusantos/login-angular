import { browser, by, element } from 'protractor';

export class PesquisaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('survey-root h1')).getText();
  }
}
