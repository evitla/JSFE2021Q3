import BaseComponent from '../components/BaseComponent';
import { PageClassNameType } from '../types';

abstract class BasePage extends BaseComponent {
  name: PageClassNameType;

  constructor(name: PageClassNameType, styles: string[] = []) {
    super('div', [name, ...styles]);

    this.name = name;
  }

  abstract render(props?: unknown): Promise<void>;

  abstract afterRender(): Promise<void>;
}

export default BasePage;
