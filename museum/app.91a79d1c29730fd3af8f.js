/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 57:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 645:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent = (tagName, styles = []) => {
    const element = document.createElement(tagName);
    if (styles.length !== 0)
        element.classList.add(...styles);
    return element;
};
exports["default"] = baseComponent;


/***/ }),

/***/ 977:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const navbar_1 = __importDefault(__webpack_require__(635));
__webpack_require__(528);
const navItems = [
    'Visiting',
    'Explore',
    'Video',
    'Gallery',
    'Tickets',
    'Contact',
];
const header = (0, baseComponent_1.default)('header', ['black-bg']);
const wrapper = (0, baseComponent_1.default)('div', ['wrapper', 'header-wrapper']);
const logo = (0, baseComponent_1.default)('div', ['logo']);
logo.innerHTML = `
  <a href="#">
    <svg width="49" height="26" viewBox="0 0 49 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M49 26H0L24.5 0L49 26ZM13.3075 13.1309L16.6442 16.6702L19.981 13.1309L16.6442 9.58115L13.3075 13.1309ZM16.6442 25.0052L19.981 21.466L16.6442 17.9162L13.3075 21.466L16.6442 25.0052ZM32.4083 25.0052L35.745 21.466L32.4083 17.9162L29.019 21.466L32.4083 25.0052ZM28.4673 5.40314C28.4473 5.43762 28.4207 5.46941 28.3885 5.49738C27.3507 6.6178 26.2997 7.73822 25.2357 8.84817C25.1437 8.94241 25.2357 9.00524 25.2357 9.08901L28.3097 12.356L28.4542 12.4921L31.7909 8.96335L28.4673 5.40314ZM8.78847 25.0052L8.91984 24.8691L11.9938 21.6126C12.0428 21.5717 12.0702 21.5173 12.0702 21.4607C12.0702 21.4042 12.0428 21.3498 11.9938 21.3089C11.0611 20.3456 10.1547 19.3613 9.23512 18.3874L8.78847 17.9162L5.45174 21.466L8.78847 25.0052ZM17.2354 8.95288L20.5721 12.4921L20.6772 12.3979L23.8169 9.06806C23.922 8.95288 23.8169 8.89005 23.8169 8.80628L20.7429 5.56021L20.6115 5.42408L17.2354 8.95288ZM17.2354 17.3298L20.5721 20.8691L20.7429 20.7016C21.7413 19.6545 22.7528 18.6073 23.7643 17.4869C23.7926 17.4663 23.8152 17.4412 23.8307 17.4133C23.8461 17.3853 23.8541 17.3551 23.8541 17.3246C23.8541 17.2941 23.8461 17.2639 23.8307 17.2359C23.8152 17.208 23.7926 17.1829 23.7643 17.1623C22.8185 16.1675 21.8727 15.1728 20.9399 14.1675L20.5721 13.7906L17.2354 17.3298ZM32.9995 17.3298L36.3362 20.8691L39.6729 17.3298L36.3362 13.7906L32.9995 17.3298ZM28.4673 13.7801V13.8534L25.3013 17.2147C25.1962 17.3089 25.2357 17.3717 25.3013 17.4555L28.244 20.5969C28.3228 20.6911 28.4147 20.7853 28.5198 20.8901L31.8566 17.3508L28.4673 13.7801ZM12.7295 20.8482C12.7453 20.8175 12.7675 20.7892 12.7952 20.7644L15.9611 17.4031C16.0531 17.2984 15.9611 17.2461 15.9611 17.1623L12.8477 13.8953C12.8069 13.8484 12.7583 13.8061 12.7032 13.7696L9.37962 17.2984L12.7295 20.8482ZM32.3558 16.6597L35.6925 13.1204L32.3558 9.59162L29.019 13.1309L32.3558 16.6597ZM24.4737 8.28272L27.8105 4.74346L24.5263 1.27749H24.4606L21.2552 4.71204C21.2354 4.73712 21.2249 4.76616 21.2249 4.79581C21.2249 4.82546 21.2354 4.8545 21.2552 4.87958L24.4737 8.28272ZM24.4737 16.6597L27.8105 13.1204L24.5 9.58115L21.1633 13.1309L24.4737 16.6597ZM24.4737 25.0366L27.8105 21.4974L24.4737 17.9476L21.1633 21.466L24.4737 25.0366ZM40.2378 25.0366L43.5745 21.4974L40.2509 17.9791H40.1853L36.9668 21.3613C36.8617 21.4764 36.9668 21.5288 36.9668 21.6021L39.5941 24.4398L40.2378 25.0366ZM1.89169 25.2356H7.88204L4.91314 22.0942L1.89169 25.2356ZM41.1705 25.2356H47.1083L44.1394 22.0942L41.1705 25.2356ZM23.5542 25.2356L20.5721 22.0942L17.5901 25.2356H23.5542ZM33.3147 25.2356H39.2525L36.2836 22.0942L33.3147 25.2356ZM31.3968 25.2356L28.4279 22.0942L25.459 25.2356H31.3968ZM15.6327 25.2356L12.6638 22.0942L9.69491 25.2356H15.6327Z" fill="white"/>
    </svg>  
    <h1>Louvre</h1>
  </a>
`;
const nav = (0, navbar_1.default)(navItems);
wrapper.appendChild(logo);
wrapper.appendChild(nav);
header.appendChild(wrapper);
exports["default"] = header;


