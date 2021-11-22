class Layout {
  readonly element = document.body;

  private main = document.createElement('main');

  private mainWrapper = document.createElement('div');

  private footer = document.createElement('footer');

  private footerWrapper = document.createElement('div');

  constructor() {
    this.mainWrapper.className = 'wrapper';
    this.footerWrapper.className = 'wrapper';
  }

  async render(children: HTMLElement): Promise<void> {
    this.main.append(this.mainWrapper);
    this.mainWrapper.append(children);
    this.footer.append(this.footerWrapper);
    this.footerWrapper.innerHTML = `<h2>Footer</h2>`;
    this.element.append(this.main, this.footer);
  }

  async clear(): Promise<void> {
    this.mainWrapper.innerHTML = '';
  }
}

export default Layout;
