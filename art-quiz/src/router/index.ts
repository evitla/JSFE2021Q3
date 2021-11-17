import BasePage from '../pages/BasePage';

const parseRequestURL = () => {
  const url = window.location.hash.slice(1).toLowerCase() || '/';

  const r = url.split('/');

  const request = {
    resource: r[1],
    id: r[2],
    verb: r[3],
  };

  return request;
};

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
