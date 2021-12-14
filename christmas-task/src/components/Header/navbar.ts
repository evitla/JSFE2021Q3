import BaseComponent from '../BaseComponent';

class Navbar extends BaseComponent {
  parentNode: HTMLElement;

  toys = document.createElement('a');

  tree = document.createElement('a');

  constructor(parentNode: HTMLElement) {
    super('nav', ['navbar']);

    this.toys.id = 'toys';
    this.tree.id = 'tree';
    this.toys.href = '#/toys';
    this.tree.href = '#/tree';

    this.parentNode = parentNode;
  }

  render(): void {
    const ul = document.createElement('ul');
    const item1 = document.createElement('li');
    const item2 = document.createElement('li');

    this.toys.innerHTML = '<h2>Toys</h2>';
    this.tree.innerHTML = '<h2>Tree</h2>';

    item1.appendChild(this.toys);
    item2.appendChild(this.tree);
    ul.append(item1, item2);

    this.element.appendChild(ul);
    this.parentNode.appendChild(this.element);
  }

  afterRender(): void {
    this.toys.onclick = () => {
      this.toys.classList.add('active');
      this.tree.className = '';
    };

    this.tree.onclick = () => {
      this.tree.classList.add('active');
      this.toys.className = '';
    };
  }
}

export default Navbar;