/***/ }),

/***/ 635:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const unorderedList_1 = __importDefault(__webpack_require__(840));
const navbar = (items) => {
    const element = (0, baseComponent_1.default)('nav', ['nav']);
    const ul = (0, unorderedList_1.default)(items, ['nav-list']);
    element.appendChild(ul);
    return element;
};
exports["default"] = navbar;


/***/ }),

/***/ 172:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const explore_png_1 = __importDefault(__webpack_require__(694));
__webpack_require__(777);
const exploreSection = (0, baseComponent_1.default)('section', ['black-bg']);
const exploreWrapper = (0, baseComponent_1.default)('div', ['wrapper', 'explore-wrapper']);
exploreWrapper.innerHTML = `
  <div class="explore-left-side">
    <h2 class="section-title title-with-line">Picture Explore</h2>
    <p class="explore-text">
      Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.
    </p>
    <p class="explore-text">
      It was cleaned in 1984 to remove a <span>"yellow veil"</span> of dust that had gathered since the previous
      restoration in the 19th century.
    </p>
    <p class="explore-text">
      The cleaning provoked furious protests, not because the picture had been damaged in any way, but because
      it looked different.
    </p>
  </div>
  <div class="explore-right-side">
    <img src=${explore_png_1.default} alt="">
  </div>
`;
exploreSection.appendChild(exploreWrapper);
exports["default"] = exploreSection;


/***/ }),

/***/ 106:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
__webpack_require__(146);
const gallerySection = (0, baseComponent_1.default)('section', ['black-bg']);
const galleryWrapper = (0, baseComponent_1.default)('div', ['wrapper', 'gallery-wrapper']);
galleryWrapper.innerHTML = `
  <h2 class="section-title gallery-title">Art Gallery</h2>
  <div>
  </div>
`;
gallerySection.appendChild(galleryWrapper);
exports["default"] = gallerySection;


/***/ }),

/***/ 583:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const welcome_1 = __importDefault(__webpack_require__(72));
const virtual_1 = __importDefault(__webpack_require__(386));
const explore_1 = __importDefault(__webpack_require__(172));
const video_1 = __importDefault(__webpack_require__(919));
const gallery_1 = __importDefault(__webpack_require__(106));
__webpack_require__(57);
const main = (0, baseComponent_1.default)('main');
main.appendChild(welcome_1.default);
main.appendChild(virtual_1.default);
main.appendChild(explore_1.default);
main.appendChild(video_1.default);
main.appendChild(gallery_1.default);
exports["default"] = main;


/***/ }),

