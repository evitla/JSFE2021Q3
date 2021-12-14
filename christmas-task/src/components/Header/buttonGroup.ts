import BaseComponent from '../BaseComponent';
import Button from '../Button';

import snowflakeIcon from '../../assets/svg/snowflake.svg';
import audioIcon from '../../assets/svg/audio.svg';

class ButtonGroup extends BaseComponent {
  parentNode: HTMLElement;

  snowflakeButton = new Button(
    this.element,
    `<img src=${snowflakeIcon} alt="snowflake">`,
    ['button-primary', 'icon-button']
  );

  audioButton = new Button(this.element, `<img src=${audioIcon} alt="audio">`, [
    'button-primary',
    'icon-button',
    'audio-icon',
    'off',
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

  afterRender(): void {
    this.snowflakeButton.element.onclick = () => {
      this.snowflakeButton.element.classList.toggle('off');
    };

    this.audioButton.element.onclick = () => {
      this.audioButton.element.classList.toggle('off');
    };
  }
}

export default ButtonGroup;
