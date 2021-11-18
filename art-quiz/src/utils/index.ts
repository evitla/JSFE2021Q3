export const getImageURL = (imageNum: number): string => {
  const baseUrl =
    'https://raw.githubusercontent.com/evitla/image-data/master/img';

  return `${baseUrl}/${imageNum}.jpg`;
};
