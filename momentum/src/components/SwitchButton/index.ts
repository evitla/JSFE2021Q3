import baseComponent from '../baseComponent';
import store, { Block } from '../store';
import { removeFromString, setLocalStorage } from '../utils';

import './style.scss';

const switchButton = (
  label: Block,
  target: HTMLElement,
  styles: string[] = []
): HTMLElement => {
  const element = baseComponent('label', ['switch-button', ...styles]);
  const switchOuter = baseComponent('div', ['switch-outer']);
  const input = baseComponent('input', [`switch-${label}`]) as HTMLInputElement;
  const button = baseComponent('div', ['button']);
  button.innerHTML = `
    <span class="button-toggle"></span>
    <span class="button-indicator"></span>
  `;

  element.innerHTML = `<span>${label}</span>`;
  input.checked = store.blocks.includes(label);
  input.type = 'checkbox';

  element.onchange = () => {
    target.classList.toggle('non-visible');

    store.blocks = input.checked
      ? `${store.blocks} ${label}`
      : removeFromString(store.blocks, label);

    setLocalStorage('blocks', store.blocks);
  };

  switchOuter.append(input, button);
  element.append(switchOuter);
  return element;
};

export default switchButton;
