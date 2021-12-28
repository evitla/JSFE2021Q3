import BaseComponent from '../BaseComponent';
import Button from '../Button';

import snowflakeIcon from '../../assets/svg/snowflake.svg';
import audioIcon from '../../assets/svg/audio.svg';
import audioFile from '../../assets/audio/audio.mp3';
import { Snowflakes } from '..';

class ButtonGroup extends BaseComponent {
  parentNode: HTMLElement;

  audio = new Audio(audioFile);

  snowflakeButton = new Button(
    this.element,
    `<img src=${snowflakeIcon} alt="snowflake">`,
    ['button-primary', 'icon-button', 'active']
  );

  audioButton = new Button(this.element, `<img src=${audioIcon} alt="audio">`, [
    'button-primary',
    'icon-button',
    'audio-icon',
  ]);

  constructor(parentNode: HTMLElement) {
    super('div', ['header-button-group']);

    this.parentNode = parentNode;
  }

  render(): void {
    this.snowflakeButton.render();
    this.audioButton.render();

    this.parentNode.appendChild(this.element);
  }

  afterRender(snowflakes: Snowflakes): void {
    this.snowflakeButton.element.onclick = () => {
      if (this.snowflakeButton.element.classList.contains('active')) {
        this.snowflakeButton.element.classList.remove('active');
        snowflakes.element.remove();
        return;
      }

      this.snowflakeButton.element.classList.add('active');
      snowflakes.render();
    };

    this.audioButton.element.onclick = () => {
      if (this.audioButton.element.classList.contains('active')) {
        this.audioButton.element.classList.remove('active');
        this.audio.pause();
        return;
      }

      this.audioButton.element.classList.add('active');

      this.audio.currentTime = 0;
      this.audio.play();
    };
  }
}

export default ButtonGroup;
