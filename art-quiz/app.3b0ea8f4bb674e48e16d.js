(() => {
  'use strict';
  var e = {
      83: (e, t, n) => {
        n.r(t);
      },
      851: (e, t, n) => {
        n.r(t);
      },
      681: (e, t, n) => {
        n.r(t);
      },
      257: (e, t, n) => {
        n.r(t);
      },
      897: (e, t, n) => {
        n.r(t);
      },
      633: (e, t, n) => {
        n.r(t);
      },
      695: (e, t, n) => {
        n.r(t);
      },
      837: (e, t, n) => {
        n.r(t);
      },
      868: (e, t, n) => {
        n.r(t);
      },
      711: (e, t, n) => {
        n.r(t);
      },
      403: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = class {
            constructor(e = 'div', t = []) {
              (this.element = document.createElement(e)),
                this.element.classList.add(...t);
            }
          });
      },
      508: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          n(83),
          (t.default = class {
            constructor(e, t = [], n = '#/', i = !1) {
              (this.element = document.createElement('a')),
                this.element.classList.add('button', ...t),
                (this.element.textContent = e),
                (this.element.href = n),
                i && this.element.removeAttribute('href');
            }
          });
      },
      414: function (e, t, n) {
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function s(e) {
                  try {
                    u(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    u(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(s, a);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const o = r(n(403)),
          s = n(928);
        n(851);
        class a extends o.default {
          constructor(e) {
            super('figure', ['category-item']),
              (this.props = e),
              (this.link = document.createElement('a')),
              (this.link.href = '#/categories/' + e.imageNumber / 10);
          }
          render() {
            return i(this, void 0, void 0, function* () {
              (this.score = +(0, s.getLocalStorage)(
                `score-${this.props.title}`,
              )),
                this.element.append(this.link),
                this.renderTitle();
              const e = (0, s.getImageURL)(this.props.imageNumber);
              this.renderImage(e);
            });
          }
          renderTitle() {
            this.link.innerHTML = `\n      <figcaption>\n        <h3>${
              this.props.title
            }</h3>\n        <span>${
              this.score ? `${this.score}/10` : ''
            }</span>\n      </figcaption>\n    `;
          }
          renderImage(e) {
            const t = new Image();
            (t.src = e),
              (t.alt = 'Category image'),
              this.score && (t.style.filter = 'none'),
              this.link.append(t);
          }
        }
        t.default = a;
      },
      181: function (e, t, n) {
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function s(e) {
                  try {
                    u(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    u(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(s, a);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const o = r(n(403));
        n(681);
        class s extends o.default {
          constructor() {
            super('footer', ['footer']);
          }
          render() {
            return i(this, void 0, void 0, function* () {
              this.element.innerHTML =
                '\n      <div class="wrapper footer-wrapper">\n        <a class="github" href="https://github.com/evitla" target="_blank" rel="noopener noreferrer">\n          evitla\n        </a>\n        <a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener noreferrer">\n          <span class="rss-year">\'21</span>\n        </a>\n      </div>\n    ';
            });
          }
        }
        t.default = s;
      },
      931: function (e, t, n) {
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function s(e) {
                  try {
                    u(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    u(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(s, a);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const o = r(n(403)),
          s = r(n(826));
        n(257);
        const a = r(n(814));
        class u extends o.default {
          constructor() {
            super('header'),
              (this.wrapper = new o.default('div', [
                'wrapper',
                'header-wrapper',
              ])),
              (this.logo = new s.default(['header-logo'], !1)),
              (this.settingsIcon = new o.default('a', ['gear-icon'])),
              this.settingsIcon.element.setAttribute('href', '#/settings'),
              (this.settingsIcon.element.innerHTML = `\n      <img src=${a.default} alt="settings" >\n    `),
              this.wrapper.element.append(
                this.logo.element,
                this.settingsIcon.element,
              );
          }
          render() {
            return i(this, void 0, void 0, function* () {
              this.element.append(this.wrapper.element);
            });
          }
        }
        t.default = u;
      },
      826: function (e, t, n) {
        var i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(403));
        n(897);
        const o = i(n(835));
        class s extends r.default {
          constructor(e = [], t = !0) {
            super('div', ['logo', ...e]),
              (this.element.innerHTML = `\n      <a href="#/">\n        <img class="logo-image" src=${
                o.default
              } alt="logo">\n        ${
                t ? '<h1 class="logo-title">Art Quiz</h1>' : ''
              }\n      </a>\n    `);
          }
        }
        t.default = s;
      },
      607: function (e, t, n) {
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function s(e) {
                  try {
                    u(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    u(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(s, a);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const o = r(n(922)),
          s = r(n(647)),
          a = r(n(178)),
          u = r(n(478)),
          c = r(n(232)),
          l = r(n(440)),
          d = n(928),
          h = n(527);
        n(711),
          window.addEventListener('load', () =>
            i(void 0, void 0, void 0, function* () {
              const e = new o.default(),
                t = new u.default(),
                n = new c.default(),
                r = new s.default(h.categoryItemsProps),
                f = yield (0, d.getImages)('./images.json'),
                m = {
                  '/': t,
                  '/settings': n,
                  '/categories': r,
                  '/categories/:id': new a.default(f),
                },
                p = new l.default(m),
                g = () =>
                  i(void 0, void 0, void 0, function* () {
                    yield e.clear();
                    const t = p.getPage();
                    if (t)
                      yield t.render(),
                        yield e.render(t.element, t.hasHeader),
                        yield t.afterRender();
                    else {
                      const t = document.createElement('h2');
                      (t.innerText = '404. Page not found'), yield e.render(t);
                    }
                  });
              yield g(), window.addEventListener('hashchange', g);
            }),
          );
      },
      922: function (e, t, n) {
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function s(e) {
                  try {
                    u(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    u(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(s, a);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const o = r(n(181)),
          s = r(n(931));
        t.default = class {
          constructor() {
            (this.element = document.body),
              (this.header = new s.default()),
              (this.main = document.createElement('main')),
              (this.mainWrapper = document.createElement('div')),
              (this.footer = new o.default()),
              (this.mainWrapper.className = 'wrapper');
          }
          render(e, t = !1) {
            return i(this, void 0, void 0, function* () {
              this.main.append(this.mainWrapper),
                this.mainWrapper.append(e),
                t &&
                  (yield this.header.render(),
                  this.element.append(this.header.element)),
                yield this.footer.render(),
                this.element.append(this.main, this.footer.element);
            });
          }
          clear() {
            return i(this, void 0, void 0, function* () {
              (this.header.element.innerHTML = ''),
                (this.mainWrapper.innerHTML = '');
            });
          }
        };
      },
      758: function (e, t, n) {
        var i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = i(n(403));
        class o extends r.default {
          constructor(e = []) {
            super('div', e);
          }
        }
        t.default = o;
      },
      647: function (e, t, n) {
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function s(e) {
                  try {
                    u(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    u(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(s, a);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const o = r(n(758)),
          s = r(n(414));
        n(633);
        class a extends o.default {
          constructor(e) {
            super(['categories']),
              (this.hasHeader = !0),
              (this.categoryItems = e.map((e) => new s.default(e)));
          }
          render() {
            return i(this, void 0, void 0, function* () {
              this.element.append(...this.categoryItems.map((e) => e.element)),
                this.categoryItems.forEach((e) =>
                  i(this, void 0, void 0, function* () {
                    yield e.render();
                  }),
                );
            });
          }
          afterRender() {
            return i(this, void 0, void 0, function* () {});
          }
        }
        t.default = a;
      },
      178: function (e, t, n) {
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function s(e) {
                  try {
                    u(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    u(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(s, a);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const o = r(n(403)),
          s = n(527),
          a = n(928),
          u = r(n(758));
        n(695);
        class c extends u.default {
          constructor(e) {
            super(['category']),
              (this.images = e),
              (this.hasHeader = !0),
              (this.optionsContainer = new o.default('div', [
                'options-container',
              ])),
              (this.imageContainer = new o.default('figure', [
                'img-container',
              ])),
              (this.getAuthors = () => [
                ...new Set(this.images.map((e) => e.author)),
              ]),
              (this.renderAnswerOptions = () => {
                const e = this.getAuthors(),
                  t = [
                    ...(0, a.getUniqueRandomNumbers)(3, 0, e.length).map(
                      (t) => e[t],
                    ),
                    this.categoryImages[this.currentImage].author,
                  ].sort(() => 0.5 - Math.random());
                this.optionsContainer.element.innerHTML = t
                  .map(
                    (e) =>
                      `<button class="button button-small button-primary">${e}</button>`,
                  )
                  .join('\n');
              }),
              (this.handleClick = (e) =>
                i(this, void 0, void 0, function* () {
                  const t = e.target;
                  if (t.closest('button'))
                    if (
                      (this.optionsContainer.element
                        .querySelectorAll('button')
                        .forEach((e) => {
                          e.innerText ===
                            this.categoryImages[this.currentImage].author &&
                            (e.className =
                              'button button-small button-success');
                        }),
                      t.innerText ===
                      this.categoryImages[this.currentImage].author
                        ? this.score++
                        : (t.className = 'button button-small button-danger'),
                      this.currentImage++,
                      yield (0, a.delay)(750),
                      this.currentImage < 10)
                    )
                      (this.imageContainer.element.style.backgroundImage = `\n        url(${(0,
                      a.getImageURL)(
                        this.categoryImages[this.currentImage].imageNum,
                      )})\n      `),
                        this.renderAnswerOptions();
                    else {
                      (0, a.setLocalStorage)(
                        `score-${this.props.title}`,
                        this.score.toString(),
                      );
                      const e = document.createElement('a');
                      (e.href = '#/categories'), e.click();
                    }
                }));
          }
          render() {
            return i(this, void 0, void 0, function* () {
              const e = (0, a.parseRequestURL)();
              var t;
              (this.id = 10 * +e.id),
                (this.currentImage = 0),
                (this.score = 0),
                (this.props =
                  ((t = this.id),
                  s.categoryItemsProps.find((e) => e.imageNumber === t))),
                (this.categoryImages = ((e, t) => {
                  const n = [],
                    i = ((e) => (t) => {
                      const n = e.findIndex((e) => e.imageNum === t);
                      return -1 !== n ? e[n] : null;
                    })(e);
                  for (let e = t; e < t + 10; e++) n.push(i(e));
                  return n;
                })(this.images, this.id)),
                (this.imageContainer.element.style.backgroundImage = `\n      url(${(0,
                a.getImageURL)(
                  this.categoryImages[this.currentImage].imageNum,
                )})\n    `),
                this.renderAnswerOptions(),
                (this.element.innerHTML = `\n      <h3 class="category-title">${this.props.title}</h3>\n      <p class="question-title">Кто является автором данной картины?</p>\n    `);
              const n = new o.default('div', ['question-container']);
              n.element.append(
                this.imageContainer.element,
                this.optionsContainer.element,
              ),
                this.element.append(n.element);
            });
          }
          afterRender() {
            return i(this, void 0, void 0, function* () {
              this.optionsContainer.element.onclick = this.handleClick;
            });
          }
        }
        t.default = c;
      },
      478: function (e, t, n) {
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function s(e) {
                  try {
                    u(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    u(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(s, a);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const o = r(n(403)),
          s = r(n(508)),
          a = r(n(826)),
          u = r(n(758));
        n(837);
        class c extends u.default {
          constructor() {
            super(['home']),
              (this.hasHeader = !1),
              (this.logo = new a.default(['logo-main'])),
              (this.buttonsContainer = new o.default('div', ['btn-container'])),
              (this.ArtistsQuizButton = new s.default(
                'Artists Quiz',
                ['button-primary'],
                '#/categories',
              )),
              (this.PicturesQuizButton = new s.default(
                'Pictures Quiz',
                ['button-primary'],
                '#/categories',
              ));
          }
          render() {
            return i(this, void 0, void 0, function* () {
              this.buttonsContainer.element.append(
                this.ArtistsQuizButton.element,
                this.PicturesQuizButton.element,
              ),
                this.element.append(
                  this.logo.element,
                  this.buttonsContainer.element,
                );
            });
          }
          afterRender() {
            return i(this, void 0, void 0, function* () {});
          }
        }
        t.default = c;
      },
      232: function (e, t, n) {
        var i =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function s(e) {
                  try {
                    u(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    u(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(s, a);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        const o = r(n(758));
        n(868);
        class s extends o.default {
          constructor() {
            super(['settings']), (this.hasHeader = !0);
          }
          render() {
            return i(this, void 0, void 0, function* () {
              this.element.innerHTML = '<h2>Settings Page</h2>';
            });
          }
          afterRender() {
            return i(this, void 0, void 0, function* () {});
          }
        }
        t.default = s;
      },
      440: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const i = n(928);
        t.default = class {
          constructor(e) {
            this.routes = e;
          }
          getPage() {
            const e = (0, i.parseRequestURL)(),
              t =
                (e.resource ? `/${e.resource}` : '/') +
                (e.id ? '/:id' : '') +
                (e.verb ? `/${e.verb}` : '');
            return this.routes[t];
          }
        };
      },
      527: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.categoryItemsProps = void 0),
          (t.categoryItemsProps = [
            { title: 'portrait', imageNumber: 0 },
            { title: 'landscape', imageNumber: 10 },
            { title: 'still life', imageNumber: 20 },
            { title: 'impressionism', imageNumber: 30 },
            { title: 'expressionism', imageNumber: 40 },
            { title: 'avant-garde', imageNumber: 50 },
          ]);
      },
      928: function (e, t) {
        var n =
          (this && this.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
              function s(e) {
                try {
                  u(i.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  u(i.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              u((i = i.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getLocalStorage =
            t.setLocalStorage =
            t.getUniqueRandomNumbers =
            t.getRandomNumber =
            t.parseRequestURL =
            t.getImages =
            t.getImageURL =
            t.delay =
              void 0),
          (t.delay = (e) =>
            new Promise((t) => {
              setTimeout(t, e);
            })),
          (t.getImageURL = (e) =>
            `https://raw.githubusercontent.com/evitla/image-data/master/img/${e}.jpg`),
          (t.getImages = (e) =>
            n(void 0, void 0, void 0, function* () {
              const t = yield fetch(e);
              return (yield t.json()).images;
            })),
          (t.parseRequestURL = () => {
            const e = (
              window.location.hash.slice(1).toLowerCase() || '/'
            ).split('/');
            return { resource: e[1], id: e[2], verb: e[3] };
          }),
          (t.getRandomNumber = (e, t) => Math.floor(Math.random() * t) + e),
          (t.getUniqueRandomNumbers = (e, n, i) => {
            const r = new Set();
            for (; r.size < e; ) r.add((0, t.getRandomNumber)(n, i));
            return [...r];
          }),
          (t.setLocalStorage = (e, t) => localStorage.setItem(e, t)),
          (t.getLocalStorage = (e) =>
            localStorage.getItem(e) ? localStorage.getItem(e) : '');
      },
      814: (e, t, n) => {
        e.exports = n.p + 'assets/b61d4ce3c13c26e45c3e.svg';
      },
      835: (e, t, n) => {
        e.exports = n.p + 'assets/1fe2857efe634f8cbde7.svg';
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var o = (t[i] = { exports: {} });
    return e[i].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })()),
    (n.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + '');
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var i = t.getElementsByTagName('script');
        i.length && (e = i[i.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser',
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (n.p = e);
    })(),
    n(607);
})();
