/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 7777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 7146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 1057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 4721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 6349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 4868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2645:
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

/***/ 2000:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const navbar_1 = __importDefault(__webpack_require__(9635));
const icons_1 = __webpack_require__(6538);
__webpack_require__(3850);
const footer = (0, baseComponent_1.default)('footer', ['black-bg']);
const footerWrapper = (0, baseComponent_1.default)('div', ['wrapper', 'footer-wrapper']);
const footerContainer = (0, baseComponent_1.default)('div', ['footer-container']);
const navItems = [
    'Visiting',
    'Explore',
    'Video',
    'Gallery',
    'Tickets',
    'Contact',
];
const logo = (0, baseComponent_1.default)('div', ['logo', 'footer-logo']);
logo.innerHTML = `
  <a href="#">
    ${icons_1.logoIcon}
    <h1>Louvre</h1>
  </a>
`;
const nav = (0, navbar_1.default)(navItems, ['nav-list'], navItems.map((item) => `#${item.split('\n')[0].toLowerCase()}`));
nav.className = 'footer-nav';
const socialIcons = [
    icons_1.youtubeIcon,
    icons_1.instagramIcon,
    icons_1.facebookIcon,
    icons_1.twitterIcon,
    icons_1.pinterestIcon,
];
const socialUrl = [
    'https://www.youtube.com/',
    'https://www.instagram.com/',
    'https://www.facebook.com/',
    'https://twitter.com/',
    'https://www.pinterest.com/',
];
const socialNav = (0, navbar_1.default)(socialIcons, socialUrl);
socialNav.className = 'social-nav';
const copyrights = (0, baseComponent_1.default)('div', ['copyrights']);
copyrights.innerHTML = `
  <span>&copy; 2021</span>
  <a href="https://rs.school/" target="_blank">The Rolling Scopes School</a>
  <a href="https://github.com/evitla" target="_blank">evitla</a>
`;
footerContainer.appendChild(logo);
footerContainer.appendChild(nav);
footerContainer.appendChild(socialNav);
footerWrapper.appendChild(footerContainer);
footerWrapper.appendChild(copyrights);
footer.appendChild(footerWrapper);
exports["default"] = footer;


/***/ }),

/***/ 4977:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const navbar_1 = __importDefault(__webpack_require__(9635));
const icons_1 = __webpack_require__(6538);
__webpack_require__(5528);
const welcome_1 = __webpack_require__(5072);
const navItems = [
    'Visiting',
    'Explore',
    'Video',
    'Gallery',
    'Tickets',
    'Contact',
].map((item) => `${item}\n${icons_1.arrowIcon}`);
const header = (0, baseComponent_1.default)('header', ['black-bg']);
const wrapper = (0, baseComponent_1.default)('div', ['wrapper', 'header-wrapper']);
const logo = (0, baseComponent_1.default)('div', ['logo']);
logo.innerHTML = `
  <a href="#">
    ${icons_1.logoIcon} 
    <h1>Louvre</h1>
  </a>
`;
const nav = (0, navbar_1.default)(navItems, ['nav-list'], navItems.map((item) => `#${item.split('\n')[0].toLowerCase()}`));
const burger = (0, baseComponent_1.default)('div', ['burger']);
burger.innerHTML = `
  <div class="burger__line line1"></div>
  <div class="burger__line line2"></div>
  <div class="burger__line line3"></div>
`;
burger.onclick = () => {
    burger.classList.toggle('open-menu');
    nav.classList.toggle('open-menu');
    welcome_1.welcomeContent.classList.toggle('open-menu');
    welcome_1.welcomeWrapper.classList.toggle('open-menu');
};
wrapper.appendChild(logo);
wrapper.appendChild(nav);
wrapper.appendChild(burger);
header.appendChild(wrapper);
exports["default"] = header;


/***/ }),

/***/ 9635:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const unorderedList_1 = __importDefault(__webpack_require__(3840));
const navbar = (items, styles = [], hrefs = []) => {
    const element = (0, baseComponent_1.default)('nav', ['nav']);
    const ul = (0, unorderedList_1.default)(items, styles, hrefs);
    element.appendChild(ul);
    return element;
};
exports["default"] = navbar;


/***/ }),

/***/ 6676:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrowLeft = void 0;
exports.arrowLeft = `<svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.72254 8C3.90173 6.31339 1.99422 5.08262 0 4.30769V3.69231C1.99422 2.89459 3.90173 1.66382 5.72254 0H7.23988C6.37283 1.4359 5.53468 2.52991 4.72543 3.28205H30V4.71795H4.72543C5.53468 5.47009 6.37283 6.5641 7.23988 8H5.72254Z" fill="white"/>
</svg>`;
exports["default"] = exports.arrowLeft;


/***/ }),

