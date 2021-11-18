import Layout from './layout';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Router from './router';

import './styles/style.scss';

const layout = new Layout();
const home = new Home();
const settings = new Settings();
const categories = new Categories();

const routes = {
  '/': home,
  '/settings': settings,
  '/categories': categories,
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
