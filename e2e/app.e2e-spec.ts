import { Ng2Auth0Page } from './app.po';

describe('ng2-auth0 App', function() {
  let page: Ng2Auth0Page;

  beforeEach(() => {
    page = new Ng2Auth0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
