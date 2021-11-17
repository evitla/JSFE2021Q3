class Layout {
  readonly element = document.body;

  async render(children: HTMLElement | null = null): Promise<void> {
    this.element.innerHTML = `
      <main>
        <div class="wrapper">
          ${children.innerHTML}
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