/***/ 6543:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const arrowRight = `<svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.2775 1.97284e-06C26.0983 1.68661 28.0058 2.91738 30 3.69231L30 4.30769C28.0058 5.10541 26.0983 6.33618 24.2775 8L22.7601 8C23.6272 6.5641 24.4653 5.47009 25.2746 4.71795L3.48964e-07 4.71795L5.01636e-07 3.28205L25.2746 3.28205C24.4653 2.52992 23.6272 1.4359 22.7601 1.86378e-06L24.2775 1.97284e-06Z" fill="white"/>
</svg>`;
exports["default"] = arrowRight;


/***/ }),

/***/ 4951:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const arrow = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33309 5.53176L3.99294 0.191706C3.86943 0.068097 3.70455 0 3.52875 0C3.35294 0 3.18807 0.068097 3.06456 0.191706L2.67129 0.584873C2.41539 0.841066 2.41539 1.25745 2.67129 1.51326L7.15555 5.99751L2.66632 10.4867C2.5428 10.6104 2.47461 10.7751 2.47461 10.9508C2.47461 11.1267 2.5428 11.2915 2.66632 11.4152L3.05958 11.8083C3.18319 11.9319 3.34797 12 3.52377 12C3.69958 12 3.86445 11.9319 3.98796 11.8083L9.33309 6.46336C9.45689 6.33936 9.52489 6.1738 9.5245 5.99781C9.52489 5.82112 9.45689 5.65566 9.33309 5.53176Z" fill="white"/>
</svg>`;
exports["default"] = arrow;


/***/ }),

/***/ 1590:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const arrowLeft = `<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.4777 0.219168C5.87773 0.564178 5.94259 1.19347 5.62256
1.62473L2.37578 6.00004L5.62256 10.3753C5.94259 10.8066 5.87773 11.4359 5.4777 11.7809C5.07766 12.1259 4.49394
12.056 4.17391 11.6247L0 6.00004L4.17391 0.375342C4.49394 -0.0559202 5.07766 -0.125842 5.4777 0.219168ZM9.65184
0.219168C10.0519 0.564178 10.1167 1.19347 9.7967 1.62473L6.54992 6.00004L9.7967 10.3753C10.1167 10.8066 10.0519
11.4359 9.65184 11.7809C9.2518 12.1259 8.66808 12.056 8.34805 11.6247L4.17414 6.00004L8.34805 0.375342C8.66808
-0.0559202 9.2518 -0.125842 9.65184 0.219168Z" fill="#999999"/>
</svg>`;
exports["default"] = arrowLeft;


/***/ }),

/***/ 1025:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const arrowRight = `<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.348163 0.219168C0.748196 -0.125842 1.33192 -0.0559202 1.65195
0.375342L5.82586 6.00004L1.65194 11.6247C1.33192 12.056 0.748195 12.1259 0.348162 11.7809C-0.0518709 11.4359
-0.116729 10.8066 0.203297 10.3753L3.45008 6.00004L0.203298 1.62473C-0.116728 1.19347 -0.05187 0.564177 0.348163
0.219168ZM4.5223 0.219168C4.92234 -0.125841 5.50606 -0.0559197 5.82609 0.375342L10 6.00004L5.82609 11.6247C5.50606
12.056 4.92234 12.1259 4.5223 11.7809C4.12227 11.4359 4.05741 10.8066 4.37744 10.3753L7.62422 6.00004L4.37744
1.62473C4.05741 1.19347 4.12227 0.564178 4.5223 0.219168Z" fill="#999999"/>
</svg>`;
exports["default"] = arrowRight;


/***/ }),

/***/ 1684:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const facebook = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#666666"/>
</g>
<path d="M21.78 34L21.75 25.25H18V21.5H21.75V19C21.75 15.63 23.84 14 26.85 14C28.29 14 29.53 14.1 29.89 14.15V17.68H27.8C26.17 17.68 25.85 18.46 25.85 19.6V21.5H30.5L29.25 25.25H25.85V34H21.78Z" fill="white"/>
<defs>
<filter id="filter0_d" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>`;
exports["default"] = facebook;


/***/ }),

