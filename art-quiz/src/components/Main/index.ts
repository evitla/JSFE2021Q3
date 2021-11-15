import BaseComponent from '../BaseComponent';
import Button from '../Button';
import Logo from '../Logo';

import './style.scss';

class Main extends BaseComponent {
  private wrapper = new BaseComponent('div', ['wrapper']);

  private logo = new Logo(['logo-main']);

  private menu = new BaseComponent('div', ['main-menu']);

  private ArtistsQuizButton = new Button('Artists Quiz', ['button-primary']);

  private PicturesQuizButton = new Button(
    'Pictures Quiz',
    ['button-primary'],
    '#/'
  );

  constructor() {
    super('main', ['main']);
  }

  render(): void {
    this.menu.element.append(this.ArtistsQuizButton.element);
    this.menu.element.append(this.PicturesQuizButton.element);

    this.wrapper.element.append(this.logo.element, this.menu.element);
    this.element.append(this.wrapper.element);
  }
}

export default Main;
