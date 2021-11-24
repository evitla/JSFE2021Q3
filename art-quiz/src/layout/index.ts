import Header from '../components/Header/indes';

class MainLayout {
  readonly element = document.body;

  private header = new Header();

  private main = document.createElement('main');

  private mainWrapper = document.createElement('div');

  private footer = document.createElement('footer');

  private footerWrapper = document.createElement('div');

  constructor() {
    this.mainWrapper.className = 'wrapper';
    this.footerWrapper.className = 'wrapper';
  }

  async render(children: HTMLElement, hasHeader = false): Promise<void> {
    this.main.append(this.mainWrapper);
    this.mainWrapper.append(children);
    this.footer.append(this.footerWrapper);
    this.footerWrapper.innerHTML = `<h2>Footer</h2>`;
    if (hasHeader) {
      await this.header.render();
      this.element.append(this.header.element);
    }
    this.element.append(this.main, this.footer);
  }

  async clear(): Promise<void> {
    this.header.element.innerHTML = '';
    this.mainWrapper.innerHTML = '';
  }
}

export default MainLayout;
