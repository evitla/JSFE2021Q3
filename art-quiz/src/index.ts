import Layout from './layout';
import { ICategoryProps } from './models';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Router from './router';

import './styles/style.scss';

const categoryItemsProps: ICategoryProps[] = [
  { title: 'title', imageNumber: 0, score: 3 },
  { title: 'title', imageNumber: 10, score: 5 },
  { title: 'title', imageNumber: 20 },
  { title: 'title', imageNumber: 30 },
  { title: 'title', imageNumber: 40 },
  { title: 'title', imageNumber: 50 },
];

const layout = new Layout();
const home = new Home();
const settings = new Settings();
const categories = new Categories(categoryItemsProps);
const category = new Category();

const routes = {
  '/': home,
  '/settings': settings,
  '/categories': categories,
  '/categories/:id': category,
};

const router = new Router(routes);

const run = async () => {
  const page = router.getPage();

  if (page) {
    await page.render();
    await layout.render(page.element);
  } else {
    const err = document.createElement('h2');
    err.innerText = '404. Page not found';
    await layout.render(err);
  }
};

window.addEventListener('hashchange', run);
window.addEventListener('load', run);
