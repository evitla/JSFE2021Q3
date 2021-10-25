import baseComponent from './baseComponent';

const unorderedList = (
  items: (string | HTMLElement)[],
  styles: string[] = []
): HTMLElement => {
  const element = baseComponent('ul', styles);

  element.append(
    ...items.map((item) => {
      const listItem = baseComponent('li');
      listItem.append(item);
      return listItem;
    })
  );

  return element;
};

export default unorderedList;
