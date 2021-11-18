class Layout {
  readonly element = document.body;

  async render(children: HTMLElement): Promise<void> {
    this.element.innerHTML = `
      <main>
        <div class="wrapper">
          ${children.outerHTML}
        </div>
      </main>
      <footer>
        <div class="wrapper">
          <h2>Footer</h2>
        </div>
      </footer>
    `;
  }
}

export default Layout;
