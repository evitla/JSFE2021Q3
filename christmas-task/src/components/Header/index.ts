import BaseComponent from '../BaseComponent';
import ButtonGroup from './buttonGroup';
import Logo from './logo';
import Navbar from './navbar';
import { Snowflakes } from '..';

import './style.scss';

class Header extends BaseComponent {
  parentNode: HTMLElement;

  snowflakes = new Snowflakes(document.body);

  wrapper = new BaseComponent('div', ['wrapper', 'header-wrapper']);

  leftSide = new BaseComponent('div', ['header-left-side']);

  logo = new Logo(this.leftSide.element);

  navbar = new Navbar(this.leftSide.element);

  buttonGroup = new ButtonGroup(this.wrapper.element);

  constructor(parentNode: HTMLElement) {
    super('header', ['header']);

    this.parentNode = parentNode;
  }

  render(): void {
    this.snowflakes.render();
    this.logo.render();
    this.navbar.render();

    this.wrapper.element.appendChild(this.leftSide.element);
    this.buttonGroup.render();
    this.element.appendChild(this.wrapper.element);
    this.parentNode.appendChild(this.element);
  }

  afterRender(): void {
    this.navbar.afterRender();
    this.buttonGroup.afterRender();

    this.logo.element.onclick = () => {
      this.navbar.toys.classList.remove('active');
      this.navbar.tree.classList.remove('active');
    };
  }
}

export default Header;
