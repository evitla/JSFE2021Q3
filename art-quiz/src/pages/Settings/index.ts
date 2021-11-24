import BasePage from '../BasePage';

import './style.scss';

class Settings extends BasePage {
  hasHeader = true;

  constructor() {
    super(['settings']);
  }

  async render(): Promise<void> {
    this.element.innerHTML = '<h2>Settings Page</h2>';
  }

  // eslint-disable-next-line class-methods-use-this
  async afterRender(): Promise<void> {
    //
  }
}

export default Settings;
