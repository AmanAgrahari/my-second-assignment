import { MySecondAssignmentPage } from './app.po';

describe('my-second-assignment App', () => {
  let page: MySecondAssignmentPage;

  beforeEach(() => {
    page = new MySecondAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
