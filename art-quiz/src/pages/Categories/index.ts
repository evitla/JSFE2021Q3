import BasePage from '../BasePage';
import CategoryItem from '../../components/CategoryItem';

import './style.scss';

class Categories extends BasePage {
  constructor() {
    super(['categories']);
  }

  async render(): Promise<void> {
    const c = new CategoryItem({ title: 'title', imageNumber: 0, score: 3 });
    const c1 = new CategoryItem({ title: 'title', imageNumber: 10 });
    const c2 = new CategoryItem({ title: 'title', imageNumber: 20 });
    const c3 = new CategoryItem({ title: 'title', imageNumber: 30 });
    const c4 = new CategoryItem({ title: 'title', imageNumber: 40 });
    const c5 = new CategoryItem({ title: 'title', imageNumber: 50 });
    this.element.append(
      c.element,
      c1.element,
      c2.element,
      c3.element,
      c4.element,
      c5.element
    );
    await c.render();
    await c1.render();
    await c2.render();
    await c3.render();
    await c4.render();
    await c5.render();
  }
}

export default Categories;
