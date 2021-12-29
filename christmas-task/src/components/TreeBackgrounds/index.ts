import BaseComponent from '../BaseComponent';

import './style.scss';

import bg1 from '../../assets/bg/1.jpg';
import bg2 from '../../assets/bg/2.jpg';
import bg3 from '../../assets/bg/3.jpg';
import bg4 from '../../assets/bg/4.jpg';
import bg5 from '../../assets/bg/5.jpg';
import bg6 from '../../assets/bg/6.jpg';
import bg7 from '../../assets/bg/7.jpg';
import bg8 from '../../assets/bg/8.jpg';
import bg9 from '../../assets/bg/9.jpg';

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];

class TreeBackgrounds extends BaseComponent {
  parentNode: HTMLElement;

  bgs = images.map((image) => {
    const img = new Image();
    img.src = image;
    img.alt = 'bg-image';
    img.className = 'bg-image';
    return img;
  });

  constructor(parentNode: HTMLElement) {
    super('div', ['bgs-container']);

    this.parentNode = parentNode;
  }

  render(): void {
    this.element.append(...this.bgs);
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

export default TreeBackgrounds;
