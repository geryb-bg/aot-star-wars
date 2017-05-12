import { AotStarWarsPage } from './app.po';

describe('aot-star-wars App', () => {
  let page: AotStarWarsPage;

  beforeEach(() => {
    page = new AotStarWarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
