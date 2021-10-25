import baseComponent from '../baseComponent';

import './style.scss';

const switchButton = (
  label: string,
  target: HTMLElement,
  styles: string[] = []
): HTMLElement => {
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

  element.onchange = () => target.classList.toggle('non-visible');

  return element;
};

export default switchButton;
