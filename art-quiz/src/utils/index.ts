export const getImageURL = (imageNum: number): string => {
  const baseUrl =
    'https://raw.githubusercontent.com/evitla/image-data/master/img';

  return `${baseUrl}/${imageNum}.jpg`;
};

export const parseRequestURL = (): {
  resource: string;
  id: string;
  verb: string;
} => {
  const url = window.location.hash.slice(1).toLowerCase() || '/';

  const r = url.split('/');

  const request = {
    resource: r[1],
    id: r[2],
    verb: r[3],
  };

  return request;
};
