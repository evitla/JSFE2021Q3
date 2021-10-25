/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 63:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7c76faa5999017ffec2feca811307646.mp3");

/***/ }),

/***/ 589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "21bf1950ab63b478229ab2ed1c7f133a.mp3");

/***/ }),

/***/ 6:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a656f498fb59c73243d1bcd58686d271.mp3");

/***/ }),

/***/ 806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b44bd629d4635aae13cb4c7f0534cb34.mp3");

/***/ }),

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 541:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const unorderedList_1 = __importDefault(__webpack_require__(840));
const SwitchButton_1 = __importDefault(__webpack_require__(222));
__webpack_require__(717);
const timeAndDate_1 = __webpack_require__(291);
const greeting_1 = __importDefault(__webpack_require__(543));
const quoteBlock_1 = __importDefault(__webpack_require__(303));
const Weather_1 = __importDefault(__webpack_require__(604));
const Player_1 = __importDefault(__webpack_require__(347));
const appSettings = (0, baseComponent_1.default)('div', ['settings']);
const settingSwitchButton = (label, target) => (0, SwitchButton_1.default)(label, target, ['settings-switch-button']);
const timeSetting = settingSwitchButton('time', timeAndDate_1.time);
const dateSetting = settingSwitchButton('date', timeAndDate_1.date);
const greetingSetting = settingSwitchButton('greeting', greeting_1.default);
const quoteSetting = settingSwitchButton('quote', quoteBlock_1.default);
const weatherSetting = settingSwitchButton('weather', Weather_1.default);
const audioSetting = settingSwitchButton('audio', Player_1.default);
const settings = [
    timeSetting,
    dateSetting,
    greetingSetting,
    quoteSetting,
    weatherSetting,
    audioSetting,
];
const settingsList = (0, unorderedList_1.default)(settings, ['settings-list']);
const gearButton = (0, baseComponent_1.default)('button', ['gear-icon']);
gearButton.onclick = () => {
    gearButton.classList.toggle('active');
    settingsList.style.display = gearButton.classList.contains('active')
        ? 'block'
        : 'none';
};
document.body.onclick = (e) => {
    const path = e.composedPath && e.composedPath();
    if (!path.includes(appSettings)) {
        gearButton.classList.remove('active');
        settingsList.style.display = 'none';
    }
};
appSettings.append(settingsList, gearButton);
exports["default"] = appSettings;


/***/ }),

/***/ 181:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AppSettings_1 = __importDefault(__webpack_require__(541));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const quoteBlock_1 = __importDefault(__webpack_require__(303));
__webpack_require__(681);
const footer = (0, baseComponent_1.default)('footer', ['footer']);
footer.append(AppSettings_1.default, quoteBlock_1.default);
exports["default"] = footer;


/***/ }),

/***/ 303:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const store_1 = __importDefault(__webpack_require__(338));
const utils_1 = __webpack_require__(525);
const quoteBlock = (0, baseComponent_1.default)('div', ['quote-block']);
if (!store_1.default.blocks.includes('quote'))
    quoteBlock.classList.add('non-visible');
const changeQuoteButton = (0, baseComponent_1.default)('button', ['change-quote']);
const quoteContainer = (0, baseComponent_1.default)('div');
const quoteText = (0, baseComponent_1.default)('div', ['quote']);
const author = (0, baseComponent_1.default)('div', ['author']);
const getQuotes = (lang) => __awaiter(void 0, void 0, void 0, function* () {
    const url = './quotes.json';
    const quotes = (yield (yield fetch(url)).json())[lang];
    return quotes;
});
const writeQuote = (quote) => {
    quoteText.textContent = quote.text;
    author.textContent = quote.author;
};
getQuotes('en').then((quotes) => {
    let quoteId = (0, utils_1.getRandomNumber)(0, quotes.length);
    writeQuote(quotes[quoteId]);
    changeQuoteButton.onclick = () => {
        quoteId = (0, utils_1.getRandomNumber)(0, quotes.length);
        writeQuote(quotes[quoteId]);
    };
});
quoteContainer.append(quoteText, author);
quoteBlock.append(changeQuoteButton, quoteContainer);
exports["default"] = quoteBlock;