/***/ 6538:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.doubleArrowRightIcon = exports.doubleArrowLeftIcon = exports.arrowRightIcon = exports.arrowLeftIcon = exports.pinterestIcon = exports.twitterIcon = exports.facebookIcon = exports.instagramIcon = exports.youtubeIcon = exports.logoIcon = exports.arrowIcon = void 0;
var arrow_1 = __webpack_require__(4951);
Object.defineProperty(exports, "arrowIcon", ({ enumerable: true, get: function () { return __importDefault(arrow_1).default; } }));
var logo_1 = __webpack_require__(8557);
Object.defineProperty(exports, "logoIcon", ({ enumerable: true, get: function () { return __importDefault(logo_1).default; } }));
var youtube_1 = __webpack_require__(2346);
Object.defineProperty(exports, "youtubeIcon", ({ enumerable: true, get: function () { return __importDefault(youtube_1).default; } }));
var instagram_1 = __webpack_require__(7797);
Object.defineProperty(exports, "instagramIcon", ({ enumerable: true, get: function () { return __importDefault(instagram_1).default; } }));
var facebook_1 = __webpack_require__(1684);
Object.defineProperty(exports, "facebookIcon", ({ enumerable: true, get: function () { return __importDefault(facebook_1).default; } }));
var twitter_1 = __webpack_require__(2733);
Object.defineProperty(exports, "twitterIcon", ({ enumerable: true, get: function () { return __importDefault(twitter_1).default; } }));
var pinterest_1 = __webpack_require__(9290);
Object.defineProperty(exports, "pinterestIcon", ({ enumerable: true, get: function () { return __importDefault(pinterest_1).default; } }));
var arrow_left_1 = __webpack_require__(6676);
Object.defineProperty(exports, "arrowLeftIcon", ({ enumerable: true, get: function () { return __importDefault(arrow_left_1).default; } }));
var arrow_right_1 = __webpack_require__(6543);
Object.defineProperty(exports, "arrowRightIcon", ({ enumerable: true, get: function () { return __importDefault(arrow_right_1).default; } }));
var double_arrow_left_1 = __webpack_require__(1590);
Object.defineProperty(exports, "doubleArrowLeftIcon", ({ enumerable: true, get: function () { return __importDefault(double_arrow_left_1).default; } }));
var double_arrow_right_1 = __webpack_require__(1025);
Object.defineProperty(exports, "doubleArrowRightIcon", ({ enumerable: true, get: function () { return __importDefault(double_arrow_right_1).default; } }));


/***/ }),

