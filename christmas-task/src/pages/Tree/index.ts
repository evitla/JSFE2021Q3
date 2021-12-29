import BasePage from '../BasePage';
import BaseComponent from '../../components/BaseComponent';
import ToyCard from '../../components/ToyCards/toyCard';
import TreeBackgrounds from '../../components/TreeBackgrounds';
import Trees from '../../components/Trees';
import { PageClassNameType } from '../../types';

import './style.scss';

const MAX_TOYS = 20;

class Tree extends BasePage {
  favoriteCards: ToyCard[];

  leftSide = new BaseComponent('div', ['left-side']);

  mainTree = new BaseComponent('div', ['main-tree']);

  rightSide = new BaseComponent('div', ['right-side']);

  mainTreeImage = new Image();

  treesContainer = new Trees(this.leftSide.element);

  bgsContainer = new TreeBackgrounds(this.leftSide.element);

  toys = new BaseComponent('div', ['toys']);

  constructor(pageName: PageClassNameType) {
    super(pageName);

    this.mainTreeImage.src = this.treesContainer.trees[0].src;
    this.mainTreeImage.className = 'main-tree-image';
    this.mainTreeImage.alt = 'main-tree';
  }

  async render(toyCards: ToyCard[]): Promise<void> {
    this.treesContainer.render();
    this.bgsContainer.render();
    this.mainTree.element.appendChild(this.mainTreeImage);
    this.element.appendChild(this.leftSide.element);
    this.element.appendChild(this.mainTree.element);
    this.element.appendChild(this.rightSide.element);
    this.renderFavoriteToys(toyCards);
  }

  async afterRender(): Promise<void> {
    this.treesContainer.afterRender((target: HTMLImageElement) => {
      this.mainTreeImage.src = target.src;
    });

    this.bgsContainer.afterRender((target: HTMLImageElement) => {
      this.mainTree.element.style.backgroundImage = `url(${target.src})`;
    });

    this.toys.element.onmousedown = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('img');
      if (target === null) return;

      this.mainTreeImage.ondrop = (ev: DragEvent) =>
        this.dropHandler(ev, target);

      this.mainTreeImage.ondragover = (ev: DragEvent) => {
        ev.preventDefault();
      };
    };
  }

  private renderFavoriteToys(toyCards: ToyCard[]) {
    this.rightSide.element.innerHTML = `
      <h3 class="tree-title">
        Toys
      </h3>
    `;

    this.favoriteCards = toyCards.some((card) => card.props.personalFavorite)
      ? toyCards.filter((card) => card.props.personalFavorite)
      : toyCards.slice(0, MAX_TOYS);

    this.toys.element.append(
      ...this.favoriteCards.map((card) => {
        card.render(true);
        return card.element;
      })
    );
    this.rightSide.element.appendChild(this.toys.element);
  }

  private dropHandler(e: DragEvent, target: HTMLImageElement) {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    const copy = new Image();
    copy.className = `${target.className} copy`;
    copy.src = target.src;
    copy.alt = target.alt;
    copy.style.left = `${x}px`;
    copy.style.top = `${y}px`;
    copy.style.transform = 'translate(-50%, -50%)';
    this.mainTree.element.appendChild(copy);
  }
}

export default Tree;
