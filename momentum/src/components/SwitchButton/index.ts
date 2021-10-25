import baseComponent from '../baseComponent';

import './style.scss';

const switchButton = (label: string, styles: string[] = []): HTMLElement => {
  const element = baseComponent('label', ['switch-button', ...styles]);

  element.innerHTML = `
    <span>${label}</span>
    <div class="switch-outer">
    <input type="checkbox" id="switch" checked/>
    <div class="button">
      <span class="button-toggle"></span>
      <span class="button-indicator"></span>
    </div>
    </div>
  `;

  return element;
};

export default switchButton;
