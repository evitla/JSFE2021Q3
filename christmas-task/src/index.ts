import Layout from './layout';
import Router from './router';
import { HomePage, ToysPage, TreePage } from './pages';
import { Snowflakes } from './components';

import './styles/style.scss';

const app = async () => {
  const layout = new Layout();
  const homePage = new HomePage();
  const toysPage = new ToysPage();
  const treePage = new TreePage();

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

    if (page) {
      await page.render();
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
