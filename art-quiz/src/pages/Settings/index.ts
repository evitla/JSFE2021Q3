import BasePage from '../BasePage';

import './style.scss';

class Settings extends BasePage {
  constructor() {
    super(['settings']);
  }

  async render(): Promise<void> {
    this.element.innerHTML = '<h2>Settings Page</h2>';
  }
}

export default Settings;
