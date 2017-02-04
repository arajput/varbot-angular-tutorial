import { VarbotAngularTutorialPage } from './app.po';

describe('varbot-angular-tutorial App', function() {
  let page: VarbotAngularTutorialPage;

  beforeEach(() => {
    page = new VarbotAngularTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
