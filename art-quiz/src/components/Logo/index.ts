import BaseComponent from '../BaseComponent';

import './style.scss';

class Logo extends BaseComponent {
  constructor(styles: string[] = []) {
    super('div', ['logo', ...styles]);
  }
}

export default Logo;
