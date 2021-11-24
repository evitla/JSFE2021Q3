import MainLayout from './layout';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Router from './router';
import { getImages } from './utils';
import { categoryItemsProps } from './store';

import './styles/style.scss';

const ROOT_URL = 'evitla-JSFE2021Q3/art-quiz';

const url = './images.json';

const main = async () => {
  const mainLayout = new MainLayout();
  const home = new Home();
  const settings = new Settings();
  const categories = new Categories(categoryItemsProps);
  const images = await getImages(url);
  const category = new Category(images);

  const routes = {
    '/': home,
    '/settings': settings,
    '/categories': categories,
    '/categories/:id': category,
  };

  const router = new Router(routes, ROOT_URL);

  const run = async () => {
    await mainLayout.clear();
    const page = router.getPage();

    if (page) {
      await page.render();
      await mainLayout.render(page.element, page.hasHeader);
      await page.afterRender();
    } else {
      const err = document.createElement('h2');
      err.innerText = '404. Page not found';
      await mainLayout.render(err);
    }
  };

  await run();

  window.addEventListener('hashchange', run);
};

window.addEventListener('load', main);
