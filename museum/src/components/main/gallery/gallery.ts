import baseComponent from '../../baseComponent';

import img1 from '../../../assets/images/gallery/1.jpg';
import img2 from '../../../assets/images/gallery/2.jpg';
import img3 from '../../../assets/images/gallery/3.jpg';
import img4 from '../../../assets/images/gallery/4.jpg';
import img5 from '../../../assets/images/gallery/5.jpg';
import img6 from '../../../assets/images/gallery/6.jpg';
import img7 from '../../../assets/images/gallery/7.jpg';
import img8 from '../../../assets/images/gallery/8.jpg';
import img9 from '../../../assets/images/gallery/9.jpg';
import img10 from '../../../assets/images/gallery/10.jpg';
import img11 from '../../../assets/images/gallery/11.jpg';
import img12 from '../../../assets/images/gallery/12.jpg';
import img13 from '../../../assets/images/gallery/13.jpg';
import img14 from '../../../assets/images/gallery/14.jpg';
import img15 from '../../../assets/images/gallery/15.jpg';

import './gallery.scss';

const imgs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const gallerySection = baseComponent('section', ['black-bg']);
gallerySection.id = 'gallery';

const galleryWrapper = baseComponent('div', ['wrapper', 'gallery-wrapper']);

const images = imgs
  .sort(() => Math.random() - 0.5)
  .map(
    (img, index) =>
      `<figure class="gallery-img" data-key=${index}><img src=${img} alt=""></figure>`
  )
  .join('');

galleryWrapper.innerHTML = `
  <h2 class="section-title">Art Gallery</h2>
  <div class="picture-container">
    <div class="picture-inner-container">
    ${images}
    </div>
  </div>
`;

gallerySection.appendChild(galleryWrapper);

export default gallerySection;
