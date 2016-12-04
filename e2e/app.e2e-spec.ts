import { CounterWebPage } from './app.po';

describe('counter-web App', function() {
  let page: CounterWebPage;

  beforeEach(() => {
    page = new CounterWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
