import BaseComponent from '../../components/BaseComponent';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import './style.scss';

class Home extends BaseComponent {
  private logo = new Logo(['logo-main']);

  private buttonsContainer = new BaseComponent('div', ['btn-container']);

  private ArtistsQuizButton = new Button(
    'Artists Quiz',
    ['button-primary'],
    '/#/artists-quiz'
  );

  private PicturesQuizButton = new Button(
    'Pictures Quiz',
    ['button-primary'],
    '/#/pictures-quiz'
  );

  constructor() {
    super('div', ['home']);
  }

  async render(): Promise<void> {
    this.buttonsContainer.element.append(this.ArtistsQuizButton.element);
    this.buttonsContainer.element.append(this.PicturesQuizButton.element);

    this.element.append(this.logo.element, this.buttonsContainer.element);
  }
}

export default Home;