/***/ 7797:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const instagram = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#666666"/>
</g>
<path d="M25.0202 14C26.8202 14 27.2002 14.02 28.1202 14.06C29.1802 14.11 29.9102 14.28 30.5402 14.53C31.2002 14.78 31.7602 15.13 32.3102 15.68C32.8702 16.23 33.2102 16.79 33.4702 17.45C33.7202 18.08 33.8802 18.81 33.9302 19.88C33.9802 20.83 33.9902 21.2 33.9902 23.2V24.8C33.9902 26.8 33.9802 27.17 33.9302 28.12C33.9144 28.9468 33.7589 29.7651 33.4702 30.54C33.2102 31.2 32.8702 31.76 32.3202 32.31C31.7602 32.87 31.2002 33.21 30.5402 33.47C29.9102 33.72 29.1802 33.88 28.1202 33.93C27.1702 33.98 26.7902 33.99 24.7902 33.99H23.2002C21.2002 33.99 20.8302 33.98 19.8702 33.93C19.0433 33.9141 18.2251 33.7586 17.4502 33.47C16.7838 33.2195 16.1798 32.8271 15.6802 32.32C15.168 31.8186 14.772 31.211 14.5202 30.54C14.2318 29.765 14.0763 28.9468 14.0602 28.12C14.0111 27.0874 13.9911 26.0537 14.0002 25.02V22.97C14.0002 21.17 14.0202 20.79 14.0602 19.87C14.1102 18.81 14.2802 18.08 14.5202 17.45C14.7802 16.79 15.1202 16.23 15.6802 15.68C16.1753 15.1674 16.7806 14.7742 17.4502 14.53C18.2246 14.2382 19.0428 14.0793 19.8702 14.06C20.7902 14.02 21.1702 14 22.9702 14H25.0202ZM25.0402 15.8H22.9502C21.2202 15.8 20.8502 15.82 19.9502 15.86C18.9802 15.9 18.4502 16.06 18.1002 16.2C17.6302 16.38 17.3002 16.6 16.9502 16.95C16.6002 17.3 16.3802 17.63 16.2002 18.1C16.0702 18.45 15.9002 18.98 15.8602 19.96C15.8202 20.86 15.8002 21.22 15.8002 22.96V25.04C15.8002 26.78 15.8202 27.14 15.8602 28.04C15.9002 29.01 16.0602 29.54 16.2002 29.89C16.3802 30.36 16.6002 30.69 16.9502 31.04C17.3002 31.39 17.6302 31.61 18.1002 31.79C18.4502 31.93 18.9802 32.09 19.9602 32.13C20.9302 32.18 21.2802 32.19 23.4402 32.19H24.5502C26.7202 32.19 27.0602 32.18 28.0402 32.13C29.0102 32.09 29.5402 31.93 29.8902 31.79C30.3602 31.61 30.6902 31.39 31.0402 31.04C31.3902 30.69 31.6102 30.36 31.7902 29.89C31.9302 29.54 32.0902 29.01 32.1302 28.04C32.1802 27.06 32.1902 26.72 32.1902 24.55V23.45C32.1902 21.28 32.1802 20.93 32.1302 19.95C32.0902 18.98 31.9302 18.45 31.7902 18.1C31.6292 17.6654 31.373 17.2725 31.0402 16.95C30.7179 16.6169 30.3249 16.3606 29.8902 16.2C29.2971 15.9832 28.6716 15.8682 28.0402 15.86C27.0409 15.8123 26.0405 15.7923 25.0402 15.8ZM24.0002 18.86C25.362 18.86 26.6681 19.401 27.6311 20.364C28.5941 21.327 29.1352 22.6331 29.1352 23.995C29.1352 25.3569 28.5941 26.663 27.6311 27.626C26.6681 28.589 25.362 29.13 24.0002 29.13C22.6383 29.13 21.3322 28.589 20.3692 27.626C19.4062 26.663 18.8652 25.3569 18.8652 23.995C18.8652 22.6331 19.4062 21.327 20.3692 20.364C21.3322 19.401 22.6383 18.86 24.0002 18.86ZM24.0002 20.66C23.1157 20.66 22.2674 21.0114 21.642 21.6368C21.0165 22.2622 20.6652 23.1105 20.6652 23.995C20.6652 24.8795 21.0165 25.7278 21.642 26.3532C22.2674 26.9786 23.1157 27.33 24.0002 27.33C24.8847 27.33 25.7329 26.9786 26.3584 26.3532C26.9838 25.7278 27.3352 24.8795 27.3352 23.995C27.3352 23.1105 26.9838 22.2622 26.3584 21.6368C25.7329 21.0114 24.8847 20.66 24.0002 20.66ZM29.3302 17.46C29.6484 17.46 29.9536 17.5864 30.1787 17.8115C30.4037 18.0365 30.5302 18.3417 30.5302 18.66C30.5302 18.9783 30.4037 19.2835 30.1787 19.5085C29.9536 19.7336 29.6484 19.86 29.3302 19.86C29.0119 19.86 28.7067 19.7336 28.4816 19.5085C28.2566 19.2835 28.1302 18.9783 28.1302 18.66C28.1302 18.3417 28.2566 18.0365 28.4816 17.8115C28.7067 17.5864 29.0119 17.46 29.3302 17.46Z" fill="white"/>
<defs>
<filter id="filter0_d" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>`;
exports["default"] = instagram;


/***/ }),

/***/ 8557:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const logo = `<svg width="49" height="26" viewBox="0 0 49 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49 26H0L24.5 0L49 26ZM13.3075 13.1309L16.6442 16.6702L19.981 13.1309L16.6442 9.58115L13.3075 13.1309ZM16.6442 25.0052L19.981 21.466L16.6442 17.9162L13.3075 21.466L16.6442 25.0052ZM32.4083 25.0052L35.745 21.466L32.4083 17.9162L29.019 21.466L32.4083 25.0052ZM28.4673 5.40314C28.4473 5.43762 28.4207 5.46941 28.3885 5.49738C27.3507 6.6178 26.2997 7.73822 25.2357 8.84817C25.1437 8.94241 25.2357 9.00524 25.2357 9.08901L28.3097 12.356L28.4542 12.4921L31.7909 8.96335L28.4673 5.40314ZM8.78847 25.0052L8.91984 24.8691L11.9938 21.6126C12.0428 21.5717 12.0702 21.5173 12.0702 21.4607C12.0702 21.4042 12.0428 21.3498 11.9938 21.3089C11.0611 20.3456 10.1547 19.3613 9.23512 18.3874L8.78847 17.9162L5.45174 21.466L8.78847 25.0052ZM17.2354 8.95288L20.5721 12.4921L20.6772 12.3979L23.8169 9.06806C23.922 8.95288 23.8169 8.89005 23.8169 8.80628L20.7429 5.56021L20.6115 5.42408L17.2354 8.95288ZM17.2354 17.3298L20.5721 20.8691L20.7429 20.7016C21.7413 19.6545 22.7528 18.6073 23.7643 17.4869C23.7926 17.4663 23.8152 17.4412 23.8307 17.4133C23.8461 17.3853 23.8541 17.3551 23.8541 17.3246C23.8541 17.2941 23.8461 17.2639 23.8307 17.2359C23.8152 17.208 23.7926 17.1829 23.7643 17.1623C22.8185 16.1675 21.8727 15.1728 20.9399 14.1675L20.5721 13.7906L17.2354 17.3298ZM32.9995 17.3298L36.3362 20.8691L39.6729 17.3298L36.3362 13.7906L32.9995 17.3298ZM28.4673 13.7801V13.8534L25.3013 17.2147C25.1962 17.3089 25.2357 17.3717 25.3013 17.4555L28.244 20.5969C28.3228 20.6911 28.4147 20.7853 28.5198 20.8901L31.8566 17.3508L28.4673 13.7801ZM12.7295 20.8482C12.7453 20.8175 12.7675 20.7892 12.7952 20.7644L15.9611 17.4031C16.0531 17.2984 15.9611 17.2461 15.9611 17.1623L12.8477 13.8953C12.8069 13.8484 12.7583 13.8061 12.7032 13.7696L9.37962 17.2984L12.7295 20.8482ZM32.3558 16.6597L35.6925 13.1204L32.3558 9.59162L29.019 13.1309L32.3558 16.6597ZM24.4737 8.28272L27.8105 4.74346L24.5263 1.27749H24.4606L21.2552 4.71204C21.2354 4.73712 21.2249 4.76616 21.2249 4.79581C21.2249 4.82546 21.2354 4.8545 21.2552 4.87958L24.4737 8.28272ZM24.4737 16.6597L27.8105 13.1204L24.5 9.58115L21.1633 13.1309L24.4737 16.6597ZM24.4737 25.0366L27.8105 21.4974L24.4737 17.9476L21.1633 21.466L24.4737 25.0366ZM40.2378 25.0366L43.5745 21.4974L40.2509 17.9791H40.1853L36.9668 21.3613C36.8617 21.4764 36.9668 21.5288 36.9668 21.6021L39.5941 24.4398L40.2378 25.0366ZM1.89169 25.2356H7.88204L4.91314 22.0942L1.89169 25.2356ZM41.1705 25.2356H47.1083L44.1394 22.0942L41.1705 25.2356ZM23.5542 25.2356L20.5721 22.0942L17.5901 25.2356H23.5542ZM33.3147 25.2356H39.2525L36.2836 22.0942L33.3147 25.2356ZM31.3968 25.2356L28.4279 22.0942L25.459 25.2356H31.3968ZM15.6327 25.2356L12.6638 22.0942L9.69491 25.2356H15.6327Z" fill="white"/>
</svg>`;
exports["default"] = logo;


/***/ }),

/***/ 9290:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const pinterest = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#666666"/>
</g>
<path d="M24.0002 14C21.6757 14.0082 19.4267 14.826 17.6398 16.3128C15.8529 17.7995 14.6397 19.8623 14.2089 22.1466C13.7781 24.4309 14.1565 26.7939 15.2791 28.8293C16.4017 30.8648 18.1984 32.4456 20.3602 33.3C20.2602 32.51 20.1902 31.3 20.3902 30.43L21.5602 25.46C21.5602 25.46 21.2602 24.86 21.2602 23.98C21.2602 22.59 22.0702 21.56 23.0802 21.56C23.9302 21.56 24.3502 22.2 24.3502 22.96C24.3502 23.82 23.8002 25.1 23.5102 26.29C23.2702 27.29 24.0102 28.1 25.0002 28.1C26.7802 28.1 28.1402 26.23 28.1402 23.53C28.1402 21.13 26.4202 19.47 23.9602 19.47C23.3758 19.4443 22.7923 19.5373 22.2448 19.7434C21.6973 19.9495 21.1973 20.2644 20.7749 20.669C20.3525 21.0737 20.0164 21.5598 19.787 22.0979C19.5576 22.636 19.4397 23.215 19.4402 23.8C19.4402 24.66 19.7702 25.58 20.1802 26.08C20.2602 26.18 20.2702 26.27 20.2402 26.37L19.9602 27.5C19.9202 27.68 19.8102 27.73 19.6302 27.64C18.3702 27.05 17.5902 25.24 17.5902 23.76C17.5902 20.61 19.8902 17.72 24.2102 17.72C27.6702 17.72 30.3802 20.18 30.3802 23.49C30.3802 26.94 28.2002 29.71 25.1802 29.71C24.1802 29.71 23.2202 29.18 22.9002 28.56L22.2702 30.93C21.9751 31.8577 21.5581 32.7421 21.0302 33.56C22.4041 33.9816 23.8526 34.1021 25.2772 33.9133C26.7018 33.7245 28.069 33.2309 29.2856 32.4661C30.5023 31.7014 31.5398 30.6833 32.3275 29.4814C33.1152 28.2795 33.6346 26.9219 33.8504 25.5011C34.0661 24.0804 33.9731 22.6298 33.5776 21.2482C33.1822 19.8666 32.4936 18.5865 31.5588 17.4951C30.6241 16.4036 29.465 15.5264 28.1607 14.9233C26.8563 14.3202 25.4373 14.0053 24.0002 14Z" fill="white"/>
<defs>
<filter id="filter0_d" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>`;
exports["default"] = pinterest;