/***/ }),

/***/ 109:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const Player_1 = __importDefault(__webpack_require__(347));
const Weather_1 = __importDefault(__webpack_require__(604));
__webpack_require__(257);
const header = (0, baseComponent_1.default)('header', ['header']);
header.appendChild(Player_1.default);
header.appendChild(Weather_1.default);
exports["default"] = header;


/***/ }),

/***/ 543:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showGreeting = void 0;
const baseComponent_1 = __importDefault(__webpack_require__(645));
const store_1 = __importDefault(__webpack_require__(338));
const utils_1 = __webpack_require__(525);
const greetingContainer = (0, baseComponent_1.default)('div', ['greeting-container']);
if (!store_1.default.blocks.includes('greeting'))
    greetingContainer.classList.add('non-visible');
const greeting = (0, baseComponent_1.default)('span', ['greeting']);
const nameInput = (0, baseComponent_1.default)('input', ['name']);
nameInput.type = 'text';
nameInput.placeholder = '[Enter name]';
nameInput.value = store_1.default.username;
const showGreeting = (currentDate) => {
    greeting.textContent = `Good ${(0, utils_1.getTimeOfDay)(currentDate)}`;
};
exports.showGreeting = showGreeting;
nameInput.onchange = () => (0, utils_1.setLocalStorage)('username', nameInput.value);
greetingContainer.appendChild(greeting);
greetingContainer.appendChild(nameInput);
exports["default"] = greetingContainer;


/***/ }),

/***/ 235:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const sliderIcons_1 = __importDefault(__webpack_require__(271));
const timeAndDate_1 = __webpack_require__(291);
const greeting_1 = __importDefault(__webpack_require__(543));
__webpack_require__(808);
const main = (0, baseComponent_1.default)('main', ['main']);
main.appendChild(sliderIcons_1.default);
main.appendChild(timeAndDate_1.time);
main.appendChild(timeAndDate_1.date);
main.appendChild(greeting_1.default);
exports["default"] = main;


/***/ }),

/***/ 271:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const utils_1 = __webpack_require__(525);
const sliderIcons = (0, baseComponent_1.default)('div', ['slider-icons']);
const prevButton = (0, baseComponent_1.default)('button', ['slide-prev', 'slider-icon']);
const nextButton = (0, baseComponent_1.default)('button', ['slide-next', 'slider-icon']);
const [minBgNum, maxBgNum] = [1, 20];
let bgNum = (0, utils_1.getRandomNumber)(minBgNum, maxBgNum);
(0, utils_1.setBackground)(document.body, bgNum);
const getPrevSlide = () => {
    bgNum = bgNum === minBgNum ? maxBgNum : bgNum - 1;
    (0, utils_1.setBackground)(document.body, bgNum);
};
const getNextSlide = () => {
    bgNum = bgNum === maxBgNum ? minBgNum : bgNum + 1;
    (0, utils_1.setBackground)(document.body, bgNum);
};
prevButton.onclick = getPrevSlide;
nextButton.onclick = getNextSlide;
sliderIcons.appendChild(prevButton);
sliderIcons.appendChild(nextButton);
exports["default"] = sliderIcons;


/***/ }),

/***/ 291:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.date = exports.time = void 0;
const baseComponent_1 = __importDefault(__webpack_require__(645));
const store_1 = __importDefault(__webpack_require__(338));
const greeting_1 = __webpack_require__(543);
exports.time = (0, baseComponent_1.default)('time', ['time']);
if (!store_1.default.blocks.includes('time'))
    exports.time.classList.add('non-visible');
exports.date = (0, baseComponent_1.default)('date', ['date']);
if (!store_1.default.blocks.includes('date'))
    exports.date.classList.add('non-visible');
