import BasePage from '../BasePage';
import Category from '../../components/Category';

import './style.scss';

class Categories extends BasePage {
  constructor() {
    super(['categories']);
  }

  async render(): Promise<void> {
    const c = new Category({ title: 'title', imageNumber: 0, score: 3 });
    const c1 = new Category({ title: 'title', imageNumber: 10 });
    const c2 = new Category({ title: 'title', imageNumber: 20 });
    const c3 = new Category({ title: 'title', imageNumber: 30 });
    const c4 = new Category({ title: 'title', imageNumber: 40 });
    const c5 = new Category({ title: 'title', imageNumber: 50 });
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