/***/ }),

/***/ 2733:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const twitter = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#666666"/>
</g>
<path d="M34 17.88C33.25 18.25 32.5 18.38 31.62 18.5C32.5 18 33.12 17.25 33.37 16.25C32.5606 16.7313 31.6743 17.0696 30.75 17.25C29.9485 16.4623 28.8737 16.0145 27.75 16C25.62 16 23.75 17.88 23.75 20.13C23.75 20.5 23.75 20.75 23.88 21C22.2422 20.9382 20.6364 20.5271 19.1705 19.7941C17.7045 19.0611 16.4121 18.0232 15.38 16.75C15.0081 17.3956 14.8342 18.1363 14.88 18.88C14.8916 19.552 15.0683 20.2108 15.3943 20.7984C15.7204 21.3861 16.186 21.8846 16.75 22.25C16.12 22.25 15.5 22 14.87 21.75C14.87 23.75 16.25 25.38 18.12 25.75C17.75 25.88 17.37 25.88 17 25.88C16.75 25.88 16.5 25.88 16.25 25.75C16.75 27.38 18.25 28.63 20.13 28.63C18.6778 29.7963 16.8622 30.4156 15 30.38H14C15.875 31.5591 18.0355 32.2056 20.25 32.25C27.75 32.25 31.88 26 31.88 20.62V20.12C32.7387 19.5335 33.4617 18.7697 34 17.88Z" fill="white"/>
<defs>
<filter id="filter0_d" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>`;
exports["default"] = twitter;


/***/ }),

/***/ 2346:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const youtube = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#666666"/>
</g>
<path d="M22.03 27.38V20.62L27.97 24L22.03 27.38ZM35.23 18.5C35.1026 18.0177 34.8508 17.5773 34.4998 17.2229C34.1488 16.8684 33.711 16.6122 33.23 16.48C31.46 16 24.35 16 24.35 16C24.35 16 17.25 16 15.48 16.48C14.999 16.6122 14.5612 16.8684 14.2102 17.2229C13.8592 17.5773 13.6074 18.0177 13.48 18.5C13 20.28 13 24 13 24C13 24 13 27.72 13.47 29.5C13.5983 29.9835 13.8516 30.4247 14.2044 30.7793C14.5572 31.1338 14.9972 31.3893 15.48 31.52C17.25 32 24.36 32 24.36 32C24.36 32 31.46 32 33.23 31.52C33.711 31.3878 34.1488 31.1316 34.4998 30.7771C34.8508 30.4227 35.1026 29.9823 35.23 29.5C35.71 27.72 35.71 24 35.71 24C35.71 24 35.71 20.28 35.24 18.5H35.23Z" fill="white"/>
<defs>
<filter id="filter0_d" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>`;
exports["default"] = youtube;


