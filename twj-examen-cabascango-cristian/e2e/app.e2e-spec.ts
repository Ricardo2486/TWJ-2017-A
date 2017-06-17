import { TwjExamenCabascangoCristianPage } from './app.po';

describe('twj-examen-cabascango-cristian App', () => {
  let page: TwjExamenCabascangoCristianPage;

  beforeEach(() => {
    page = new TwjExamenCabascangoCristianPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