/***/ 919:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const video_jpg_1 = __importDefault(__webpack_require__(118));
const play_circle_svg_1 = __importDefault(__webpack_require__(558));
const play_svg_1 = __importDefault(__webpack_require__(215));
const volume_svg_1 = __importDefault(__webpack_require__(418));
const fullscreen_svg_1 = __importDefault(__webpack_require__(551));
__webpack_require__(791);
const videoSection = (0, baseComponent_1.default)('section', ['white-bg']);
const videoWrapper = (0, baseComponent_1.default)('div', ['wrapper', 'video-wrapper']);
videoWrapper.innerHTML = `
  <div class="video-text">
    <h2 class="section-title video-title">Video Journey</h2>
    <p>
      Enter and visit one of the most famous museums in the world and enjoy masterpieces such
      as Mona Lisa or Hammurabi's Code
    </p>
  </div>
  <div class="video-container">
    <img src=${video_jpg_1.default} alt="">
    <button class="video-btn play-circle-btn">
      <img src=${play_circle_svg_1.default} alt="">
    </button>
    <div class="video-controller black-bg">
      <div class="video-controller-container">
        <button class="video-btn">
          <img src=${play_svg_1.default} alt="">
        </button>
        <input type="range" class="play-range">
        <button class="video-btn">
          <img src=${volume_svg_1.default} alt="">
        </button>
        <input type="range" class="volume-range">
        <button class="video-btn">
          <img src=${fullscreen_svg_1.default} alt="">
        </button>
      </div>
    </div>
  </div>
  <div class="video-slider">
    <div class="video-slides">
      <iframe
        src="https://www.youtube.com/embed/aWmJ5DgyWPI" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;
        top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;
        text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/aWmJ5DgyWPI?autoplay=1>
        <img src=https://img.youtube.com/vi/aWmJ5DgyWPI/hqdefault.jpg alt=''><span>▶</span></a>"allowfullscreen>
      </iframe>
      <iframe
        src="https://www.youtube.com/embed/Vi5D6FKhRmo" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;
        top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;
        text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Vi5D6FKhRmo?autoplay=1>
        <img src=https://img.youtube.com/vi/Vi5D6FKhRmo/hqdefault.jpg alt=''><span>▶</span></a>"allowfullscreen>
      </iframe>
      <iframe
        src="https://www.youtube.com/embed/NOhDysLnTvY" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;
        top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;
        text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/NOhDysLnTvY?autoplay=1>
        <img src=https://img.youtube.com/vi/NOhDysLnTvY/hqdefault.jpg alt=''><span>▶</span></a>"allowfullscreen>
      </iframe>
    </div>
    <div class="video-pagination">
      <a href="" onclick='return false;'>
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4777 0.219168C5.87773 0.564178 5.94259 1.19347 5.62256
          1.62473L2.37578 6.00004L5.62256 10.3753C5.94259 10.8066 5.87773 11.4359 5.4777 11.7809C5.07766 12.1259 4.49394
          12.056 4.17391 11.6247L0 6.00004L4.17391 0.375342C4.49394 -0.0559202 5.07766 -0.125842 5.4777 0.219168ZM9.65184
          0.219168C10.0519 0.564178 10.1167 1.19347 9.7967 1.62473L6.54992 6.00004L9.7967 10.3753C10.1167 10.8066 10.0519
          11.4359 9.65184 11.7809C9.2518 12.1259 8.66808 12.056 8.34805 11.6247L4.17414 6.00004L8.34805 0.375342C8.66808
          -0.0559202 9.2518 -0.125842 9.65184 0.219168Z" fill="#999999"/>
        </svg>
      </a>
      <a class="dot active" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a href="" onclick='return false;'>
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.348163 0.219168C0.748196 -0.125842 1.33192 -0.0559202 1.65195
          0.375342L5.82586 6.00004L1.65194 11.6247C1.33192 12.056 0.748195 12.1259 0.348162 11.7809C-0.0518709 11.4359
          -0.116729 10.8066 0.203297 10.3753L3.45008 6.00004L0.203298 1.62473C-0.116728 1.19347 -0.05187 0.564177 0.348163
          0.219168ZM4.5223 0.219168C4.92234 -0.125841 5.50606 -0.0559197 5.82609 0.375342L10 6.00004L5.82609 11.6247C5.50606
          12.056 4.92234 12.1259 4.5223 11.7809C4.12227 11.4359 4.05741 10.8066 4.37744 10.3753L7.62422 6.00004L4.37744
          1.62473C4.05741 1.19347 4.12227 0.564178 4.5223 0.219168Z" fill="#999999"/>
        </svg>
      </a>
    </div>
  </div>
`;
videoSection.appendChild(videoWrapper);
exports["default"] = videoSection;


/***/ }),

/***/ 944:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const tourCard = (title, imgSrc, url) => {
    const element = (0, baseComponent_1.default)('figure', ['tour-card']);
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
exports["default"] = tourCard;


/***/ }),

/***/ 386:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const tourCard_1 = __importDefault(__webpack_require__(944));
const _1_jpg_1 = __importDefault(__webpack_require__(113));
const _2_jpg_1 = __importDefault(__webpack_require__(236));
const _3_jpg_1 = __importDefault(__webpack_require__(88));
const _4_jpg_1 = __importDefault(__webpack_require__(470));
const _5_jpg_1 = __importDefault(__webpack_require__(834));
const _6_jpg_1 = __importDefault(__webpack_require__(433));
__webpack_require__(425);
const virtualSection = (0, baseComponent_1.default)('section', ['virtual', 'white-bg']);
const virtualWrapper = (0, baseComponent_1.default)('div', ['wrapper', 'virtual-wrapper']);
const virtualCards = (0, baseComponent_1.default)('div', ['virtual-cards']);
virtualWrapper.innerHTML = `
  <h2 class="section-title title-with-line">Virtual Tour</h2>
`;
const cardTitles = [
    'Royal Palace',
    'Denon Wing',
    'Colonnade Perrault',
    'Greek Hall',
    'Mona Lisa',
    'Night Palace',
];
const imgs = [_1_jpg_1.default, _2_jpg_1.default, _3_jpg_1.default, _4_jpg_1.default, _5_jpg_1.default, _6_jpg_1.default];
cardTitles.forEach((title, index) => {
    const card = (0, tourCard_1.default)(title, imgs[index], '');
    virtualCards.appendChild(card);
});
virtualWrapper.appendChild(virtualCards);
virtualSection.appendChild(virtualWrapper);
exports["default"] = virtualSection;