/***/ }),

/***/ 1639:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const map_png_1 = __importDefault(__webpack_require__(5094));
__webpack_require__(2090);
const contactsSection = (0, baseComponent_1.default)('section', ['white-bg']);
contactsSection.id = 'contact';
const contactsWrapper = (0, baseComponent_1.default)('div', ['wrapper', 'contacts-wrapper']);
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
    <img src=${map_png_1.default} alt="">
  </div>
`;
contactsSection.appendChild(contactsWrapper);
exports["default"] = contactsSection;


/***/ }),

/***/ 6172:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const explore_png_1 = __importDefault(__webpack_require__(5839));
__webpack_require__(7777);
const exploreSection = (0, baseComponent_1.default)('section', ['black-bg']);
exploreSection.id = 'explore';
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

/***/ 1106:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const _1_jpg_1 = __importDefault(__webpack_require__(1101));
const _2_jpg_1 = __importDefault(__webpack_require__(4304));
const _3_jpg_1 = __importDefault(__webpack_require__(7927));
const _4_jpg_1 = __importDefault(__webpack_require__(1941));
const _5_jpg_1 = __importDefault(__webpack_require__(7241));
const _6_jpg_1 = __importDefault(__webpack_require__(584));
const _7_jpg_1 = __importDefault(__webpack_require__(9474));
const _8_jpg_1 = __importDefault(__webpack_require__(8951));
const _9_jpg_1 = __importDefault(__webpack_require__(765));
const _10_jpg_1 = __importDefault(__webpack_require__(6760));
const _11_jpg_1 = __importDefault(__webpack_require__(4274));
const _12_jpg_1 = __importDefault(__webpack_require__(3921));
const _13_jpg_1 = __importDefault(__webpack_require__(9726));
const _14_jpg_1 = __importDefault(__webpack_require__(107));
const _15_jpg_1 = __importDefault(__webpack_require__(8278));
__webpack_require__(7146);
const imgs = [
    _1_jpg_1.default,
    _2_jpg_1.default,
    _3_jpg_1.default,
    _4_jpg_1.default,
    _5_jpg_1.default,
    _6_jpg_1.default,
    _7_jpg_1.default,
    _8_jpg_1.default,
    _9_jpg_1.default,
    _10_jpg_1.default,
    _11_jpg_1.default,
    _12_jpg_1.default,
    _13_jpg_1.default,
    _14_jpg_1.default,
    _15_jpg_1.default,
];
const gallerySection = (0, baseComponent_1.default)('section', ['black-bg']);
gallerySection.id = 'gallery';
const galleryWrapper = (0, baseComponent_1.default)('div', ['wrapper', 'gallery-wrapper']);
const images = imgs
    .sort(() => Math.random() - 0.5)
    .map((img, index) => `<figure class="gallery-img" data-key=${index}><img src=${img} alt=""></figure>`)
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
exports["default"] = gallerySection;


/***/ }),

/***/ 1583:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const welcome_1 = __importDefault(__webpack_require__(5072));
const virtual_1 = __importDefault(__webpack_require__(8386));
const explore_1 = __importDefault(__webpack_require__(6172));
const video_1 = __importDefault(__webpack_require__(5919));
const gallery_1 = __importDefault(__webpack_require__(1106));
const tickets_1 = __importDefault(__webpack_require__(9987));
const contacts_1 = __importDefault(__webpack_require__(1639));
__webpack_require__(1057);
const main = (0, baseComponent_1.default)('main');
const parallax = (0, baseComponent_1.default)('div', ['parallax']);
main.appendChild(welcome_1.default);
main.appendChild(virtual_1.default);
main.appendChild(explore_1.default);
main.appendChild(video_1.default);
main.appendChild(gallery_1.default);
main.appendChild(tickets_1.default);
main.appendChild(parallax);
main.appendChild(contacts_1.default);
exports["default"] = main;


/***/ }),

/***/ 9987:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
__webpack_require__(4721);
const ticketsSection = (0, baseComponent_1.default)('section', ['white-bg']);
ticketsSection.id = 'tickets';
const ticketsWrapper = (0, baseComponent_1.default)('div', ['wrapper', 'tickets-wrapper']);
ticketsWrapper.innerHTML = `
  <h2 class="section-title title-with-line">Buy Tickets</h2>
  <div class="tickets-container">
    <div class="img-container"></div>
    <div class="tickets-buy">
      <div class="tickets-type">
        <h4>Ticket Type</h4>
        <div class="radios">
          <label>
            <input type="radio" name="radio" checked>
            <span class="checkmark"></span>
            Permanent exhibition
          </label>
          <label>
            <input type="radio" name="radio">
            <span class="checkmark"></span>
            Temporary exhibition
          </label>
          <label>
            <input type="radio" name="radio">
            <span class="checkmark"></span>
            Combined Admission
          </label>
        </div>
      </div>
      <div class="tickets-amount">
        <h4>Amount</h4>
        <h5>Basic 18+</h5>
        <div class="amount-controller">
          <button type="button" onclick="this.nextElementSibling.stepDown()">&ndash;</button>
          <input type="number" min="0" max="20" value="1" readonly>
          <button type="button" onclick="this.previousElementSibling.stepUp()">+</button>
        </div>
        <h5>Senior 65+</h5>
        <div class="amount-controller">
          <button type="button" onclick="this.nextElementSibling.stepDown()">&ndash;</button>
          <input type="number" min="0" max="20" value="1" readonly>
          <button type="button" onclick="this.previousElementSibling.stepUp()">+</button>
        </div>
        <h4 class="total-amount">Total &#8364;220</h4>
        <button class="buy-btn">Buy Now</button>
      </div>
    </div>
  </div>
