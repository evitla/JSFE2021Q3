import BaseComponent from '../../components/BaseComponent';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import BasePage from '../BasePage';

import './style.scss';

class Home extends BasePage {
  hasHeader = false;

  private logo = new Logo(['logo-main']);

  private buttonsContainer = new BaseComponent('div', ['btn-container']);

  private ArtistsQuizButton = new Button(
    'Artists Quiz',
    ['button-primary'],
    '#/categories'
  );

  private PicturesQuizButton = new Button(
    'Pictures Quiz',
    ['button-primary'],
    '#/categories'
  );

  constructor() {
    super(['home']);
  }

  async render(): Promise<void> {
    this.buttonsContainer.element.append(
      this.ArtistsQuizButton.element,
      this.PicturesQuizButton.element
    );

    this.element.append(this.logo.element, this.buttonsContainer.element);
  }

  // eslint-disable-next-line class-methods-use-this
  async afterRender(): Promise<void> {
    //
  }
}

export default Home;
