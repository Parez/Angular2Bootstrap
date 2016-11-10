import { AngularBootstrapPage } from './app.po';

describe('angular-bootstrap App', function() {
  let page: AngularBootstrapPage;

  beforeEach(() => {
    page = new AngularBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
