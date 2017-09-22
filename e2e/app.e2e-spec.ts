import { PesquisaPage } from './app.po';

describe('pesquisa App', () => {
  let page: PesquisaPage;

  beforeEach(() => {
    page = new PesquisaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to survey!');
  });
});
