const baseComponent = (tagName: string, styles: string[] = []): HTMLElement => {
  const element = document.createElement(tagName);
  if (styles.length !== 0) element.classList.add(...styles);

  return element;
};

export default baseComponent;
