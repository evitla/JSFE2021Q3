import Header from '../components/Header';

class Layout {
  readonly element = document.body;

  private header = new Header(this.element);

  private main = document.createElement('main');

  private mainWrapper = document.createElement('div');

  constructor() {
    this.mainWrapper.className = 'wrapper';

    this.header.render();
    this.header.afterRender();

    this.main.append(this.mainWrapper);
    this.element.appendChild(this.main);
  }

  async render(children: HTMLElement): Promise<void> {
    this.mainWrapper.append(children);
  }

  async clear(): Promise<void> {
    this.mainWrapper.innerHTML = '';
  }
}

export default Layout;
