import BaseComponent from '../BaseComponent';

import './style.scss';

import tree1 from '../../assets/tree/1.png';
import tree2 from '../../assets/tree/2.png';
import tree3 from '../../assets/tree/3.png';
import tree4 from '../../assets/tree/4.png';
import tree5 from '../../assets/tree/5.png';
import tree6 from '../../assets/tree/6.png';

const images = [tree1, tree2, tree3, tree4, tree5, tree6];

class Trees extends BaseComponent {
  parentNode: HTMLElement;

  treesContainer = new BaseComponent('div', ['trees-container']);

  trees = images.map((image) => {
    const img = new Image();
    img.src = image;
    img.alt = 'tree-image';
    img.className = 'tree-image';
    return img;
  });

  constructor(parentNode: HTMLElement) {
    super('div', ['trees']);

    this.parentNode = parentNode;
  }

  render(): void {
    this.element.innerHTML = `
      <h3 class="tree-title">
        Choose Tree
      </h3>
    `;
    this.treesContainer.element.append(...this.trees);

    this.element.appendChild(this.treesContainer.element);
    this.parentNode.appendChild(this.element);
  }

  afterRender(callback: (target: HTMLImageElement) => void): void {
    this.element.onclick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('img');
      if (target === null) return;

      callback(target);
    };
  }
}

export default Trees;