const getDay = (currentDate) => {
    const currentDay = currentDate.toLocaleDateString('en-US', {
        dateStyle: 'full',
    });
    // day has 'weekday, month day, year' format
    // return day without year
    return currentDay.split(', ').slice(0, 2).join(', ');
};
const showTimeDateAndGreeting = () => {
    const currentDate = new Date();
    const currentDay = getDay(currentDate);
    const currentTime = currentDate.toLocaleTimeString();
    exports.time.textContent = currentTime;
    exports.date.textContent = currentDay;
    (0, greeting_1.showGreeting)(currentDate);
    setTimeout(showTimeDateAndGreeting, 1000);
};
showTimeDateAndGreeting();


/***/ }),

/***/ 347:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const unorderedList_1 = __importDefault(__webpack_require__(840));
const utils_1 = __webpack_require__(525);
const constants_1 = __webpack_require__(37);
__webpack_require__(132);
const store_1 = __importDefault(__webpack_require__(338));
const player = (0, baseComponent_1.default)('div', ['player']);
if (!store_1.default.blocks.includes('audio'))
    player.classList.add('non-visible');
const playListContainer = (0, unorderedList_1.default)(constants_1.playList.map((p) => p.title), ['play-list']);
let currentSongId = 0;
let audioCurrentTime = 0;
let isPlay = false;
const timeline = (0, baseComponent_1.default)('div', ['timeline']);
const progressBar = (0, baseComponent_1.default)('div', ['progress']);
const playerController = (0, baseComponent_1.default)('div', ['controls']);
const playerButtons = (0, baseComponent_1.default)('div', ['play-container']);
const playPrevButton = (0, baseComponent_1.default)('button', ['play-prev', 'player-icon']);
const playButton = (0, baseComponent_1.default)('button', ['play', 'player-icon']);
const playNextButton = (0, baseComponent_1.default)('button', ['play-next', 'player-icon']);
const audioTime = (0, baseComponent_1.default)('div', ['autio-time']);
const currentTime = (0, baseComponent_1.default)('div', ['current']);
currentTime.textContent = '0:00';
const divider = (0, baseComponent_1.default)('div', ['divider']);
divider.innerHTML = '&nbsp;/&nbsp;';
const audioDuration = (0, baseComponent_1.default)('div', ['duration']);
const audioTitle = (0, baseComponent_1.default)('div', ['audio-title']);
const audio = new Audio(constants_1.playList[currentSongId].src);
audioDuration.textContent = constants_1.playList[currentSongId].duration;
audioTitle.textContent = constants_1.playList[currentSongId].title;
const handleTimeline = (e) => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = (e.offsetX / parseInt(timelineWidth, 10)) * audio.duration;
    audio.currentTime = timeToSeek;
    audioCurrentTime = timeToSeek;
};
timeline.addEventListener('click', handleTimeline, false);
setInterval(() => {
    progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    currentTime.textContent = (0, utils_1.getTimeCodeFromNum)(audio.currentTime);
}, 500);
const playAudio = (songId, canPause = true) => {
    if (isPlay && canPause) {
        playButton.classList.remove('pause');
        audio.pause();
        audioCurrentTime = audio.currentTime;
        isPlay = false;
        return;
    }
    playButton.classList.add('pause');
    playListContainer.children[songId].classList.add('active');
    audioDuration.textContent = constants_1.playList[songId].duration;
    audioTitle.textContent = constants_1.playList[songId].title;
    audio.src = constants_1.playList[songId].src;
    audio.currentTime = audioCurrentTime;
    audio.play();
    isPlay = true;
};
const handlePlayerController = (e) => {
    const target = e.target;
    if (target.tagName !== 'BUTTON')
        return;
    if (target.classList.contains('play')) {
        playAudio(currentSongId);
        return;
    }
    if (target.classList.contains('play-prev'))
        currentSongId--;
    else if (target.classList.contains('play-next'))
        currentSongId++;
    if (currentSongId < 0)
        currentSongId = constants_1.playList.length - 1;
    else if (currentSongId >= constants_1.playList.length)
        currentSongId = 0;
    audioDuration.textContent = constants_1.playList[currentSongId].duration;
    audioTitle.textContent = constants_1.playList[currentSongId].title;
    Array.from(playListContainer.children, (li) => {
        li.classList.remove('active');
        return null;
    });
    audioCurrentTime = 0;
    playAudio(currentSongId, false);
};
playerController.onclick = handlePlayerController;
audio.onended = () => {
    isPlay = false;
    playListContainer.children[currentSongId].classList.toggle('active');
    currentSongId++;
    if (currentSongId >= constants_1.playList.length)
        currentSongId = 0;
    audioCurrentTime = 0;
    playAudio(currentSongId);
};
timeline.append(progressBar);
playerButtons.append(playPrevButton, playButton, playNextButton);
audioTime.append(currentTime, divider, audioDuration);
playerController.append(playerButtons, audioTime, audioTitle);
player.append(timeline, playerController, playListContainer);
exports["default"] = player;


