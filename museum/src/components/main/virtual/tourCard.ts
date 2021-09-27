import baseComponent from '../../baseComponent';

const tourCard = (title: string, imgSrc: string, url: string): HTMLElement => {
  const element = baseComponent('figure', ['tour-card']);

  element.innerHTML = `
    <a href=${url}>
      <img src=${imgSrc} alt="">
      <h3 class="card-title title-with-line">${title}</h3>
    </a>
    <span>360&deg; Virtual Tour</span>
    <p>Google Street Panorama View</p>
  `;

  return element;
};

export default tourCard;
