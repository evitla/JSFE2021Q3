import BaseComponent from '../components/BaseComponent';

abstract class BasePage extends BaseComponent {
  constructor(styles: string[] = []) {
    super('div', styles);
  }

  abstract render(): Promise<void>;

  abstract afterRender(): Promise<void>;
}

export default BasePage;
