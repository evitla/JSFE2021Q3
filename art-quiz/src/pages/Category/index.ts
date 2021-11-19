import { IImageProps } from '../../models';
import { getImageURL, parseRequestURL } from '../../utils';
import BasePage from '../BasePage';

import './style.scss';

const getImages = async () => {
  const url = 'http://localhost:8080/database/images.json';
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const getImageInfo = (images: IImageProps[]) => (id: number) => {
  const imageIndex = images.findIndex((image) => image.imageNum === id);

  return imageIndex !== -1 ? images[imageIndex] : null;
};

const getCategory = (images: IImageProps[], id: number) => {
  const categoryImages = [];

  const a = getImageInfo(images);

  for (let i = id; i < id + 10; i++) {
    categoryImages.push(a(i));
  }

  return categoryImages;
};

class Category extends BasePage {
  constructor() {
    super(['category']);
  }

  async render(): Promise<void> {
    const request = parseRequestURL();
    const data = await getImages();
    const categoryImages = getCategory(data.images, +request.id);

    const imgs = categoryImages.map((image) => {
      const img = new Image();
      img.src = getImageURL(image.imageNum);
      img.alt = 'Category image';
      return img;
    });

    this.element.append(...imgs);
  }
}

export default Category;
