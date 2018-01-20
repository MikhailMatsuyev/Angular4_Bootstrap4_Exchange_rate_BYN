import { FreshPage } from './app.po';

describe('fresh App', () => {
  let page: FreshPage;

  beforeEach(() => {
    page = new FreshPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