/***/ }),

/***/ 222:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const baseComponent_1 = __importDefault(__webpack_require__(645));
const store_1 = __importDefault(__webpack_require__(338));
const utils_1 = __webpack_require__(525);
__webpack_require__(582);
const switchButton = (label, target, styles = []) => {
    const element = (0, baseComponent_1.default)('label', ['switch-button', ...styles]);
    const switchOuter = (0, baseComponent_1.default)('div', ['switch-outer']);
    const input = (0, baseComponent_1.default)('input', [`switch-${label}`]);
    const button = (0, baseComponent_1.default)('div', ['button']);
    button.innerHTML = `
    <span class="button-toggle"></span>
    <span class="button-indicator"></span>
  `;
    element.innerHTML = `<span>${label}</span>`;
    input.checked = store_1.default.blocks.includes(label);
    input.type = 'checkbox';
    element.onchange = () => {
        target.classList.toggle('non-visible');
        store_1.default.blocks = input.checked
            ? `${store_1.default.blocks} ${label}`
            : (0, utils_1.removeFromString)(store_1.default.blocks, label);
        (0, utils_1.setLocalStorage)('blocks', store_1.default.blocks);
    };
    switchOuter.append(input, button);
    element.append(switchOuter);
    return element;
};
exports["default"] = switchButton;


/***/ }),

/***/ 604:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(37);
const baseComponent_1 = __importDefault(__webpack_require__(645));
const store_1 = __importDefault(__webpack_require__(338));
const utils_1 = __webpack_require__(525);
__webpack_require__(463);
const weather = (0, baseComponent_1.default)('weather', ['weather']);
if (!store_1.default.blocks.includes('weather'))
    weather.classList.add('non-visible');
const cityName = (0, baseComponent_1.default)('input', ['city']);
cityName.type = 'text';
const weatherIcon = (0, baseComponent_1.default)('i', ['weather-icon', 'owf']);
const weatherError = (0, baseComponent_1.default)('div', ['weather-error']);
const descriptionContainer = (0, baseComponent_1.default)('div', ['description-container']);
const temperature = (0, baseComponent_1.default)('span', ['temperature']);
const weatherDescription = (0, baseComponent_1.default)('span', ['weather-description']);
const wind = (0, baseComponent_1.default)('div', ['wind']);
const humidity = (0, baseComponent_1.default)('div', ['humidity']);
const getWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentCity = store_1.default.city;
    const weatherUrl = `
    http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&lang=en&APPID=${constants_1.weatherAppId}&units=metric
  `;
    const data = yield (yield fetch(weatherUrl)).json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    cityName.value = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
});
getWeather();
cityName.onchange = () => {
    (0, utils_1.setLocalStorage)('city', cityName.value);
    store_1.default.city = cityName.value;
    getWeather();
};
descriptionContainer.appendChild(temperature);
descriptionContainer.appendChild(weatherDescription);
weather.appendChild(cityName);
weather.appendChild(weatherIcon);
weather.appendChild(weatherError);
weather.appendChild(descriptionContainer);
weather.appendChild(wind);
weather.appendChild(humidity);
exports["default"] = weather;


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

