import baseComponent from '../../baseComponent';

import imgSrc from '../../../assets/images/video.jpg';
import playCircle from '../../../assets/images/play-circle.svg';
import play from '../../../assets/images/play.svg';
import volume from '../../../assets/images/volume.svg';
import fullscreen from '../../../assets/images/fullscreen.svg';

import './video.scss';
import { doubleArrowLeftIcon, doubleArrowRightIcon } from '../../icons';

const videoSection = baseComponent('section', ['white-bg']);
videoSection.id = 'video';

const videoWrapper = baseComponent('div', ['wrapper', 'video-wrapper']);
videoWrapper.innerHTML = `
  <div class="video-text">
    <h2 class="section-title video-title">Video Journey</h2>
    <p>
      Enter and visit one of the most famous museums in the world and enjoy masterpieces such
      as Mona Lisa or Hammurabi's Code
    </p>
  </div>
  <div class="video-container">
    <img src=${imgSrc} alt="">
    <button class="video-btn play-circle-btn">
      <img src=${playCircle} alt="">
    </button>
    <div class="video-controller black-bg">
      <div class="video-controller-container">
        <button class="video-btn play-btn">
          <img src=${play} alt="">
        </button>
        <input type="range" class="play-range">
        <button class="video-btn volume-btn">
          <img src=${volume} alt="">
        </button>
        <input type="range" class="volume-range">
        <button class="video-btn fullscreen-btn">
          <img src=${fullscreen} alt="">
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
        ${doubleArrowLeftIcon}
      </a>
      <a class="dot active" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a class="dot" href="" onclick='return false;'></a>
      <a href="" onclick='return false;'>
        ${doubleArrowRightIcon}
      </a>
    </div>
  </div>
`;

videoSection.appendChild(videoWrapper);

export default videoSection;
