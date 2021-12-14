import { BasePage } from './pages';
import { parseRequestURL } from './utils';

class Router {
  constructor(readonly routes: { [key: string]: BasePage }) {}

  getPage(): BasePage {
    const request = parseRequestURL();

    const parsedURL =
      (request.resource ? `/${request.resource}` : '/') +
      (request.id ? '/:id' : '') +
      (request.verb ? `/${request.verb}` : '');

    return this.routes[parsedURL];
  }
}

export default Router;