/***/ 338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(525);
exports["default"] = {
    language: (0, utils_1.getLocalStorage)('language') || 'en',
    city: (0, utils_1.getLocalStorage)('city') || 'Minsk',
    username: (0, utils_1.getLocalStorage)('username'),
    photoSource: (0, utils_1.getLocalStorage)('photo-source') || 'github',
    blocks: (0, utils_1.getLocalStorage)('blocks') || 'empty time date greeting quote weather audio',
};


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
    element.append(...items.map((item) => {
        const listItem = (0, baseComponent_1.default)('li');
        listItem.append(item);
        return listItem;
    }));
    return element;
};
exports["default"] = unorderedList;


/***/ }),

/***/ 525:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeFromString = exports.getTimeCodeFromNum = exports.getLocalStorage = exports.setLocalStorage = exports.setBackground = exports.getRandomNumber = exports.getTimeOfDay = void 0;
const constants_1 = __webpack_require__(37);
const getTimeOfDay = (currentDate) => {
    const hours = currentDate.getHours();
    return constants_1.timesOfDay[Math.floor(hours / 6)];
};
exports.getTimeOfDay = getTimeOfDay;
const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;
exports.getRandomNumber = getRandomNumber;
const setBackground = (element, bgNum) => {
    const baseUrl = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images';
    const timeOfDay = (0, exports.getTimeOfDay)(new Date());
    const bgNumToString = bgNum.toString().padStart(2, '0');
    const imageUrl = `${baseUrl}/${timeOfDay}/${bgNumToString}.jpg`;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
        element.style.backgroundImage = `url(${imageUrl})`;
    };
};
exports.setBackground = setBackground;
const setLocalStorage = (key, value) => localStorage.setItem(key, value);
exports.setLocalStorage = setLocalStorage;
const getLocalStorage = (key) => localStorage.getItem(key) ? localStorage.getItem(key) : '';
exports.getLocalStorage = getLocalStorage;
// turn 128 seconds into 2:08
const getTimeCodeFromNum = (num) => {
    let seconds = num;
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    const hours = Math.floor(minutes / 60);
    minutes -= hours * 60;
    return hours === 0
        ? `${minutes}:${String(Math.round(seconds) % 60).padStart(2, '0')}`
        : `
        ${String(hours).padStart(2, '0')}:${minutes}:
        ${String(seconds % 60).padStart(2, '0')}
      `;
};
exports.getTimeCodeFromNum = getTimeCodeFromNum;
const removeFromString = (str, element, divider = ' ') => {
    return str
        .split(divider)
        .filter((item) => item !== element)
        .join(' ');
};
exports.removeFromString = removeFromString;


/***/ }),

/***/ 37:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.timesOfDay = exports.playList = exports.weatherAppId = void 0;
const Aqua_Caelestis_mp3_1 = __importDefault(__webpack_require__(63));
const River_Flows_In_You_mp3_1 = __importDefault(__webpack_require__(6));
const Ennio_Morricone_mp3_1 = __importDefault(__webpack_require__(589));
const Summer_Wind_mp3_1 = __importDefault(__webpack_require__(806));
exports.weatherAppId = '424b258116dc401184f3ac801fce0559';
exports.playList = [
    {
        title: 'Aqua Caelestis',
        src: Aqua_Caelestis_mp3_1.default,
        duration: '00:40',
    },
    {
        title: 'River Flows In You',
        src: River_Flows_In_You_mp3_1.default,
        duration: '01:37',
    },
    {
        title: 'Ennio Morricone',
        src: Ennio_Morricone_mp3_1.default,
        duration: '01:37',
    },
    {
        title: 'Summer Wind',
        src: Summer_Wind_mp3_1.default,
        duration: '01:50',
    },
];
exports.timesOfDay = ['night', 'morning', 'afternoon', 'evening'];


/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Footer_1 = __importDefault(__webpack_require__(181));
const Header_1 = __importDefault(__webpack_require__(109));
const Main_1 = __importDefault(__webpack_require__(235));
__webpack_require__(868);
document.body.appendChild(Header_1.default);
document.body.appendChild(Main_1.default);
document.body.appendChild(Footer_1.default);


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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