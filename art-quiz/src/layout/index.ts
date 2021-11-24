import Footer from '../components/Footer';
import Header from '../components/Header/indes';

class MainLayout {
  readonly element = document.body;

  private header = new Header();

  private main = document.createElement('main');

  private mainWrapper = document.createElement('div');

  private footer = new Footer();

  constructor() {
    this.mainWrapper.className = 'wrapper';
  }

  async render(children: HTMLElement, hasHeader = false): Promise<void> {
    this.main.append(this.mainWrapper);
    this.mainWrapper.append(children);

    if (hasHeader) {
      await this.header.render();
      this.element.append(this.header.element);
    }
    await this.footer.render();
    this.element.append(this.main, this.footer.element);
  }

  async clear(): Promise<void> {
    this.header.element.innerHTML = '';
    this.mainWrapper.innerHTML = '';
  }
}

export default MainLayout;
