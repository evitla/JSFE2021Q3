import BaseComponent from '../BaseComponent';

import './style.scss';

class Footer extends BaseComponent {
  constructor() {
    super('footer', ['footer']);
  }

  async render(): Promise<void> {
    this.element.innerHTML = `
      <div class="wrapper footer-wrapper">
        <a class="github" href="https://github.com/evitla" target="_blank" rel="noopener noreferrer">
          evitla
        </a>
        <a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener noreferrer">
          <span class="rss-year">'21</span>
        </a>
      </div>
    `;
  }
}

export default Footer;
