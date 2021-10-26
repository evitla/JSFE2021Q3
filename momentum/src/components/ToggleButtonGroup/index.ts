import baseComponent from '../baseComponent';

const toggleButtonGroup = (
  items: HTMLElement[],
  eventListtener: (target: HTMLElement) => void = () => {},
  styles: string[] = []
): HTMLElement => {
  const element = baseComponent('div', ['toggle-button-group', ...styles]);

  element.append(
    ...items.map((item) => {
      item.classList.add('toggle-button');
      return item;
    })
  );

  element.onclick = (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest('button');

    items.forEach((item) => item.classList.remove('active'));

    target.classList.add('active');

    eventListtener(target);
  };

  return element;
};

export default toggleButtonGroup;
