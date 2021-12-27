import Layout from './layout';
import Router from './router';
import { HomePage, ToysPage, TreePage } from './pages';
import { Snowflakes } from './components';
import { getImages } from './utils';
import ToyCard from './components/ToyCards/toyCard';

import './styles/style.scss';

const imagesURL = './images.json';

const app = async () => {
  // go to home page on window reload
  window.location.href = '#/';

  const layout = new Layout();
  const homePage = new HomePage('home-page');

  const images = await getImages(imagesURL);
  const toysPage = new ToysPage('toys-page', images);
  const treePage = new TreePage('tree-page');

  const snowflakes = new Snowflakes(layout.element);
  snowflakes.render();

  const routes = {
    '/': homePage,
    '/toys': toysPage,
    '/tree': treePage,
  };

  const router = new Router(routes);

  const run = async () => {
    await layout.clear();
    const page = router.getPage();
    const pageProps: {
      'home-page': unknown;
      'toys-page': unknown;
      'tree-page': ToyCard[];
    } = {
      'home-page': null,
      'toys-page': null,
      'tree-page': toysPage.toyCards.cards,
    };

    if (page) {
      await page.render(pageProps[page.name]);
      await layout.render(page.element);
      await page.afterRender();
    } else {
      const err = document.createElement('h2');
      err.innerText = '404. Page not found';
      await layout.render(err);
    }
  };

  await run();

  window.addEventListener('hashchange', run);
};

window.addEventListener('load', app);
