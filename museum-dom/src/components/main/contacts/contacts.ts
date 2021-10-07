import baseComponent from '../../baseComponent';

import imgSrc from '../../../assets/images/map.png';

import './contacts.scss';

const contactsSection = baseComponent('section', ['white-bg']);
contactsSection.id = 'contact';

const contactsWrapper = baseComponent('div', ['wrapper', 'contacts-wrapper']);
contactsWrapper.innerHTML = `
  <h2 class="section-title title-with-line">Contacts</h2>
  <div class="contacts-container">
    <div class="contacts">
      <h4>Palais Royal</h4>
      <h4>Musee du Louvre</h4>
      <p>address: 75001 Paris, France</p>
      <p>phone: <a href="tel:+330140205050">+33(0) 1 40 20 50 50</a></p>
      <p>mail: <a href="mailto:info@louvre.fr">info@louvre.fr</a></p>
    </div>
    <img src=${imgSrc} alt="">
  </div>
`;

contactsSection.appendChild(contactsWrapper);

export default contactsSection;
