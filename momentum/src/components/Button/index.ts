import baseComponent from '../baseComponent';

import './style.scss';

const button = (content: string, styles: string[] = []): HTMLElement => {
  const element = baseComponent('button', ['btn', ...styles]);

  const front = baseComponent('span', ['front']);
  front.textContent = content;
  element.append(front);

  return element;
};

export default button;
