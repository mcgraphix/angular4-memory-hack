import { PortalTestPage } from './app.po';

describe('portal-test App', () => {
  let page: PortalTestPage;

  beforeEach(() => {
    page = new PortalTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
