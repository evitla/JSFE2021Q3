import BasePage from '../pages/BasePage';
import { parseRequestURL } from '../utils';

class Router {
  constructor(
    readonly routes: { [key: string]: BasePage },
    readonly root: string
  ) {}

  getPage(): BasePage {
    const request = parseRequestURL();

    const parsedURL =
      (request.resource ? `/${request.resource}` : '/') +
      (request.id ? '/:id' : '') +
      (request.verb ? `/${request.verb}` : '');

    return this.routes[`${this.root}/${parsedURL}`];
  }
}

export default Router;
