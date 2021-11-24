import BasePage from '../BasePage';
import CategoryItem from '../../components/CategoryItem';

import './style.scss';
import { ICategoryProps } from '../../models';

class Categories extends BasePage {
  hasHeader = true;

  categoryItems: CategoryItem[];

  constructor(categoryItemsProps: ICategoryProps[]) {
    super(['categories']);

    this.categoryItems = categoryItemsProps.map(
      (props) => new CategoryItem(props)
    );
  }

  async render(): Promise<void> {
    this.element.append(...this.categoryItems.map((item) => item.element));
    this.categoryItems.forEach(async (item) => {
      await item.render();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async afterRender(): Promise<void> {
    //
  }
}

export default Categories;
