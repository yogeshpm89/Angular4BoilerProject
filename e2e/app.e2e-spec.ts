import { MopFrontendPage } from './app.po';

describe('mop-frontend App', () => {
  let page: MopFrontendPage;

  beforeEach(() => {
    page = new MopFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