`;
ticketsSection.appendChild(ticketsWrapper);
exports["default"] = ticketsSection;


/***/ }),

/***/ 5919:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const video_jpg_1 = __importDefault(__webpack_require__(7374));
const play_circle_svg_1 = __importDefault(__webpack_require__(5412));
const play_svg_1 = __importDefault(__webpack_require__(1204));
const volume_svg_1 = __importDefault(__webpack_require__(8573));
const fullscreen_svg_1 = __importDefault(__webpack_require__(1425));
__webpack_require__(2791);
const icons_1 = __webpack_require__(6538);
const videoSection = (0, baseComponent_1.default)('section', ['white-bg']);
videoSection.id = 'video';
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
        <button class="video-btn play-btn">
          <img src=${play_svg_1.default} alt="">
        </button>
        <input type="range" class="play-range">
        <button class="video-btn volume-btn">
          <img src=${volume_svg_1.default} alt="">
        </button>
        <input type="range" class="volume-range">
        <button class="video-btn fullscreen-btn">
          <img src=${fullscreen_svg_1.default} alt="">
        </button>
      </div>
    </div>
  </div>
  <div class="video-slider">
    <div class="video-slides">
      <iframe class="yt-video"
        src="https://www.youtube.com/embed/aWmJ5DgyWPI" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;
        top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;
        text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/aWmJ5DgyWPI?autoplay=1>
        <img src=https://img.youtube.com/vi/aWmJ5DgyWPI/hqdefault.jpg alt=''><span>▶</span></a>"allowfullscreen>
      </iframe>
      <iframe class="yt-video"
        src="https://www.youtube.com/embed/Vi5D6FKhRmo" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;
        top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;
        text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Vi5D6FKhRmo?autoplay=1>
        <img src=https://img.youtube.com/vi/Vi5D6FKhRmo/hqdefault.jpg alt=''><span>▶</span></a>"allowfullscreen>
      </iframe>
      <iframe class="yt-video"
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
        ${icons_1.doubleArrowLeftIcon}
      </a>
      <a class="dot active" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a href="" onclick='return false;'>
        ${icons_1.doubleArrowRightIcon}
      </a>
    </div>
  </div>
`;
videoSection.appendChild(videoWrapper);
exports["default"] = videoSection;


/***/ }),

