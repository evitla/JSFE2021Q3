import baseComponent from '../../baseComponent';

import imgSrc from '../../../assets/images/video.jpg';
import playCircle from '../../../assets/images/play-circle.svg';
import play from '../../../assets/images/play.svg';
import volume from '../../../assets/images/volume.svg';
import fullscreen from '../../../assets/images/fullscreen.svg';

import './video.scss';

const videoSection = baseComponent('section', ['white-bg']);
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
        <button class="video-btn">
          <img src=${play} alt="">
        </button>
        <input type="range" class="play-range">
        <button class="video-btn">
          <img src=${volume} alt="">
        </button>
        <input type="range" class="volume-range">
        <button class="video-btn">
          <img src=${fullscreen} alt="">
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

export default videoSection;