/***/ }),

/***/ 72:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const _1_jpg_1 = __importDefault(__webpack_require__(474));
__webpack_require__(349);
const welcomeWrapper = (0, baseComponent_1.default)('div', ['wrapper', 'welcome-wrapper']);
const welcomeSection = (0, baseComponent_1.default)('section', ['welcome', 'black-bg']);
const welcomeContent = (0, baseComponent_1.default)('div', ['welcome-content']);
welcomeContent.innerHTML = `
  <h2 class="section-title">Welcome</br> to the Louvre</h2>
  <p>From the castle to the museum</p>
  <a class="btn">Discover the Louvre</a>
`;
const welcomeSlider = (0, baseComponent_1.default)('div', ['welcome-slider']);
welcomeSlider.innerHTML = `
  <img class="invisible" src=${_1_jpg_1.default} alt="">
`;
const welcomeSliderPagination = (0, baseComponent_1.default)('div', ['pagination']);
welcomeSliderPagination.innerHTML = `
  <span>01 | 05</span>
  <ul>
    <li class="pagination-list-item active"></li>
    <li class="pagination-list-item"></li>
    <li class="pagination-list-item"></li>
    <li class="pagination-list-item"></li>
    <li class="pagination-list-item"></li>
  </ul>
  <div class="arrows">
  <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.72254 8C3.90173 6.31339 1.99422 5.08262 0 4.30769V3.69231C1.99422 2.89459 3.90173 1.66382 5.72254 0H7.23988C6.37283 1.4359 5.53468 2.52991 4.72543 3.28205H30V4.71795H4.72543C5.53468 5.47009 6.37283 6.5641 7.23988 8H5.72254Z" fill="white"/>
  </svg>
  <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.2775 1.97284e-06C26.0983 1.68661 28.0058 2.91738 30 3.69231L30 4.30769C28.0058 5.10541 26.0983 6.33618 24.2775 8L22.7601 8C23.6272 6.5641 24.4653 5.47009 25.2746 4.71795L3.48964e-07 4.71795L5.01636e-07 3.28205L25.2746 3.28205C24.4653 2.52992 23.6272 1.4359 22.7601 1.86378e-06L24.2775 1.97284e-06Z" fill="white"/>
  </svg>
  </div>
`;
welcomeSlider.appendChild(welcomeSliderPagination);
welcomeWrapper.appendChild(welcomeContent);
welcomeWrapper.appendChild(welcomeSlider);
welcomeSection.appendChild(welcomeWrapper);
exports["default"] = welcomeSection;


/***/ }),

/***/ 840:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const unorderedList = (items, styles = []) => {
    const element = (0, baseComponent_1.default)('ul', styles);
    element.innerHTML = items
        .map((item) => `<li><a href="#">${item}</a></li>`)
        .join('');
    return element;
};
exports["default"] = unorderedList;


/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const header_1 = __importDefault(__webpack_require__(977));
const main_1 = __importDefault(__webpack_require__(583));
__webpack_require__(868);
document.body.appendChild(header_1.default);
document.body.appendChild(main_1.default);


/***/ }),

/***/ 694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dd6c5f20e43fa8ceeba1.png";

/***/ }),

/***/ 551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/febd69940954671ee818.svg";

/***/ }),

/***/ 558:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8355e54a94b59c85cc2e.svg";

/***/ }),

/***/ 215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/19d25b15cb82a1972b1d.svg";

/***/ }),

/***/ 118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c9210862da07806babdd.jpg";

/***/ }),

/***/ 113:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/14d659202fb0b95dcc32.jpg";

/***/ }),

/***/ 236:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cbc3f2fc4ab1623fc8d2.jpg";

/***/ }),

/***/ 88:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dcb21b7826e052ee06fa.jpg";

/***/ }),

/***/ 470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/408c22c3b8c8d08a0505.jpg";

/***/ }),

/***/ 834:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dfaa6cfcd31bac1a7b75.jpg";

/***/ }),

/***/ 433:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/086115dbfb4c3249ef88.jpg";

/***/ }),

/***/ 418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/62304ecc8ed14a24e91d.svg";

/***/ }),

/***/ 474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/401b1dd388549f37e07c.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(607);
/******/ 	
/******/ })()
;