/***/ 6944:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const tourCard = (title, imgSrc, url) => {
    const element = (0, baseComponent_1.default)('figure', ['tour-card']);
    element.innerHTML = `
    <a href=${url} target="_blank">
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

/***/ 8386:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const tourCard_1 = __importDefault(__webpack_require__(6944));
const _1_jpg_1 = __importDefault(__webpack_require__(1274));
const _2_jpg_1 = __importDefault(__webpack_require__(5105));
const _3_jpg_1 = __importDefault(__webpack_require__(37));
const _4_jpg_1 = __importDefault(__webpack_require__(7588));
const _5_jpg_1 = __importDefault(__webpack_require__(5055));
const _6_jpg_1 = __importDefault(__webpack_require__(2466));
__webpack_require__(5425);
const virtualSection = (0, baseComponent_1.default)('section', ['virtual', 'white-bg']);
virtualSection.id = 'visiting';
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
    const card = (0, tourCard_1.default)(title, imgs[index], `./tour${index + 2}.html`);
    virtualCards.appendChild(card);
});
virtualWrapper.appendChild(virtualCards);
virtualSection.appendChild(virtualWrapper);
exports["default"] = virtualSection;


/***/ }),

/***/ 5072:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.welcomeContent = exports.welcomeWrapper = void 0;
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const _1_jpg_1 = __importDefault(__webpack_require__(6684));
__webpack_require__(6349);
const icons_1 = __webpack_require__(6538);
exports.welcomeWrapper = (0, baseComponent_1.default)('div', [
    'wrapper',
    'welcome-wrapper',
]);
const welcomeSection = (0, baseComponent_1.default)('section', ['welcome', 'black-bg']);
welcomeSection.id = 'welcome';
exports.welcomeContent = (0, baseComponent_1.default)('div', ['welcome-content']);
exports.welcomeContent.innerHTML = `
  <h2 class="section-title">Welcome</br> to the Louvre</h2>
  <p>From the castle to the museum</p>
  <a class="btn" href="./tour1.html" target="_blank">Discover the Louvre</a>
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
    ${icons_1.arrowLeftIcon}
    ${icons_1.arrowRightIcon}
  </div>
`;
welcomeSlider.appendChild(welcomeSliderPagination);
exports.welcomeWrapper.appendChild(exports.welcomeContent);
exports.welcomeWrapper.appendChild(welcomeSlider);
welcomeSection.appendChild(exports.welcomeWrapper);
exports["default"] = welcomeSection;


/***/ }),

/***/ 3840:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(2645));
const unorderedList = (items, styles = [], hrefs = []) => {
    const element = (0, baseComponent_1.default)('ul', styles);
    element.innerHTML = items
        .map((item, index) => `<li><a href="${hrefs[index]}">${item}</a></li>`)
        .join('');
    return element;
};
exports["default"] = unorderedList;


/***/ }),

/***/ 3607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const header_1 = __importDefault(__webpack_require__(4977));
const main_1 = __importDefault(__webpack_require__(1583));
const footer_1 = __importDefault(__webpack_require__(2000));
__webpack_require__(4868);
document.body.appendChild(header_1.default);
document.body.appendChild(main_1.default);
document.body.appendChild(footer_1.default);


/***/ }),

/***/ 5839:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dd6c5f20e43fa8ceeba1.png";

/***/ }),

/***/ 1425:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f84b1b9edf5b12f5e9d6.svg";

/***/ }),

/***/ 1101:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/66a13acfdf8f43d5017d.jpg";

/***/ }),

/***/ 6760:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/996104d2ab924ad833c1.jpg";

/***/ }),

/***/ 4274:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3ac3c0d151e2c2e8dba0.jpg";

/***/ }),

/***/ 3921:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d9e3f566b45e43688a88.jpg";

/***/ }),

/***/ 9726:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f1e2d7e07c758205cd03.jpg";

/***/ }),

/***/ 107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/91d2f395ead683e8b25b.jpg";

/***/ }),

/***/ 8278:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2abc0d6e96efc163f3f7.jpg";

/***/ }),

/***/ 4304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/27cdb7104200c2942444.jpg";

/***/ }),

/***/ 7927:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ff54930f03b25caa5cae.jpg";

/***/ }),

/***/ 1941:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a8929b7eaa039093b92c.jpg";

/***/ }),

/***/ 7241:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/036156a5757c25d4abea.jpg";

/***/ }),

/***/ 584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3ab43a048cfe402ee32b.jpg";

/***/ }),

/***/ 9474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f1e41f00cb4a26bda6b8.jpg";

/***/ }),

/***/ 8951:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/338a69dd76f01e1e254b.jpg";

/***/ }),

/***/ 765:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8d8acd85fc1b318c9a4b.jpg";

/***/ }),

/***/ 5094:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ee1b43580430ad28c52a.png";

/***/ }),

/***/ 5412:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/32ec6dce7c76ab1f234e.svg";

/***/ }),

/***/ 1204:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/45c9001d0ab48afa8d10.svg";

/***/ }),

/***/ 7374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c9210862da07806babdd.jpg";

/***/ }),

/***/ 1274:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/14d659202fb0b95dcc32.jpg";

/***/ }),

/***/ 5105:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cbc3f2fc4ab1623fc8d2.jpg";

/***/ }),

/***/ 37:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dcb21b7826e052ee06fa.jpg";

/***/ }),

/***/ 7588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/408c22c3b8c8d08a0505.jpg";

/***/ }),

/***/ 5055:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dfaa6cfcd31bac1a7b75.jpg";

/***/ }),

/***/ 2466:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/086115dbfb4c3249ef88.jpg";

/***/ }),

/***/ 8573:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ae4b6cbe60435fd79160.svg";

/***/ }),

/***/ 6684:
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
/******/ 	var __webpack_exports__ = __webpack_require__(3607);
/******/ 	
/******/ })()
;