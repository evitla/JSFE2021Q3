import BaseComponent from '../BaseComponent';

class Navbar extends BaseComponent {
  parentNode: HTMLElement;

  constructor(parentNode: HTMLElement) {
    super('nav', ['navbar']);

    this.parentNode = parentNode;
  }

  render(): void {
    this.element.innerHTML = `
      <ul>
        <li><a id="toys" href="#/"><h2>Toys</h2></a></li>
        <li><a id="tree" href="#/"><h2>Tree</h2></a></li>
      </ul>
    `;

    this.parentNode.appendChild(this.element);
  }

  afterRender(): void {
    const toys: HTMLElement = this.element.querySelector('#toys');
    const tree: HTMLElement = this.element.querySelector('#tree');

    toys.onclick = () => {
      toys.classList.toggle('active');
      tree.className = '';
    };

    tree.onclick = () => {
      tree.classList.toggle('active');
      toys.className = '';
    };
  }
}

export default Navbar;
