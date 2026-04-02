/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/components/preloader.js
function hidePreloader() {
  var preloaders = document.querySelectorAll('.preloader');
  if (preloaders && preloaders.length) {
    preloaders.forEach(function (preloader) {
      preloader.classList.add('preloader_hidden');
      setTimeout(function () {
        preloader.remove();
      }, 600);
    });
  }
}
;// ./src/js/components/functions.js
var _document;
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});
if ((_document = document) !== null && _document !== void 0 && _document.body) {
  document.body.classList.add('loaded');
}
var unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
  var hsh = location.hash.replace('#', '');
  if (document.querySelector('.popup_' + hsh)) {
    popup_open(hsh);
  } else if (document.querySelector('div.' + hsh)) {
    _goto(document.querySelector('.' + hsh), 500, '');
  }
}
var themeToggle = document.querySelector('.theme-toggle');
var html = document.documentElement;
var THEME_KEY = 'theme';
var DARK = 'dark';

// Восстанавливаем тему при загрузке
var savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === DARK) {
  html.setAttribute('data-theme', DARK);
}
themeToggle === null || themeToggle === void 0 ? void 0 : themeToggle.addEventListener('click', function () {
  var isDark = html.getAttribute('data-theme') === DARK;
  if (isDark) {
    html.removeAttribute('data-theme');
    localStorage.setItem(THEME_KEY, 'light');
  } else {
    html.setAttribute('data-theme', DARK);
    localStorage.setItem(THEME_KEY, DARK);
  }
});
;// ./src/js/components/loaded.js
function loaded() {
  var animItems = document.querySelectorAll('.animate');
  if (animItems.length > 0) {
    var animOnScroll = function animOnScroll() {
      for (var index = 0; index < animItems.length; index++) {
        var animItem = animItems[index];
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;

        // Условие: элемент должен быть полностью в зоне видимости
        var animItemPoint = window.innerHeight - animItemHeight;
        if (pageYOffset > animItemOffset - animItemPoint + 0 && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('loaded');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('loaded');
          }
        }
      }
    };
    var offset = function offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };
    window.addEventListener('scroll', animOnScroll);
    setTimeout(function () {
      animOnScroll();
    }, 300);
  }
}
;// ./node_modules/swiper/shared/ssr-window.esm.mjs
/**
 * SSR Window 5.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2025, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: June 27, 2025
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}



;// ./node_modules/swiper/shared/utils.mjs
/* unused harmony import specifier */ var utils_getWindow;
/* unused harmony import specifier */ var utils_getDocument;


function classesToTokens(classes = '') {
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function utils_getComputedStyle(el) {
  const window = getWindow();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis = 'x') {
  const window = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = utils_getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function utils_isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function utils_extend(...args) {
  const to = Object(args[0]);
  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => key !== '__proto__' && key !== 'constructor' && key !== 'prototype');
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector = '') {
  const window = getWindow();
  const children = [...element.children];
  if (window.HTMLSlotElement && element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter(el => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
  // Breadth-first search through all parent's children and assigned elements
  const elementsQueue = [slot];
  while (elementsQueue.length > 0) {
    const elementToCheck = elementsQueue.shift();
    if (el === elementToCheck) {
      return true;
    }
    elementsQueue.push(...elementToCheck.children, ...(elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : []), ...(elementToCheck.assignedElements ? elementToCheck.assignedElements() : []));
  }
}
function elementIsChildOf(el, parent) {
  const window = getWindow();
  let isChild = parent.contains(el);
  if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild) {
      isChild = elementIsChildOfSlot(el, parent);
    }
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes = []) {
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = utils_getWindow();
  const document = utils_getDocument();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = getWindow();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = getWindow();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}
function getRotateFix(swiper) {
  return v => {
    if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
      return v + 0.001;
    }
    return v;
  };
}
function setInnerHTML(el, html = '') {
  if (typeof trustedTypes !== 'undefined') {
    el.innerHTML = trustedTypes.createPolicy('html', {
      createHTML: s => s
    }).createHTML(html);
  } else {
    el.innerHTML = html;
  }
}



;// ./node_modules/swiper/shared/swiper-core.mjs



let support;
function calcSupport() {
  const window = getWindow();
  const document = getDocument();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice({
  userAgent
} = {}) {
  const support = getSupport();
  const window = getWindow();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = getWindow();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize({
  swiper,
  on,
  emit
}) {
  const window = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window = getWindow();
  const attach = (target, options = {}) => {
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler(...args) {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit(...args) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
  height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  const swiperSize = swiper.size - offsetBefore - offsetAfter;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween - offsetBefore - offsetAfter;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
    setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
  }

  // set cssMode offsets
  if (params.cssMode) {
    setCSSProperty(wrapperEl, '--swiper-slides-offset-before', `${offsetBefore}px`);
    setCSSProperty(wrapperEl, '--swiper-slides-offset-after', `${offsetAfter}px`);
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides[i];
    if (slide) {
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide, slides);
      }
      if (elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line
    }

    if (isVirtual && params.slidesPerView === 'auto') {
      if (params.virtual.slidesPerViewAutoSlideSize) {
        slideSize = params.virtual.slidesPerViewAutoSlideSize;
      }
      if (slideSize && slide) {
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        slide.style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    } else if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slide.style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width', true) : elementOuterSize(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slide) {
        slide.style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slide) {
      slide.swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    // Check if snapToSlideEdge should be applied
    const isFractionalSlidesPerView = params.slidesPerView !== 'auto' && params.slidesPerView % 1 !== 0;
    const shouldSnapToSlideEdge = params.snapToSlideEdge && !params.loop && (params.slidesPerView === 'auto' || isFractionalSlidesPerView);

    // Calculate the last allowed snap index when snapToSlideEdge is enabled
    // This ensures minimum slides are visible at the end
    let lastAllowedSnapIndex = snapGrid.length;
    if (shouldSnapToSlideEdge) {
      let minVisibleSlides;
      if (params.slidesPerView === 'auto') {
        // For 'auto' mode, calculate how many slides fit based on actual sizes
        minVisibleSlides = 1;
        let accumulatedSize = 0;
        for (let i = slidesSizesGrid.length - 1; i >= 0; i -= 1) {
          accumulatedSize += slidesSizesGrid[i] + (i < slidesSizesGrid.length - 1 ? spaceBetween : 0);
          if (accumulatedSize <= swiperSize) {
            minVisibleSlides = slidesSizesGrid.length - i;
          } else {
            break;
          }
        }
      } else {
        minVisibleSlides = Math.floor(params.slidesPerView);
      }
      lastAllowedSnapIndex = Math.max(slidesLength - minVisibleSlides, 0);
    }
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (shouldSnapToSlideEdge) {
        // When snapToSlideEdge is enabled, only keep snaps up to lastAllowedSnapIndex
        if (i <= lastAllowedSnapIndex) {
          newSlidesGrid.push(slidesGridItem);
        }
      } else if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        // When snapToSlideEdge is disabled, keep snaps that fit within scrollable area
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      // Only add edge-aligned snap if snapToSlideEdge is not enabled
      if (!shouldSnapToSlideEdge) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.find(slideEl => slideEl.column === activeIndex);
      nextSlide = slides.find(slideEl => slideEl.column === activeIndex + 1);
      prevSlide = slides.find(slideEl => slideEl.column === activeIndex - 1);
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      // Next Slide
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }

      // Prev Slide
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach(slideEl => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl && !lazyEl.lazyPreloaderManaged) lazyEl.remove();
          }
        });
      }
    }
    // Skip removal if managed by React/Vue component
    if (lazyEl && !lazyEl.lazyPreloaderManaged) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled) {
    if (params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else {
      realIndex = activeIndex;
    }
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find(slideEl => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && dir === 'reset') {
    swiper.emit(`slideResetTransition${step}`);
  } else if (runCallbacks && activeIndex !== previousIndex) {
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index = 0, speed, runCallbacks = true, internal, initial) {
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // initial virtual
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  // Update Index
  if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  const browser = getBrowser();
  const isSafari = browser.isSafari;
  if (isVirtual && !initial && isSafari && swiper.isElement) {
    swiper.virtual.update(false, false, slideIndex);
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index = 0, speed, runCallbacks = true, internal) {
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides,
        slidesOffsetBefore,
        slidesOffsetAfter
      } = swiper.params;
      const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (bothDirections && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (bothDirections) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && bothDirections && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = bothDirections ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  const isFreeMode = params.freeMode && params.freeMode.enabled;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks = true, internal) {
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      swiper.slideToLoop(realIndex);
    } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex, initial) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const clearBlankSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
    slides.forEach(el => {
      el.remove();
    });
    if (slides.length > 0) {
      swiper.recalcSlides();
      swiper.updateSlides();
    }
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
    clearBlankSlides();
  }
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? createElement('swiper-slide', [params.slideBlankClass]) : createElement('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  const bothDirections = params.centeredSlides || !!params.slidesOffsetBefore || !!params.slidesOffsetAfter;
  swiper.loopFix({
    slideRealIndex,
    direction: bothDirections ? undefined : 'next',
    initial
  });
}

function loopFix({
  slideRealIndex,
  slideTo = true,
  direction,
  setTranslate,
  activeSlideIndex,
  initial,
  byController,
  byMousewheel
} = {}) {
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides,
    slidesOffsetBefore,
    slidesOffsetAfter,
    initialSlide
  } = params;
  const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!bothDirections && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (bothDirections && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (bothDirections && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = bothDirections ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
    showWarning('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    showWarning('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !bothDirections;
  let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.find(el => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (bothDirections && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    if (isInitialOverflow) {
      slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
    }
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
    if (appendSlidesIndexes.includes(activeSlideIndex)) {
      appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
    if (prependSlidesIndexes.includes(activeSlideIndex)) {
      prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = getWindow();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document = getDocument();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
      return;
    } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
      return;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {
    document.activeElement.blur();
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    const slides = isVirtual ? swiper.virtual.slides : swiper.slides;
    swiper.slideTo(slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const events = (swiper, method) => {
  const document = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;
  if (!el || typeof el === 'string') return;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
  const document = getDocument();

  // Get breakpoint for window/container width and update parameters
  const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';
  const breakpointContainer = ['window', 'container'].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  utils_extend(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base = 'window', containerEl) {
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = getWindow();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === 'string') return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  swiperElementNodeName: 'SWIPER-CONTAINER',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  snapToSlideEdge: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      utils_extend(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      utils_extend(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    utils_extend(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = utils_extend({}, params);
    if (el && !params.el) params.el = el;
    const document = getDocument();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = utils_extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      params.modules.forEach(mod => {
        if (typeof mod === 'function' && swiper.modules.indexOf(mod) < 0) {
          swiper.modules.push(mod);
        }
      });
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = utils_extend({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = utils_extend({}, swiper.params);
    swiper.passedParams = utils_extend({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index));
  }
  getSlideIndexWhenGrid(index) {
    if (this.grid && this.params.grid && this.params.grid.rows > 1) {
      if (this.params.grid.fill === 'column') {
        index = Math.floor(index / this.params.grid.rows);
      } else if (this.params.grid.fill === 'row') {
        index = index % Math.ceil(this.slides.length / this.params.grid.rows);
      }
    }
    return index;
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view = 'current', exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
      wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate(undefined, true);
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== 'string') {
        el.removeAttribute('style');
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute('style');
      }
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== 'string') {
        swiper.el.swiper = null;
      }
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    utils_extend(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);



;// ./node_modules/swiper/swiper.mjs
/**
 * Swiper 12.1.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2026 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 24, 2026
 */



;// ./node_modules/swiper/modules/virtual.mjs
/* unused harmony import specifier */ var virtual_getDocument;
/* unused harmony import specifier */ var virtual_setInnerHTML;
/* unused harmony import specifier */ var virtual_createElement;
/* unused harmony import specifier */ var virtual_elementChildren;
/* unused harmony import specifier */ var virtual_setCSSProperty;



function Virtual({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      slidesPerViewAutoSlideSize: 320,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = virtual_getDocument();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        virtual_setInnerHTML(tempDOM, slideEl);
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = virtual_createElement('swiper-slide');
    } else {
      slideEl = virtual_createElement('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      virtual_setInnerHTML(slideEl, slide);
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update(force, beforeInit, forceActiveIndex) {
    const {
      slidesPerGroup,
      centeredSlides,
      slidesPerView,
      loop: isLoop,
      initialSlide
    } = swiper.params;
    if (beforeInit && !isLoop && initialSlide > 0) {
      return;
    }
    const {
      addSlidesBefore,
      addSlidesAfter,
      slidesPerViewAutoSlideSize
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = typeof forceActiveIndex === 'undefined' ? swiper.activeIndex || 0 : forceActiveIndex;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesPerViewNumeric;
    if (slidesPerView === 'auto') {
      if (slidesPerViewAutoSlideSize) {
        let swiperSize = swiper.size;
        if (!swiperSize) {
          swiperSize = swiper.isHorizontal() ? swiper.el.getBoundingClientRect().width : swiper.el.getBoundingClientRect().height;
        }
        slidesPerViewNumeric = Math.max(1, Math.ceil(swiperSize / slidesPerViewAutoSlideSize));
      } else {
        slidesPerViewNumeric = 1;
      }
    } else {
      slidesPerViewNumeric = slidesPerView;
    }
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerViewNumeric / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerViewNumeric / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerViewNumeric + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerViewNumeric : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    virtual_elementChildren(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        // shift cache indexes
        Object.keys(swiper.virtual.cache).forEach(key => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update(false, true);
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      virtual_setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}



;// ./node_modules/swiper/modules/keyboard.mjs
/* unused harmony import specifier */ var keyboard_getDocument;
/* unused harmony import specifier */ var keyboard_getWindow;
/* unused harmony import specifier */ var keyboard_elementParents;
/* unused harmony import specifier */ var keyboard_elementOffset;



/* eslint-disable consistent-return */
function Keyboard({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = keyboard_getDocument();
  const window = keyboard_getWindow();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true,
      speed: undefined
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && (document.activeElement.isContentEditable || document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea'))) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if (keyboard_elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && keyboard_elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = keyboard_elementOffset(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    const speed = swiper.params.keyboard.speed;
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext(speed);
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev(speed);
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext(speed);
      if (isPageUp || isArrowUp) swiper.slidePrev(speed);
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}



;// ./node_modules/swiper/modules/mousewheel.mjs
/* unused harmony import specifier */ var mousewheel_getWindow;
/* unused harmony import specifier */ var mousewheel_now;
/* unused harmony import specifier */ var mousewheel_nextTick;



/* eslint-disable consistent-return */
function Mousewheel({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = mousewheel_getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = mousewheel_now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && mousewheel_now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && mousewheel_now() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: mousewheel_now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: mousewheel_now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = mousewheel_nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = mousewheel_nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}



;// ./node_modules/swiper/shared/create-element-if-not-defined.mjs
/* unused harmony import specifier */ var create_element_if_not_defined_elementChildren;
/* unused harmony import specifier */ var create_element_if_not_defined_createElement;


function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = create_element_if_not_defined_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = create_element_if_not_defined_createElement('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}



;// ./node_modules/swiper/modules/navigation.mjs
/* unused harmony import specifier */ var navigation_createElementIfNotDefined;
/* unused harmony import specifier */ var navigation_makeElementsArray;
/* unused harmony import specifier */ var navigation_setInnerHTML;



const arrowSvg = (/* unused pure expression or super */ null && (`<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>`));
function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      addIcons: true,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null,
    arrowSvg
  };
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = navigation_makeElementsArray(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = navigation_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = navigation_makeElementsArray(nextEl);
    prevEl = navigation_makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        if (params.addIcons && el.matches('.swiper-button-next,.swiper-button-prev') && !el.querySelector('svg')) {
          const tempEl = document.createElement('div');
          navigation_setInnerHTML(tempEl, arrowSvg);
          el.appendChild(tempEl.querySelector('svg'));
          tempEl.remove();
        }
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = navigation_makeElementsArray(nextEl);
    prevEl = navigation_makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = navigation_makeElementsArray(nextEl);
    prevEl = navigation_makeElementsArray(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = navigation_makeElementsArray(nextEl);
    prevEl = navigation_makeElementsArray(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.path || e.composedPath && e.composedPath();
      if (path) {
        targetIsButton = path.find(pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}



;// ./node_modules/swiper/modules/pagination.mjs
/* unused harmony import specifier */ var classesToSelector;
/* unused harmony import specifier */ var pagination_createElementIfNotDefined;
/* unused harmony import specifier */ var pagination_elementIndex;
/* unused harmony import specifier */ var pagination_makeElementsArray;
/* unused harmony import specifier */ var pagination_elementOuterSize;
/* unused harmony import specifier */ var pagination_setInnerHTML;
/* unused harmony import specifier */ var pagination_elementParents;




function Pagination({
  swiper,
  extendParams,
  on,
  emit
}) {
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function getMoveDirection(prevIndex, nextIndex, length) {
    prevIndex = prevIndex % length;
    nextIndex = nextIndex % length;
    if (nextIndex === prevIndex + 1) {
      return 'next';
    } else if (nextIndex === prevIndex - 1) {
      return 'previous';
    }
    return;
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = pagination_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
      if (moveDirection === 'next') {
        swiper.slideNext();
      } else if (moveDirection === 'previous') {
        swiper.slidePrev();
      } else {
        swiper.slideToLoop(index);
      }
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = pagination_makeElementsArray(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = pagination_elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = pagination_elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        pagination_setInnerHTML(subEl, params.renderCustom(swiper, current + 1, total));
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = pagination_makeElementsArray(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        pagination_setInnerHTML(subEl, paginationHTML || '');
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = pagination_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.find(subEl => {
          if (pagination_elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        });
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = pagination_makeElementsArray(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = pagination_makeElementsArray(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = pagination_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = pagination_makeElementsArray(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = pagination_makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = pagination_makeElementsArray(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = pagination_makeElementsArray(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}



;// ./node_modules/swiper/modules/scrollbar.mjs
/* unused harmony import specifier */ var scrollbar_getDocument;
/* unused harmony import specifier */ var scrollbar_elementOffset;
/* unused harmony import specifier */ var scrollbar_nextTick;
/* unused harmony import specifier */ var scrollbar_createElement;
/* unused harmony import specifier */ var scrollbar_classesToTokens;
/* unused harmony import specifier */ var scrollbar_makeElementsArray;
/* unused harmony import specifier */ var scrollbar_createElementIfNotDefined;
/* unused harmony import specifier */ var scrollbar_classesToSelector;





function Scrollbar({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = scrollbar_getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - scrollbar_elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault && e.cancelable) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = scrollbar_nextTick(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = scrollbar_createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(scrollbar_classesToSelector(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = scrollbar_createElement('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...scrollbar_classesToTokens(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...scrollbar_classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on('changeDirection', () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = scrollbar_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock changeDirection', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...scrollbar_classesToTokens(swiper.params.scrollbar.lockClass));
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...scrollbar_classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...scrollbar_classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(...scrollbar_classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...scrollbar_classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}



;// ./node_modules/swiper/modules/parallax.mjs
/* unused harmony import specifier */ var parallax_elementChildren;


function Parallax({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = parallax_elementChildren(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...parallax_elementChildren(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = (duration = swiper.params.speed) => {
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}



;// ./node_modules/swiper/modules/zoom.mjs
/* unused harmony import specifier */ var zoom_getWindow;
/* unused harmony import specifier */ var zoom_elementParents;
/* unused harmony import specifier */ var zoom_getTranslate;
/* unused harmony import specifier */ var zoom_elementChildren;
/* unused harmony import specifier */ var zoom_elementOffset;



function Zoom({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = zoom_getWindow();
  extendParams({
    zoom: {
      enabled: false,
      limitToOriginalSize: false,
      maxRatio: 3,
      minRatio: 1,
      panOnMouseMove: false,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let isPanningWithMouse = false;
  let mousePanStart = {
    x: 0,
    y: 0
  };
  const mousePanSensitivity = -3; // Negative to invert pan direction
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getMaxRatio() {
    const params = swiper.params.zoom;
    const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
      const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
      return Math.min(imageMaxRatio, maxRatio);
    }
    return maxRatio;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = zoom_elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = getMaxRatio();
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  let allowTouchMoveTimeout;
  function allowTouchMove() {
    swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
  }
  function preventTouchMove() {
    clearTimeout(allowTouchMoveTimeout);
    swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
    allowTouchMoveTimeout = setTimeout(() => {
      if (swiper.destroyed) return;
      allowTouchMove();
    });
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    const isMouseEvent = e.pointerType === 'mouse';
    const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
      return;
    }
    const zoom = swiper.zoom;
    if (!gesture.imageEl) {
      return;
    }
    if (!image.isTouched || !gesture.slideEl) {
      if (isMousePan) onMouseMove(e);
      return;
    }
    if (isMousePan) {
      onMouseMove(e);
      return;
    }
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      image.startX = zoom_getTranslate(gesture.imageWrapEl, 'x') || 0;
      image.startY = zoom_getTranslate(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    preventTouchMove();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    evCache.length = 0;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function onMouseMove(e) {
    // Only pan if zoomed in and mouse panning is enabled
    if (currentScale <= 1 || !gesture.imageWrapEl) return;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const currentTransform = window.getComputedStyle(gesture.imageWrapEl).transform;
    const matrix = new window.DOMMatrix(currentTransform);
    if (!isPanningWithMouse) {
      isPanningWithMouse = true;
      mousePanStart.x = e.clientX;
      mousePanStart.y = e.clientY;
      image.startX = matrix.e;
      image.startY = matrix.f;
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      return;
    }
    const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
    const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
    const scaledWidth = image.width * currentScale;
    const scaledHeight = image.height * currentScale;
    const slideWidth = gesture.slideWidth;
    const slideHeight = gesture.slideHeight;
    const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
    const maxX = -minX;
    const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
    const maxY = -minY;
    const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
    const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
    gesture.imageWrapEl.style.transitionDuration = '0ms';
    gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    mousePanStart.x = e.clientX;
    mousePanStart.y = e.clientY;
    image.startX = newX;
    image.startY = newY;
    image.currentX = newX;
    image.currentY = newY;
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = zoom_elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = zoom_elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    gesture.maxRatio = getMaxRatio();
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const prevScale = currentScale;
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
      image.touchesStart.x = undefined;
      image.touchesStart.y = undefined;
    }
    const maxRatio = getMaxRatio();
    zoom.scale = forceZoomRatio || maxRatio;
    currentScale = forceZoomRatio || maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = zoom_elementOffset(gesture.slideEl).left + window.scrollX;
      offsetY = zoom_elementOffset(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      if (prevScale > 0 && forceZoomRatio && typeof image.currentX === 'number' && typeof image.currentY === 'number') {
        translateX = image.currentX * zoom.scale / prevScale;
        translateY = image.currentY * zoom.scale / prevScale;
      } else {
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
      }
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    image.currentX = translateX;
    image.currentY = translateY;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = zoom_elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = zoom_elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    gesture.maxRatio = getMaxRatio();
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    image.currentX = undefined;
    image.currentY = undefined;
    image.touchesStart.x = undefined;
    image.touchesStart.y = undefined;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
    if (swiper.params.zoom.panOnMouseMove) {
      mousePanStart = {
        x: 0,
        y: 0
      };
      if (isPanningWithMouse) {
        isPanningWithMouse = false;
        image.startX = 0;
        image.startY = 0;
      }
    }
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}



;// ./node_modules/swiper/modules/controller.mjs
/* unused harmony import specifier */ var controller_nextTick;
/* unused harmony import specifier */ var controller_elementTransitionEnd;


/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          controller_nextTick(() => {
            c.updateAutoHeight();
          });
        }
        controller_elementTransitionEnd(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElements = typeof swiper.params.controller.control === 'string' ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
      controlElements.forEach(controlElement => {
        if (!swiper.controller.control) swiper.controller.control = [];
        if (controlElement && controlElement.swiper) {
          swiper.controller.control.push(controlElement.swiper);
        } else if (controlElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onControllerSwiper = e => {
            swiper.controller.control.push(e.detail[0]);
            swiper.update();
            controlElement.removeEventListener(eventName, onControllerSwiper);
          };
          controlElement.addEventListener(eventName, onControllerSwiper);
        }
      });
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}



;// ./node_modules/swiper/modules/a11y.mjs
/* unused harmony import specifier */ var a11y_getDocument;
/* unused harmony import specifier */ var a11y_classesToSelector;
/* unused harmony import specifier */ var a11y_setInnerHTML;
/* unused harmony import specifier */ var a11y_makeElementsArray;
/* unused harmony import specifier */ var a11y_elementIndex;
/* unused harmony import specifier */ var a11y_createElement;




function A11y({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null,
      scrollOnFocus: true,
      wrapperLiveRegion: true
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  let preventFocusHandler;
  let focusTargetSlideEl;
  let visibilityChangedTimestamp = new Date().getTime();
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    a11y_setInnerHTML(notification, message);
  }
  function getRandomNumber(size = 16) {
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = a11y_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = a11y_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = a11y_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = a11y_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = a11y_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = a11y_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = a11y_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = a11y_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = a11y_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = a11y_makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches(a11y_classesToSelector(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
      const prevEls = a11y_makeElementsArray(swiper.navigation.prevEl);
      const nextEls = a11y_makeElementsArray(swiper.navigation.nextEl);
      if (nextEls.includes(targetEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (prevEls.includes(targetEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
    }
    if (swiper.pagination && targetEl.matches(a11y_classesToSelector(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, a11y_elementIndex(bulletEl) + 1));
        }
      }
      if (bulletEl.matches(a11y_classesToSelector(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = e => {
    if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
      preventFocusHandler = true;
    }
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    preventFocusHandler = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const onVisibilityChange = e => {
    visibilityChangedTimestamp = new Date().getTime();
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
    if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    focusTargetSlideEl = slideEl;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const isActive = (isVirtual ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : swiper.slides.indexOf(slideEl)) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    requestAnimationFrame(() => {
      if (preventFocusHandler) return;
      if (swiper.params.loop) {
        swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute('data-swiper-slide-index'))), 0);
      } else if (isVirtual) {
        swiper.slideTo(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10)), 0);
      } else {
        swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
      }
      preventFocusHandler = false;
    });
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }
    if (params.containerRole) {
      addElRole(containerEl, params.containerRole);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    addElId(wrapperEl, wrapperId);
    if (params.wrapperLiveRegion) {
      const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
      addElLive(wrapperEl, live);
    }

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = a11y_makeElementsArray(nextEl);
    prevEl = a11y_makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = a11y_makeElementsArray(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    const document = a11y_getDocument();
    document.addEventListener('visibilitychange', onVisibilityChange);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = a11y_makeElementsArray(nextEl);
    prevEl = a11y_makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = a11y_makeElementsArray(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }
    const document = a11y_getDocument();
    document.removeEventListener('visibilitychange', onVisibilityChange);
    // Tab focus
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('focus', handleFocus, true);
      swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
      swiper.el.removeEventListener('pointerup', handlePointerUp, true);
    }
  }
  on('beforeInit', () => {
    liveRegion = a11y_createElement('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}



;// ./node_modules/swiper/modules/history.mjs
/* unused harmony import specifier */ var history_getWindow;


function History({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = history_getWindow();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = history_getWindow();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = history_getWindow();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = history_getWindow();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}



;// ./node_modules/swiper/modules/hash-navigation.mjs
/* unused harmony import specifier */ var hash_navigation_getDocument;
/* unused harmony import specifier */ var hash_navigation_getWindow;
/* unused harmony import specifier */ var hash_navigation_elementChildren;



function HashNavigation({
  swiper,
  extendParams,
  emit,
  on
}) {
  let initialized = false;
  const document = hash_navigation_getDocument();
  const window = hash_navigation_getWindow();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.find(slideEl => slideEl.getAttribute('data-hash') === hash);
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex(hash_navigation_elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}



;// ./node_modules/swiper/modules/autoplay.mjs


/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay({
  swiper,
  extendParams,
  on,
  emit,
  params
}) {
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.find(slideEl => slideEl.classList.contains('swiper-slide-active'));
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const getTotalDelay = () => {
    let totalDelay = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0) {
      totalDelay = currentSlideDelay;
    }
    return totalDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = delayForce;
    if (typeof delay === 'undefined') {
      delay = getTotalDelay();
      autoplayDelayTotal = delay;
      autoplayDelayCurrent = delay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    autoplayStartTime = new Date().getTime();
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = getDocument();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('pointerenter', onPointerEnter);
      swiper.el.removeEventListener('pointerleave', onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document = getDocument();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = getDocument();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('_freeModeStaticRelease', () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on('_freeModeNoMomentumRelease', () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      autoplayTimeLeft = getTotalDelay();
      autoplayDelayTotal = getTotalDelay();
    }
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}



;// ./node_modules/swiper/modules/thumbs.mjs
/* unused harmony import specifier */ var thumbs_getDocument;
/* unused harmony import specifier */ var thumbs_isObject;
/* unused harmony import specifier */ var thumbs_elementChildren;



function Thumb({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function isVirtualEnabled() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return false;
    return thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled;
  }
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      if (thumbsParams.swiper.destroyed) {
        initialized = false;
        return false;
      }
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if (thumbs_isObject(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    if (isVirtualEnabled()) {
      swiper.thumbs.swiper.on('virtualUpdate', () => {
        update(false, {
          autoScroll: false
        });
      });
    }
    return true;
  }
  function update(initial, p) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || isVirtualEnabled()) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbs_elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    if (p?.autoScroll ?? true) {
      autoScroll(initial ? 0 : undefined);
    }
  }
  function autoScroll(slideSpeed) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`);
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, slideSpeed);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = thumbs_getDocument();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener(eventName, onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener(eventName, onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}



;// ./node_modules/swiper/modules/free-mode.mjs
/* unused harmony import specifier */ var free_mode_now;
/* unused harmony import specifier */ var free_mode_elementTransitionEnd;


function freeMode({
  swiper,
  extendParams,
  emit,
  once
}) {
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: free_mode_now()
    });
  }
  function onTouchEnd({
    currentPos
  }) {
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = free_mode_now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || free_mode_now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        free_mode_elementTransitionEnd(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            free_mode_elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          free_mode_elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit('_freeModeStaticRelease');
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}



;// ./node_modules/swiper/modules/manipulation.mjs
/* unused harmony import specifier */ var manipulation_setInnerHTML;


function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      manipulation_setInnerHTML(tempDOM, slideEl);
      slidesEl.append(tempDOM.children[0]);
      manipulation_setInnerHTML(tempDOM, '');
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}

function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      manipulation_setInnerHTML(tempDOM, slideEl);
      slidesEl.prepend(tempDOM.children[0]);
      manipulation_setInnerHTML(tempDOM, '');
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

function Manipulation({
  swiper
}) {
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}



;// ./node_modules/swiper/shared/effect-target.mjs
/* unused harmony import specifier */ var effect_target_getSlideTransformEl;


function effectTarget(effectParams, slideEl) {
  const transformEl = effect_target_getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}



;// ./node_modules/swiper/shared/effect-virtual-transition-end.mjs
/* unused harmony import specifier */ var effect_virtual_transition_end_elementTransitionEnd;


function effectVirtualTransitionEnd({
  swiper,
  duration,
  transformElements,
  allSlides
}) {
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.find(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      effect_virtual_transition_end_elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}



;// ./node_modules/swiper/modules/effect-fade.mjs
/* unused harmony import specifier */ var effectInit;
/* unused harmony import specifier */ var effect_fade_effectTarget;
/* unused harmony import specifier */ var effect_fade_effectVirtualTransitionEnd;
/* unused harmony import specifier */ var effect_fade_getSlideTransformEl;





function EffectFade({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = effect_fade_effectTarget(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => effect_fade_getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    effect_fade_effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



;// ./node_modules/swiper/modules/effect-cube.mjs
/* unused harmony import specifier */ var effect_cube_effectInit;
/* unused harmony import specifier */ var effect_cube_createElement;
/* unused harmony import specifier */ var effect_cube_getRotateFix;



function EffectCube({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = effect_cube_createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = effect_cube_createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const r = effect_cube_getRotateFix(swiper);
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = effect_cube_createElement('div', 'swiper-cube-shadow');
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = effect_cube_createElement('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  effect_cube_effectInit({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}



;// ./node_modules/swiper/shared/create-shadow.mjs
/* unused harmony import specifier */ var create_shadow_getSlideTransformEl;
/* unused harmony import specifier */ var create_shadow_createElement;


function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
  const shadowContainer = create_shadow_getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
  if (!shadowEl) {
    shadowEl = create_shadow_createElement('div', shadowClass.split(' '));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}



;// ./node_modules/swiper/modules/effect-flip.mjs
/* unused harmony import specifier */ var effect_flip_createShadow;
/* unused harmony import specifier */ var effect_flip_effectInit;
/* unused harmony import specifier */ var effect_flip_effectTarget;
/* unused harmony import specifier */ var effect_flip_effectVirtualTransitionEnd;
/* unused harmony import specifier */ var effect_flip_getRotateFix;
/* unused harmony import specifier */ var effect_flip_getSlideTransformEl;






function EffectFlip({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = effect_flip_createShadow('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = effect_flip_createShadow('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    const rotateFix = effect_flip_getRotateFix(swiper);
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
      const targetEl = effect_flip_effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => effect_flip_getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effect_flip_effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effect_flip_effectInit({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



;// ./node_modules/swiper/modules/effect-coverflow.mjs
/* unused harmony import specifier */ var effect_coverflow_createShadow;
/* unused harmony import specifier */ var effect_coverflow_effectInit;
/* unused harmony import specifier */ var effect_coverflow_effectTarget;
/* unused harmony import specifier */ var effect_coverflow_getRotateFix;
/* unused harmony import specifier */ var effect_coverflow_getSlideTransformEl;





function EffectCoverflow({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    const r = effect_coverflow_getRotateFix(swiper);
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
      const targetEl = effect_coverflow_effectTarget(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = effect_coverflow_createShadow('coverflow', slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = effect_coverflow_createShadow('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => effect_coverflow_getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  effect_coverflow_effectInit({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}



;// ./node_modules/swiper/modules/effect-creative.mjs
/* unused harmony import specifier */ var effect_creative_createShadow;
/* unused harmony import specifier */ var effect_creative_effectInit;
/* unused harmony import specifier */ var effect_creative_effectTarget;
/* unused harmony import specifier */ var effect_creative_effectVirtualTransitionEnd;
/* unused harmony import specifier */ var effect_creative_getRotateFix;
/* unused harmony import specifier */ var effect_creative_getSlideTransformEl;






function EffectCreative({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    const rotateFix = effect_creative_getRotateFix(swiper);
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        r[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = effect_creative_createShadow('creative', slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = effect_creative_effectTarget(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => effect_creative_getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effect_creative_effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effect_creative_effectInit({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



;// ./node_modules/swiper/modules/effect-cards.mjs
/* unused harmony import specifier */ var effect_cards_createShadow;
/* unused harmony import specifier */ var effect_cards_effectInit;
/* unused harmony import specifier */ var effect_cards_effectTarget;
/* unused harmony import specifier */ var effect_cards_effectVirtualTransitionEnd;
/* unused harmony import specifier */ var effect_cards_getSlideTransformEl;






function EffectCards({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${(params.rotate || swiper.isHorizontal() ? -25 : 0) * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = effect_cards_createShadow('cards', slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = effect_cards_effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => effect_cards_getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effect_cards_effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effect_cards_effectInit({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      _loopSwapReset: false,
      watchSlidesProgress: true,
      loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
      centeredSlides: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



;// ./node_modules/swiper/modules/index.mjs























;// ./src/js/components/swiper.js


function partnersSwiper() {
  var el = document.querySelector('.partners__swiper');
  if (!el) return;
  new Swiper(el, {
    modules: [Autoplay],
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    speed: 5000,
    observer: true,
    observeParents: true,
    centerInsufficientSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false
    },
    allowTouchMove: false,
    grabCursor: false
  });
}
;// ./src/js/components/faq.js
function faq() {
  var items = document.querySelectorAll('.faq__item');
  if (!items.length) return;
  items.forEach(function (item) {
    var btn = item.querySelector('.faq__question');
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('faq__item--open');

      // Закрываем все в той же колонке
      var col = item.closest('.faq__col');
      col.querySelectorAll('.faq__item--open').forEach(function (openItem) {
        openItem.classList.remove('faq__item--open');
        openItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      // Открываем текущий если был закрыт
      if (!isOpen) {
        item.classList.add('faq__item--open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
;// ./src/js/index.js





window.addEventListener('load', function () {
  init();
});
function init() {
  hidePreloader();
  loaded();
  faq();
  partnersSwiper();
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsWUFBWSwwQ0FBMEMsWUFBWTtBQUM3Riw2QkFBNkIsWUFBWSx5Q0FBeUMsWUFBWTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7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QXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsc0RBQXNEOztBQUV6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQSxRQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsR0FBRztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsR0FBRztBQUMxQixFQUFFLFFBQVE7QUFDVjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0lBQW9JO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSxNQUFNLFlBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxZQUFNO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksWUFBTTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBTSxHQUFHO0FBQ3RCO0FBQ0EscUJBQXFCLFdBQVc7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O0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sV0FBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxZQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7O0FBRXNDOzs7QUNsMUh0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRTs7Ozs7Ozs7QUNaTDtBQUN1RDs7QUFFdkg7QUFD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QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUyQjs7Ozs7QUM3ckJvRDs7QUFFL0Usa0NBQWtDLGlCQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFcUM7OztBQzNGMkI7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRStCOzs7Ozs7QUNqVGlDO0FBQ1U7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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Q0FBQ0UsT0FBTyxDQUFDLFVBQUE0RSxRQUFRLEVBQUk7UUFDM0RBLFFBQVEsQ0FBQzFFLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQzVDdUUsUUFBUSxDQUFDN0QsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUNXLFlBQVksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDO01BQ2pGLENBQUMsQ0FBQzs7TUFFRjtNQUNBLElBQUksQ0FBQytDLE1BQU0sRUFBRTtRQUNYRixJQUFJLENBQUNyRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNyQ3FFLEdBQUcsQ0FBQzlDLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDO01BQzNDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQzs7QUN4QnVEO0FBQ0o7QUFDTjtBQUVRO0FBQ2Q7QUFFdkNwQixNQUFNLENBQUNDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFNO0VBQ3BDdUUsSUFBSSxDQUFDLENBQUM7QUFDUixDQUFDLENBQUM7QUFFRixTQUFTQSxJQUFJQSxDQUFBLEVBQUc7RUFDZG5GLGFBQWEsQ0FBQyxDQUFDO0VBQ2ZvQyxNQUFNLENBQUMsQ0FBQztFQUNSc0MsR0FBRyxDQUFDLENBQUM7RUFDTGYsY0FBYyxDQUFDLENBQUM7QUFDbEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9zcmMvanMvY29tcG9uZW50cy9wcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL3NyYy9qcy9jb21wb25lbnRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9hZGVkLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9zc3Itd2luZG93LmVzbS5tanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL3V0aWxzLm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvc3dpcGVyLWNvcmUubWpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3dpcGVyL3N3aXBlci5tanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy92aXJ0dWFsLm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2tleWJvYXJkLm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL21vdXNld2hlZWwubWpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9jcmVhdGUtZWxlbWVudC1pZi1ub3QtZGVmaW5lZC5tanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9uYXZpZ2F0aW9uLm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL3BhZ2luYXRpb24ubWpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvc2Nyb2xsYmFyLm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL3BhcmFsbGF4Lm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL3pvb20ubWpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvY29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9hMTF5Lm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2hpc3RvcnkubWpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvaGFzaC1uYXZpZ2F0aW9uLm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2F1dG9wbGF5Lm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL3RodW1icy5tanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9mcmVlLW1vZGUubWpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvbWFuaXB1bGF0aW9uLm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvZWZmZWN0LXRhcmdldC5tanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL2VmZmVjdC12aXJ0dWFsLXRyYW5zaXRpb24tZW5kLm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2VmZmVjdC1mYWRlLm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2VmZmVjdC1jdWJlLm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvY3JlYXRlLXNoYWRvdy5tanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9lZmZlY3QtZmxpcC5tanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9lZmZlY3QtY292ZXJmbG93Lm1qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2VmZmVjdC1jcmVhdGl2ZS5tanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9lZmZlY3QtY2FyZHMubWpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvaW5kZXgubWpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9zcmMvanMvY29tcG9uZW50cy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL3NyYy9qcy9jb21wb25lbnRzL2ZhcS5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoaWRlUHJlbG9hZGVyKCkge1xuICBjb25zdCBwcmVsb2FkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWxvYWRlcicpO1xuXG4gIGlmIChwcmVsb2FkZXJzICYmIHByZWxvYWRlcnMubGVuZ3RoKSB7XG4gICAgcHJlbG9hZGVycy5mb3JFYWNoKChwcmVsb2FkZXIpID0+IHtcbiAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKCdwcmVsb2FkZXJfaGlkZGVuJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcHJlbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgfSwgNjAwKTtcbiAgICB9KTtcbiAgfVxufVxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcclxufSk7XHJcblxyXG5pZiAoZG9jdW1lbnQ/LmJvZHkpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xyXG59XHJcblxyXG5sZXQgdW5sb2NrID0gdHJ1ZTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT1cclxuLy9BY3Rpb25zT25IYXNoXHJcbmlmIChsb2NhdGlvbi5oYXNoKSB7XHJcbiAgY29uc3QgaHNoID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfJyArIGhzaCkpIHtcclxuICAgIHBvcHVwX29wZW4oaHNoKTtcclxuICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi4nICsgaHNoKSkge1xyXG4gICAgX2dvdG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBoc2gpLCA1MDAsICcnKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB0aGVtZVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS10b2dnbGUnKTtcclxuY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcbmNvbnN0IFRIRU1FX0tFWSA9ICd0aGVtZSc7XHJcbmNvbnN0IERBUksgPSAnZGFyayc7XHJcblxyXG4vLyDQktC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0YLQtdC80YMg0L/RgNC4INC30LDQs9GA0YPQt9C60LVcclxuY29uc3Qgc2F2ZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRIRU1FX0tFWSk7XHJcbmlmIChzYXZlZFRoZW1lID09PSBEQVJLKSB7XHJcbiAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBEQVJLKTtcclxufVxyXG5cclxudGhlbWVUb2dnbGU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGlzRGFyayA9IGh0bWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJykgPT09IERBUks7XHJcblxyXG4gIGlmIChpc0RhcmspIHtcclxuICAgIGh0bWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUSEVNRV9LRVksICdsaWdodCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIERBUkspO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVEhFTUVfS0VZLCBEQVJLKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkZWQoKSB7XHJcbiAgY29uc3QgYW5pbUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGUnKTtcclxuXHJcbiAgaWYgKGFuaW1JdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYW5pbU9uU2Nyb2xsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhbmltT25TY3JvbGwoKSB7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhbmltSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbUl0ZW0gPSBhbmltSXRlbXNbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGFuaW1JdGVtSGVpZ2h0ID0gYW5pbUl0ZW0ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGFuaW1JdGVtT2Zmc2V0ID0gb2Zmc2V0KGFuaW1JdGVtKS50b3A7XHJcblxyXG4gICAgICAgIC8vINCj0YHQu9C+0LLQuNC1OiDRjdC70LXQvNC10L3RgiDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0L/QvtC70L3QvtGB0YLRjNGOINCyINC30L7QvdC1INCy0LjQtNC40LzQvtGB0YLQuFxyXG4gICAgICAgIGNvbnN0IGFuaW1JdGVtUG9pbnQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBhbmltSXRlbUhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcGFnZVlPZmZzZXQgPiBhbmltSXRlbU9mZnNldCAtIGFuaW1JdGVtUG9pbnQgKyAwICYmXHJcbiAgICAgICAgICBwYWdlWU9mZnNldCA8IGFuaW1JdGVtT2Zmc2V0ICsgYW5pbUl0ZW1IZWlnaHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGFuaW1JdGVtLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoIWFuaW1JdGVtLmNsYXNzTGlzdC5jb250YWlucygnX2FuaW0tbm8taGlkZScpKSB7XHJcbiAgICAgICAgICAgIGFuaW1JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlZCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldChlbCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcclxuICAgICAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLFxyXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHNjcm9sbExlZnQsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGFuaW1PblNjcm9sbCgpO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXG4gKiBTU1IgV2luZG93IDUuMC4xXG4gKiBCZXR0ZXIgaGFuZGxpbmcgZm9yIHdpbmRvdyBvYmplY3QgaW4gU1NSIGVudmlyb25tZW50XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbm9saW1pdHM0d2ViL3Nzci13aW5kb3dcbiAqXG4gKiBDb3B5cmlnaHQgMjAyNSwgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqXG4gKiBSZWxlYXNlZCBvbjogSnVuZSAyNywgMjAyNVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvYmogJiYgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59XG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0ID0ge30sIHNyYyA9IHt9KSB7XG4gIGNvbnN0IG5vRXh0ZW5kID0gWydfX3Byb3RvX18nLCAnY29uc3RydWN0b3InLCAncHJvdG90eXBlJ107XG4gIE9iamVjdC5rZXlzKHNyYykuZmlsdGVyKGtleSA9PiBub0V4dGVuZC5pbmRleE9mKGtleSkgPCAwKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHRhcmdldFtrZXldID0gc3JjW2tleV07ZWxzZSBpZiAoaXNPYmplY3Qoc3JjW2tleV0pICYmIGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBPYmplY3Qua2V5cyhzcmNba2V5XSkubGVuZ3RoID4gMCkge1xuICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzcmNba2V5XSk7XG4gICAgfVxuICB9KTtcbn1cbmNvbnN0IHNzckRvY3VtZW50ID0ge1xuICBib2R5OiB7fSxcbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHt9LFxuICByZW1vdmVFdmVudExpc3RlbmVyKCkge30sXG4gIGFjdGl2ZUVsZW1lbnQ6IHtcbiAgICBibHVyKCkge30sXG4gICAgbm9kZU5hbWU6ICcnXG4gIH0sXG4gIHF1ZXJ5U2VsZWN0b3IoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIHF1ZXJ5U2VsZWN0b3JBbGwoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9LFxuICBnZXRFbGVtZW50QnlJZCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgY3JlYXRlRXZlbnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRFdmVudCgpIHt9XG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgY2hpbGROb2RlczogW10sXG4gICAgICBzdHlsZToge30sXG4gICAgICBzZXRBdHRyaWJ1dGUoKSB7fSxcbiAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlRWxlbWVudE5TKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgaW1wb3J0Tm9kZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgbG9jYXRpb246IHtcbiAgICBoYXNoOiAnJyxcbiAgICBob3N0OiAnJyxcbiAgICBob3N0bmFtZTogJycsXG4gICAgaHJlZjogJycsXG4gICAgb3JpZ2luOiAnJyxcbiAgICBwYXRobmFtZTogJycsXG4gICAgcHJvdG9jb2w6ICcnLFxuICAgIHNlYXJjaDogJydcbiAgfVxufTtcbmZ1bmN0aW9uIGdldERvY3VtZW50KCkge1xuICBjb25zdCBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiB7fTtcbiAgZXh0ZW5kKGRvYywgc3NyRG9jdW1lbnQpO1xuICByZXR1cm4gZG9jO1xufVxuY29uc3Qgc3NyV2luZG93ID0ge1xuICBkb2N1bWVudDogc3NyRG9jdW1lbnQsXG4gIG5hdmlnYXRvcjoge1xuICAgIHVzZXJBZ2VudDogJydcbiAgfSxcbiAgbG9jYXRpb246IHtcbiAgICBoYXNoOiAnJyxcbiAgICBob3N0OiAnJyxcbiAgICBob3N0bmFtZTogJycsXG4gICAgaHJlZjogJycsXG4gICAgb3JpZ2luOiAnJyxcbiAgICBwYXRobmFtZTogJycsXG4gICAgcHJvdG9jb2w6ICcnLFxuICAgIHNlYXJjaDogJydcbiAgfSxcbiAgaGlzdG9yeToge1xuICAgIHJlcGxhY2VTdGF0ZSgpIHt9LFxuICAgIHB1c2hTdGF0ZSgpIHt9LFxuICAgIGdvKCkge30sXG4gICAgYmFjaygpIHt9XG4gIH0sXG4gIEN1c3RvbUV2ZW50OiBmdW5jdGlvbiBDdXN0b21FdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHt9LFxuICByZW1vdmVFdmVudExpc3RlbmVyKCkge30sXG4gIGdldENvbXB1dGVkU3R5bGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFByb3BlcnR5VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBJbWFnZSgpIHt9LFxuICBEYXRlKCkge30sXG4gIHNjcmVlbjoge30sXG4gIHNldFRpbWVvdXQoKSB7fSxcbiAgY2xlYXJUaW1lb3V0KCkge30sXG4gIG1hdGNoTWVkaWEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgfSxcbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpIHtcbiAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dChpZCk7XG4gIH1cbn07XG5mdW5jdGlvbiBnZXRXaW5kb3coKSB7XG4gIGNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG4gIGV4dGVuZCh3aW4sIHNzcldpbmRvdyk7XG4gIHJldHVybiB3aW47XG59XG5cbmV4cG9ydCB7IGdldFdpbmRvdyBhcyBhLCBnZXREb2N1bWVudCBhcyBnIH07XG4iLCJpbXBvcnQgeyBhIGFzIGdldFdpbmRvdywgZyBhcyBnZXREb2N1bWVudCB9IGZyb20gJy4vc3NyLXdpbmRvdy5lc20ubWpzJztcblxuZnVuY3Rpb24gY2xhc3Nlc1RvVG9rZW5zKGNsYXNzZXMgPSAnJykge1xuICByZXR1cm4gY2xhc3Nlcy50cmltKCkuc3BsaXQoJyAnKS5maWx0ZXIoYyA9PiAhIWMudHJpbSgpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvcHMob2JqKSB7XG4gIGNvbnN0IG9iamVjdCA9IG9iajtcbiAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9iamVjdFtrZXldID0gbnVsbDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBubyBnZXR0ZXIgZm9yIG9iamVjdFxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZGVsZXRlIG9iamVjdFtrZXldO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHNvbWV0aGluZyBnb3Qgd3JvbmdcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gbmV4dFRpY2soY2FsbGJhY2ssIGRlbGF5ID0gMCkge1xuICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgZGVsYXkpO1xufVxuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gRGF0ZS5ub3coKTtcbn1cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWwpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBzdHlsZTtcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG4gICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG4gIH1cbiAgaWYgKCFzdHlsZSAmJiBlbC5jdXJyZW50U3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLmN1cnJlbnRTdHlsZTtcbiAgfVxuICBpZiAoIXN0eWxlKSB7XG4gICAgc3R5bGUgPSBlbC5zdHlsZTtcbiAgfVxuICByZXR1cm4gc3R5bGU7XG59XG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwsIGF4aXMgPSAneCcpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBtYXRyaXg7XG4gIGxldCBjdXJUcmFuc2Zvcm07XG4gIGxldCB0cmFuc2Zvcm1NYXRyaXg7XG4gIGNvbnN0IGN1clN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSB7XG4gICAgY3VyVHJhbnNmb3JtID0gY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICBpZiAoY3VyVHJhbnNmb3JtLnNwbGl0KCcsJykubGVuZ3RoID4gNikge1xuICAgICAgY3VyVHJhbnNmb3JtID0gY3VyVHJhbnNmb3JtLnNwbGl0KCcsICcpLm1hcChhID0+IGEucmVwbGFjZSgnLCcsICcuJykpLmpvaW4oJywgJyk7XG4gICAgfVxuICAgIC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIFdlYmtpdCBjaG9rZSB3aGVuICdub25lJyBpcyBwYXNzZWQ7IHBhc3NcbiAgICAvLyBlbXB0eSBzdHJpbmcgaW5zdGVhZCBpbiB0aGlzIGNhc2VcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBuZXcgd2luZG93LldlYktpdENTU01hdHJpeChjdXJUcmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogY3VyVHJhbnNmb3JtKTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBjdXJTdHlsZS5Nb3pUcmFuc2Zvcm0gfHwgY3VyU3R5bGUuT1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5Nc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5tc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICBtYXRyaXggPSB0cmFuc2Zvcm1NYXRyaXgudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xuICB9XG4gIGlmIChheGlzID09PSAneCcpIHtcbiAgICAvLyBMYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQxO1xuICAgIC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEyXSk7XG4gICAgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgZWxzZSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs0XSk7XG4gIH1cbiAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7XG4gICAgLy8gQ3JhenkgSUUxMCBNYXRyaXhcbiAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNikgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTNdKTtcbiAgICAvLyBOb3JtYWwgQnJvd3NlcnNcbiAgICBlbHNlIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzVdKTtcbiAgfVxuICByZXR1cm4gY3VyVHJhbnNmb3JtIHx8IDA7XG59XG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnO1xufVxuZnVuY3Rpb24gaXNOb2RlKG5vZGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIG5vZGUgJiYgKG5vZGUubm9kZVR5cGUgPT09IDEgfHwgbm9kZS5ub2RlVHlwZSA9PT0gMTEpO1xufVxuZnVuY3Rpb24gZXh0ZW5kKC4uLmFyZ3MpIHtcbiAgY29uc3QgdG8gPSBPYmplY3QoYXJnc1swXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5leHRTb3VyY2UgPSBhcmdzW2ldO1xuICAgIGlmIChuZXh0U291cmNlICE9PSB1bmRlZmluZWQgJiYgbmV4dFNvdXJjZSAhPT0gbnVsbCAmJiAhaXNOb2RlKG5leHRTb3VyY2UpKSB7XG4gICAgICBjb25zdCBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpLmZpbHRlcihrZXkgPT4ga2V5ICE9PSAnX19wcm90b19fJyAmJiBrZXkgIT09ICdjb25zdHJ1Y3RvcicgJiYga2V5ICE9PSAncHJvdG90eXBlJyk7XG4gICAgICBmb3IgKGxldCBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG4gICAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgaWYgKGlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBpc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgaWYgKG5leHRTb3VyY2VbbmV4dEtleV0uX19zd2lwZXJfXykge1xuICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIWlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBpc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgdG9bbmV4dEtleV0gPSB7fTtcbiAgICAgICAgICAgIGlmIChuZXh0U291cmNlW25leHRLZXldLl9fc3dpcGVyX18pIHtcbiAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXh0ZW5kKHRvW25leHRLZXldLCBuZXh0U291cmNlW25leHRLZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdG87XG59XG5mdW5jdGlvbiBzZXRDU1NQcm9wZXJ0eShlbCwgdmFyTmFtZSwgdmFyVmFsdWUpIHtcbiAgZWwuc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFyVmFsdWUpO1xufVxuZnVuY3Rpb24gYW5pbWF0ZUNTU01vZGVTY3JvbGwoe1xuICBzd2lwZXIsXG4gIHRhcmdldFBvc2l0aW9uLFxuICBzaWRlXG59KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBzdGFydFBvc2l0aW9uID0gLXN3aXBlci50cmFuc2xhdGU7XG4gIGxldCBzdGFydFRpbWUgPSBudWxsO1xuICBsZXQgdGltZTtcbiAgY29uc3QgZHVyYXRpb24gPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnNjcm9sbFNuYXBUeXBlID0gJ25vbmUnO1xuICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3dpcGVyLmNzc01vZGVGcmFtZUlEKTtcbiAgY29uc3QgZGlyID0gdGFyZ2V0UG9zaXRpb24gPiBzdGFydFBvc2l0aW9uID8gJ25leHQnIDogJ3ByZXYnO1xuICBjb25zdCBpc091dE9mQm91bmQgPSAoY3VycmVudCwgdGFyZ2V0KSA9PiB7XG4gICAgcmV0dXJuIGRpciA9PT0gJ25leHQnICYmIGN1cnJlbnQgPj0gdGFyZ2V0IHx8IGRpciA9PT0gJ3ByZXYnICYmIGN1cnJlbnQgPD0gdGFyZ2V0O1xuICB9O1xuICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG4gICAgICBzdGFydFRpbWUgPSB0aW1lO1xuICAgIH1cbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uLCAxKSwgMCk7XG4gICAgY29uc3QgZWFzZVByb2dyZXNzID0gMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24gKyBlYXNlUHJvZ3Jlc3MgKiAodGFyZ2V0UG9zaXRpb24gLSBzdGFydFBvc2l0aW9uKTtcbiAgICBpZiAoaXNPdXRPZkJvdW5kKGN1cnJlbnRQb3NpdGlvbiwgdGFyZ2V0UG9zaXRpb24pKSB7XG4gICAgICBjdXJyZW50UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbjtcbiAgICB9XG4gICAgc3dpcGVyLndyYXBwZXJFbC5zY3JvbGxUbyh7XG4gICAgICBbc2lkZV06IGN1cnJlbnRQb3NpdGlvblxuICAgIH0pO1xuICAgIGlmIChpc091dE9mQm91bmQoY3VycmVudFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbikpIHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUuc2Nyb2xsU25hcFR5cGUgPSAnJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgICAgIFtzaWRlXTogY3VycmVudFBvc2l0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3dpcGVyLmNzc01vZGVGcmFtZUlEKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpcGVyLmNzc01vZGVGcmFtZUlEID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfTtcbiAgYW5pbWF0ZSgpO1xufVxuZnVuY3Rpb24gZ2V0U2xpZGVUcmFuc2Zvcm1FbChzbGlkZUVsKSB7XG4gIHJldHVybiBzbGlkZUVsLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2xpZGUtdHJhbnNmb3JtJykgfHwgc2xpZGVFbC5zaGFkb3dSb290ICYmIHNsaWRlRWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNsaWRlLXRyYW5zZm9ybScpIHx8IHNsaWRlRWw7XG59XG5mdW5jdGlvbiBlbGVtZW50Q2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IgPSAnJykge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgY2hpbGRyZW4gPSBbLi4uZWxlbWVudC5jaGlsZHJlbl07XG4gIGlmICh3aW5kb3cuSFRNTFNsb3RFbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2xvdEVsZW1lbnQpIHtcbiAgICBjaGlsZHJlbi5wdXNoKC4uLmVsZW1lbnQuYXNzaWduZWRFbGVtZW50cygpKTtcbiAgfVxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHJldHVybiBjaGlsZHJlbi5maWx0ZXIoZWwgPT4gZWwubWF0Y2hlcyhzZWxlY3RvcikpO1xufVxuZnVuY3Rpb24gZWxlbWVudElzQ2hpbGRPZlNsb3QoZWwsIHNsb3QpIHtcbiAgLy8gQnJlYWR0aC1maXJzdCBzZWFyY2ggdGhyb3VnaCBhbGwgcGFyZW50J3MgY2hpbGRyZW4gYW5kIGFzc2lnbmVkIGVsZW1lbnRzXG4gIGNvbnN0IGVsZW1lbnRzUXVldWUgPSBbc2xvdF07XG4gIHdoaWxlIChlbGVtZW50c1F1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBlbGVtZW50VG9DaGVjayA9IGVsZW1lbnRzUXVldWUuc2hpZnQoKTtcbiAgICBpZiAoZWwgPT09IGVsZW1lbnRUb0NoZWNrKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxlbWVudHNRdWV1ZS5wdXNoKC4uLmVsZW1lbnRUb0NoZWNrLmNoaWxkcmVuLCAuLi4oZWxlbWVudFRvQ2hlY2suc2hhZG93Um9vdCA/IGVsZW1lbnRUb0NoZWNrLnNoYWRvd1Jvb3QuY2hpbGRyZW4gOiBbXSksIC4uLihlbGVtZW50VG9DaGVjay5hc3NpZ25lZEVsZW1lbnRzID8gZWxlbWVudFRvQ2hlY2suYXNzaWduZWRFbGVtZW50cygpIDogW10pKTtcbiAgfVxufVxuZnVuY3Rpb24gZWxlbWVudElzQ2hpbGRPZihlbCwgcGFyZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgaXNDaGlsZCA9IHBhcmVudC5jb250YWlucyhlbCk7XG4gIGlmICghaXNDaGlsZCAmJiB3aW5kb3cuSFRNTFNsb3RFbGVtZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxTbG90RWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gWy4uLnBhcmVudC5hc3NpZ25lZEVsZW1lbnRzKCldO1xuICAgIGlzQ2hpbGQgPSBjaGlsZHJlbi5pbmNsdWRlcyhlbCk7XG4gICAgaWYgKCFpc0NoaWxkKSB7XG4gICAgICBpc0NoaWxkID0gZWxlbWVudElzQ2hpbGRPZlNsb3QoZWwsIHBhcmVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0NoaWxkO1xufVxuZnVuY3Rpb24gc2hvd1dhcm5pbmcodGV4dCkge1xuICB0cnkge1xuICAgIGNvbnNvbGUud2Fybih0ZXh0KTtcbiAgICByZXR1cm47XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGVyclxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NlcyA9IFtdKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBlbC5jbGFzc0xpc3QuYWRkKC4uLihBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXNUb1Rva2VucyhjbGFzc2VzKSkpO1xuICByZXR1cm4gZWw7XG59XG5mdW5jdGlvbiBlbGVtZW50T2Zmc2V0KGVsKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgY2xpZW50VG9wID0gZWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gIGNvbnN0IGNsaWVudExlZnQgPSBlbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICBjb25zdCBzY3JvbGxUb3AgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFggOiBlbC5zY3JvbGxMZWZ0O1xuICByZXR1cm4ge1xuICAgIHRvcDogYm94LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0XG4gIH07XG59XG5mdW5jdGlvbiBlbGVtZW50UHJldkFsbChlbCwgc2VsZWN0b3IpIHtcbiAgY29uc3QgcHJldkVscyA9IFtdO1xuICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIGNvbnN0IHByZXYgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAocHJldi5tYXRjaGVzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKHByZXYpO1xuICAgIH0gZWxzZSBwcmV2RWxzLnB1c2gocHJldik7XG4gICAgZWwgPSBwcmV2O1xuICB9XG4gIHJldHVybiBwcmV2RWxzO1xufVxuZnVuY3Rpb24gZWxlbWVudE5leHRBbGwoZWwsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IG5leHRFbHMgPSBbXTtcbiAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgIGNvbnN0IG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSBuZXh0RWxzLnB1c2gobmV4dCk7XG4gICAgfSBlbHNlIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICBlbCA9IG5leHQ7XG4gIH1cbiAgcmV0dXJuIG5leHRFbHM7XG59XG5mdW5jdGlvbiBlbGVtZW50U3R5bGUoZWwsIHByb3ApIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRJbmRleChlbCkge1xuICBsZXQgY2hpbGQgPSBlbDtcbiAgbGV0IGk7XG4gIGlmIChjaGlsZCkge1xuICAgIGkgPSAwO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRQYXJlbnRzKGVsLCBzZWxlY3Rvcikge1xuICBjb25zdCBwYXJlbnRzID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgbGV0IHBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKHBhcmVudC5tYXRjaGVzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgIH1cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gcGFyZW50cztcbn1cbmZ1bmN0aW9uIGVsZW1lbnRUcmFuc2l0aW9uRW5kKGVsLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZWwpIHJldHVybjtcbiAgICBjYWxsYmFjay5jYWxsKGVsLCBlKTtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxufVxuZnVuY3Rpb24gZWxlbWVudE91dGVyU2l6ZShlbCwgc2l6ZSwgaW5jbHVkZU1hcmdpbnMpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgIHJldHVybiBlbFtzaXplID09PSAnd2lkdGgnID8gJ29mZnNldFdpZHRoJyA6ICdvZmZzZXRIZWlnaHQnXSArIHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoc2l6ZSA9PT0gJ3dpZHRoJyA/ICdtYXJnaW4tcmlnaHQnIDogJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHNpemUgPT09ICd3aWR0aCcgPyAnbWFyZ2luLWxlZnQnIDogJ21hcmdpbi1ib3R0b20nKSk7XG4gIH1cbiAgcmV0dXJuIGVsLm9mZnNldFdpZHRoO1xufVxuZnVuY3Rpb24gbWFrZUVsZW1lbnRzQXJyYXkoZWwpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KGVsKSA/IGVsIDogW2VsXSkuZmlsdGVyKGUgPT4gISFlKTtcbn1cbmZ1bmN0aW9uIGdldFJvdGF0ZUZpeChzd2lwZXIpIHtcbiAgcmV0dXJuIHYgPT4ge1xuICAgIGlmIChNYXRoLmFicyh2KSA+IDAgJiYgc3dpcGVyLmJyb3dzZXIgJiYgc3dpcGVyLmJyb3dzZXIubmVlZDNkRml4ICYmIE1hdGguYWJzKHYpICUgOTAgPT09IDApIHtcbiAgICAgIHJldHVybiB2ICsgMC4wMDE7XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9O1xufVxuZnVuY3Rpb24gc2V0SW5uZXJIVE1MKGVsLCBodG1sID0gJycpIHtcbiAgaWYgKHR5cGVvZiB0cnVzdGVkVHlwZXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnaHRtbCcsIHtcbiAgICAgIGNyZWF0ZUhUTUw6IHMgPT4gc1xuICAgIH0pLmNyZWF0ZUhUTUwoaHRtbCk7XG4gIH0gZWxzZSB7XG4gICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRSb3RhdGVGaXggYXMgYSwgc2V0Q1NTUHJvcGVydHkgYXMgYiwgY3JlYXRlRWxlbWVudCBhcyBjLCBlbGVtZW50UGFyZW50cyBhcyBkLCBlbGVtZW50Q2hpbGRyZW4gYXMgZSwgZWxlbWVudE9mZnNldCBhcyBmLCBnZXRTbGlkZVRyYW5zZm9ybUVsIGFzIGcsIG5vdyBhcyBoLCBlbGVtZW50T3V0ZXJTaXplIGFzIGksIGVsZW1lbnRJbmRleCBhcyBqLCBjbGFzc2VzVG9Ub2tlbnMgYXMgaywgZ2V0VHJhbnNsYXRlIGFzIGwsIG1ha2VFbGVtZW50c0FycmF5IGFzIG0sIG5leHRUaWNrIGFzIG4sIGVsZW1lbnRUcmFuc2l0aW9uRW5kIGFzIG8sIGlzT2JqZWN0IGFzIHAsIGVsZW1lbnRTdHlsZSBhcyBxLCBlbGVtZW50TmV4dEFsbCBhcyByLCBzZXRJbm5lckhUTUwgYXMgcywgZWxlbWVudFByZXZBbGwgYXMgdCwgYW5pbWF0ZUNTU01vZGVTY3JvbGwgYXMgdSwgc2hvd1dhcm5pbmcgYXMgdiwgZWxlbWVudElzQ2hpbGRPZiBhcyB3LCBleHRlbmQgYXMgeCwgZGVsZXRlUHJvcHMgYXMgeSB9O1xuIiwiaW1wb3J0IHsgYSBhcyBnZXRXaW5kb3csIGcgYXMgZ2V0RG9jdW1lbnQgfSBmcm9tICcuL3Nzci13aW5kb3cuZXNtLm1qcyc7XG5pbXBvcnQgeyBkIGFzIGVsZW1lbnRQYXJlbnRzLCBxIGFzIGVsZW1lbnRTdHlsZSwgZSBhcyBlbGVtZW50Q2hpbGRyZW4sIGIgYXMgc2V0Q1NTUHJvcGVydHksIGkgYXMgZWxlbWVudE91dGVyU2l6ZSwgciBhcyBlbGVtZW50TmV4dEFsbCwgdCBhcyBlbGVtZW50UHJldkFsbCwgbCBhcyBnZXRUcmFuc2xhdGUsIHUgYXMgYW5pbWF0ZUNTU01vZGVTY3JvbGwsIG4gYXMgbmV4dFRpY2ssIHYgYXMgc2hvd1dhcm5pbmcsIGMgYXMgY3JlYXRlRWxlbWVudCwgdyBhcyBlbGVtZW50SXNDaGlsZE9mLCBoIGFzIG5vdywgeCBhcyBleHRlbmQsIGogYXMgZWxlbWVudEluZGV4LCB5IGFzIGRlbGV0ZVByb3BzIH0gZnJvbSAnLi91dGlscy5tanMnO1xuXG5sZXQgc3VwcG9ydDtcbmZ1bmN0aW9uIGNhbGNTdXBwb3J0KCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICByZXR1cm4ge1xuICAgIHNtb290aFNjcm9sbDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiAnc2Nyb2xsQmVoYXZpb3InIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcbiAgICB0b3VjaDogISEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpXG4gIH07XG59XG5mdW5jdGlvbiBnZXRTdXBwb3J0KCkge1xuICBpZiAoIXN1cHBvcnQpIHtcbiAgICBzdXBwb3J0ID0gY2FsY1N1cHBvcnQoKTtcbiAgfVxuICByZXR1cm4gc3VwcG9ydDtcbn1cblxubGV0IGRldmljZUNhY2hlZDtcbmZ1bmN0aW9uIGNhbGNEZXZpY2Uoe1xuICB1c2VyQWdlbnRcbn0gPSB7fSkge1xuICBjb25zdCBzdXBwb3J0ID0gZ2V0U3VwcG9ydCgpO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtO1xuICBjb25zdCB1YSA9IHVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgY29uc3QgZGV2aWNlID0ge1xuICAgIGlvczogZmFsc2UsXG4gICAgYW5kcm9pZDogZmFsc2VcbiAgfTtcbiAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgY29uc3QgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBsZXQgaXBhZCA9IHVhLm1hdGNoKC8oaVBhZCkoPyFcXDEpLipPU1xccyhbXFxkX10rKS8pO1xuICBjb25zdCBpcG9kID0gdWEubWF0Y2goLyhpUG9kKSguKk9TXFxzKFtcXGRfXSspKT8vKTtcbiAgY29uc3QgaXBob25lID0gIWlwYWQgJiYgdWEubWF0Y2goLyhpUGhvbmVcXHNPU3xpT1MpXFxzKFtcXGRfXSspLyk7XG4gIGNvbnN0IHdpbmRvd3MgPSBwbGF0Zm9ybSA9PT0gJ1dpbjMyJztcbiAgbGV0IG1hY29zID0gcGxhdGZvcm0gPT09ICdNYWNJbnRlbCc7XG5cbiAgLy8gaVBhZE9zIDEzIGZpeFxuICBjb25zdCBpUGFkU2NyZWVucyA9IFsnMTAyNHgxMzY2JywgJzEzNjZ4MTAyNCcsICc4MzR4MTE5NCcsICcxMTk0eDgzNCcsICc4MzR4MTExMicsICcxMTEyeDgzNCcsICc3Njh4MTAyNCcsICcxMDI0eDc2OCcsICc4MjB4MTE4MCcsICcxMTgweDgyMCcsICc4MTB4MTA4MCcsICcxMDgweDgxMCddO1xuICBpZiAoIWlwYWQgJiYgbWFjb3MgJiYgc3VwcG9ydC50b3VjaCAmJiBpUGFkU2NyZWVucy5pbmRleE9mKGAke3NjcmVlbldpZHRofXgke3NjcmVlbkhlaWdodH1gKSA+PSAwKSB7XG4gICAgaXBhZCA9IHVhLm1hdGNoKC8oVmVyc2lvbilcXC8oW1xcZC5dKykvKTtcbiAgICBpZiAoIWlwYWQpIGlwYWQgPSBbMCwgMSwgJzEzXzBfMCddO1xuICAgIG1hY29zID0gZmFsc2U7XG4gIH1cblxuICAvLyBBbmRyb2lkXG4gIGlmIChhbmRyb2lkICYmICF3aW5kb3dzKSB7XG4gICAgZGV2aWNlLm9zID0gJ2FuZHJvaWQnO1xuICAgIGRldmljZS5hbmRyb2lkID0gdHJ1ZTtcbiAgfVxuICBpZiAoaXBhZCB8fCBpcGhvbmUgfHwgaXBvZCkge1xuICAgIGRldmljZS5vcyA9ICdpb3MnO1xuICAgIGRldmljZS5pb3MgPSB0cnVlO1xuICB9XG5cbiAgLy8gRXhwb3J0IG9iamVjdFxuICByZXR1cm4gZGV2aWNlO1xufVxuZnVuY3Rpb24gZ2V0RGV2aWNlKG92ZXJyaWRlcyA9IHt9KSB7XG4gIGlmICghZGV2aWNlQ2FjaGVkKSB7XG4gICAgZGV2aWNlQ2FjaGVkID0gY2FsY0RldmljZShvdmVycmlkZXMpO1xuICB9XG4gIHJldHVybiBkZXZpY2VDYWNoZWQ7XG59XG5cbmxldCBicm93c2VyO1xuZnVuY3Rpb24gY2FsY0Jyb3dzZXIoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBkZXZpY2UgPSBnZXREZXZpY2UoKTtcbiAgbGV0IG5lZWRQZXJzcGVjdGl2ZUZpeCA9IGZhbHNlO1xuICBmdW5jdGlvbiBpc1NhZmFyaSgpIHtcbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ3NhZmFyaScpID49IDAgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPCAwICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA8IDA7XG4gIH1cbiAgaWYgKGlzU2FmYXJpKCkpIHtcbiAgICBjb25zdCB1YSA9IFN0cmluZyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgaWYgKHVhLmluY2x1ZGVzKCdWZXJzaW9uLycpKSB7XG4gICAgICBjb25zdCBbbWFqb3IsIG1pbm9yXSA9IHVhLnNwbGl0KCdWZXJzaW9uLycpWzFdLnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKS5tYXAobnVtID0+IE51bWJlcihudW0pKTtcbiAgICAgIG5lZWRQZXJzcGVjdGl2ZUZpeCA9IG1ham9yIDwgMTYgfHwgbWFqb3IgPT09IDE2ICYmIG1pbm9yIDwgMjtcbiAgICB9XG4gIH1cbiAgY29uc3QgaXNXZWJWaWV3ID0gLyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgY29uc3QgaXNTYWZhcmlCcm93c2VyID0gaXNTYWZhcmkoKTtcbiAgY29uc3QgbmVlZDNkRml4ID0gaXNTYWZhcmlCcm93c2VyIHx8IGlzV2ViVmlldyAmJiBkZXZpY2UuaW9zO1xuICByZXR1cm4ge1xuICAgIGlzU2FmYXJpOiBuZWVkUGVyc3BlY3RpdmVGaXggfHwgaXNTYWZhcmlCcm93c2VyLFxuICAgIG5lZWRQZXJzcGVjdGl2ZUZpeCxcbiAgICBuZWVkM2RGaXgsXG4gICAgaXNXZWJWaWV3XG4gIH07XG59XG5mdW5jdGlvbiBnZXRCcm93c2VyKCkge1xuICBpZiAoIWJyb3dzZXIpIHtcbiAgICBicm93c2VyID0gY2FsY0Jyb3dzZXIoKTtcbiAgfVxuICByZXR1cm4gYnJvd3Nlcjtcbn1cblxuZnVuY3Rpb24gUmVzaXplKHtcbiAgc3dpcGVyLFxuICBvbixcbiAgZW1pdFxufSkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IG9ic2VydmVyID0gbnVsbDtcbiAgbGV0IGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcbiAgY29uc3QgcmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICBlbWl0KCdiZWZvcmVSZXNpemUnKTtcbiAgICBlbWl0KCdyZXNpemUnKTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlT2JzZXJ2ZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBhbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH0gPSBzd2lwZXI7XG4gICAgICAgIGxldCBuZXdXaWR0aCA9IHdpZHRoO1xuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKHtcbiAgICAgICAgICBjb250ZW50Qm94U2l6ZSxcbiAgICAgICAgICBjb250ZW50UmVjdCxcbiAgICAgICAgICB0YXJnZXRcbiAgICAgICAgfSkgPT4ge1xuICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBzd2lwZXIuZWwpIHJldHVybjtcbiAgICAgICAgICBuZXdXaWR0aCA9IGNvbnRlbnRSZWN0ID8gY29udGVudFJlY3Qud2lkdGggOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmlubGluZVNpemU7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC5oZWlnaHQgOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmJsb2NrU2l6ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdXaWR0aCAhPT0gd2lkdGggfHwgbmV3SGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICByZXNpemVIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoc3dpcGVyLmVsKTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlT2JzZXJ2ZXIgPSAoKSA9PiB7XG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgICBpZiAob2JzZXJ2ZXIgJiYgb2JzZXJ2ZXIudW5vYnNlcnZlICYmIHN3aXBlci5lbCkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHN3aXBlci5lbCk7XG4gICAgICBvYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICB9O1xuICBjb25zdCBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgZW1pdCgnb3JpZW50YXRpb25jaGFuZ2UnKTtcbiAgfTtcbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucmVzaXplT2JzZXJ2ZXIgJiYgdHlwZW9mIHdpbmRvdy5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNyZWF0ZU9ic2VydmVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgcmVtb3ZlT2JzZXJ2ZXIoKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIE9ic2VydmVyKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGNvbnN0IG9ic2VydmVycyA9IFtdO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgYXR0YWNoID0gKHRhcmdldCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgT2JzZXJ2ZXJGdW5jID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYmtpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJGdW5jKG11dGF0aW9ucyA9PiB7XG4gICAgICAvLyBUaGUgb2JzZXJ2ZXJVcGRhdGUgZXZlbnQgc2hvdWxkIG9ubHkgYmUgdHJpZ2dlcmVkXG4gICAgICAvLyBvbmNlIGRlc3BpdGUgdGhlIG51bWJlciBvZiBtdXRhdGlvbnMuICBBZGRpdGlvbmFsXG4gICAgICAvLyB0cmlnZ2VycyBhcmUgcmVkdW5kYW50IGFuZCBhcmUgdmVyeSBjb3N0bHlcbiAgICAgIGlmIChzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXykgcmV0dXJuO1xuICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBvYnNlcnZlclVwZGF0ZSA9IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICBlbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICB9O1xuICAgICAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShvYnNlcnZlclVwZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChvYnNlcnZlclVwZGF0ZSwgMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuYXR0cmlidXRlcyxcbiAgICAgIGNoaWxkTGlzdDogc3dpcGVyLmlzRWxlbWVudCB8fCAodHlwZW9mIG9wdGlvbnMuY2hpbGRMaXN0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zKS5jaGlsZExpc3QsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0eXBlb2Ygb3B0aW9ucy5jaGFyYWN0ZXJEYXRhID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoYXJhY3RlckRhdGFcbiAgICB9KTtcbiAgICBvYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gIH07XG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLm9ic2VydmVyKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5wYXJhbXMub2JzZXJ2ZVBhcmVudHMpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclBhcmVudHMgPSBlbGVtZW50UGFyZW50cyhzd2lwZXIuaG9zdEVsKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyUGFyZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhdHRhY2goY29udGFpbmVyUGFyZW50c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIE9ic2VydmUgY29udGFpbmVyXG4gICAgYXR0YWNoKHN3aXBlci5ob3N0RWwsIHtcbiAgICAgIGNoaWxkTGlzdDogc3dpcGVyLnBhcmFtcy5vYnNlcnZlU2xpZGVDaGlsZHJlblxuICAgIH0pO1xuXG4gICAgLy8gT2JzZXJ2ZSB3cmFwcGVyXG4gICAgYXR0YWNoKHN3aXBlci53cmFwcGVyRWwsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICAgIG9ic2VydmVycy5zcGxpY2UoMCwgb2JzZXJ2ZXJzLmxlbmd0aCk7XG4gIH07XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgb2JzZXJ2ZXI6IGZhbHNlLFxuICAgIG9ic2VydmVQYXJlbnRzOiBmYWxzZSxcbiAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogZmFsc2VcbiAgfSk7XG4gIG9uKCdpbml0JywgaW5pdCk7XG4gIG9uKCdkZXN0cm95JywgZGVzdHJveSk7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbnZhciBldmVudHNFbWl0dGVyID0ge1xuICBvbihldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICBjb25zdCBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XVttZXRob2RdKGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvbmNlKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuICAgIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKC4uLmFyZ3MpIHtcbiAgICAgIHNlbGYub2ZmKGV2ZW50cywgb25jZUhhbmRsZXIpO1xuICAgICAgaWYgKG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5KSB7XG4gICAgICAgIGRlbGV0ZSBvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eTtcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfVxuICAgIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5ID0gaGFuZGxlcjtcbiAgICByZXR1cm4gc2VsZi5vbihldmVudHMsIG9uY2VIYW5kbGVyLCBwcmlvcml0eSk7XG4gIH0sXG4gIG9uQW55KGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICBjb25zdCBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcbiAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKSA8IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzW21ldGhvZF0oaGFuZGxlcik7XG4gICAgfVxuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvZmZBbnkoaGFuZGxlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMgfHwgc2VsZi5kZXN0cm95ZWQpIHJldHVybiBzZWxmO1xuICAgIGlmICghc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIGNvbnN0IGluZGV4ID0gc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIG9mZihldmVudHMsIGhhbmRsZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaCgoZXZlbnRIYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudEhhbmRsZXIgPT09IGhhbmRsZXIgfHwgZXZlbnRIYW5kbGVyLl9fZW1pdHRlclByb3h5ICYmIGV2ZW50SGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgZW1pdCguLi5hcmdzKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgbGV0IGV2ZW50cztcbiAgICBsZXQgZGF0YTtcbiAgICBsZXQgY29udGV4dDtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF07XG4gICAgICBkYXRhID0gYXJncy5zbGljZSgxLCBhcmdzLmxlbmd0aCk7XG4gICAgICBjb250ZXh0ID0gc2VsZjtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnRzID0gYXJnc1swXS5ldmVudHM7XG4gICAgICBkYXRhID0gYXJnc1swXS5kYXRhO1xuICAgICAgY29udGV4dCA9IGFyZ3NbMF0uY29udGV4dCB8fCBzZWxmO1xuICAgIH1cbiAgICBkYXRhLnVuc2hpZnQoY29udGV4dCk7XG4gICAgY29uc3QgZXZlbnRzQXJyYXkgPSBBcnJheS5pc0FycmF5KGV2ZW50cykgPyBldmVudHMgOiBldmVudHMuc3BsaXQoJyAnKTtcbiAgICBldmVudHNBcnJheS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmIChzZWxmLmV2ZW50c0FueUxpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuZm9yRWFjaChldmVudEhhbmRsZXIgPT4ge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBbZXZlbnQsIC4uLmRhdGFdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGV2ZW50SGFuZGxlciA9PiB7XG4gICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxufTtcblxuZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgbGV0IHdpZHRoO1xuICBsZXQgaGVpZ2h0O1xuICBjb25zdCBlbCA9IHN3aXBlci5lbDtcbiAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zLndpZHRoICE9PSAndW5kZWZpbmVkJyAmJiBzd2lwZXIucGFyYW1zLndpZHRoICE9PSBudWxsKSB7XG4gICAgd2lkdGggPSBzd2lwZXIucGFyYW1zLndpZHRoO1xuICB9IGVsc2Uge1xuICAgIHdpZHRoID0gZWwuY2xpZW50V2lkdGg7XG4gIH1cbiAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zLmhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dpcGVyLnBhcmFtcy5oZWlnaHQgIT09IG51bGwpIHtcbiAgICBoZWlnaHQgPSBzd2lwZXIucGFyYW1zLmhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICBoZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQ7XG4gIH1cbiAgaWYgKHdpZHRoID09PSAwICYmIHN3aXBlci5pc0hvcml6b250YWwoKSB8fCBoZWlnaHQgPT09IDAgJiYgc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFN1YnRyYWN0IHBhZGRpbmdzXG4gIHdpZHRoID0gd2lkdGggLSBwYXJzZUludChlbGVtZW50U3R5bGUoZWwsICdwYWRkaW5nLWxlZnQnKSB8fCAwLCAxMCkgLSBwYXJzZUludChlbGVtZW50U3R5bGUoZWwsICdwYWRkaW5nLXJpZ2h0JykgfHwgMCwgMTApO1xuICBoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChlbGVtZW50U3R5bGUoZWwsICdwYWRkaW5nLXRvcCcpIHx8IDAsIDEwKSAtIHBhcnNlSW50KGVsZW1lbnRTdHlsZShlbCwgJ3BhZGRpbmctYm90dG9tJykgfHwgMCwgMTApO1xuICBpZiAoTnVtYmVyLmlzTmFOKHdpZHRoKSkgd2lkdGggPSAwO1xuICBpZiAoTnVtYmVyLmlzTmFOKGhlaWdodCkpIGhlaWdodCA9IDA7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHNpemU6IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHdpZHRoIDogaGVpZ2h0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGZ1bmN0aW9uIGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUobm9kZSwgbGFiZWwpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChub2RlLmdldFByb3BlcnR5VmFsdWUoc3dpcGVyLmdldERpcmVjdGlvbkxhYmVsKGxhYmVsKSkgfHwgMCk7XG4gIH1cbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgY29uc3Qge1xuICAgIHdyYXBwZXJFbCxcbiAgICBzbGlkZXNFbCxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB3cm9uZ1JUTFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBjb25zdCBwcmV2aW91c1NsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgY29uc3Qgc2xpZGVzID0gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCk7XG4gIGNvbnN0IHNsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzbGlkZXMubGVuZ3RoO1xuICBsZXQgc25hcEdyaWQgPSBbXTtcbiAgY29uc3Qgc2xpZGVzR3JpZCA9IFtdO1xuICBjb25zdCBzbGlkZXNTaXplc0dyaWQgPSBbXTtcbiAgbGV0IG9mZnNldEJlZm9yZSA9IHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmU7XG4gIGlmICh0eXBlb2Ygb2Zmc2V0QmVmb3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHN3aXBlcik7XG4gIH1cbiAgbGV0IG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyO1xuICBpZiAodHlwZW9mIG9mZnNldEFmdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIuY2FsbChzd2lwZXIpO1xuICB9XG4gIGNvbnN0IHByZXZpb3VzU25hcEdyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICBjb25zdCBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGggPSBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGg7XG4gIGNvbnN0IHN3aXBlclNpemUgPSBzd2lwZXIuc2l6ZSAtIG9mZnNldEJlZm9yZSAtIG9mZnNldEFmdGVyO1xuICBsZXQgc3BhY2VCZXR3ZWVuID0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgbGV0IHNsaWRlUG9zaXRpb24gPSAtb2Zmc2V0QmVmb3JlO1xuICBsZXQgcHJldlNsaWRlU2l6ZSA9IDA7XG4gIGxldCBpbmRleCA9IDA7XG4gIGlmICh0eXBlb2Ygc3dpcGVyU2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnICYmIHNwYWNlQmV0d2Vlbi5pbmRleE9mKCclJykgPj0gMCkge1xuICAgIHNwYWNlQmV0d2VlbiA9IHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwICogc3dpcGVyU2l6ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3BhY2VCZXR3ZWVuID09PSAnc3RyaW5nJykge1xuICAgIHNwYWNlQmV0d2VlbiA9IHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuKTtcbiAgfVxuICBzd2lwZXIudmlydHVhbFNpemUgPSAtc3BhY2VCZXR3ZWVuIC0gb2Zmc2V0QmVmb3JlIC0gb2Zmc2V0QWZ0ZXI7XG5cbiAgLy8gcmVzZXQgbWFyZ2luc1xuICBzbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICBpZiAocnRsKSB7XG4gICAgICBzbGlkZUVsLnN0eWxlLm1hcmdpbkxlZnQgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVFbC5zdHlsZS5tYXJnaW5SaWdodCA9ICcnO1xuICAgIH1cbiAgICBzbGlkZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcnO1xuICAgIHNsaWRlRWwuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gIH0pO1xuXG4gIC8vIHJlc2V0IGNzc01vZGUgb2Zmc2V0c1xuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc2V0Q1NTUHJvcGVydHkod3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZScsICcnKTtcbiAgICBzZXRDU1NQcm9wZXJ0eSh3cmFwcGVyRWwsICctLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXInLCAnJyk7XG4gIH1cblxuICAvLyBzZXQgY3NzTW9kZSBvZmZzZXRzXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHNldENTU1Byb3BlcnR5KHdyYXBwZXJFbCwgJy0tc3dpcGVyLXNsaWRlcy1vZmZzZXQtYmVmb3JlJywgYCR7b2Zmc2V0QmVmb3JlfXB4YCk7XG4gICAgc2V0Q1NTUHJvcGVydHkod3JhcHBlckVsLCAnLS1zd2lwZXItc2xpZGVzLW9mZnNldC1hZnRlcicsIGAke29mZnNldEFmdGVyfXB4YCk7XG4gIH1cbiAgY29uc3QgZ3JpZEVuYWJsZWQgPSBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMSAmJiBzd2lwZXIuZ3JpZDtcbiAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgc3dpcGVyLmdyaWQuaW5pdFNsaWRlcyhzbGlkZXMpO1xuICB9IGVsc2UgaWYgKHN3aXBlci5ncmlkKSB7XG4gICAgc3dpcGVyLmdyaWQudW5zZXRTbGlkZXMoKTtcbiAgfVxuXG4gIC8vIENhbGMgc2xpZGVzXG4gIGxldCBzbGlkZVNpemU7XG4gIGNvbnN0IHNob3VsZFJlc2V0U2xpZGVTaXplID0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBwYXJhbXMuYnJlYWtwb2ludHMgJiYgT2JqZWN0LmtleXMocGFyYW1zLmJyZWFrcG9pbnRzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHBhcmFtcy5icmVha3BvaW50c1trZXldLnNsaWRlc1BlclZpZXcgIT09ICd1bmRlZmluZWQnO1xuICB9KS5sZW5ndGggPiAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVTaXplID0gMDtcbiAgICBjb25zdCBzbGlkZSA9IHNsaWRlc1tpXTtcbiAgICBpZiAoc2xpZGUpIHtcbiAgICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgICBzd2lwZXIuZ3JpZC51cGRhdGVTbGlkZShpLCBzbGlkZSwgc2xpZGVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50U3R5bGUoc2xpZGUsICdkaXNwbGF5JykgPT09ICdub25lJykgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG5cbiAgICBpZiAoaXNWaXJ0dWFsICYmIHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgIGlmIChwYXJhbXMudmlydHVhbC5zbGlkZXNQZXJWaWV3QXV0b1NsaWRlU2l6ZSkge1xuICAgICAgICBzbGlkZVNpemUgPSBwYXJhbXMudmlydHVhbC5zbGlkZXNQZXJWaWV3QXV0b1NsaWRlU2l6ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzbGlkZVNpemUgJiYgc2xpZGUpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTtcbiAgICAgICAgc2xpZGUuc3R5bGVbc3dpcGVyLmdldERpcmVjdGlvbkxhYmVsKCd3aWR0aCcpXSA9IGAke3NsaWRlU2l6ZX1weGA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICBpZiAoc2hvdWxkUmVzZXRTbGlkZVNpemUpIHtcbiAgICAgICAgc2xpZGUuc3R5bGVbc3dpcGVyLmdldERpcmVjdGlvbkxhYmVsKCd3aWR0aCcpXSA9IGBgO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2xpZGVTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHNsaWRlKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUcmFuc2Zvcm0gPSBzbGlkZS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICBjb25zdCBjdXJyZW50V2ViS2l0VHJhbnNmb3JtID0gc2xpZGUuc3R5bGUud2Via2l0VHJhbnNmb3JtO1xuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGUuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGUuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICAgICAgc2xpZGVTaXplID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gZWxlbWVudE91dGVyU2l6ZShzbGlkZSwgJ3dpZHRoJywgdHJ1ZSkgOiBlbGVtZW50T3V0ZXJTaXplKHNsaWRlLCAnaGVpZ2h0JywgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgY29uc3Qgd2lkdGggPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnd2lkdGgnKTtcbiAgICAgICAgY29uc3QgcGFkZGluZ0xlZnQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAncGFkZGluZy1sZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdSaWdodCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIGNvbnN0IG1hcmdpbkxlZnQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnbWFyZ2luLWxlZnQnKTtcbiAgICAgICAgY29uc3QgbWFyZ2luUmlnaHQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnbWFyZ2luLXJpZ2h0Jyk7XG4gICAgICAgIGNvbnN0IGJveFNpemluZyA9IHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2JveC1zaXppbmcnKTtcbiAgICAgICAgaWYgKGJveFNpemluZyAmJiBib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgIHNsaWRlU2l6ZSA9IHdpZHRoICsgbWFyZ2luTGVmdCArIG1hcmdpblJpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNsaWVudFdpZHRoLFxuICAgICAgICAgICAgb2Zmc2V0V2lkdGhcbiAgICAgICAgICB9ID0gc2xpZGU7XG4gICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodCArIChvZmZzZXRXaWR0aCAtIGNsaWVudFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGUuc3R5bGUudHJhbnNmb3JtID0gY3VycmVudFRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm07XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZVNpemUgPSAoc3dpcGVyU2l6ZSAtIChwYXJhbXMuc2xpZGVzUGVyVmlldyAtIDEpICogc3BhY2VCZXR3ZWVuKSAvIHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTtcbiAgICAgIGlmIChzbGlkZSkge1xuICAgICAgICBzbGlkZS5zdHlsZVtzd2lwZXIuZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gYCR7c2xpZGVTaXplfXB4YDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNsaWRlKSB7XG4gICAgICBzbGlkZS5zd2lwZXJTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgfVxuICAgIHNsaWRlc1NpemVzR3JpZC5wdXNoKHNsaWRlU2l6ZSk7XG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgLyAyICsgcHJldlNsaWRlU2l6ZSAvIDIgKyBzcGFjZUJldHdlZW47XG4gICAgICBpZiAocHJldlNsaWRlU2l6ZSA9PT0gMCAmJiBpICE9PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKGkgPT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gc3dpcGVyU2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoTWF0aC5hYnMoc2xpZGVQb3NpdGlvbikgPCAxIC8gMTAwMCkgc2xpZGVQb3NpdGlvbiA9IDA7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoaW5kZXggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTtcbiAgICAgIGlmICgoaW5kZXggLSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpKSAlIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICB9XG4gICAgc3dpcGVyLnZpcnR1YWxTaXplICs9IHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICBwcmV2U2xpZGVTaXplID0gc2xpZGVTaXplO1xuICAgIGluZGV4ICs9IDE7XG4gIH1cbiAgc3dpcGVyLnZpcnR1YWxTaXplID0gTWF0aC5tYXgoc3dpcGVyLnZpcnR1YWxTaXplLCBzd2lwZXJTaXplKSArIG9mZnNldEFmdGVyO1xuICBpZiAocnRsICYmIHdyb25nUlRMICYmIChwYXJhbXMuZWZmZWN0ID09PSAnc2xpZGUnIHx8IHBhcmFtcy5lZmZlY3QgPT09ICdjb3ZlcmZsb3cnKSkge1xuICAgIHdyYXBwZXJFbC5zdHlsZS53aWR0aCA9IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHNwYWNlQmV0d2Vlbn1weGA7XG4gIH1cbiAgaWYgKHBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkge1xuICAgIHdyYXBwZXJFbC5zdHlsZVtzd2lwZXIuZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gYCR7c3dpcGVyLnZpcnR1YWxTaXplICsgc3BhY2VCZXR3ZWVufXB4YDtcbiAgfVxuICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICBzd2lwZXIuZ3JpZC51cGRhdGVXcmFwcGVyU2l6ZShzbGlkZVNpemUsIHNuYXBHcmlkKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBsYXN0IGdyaWQgZWxlbWVudHMgZGVwZW5kaW5nIG9uIHdpZHRoXG4gIGlmICghcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgLy8gQ2hlY2sgaWYgc25hcFRvU2xpZGVFZGdlIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgY29uc3QgaXNGcmFjdGlvbmFsU2xpZGVzUGVyVmlldyA9IHBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgcGFyYW1zLnNsaWRlc1BlclZpZXcgJSAxICE9PSAwO1xuICAgIGNvbnN0IHNob3VsZFNuYXBUb1NsaWRlRWRnZSA9IHBhcmFtcy5zbmFwVG9TbGlkZUVkZ2UgJiYgIXBhcmFtcy5sb29wICYmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IGlzRnJhY3Rpb25hbFNsaWRlc1BlclZpZXcpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBsYXN0IGFsbG93ZWQgc25hcCBpbmRleCB3aGVuIHNuYXBUb1NsaWRlRWRnZSBpcyBlbmFibGVkXG4gICAgLy8gVGhpcyBlbnN1cmVzIG1pbmltdW0gc2xpZGVzIGFyZSB2aXNpYmxlIGF0IHRoZSBlbmRcbiAgICBsZXQgbGFzdEFsbG93ZWRTbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGg7XG4gICAgaWYgKHNob3VsZFNuYXBUb1NsaWRlRWRnZSkge1xuICAgICAgbGV0IG1pblZpc2libGVTbGlkZXM7XG4gICAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgICAvLyBGb3IgJ2F1dG8nIG1vZGUsIGNhbGN1bGF0ZSBob3cgbWFueSBzbGlkZXMgZml0IGJhc2VkIG9uIGFjdHVhbCBzaXplc1xuICAgICAgICBtaW5WaXNpYmxlU2xpZGVzID0gMTtcbiAgICAgICAgbGV0IGFjY3VtdWxhdGVkU2l6ZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBzbGlkZXNTaXplc0dyaWQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFNpemUgKz0gc2xpZGVzU2l6ZXNHcmlkW2ldICsgKGkgPCBzbGlkZXNTaXplc0dyaWQubGVuZ3RoIC0gMSA/IHNwYWNlQmV0d2VlbiA6IDApO1xuICAgICAgICAgIGlmIChhY2N1bXVsYXRlZFNpemUgPD0gc3dpcGVyU2l6ZSkge1xuICAgICAgICAgICAgbWluVmlzaWJsZVNsaWRlcyA9IHNsaWRlc1NpemVzR3JpZC5sZW5ndGggLSBpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pblZpc2libGVTbGlkZXMgPSBNYXRoLmZsb29yKHBhcmFtcy5zbGlkZXNQZXJWaWV3KTtcbiAgICAgIH1cbiAgICAgIGxhc3RBbGxvd2VkU25hcEluZGV4ID0gTWF0aC5tYXgoc2xpZGVzTGVuZ3RoIC0gbWluVmlzaWJsZVNsaWRlcywgMCk7XG4gICAgfVxuICAgIGNvbnN0IG5ld1NsaWRlc0dyaWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNuYXBHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgc2xpZGVzR3JpZEl0ZW0gPSBzbmFwR3JpZFtpXTtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZXNHcmlkSXRlbSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgaWYgKHNob3VsZFNuYXBUb1NsaWRlRWRnZSkge1xuICAgICAgICAvLyBXaGVuIHNuYXBUb1NsaWRlRWRnZSBpcyBlbmFibGVkLCBvbmx5IGtlZXAgc25hcHMgdXAgdG8gbGFzdEFsbG93ZWRTbmFwSW5kZXhcbiAgICAgICAgaWYgKGkgPD0gbGFzdEFsbG93ZWRTbmFwSW5kZXgpIHtcbiAgICAgICAgICBuZXdTbGlkZXNHcmlkLnB1c2goc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNuYXBHcmlkW2ldIDw9IHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIHtcbiAgICAgICAgLy8gV2hlbiBzbmFwVG9TbGlkZUVkZ2UgaXMgZGlzYWJsZWQsIGtlZXAgc25hcHMgdGhhdCBmaXQgd2l0aGluIHNjcm9sbGFibGUgYXJlYVxuICAgICAgICBuZXdTbGlkZXNHcmlkLnB1c2goc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICBzbmFwR3JpZCA9IG5ld1NsaWRlc0dyaWQ7XG4gICAgaWYgKE1hdGguZmxvb3Ioc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSkgLSBNYXRoLmZsb29yKHNuYXBHcmlkW3NuYXBHcmlkLmxlbmd0aCAtIDFdKSA+IDEpIHtcbiAgICAgIC8vIE9ubHkgYWRkIGVkZ2UtYWxpZ25lZCBzbmFwIGlmIHNuYXBUb1NsaWRlRWRnZSBpcyBub3QgZW5hYmxlZFxuICAgICAgaWYgKCFzaG91bGRTbmFwVG9TbGlkZUVkZ2UpIHtcbiAgICAgICAgc25hcEdyaWQucHVzaChzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGlzVmlydHVhbCAmJiBwYXJhbXMubG9vcCkge1xuICAgIGNvbnN0IHNpemUgPSBzbGlkZXNTaXplc0dyaWRbMF0gKyBzcGFjZUJldHdlZW47XG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJHcm91cCA+IDEpIHtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IE1hdGguY2VpbCgoc3dpcGVyLnZpcnR1YWwuc2xpZGVzQmVmb3JlICsgc3dpcGVyLnZpcnR1YWwuc2xpZGVzQWZ0ZXIpIC8gcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgIGNvbnN0IGdyb3VwU2l6ZSA9IHNpemUgKiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwczsgaSArPSAxKSB7XG4gICAgICAgIHNuYXBHcmlkLnB1c2goc25hcEdyaWRbc25hcEdyaWQubGVuZ3RoIC0gMV0gKyBncm91cFNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZSArIHN3aXBlci52aXJ0dWFsLnNsaWRlc0FmdGVyOyBpICs9IDEpIHtcbiAgICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDEpIHtcbiAgICAgICAgc25hcEdyaWQucHVzaChzbmFwR3JpZFtzbmFwR3JpZC5sZW5ndGggLSAxXSArIHNpemUpO1xuICAgICAgfVxuICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAxXSArIHNpemUpO1xuICAgICAgc3dpcGVyLnZpcnR1YWxTaXplICs9IHNpemU7XG4gICAgfVxuICB9XG4gIGlmIChzbmFwR3JpZC5sZW5ndGggPT09IDApIHNuYXBHcmlkID0gWzBdO1xuICBpZiAoc3BhY2VCZXR3ZWVuICE9PSAwKSB7XG4gICAgY29uc3Qga2V5ID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIHJ0bCA/ICdtYXJnaW5MZWZ0JyA6IHN3aXBlci5nZXREaXJlY3Rpb25MYWJlbCgnbWFyZ2luUmlnaHQnKTtcbiAgICBzbGlkZXMuZmlsdGVyKChfLCBzbGlkZUluZGV4KSA9PiB7XG4gICAgICBpZiAoIXBhcmFtcy5jc3NNb2RlIHx8IHBhcmFtcy5sb29wKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChzbGlkZUluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KS5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgc2xpZGVFbC5zdHlsZVtrZXldID0gYCR7c3BhY2VCZXR3ZWVufXB4YDtcbiAgICB9KTtcbiAgfVxuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlc0JvdW5kcykge1xuICAgIGxldCBhbGxTbGlkZXNTaXplID0gMDtcbiAgICBzbGlkZXNTaXplc0dyaWQuZm9yRWFjaChzbGlkZVNpemVWYWx1ZSA9PiB7XG4gICAgICBhbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHNwYWNlQmV0d2VlbiB8fCAwKTtcbiAgICB9KTtcbiAgICBhbGxTbGlkZXNTaXplIC09IHNwYWNlQmV0d2VlbjtcbiAgICBjb25zdCBtYXhTbmFwID0gYWxsU2xpZGVzU2l6ZSA+IHN3aXBlclNpemUgPyBhbGxTbGlkZXNTaXplIC0gc3dpcGVyU2l6ZSA6IDA7XG4gICAgc25hcEdyaWQgPSBzbmFwR3JpZC5tYXAoc25hcCA9PiB7XG4gICAgICBpZiAoc25hcCA8PSAwKSByZXR1cm4gLW9mZnNldEJlZm9yZTtcbiAgICAgIGlmIChzbmFwID4gbWF4U25hcCkgcmV0dXJuIG1heFNuYXAgKyBvZmZzZXRBZnRlcjtcbiAgICAgIHJldHVybiBzbmFwO1xuICAgIH0pO1xuICB9XG4gIGlmIChwYXJhbXMuY2VudGVySW5zdWZmaWNpZW50U2xpZGVzKSB7XG4gICAgbGV0IGFsbFNsaWRlc1NpemUgPSAwO1xuICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKHNsaWRlU2l6ZVZhbHVlID0+IHtcbiAgICAgIGFsbFNsaWRlc1NpemUgKz0gc2xpZGVTaXplVmFsdWUgKyAoc3BhY2VCZXR3ZWVuIHx8IDApO1xuICAgIH0pO1xuICAgIGFsbFNsaWRlc1NpemUgLT0gc3BhY2VCZXR3ZWVuO1xuICAgIGlmIChhbGxTbGlkZXNTaXplIDwgc3dpcGVyU2l6ZSkge1xuICAgICAgY29uc3QgYWxsU2xpZGVzT2Zmc2V0ID0gKHN3aXBlclNpemUgLSBhbGxTbGlkZXNTaXplKSAvIDI7XG4gICAgICBzbmFwR3JpZC5mb3JFYWNoKChzbmFwLCBzbmFwSW5kZXgpID0+IHtcbiAgICAgICAgc25hcEdyaWRbc25hcEluZGV4XSA9IHNuYXAgLSBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICAgIHNsaWRlc0dyaWQuZm9yRWFjaCgoc25hcCwgc25hcEluZGV4KSA9PiB7XG4gICAgICAgIHNsaWRlc0dyaWRbc25hcEluZGV4XSA9IHNuYXAgKyBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBzbGlkZXMsXG4gICAgc25hcEdyaWQsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBzbGlkZXNTaXplc0dyaWRcbiAgfSk7XG4gIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmNzc01vZGUgJiYgIXBhcmFtcy5jZW50ZXJlZFNsaWRlc0JvdW5kcykge1xuICAgIHNldENTU1Byb3BlcnR5KHdyYXBwZXJFbCwgJy0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUnLCBgJHstc25hcEdyaWRbMF19cHhgKTtcbiAgICBzZXRDU1NQcm9wZXJ0eSh3cmFwcGVyRWwsICctLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXInLCBgJHtzd2lwZXIuc2l6ZSAvIDIgLSBzbGlkZXNTaXplc0dyaWRbc2xpZGVzU2l6ZXNHcmlkLmxlbmd0aCAtIDFdIC8gMn1weGApO1xuICAgIGNvbnN0IGFkZFRvU25hcEdyaWQgPSAtc3dpcGVyLnNuYXBHcmlkWzBdO1xuICAgIGNvbnN0IGFkZFRvU2xpZGVzR3JpZCA9IC1zd2lwZXIuc2xpZGVzR3JpZFswXTtcbiAgICBzd2lwZXIuc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQubWFwKHYgPT4gdiArIGFkZFRvU25hcEdyaWQpO1xuICAgIHN3aXBlci5zbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQubWFwKHYgPT4gdiArIGFkZFRvU2xpZGVzR3JpZCk7XG4gIH1cbiAgaWYgKHNsaWRlc0xlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNMZW5ndGgpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVzTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cbiAgaWYgKHNuYXBHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbmFwR3JpZExlbmd0aCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cpIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgc3dpcGVyLmVtaXQoJ3NuYXBHcmlkTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cbiAgaWYgKHNsaWRlc0dyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGgpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVzR3JpZExlbmd0aENoYW5nZScpO1xuICB9XG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgfVxuICBzd2lwZXIuZW1pdCgnc2xpZGVzVXBkYXRlZCcpO1xuICBpZiAoIWlzVmlydHVhbCAmJiAhcGFyYW1zLmNzc01vZGUgJiYgKHBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcGFyYW1zLmVmZmVjdCA9PT0gJ2ZhZGUnKSkge1xuICAgIGNvbnN0IGJhY2tGYWNlSGlkZGVuQ2xhc3MgPSBgJHtwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31iYWNrZmFjZS1oaWRkZW5gO1xuICAgIGNvbnN0IGhhc0NsYXNzQmFja2ZhY2VDbGFzc0FkZGVkID0gc3dpcGVyLmVsLmNsYXNzTGlzdC5jb250YWlucyhiYWNrRmFjZUhpZGRlbkNsYXNzKTtcbiAgICBpZiAoc2xpZGVzTGVuZ3RoIDw9IHBhcmFtcy5tYXhCYWNrZmFjZUhpZGRlblNsaWRlcykge1xuICAgICAgaWYgKCFoYXNDbGFzc0JhY2tmYWNlQ2xhc3NBZGRlZCkgc3dpcGVyLmVsLmNsYXNzTGlzdC5hZGQoYmFja0ZhY2VIaWRkZW5DbGFzcyk7XG4gICAgfSBlbHNlIGlmIChoYXNDbGFzc0JhY2tmYWNlQ2xhc3NBZGRlZCkge1xuICAgICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5yZW1vdmUoYmFja0ZhY2VIaWRkZW5DbGFzcyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF1dG9IZWlnaHQoc3BlZWQpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgYWN0aXZlU2xpZGVzID0gW107XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBsZXQgbmV3SGVpZ2h0ID0gMDtcbiAgbGV0IGk7XG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICdudW1iZXInKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICB9IGVsc2UgaWYgKHNwZWVkID09PSB0cnVlKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCk7XG4gIH1cbiAgY29uc3QgZ2V0U2xpZGVCeUluZGV4ID0gaW5kZXggPT4ge1xuICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgIHJldHVybiBzd2lwZXIuc2xpZGVzW3N3aXBlci5nZXRTbGlkZUluZGV4QnlEYXRhKGluZGV4KV07XG4gICAgfVxuICAgIHJldHVybiBzd2lwZXIuc2xpZGVzW2luZGV4XTtcbiAgfTtcbiAgLy8gRmluZCBzbGlkZXMgY3VycmVudGx5IGluIHZpZXdcbiAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgKHN3aXBlci52aXNpYmxlU2xpZGVzIHx8IFtdKS5mb3JFYWNoKHNsaWRlID0+IHtcbiAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBNYXRoLmNlaWwoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3KTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4ICsgaTtcbiAgICAgICAgaWYgKGluZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggJiYgIWlzVmlydHVhbCkgYnJlYWs7XG4gICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKGdldFNsaWRlQnlJbmRleChpbmRleCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVTbGlkZXMucHVzaChnZXRTbGlkZUJ5SW5kZXgoc3dpcGVyLmFjdGl2ZUluZGV4KSk7XG4gIH1cblxuICAvLyBGaW5kIG5ldyBoZWlnaHQgZnJvbSBoaWdoZXN0IHNsaWRlIGluIHZpZXdcbiAgZm9yIChpID0gMDsgaSA8IGFjdGl2ZVNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgYWN0aXZlU2xpZGVzW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gYWN0aXZlU2xpZGVzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgIG5ld0hlaWdodCA9IGhlaWdodCA+IG5ld0hlaWdodCA/IGhlaWdodCA6IG5ld0hlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgSGVpZ2h0XG4gIGlmIChuZXdIZWlnaHQgfHwgbmV3SGVpZ2h0ID09PSAwKSBzd2lwZXIud3JhcHBlckVsLnN0eWxlLmhlaWdodCA9IGAke25ld0hlaWdodH1weGA7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlc09mZnNldCgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IG1pbnVzT2Zmc2V0ID0gc3dpcGVyLmlzRWxlbWVudCA/IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHN3aXBlci53cmFwcGVyRWwub2Zmc2V0TGVmdCA6IHN3aXBlci53cmFwcGVyRWwub2Zmc2V0VG9wIDogMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzbGlkZXNbaV0uc3dpcGVyU2xpZGVPZmZzZXQgPSAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gc2xpZGVzW2ldLm9mZnNldExlZnQgOiBzbGlkZXNbaV0ub2Zmc2V0VG9wKSAtIG1pbnVzT2Zmc2V0IC0gc3dpcGVyLmNzc092ZXJmbG93QWRqdXN0bWVudCgpO1xuICB9XG59XG5cbmNvbnN0IHRvZ2dsZVNsaWRlQ2xhc3NlcyQxID0gKHNsaWRlRWwsIGNvbmRpdGlvbiwgY2xhc3NOYW1lKSA9PiB7XG4gIGlmIChjb25kaXRpb24gJiYgIXNsaWRlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmICghY29uZGl0aW9uICYmIHNsaWRlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSA9IHRoaXMgJiYgdGhpcy50cmFuc2xhdGUgfHwgMCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBjb25zdCB7XG4gICAgc2xpZGVzLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHNuYXBHcmlkXG4gIH0gPSBzd2lwZXI7XG4gIGlmIChzbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGlmICh0eXBlb2Ygc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0ID09PSAndW5kZWZpbmVkJykgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICBsZXQgb2Zmc2V0Q2VudGVyID0gLXRyYW5zbGF0ZTtcbiAgaWYgKHJ0bCkgb2Zmc2V0Q2VudGVyID0gdHJhbnNsYXRlO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMgPSBbXTtcbiAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSBbXTtcbiAgbGV0IHNwYWNlQmV0d2VlbiA9IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gIGlmICh0eXBlb2Ygc3BhY2VCZXR3ZWVuID09PSAnc3RyaW5nJyAmJiBzcGFjZUJldHdlZW4uaW5kZXhPZignJScpID49IDApIHtcbiAgICBzcGFjZUJldHdlZW4gPSBwYXJzZUZsb2F0KHNwYWNlQmV0d2Vlbi5yZXBsYWNlKCclJywgJycpKSAvIDEwMCAqIHN3aXBlci5zaXplO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4pO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2xpZGUgPSBzbGlkZXNbaV07XG4gICAgbGV0IHNsaWRlT2Zmc2V0ID0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgaWYgKHBhcmFtcy5jc3NNb2RlICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVPZmZzZXQgLT0gc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgIH1cbiAgICBjb25zdCBzbGlkZVByb2dyZXNzID0gKG9mZnNldENlbnRlciArIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzd2lwZXIubWluVHJhbnNsYXRlKCkgOiAwKSAtIHNsaWRlT2Zmc2V0KSAvIChzbGlkZS5zd2lwZXJTbGlkZVNpemUgKyBzcGFjZUJldHdlZW4pO1xuICAgIGNvbnN0IG9yaWdpbmFsU2xpZGVQcm9ncmVzcyA9IChvZmZzZXRDZW50ZXIgLSBzbmFwR3JpZFswXSArIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzd2lwZXIubWluVHJhbnNsYXRlKCkgOiAwKSAtIHNsaWRlT2Zmc2V0KSAvIChzbGlkZS5zd2lwZXJTbGlkZVNpemUgKyBzcGFjZUJldHdlZW4pO1xuICAgIGNvbnN0IHNsaWRlQmVmb3JlID0gLShvZmZzZXRDZW50ZXIgLSBzbGlkZU9mZnNldCk7XG4gICAgY29uc3Qgc2xpZGVBZnRlciA9IHNsaWRlQmVmb3JlICsgc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICBjb25zdCBpc0Z1bGx5VmlzaWJsZSA9IHNsaWRlQmVmb3JlID49IDAgJiYgc2xpZGVCZWZvcmUgPD0gc3dpcGVyLnNpemUgLSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9IHNsaWRlQmVmb3JlID49IDAgJiYgc2xpZGVCZWZvcmUgPCBzd2lwZXIuc2l6ZSAtIDEgfHwgc2xpZGVBZnRlciA+IDEgJiYgc2xpZGVBZnRlciA8PSBzd2lwZXIuc2l6ZSB8fCBzbGlkZUJlZm9yZSA8PSAwICYmIHNsaWRlQWZ0ZXIgPj0gc3dpcGVyLnNpemU7XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgICB9XG4gICAgdG9nZ2xlU2xpZGVDbGFzc2VzJDEoc2xpZGUsIGlzVmlzaWJsZSwgcGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgICB0b2dnbGVTbGlkZUNsYXNzZXMkMShzbGlkZSwgaXNGdWxseVZpc2libGUsIHBhcmFtcy5zbGlkZUZ1bGx5VmlzaWJsZUNsYXNzKTtcbiAgICBzbGlkZS5wcm9ncmVzcyA9IHJ0bCA/IC1zbGlkZVByb2dyZXNzIDogc2xpZGVQcm9ncmVzcztcbiAgICBzbGlkZS5vcmlnaW5hbFByb2dyZXNzID0gcnRsID8gLW9yaWdpbmFsU2xpZGVQcm9ncmVzcyA6IG9yaWdpbmFsU2xpZGVQcm9ncmVzcztcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKHR5cGVvZiB0cmFuc2xhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgbXVsdGlwbGllciA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyAtMSA6IDE7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdHJhbnNsYXRlID0gc3dpcGVyICYmIHN3aXBlci50cmFuc2xhdGUgJiYgc3dpcGVyLnRyYW5zbGF0ZSAqIG11bHRpcGxpZXIgfHwgMDtcbiAgfVxuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBjb25zdCB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgbGV0IHtcbiAgICBwcm9ncmVzcyxcbiAgICBpc0JlZ2lubmluZyxcbiAgICBpc0VuZCxcbiAgICBwcm9ncmVzc0xvb3BcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qgd2FzQmVnaW5uaW5nID0gaXNCZWdpbm5pbmc7XG4gIGNvbnN0IHdhc0VuZCA9IGlzRW5kO1xuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBwcm9ncmVzcyA9IDA7XG4gICAgaXNCZWdpbm5pbmcgPSB0cnVlO1xuICAgIGlzRW5kID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gICAgY29uc3QgaXNCZWdpbm5pbmdSb3VuZGVkID0gTWF0aC5hYnModHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSA8IDE7XG4gICAgY29uc3QgaXNFbmRSb3VuZGVkID0gTWF0aC5hYnModHJhbnNsYXRlIC0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSA8IDE7XG4gICAgaXNCZWdpbm5pbmcgPSBpc0JlZ2lubmluZ1JvdW5kZWQgfHwgcHJvZ3Jlc3MgPD0gMDtcbiAgICBpc0VuZCA9IGlzRW5kUm91bmRlZCB8fCBwcm9ncmVzcyA+PSAxO1xuICAgIGlmIChpc0JlZ2lubmluZ1JvdW5kZWQpIHByb2dyZXNzID0gMDtcbiAgICBpZiAoaXNFbmRSb3VuZGVkKSBwcm9ncmVzcyA9IDE7XG4gIH1cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgY29uc3QgZmlyc3RTbGlkZUluZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXhCeURhdGEoMCk7XG4gICAgY29uc3QgbGFzdFNsaWRlSW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleEJ5RGF0YShzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IGZpcnN0U2xpZGVUcmFuc2xhdGUgPSBzd2lwZXIuc2xpZGVzR3JpZFtmaXJzdFNsaWRlSW5kZXhdO1xuICAgIGNvbnN0IGxhc3RTbGlkZVRyYW5zbGF0ZSA9IHN3aXBlci5zbGlkZXNHcmlkW2xhc3RTbGlkZUluZGV4XTtcbiAgICBjb25zdCB0cmFuc2xhdGVNYXggPSBzd2lwZXIuc2xpZGVzR3JpZFtzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGggLSAxXTtcbiAgICBjb25zdCB0cmFuc2xhdGVBYnMgPSBNYXRoLmFicyh0cmFuc2xhdGUpO1xuICAgIGlmICh0cmFuc2xhdGVBYnMgPj0gZmlyc3RTbGlkZVRyYW5zbGF0ZSkge1xuICAgICAgcHJvZ3Jlc3NMb29wID0gKHRyYW5zbGF0ZUFicyAtIGZpcnN0U2xpZGVUcmFuc2xhdGUpIC8gdHJhbnNsYXRlTWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9ncmVzc0xvb3AgPSAodHJhbnNsYXRlQWJzICsgdHJhbnNsYXRlTWF4IC0gbGFzdFNsaWRlVHJhbnNsYXRlKSAvIHRyYW5zbGF0ZU1heDtcbiAgICB9XG4gICAgaWYgKHByb2dyZXNzTG9vcCA+IDEpIHByb2dyZXNzTG9vcCAtPSAxO1xuICB9XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgcHJvZ3Jlc3MsXG4gICAgcHJvZ3Jlc3NMb29wLFxuICAgIGlzQmVnaW5uaW5nLFxuICAgIGlzRW5kXG4gIH0pO1xuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5hdXRvSGVpZ2h0KSBzd2lwZXIudXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgaWYgKGlzQmVnaW5uaW5nICYmICF3YXNCZWdpbm5pbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hCZWdpbm5pbmcgdG9FZGdlJyk7XG4gIH1cbiAgaWYgKGlzRW5kICYmICF3YXNFbmQpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hFbmQgdG9FZGdlJyk7XG4gIH1cbiAgaWYgKHdhc0JlZ2lubmluZyAmJiAhaXNCZWdpbm5pbmcgfHwgd2FzRW5kICYmICFpc0VuZCkge1xuICAgIHN3aXBlci5lbWl0KCdmcm9tRWRnZScpO1xuICB9XG4gIHN3aXBlci5lbWl0KCdwcm9ncmVzcycsIHByb2dyZXNzKTtcbn1cblxuY29uc3QgdG9nZ2xlU2xpZGVDbGFzc2VzID0gKHNsaWRlRWwsIGNvbmRpdGlvbiwgY2xhc3NOYW1lKSA9PiB7XG4gIGlmIChjb25kaXRpb24gJiYgIXNsaWRlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmICghY29uZGl0aW9uICYmIHNsaWRlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlc0NsYXNzZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXMsXG4gICAgcGFyYW1zLFxuICAgIHNsaWRlc0VsLFxuICAgIGFjdGl2ZUluZGV4XG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIGNvbnN0IGdyaWRFbmFibGVkID0gc3dpcGVyLmdyaWQgJiYgcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDE7XG4gIGNvbnN0IGdldEZpbHRlcmVkU2xpZGUgPSBzZWxlY3RvciA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSR7c2VsZWN0b3J9LCBzd2lwZXItc2xpZGUke3NlbGVjdG9yfWApWzBdO1xuICB9O1xuICBsZXQgYWN0aXZlU2xpZGU7XG4gIGxldCBwcmV2U2xpZGU7XG4gIGxldCBuZXh0U2xpZGU7XG4gIGlmIChpc1ZpcnR1YWwpIHtcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIGxldCBzbGlkZUluZGV4ID0gYWN0aXZlSW5kZXggLSBzd2lwZXIudmlydHVhbC5zbGlkZXNCZWZvcmU7XG4gICAgICBpZiAoc2xpZGVJbmRleCA8IDApIHNsaWRlSW5kZXggPSBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoICsgc2xpZGVJbmRleDtcbiAgICAgIGlmIChzbGlkZUluZGV4ID49IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGgpIHNsaWRlSW5kZXggLT0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aDtcbiAgICAgIGFjdGl2ZVNsaWRlID0gZ2V0RmlsdGVyZWRTbGlkZShgW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzbGlkZUluZGV4fVwiXWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVTbGlkZSA9IGdldEZpbHRlcmVkU2xpZGUoYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7YWN0aXZlSW5kZXh9XCJdYCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgYWN0aXZlU2xpZGUgPSBzbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuY29sdW1uID09PSBhY3RpdmVJbmRleCk7XG4gICAgICBuZXh0U2xpZGUgPSBzbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuY29sdW1uID09PSBhY3RpdmVJbmRleCArIDEpO1xuICAgICAgcHJldlNsaWRlID0gc2xpZGVzLmZpbmQoc2xpZGVFbCA9PiBzbGlkZUVsLmNvbHVtbiA9PT0gYWN0aXZlSW5kZXggLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlU2xpZGUgPSBzbGlkZXNbYWN0aXZlSW5kZXhdO1xuICAgIH1cbiAgfVxuICBpZiAoYWN0aXZlU2xpZGUpIHtcbiAgICBpZiAoIWdyaWRFbmFibGVkKSB7XG4gICAgICAvLyBOZXh0IFNsaWRlXG4gICAgICBuZXh0U2xpZGUgPSBlbGVtZW50TmV4dEFsbChhY3RpdmVTbGlkZSwgYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYClbMF07XG4gICAgICBpZiAocGFyYW1zLmxvb3AgJiYgIW5leHRTbGlkZSkge1xuICAgICAgICBuZXh0U2xpZGUgPSBzbGlkZXNbMF07XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXYgU2xpZGVcbiAgICAgIHByZXZTbGlkZSA9IGVsZW1lbnRQcmV2QWxsKGFjdGl2ZVNsaWRlLCBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKVswXTtcbiAgICAgIGlmIChwYXJhbXMubG9vcCAmJiAhcHJldlNsaWRlID09PSAwKSB7XG4gICAgICAgIHByZXZTbGlkZSA9IHNsaWRlc1tzbGlkZXMubGVuZ3RoIC0gMV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgIHRvZ2dsZVNsaWRlQ2xhc3NlcyhzbGlkZUVsLCBzbGlkZUVsID09PSBhY3RpdmVTbGlkZSwgcGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xuICAgIHRvZ2dsZVNsaWRlQ2xhc3NlcyhzbGlkZUVsLCBzbGlkZUVsID09PSBuZXh0U2xpZGUsIHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gICAgdG9nZ2xlU2xpZGVDbGFzc2VzKHNsaWRlRWwsIHNsaWRlRWwgPT09IHByZXZTbGlkZSwgcGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgfSk7XG4gIHN3aXBlci5lbWl0U2xpZGVzQ2xhc3NlcygpO1xufVxuXG5jb25zdCBwcm9jZXNzTGF6eVByZWxvYWRlciA9IChzd2lwZXIsIGltYWdlRWwpID0+IHtcbiAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLnBhcmFtcykgcmV0dXJuO1xuICBjb25zdCBzbGlkZVNlbGVjdG9yID0gKCkgPT4gc3dpcGVyLmlzRWxlbWVudCA/IGBzd2lwZXItc2xpZGVgIDogYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31gO1xuICBjb25zdCBzbGlkZUVsID0gaW1hZ2VFbC5jbG9zZXN0KHNsaWRlU2VsZWN0b3IoKSk7XG4gIGlmIChzbGlkZUVsKSB7XG4gICAgbGV0IGxhenlFbCA9IHNsaWRlRWwucXVlcnlTZWxlY3RvcihgLiR7c3dpcGVyLnBhcmFtcy5sYXp5UHJlbG9hZGVyQ2xhc3N9YCk7XG4gICAgaWYgKCFsYXp5RWwgJiYgc3dpcGVyLmlzRWxlbWVudCkge1xuICAgICAgaWYgKHNsaWRlRWwuc2hhZG93Um9vdCkge1xuICAgICAgICBsYXp5RWwgPSBzbGlkZUVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLiR7c3dpcGVyLnBhcmFtcy5sYXp5UHJlbG9hZGVyQ2xhc3N9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpbml0IGxhdGVyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHNsaWRlRWwuc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgbGF6eUVsID0gc2xpZGVFbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC4ke3N3aXBlci5wYXJhbXMubGF6eVByZWxvYWRlckNsYXNzfWApO1xuICAgICAgICAgICAgaWYgKGxhenlFbCAmJiAhbGF6eUVsLmxhenlQcmVsb2FkZXJNYW5hZ2VkKSBsYXp5RWwucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gU2tpcCByZW1vdmFsIGlmIG1hbmFnZWQgYnkgUmVhY3QvVnVlIGNvbXBvbmVudFxuICAgIGlmIChsYXp5RWwgJiYgIWxhenlFbC5sYXp5UHJlbG9hZGVyTWFuYWdlZCkgbGF6eUVsLnJlbW92ZSgpO1xuICB9XG59O1xuY29uc3QgdW5sYXp5ID0gKHN3aXBlciwgaW5kZXgpID0+IHtcbiAgaWYgKCFzd2lwZXIuc2xpZGVzW2luZGV4XSkgcmV0dXJuO1xuICBjb25zdCBpbWFnZUVsID0gc3dpcGVyLnNsaWRlc1tpbmRleF0ucXVlcnlTZWxlY3RvcignW2xvYWRpbmc9XCJsYXp5XCJdJyk7XG4gIGlmIChpbWFnZUVsKSBpbWFnZUVsLnJlbW92ZUF0dHJpYnV0ZSgnbG9hZGluZycpO1xufTtcbmNvbnN0IHByZWxvYWQgPSBzd2lwZXIgPT4ge1xuICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIucGFyYW1zKSByZXR1cm47XG4gIGxldCBhbW91bnQgPSBzd2lwZXIucGFyYW1zLmxhenlQcmVsb2FkUHJldk5leHQ7XG4gIGNvbnN0IGxlbiA9IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICBpZiAoIWxlbiB8fCAhYW1vdW50IHx8IGFtb3VudCA8IDApIHJldHVybjtcbiAgYW1vdW50ID0gTWF0aC5taW4oYW1vdW50LCBsZW4pO1xuICBjb25zdCBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IE1hdGguY2VpbChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcpO1xuICBjb25zdCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgaWYgKHN3aXBlci5wYXJhbXMuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQucm93cyA+IDEpIHtcbiAgICBjb25zdCBhY3RpdmVDb2x1bW4gPSBhY3RpdmVJbmRleDtcbiAgICBjb25zdCBwcmVsb2FkQ29sdW1ucyA9IFthY3RpdmVDb2x1bW4gLSBhbW91bnRdO1xuICAgIHByZWxvYWRDb2x1bW5zLnB1c2goLi4uQXJyYXkuZnJvbSh7XG4gICAgICBsZW5ndGg6IGFtb3VudFxuICAgIH0pLm1hcCgoXywgaSkgPT4ge1xuICAgICAgcmV0dXJuIGFjdGl2ZUNvbHVtbiArIHNsaWRlc1BlclZpZXcgKyBpO1xuICAgIH0pKTtcbiAgICBzd2lwZXIuc2xpZGVzLmZvckVhY2goKHNsaWRlRWwsIGkpID0+IHtcbiAgICAgIGlmIChwcmVsb2FkQ29sdW1ucy5pbmNsdWRlcyhzbGlkZUVsLmNvbHVtbikpIHVubGF6eShzd2lwZXIsIGkpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzbGlkZUluZGV4TGFzdEluVmlldyA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzUGVyVmlldyAtIDE7XG4gIGlmIChzd2lwZXIucGFyYW1zLnJld2luZCB8fCBzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggLSBhbW91bnQ7IGkgPD0gc2xpZGVJbmRleExhc3RJblZpZXcgKyBhbW91bnQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmVhbEluZGV4ID0gKGkgJSBsZW4gKyBsZW4pICUgbGVuO1xuICAgICAgaWYgKHJlYWxJbmRleCA8IGFjdGl2ZUluZGV4IHx8IHJlYWxJbmRleCA+IHNsaWRlSW5kZXhMYXN0SW5WaWV3KSB1bmxhenkoc3dpcGVyLCByZWFsSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gTWF0aC5tYXgoYWN0aXZlSW5kZXggLSBhbW91bnQsIDApOyBpIDw9IE1hdGgubWluKHNsaWRlSW5kZXhMYXN0SW5WaWV3ICsgYW1vdW50LCBsZW4gLSAxKTsgaSArPSAxKSB7XG4gICAgICBpZiAoaSAhPT0gYWN0aXZlSW5kZXggJiYgKGkgPiBzbGlkZUluZGV4TGFzdEluVmlldyB8fCBpIDwgYWN0aXZlSW5kZXgpKSB7XG4gICAgICAgIHVubGF6eShzd2lwZXIsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0QWN0aXZlSW5kZXhCeVRyYW5zbGF0ZShzd2lwZXIpIHtcbiAgY29uc3Qge1xuICAgIHNsaWRlc0dyaWQsXG4gICAgcGFyYW1zXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIGxldCBhY3RpdmVJbmRleDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzbGlkZXNHcmlkW2kgKyAxXSAtIChzbGlkZXNHcmlkW2kgKyAxXSAtIHNsaWRlc0dyaWRbaV0pIC8gMikge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHNsaWRlc0dyaWRbaSArIDFdKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaSArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgIH1cbiAgfVxuICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICBpZiAocGFyYW1zLm5vcm1hbGl6ZVNsaWRlSW5kZXgpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXggPCAwIHx8IHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIGFjdGl2ZUluZGV4ID0gMDtcbiAgfVxuICByZXR1cm4gYWN0aXZlSW5kZXg7XG59XG5mdW5jdGlvbiB1cGRhdGVBY3RpdmVJbmRleChuZXdBY3RpdmVJbmRleCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICBjb25zdCB7XG4gICAgc25hcEdyaWQsXG4gICAgcGFyYW1zLFxuICAgIGFjdGl2ZUluZGV4OiBwcmV2aW91c0luZGV4LFxuICAgIHJlYWxJbmRleDogcHJldmlvdXNSZWFsSW5kZXgsXG4gICAgc25hcEluZGV4OiBwcmV2aW91c1NuYXBJbmRleFxuICB9ID0gc3dpcGVyO1xuICBsZXQgYWN0aXZlSW5kZXggPSBuZXdBY3RpdmVJbmRleDtcbiAgbGV0IHNuYXBJbmRleDtcbiAgY29uc3QgZ2V0VmlydHVhbFJlYWxJbmRleCA9IGFJbmRleCA9PiB7XG4gICAgbGV0IHJlYWxJbmRleCA9IGFJbmRleCAtIHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZTtcbiAgICBpZiAocmVhbEluZGV4IDwgMCkge1xuICAgICAgcmVhbEluZGV4ID0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCArIHJlYWxJbmRleDtcbiAgICB9XG4gICAgaWYgKHJlYWxJbmRleCA+PSBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoKSB7XG4gICAgICByZWFsSW5kZXggLT0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHJlYWxJbmRleDtcbiAgfTtcbiAgaWYgKHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhY3RpdmVJbmRleCA9IGdldEFjdGl2ZUluZGV4QnlUcmFuc2xhdGUoc3dpcGVyKTtcbiAgfVxuICBpZiAoc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpID49IDApIHtcbiAgICBzbmFwSW5kZXggPSBzbmFwR3JpZC5pbmRleE9mKHRyYW5zbGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2tpcCA9IE1hdGgubWluKHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGFjdGl2ZUluZGV4KTtcbiAgICBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoYWN0aXZlSW5kZXggLSBza2lwKSAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIH1cbiAgaWYgKHNuYXBJbmRleCA+PSBzbmFwR3JpZC5sZW5ndGgpIHNuYXBJbmRleCA9IHNuYXBHcmlkLmxlbmd0aCAtIDE7XG4gIGlmIChhY3RpdmVJbmRleCA9PT0gcHJldmlvdXNJbmRleCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHNuYXBJbmRleCAhPT0gcHJldmlvdXNTbmFwSW5kZXgpIHtcbiAgICAgIHN3aXBlci5zbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoYWN0aXZlSW5kZXggPT09IHByZXZpb3VzSW5kZXggJiYgc3dpcGVyLnBhcmFtcy5sb29wICYmIHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgc3dpcGVyLnJlYWxJbmRleCA9IGdldFZpcnR1YWxSZWFsSW5kZXgoYWN0aXZlSW5kZXgpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBncmlkRW5hYmxlZCA9IHN3aXBlci5ncmlkICYmIHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxO1xuXG4gIC8vIEdldCByZWFsIGluZGV4XG4gIGxldCByZWFsSW5kZXg7XG4gIGlmIChzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICByZWFsSW5kZXggPSBnZXRWaXJ0dWFsUmVhbEluZGV4KGFjdGl2ZUluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVhbEluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgfVxuICB9IGVsc2UgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgY29uc3QgZmlyc3RTbGlkZUluQ29sdW1uID0gc3dpcGVyLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5jb2x1bW4gPT09IGFjdGl2ZUluZGV4KTtcbiAgICBsZXQgYWN0aXZlU2xpZGVJbmRleCA9IHBhcnNlSW50KGZpcnN0U2xpZGVJbkNvbHVtbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKGFjdGl2ZVNsaWRlSW5kZXgpKSB7XG4gICAgICBhY3RpdmVTbGlkZUluZGV4ID0gTWF0aC5tYXgoc3dpcGVyLnNsaWRlcy5pbmRleE9mKGZpcnN0U2xpZGVJbkNvbHVtbiksIDApO1xuICAgIH1cbiAgICByZWFsSW5kZXggPSBNYXRoLmZsb29yKGFjdGl2ZVNsaWRlSW5kZXggLyBwYXJhbXMuZ3JpZC5yb3dzKTtcbiAgfSBlbHNlIGlmIChzd2lwZXIuc2xpZGVzW2FjdGl2ZUluZGV4XSkge1xuICAgIGNvbnN0IHNsaWRlSW5kZXggPSBzd2lwZXIuc2xpZGVzW2FjdGl2ZUluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIHJlYWxJbmRleCA9IHBhcnNlSW50KHNsaWRlSW5kZXgsIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVhbEluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlYWxJbmRleCA9IGFjdGl2ZUluZGV4O1xuICB9XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgcHJldmlvdXNTbmFwSW5kZXgsXG4gICAgc25hcEluZGV4LFxuICAgIHByZXZpb3VzUmVhbEluZGV4LFxuICAgIHJlYWxJbmRleCxcbiAgICBwcmV2aW91c0luZGV4LFxuICAgIGFjdGl2ZUluZGV4XG4gIH0pO1xuICBpZiAoc3dpcGVyLmluaXRpYWxpemVkKSB7XG4gICAgcHJlbG9hZChzd2lwZXIpO1xuICB9XG4gIHN3aXBlci5lbWl0KCdhY3RpdmVJbmRleENoYW5nZScpO1xuICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQgfHwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpIHtcbiAgICBpZiAocHJldmlvdXNSZWFsSW5kZXggIT09IHJlYWxJbmRleCkge1xuICAgICAgc3dpcGVyLmVtaXQoJ3JlYWxJbmRleENoYW5nZScpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2UnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDbGlja2VkU2xpZGUoZWwsIHBhdGgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgbGV0IHNsaWRlID0gZWwuY2xvc2VzdChgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKTtcbiAgaWYgKCFzbGlkZSAmJiBzd2lwZXIuaXNFbGVtZW50ICYmIHBhdGggJiYgcGF0aC5sZW5ndGggPiAxICYmIHBhdGguaW5jbHVkZXMoZWwpKSB7XG4gICAgWy4uLnBhdGguc2xpY2UocGF0aC5pbmRleE9mKGVsKSArIDEsIHBhdGgubGVuZ3RoKV0uZm9yRWFjaChwYXRoRWwgPT4ge1xuICAgICAgaWYgKCFzbGlkZSAmJiBwYXRoRWwubWF0Y2hlcyAmJiBwYXRoRWwubWF0Y2hlcyhgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKSkge1xuICAgICAgICBzbGlkZSA9IHBhdGhFbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBsZXQgc2xpZGVGb3VuZCA9IGZhbHNlO1xuICBsZXQgc2xpZGVJbmRleDtcbiAgaWYgKHNsaWRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpXSA9PT0gc2xpZGUpIHtcbiAgICAgICAgc2xpZGVGb3VuZCA9IHRydWU7XG4gICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHNsaWRlICYmIHNsaWRlRm91bmQpIHtcbiAgICBzd2lwZXIuY2xpY2tlZFNsaWRlID0gc2xpZGU7XG4gICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gcGFyc2VJbnQoc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBzbGlkZUluZGV4O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuY2xpY2tlZFNsaWRlID0gdW5kZWZpbmVkO1xuICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXJhbXMuc2xpZGVUb0NsaWNrZWRTbGlkZSAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSB1bmRlZmluZWQgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gc3dpcGVyLmFjdGl2ZUluZGV4KSB7XG4gICAgc3dpcGVyLnNsaWRlVG9DbGlja2VkU2xpZGUoKTtcbiAgfVxufVxuXG52YXIgdXBkYXRlID0ge1xuICB1cGRhdGVTaXplLFxuICB1cGRhdGVTbGlkZXMsXG4gIHVwZGF0ZUF1dG9IZWlnaHQsXG4gIHVwZGF0ZVNsaWRlc09mZnNldCxcbiAgdXBkYXRlU2xpZGVzUHJvZ3Jlc3MsXG4gIHVwZGF0ZVByb2dyZXNzLFxuICB1cGRhdGVTbGlkZXNDbGFzc2VzLFxuICB1cGRhdGVBY3RpdmVJbmRleCxcbiAgdXBkYXRlQ2xpY2tlZFNsaWRlXG59O1xuXG5mdW5jdGlvbiBnZXRTd2lwZXJUcmFuc2xhdGUoYXhpcyA9IHRoaXMuaXNIb3Jpem9udGFsKCkgPyAneCcgOiAneScpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB0cmFuc2xhdGUsXG4gICAgd3JhcHBlckVsXG4gIH0gPSBzd2lwZXI7XG4gIGlmIChwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgIHJldHVybiBydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICB9XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybiB0cmFuc2xhdGU7XG4gIH1cbiAgbGV0IGN1cnJlbnRUcmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUod3JhcHBlckVsLCBheGlzKTtcbiAgY3VycmVudFRyYW5zbGF0ZSArPSBzd2lwZXIuY3NzT3ZlcmZsb3dBZGp1c3RtZW50KCk7XG4gIGlmIChydGwpIGN1cnJlbnRUcmFuc2xhdGUgPSAtY3VycmVudFRyYW5zbGF0ZTtcbiAgcmV0dXJuIGN1cnJlbnRUcmFuc2xhdGUgfHwgMDtcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICBwYXJhbXMsXG4gICAgd3JhcHBlckVsLFxuICAgIHByb2dyZXNzXG4gIH0gPSBzd2lwZXI7XG4gIGxldCB4ID0gMDtcbiAgbGV0IHkgPSAwO1xuICBjb25zdCB6ID0gMDtcbiAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgIHggPSBydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICB9IGVsc2Uge1xuICAgIHkgPSB0cmFuc2xhdGU7XG4gIH1cbiAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgfVxuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuICBzd2lwZXIudHJhbnNsYXRlID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8geCA6IHk7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbFtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAteCA6IC15O1xuICB9IGVsc2UgaWYgKCFwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHggLT0gc3dpcGVyLmNzc092ZXJmbG93QWRqdXN0bWVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB5IC09IHN3aXBlci5jc3NPdmVyZmxvd0FkanVzdG1lbnQoKTtcbiAgICB9XG4gICAgd3JhcHBlckVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWA7XG4gIH1cblxuICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSBwcm9ncmVzc1xuICBsZXQgbmV3UHJvZ3Jlc3M7XG4gIGNvbnN0IHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBuZXdQcm9ncmVzcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICB9XG4gIGlmIChuZXdQcm9ncmVzcyAhPT0gcHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgfVxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcbn1cblxuZnVuY3Rpb24gbWluVHJhbnNsYXRlKCkge1xuICByZXR1cm4gLXRoaXMuc25hcEdyaWRbMF07XG59XG5cbmZ1bmN0aW9uIG1heFRyYW5zbGF0ZSgpIHtcbiAgcmV0dXJuIC10aGlzLnNuYXBHcmlkW3RoaXMuc25hcEdyaWQubGVuZ3RoIC0gMV07XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRvKHRyYW5zbGF0ZSA9IDAsIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQsIHJ1bkNhbGxiYWNrcyA9IHRydWUsIHRyYW5zbGF0ZUJvdW5kcyA9IHRydWUsIGludGVybmFsKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgd3JhcHBlckVsXG4gIH0gPSBzd2lwZXI7XG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbWluVHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICBjb25zdCBtYXhUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gIGxldCBuZXdUcmFuc2xhdGU7XG4gIGlmICh0cmFuc2xhdGVCb3VuZHMgJiYgdHJhbnNsYXRlID4gbWluVHJhbnNsYXRlKSBuZXdUcmFuc2xhdGUgPSBtaW5UcmFuc2xhdGU7ZWxzZSBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA8IG1heFRyYW5zbGF0ZSkgbmV3VHJhbnNsYXRlID0gbWF4VHJhbnNsYXRlO2Vsc2UgbmV3VHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuXG4gIC8vIFVwZGF0ZSBwcm9ncmVzc1xuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MobmV3VHJhbnNsYXRlKTtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgY29uc3QgaXNIID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IC1uZXdUcmFuc2xhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghc3dpcGVyLnN1cHBvcnQuc21vb3RoU2Nyb2xsKSB7XG4gICAgICAgIGFuaW1hdGVDU1NNb2RlU2Nyb2xsKHtcbiAgICAgICAgICBzd2lwZXIsXG4gICAgICAgICAgdGFyZ2V0UG9zaXRpb246IC1uZXdUcmFuc2xhdGUsXG4gICAgICAgICAgc2lkZTogaXNIID8gJ2xlZnQnIDogJ3RvcCdcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgd3JhcHBlckVsLnNjcm9sbFRvKHtcbiAgICAgICAgW2lzSCA/ICdsZWZ0JyA6ICd0b3AnXTogLW5ld1RyYW5zbGF0ZSxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uU3RhcnQnKTtcbiAgICB9XG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIGlmICghc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkge1xuICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci53cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kO1xuICAgICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHN3aXBlci53cmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIHRyYW5zbGF0ZSA9IHtcbiAgZ2V0VHJhbnNsYXRlOiBnZXRTd2lwZXJUcmFuc2xhdGUsXG4gIHNldFRyYW5zbGF0ZSxcbiAgbWluVHJhbnNsYXRlLFxuICBtYXhUcmFuc2xhdGUsXG4gIHRyYW5zbGF0ZVRvXG59O1xuXG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKCFzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcbiAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGR1cmF0aW9uID09PSAwID8gYDBtc2AgOiAnJztcbiAgfVxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNpdGlvbicsIGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uRW1pdCh7XG4gIHN3aXBlcixcbiAgcnVuQ2FsbGJhY2tzLFxuICBkaXJlY3Rpb24sXG4gIHN0ZXBcbn0pIHtcbiAgY29uc3Qge1xuICAgIGFjdGl2ZUluZGV4LFxuICAgIHByZXZpb3VzSW5kZXhcbiAgfSA9IHN3aXBlcjtcbiAgbGV0IGRpciA9IGRpcmVjdGlvbjtcbiAgaWYgKCFkaXIpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXggPiBwcmV2aW91c0luZGV4KSBkaXIgPSAnbmV4dCc7ZWxzZSBpZiAoYWN0aXZlSW5kZXggPCBwcmV2aW91c0luZGV4KSBkaXIgPSAncHJldic7ZWxzZSBkaXIgPSAncmVzZXQnO1xuICB9XG4gIHN3aXBlci5lbWl0KGB0cmFuc2l0aW9uJHtzdGVwfWApO1xuICBpZiAocnVuQ2FsbGJhY2tzICYmIGRpciA9PT0gJ3Jlc2V0Jykge1xuICAgIHN3aXBlci5lbWl0KGBzbGlkZVJlc2V0VHJhbnNpdGlvbiR7c3RlcH1gKTtcbiAgfSBlbHNlIGlmIChydW5DYWxsYmFja3MgJiYgYWN0aXZlSW5kZXggIT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBzd2lwZXIuZW1pdChgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uJHtzdGVwfWApO1xuICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoYHNsaWRlTmV4dFRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5lbWl0KGBzbGlkZVByZXZUcmFuc2l0aW9uJHtzdGVwfWApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzID0gdHJ1ZSwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gIH1cbiAgdHJhbnNpdGlvbkVtaXQoe1xuICAgIHN3aXBlcixcbiAgICBydW5DYWxsYmFja3MsXG4gICAgZGlyZWN0aW9uLFxuICAgIHN0ZXA6ICdTdGFydCdcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzID0gdHJ1ZSwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gIHRyYW5zaXRpb25FbWl0KHtcbiAgICBzd2lwZXIsXG4gICAgcnVuQ2FsbGJhY2tzLFxuICAgIGRpcmVjdGlvbixcbiAgICBzdGVwOiAnRW5kJ1xuICB9KTtcbn1cblxudmFyIHRyYW5zaXRpb24gPSB7XG4gIHNldFRyYW5zaXRpb24sXG4gIHRyYW5zaXRpb25TdGFydCxcbiAgdHJhbnNpdGlvbkVuZFxufTtcblxuZnVuY3Rpb24gc2xpZGVUbyhpbmRleCA9IDAsIHNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCwgaW5pdGlhbCkge1xuICBpZiAodHlwZW9mIGluZGV4ID09PSAnc3RyaW5nJykge1xuICAgIGluZGV4ID0gcGFyc2VJbnQoaW5kZXgsIDEwKTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBsZXQgc2xpZGVJbmRleCA9IGluZGV4O1xuICBpZiAoc2xpZGVJbmRleCA8IDApIHNsaWRlSW5kZXggPSAwO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQsXG4gICAgcHJldmlvdXNJbmRleCxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB3cmFwcGVyRWwsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQgJiYgIWludGVybmFsICYmICFpbml0aWFsIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3BlZWQgPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICB9XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgc2xpZGVJbmRleCk7XG4gIGxldCBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoc2xpZGVJbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuICBjb25zdCB0cmFuc2xhdGUgPSAtc25hcEdyaWRbc25hcEluZGV4XTtcbiAgLy8gTm9ybWFsaXplIHNsaWRlSW5kZXhcbiAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkVHJhbnNsYXRlID0gLU1hdGguZmxvb3IodHJhbnNsYXRlICogMTAwKTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRHcmlkID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkW2ldICogMTAwKTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRHcmlkTmV4dCA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpICsgMV0gKiAxMDApO1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdyaWQgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA8IG5vcm1hbGl6ZWRHcmlkTmV4dCAtIChub3JtYWxpemVkR3JpZE5leHQgLSBub3JtYWxpemVkR3JpZCkgLyAyKSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR3JpZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0KSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdyaWQpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCAmJiBzbGlkZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIChydGwgPyB0cmFuc2xhdGUgPiBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSA6IHRyYW5zbGF0ZSA8IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiB0cmFuc2xhdGUgPiBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA+IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgaWYgKChhY3RpdmVJbmRleCB8fCAwKSAhPT0gc2xpZGVJbmRleCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChzbGlkZUluZGV4ICE9PSAocHJldmlvdXNJbmRleCB8fCAwKSAmJiBydW5DYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlU2xpZGVDaGFuZ2VTdGFydCcpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHByb2dyZXNzXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICBsZXQgZGlyZWN0aW9uO1xuICBpZiAoc2xpZGVJbmRleCA+IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAnbmV4dCc7ZWxzZSBpZiAoc2xpZGVJbmRleCA8IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAncHJldic7ZWxzZSBkaXJlY3Rpb24gPSAncmVzZXQnO1xuXG4gIC8vIGluaXRpYWwgdmlydHVhbFxuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgY29uc3QgaXNJbml0aWFsVmlydHVhbCA9IGlzVmlydHVhbCAmJiBpbml0aWFsO1xuICAvLyBVcGRhdGUgSW5kZXhcbiAgaWYgKCFpc0luaXRpYWxWaXJ0dWFsICYmIChydGwgJiYgLXRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSB8fCAhcnRsICYmIHRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSkpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgLy8gVXBkYXRlIEhlaWdodFxuICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICB9XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBpZiAocGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJykge1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uICE9PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIGNvbnN0IGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBjb25zdCB0ID0gcnRsID8gdHJhbnNsYXRlIDogLXRyYW5zbGF0ZTtcbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcbiAgICAgICAgc3dpcGVyLl9pbW1lZGlhdGVWaXJ0dWFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1ZpcnR1YWwgJiYgIXN3aXBlci5fY3NzTW9kZVZpcnR1YWxJbml0aWFsU2V0ICYmIHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlID4gMCkge1xuICAgICAgICBzd2lwZXIuX2Nzc01vZGVWaXJ0dWFsSW5pdGlhbFNldCA9IHRydWU7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHQ7XG4gICAgICB9XG4gICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICcnO1xuICAgICAgICAgIHN3aXBlci5faW1tZWRpYXRlVmlydHVhbCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFzd2lwZXIuc3VwcG9ydC5zbW9vdGhTY3JvbGwpIHtcbiAgICAgICAgYW5pbWF0ZUNTU01vZGVTY3JvbGwoe1xuICAgICAgICAgIHN3aXBlcixcbiAgICAgICAgICB0YXJnZXRQb3NpdGlvbjogdCxcbiAgICAgICAgICBzaWRlOiBpc0ggPyAnbGVmdCcgOiAndG9wJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgICBbaXNIID8gJ2xlZnQnIDogJ3RvcCddOiB0LFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3NlcigpO1xuICBjb25zdCBpc1NhZmFyaSA9IGJyb3dzZXIuaXNTYWZhcmk7XG4gIGlmIChpc1ZpcnR1YWwgJiYgIWluaXRpYWwgJiYgaXNTYWZhcmkgJiYgc3dpcGVyLmlzRWxlbWVudCkge1xuICAgIHN3aXBlci52aXJ0dWFsLnVwZGF0ZShmYWxzZSwgZmFsc2UsIHNsaWRlSW5kZXgpO1xuICB9XG4gIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICB9IGVsc2UgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgaWYgKCFzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBudWxsO1xuICAgICAgICBkZWxldGUgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kO1xuICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgICBzd2lwZXIud3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzbGlkZVRvTG9vcChpbmRleCA9IDAsIHNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCkge1xuICBpZiAodHlwZW9mIGluZGV4ID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGluZGV4QXNOdW1iZXIgPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgIGluZGV4ID0gaW5kZXhBc051bWJlcjtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICBjb25zdCBncmlkRW5hYmxlZCA9IHN3aXBlci5ncmlkICYmIHN3aXBlci5wYXJhbXMuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQucm93cyA+IDE7XG4gIGxldCBuZXdJbmRleCA9IGluZGV4O1xuICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyBzd2lwZXIudmlydHVhbC5zbGlkZXNCZWZvcmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0YXJnZXRTbGlkZUluZGV4O1xuICAgICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBuZXdJbmRleCAqIHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzO1xuICAgICAgICB0YXJnZXRTbGlkZUluZGV4ID0gc3dpcGVyLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKiAxID09PSBzbGlkZUluZGV4KS5jb2x1bW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRTbGlkZUluZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXhCeURhdGEobmV3SW5kZXgpO1xuICAgICAgfVxuICAgICAgY29uc3QgY29scyA9IGdyaWRFbmFibGVkID8gTWF0aC5jZWlsKHN3aXBlci5zbGlkZXMubGVuZ3RoIC8gc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3MpIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNlbnRlcmVkU2xpZGVzLFxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmUsXG4gICAgICAgIHNsaWRlc09mZnNldEFmdGVyXG4gICAgICB9ID0gc3dpcGVyLnBhcmFtcztcbiAgICAgIGNvbnN0IGJvdGhEaXJlY3Rpb25zID0gY2VudGVyZWRTbGlkZXMgfHwgISFzbGlkZXNPZmZzZXRCZWZvcmUgfHwgISFzbGlkZXNPZmZzZXRBZnRlcjtcbiAgICAgIGxldCBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgaWYgKHNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgICBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXNQZXJWaWV3ID0gTWF0aC5jZWlsKHBhcnNlRmxvYXQoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3LCAxMCkpO1xuICAgICAgICBpZiAoYm90aERpcmVjdGlvbnMgJiYgc2xpZGVzUGVyVmlldyAlIDIgPT09IDApIHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3ID0gc2xpZGVzUGVyVmlldyArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBuZWVkTG9vcEZpeCA9IGNvbHMgLSB0YXJnZXRTbGlkZUluZGV4IDwgc2xpZGVzUGVyVmlldztcbiAgICAgIGlmIChib3RoRGlyZWN0aW9ucykge1xuICAgICAgICBuZWVkTG9vcEZpeCA9IG5lZWRMb29wRml4IHx8IHRhcmdldFNsaWRlSW5kZXggPCBNYXRoLmNlaWwoc2xpZGVzUGVyVmlldyAvIDIpO1xuICAgICAgfVxuICAgICAgaWYgKGludGVybmFsICYmIGJvdGhEaXJlY3Rpb25zICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmICFncmlkRW5hYmxlZCkge1xuICAgICAgICBuZWVkTG9vcEZpeCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMb29wRml4KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGJvdGhEaXJlY3Rpb25zID8gdGFyZ2V0U2xpZGVJbmRleCA8IHN3aXBlci5hY3RpdmVJbmRleCA/ICdwcmV2JyA6ICduZXh0JyA6IHRhcmdldFNsaWRlSW5kZXggLSBzd2lwZXIuYWN0aXZlSW5kZXggLSAxIDwgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID8gJ25leHQnIDogJ3ByZXYnO1xuICAgICAgICBzd2lwZXIubG9vcEZpeCh7XG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgIHNsaWRlVG86IHRydWUsXG4gICAgICAgICAgYWN0aXZlU2xpZGVJbmRleDogZGlyZWN0aW9uID09PSAnbmV4dCcgPyB0YXJnZXRTbGlkZUluZGV4ICsgMSA6IHRhcmdldFNsaWRlSW5kZXggLSBjb2xzICsgMSxcbiAgICAgICAgICBzbGlkZVJlYWxJbmRleDogZGlyZWN0aW9uID09PSAnbmV4dCcgPyBzd2lwZXIucmVhbEluZGV4IDogdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBuZXdJbmRleCAqIHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzO1xuICAgICAgICBuZXdJbmRleCA9IHN3aXBlci5zbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICogMSA9PT0gc2xpZGVJbmRleCkuY29sdW1uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3SW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleEJ5RGF0YShuZXdJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgfSk7XG4gIHJldHVybiBzd2lwZXI7XG59XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZnVuY3Rpb24gc2xpZGVOZXh0KHNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgZW5hYmxlZCxcbiAgICBwYXJhbXMsXG4gICAgYW5pbWF0aW5nXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm4gc3dpcGVyO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICBsZXQgcGVyR3JvdXAgPSBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMSAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXBBdXRvKSB7XG4gICAgcGVyR3JvdXAgPSBNYXRoLm1heChzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoJ2N1cnJlbnQnLCB0cnVlKSwgMSk7XG4gIH1cbiAgY29uc3QgaW5jcmVtZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCA/IDEgOiBwZXJHcm91cDtcbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKGFuaW1hdGluZyAmJiAhaXNWaXJ0dWFsICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLmxvb3BGaXgoe1xuICAgICAgZGlyZWN0aW9uOiAnbmV4dCdcbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIud3JhcHBlckVsLmNsaWVudExlZnQ7XG4gICAgaWYgKHN3aXBlci5hY3RpdmVJbmRleCA9PT0gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxICYmIHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBpbmNyZW1lbnQsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIGlmIChwYXJhbXMucmV3aW5kICYmIHN3aXBlci5pc0VuZCkge1xuICAgIHJldHVybiBzd2lwZXIuc2xpZGVUbygwLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gIH1cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCArIGluY3JlbWVudCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlUHJldihzcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgaW50ZXJuYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBzbmFwR3JpZCxcbiAgICBzbGlkZXNHcmlkLFxuICAgIHJ0bFRyYW5zbGF0ZSxcbiAgICBlbmFibGVkLFxuICAgIGFuaW1hdGluZ1xuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuIHN3aXBlcjtcbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzcGVlZCA9IHN3aXBlci5wYXJhbXMuc3BlZWQ7XG4gIH1cbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKGFuaW1hdGluZyAmJiAhaXNWaXJ0dWFsICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLmxvb3BGaXgoe1xuICAgICAgZGlyZWN0aW9uOiAncHJldidcbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIud3JhcHBlckVsLmNsaWVudExlZnQ7XG4gIH1cbiAgY29uc3QgdHJhbnNsYXRlID0gcnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICBmdW5jdGlvbiBub3JtYWxpemUodmFsKSB7XG4gICAgaWYgKHZhbCA8IDApIHJldHVybiAtTWF0aC5mbG9vcihNYXRoLmFicyh2YWwpKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwpO1xuICB9XG4gIGNvbnN0IG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSBub3JtYWxpemUodHJhbnNsYXRlKTtcbiAgY29uc3Qgbm9ybWFsaXplZFNuYXBHcmlkID0gc25hcEdyaWQubWFwKHZhbCA9PiBub3JtYWxpemUodmFsKSk7XG4gIGNvbnN0IGlzRnJlZU1vZGUgPSBwYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQ7XG4gIGxldCBwcmV2U25hcCA9IHNuYXBHcmlkW25vcm1hbGl6ZWRTbmFwR3JpZC5pbmRleE9mKG5vcm1hbGl6ZWRUcmFuc2xhdGUpIC0gMV07XG4gIGlmICh0eXBlb2YgcHJldlNuYXAgPT09ICd1bmRlZmluZWQnICYmIChwYXJhbXMuY3NzTW9kZSB8fCBpc0ZyZWVNb2RlKSkge1xuICAgIGxldCBwcmV2U25hcEluZGV4O1xuICAgIHNuYXBHcmlkLmZvckVhY2goKHNuYXAsIHNuYXBJbmRleCkgPT4ge1xuICAgICAgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gc25hcCkge1xuICAgICAgICAvLyBwcmV2U25hcCA9IHNuYXA7XG4gICAgICAgIHByZXZTbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBwcmV2U25hcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcHJldlNuYXAgPSBpc0ZyZWVNb2RlID8gc25hcEdyaWRbcHJldlNuYXBJbmRleF0gOiBzbmFwR3JpZFtwcmV2U25hcEluZGV4ID4gMCA/IHByZXZTbmFwSW5kZXggLSAxIDogcHJldlNuYXBJbmRleF07XG4gICAgfVxuICB9XG4gIGxldCBwcmV2SW5kZXggPSAwO1xuICBpZiAodHlwZW9mIHByZXZTbmFwICE9PSAndW5kZWZpbmVkJykge1xuICAgIHByZXZJbmRleCA9IHNsaWRlc0dyaWQuaW5kZXhPZihwcmV2U25hcCk7XG4gICAgaWYgKHByZXZJbmRleCA8IDApIHByZXZJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCAtIDE7XG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAxICYmIHBhcmFtcy5zbGlkZXNQZXJHcm91cEF1dG8pIHtcbiAgICAgIHByZXZJbmRleCA9IHByZXZJbmRleCAtIHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygncHJldmlvdXMnLCB0cnVlKSArIDE7XG4gICAgICBwcmV2SW5kZXggPSBNYXRoLm1heChwcmV2SW5kZXgsIDApO1xuICAgIH1cbiAgfVxuICBpZiAocGFyYW1zLnJld2luZCAmJiBzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICBjb25zdCBsYXN0SW5kZXggPSBzd2lwZXIucGFyYW1zLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgJiYgc3dpcGVyLnZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIC0gMSA6IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlVG8obGFzdEluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gIH0gZWxzZSBpZiAocGFyYW1zLmxvb3AgJiYgc3dpcGVyLmFjdGl2ZUluZGV4ID09PSAwICYmIHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHByZXZJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhwcmV2SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn1cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZVJlc2V0KHNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZnVuY3Rpb24gc2xpZGVUb0Nsb3Nlc3Qoc3BlZWQsIHJ1bkNhbGxiYWNrcyA9IHRydWUsIGludGVybmFsLCB0aHJlc2hvbGQgPSAwLjUpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzcGVlZCA9IHN3aXBlci5wYXJhbXMuc3BlZWQ7XG4gIH1cbiAgbGV0IGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICBjb25zdCBza2lwID0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGluZGV4KTtcbiAgY29uc3Qgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKGluZGV4IC0gc2tpcCkgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgY29uc3QgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgaWYgKHRyYW5zbGF0ZSA+PSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XSkge1xuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZSBpcyBvbiBvciBhZnRlciB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBhZnRlciBpdC5cbiAgICBjb25zdCBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuICAgIGNvbnN0IG5leHRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCArIDFdO1xuICAgIGlmICh0cmFuc2xhdGUgLSBjdXJyZW50U25hcCA+IChuZXh0U25hcCAtIGN1cnJlbnRTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggKz0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIGJlZm9yZSB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBiZWZvcmUgaXQuXG4gICAgY29uc3QgcHJldlNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4IC0gMV07XG4gICAgY29uc3QgY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcbiAgICBpZiAodHJhbnNsYXRlIC0gcHJldlNuYXAgPD0gKGN1cnJlbnRTbmFwIC0gcHJldlNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICBpbmRleCAtPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfVxuICBpbmRleCA9IE1hdGgubWF4KGluZGV4LCAwKTtcbiAgaW5kZXggPSBNYXRoLm1pbihpbmRleCwgc3dpcGVyLnNsaWRlc0dyaWQubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuXG5mdW5jdGlvbiBzbGlkZVRvQ2xpY2tlZFNsaWRlKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNsaWRlc0VsXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IHNsaWRlc1BlclZpZXcgPSBwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgbGV0IHNsaWRlVG9JbmRleCA9IHN3aXBlci5nZXRTbGlkZUluZGV4V2hlbkdyaWQoc3dpcGVyLmNsaWNrZWRJbmRleCk7XG4gIGxldCByZWFsSW5kZXg7XG4gIGNvbnN0IHNsaWRlU2VsZWN0b3IgPSBzd2lwZXIuaXNFbGVtZW50ID8gYHN3aXBlci1zbGlkZWAgOiBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9YDtcbiAgY29uc3QgaXNHcmlkID0gc3dpcGVyLmdyaWQgJiYgc3dpcGVyLnBhcmFtcy5ncmlkICYmIHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzID4gMTtcbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHJldHVybjtcbiAgICByZWFsSW5kZXggPSBwYXJzZUludChzd2lwZXIuY2xpY2tlZFNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvTG9vcChyZWFsSW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoc2xpZGVUb0luZGV4ID4gKGlzR3JpZCA/IChzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHNsaWRlc1BlclZpZXcpIC8gMiAtIChzd2lwZXIucGFyYW1zLmdyaWQucm93cyAtIDEpIDogc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzbGlkZXNQZXJWaWV3KSkge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgIHNsaWRlVG9JbmRleCA9IHN3aXBlci5nZXRTbGlkZUluZGV4KGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYCR7c2xpZGVTZWxlY3Rvcn1bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3JlYWxJbmRleH1cIl1gKVswXSk7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgfVxufVxuXG52YXIgc2xpZGUgPSB7XG4gIHNsaWRlVG8sXG4gIHNsaWRlVG9Mb29wLFxuICBzbGlkZU5leHQsXG4gIHNsaWRlUHJldixcbiAgc2xpZGVSZXNldCxcbiAgc2xpZGVUb0Nsb3Nlc3QsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGVcbn07XG5cbmZ1bmN0aW9uIGxvb3BDcmVhdGUoc2xpZGVSZWFsSW5kZXgsIGluaXRpYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBzbGlkZXNFbFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIXBhcmFtcy5sb29wIHx8IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSByZXR1cm47XG4gIGNvbnN0IGluaXRTbGlkZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVzID0gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKTtcbiAgICBzbGlkZXMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBjbGVhckJsYW5rU2xpZGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlcyA9IGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYC4ke3BhcmFtcy5zbGlkZUJsYW5rQ2xhc3N9YCk7XG4gICAgc2xpZGVzLmZvckVhY2goZWwgPT4ge1xuICAgICAgZWwucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgaWYgKHNsaWRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBncmlkRW5hYmxlZCA9IHN3aXBlci5ncmlkICYmIHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxO1xuICBpZiAocGFyYW1zLmxvb3BBZGRCbGFua1NsaWRlcyAmJiAocGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSB8fCBncmlkRW5hYmxlZCkpIHtcbiAgICBjbGVhckJsYW5rU2xpZGVzKCk7XG4gIH1cbiAgY29uc3Qgc2xpZGVzUGVyR3JvdXAgPSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgKiAoZ3JpZEVuYWJsZWQgPyBwYXJhbXMuZ3JpZC5yb3dzIDogMSk7XG4gIGNvbnN0IHNob3VsZEZpbGxHcm91cCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoICUgc2xpZGVzUGVyR3JvdXAgIT09IDA7XG4gIGNvbnN0IHNob3VsZEZpbGxHcmlkID0gZ3JpZEVuYWJsZWQgJiYgc3dpcGVyLnNsaWRlcy5sZW5ndGggJSBwYXJhbXMuZ3JpZC5yb3dzICE9PSAwO1xuICBjb25zdCBhZGRCbGFua1NsaWRlcyA9IGFtb3VudE9mU2xpZGVzID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudE9mU2xpZGVzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNsaWRlRWwgPSBzd2lwZXIuaXNFbGVtZW50ID8gY3JlYXRlRWxlbWVudCgnc3dpcGVyLXNsaWRlJywgW3BhcmFtcy5zbGlkZUJsYW5rQ2xhc3NdKSA6IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtwYXJhbXMuc2xpZGVDbGFzcywgcGFyYW1zLnNsaWRlQmxhbmtDbGFzc10pO1xuICAgICAgc3dpcGVyLnNsaWRlc0VsLmFwcGVuZChzbGlkZUVsKTtcbiAgICB9XG4gIH07XG4gIGlmIChzaG91bGRGaWxsR3JvdXApIHtcbiAgICBpZiAocGFyYW1zLmxvb3BBZGRCbGFua1NsaWRlcykge1xuICAgICAgY29uc3Qgc2xpZGVzVG9BZGQgPSBzbGlkZXNQZXJHcm91cCAtIHN3aXBlci5zbGlkZXMubGVuZ3RoICUgc2xpZGVzUGVyR3JvdXA7XG4gICAgICBhZGRCbGFua1NsaWRlcyhzbGlkZXNUb0FkZCk7XG4gICAgICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dXYXJuaW5nKCdTd2lwZXIgTG9vcCBXYXJuaW5nOiBUaGUgbnVtYmVyIG9mIHNsaWRlcyBpcyBub3QgZXZlbiB0byBzbGlkZXNQZXJHcm91cCwgbG9vcCBtb2RlIG1heSBub3QgZnVuY3Rpb24gcHJvcGVybHkuIFlvdSBuZWVkIHRvIGFkZCBtb3JlIHNsaWRlcyAob3IgbWFrZSBkdXBsaWNhdGVzLCBvciBlbXB0eSBzbGlkZXMpJyk7XG4gICAgfVxuICAgIGluaXRTbGlkZXMoKTtcbiAgfSBlbHNlIGlmIChzaG91bGRGaWxsR3JpZCkge1xuICAgIGlmIChwYXJhbXMubG9vcEFkZEJsYW5rU2xpZGVzKSB7XG4gICAgICBjb25zdCBzbGlkZXNUb0FkZCA9IHBhcmFtcy5ncmlkLnJvd3MgLSBzd2lwZXIuc2xpZGVzLmxlbmd0aCAlIHBhcmFtcy5ncmlkLnJvd3M7XG4gICAgICBhZGRCbGFua1NsaWRlcyhzbGlkZXNUb0FkZCk7XG4gICAgICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dXYXJuaW5nKCdTd2lwZXIgTG9vcCBXYXJuaW5nOiBUaGUgbnVtYmVyIG9mIHNsaWRlcyBpcyBub3QgZXZlbiB0byBncmlkLnJvd3MsIGxvb3AgbW9kZSBtYXkgbm90IGZ1bmN0aW9uIHByb3Blcmx5LiBZb3UgbmVlZCB0byBhZGQgbW9yZSBzbGlkZXMgKG9yIG1ha2UgZHVwbGljYXRlcywgb3IgZW1wdHkgc2xpZGVzKScpO1xuICAgIH1cbiAgICBpbml0U2xpZGVzKCk7XG4gIH0gZWxzZSB7XG4gICAgaW5pdFNsaWRlcygpO1xuICB9XG4gIGNvbnN0IGJvdGhEaXJlY3Rpb25zID0gcGFyYW1zLmNlbnRlcmVkU2xpZGVzIHx8ICEhcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSB8fCAhIXBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlcjtcbiAgc3dpcGVyLmxvb3BGaXgoe1xuICAgIHNsaWRlUmVhbEluZGV4LFxuICAgIGRpcmVjdGlvbjogYm90aERpcmVjdGlvbnMgPyB1bmRlZmluZWQgOiAnbmV4dCcsXG4gICAgaW5pdGlhbFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9vcEZpeCh7XG4gIHNsaWRlUmVhbEluZGV4LFxuICBzbGlkZVRvID0gdHJ1ZSxcbiAgZGlyZWN0aW9uLFxuICBzZXRUcmFuc2xhdGUsXG4gIGFjdGl2ZVNsaWRlSW5kZXgsXG4gIGluaXRpYWwsXG4gIGJ5Q29udHJvbGxlcixcbiAgYnlNb3VzZXdoZWVsXG59ID0ge30pIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgc3dpcGVyLmVtaXQoJ2JlZm9yZUxvb3BGaXgnKTtcbiAgY29uc3Qge1xuICAgIHNsaWRlcyxcbiAgICBhbGxvd1NsaWRlUHJldixcbiAgICBhbGxvd1NsaWRlTmV4dCxcbiAgICBzbGlkZXNFbCxcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qge1xuICAgIGNlbnRlcmVkU2xpZGVzLFxuICAgIHNsaWRlc09mZnNldEJlZm9yZSxcbiAgICBzbGlkZXNPZmZzZXRBZnRlcixcbiAgICBpbml0aWFsU2xpZGVcbiAgfSA9IHBhcmFtcztcbiAgY29uc3QgYm90aERpcmVjdGlvbnMgPSBjZW50ZXJlZFNsaWRlcyB8fCAhIXNsaWRlc09mZnNldEJlZm9yZSB8fCAhIXNsaWRlc09mZnNldEFmdGVyO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgIGlmIChzbGlkZVRvKSB7XG4gICAgICBpZiAoIWJvdGhEaXJlY3Rpb25zICYmIHN3aXBlci5zbmFwSW5kZXggPT09IDApIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChib3RoRGlyZWN0aW9ucyAmJiBzd2lwZXIuc25hcEluZGV4IDwgcGFyYW1zLnNsaWRlc1BlclZpZXcpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCArIHN3aXBlci5zbmFwSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnNuYXBJbmRleCA9PT0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnZpcnR1YWwuc2xpZGVzQmVmb3JlLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuICAgIHN3aXBlci5lbWl0KCdsb29wRml4Jyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBzbGlkZXNQZXJWaWV3ID0gcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gIGlmIChzbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCk7XG4gIH0gZWxzZSB7XG4gICAgc2xpZGVzUGVyVmlldyA9IE1hdGguY2VpbChwYXJzZUZsb2F0KHBhcmFtcy5zbGlkZXNQZXJWaWV3LCAxMCkpO1xuICAgIGlmIChib3RoRGlyZWN0aW9ucyAmJiBzbGlkZXNQZXJWaWV3ICUgMiA9PT0gMCkge1xuICAgICAgc2xpZGVzUGVyVmlldyA9IHNsaWRlc1BlclZpZXcgKyAxO1xuICAgIH1cbiAgfVxuICBjb25zdCBzbGlkZXNQZXJHcm91cCA9IHBhcmFtcy5zbGlkZXNQZXJHcm91cEF1dG8gPyBzbGlkZXNQZXJWaWV3IDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICBsZXQgbG9vcGVkU2xpZGVzID0gYm90aERpcmVjdGlvbnMgPyBNYXRoLm1heChzbGlkZXNQZXJHcm91cCwgTWF0aC5jZWlsKHNsaWRlc1BlclZpZXcgLyAyKSkgOiBzbGlkZXNQZXJHcm91cDtcbiAgaWYgKGxvb3BlZFNsaWRlcyAlIHNsaWRlc1Blckdyb3VwICE9PSAwKSB7XG4gICAgbG9vcGVkU2xpZGVzICs9IHNsaWRlc1Blckdyb3VwIC0gbG9vcGVkU2xpZGVzICUgc2xpZGVzUGVyR3JvdXA7XG4gIH1cbiAgbG9vcGVkU2xpZGVzICs9IHBhcmFtcy5sb29wQWRkaXRpb25hbFNsaWRlcztcbiAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IGxvb3BlZFNsaWRlcztcbiAgY29uc3QgZ3JpZEVuYWJsZWQgPSBzd2lwZXIuZ3JpZCAmJiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMTtcbiAgaWYgKHNsaWRlcy5sZW5ndGggPCBzbGlkZXNQZXJWaWV3ICsgbG9vcGVkU2xpZGVzIHx8IHN3aXBlci5wYXJhbXMuZWZmZWN0ID09PSAnY2FyZHMnICYmIHNsaWRlcy5sZW5ndGggPCBzbGlkZXNQZXJWaWV3ICsgbG9vcGVkU2xpZGVzICogMikge1xuICAgIHNob3dXYXJuaW5nKCdTd2lwZXIgTG9vcCBXYXJuaW5nOiBUaGUgbnVtYmVyIG9mIHNsaWRlcyBpcyBub3QgZW5vdWdoIGZvciBsb29wIG1vZGUsIGl0IHdpbGwgYmUgZGlzYWJsZWQgb3Igbm90IGZ1bmN0aW9uIHByb3Blcmx5LiBZb3UgbmVlZCB0byBhZGQgbW9yZSBzbGlkZXMgKG9yIG1ha2UgZHVwbGljYXRlcykgb3IgbG93ZXIgdGhlIHZhbHVlcyBvZiBzbGlkZXNQZXJWaWV3IGFuZCBzbGlkZXNQZXJHcm91cCBwYXJhbWV0ZXJzJyk7XG4gIH0gZWxzZSBpZiAoZ3JpZEVuYWJsZWQgJiYgcGFyYW1zLmdyaWQuZmlsbCA9PT0gJ3JvdycpIHtcbiAgICBzaG93V2FybmluZygnU3dpcGVyIExvb3AgV2FybmluZzogTG9vcCBtb2RlIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggZ3JpZC5maWxsID0gYHJvd2AnKTtcbiAgfVxuICBjb25zdCBwcmVwZW5kU2xpZGVzSW5kZXhlcyA9IFtdO1xuICBjb25zdCBhcHBlbmRTbGlkZXNJbmRleGVzID0gW107XG4gIGNvbnN0IGNvbHMgPSBncmlkRW5hYmxlZCA/IE1hdGguY2VpbChzbGlkZXMubGVuZ3RoIC8gcGFyYW1zLmdyaWQucm93cykgOiBzbGlkZXMubGVuZ3RoO1xuICBjb25zdCBpc0luaXRpYWxPdmVyZmxvdyA9IGluaXRpYWwgJiYgY29scyAtIGluaXRpYWxTbGlkZSA8IHNsaWRlc1BlclZpZXcgJiYgIWJvdGhEaXJlY3Rpb25zO1xuICBsZXQgYWN0aXZlSW5kZXggPSBpc0luaXRpYWxPdmVyZmxvdyA/IGluaXRpYWxTbGlkZSA6IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgaWYgKHR5cGVvZiBhY3RpdmVTbGlkZUluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgIGFjdGl2ZVNsaWRlSW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleChzbGlkZXMuZmluZChlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpKSk7XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlSW5kZXggPSBhY3RpdmVTbGlkZUluZGV4O1xuICB9XG4gIGNvbnN0IGlzTmV4dCA9IGRpcmVjdGlvbiA9PT0gJ25leHQnIHx8ICFkaXJlY3Rpb247XG4gIGNvbnN0IGlzUHJldiA9IGRpcmVjdGlvbiA9PT0gJ3ByZXYnIHx8ICFkaXJlY3Rpb247XG4gIGxldCBzbGlkZXNQcmVwZW5kZWQgPSAwO1xuICBsZXQgc2xpZGVzQXBwZW5kZWQgPSAwO1xuICBjb25zdCBhY3RpdmVDb2xJbmRleCA9IGdyaWRFbmFibGVkID8gc2xpZGVzW2FjdGl2ZVNsaWRlSW5kZXhdLmNvbHVtbiA6IGFjdGl2ZVNsaWRlSW5kZXg7XG4gIGNvbnN0IGFjdGl2ZUNvbEluZGV4V2l0aFNoaWZ0ID0gYWN0aXZlQ29sSW5kZXggKyAoYm90aERpcmVjdGlvbnMgJiYgdHlwZW9mIHNldFRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyAtc2xpZGVzUGVyVmlldyAvIDIgKyAwLjUgOiAwKTtcbiAgLy8gcHJlcGVuZCBsYXN0IHNsaWRlcyBiZWZvcmUgc3RhcnRcbiAgaWYgKGFjdGl2ZUNvbEluZGV4V2l0aFNoaWZ0IDwgbG9vcGVkU2xpZGVzKSB7XG4gICAgc2xpZGVzUHJlcGVuZGVkID0gTWF0aC5tYXgobG9vcGVkU2xpZGVzIC0gYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQsIHNsaWRlc1Blckdyb3VwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BlZFNsaWRlcyAtIGFjdGl2ZUNvbEluZGV4V2l0aFNoaWZ0OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaSAtIE1hdGguZmxvb3IoaSAvIGNvbHMpICogY29scztcbiAgICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgICBjb25zdCBjb2xJbmRleFRvUHJlcGVuZCA9IGNvbHMgLSBpbmRleCAtIDE7XG4gICAgICAgIGZvciAobGV0IGkgPSBzbGlkZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICBpZiAoc2xpZGVzW2ldLmNvbHVtbiA9PT0gY29sSW5kZXhUb1ByZXBlbmQpIHByZXBlbmRTbGlkZXNJbmRleGVzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2xpZGVzLmZvckVhY2goKHNsaWRlLCBzbGlkZUluZGV4KSA9PiB7XG4gICAgICAgIC8vICAgaWYgKHNsaWRlLmNvbHVtbiA9PT0gY29sSW5kZXhUb1ByZXBlbmQpIHByZXBlbmRTbGlkZXNJbmRleGVzLnB1c2goc2xpZGVJbmRleCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJlcGVuZFNsaWRlc0luZGV4ZXMucHVzaChjb2xzIC0gaW5kZXggLSAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQgKyBzbGlkZXNQZXJWaWV3ID4gY29scyAtIGxvb3BlZFNsaWRlcykge1xuICAgIHNsaWRlc0FwcGVuZGVkID0gTWF0aC5tYXgoYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQgLSAoY29scyAtIGxvb3BlZFNsaWRlcyAqIDIpLCBzbGlkZXNQZXJHcm91cCk7XG4gICAgaWYgKGlzSW5pdGlhbE92ZXJmbG93KSB7XG4gICAgICBzbGlkZXNBcHBlbmRlZCA9IE1hdGgubWF4KHNsaWRlc0FwcGVuZGVkLCBzbGlkZXNQZXJWaWV3IC0gY29scyArIGluaXRpYWxTbGlkZSArIDEpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0FwcGVuZGVkOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaSAtIE1hdGguZmxvb3IoaSAvIGNvbHMpICogY29scztcbiAgICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIHNsaWRlSW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoc2xpZGUuY29sdW1uID09PSBpbmRleCkgYXBwZW5kU2xpZGVzSW5kZXhlcy5wdXNoKHNsaWRlSW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwcGVuZFNsaWRlc0luZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fID0gdHJ1ZTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXyA9IGZhbHNlO1xuICB9KTtcbiAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ID09PSAnY2FyZHMnICYmIHNsaWRlcy5sZW5ndGggPCBzbGlkZXNQZXJWaWV3ICsgbG9vcGVkU2xpZGVzICogMikge1xuICAgIGlmIChhcHBlbmRTbGlkZXNJbmRleGVzLmluY2x1ZGVzKGFjdGl2ZVNsaWRlSW5kZXgpKSB7XG4gICAgICBhcHBlbmRTbGlkZXNJbmRleGVzLnNwbGljZShhcHBlbmRTbGlkZXNJbmRleGVzLmluZGV4T2YoYWN0aXZlU2xpZGVJbmRleCksIDEpO1xuICAgIH1cbiAgICBpZiAocHJlcGVuZFNsaWRlc0luZGV4ZXMuaW5jbHVkZXMoYWN0aXZlU2xpZGVJbmRleCkpIHtcbiAgICAgIHByZXBlbmRTbGlkZXNJbmRleGVzLnNwbGljZShwcmVwZW5kU2xpZGVzSW5kZXhlcy5pbmRleE9mKGFjdGl2ZVNsaWRlSW5kZXgpLCAxKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzUHJldikge1xuICAgIHByZXBlbmRTbGlkZXNJbmRleGVzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgc2xpZGVzW2luZGV4XS5zd2lwZXJMb29wTW92ZURPTSA9IHRydWU7XG4gICAgICBzbGlkZXNFbC5wcmVwZW5kKHNsaWRlc1tpbmRleF0pO1xuICAgICAgc2xpZGVzW2luZGV4XS5zd2lwZXJMb29wTW92ZURPTSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG4gIGlmIChpc05leHQpIHtcbiAgICBhcHBlbmRTbGlkZXNJbmRleGVzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgc2xpZGVzW2luZGV4XS5zd2lwZXJMb29wTW92ZURPTSA9IHRydWU7XG4gICAgICBzbGlkZXNFbC5hcHBlbmQoc2xpZGVzW2luZGV4XSk7XG4gICAgICBzbGlkZXNbaW5kZXhdLnN3aXBlckxvb3BNb3ZlRE9NID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgc3dpcGVyLnJlY2FsY1NsaWRlcygpO1xuICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgfSBlbHNlIGlmIChncmlkRW5hYmxlZCAmJiAocHJlcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoID4gMCAmJiBpc1ByZXYgfHwgYXBwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGggPiAwICYmIGlzTmV4dCkpIHtcbiAgICBzd2lwZXIuc2xpZGVzLmZvckVhY2goKHNsaWRlLCBzbGlkZUluZGV4KSA9PiB7XG4gICAgICBzd2lwZXIuZ3JpZC51cGRhdGVTbGlkZShzbGlkZUluZGV4LCBzbGlkZSwgc3dpcGVyLnNsaWRlcyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB9XG4gIGlmIChzbGlkZVRvKSB7XG4gICAgaWYgKHByZXBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aCA+IDAgJiYgaXNQcmV2KSB7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlUmVhbEluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2xpZGVUcmFuc2xhdGUgPSBzd2lwZXIuc2xpZGVzR3JpZFthY3RpdmVJbmRleF07XG4gICAgICAgIGNvbnN0IG5ld1NsaWRlVHJhbnNsYXRlID0gc3dpcGVyLnNsaWRlc0dyaWRbYWN0aXZlSW5kZXggKyBzbGlkZXNQcmVwZW5kZWRdO1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3U2xpZGVUcmFuc2xhdGUgLSBjdXJyZW50U2xpZGVUcmFuc2xhdGU7XG4gICAgICAgIGlmIChieU1vdXNld2hlZWwpIHtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHN3aXBlci50cmFuc2xhdGUgLSBkaWZmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhhY3RpdmVJbmRleCArIE1hdGguY2VpbChzbGlkZXNQcmVwZW5kZWQpLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKHNldFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5zdGFydFRyYW5zbGF0ZSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGEuc3RhcnRUcmFuc2xhdGUgLSBkaWZmO1xuICAgICAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5jdXJyZW50VHJhbnNsYXRlIC0gZGlmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzZXRUcmFuc2xhdGUpIHtcbiAgICAgICAgICBjb25zdCBzaGlmdCA9IGdyaWRFbmFibGVkID8gcHJlcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoIC8gcGFyYW1zLmdyaWQucm93cyA6IHByZXBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aDtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBzaGlmdCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0RhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFwcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoID4gMCAmJiBpc05leHQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVSZWFsSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZVRyYW5zbGF0ZSA9IHN3aXBlci5zbGlkZXNHcmlkW2FjdGl2ZUluZGV4XTtcbiAgICAgICAgY29uc3QgbmV3U2xpZGVUcmFuc2xhdGUgPSBzd2lwZXIuc2xpZGVzR3JpZFthY3RpdmVJbmRleCAtIHNsaWRlc0FwcGVuZGVkXTtcbiAgICAgICAgY29uc3QgZGlmZiA9IG5ld1NsaWRlVHJhbnNsYXRlIC0gY3VycmVudFNsaWRlVHJhbnNsYXRlO1xuICAgICAgICBpZiAoYnlNb3VzZXdoZWVsKSB7XG4gICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShzd2lwZXIudHJhbnNsYXRlIC0gZGlmZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oYWN0aXZlSW5kZXggLSBzbGlkZXNBcHBlbmRlZCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgIGlmIChzZXRUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0RhdGEuc3RhcnRUcmFuc2xhdGUgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhLnN0YXJ0VHJhbnNsYXRlIC0gZGlmZjtcbiAgICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0RhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGEuY3VycmVudFRyYW5zbGF0ZSAtIGRpZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzaGlmdCA9IGdyaWRFbmFibGVkID8gYXBwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGggLyBwYXJhbXMuZ3JpZC5yb3dzIDogYXBwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGg7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCAtIHNoaWZ0LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcbiAgaWYgKHN3aXBlci5jb250cm9sbGVyICYmIHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wgJiYgIWJ5Q29udHJvbGxlcikge1xuICAgIGNvbnN0IGxvb3BQYXJhbXMgPSB7XG4gICAgICBzbGlkZVJlYWxJbmRleCxcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIHNldFRyYW5zbGF0ZSxcbiAgICAgIGFjdGl2ZVNsaWRlSW5kZXgsXG4gICAgICBieUNvbnRyb2xsZXI6IHRydWVcbiAgICB9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpKSB7XG4gICAgICBzd2lwZXIuY29udHJvbGxlci5jb250cm9sLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGlmICghYy5kZXN0cm95ZWQgJiYgYy5wYXJhbXMubG9vcCkgYy5sb29wRml4KHtcbiAgICAgICAgICAuLi5sb29wUGFyYW1zLFxuICAgICAgICAgIHNsaWRlVG86IGMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID8gc2xpZGVUbyA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChzd2lwZXIuY29udHJvbGxlci5jb250cm9sIGluc3RhbmNlb2Ygc3dpcGVyLmNvbnN0cnVjdG9yICYmIHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wubG9vcEZpeCh7XG4gICAgICAgIC4uLmxvb3BQYXJhbXMsXG4gICAgICAgIHNsaWRlVG86IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID8gc2xpZGVUbyA6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ2xvb3BGaXgnKTtcbn1cblxuZnVuY3Rpb24gbG9vcERlc3Ryb3koKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgc2xpZGVzRWxcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFwYXJhbXMubG9vcCB8fCAhc2xpZGVzRWwgfHwgc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHJldHVybjtcbiAgc3dpcGVyLnJlY2FsY1NsaWRlcygpO1xuICBjb25zdCBuZXdTbGlkZXNPcmRlciA9IFtdO1xuICBzd2lwZXIuc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0eXBlb2Ygc2xpZGVFbC5zd2lwZXJTbGlkZUluZGV4ID09PSAndW5kZWZpbmVkJyA/IHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICogMSA6IHNsaWRlRWwuc3dpcGVyU2xpZGVJbmRleDtcbiAgICBuZXdTbGlkZXNPcmRlcltpbmRleF0gPSBzbGlkZUVsO1xuICB9KTtcbiAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgIHNsaWRlRWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICB9KTtcbiAgbmV3U2xpZGVzT3JkZXIuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICBzbGlkZXNFbC5hcHBlbmQoc2xpZGVFbCk7XG4gIH0pO1xuICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gIHN3aXBlci5zbGlkZVRvKHN3aXBlci5yZWFsSW5kZXgsIDApO1xufVxuXG52YXIgbG9vcCA9IHtcbiAgbG9vcENyZWF0ZSxcbiAgbG9vcEZpeCxcbiAgbG9vcERlc3Ryb3lcbn07XG5cbmZ1bmN0aW9uIHNldEdyYWJDdXJzb3IobW92aW5nKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoIHx8IHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIGNvbnN0IGVsID0gc3dpcGVyLnBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ2NvbnRhaW5lcicgPyBzd2lwZXIuZWwgOiBzd2lwZXIud3JhcHBlckVsO1xuICBpZiAoc3dpcGVyLmlzRWxlbWVudCkge1xuICAgIHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fID0gdHJ1ZTtcbiAgfVxuICBlbC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICdncmFiYmluZycgOiAnZ3JhYic7XG4gIGlmIChzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zZXRHcmFiQ3Vyc29yKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICBzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXyA9IHRydWU7XG4gIH1cbiAgc3dpcGVyW3N3aXBlci5wYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICdjb250YWluZXInID8gJ2VsJyA6ICd3cmFwcGVyRWwnXS5zdHlsZS5jdXJzb3IgPSAnJztcbiAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc3dpcGVyLl9fcHJldmVudE9ic2VydmVyX18gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG52YXIgZ3JhYkN1cnNvciA9IHtcbiAgc2V0R3JhYkN1cnNvcixcbiAgdW5zZXRHcmFiQ3Vyc29yXG59O1xuXG4vLyBNb2RpZmllZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU0NTIwNTU0L2N1c3RvbS1lbGVtZW50LWdldHJvb3Rub2RlLWNsb3Nlc3QtZnVuY3Rpb24tY3Jvc3NpbmctbXVsdGlwbGUtcGFyZW50LXNoYWRvd2RcbmZ1bmN0aW9uIGNsb3Nlc3RFbGVtZW50KHNlbGVjdG9yLCBiYXNlID0gdGhpcykge1xuICBmdW5jdGlvbiBfX2Nsb3Nlc3RGcm9tKGVsKSB7XG4gICAgaWYgKCFlbCB8fCBlbCA9PT0gZ2V0RG9jdW1lbnQoKSB8fCBlbCA9PT0gZ2V0V2luZG93KCkpIHJldHVybiBudWxsO1xuICAgIGlmIChlbC5hc3NpZ25lZFNsb3QpIGVsID0gZWwuYXNzaWduZWRTbG90O1xuICAgIGNvbnN0IGZvdW5kID0gZWwuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgaWYgKCFmb3VuZCAmJiAhZWwuZ2V0Um9vdE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmQgfHwgX19jbG9zZXN0RnJvbShlbC5nZXRSb290Tm9kZSgpLmhvc3QpO1xuICB9XG4gIHJldHVybiBfX2Nsb3Nlc3RGcm9tKGJhc2UpO1xufVxuZnVuY3Rpb24gcHJldmVudEVkZ2VTd2lwZShzd2lwZXIsIGV2ZW50LCBzdGFydFgpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgZWRnZVN3aXBlRGV0ZWN0aW9uID0gcGFyYW1zLmVkZ2VTd2lwZURldGVjdGlvbjtcbiAgY29uc3QgZWRnZVN3aXBlVGhyZXNob2xkID0gcGFyYW1zLmVkZ2VTd2lwZVRocmVzaG9sZDtcbiAgaWYgKGVkZ2VTd2lwZURldGVjdGlvbiAmJiAoc3RhcnRYIDw9IGVkZ2VTd2lwZVRocmVzaG9sZCB8fCBzdGFydFggPj0gd2luZG93LmlubmVyV2lkdGggLSBlZGdlU3dpcGVUaHJlc2hvbGQpKSB7XG4gICAgaWYgKGVkZ2VTd2lwZURldGVjdGlvbiA9PT0gJ3ByZXZlbnQnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIG9uVG91Y2hTdGFydChldmVudCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGxldCBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gIGNvbnN0IGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICBpZiAoZS50eXBlID09PSAncG9pbnRlcmRvd24nKSB7XG4gICAgaWYgKGRhdGEucG9pbnRlcklkICE9PSBudWxsICYmIGRhdGEucG9pbnRlcklkICE9PSBlLnBvaW50ZXJJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkYXRhLnBvaW50ZXJJZCA9IGUucG9pbnRlcklkO1xuICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICBkYXRhLnRvdWNoSWQgPSBlLnRhcmdldFRvdWNoZXNbMF0uaWRlbnRpZmllcjtcbiAgfVxuICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAvLyBkb24ndCBwcm9jZWVkIHRvdWNoIGV2ZW50XG4gICAgcHJldmVudEVkZ2VTd2lwZShzd2lwZXIsIGUsIGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgdG91Y2hlcyxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBpZiAoIXBhcmFtcy5zaW11bGF0ZVRvdWNoICYmIGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHJldHVybjtcbiAgaWYgKHN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLmNzc01vZGUgJiYgcGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcEZpeCgpO1xuICB9XG4gIGxldCB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuICBpZiAocGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnd3JhcHBlcicpIHtcbiAgICBpZiAoIWVsZW1lbnRJc0NoaWxkT2YodGFyZ2V0RWwsIHN3aXBlci53cmFwcGVyRWwpKSByZXR1cm47XG4gIH1cbiAgaWYgKCd3aGljaCcgaW4gZSAmJiBlLndoaWNoID09PSAzKSByZXR1cm47XG4gIGlmICgnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uID4gMCkgcmV0dXJuO1xuICBpZiAoZGF0YS5pc1RvdWNoZWQgJiYgZGF0YS5pc01vdmVkKSByZXR1cm47XG5cbiAgLy8gY2hhbmdlIHRhcmdldCBlbCBmb3Igc2hhZG93IHJvb3QgY29tcG9uZW50XG4gIGNvbnN0IHN3aXBpbmdDbGFzc0hhc1ZhbHVlID0gISFwYXJhbXMubm9Td2lwaW5nQ2xhc3MgJiYgcGFyYW1zLm5vU3dpcGluZ0NsYXNzICE9PSAnJztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IGV2ZW50UGF0aCA9IGUuY29tcG9zZWRQYXRoID8gZS5jb21wb3NlZFBhdGgoKSA6IGUucGF0aDtcbiAgaWYgKHN3aXBpbmdDbGFzc0hhc1ZhbHVlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgZXZlbnRQYXRoKSB7XG4gICAgdGFyZ2V0RWwgPSBldmVudFBhdGhbMF07XG4gIH1cbiAgY29uc3Qgbm9Td2lwaW5nU2VsZWN0b3IgPSBwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgPyBwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgOiBgLiR7cGFyYW1zLm5vU3dpcGluZ0NsYXNzfWA7XG4gIGNvbnN0IGlzVGFyZ2V0U2hhZG93ID0gISEoZS50YXJnZXQgJiYgZS50YXJnZXQuc2hhZG93Um9vdCk7XG5cbiAgLy8gdXNlIGNsb3Nlc3RFbGVtZW50IGZvciBzaGFkb3cgcm9vdCBlbGVtZW50IHRvIGdldCB0aGUgYWN0dWFsIGNsb3Nlc3QgZm9yIG5lc3RlZCBzaGFkb3cgcm9vdCBlbGVtZW50XG4gIGlmIChwYXJhbXMubm9Td2lwaW5nICYmIChpc1RhcmdldFNoYWRvdyA/IGNsb3Nlc3RFbGVtZW50KG5vU3dpcGluZ1NlbGVjdG9yLCB0YXJnZXRFbCkgOiB0YXJnZXRFbC5jbG9zZXN0KG5vU3dpcGluZ1NlbGVjdG9yKSkpIHtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXJhbXMuc3dpcGVIYW5kbGVyKSB7XG4gICAgaWYgKCF0YXJnZXRFbC5jbG9zZXN0KHBhcmFtcy5zd2lwZUhhbmRsZXIpKSByZXR1cm47XG4gIH1cbiAgdG91Y2hlcy5jdXJyZW50WCA9IGUucGFnZVg7XG4gIHRvdWNoZXMuY3VycmVudFkgPSBlLnBhZ2VZO1xuICBjb25zdCBzdGFydFggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICBjb25zdCBzdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZO1xuXG4gIC8vIERvIE5PVCBzdGFydCBpZiBpT1MgZWRnZSBzd2lwZSBpcyBkZXRlY3RlZC4gT3RoZXJ3aXNlIGlPUyBhcHAgY2Fubm90IHN3aXBlLXRvLWdvLWJhY2sgYW55bW9yZVxuXG4gIGlmICghcHJldmVudEVkZ2VTd2lwZShzd2lwZXIsIGUsIHN0YXJ0WCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgaXNUb3VjaGVkOiB0cnVlLFxuICAgIGlzTW92ZWQ6IGZhbHNlLFxuICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHRydWUsXG4gICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkXG4gIH0pO1xuICB0b3VjaGVzLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgdG91Y2hlcy5zdGFydFkgPSBzdGFydFk7XG4gIGRhdGEudG91Y2hTdGFydFRpbWUgPSBub3coKTtcbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSBmYWxzZTtcbiAgbGV0IHByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgaWYgKHRhcmdldEVsLm1hdGNoZXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpIHtcbiAgICBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlO1xuICAgIGlmICh0YXJnZXRFbC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubWF0Y2hlcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSB0YXJnZXRFbCAmJiAoZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJyB8fCBlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnICYmICF0YXJnZXRFbC5tYXRjaGVzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpKSkge1xuICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG4gIGNvbnN0IHNob3VsZFByZXZlbnREZWZhdWx0ID0gcHJldmVudERlZmF1bHQgJiYgc3dpcGVyLmFsbG93VG91Y2hNb3ZlICYmIHBhcmFtcy50b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ7XG4gIGlmICgocGFyYW1zLnRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0IHx8IHNob3VsZFByZXZlbnREZWZhdWx0KSAmJiAhdGFyZ2V0RWwuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiBzd2lwZXIuZnJlZU1vZGUgJiYgc3dpcGVyLmFuaW1hdGluZyAmJiAhcGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIuZnJlZU1vZGUub25Ub3VjaFN0YXJ0KCk7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3RvdWNoU3RhcnQnLCBlKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB0b3VjaGVzLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIGlmICghcGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgZXZlbnQucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHJldHVybjtcbiAgbGV0IGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgaWYgKGUudHlwZSA9PT0gJ3BvaW50ZXJtb3ZlJykge1xuICAgIGlmIChkYXRhLnRvdWNoSWQgIT09IG51bGwpIHJldHVybjsgLy8gcmV0dXJuIGZyb20gcG9pbnRlciBpZiB3ZSB1c2UgdG91Y2hcbiAgICBjb25zdCBpZCA9IGUucG9pbnRlcklkO1xuICAgIGlmIChpZCAhPT0gZGF0YS5wb2ludGVySWQpIHJldHVybjtcbiAgfVxuICBsZXQgdGFyZ2V0VG91Y2g7XG4gIGlmIChlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XG4gICAgdGFyZ2V0VG91Y2ggPSBbLi4uZS5jaGFuZ2VkVG91Y2hlc10uZmluZCh0ID0+IHQuaWRlbnRpZmllciA9PT0gZGF0YS50b3VjaElkKTtcbiAgICBpZiAoIXRhcmdldFRvdWNoIHx8IHRhcmdldFRvdWNoLmlkZW50aWZpZXIgIT09IGRhdGEudG91Y2hJZCkgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldFRvdWNoID0gZTtcbiAgfVxuICBpZiAoIWRhdGEuaXNUb3VjaGVkKSB7XG4gICAgaWYgKGRhdGEuc3RhcnRNb3ZpbmcgJiYgZGF0YS5pc1Njcm9sbGluZykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYWdlWCA9IHRhcmdldFRvdWNoLnBhZ2VYO1xuICBjb25zdCBwYWdlWSA9IHRhcmdldFRvdWNoLnBhZ2VZO1xuICBpZiAoZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlcikge1xuICAgIHRvdWNoZXMuc3RhcnRYID0gcGFnZVg7XG4gICAgdG91Y2hlcy5zdGFydFkgPSBwYWdlWTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFzd2lwZXIuYWxsb3dUb3VjaE1vdmUpIHtcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpIHtcbiAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkYXRhLmlzVG91Y2hlZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0b3VjaGVzLCB7XG4gICAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICAgIHN0YXJ0WTogcGFnZVksXG4gICAgICAgIGN1cnJlbnRYOiBwYWdlWCxcbiAgICAgICAgY3VycmVudFk6IHBhZ2VZXG4gICAgICB9KTtcbiAgICAgIGRhdGEudG91Y2hTdGFydFRpbWUgPSBub3coKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcyAmJiAhcGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgICAgLy8gVmVydGljYWxcbiAgICAgIGlmIChwYWdlWSA8IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIHx8IHBhZ2VZID4gdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJ0bCAmJiAocGFnZVggPiB0b3VjaGVzLnN0YXJ0WCAmJiAtc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVggPCB0b3VjaGVzLnN0YXJ0WCAmJiAtc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghcnRsICYmIChwYWdlWCA8IHRvdWNoZXMuc3RhcnRYICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIHx8IHBhZ2VYID4gdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubWF0Y2hlcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBlLnRhcmdldCAmJiBlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnKSB7XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZS50YXJnZXQubWF0Y2hlcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSkge1xuICAgICAgZGF0YS5pc01vdmVkID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlJywgZSk7XG4gIH1cbiAgdG91Y2hlcy5wcmV2aW91c1ggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICB0b3VjaGVzLnByZXZpb3VzWSA9IHRvdWNoZXMuY3VycmVudFk7XG4gIHRvdWNoZXMuY3VycmVudFggPSBwYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IHBhZ2VZO1xuICBjb25zdCBkaWZmWCA9IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WDtcbiAgY29uc3QgZGlmZlkgPSB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gIGlmIChzd2lwZXIucGFyYW1zLnRocmVzaG9sZCAmJiBNYXRoLnNxcnQoZGlmZlggKiogMiArIGRpZmZZICoqIDIpIDwgc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQpIHJldHVybjtcbiAgaWYgKHR5cGVvZiBkYXRhLmlzU2Nyb2xsaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCB0b3VjaEFuZ2xlO1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgdG91Y2hlcy5jdXJyZW50WSA9PT0gdG91Y2hlcy5zdGFydFkgfHwgc3dpcGVyLmlzVmVydGljYWwoKSAmJiB0b3VjaGVzLmN1cnJlbnRYID09PSB0b3VjaGVzLnN0YXJ0WCkge1xuICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmIChkaWZmWCAqIGRpZmZYICsgZGlmZlkgKiBkaWZmWSA+PSAyNSkge1xuICAgICAgICB0b3VjaEFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlIDogOTAgLSB0b3VjaEFuZ2xlID4gcGFyYW1zLnRvdWNoQW5nbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBkYXRhLnN0YXJ0TW92aW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0b3VjaGVzLmN1cnJlbnRYICE9PSB0b3VjaGVzLnN0YXJ0WCB8fCB0b3VjaGVzLmN1cnJlbnRZICE9PSB0b3VjaGVzLnN0YXJ0WSkge1xuICAgICAgZGF0YS5zdGFydE1vdmluZyA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZGF0YS5wcmV2ZW50VG91Y2hNb3ZlRnJvbVBvaW50ZXJNb3ZlKSB7XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFkYXRhLnN0YXJ0TW92aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gIGlmICghcGFyYW1zLmNzc01vZGUgJiYgZS5jYW5jZWxhYmxlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGlmIChwYXJhbXMudG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uICYmICFwYXJhbXMubmVzdGVkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBsZXQgZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGRpZmZYIDogZGlmZlk7XG4gIGxldCB0b3VjaGVzRGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnByZXZpb3VzWCA6IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnByZXZpb3VzWTtcbiAgaWYgKHBhcmFtcy5vbmVXYXlNb3ZlbWVudCkge1xuICAgIGRpZmYgPSBNYXRoLmFicyhkaWZmKSAqIChydGwgPyAxIDogLTEpO1xuICAgIHRvdWNoZXNEaWZmID0gTWF0aC5hYnModG91Y2hlc0RpZmYpICogKHJ0bCA/IDEgOiAtMSk7XG4gIH1cbiAgdG91Y2hlcy5kaWZmID0gZGlmZjtcbiAgZGlmZiAqPSBwYXJhbXMudG91Y2hSYXRpbztcbiAgaWYgKHJ0bCkge1xuICAgIGRpZmYgPSAtZGlmZjtcbiAgICB0b3VjaGVzRGlmZiA9IC10b3VjaGVzRGlmZjtcbiAgfVxuICBjb25zdCBwcmV2VG91Y2hlc0RpcmVjdGlvbiA9IHN3aXBlci50b3VjaGVzRGlyZWN0aW9uO1xuICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSBkaWZmID4gMCA/ICdwcmV2JyA6ICduZXh0JztcbiAgc3dpcGVyLnRvdWNoZXNEaXJlY3Rpb24gPSB0b3VjaGVzRGlmZiA+IDAgPyAncHJldicgOiAnbmV4dCc7XG4gIGNvbnN0IGlzTG9vcCA9IHN3aXBlci5wYXJhbXMubG9vcCAmJiAhcGFyYW1zLmNzc01vZGU7XG4gIGNvbnN0IGFsbG93TG9vcEZpeCA9IHN3aXBlci50b3VjaGVzRGlyZWN0aW9uID09PSAnbmV4dCcgJiYgc3dpcGVyLmFsbG93U2xpZGVOZXh0IHx8IHN3aXBlci50b3VjaGVzRGlyZWN0aW9uID09PSAncHJldicgJiYgc3dpcGVyLmFsbG93U2xpZGVQcmV2O1xuICBpZiAoIWRhdGEuaXNNb3ZlZCkge1xuICAgIGlmIChpc0xvb3AgJiYgYWxsb3dMb29wRml4KSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCh7XG4gICAgICAgIGRpcmVjdGlvbjogc3dpcGVyLnN3aXBlRGlyZWN0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGF0YS5zdGFydFRyYW5zbGF0ZSA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgY29uc3QgZXZ0ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudCgndHJhbnNpdGlvbmVuZCcsIHtcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgYnlTd2lwZXJUb3VjaE1vdmU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9XG4gICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gZmFsc2U7XG4gICAgLy8gR3JhYiBDdXJzb3JcbiAgICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcih0cnVlKTtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlckZpcnN0TW92ZScsIGUpO1xuICB9XG4gIGxldCBsb29wRml4ZWQ7XG4gIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBpZiAocGFyYW1zLl9sb29wU3dhcFJlc2V0ICE9PSBmYWxzZSAmJiBkYXRhLmlzTW92ZWQgJiYgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgJiYgcHJldlRvdWNoZXNEaXJlY3Rpb24gIT09IHN3aXBlci50b3VjaGVzRGlyZWN0aW9uICYmIGlzTG9vcCAmJiBhbGxvd0xvb3BGaXggJiYgTWF0aC5hYnMoZGlmZikgPj0gMSkge1xuICAgIE9iamVjdC5hc3NpZ24odG91Y2hlcywge1xuICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgIHN0YXJ0WTogcGFnZVksXG4gICAgICBjdXJyZW50WDogcGFnZVgsXG4gICAgICBjdXJyZW50WTogcGFnZVksXG4gICAgICBzdGFydFRyYW5zbGF0ZTogZGF0YS5jdXJyZW50VHJhbnNsYXRlXG4gICAgfSk7XG4gICAgZGF0YS5sb29wU3dhcFJlc2V0ID0gdHJ1ZTtcbiAgICBkYXRhLnN0YXJ0VHJhbnNsYXRlID0gZGF0YS5jdXJyZW50VHJhbnNsYXRlO1xuICAgIHJldHVybjtcbiAgfVxuICBzd2lwZXIuZW1pdCgnc2xpZGVyTW92ZScsIGUpO1xuICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkaWZmICsgZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgbGV0IGRpc2FibGVQYXJlbnRTd2lwZXIgPSB0cnVlO1xuICBsZXQgcmVzaXN0YW5jZVJhdGlvID0gcGFyYW1zLnJlc2lzdGFuY2VSYXRpbztcbiAgaWYgKHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzKSB7XG4gICAgcmVzaXN0YW5jZVJhdGlvID0gMDtcbiAgfVxuICBpZiAoZGlmZiA+IDApIHtcbiAgICBpZiAoaXNMb29wICYmIGFsbG93TG9vcEZpeCAmJiAhbG9vcEZpeGVkICYmIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IChwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzd2lwZXIubWluVHJhbnNsYXRlKCkgLSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW3N3aXBlci5hY3RpdmVJbmRleCArIDFdIC0gKHBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBwYXJhbXMuc2xpZGVzUGVyVmlldyA+PSAyID8gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuYWN0aXZlSW5kZXggKyAxXSArIHN3aXBlci5wYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCkgLSBzd2lwZXIucGFyYW1zLnNwYWNlQmV0d2VlbiA6IHN3aXBlci5taW5UcmFuc2xhdGUoKSkpIHtcbiAgICAgIHN3aXBlci5sb29wRml4KHtcbiAgICAgICAgZGlyZWN0aW9uOiAncHJldicsXG4gICAgICAgIHNldFRyYW5zbGF0ZTogdHJ1ZSxcbiAgICAgICAgYWN0aXZlU2xpZGVJbmRleDogMFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkge1xuICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgLSAxICsgKC1zd2lwZXIubWluVHJhbnNsYXRlKCkgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlICsgZGlmZikgKiogcmVzaXN0YW5jZVJhdGlvO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChkaWZmIDwgMCkge1xuICAgIGlmIChpc0xvb3AgJiYgYWxsb3dMb29wRml4ICYmICFsb29wRml4ZWQgJiYgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5tYXhUcmFuc2xhdGUoKSArIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbc3dpcGVyLnNsaWRlc1NpemVzR3JpZC5sZW5ndGggLSAxXSArIHN3aXBlci5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBwYXJhbXMuc2xpZGVzUGVyVmlldyA+PSAyID8gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkLmxlbmd0aCAtIDFdICsgc3dpcGVyLnBhcmFtcy5zcGFjZUJldHdlZW4gOiAwKSA6IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkpIHtcbiAgICAgIHN3aXBlci5sb29wRml4KHtcbiAgICAgICAgZGlyZWN0aW9uOiAnbmV4dCcsXG4gICAgICAgIHNldFRyYW5zbGF0ZTogdHJ1ZSxcbiAgICAgICAgYWN0aXZlU2xpZGVJbmRleDogc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpIDogTWF0aC5jZWlsKHBhcnNlRmxvYXQocGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSkpXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSB7XG4gICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSArIDEgLSAoc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gZGF0YS5zdGFydFRyYW5zbGF0ZSAtIGRpZmYpICoqIHJlc2lzdGFuY2VSYXRpbztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGRpc2FibGVQYXJlbnRTd2lwZXIpIHtcbiAgICBlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgIXN3aXBlci5hbGxvd1NsaWRlTmV4dCkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cblxuICAvLyBUaHJlc2hvbGRcbiAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSB7XG4gICAgaWYgKE1hdGguYWJzKGRpZmYpID4gcGFyYW1zLnRocmVzaG9sZCB8fCBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgaWYgKCFkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgICBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IHRydWU7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgICAgICAgdG91Y2hlcy5zdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZO1xuICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICB0b3VjaGVzLmRpZmYgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFggOiB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKCFwYXJhbXMuZm9sbG93RmluZ2VyIHx8IHBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG5cbiAgLy8gVXBkYXRlIGFjdGl2ZSBpbmRleCBpbiBmcmVlIG1vZGVcbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiBzd2lwZXIuZnJlZU1vZGUgfHwgcGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICB9XG4gIGlmIChwYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQgJiYgc3dpcGVyLmZyZWVNb2RlKSB7XG4gICAgc3dpcGVyLmZyZWVNb2RlLm9uVG91Y2hNb3ZlKCk7XG4gIH1cbiAgLy8gVXBkYXRlIHByb2dyZXNzXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyhkYXRhLmN1cnJlbnRUcmFuc2xhdGUpO1xuICAvLyBVcGRhdGUgdHJhbnNsYXRlXG4gIHN3aXBlci5zZXRUcmFuc2xhdGUoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaEVuZChldmVudCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgbGV0IGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgbGV0IHRhcmdldFRvdWNoO1xuICBjb25zdCBpc1RvdWNoRXZlbnQgPSBlLnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZS50eXBlID09PSAndG91Y2hjYW5jZWwnO1xuICBpZiAoIWlzVG91Y2hFdmVudCkge1xuICAgIGlmIChkYXRhLnRvdWNoSWQgIT09IG51bGwpIHJldHVybjsgLy8gcmV0dXJuIGZyb20gcG9pbnRlciBpZiB3ZSB1c2UgdG91Y2hcbiAgICBpZiAoZS5wb2ludGVySWQgIT09IGRhdGEucG9pbnRlcklkKSByZXR1cm47XG4gICAgdGFyZ2V0VG91Y2ggPSBlO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldFRvdWNoID0gWy4uLmUuY2hhbmdlZFRvdWNoZXNdLmZpbmQodCA9PiB0LmlkZW50aWZpZXIgPT09IGRhdGEudG91Y2hJZCk7XG4gICAgaWYgKCF0YXJnZXRUb3VjaCB8fCB0YXJnZXRUb3VjaC5pZGVudGlmaWVyICE9PSBkYXRhLnRvdWNoSWQpIHJldHVybjtcbiAgfVxuICBpZiAoWydwb2ludGVyY2FuY2VsJywgJ3BvaW50ZXJvdXQnLCAncG9pbnRlcmxlYXZlJywgJ2NvbnRleHRtZW51J10uaW5jbHVkZXMoZS50eXBlKSkge1xuICAgIGNvbnN0IHByb2NlZWQgPSBbJ3BvaW50ZXJjYW5jZWwnLCAnY29udGV4dG1lbnUnXS5pbmNsdWRlcyhlLnR5cGUpICYmIChzd2lwZXIuYnJvd3Nlci5pc1NhZmFyaSB8fCBzd2lwZXIuYnJvd3Nlci5pc1dlYlZpZXcpO1xuICAgIGlmICghcHJvY2VlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBkYXRhLnBvaW50ZXJJZCA9IG51bGw7XG4gIGRhdGEudG91Y2hJZCA9IG51bGw7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgdG91Y2hlcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICBzbGlkZXNHcmlkLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIGlmICghcGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykgcmV0dXJuO1xuICBpZiAoZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoRW5kJywgZSk7XG4gIH1cbiAgZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzID0gZmFsc2U7XG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5pc01vdmVkICYmIHBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gICAgfVxuICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBSZXR1cm4gR3JhYiBDdXJzb3JcbiAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIGRhdGEuaXNNb3ZlZCAmJiBkYXRhLmlzVG91Y2hlZCAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gIH1cblxuICAvLyBUaW1lIGRpZmZcbiAgY29uc3QgdG91Y2hFbmRUaW1lID0gbm93KCk7XG4gIGNvbnN0IHRpbWVEaWZmID0gdG91Y2hFbmRUaW1lIC0gZGF0YS50b3VjaFN0YXJ0VGltZTtcblxuICAvLyBUYXAsIGRvdWJsZVRhcCwgQ2xpY2tcbiAgaWYgKHN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgY29uc3QgcGF0aFRyZWUgPSBlLnBhdGggfHwgZS5jb21wb3NlZFBhdGggJiYgZS5jb21wb3NlZFBhdGgoKTtcbiAgICBzd2lwZXIudXBkYXRlQ2xpY2tlZFNsaWRlKHBhdGhUcmVlICYmIHBhdGhUcmVlWzBdIHx8IGUudGFyZ2V0LCBwYXRoVHJlZSk7XG4gICAgc3dpcGVyLmVtaXQoJ3RhcCBjbGljaycsIGUpO1xuICAgIGlmICh0aW1lRGlmZiA8IDMwMCAmJiB0b3VjaEVuZFRpbWUgLSBkYXRhLmxhc3RDbGlja1RpbWUgPCAzMDApIHtcbiAgICAgIHN3aXBlci5lbWl0KCdkb3VibGVUYXAgZG91YmxlQ2xpY2snLCBlKTtcbiAgICB9XG4gIH1cbiAgZGF0YS5sYXN0Q2xpY2tUaW1lID0gbm93KCk7XG4gIG5leHRUaWNrKCgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5kZXN0cm95ZWQpIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgfSk7XG4gIGlmICghZGF0YS5pc1RvdWNoZWQgfHwgIWRhdGEuaXNNb3ZlZCB8fCAhc3dpcGVyLnN3aXBlRGlyZWN0aW9uIHx8IHRvdWNoZXMuZGlmZiA9PT0gMCAmJiAhZGF0YS5sb29wU3dhcFJlc2V0IHx8IGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9PT0gZGF0YS5zdGFydFRyYW5zbGF0ZSAmJiAhZGF0YS5sb29wU3dhcFJlc2V0KSB7XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gIGxldCBjdXJyZW50UG9zO1xuICBpZiAocGFyYW1zLmZvbGxvd0Zpbmdlcikge1xuICAgIGN1cnJlbnRQb3MgPSBydGwgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBvcyA9IC1kYXRhLmN1cnJlbnRUcmFuc2xhdGU7XG4gIH1cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQpIHtcbiAgICBzd2lwZXIuZnJlZU1vZGUub25Ub3VjaEVuZCh7XG4gICAgICBjdXJyZW50UG9zXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRmluZCBjdXJyZW50IHNsaWRlXG4gIGNvbnN0IHN3aXBlVG9MYXN0ID0gY3VycmVudFBvcyA+PSAtc3dpcGVyLm1heFRyYW5zbGF0ZSgpICYmICFzd2lwZXIucGFyYW1zLmxvb3A7XG4gIGxldCBzdG9wSW5kZXggPSAwO1xuICBsZXQgZ3JvdXBTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFswXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSBpIDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICBjb25zdCBpbmNyZW1lbnQgPSBpIDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgaW5jcmVtZW50XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChzd2lwZVRvTGFzdCB8fCBjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0gJiYgY3VycmVudFBvcyA8IHNsaWRlc0dyaWRbaSArIGluY3JlbWVudF0pIHtcbiAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtpICsgaW5jcmVtZW50XSAtIHNsaWRlc0dyaWRbaV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzd2lwZVRvTGFzdCB8fCBjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0pIHtcbiAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICBncm91cFNpemUgPSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMV0gLSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMl07XG4gICAgfVxuICB9XG4gIGxldCByZXdpbmRGaXJzdEluZGV4ID0gbnVsbDtcbiAgbGV0IHJld2luZExhc3RJbmRleCA9IG51bGw7XG4gIGlmIChwYXJhbXMucmV3aW5kKSB7XG4gICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgcmV3aW5kTGFzdEluZGV4ID0gcGFyYW1zLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZCAmJiBzd2lwZXIudmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggLSAxIDogc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLmlzRW5kKSB7XG4gICAgICByZXdpbmRGaXJzdEluZGV4ID0gMDtcbiAgICB9XG4gIH1cbiAgLy8gRmluZCBjdXJyZW50IHNsaWRlIHNpemVcbiAgY29uc3QgcmF0aW8gPSAoY3VycmVudFBvcyAtIHNsaWRlc0dyaWRbc3RvcEluZGV4XSkgLyBncm91cFNpemU7XG4gIGNvbnN0IGluY3JlbWVudCA9IHN0b3BJbmRleCA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgLSAxID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgaWYgKHRpbWVEaWZmID4gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgIC8vIExvbmcgdG91Y2hlc1xuICAgIGlmICghcGFyYW1zLmxvbmdTd2lwZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgaWYgKHJhdGlvID49IHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHBhcmFtcy5yZXdpbmQgJiYgc3dpcGVyLmlzRW5kID8gcmV3aW5kRmlyc3RJbmRleCA6IHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgIGlmIChyYXRpbyA+IDEgLSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKHJld2luZExhc3RJbmRleCAhPT0gbnVsbCAmJiByYXRpbyA8IDAgJiYgTWF0aC5hYnMocmF0aW8pID4gcGFyYW1zLmxvbmdTd2lwZXNSYXRpbykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhyZXdpbmRMYXN0SW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gU2hvcnQgc3dpcGVzXG4gICAgaWYgKCFwYXJhbXMuc2hvcnRTd2lwZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlzTmF2QnV0dG9uVGFyZ2V0ID0gc3dpcGVyLm5hdmlnYXRpb24gJiYgKGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwgfHwgZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCk7XG4gICAgaWYgKCFpc05hdkJ1dHRvblRhcmdldCkge1xuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHJld2luZEZpcnN0SW5kZXggIT09IG51bGwgPyByZXdpbmRGaXJzdEluZGV4IDogc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhyZXdpbmRMYXN0SW5kZXggIT09IG51bGwgPyByZXdpbmRMYXN0SW5kZXggOiBzdG9wSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgZWxcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKGVsICYmIGVsLm9mZnNldFdpZHRoID09PSAwKSByZXR1cm47XG5cbiAgLy8gQnJlYWtwb2ludHNcbiAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gIH1cblxuICAvLyBTYXZlIGxvY2tzXG4gIGNvbnN0IHtcbiAgICBhbGxvd1NsaWRlTmV4dCxcbiAgICBhbGxvd1NsaWRlUHJldixcbiAgICBzbmFwR3JpZFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcblxuICAvLyBEaXNhYmxlIGxvY2tzIG9uIHJlc2l6ZVxuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIGNvbnN0IGlzVmlydHVhbExvb3AgPSBpc1ZpcnR1YWwgJiYgcGFyYW1zLmxvb3A7XG4gIGlmICgocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBwYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmICFpc1ZpcnR1YWxMb29wKSB7XG4gICAgY29uc3Qgc2xpZGVzID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzIDogc3dpcGVyLnNsaWRlcztcbiAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3AgJiYgIWlzVmlydHVhbCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG9Mb29wKHN3aXBlci5yZWFsSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIGlmIChzd2lwZXIuYXV0b3BsYXkgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgIGNsZWFyVGltZW91dChzd2lwZXIuYXV0b3BsYXkucmVzaXplVGltZW91dCk7XG4gICAgc3dpcGVyLmF1dG9wbGF5LnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkucmVzdW1lKCk7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgfVxuICAvLyBSZXR1cm4gbG9ja3MgYWZ0ZXIgcmVzaXplXG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcbiAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKCFzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuICBpZiAoIXN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrcykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiAmJiBzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICB3cmFwcGVyRWwsXG4gICAgcnRsVHJhbnNsYXRlLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIHN3aXBlci5wcmV2aW91c1RyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxMZWZ0O1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci50cmFuc2xhdGUgPSAtd3JhcHBlckVsLnNjcm9sbFRvcDtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgaWYgKHN3aXBlci50cmFuc2xhdGUgPT09IDApIHN3aXBlci50cmFuc2xhdGUgPSAwO1xuICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgbGV0IG5ld1Byb2dyZXNzO1xuICBjb25zdCB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHN3aXBlci50cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cbiAgaWYgKG5ld1Byb2dyZXNzICE9PSBzd2lwZXIucHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MocnRsVHJhbnNsYXRlID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKTtcbiAgfVxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBvbkxvYWQoZSkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBwcm9jZXNzTGF6eVByZWxvYWRlcihzd2lwZXIsIGUudGFyZ2V0KTtcbiAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSB8fCBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiAhc3dpcGVyLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN3aXBlci51cGRhdGUoKTtcbn1cblxuZnVuY3Rpb24gb25Eb2N1bWVudFRvdWNoU3RhcnQoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIuZG9jdW1lbnRUb3VjaEhhbmRsZXJQcm9jZWVkZWQpIHJldHVybjtcbiAgc3dpcGVyLmRvY3VtZW50VG91Y2hIYW5kbGVyUHJvY2VlZGVkID0gdHJ1ZTtcbiAgaWYgKHN3aXBlci5wYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcykge1xuICAgIHN3aXBlci5lbC5zdHlsZS50b3VjaEFjdGlvbiA9ICdhdXRvJztcbiAgfVxufVxuXG5jb25zdCBldmVudHMgPSAoc3dpcGVyLCBtZXRob2QpID0+IHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIGVsLFxuICAgIHdyYXBwZXJFbCxcbiAgICBkZXZpY2VcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgY2FwdHVyZSA9ICEhcGFyYW1zLm5lc3RlZDtcbiAgY29uc3QgZG9tTWV0aG9kID0gbWV0aG9kID09PSAnb24nID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICBjb25zdCBzd2lwZXJNZXRob2QgPSBtZXRob2Q7XG4gIGlmICghZWwgfHwgdHlwZW9mIGVsID09PSAnc3RyaW5nJykgcmV0dXJuO1xuXG4gIC8vIFRvdWNoIEV2ZW50c1xuICBkb2N1bWVudFtkb21NZXRob2RdKCd0b3VjaHN0YXJ0Jywgc3dpcGVyLm9uRG9jdW1lbnRUb3VjaFN0YXJ0LCB7XG4gICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgY2FwdHVyZVxuICB9KTtcbiAgZWxbZG9tTWV0aG9kXSgndG91Y2hzdGFydCcsIHN3aXBlci5vblRvdWNoU3RhcnQsIHtcbiAgICBwYXNzaXZlOiBmYWxzZVxuICB9KTtcbiAgZWxbZG9tTWV0aG9kXSgncG9pbnRlcmRvd24nLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCB7XG4gICAgcGFzc2l2ZTogZmFsc2VcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3RvdWNobW92ZScsIHN3aXBlci5vblRvdWNoTW92ZSwge1xuICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgIGNhcHR1cmVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3BvaW50ZXJtb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCB7XG4gICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgY2FwdHVyZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgndG91Y2hlbmQnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3BvaW50ZXJ1cCcsIHN3aXBlci5vblRvdWNoRW5kLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgncG9pbnRlcmNhbmNlbCcsIHN3aXBlci5vblRvdWNoRW5kLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgndG91Y2hjYW5jZWwnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3BvaW50ZXJvdXQnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3BvaW50ZXJsZWF2ZScsIHN3aXBlci5vblRvdWNoRW5kLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgnY29udGV4dG1lbnUnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG5cbiAgLy8gUHJldmVudCBMaW5rcyBDbGlja3NcbiAgaWYgKHBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pIHtcbiAgICBlbFtkb21NZXRob2RdKCdjbGljaycsIHN3aXBlci5vbkNsaWNrLCB0cnVlKTtcbiAgfVxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB3cmFwcGVyRWxbZG9tTWV0aG9kXSgnc2Nyb2xsJywgc3dpcGVyLm9uU2Nyb2xsKTtcbiAgfVxuXG4gIC8vIFJlc2l6ZSBoYW5kbGVyXG4gIGlmIChwYXJhbXMudXBkYXRlT25XaW5kb3dSZXNpemUpIHtcbiAgICBzd2lwZXJbc3dpcGVyTWV0aG9kXShkZXZpY2UuaW9zIHx8IGRldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJywgb25SZXNpemUsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlcltzd2lwZXJNZXRob2RdKCdvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplLCB0cnVlKTtcbiAgfVxuXG4gIC8vIEltYWdlcyBsb2FkZXJcbiAgZWxbZG9tTWV0aG9kXSgnbG9hZCcsIHN3aXBlci5vbkxvYWQsIHtcbiAgICBjYXB0dXJlOiB0cnVlXG4gIH0pO1xufTtcbmZ1bmN0aW9uIGF0dGFjaEV2ZW50cygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBzd2lwZXIub25Ub3VjaFN0YXJ0ID0gb25Ub3VjaFN0YXJ0LmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hNb3ZlID0gb25Ub3VjaE1vdmUuYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Ub3VjaEVuZCA9IG9uVG91Y2hFbmQuYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Eb2N1bWVudFRvdWNoU3RhcnQgPSBvbkRvY3VtZW50VG91Y2hTdGFydC5iaW5kKHN3aXBlcik7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci5vblNjcm9sbCA9IG9uU2Nyb2xsLmJpbmQoc3dpcGVyKTtcbiAgfVxuICBzd2lwZXIub25DbGljayA9IG9uQ2xpY2suYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Mb2FkID0gb25Mb2FkLmJpbmQoc3dpcGVyKTtcbiAgZXZlbnRzKHN3aXBlciwgJ29uJyk7XG59XG5mdW5jdGlvbiBkZXRhY2hFdmVudHMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGV2ZW50cyhzd2lwZXIsICdvZmYnKTtcbn1cbnZhciBldmVudHMkMSA9IHtcbiAgYXR0YWNoRXZlbnRzLFxuICBkZXRhY2hFdmVudHNcbn07XG5cbmNvbnN0IGlzR3JpZEVuYWJsZWQgPSAoc3dpcGVyLCBwYXJhbXMpID0+IHtcbiAgcmV0dXJuIHN3aXBlci5ncmlkICYmIHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxO1xufTtcbmZ1bmN0aW9uIHNldEJyZWFrcG9pbnQoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICByZWFsSW5kZXgsXG4gICAgaW5pdGlhbGl6ZWQsXG4gICAgcGFyYW1zLFxuICAgIGVsXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gcGFyYW1zLmJyZWFrcG9pbnRzO1xuICBpZiAoIWJyZWFrcG9pbnRzIHx8IGJyZWFrcG9pbnRzICYmIE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuXG4gIC8vIEdldCBicmVha3BvaW50IGZvciB3aW5kb3cvY29udGFpbmVyIHdpZHRoIGFuZCB1cGRhdGUgcGFyYW1ldGVyc1xuICBjb25zdCBicmVha3BvaW50c0Jhc2UgPSBwYXJhbXMuYnJlYWtwb2ludHNCYXNlID09PSAnd2luZG93JyB8fCAhcGFyYW1zLmJyZWFrcG9pbnRzQmFzZSA/IHBhcmFtcy5icmVha3BvaW50c0Jhc2UgOiAnY29udGFpbmVyJztcbiAgY29uc3QgYnJlYWtwb2ludENvbnRhaW5lciA9IFsnd2luZG93JywgJ2NvbnRhaW5lciddLmluY2x1ZGVzKHBhcmFtcy5icmVha3BvaW50c0Jhc2UpIHx8ICFwYXJhbXMuYnJlYWtwb2ludHNCYXNlID8gc3dpcGVyLmVsIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMuYnJlYWtwb2ludHNCYXNlKTtcbiAgY29uc3QgYnJlYWtwb2ludCA9IHN3aXBlci5nZXRCcmVha3BvaW50KGJyZWFrcG9pbnRzLCBicmVha3BvaW50c0Jhc2UsIGJyZWFrcG9pbnRDb250YWluZXIpO1xuICBpZiAoIWJyZWFrcG9pbnQgfHwgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID09PSBicmVha3BvaW50KSByZXR1cm47XG4gIGNvbnN0IGJyZWFrcG9pbnRPbmx5UGFyYW1zID0gYnJlYWtwb2ludCBpbiBicmVha3BvaW50cyA/IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuICBjb25zdCBicmVha3BvaW50UGFyYW1zID0gYnJlYWtwb2ludE9ubHlQYXJhbXMgfHwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zO1xuICBjb25zdCB3YXNNdWx0aVJvdyA9IGlzR3JpZEVuYWJsZWQoc3dpcGVyLCBwYXJhbXMpO1xuICBjb25zdCBpc011bHRpUm93ID0gaXNHcmlkRW5hYmxlZChzd2lwZXIsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICBjb25zdCB3YXNHcmFiQ3Vyc29yID0gc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yO1xuICBjb25zdCBpc0dyYWJDdXJzb3IgPSBicmVha3BvaW50UGFyYW1zLmdyYWJDdXJzb3I7XG4gIGNvbnN0IHdhc0VuYWJsZWQgPSBwYXJhbXMuZW5hYmxlZDtcbiAgaWYgKHdhc011bHRpUm93ICYmICFpc011bHRpUm93KSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShgJHtwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ncmlkYCwgYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Z3JpZC1jb2x1bW5gKTtcbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgfSBlbHNlIGlmICghd2FzTXVsdGlSb3cgJiYgaXNNdWx0aVJvdykge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Z3JpZGApO1xuICAgIGlmIChicmVha3BvaW50UGFyYW1zLmdyaWQuZmlsbCAmJiBicmVha3BvaW50UGFyYW1zLmdyaWQuZmlsbCA9PT0gJ2NvbHVtbicgfHwgIWJyZWFrcG9pbnRQYXJhbXMuZ3JpZC5maWxsICYmIHBhcmFtcy5ncmlkLmZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWQtY29sdW1uYCk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICB9XG4gIGlmICh3YXNHcmFiQ3Vyc29yICYmICFpc0dyYWJDdXJzb3IpIHtcbiAgICBzd2lwZXIudW5zZXRHcmFiQ3Vyc29yKCk7XG4gIH0gZWxzZSBpZiAoIXdhc0dyYWJDdXJzb3IgJiYgaXNHcmFiQ3Vyc29yKSB7XG4gICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBuYXZpZ2F0aW9uLCBwYWdpbmF0aW9uLCBzY3JvbGxiYXJcbiAgWyduYXZpZ2F0aW9uJywgJ3BhZ2luYXRpb24nLCAnc2Nyb2xsYmFyJ10uZm9yRWFjaChwcm9wID0+IHtcbiAgICBpZiAodHlwZW9mIGJyZWFrcG9pbnRQYXJhbXNbcHJvcF0gPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgY29uc3Qgd2FzTW9kdWxlRW5hYmxlZCA9IHBhcmFtc1twcm9wXSAmJiBwYXJhbXNbcHJvcF0uZW5hYmxlZDtcbiAgICBjb25zdCBpc01vZHVsZUVuYWJsZWQgPSBicmVha3BvaW50UGFyYW1zW3Byb3BdICYmIGJyZWFrcG9pbnRQYXJhbXNbcHJvcF0uZW5hYmxlZDtcbiAgICBpZiAod2FzTW9kdWxlRW5hYmxlZCAmJiAhaXNNb2R1bGVFbmFibGVkKSB7XG4gICAgICBzd2lwZXJbcHJvcF0uZGlzYWJsZSgpO1xuICAgIH1cbiAgICBpZiAoIXdhc01vZHVsZUVuYWJsZWQgJiYgaXNNb2R1bGVFbmFibGVkKSB7XG4gICAgICBzd2lwZXJbcHJvcF0uZW5hYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgZGlyZWN0aW9uQ2hhbmdlZCA9IGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICYmIGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICE9PSBwYXJhbXMuZGlyZWN0aW9uO1xuICBjb25zdCBuZWVkc1JlTG9vcCA9IHBhcmFtcy5sb29wICYmIChicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlclZpZXcgIT09IHBhcmFtcy5zbGlkZXNQZXJWaWV3IHx8IGRpcmVjdGlvbkNoYW5nZWQpO1xuICBjb25zdCB3YXNMb29wID0gcGFyYW1zLmxvb3A7XG4gIGlmIChkaXJlY3Rpb25DaGFuZ2VkICYmIGluaXRpYWxpemVkKSB7XG4gICAgc3dpcGVyLmNoYW5nZURpcmVjdGlvbigpO1xuICB9XG4gIGV4dGVuZChzd2lwZXIucGFyYW1zLCBicmVha3BvaW50UGFyYW1zKTtcbiAgY29uc3QgaXNFbmFibGVkID0gc3dpcGVyLnBhcmFtcy5lbmFibGVkO1xuICBjb25zdCBoYXNMb29wID0gc3dpcGVyLnBhcmFtcy5sb29wO1xuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIGFsbG93VG91Y2hNb3ZlOiBzd2lwZXIucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgIGFsbG93U2xpZGVOZXh0OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVOZXh0LFxuICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2XG4gIH0pO1xuICBpZiAod2FzRW5hYmxlZCAmJiAhaXNFbmFibGVkKSB7XG4gICAgc3dpcGVyLmRpc2FibGUoKTtcbiAgfSBlbHNlIGlmICghd2FzRW5hYmxlZCAmJiBpc0VuYWJsZWQpIHtcbiAgICBzd2lwZXIuZW5hYmxlKCk7XG4gIH1cbiAgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcbiAgc3dpcGVyLmVtaXQoJ19iZWZvcmVCcmVha3BvaW50JywgYnJlYWtwb2ludFBhcmFtcyk7XG4gIGlmIChpbml0aWFsaXplZCkge1xuICAgIGlmIChuZWVkc1JlTG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZShyZWFsSW5kZXgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIH0gZWxzZSBpZiAoIXdhc0xvb3AgJiYgaGFzTG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUocmVhbEluZGV4KTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICB9IGVsc2UgaWYgKHdhc0xvb3AgJiYgIWhhc0xvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBzd2lwZXIuZW1pdCgnYnJlYWtwb2ludCcsIGJyZWFrcG9pbnRQYXJhbXMpO1xufVxuXG5mdW5jdGlvbiBnZXRCcmVha3BvaW50KGJyZWFrcG9pbnRzLCBiYXNlID0gJ3dpbmRvdycsIGNvbnRhaW5lckVsKSB7XG4gIGlmICghYnJlYWtwb2ludHMgfHwgYmFzZSA9PT0gJ2NvbnRhaW5lcicgJiYgIWNvbnRhaW5lckVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICBsZXQgYnJlYWtwb2ludCA9IGZhbHNlO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgY3VycmVudEhlaWdodCA9IGJhc2UgPT09ICd3aW5kb3cnID8gd2luZG93LmlubmVySGVpZ2h0IDogY29udGFpbmVyRWwuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBwb2ludHMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykubWFwKHBvaW50ID0+IHtcbiAgICBpZiAodHlwZW9mIHBvaW50ID09PSAnc3RyaW5nJyAmJiBwb2ludC5pbmRleE9mKCdAJykgPT09IDApIHtcbiAgICAgIGNvbnN0IG1pblJhdGlvID0gcGFyc2VGbG9hdChwb2ludC5zdWJzdHIoMSkpO1xuICAgICAgY29uc3QgdmFsdWUgPSBjdXJyZW50SGVpZ2h0ICogbWluUmF0aW87XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgcG9pbnRcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcG9pbnQsXG4gICAgICBwb2ludFxuICAgIH07XG4gIH0pO1xuICBwb2ludHMuc29ydCgoYSwgYikgPT4gcGFyc2VJbnQoYS52YWx1ZSwgMTApIC0gcGFyc2VJbnQoYi52YWx1ZSwgMTApKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB7XG4gICAgICBwb2ludCxcbiAgICAgIHZhbHVlXG4gICAgfSA9IHBvaW50c1tpXTtcbiAgICBpZiAoYmFzZSA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt2YWx1ZX1weClgKS5tYXRjaGVzKSB7XG4gICAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlIDw9IGNvbnRhaW5lckVsLmNsaWVudFdpZHRoKSB7XG4gICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBicmVha3BvaW50IHx8ICdtYXgnO1xufVxuXG52YXIgYnJlYWtwb2ludHMgPSB7XG4gIHNldEJyZWFrcG9pbnQsXG4gIGdldEJyZWFrcG9pbnRcbn07XG5cbmZ1bmN0aW9uIHByZXBhcmVDbGFzc2VzKGVudHJpZXMsIHByZWZpeCkge1xuICBjb25zdCByZXN1bHRDbGFzc2VzID0gW107XG4gIGVudHJpZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKGNsYXNzTmFtZXMgPT4ge1xuICAgICAgICBpZiAoaXRlbVtjbGFzc05hbWVzXSkge1xuICAgICAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBjbGFzc05hbWVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0Q2xhc3Nlcztcbn1cbmZ1bmN0aW9uIGFkZENsYXNzZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWVzLFxuICAgIHBhcmFtcyxcbiAgICBydGwsXG4gICAgZWwsXG4gICAgZGV2aWNlXG4gIH0gPSBzd2lwZXI7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBjb25zdCBzdWZmaXhlcyA9IHByZXBhcmVDbGFzc2VzKFsnaW5pdGlhbGl6ZWQnLCBwYXJhbXMuZGlyZWN0aW9uLCB7XG4gICAgJ2ZyZWUtbW9kZSc6IHN3aXBlci5wYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWRcbiAgfSwge1xuICAgICdhdXRvaGVpZ2h0JzogcGFyYW1zLmF1dG9IZWlnaHRcbiAgfSwge1xuICAgICdydGwnOiBydGxcbiAgfSwge1xuICAgICdncmlkJzogcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDFcbiAgfSwge1xuICAgICdncmlkLWNvbHVtbic6IHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxICYmIHBhcmFtcy5ncmlkLmZpbGwgPT09ICdjb2x1bW4nXG4gIH0sIHtcbiAgICAnYW5kcm9pZCc6IGRldmljZS5hbmRyb2lkXG4gIH0sIHtcbiAgICAnaW9zJzogZGV2aWNlLmlvc1xuICB9LCB7XG4gICAgJ2Nzcy1tb2RlJzogcGFyYW1zLmNzc01vZGVcbiAgfSwge1xuICAgICdjZW50ZXJlZCc6IHBhcmFtcy5jc3NNb2RlICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlc1xuICB9LCB7XG4gICAgJ3dhdGNoLXByb2dyZXNzJzogcGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3NcbiAgfV0sIHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKTtcbiAgY2xhc3NOYW1lcy5wdXNoKC4uLnN1ZmZpeGVzKTtcbiAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBlbCxcbiAgICBjbGFzc05hbWVzXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZWwgfHwgdHlwZW9mIGVsID09PSAnc3RyaW5nJykgcmV0dXJuO1xuICBlbC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzTmFtZXMpO1xuICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbn1cblxudmFyIGNsYXNzZXMgPSB7XG4gIGFkZENsYXNzZXMsXG4gIHJlbW92ZUNsYXNzZXNcbn07XG5cbmZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3coKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBpc0xvY2tlZDogd2FzTG9ja2VkLFxuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBjb25zdCB7XG4gICAgc2xpZGVzT2Zmc2V0QmVmb3JlXG4gIH0gPSBwYXJhbXM7XG4gIGlmIChzbGlkZXNPZmZzZXRCZWZvcmUpIHtcbiAgICBjb25zdCBsYXN0U2xpZGVJbmRleCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBsYXN0U2xpZGVSaWdodEVkZ2UgPSBzd2lwZXIuc2xpZGVzR3JpZFtsYXN0U2xpZGVJbmRleF0gKyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW2xhc3RTbGlkZUluZGV4XSArIHNsaWRlc09mZnNldEJlZm9yZSAqIDI7XG4gICAgc3dpcGVyLmlzTG9ja2VkID0gc3dpcGVyLnNpemUgPiBsYXN0U2xpZGVSaWdodEVkZ2U7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLmlzTG9ja2VkID0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aCA9PT0gMTtcbiAgfVxuICBpZiAocGFyYW1zLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlKSB7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gIXN3aXBlci5pc0xvY2tlZDtcbiAgfVxuICBpZiAocGFyYW1zLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSB7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gIXN3aXBlci5pc0xvY2tlZDtcbiAgfVxuICBpZiAod2FzTG9ja2VkICYmIHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSB7XG4gICAgc3dpcGVyLmlzRW5kID0gZmFsc2U7XG4gIH1cbiAgaWYgKHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSB7XG4gICAgc3dpcGVyLmVtaXQoc3dpcGVyLmlzTG9ja2VkID8gJ2xvY2snIDogJ3VubG9jaycpO1xuICB9XG59XG52YXIgY2hlY2tPdmVyZmxvdyQxID0ge1xuICBjaGVja092ZXJmbG93XG59O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGluaXQ6IHRydWUsXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBvbmVXYXlNb3ZlbWVudDogZmFsc2UsXG4gIHN3aXBlckVsZW1lbnROb2RlTmFtZTogJ1NXSVBFUi1DT05UQUlORVInLFxuICB0b3VjaEV2ZW50c1RhcmdldDogJ3dyYXBwZXInLFxuICBpbml0aWFsU2xpZGU6IDAsXG4gIHNwZWVkOiAzMDAsXG4gIGNzc01vZGU6IGZhbHNlLFxuICB1cGRhdGVPbldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgcmVzaXplT2JzZXJ2ZXI6IHRydWUsXG4gIG5lc3RlZDogZmFsc2UsXG4gIGNyZWF0ZUVsZW1lbnRzOiBmYWxzZSxcbiAgZXZlbnRzUHJlZml4OiAnc3dpcGVyJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgZm9jdXNhYmxlRWxlbWVudHM6ICdpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBidXR0b24sIHZpZGVvLCBsYWJlbCcsXG4gIC8vIE92ZXJyaWRlc1xuICB3aWR0aDogbnVsbCxcbiAgaGVpZ2h0OiBudWxsLFxuICAvL1xuICBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IGZhbHNlLFxuICAvLyBzc3JcbiAgdXNlckFnZW50OiBudWxsLFxuICB1cmw6IG51bGwsXG4gIC8vIFRvIHN1cHBvcnQgaU9TJ3Mgc3dpcGUtdG8tZ28tYmFjayBnZXN0dXJlICh3aGVuIGJlaW5nIHVzZWQgaW4tYXBwKS5cbiAgZWRnZVN3aXBlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgZWRnZVN3aXBlVGhyZXNob2xkOiAyMCxcbiAgLy8gQXV0b2hlaWdodFxuICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgLy8gU2V0IHdyYXBwZXIgd2lkdGhcbiAgc2V0V3JhcHBlclNpemU6IGZhbHNlLFxuICAvLyBWaXJ0dWFsIFRyYW5zbGF0ZVxuICB2aXJ0dWFsVHJhbnNsYXRlOiBmYWxzZSxcbiAgLy8gRWZmZWN0c1xuICBlZmZlY3Q6ICdzbGlkZScsXG4gIC8vICdzbGlkZScgb3IgJ2ZhZGUnIG9yICdjdWJlJyBvciAnY292ZXJmbG93JyBvciAnZmxpcCdcblxuICAvLyBCcmVha3BvaW50c1xuICBicmVha3BvaW50czogdW5kZWZpbmVkLFxuICBicmVha3BvaW50c0Jhc2U6ICd3aW5kb3cnLFxuICAvLyBTbGlkZXMgZ3JpZFxuICBzcGFjZUJldHdlZW46IDAsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBzbGlkZXNQZXJHcm91cFNraXA6IDAsXG4gIHNsaWRlc1Blckdyb3VwQXV0bzogZmFsc2UsXG4gIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgY2VudGVyZWRTbGlkZXNCb3VuZHM6IGZhbHNlLFxuICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXG4gIC8vIGluIHB4XG4gIHNsaWRlc09mZnNldEFmdGVyOiAwLFxuICAvLyBpbiBweFxuICBub3JtYWxpemVTbGlkZUluZGV4OiB0cnVlLFxuICBjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6IGZhbHNlLFxuICBzbmFwVG9TbGlkZUVkZ2U6IGZhbHNlLFxuICAvLyBEaXNhYmxlIHN3aXBlciBhbmQgaGlkZSBuYXZpZ2F0aW9uIHdoZW4gY29udGFpbmVyIG5vdCBvdmVyZmxvd1xuICB3YXRjaE92ZXJmbG93OiB0cnVlLFxuICAvLyBSb3VuZCBsZW5ndGhcbiAgcm91bmRMZW5ndGhzOiBmYWxzZSxcbiAgLy8gVG91Y2hlc1xuICB0b3VjaFJhdGlvOiAxLFxuICB0b3VjaEFuZ2xlOiA0NSxcbiAgc2ltdWxhdGVUb3VjaDogdHJ1ZSxcbiAgc2hvcnRTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXNSYXRpbzogMC41LFxuICBsb25nU3dpcGVzTXM6IDMwMCxcbiAgZm9sbG93RmluZ2VyOiB0cnVlLFxuICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcbiAgdGhyZXNob2xkOiA1LFxuICB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IGZhbHNlLFxuICB0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ6IHRydWUsXG4gIHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiBmYWxzZSxcbiAgdG91Y2hSZWxlYXNlT25FZGdlczogZmFsc2UsXG4gIC8vIFVuaXF1ZSBOYXZpZ2F0aW9uIEVsZW1lbnRzXG4gIHVuaXF1ZU5hdkVsZW1lbnRzOiB0cnVlLFxuICAvLyBSZXNpc3RhbmNlXG4gIHJlc2lzdGFuY2U6IHRydWUsXG4gIHJlc2lzdGFuY2VSYXRpbzogMC44NSxcbiAgLy8gUHJvZ3Jlc3NcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogZmFsc2UsXG4gIC8vIEN1cnNvclxuICBncmFiQ3Vyc29yOiBmYWxzZSxcbiAgLy8gQ2xpY2tzXG4gIHByZXZlbnRDbGlja3M6IHRydWUsXG4gIHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gIC8vIGxvb3BcbiAgbG9vcDogZmFsc2UsXG4gIGxvb3BBZGRCbGFua1NsaWRlczogdHJ1ZSxcbiAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IDAsXG4gIGxvb3BQcmV2ZW50c1NsaWRpbmc6IHRydWUsXG4gIC8vIHJld2luZFxuICByZXdpbmQ6IGZhbHNlLFxuICAvLyBTd2lwaW5nL25vIHN3aXBpbmdcbiAgYWxsb3dTbGlkZVByZXY6IHRydWUsXG4gIGFsbG93U2xpZGVOZXh0OiB0cnVlLFxuICBzd2lwZUhhbmRsZXI6IG51bGwsXG4gIC8vICcuc3dpcGUtaGFuZGxlcicsXG4gIG5vU3dpcGluZzogdHJ1ZSxcbiAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gIG5vU3dpcGluZ1NlbGVjdG9yOiBudWxsLFxuICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICBwYXNzaXZlTGlzdGVuZXJzOiB0cnVlLFxuICBtYXhCYWNrZmFjZUhpZGRlblNsaWRlczogMTAsXG4gIC8vIE5TXG4gIGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M6ICdzd2lwZXItJyxcbiAgLy8gTkVXXG4gIHNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUnLFxuICBzbGlkZUJsYW5rQ2xhc3M6ICdzd2lwZXItc2xpZGUtYmxhbmsnLFxuICBzbGlkZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWFjdGl2ZScsXG4gIHNsaWRlVmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXZpc2libGUnLFxuICBzbGlkZUZ1bGx5VmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWZ1bGx5LXZpc2libGUnLFxuICBzbGlkZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1uZXh0JyxcbiAgc2xpZGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtcHJldicsXG4gIHdyYXBwZXJDbGFzczogJ3N3aXBlci13cmFwcGVyJyxcbiAgbGF6eVByZWxvYWRlckNsYXNzOiAnc3dpcGVyLWxhenktcHJlbG9hZGVyJyxcbiAgbGF6eVByZWxvYWRQcmV2TmV4dDogMCxcbiAgLy8gQ2FsbGJhY2tzXG4gIHJ1bkNhbGxiYWNrc09uSW5pdDogdHJ1ZSxcbiAgLy8gSW50ZXJuYWxzXG4gIF9lbWl0Q2xhc3NlczogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIG1vZHVsZUV4dGVuZFBhcmFtcyhwYXJhbXMsIGFsbE1vZHVsZXNQYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGV4dGVuZFBhcmFtcyhvYmogPSB7fSkge1xuICAgIGNvbnN0IG1vZHVsZVBhcmFtTmFtZSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gICAgY29uc3QgbW9kdWxlUGFyYW1zID0gb2JqW21vZHVsZVBhcmFtTmFtZV07XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVQYXJhbXMgIT09ICdvYmplY3QnIHx8IG1vZHVsZVBhcmFtcyA9PT0gbnVsbCkge1xuICAgICAgZXh0ZW5kKGFsbE1vZHVsZXNQYXJhbXMsIG9iaik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChtb2R1bGVQYXJhbU5hbWUgPT09ICduYXZpZ2F0aW9uJyAmJiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSAmJiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbmFibGVkICYmICFwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5wcmV2RWwgJiYgIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLm5leHRFbCkge1xuICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uYXV0byA9IHRydWU7XG4gICAgfVxuICAgIGlmIChbJ3BhZ2luYXRpb24nLCAnc2Nyb2xsYmFyJ10uaW5kZXhPZihtb2R1bGVQYXJhbU5hbWUpID49IDAgJiYgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gJiYgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uZW5hYmxlZCAmJiAhcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uZWwpIHtcbiAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmF1dG8gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIShtb2R1bGVQYXJhbU5hbWUgaW4gcGFyYW1zICYmICdlbmFibGVkJyBpbiBtb2R1bGVQYXJhbXMpKSB7XG4gICAgICBleHRlbmQoYWxsTW9kdWxlc1BhcmFtcywgb2JqKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gJ29iamVjdCcgJiYgISgnZW5hYmxlZCcgaW4gcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pKSB7XG4gICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7XG4gICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH07XG4gICAgZXh0ZW5kKGFsbE1vZHVsZXNQYXJhbXMsIG9iaik7XG4gIH07XG59XG5cbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogXCJvZmZcIiAqL1xuY29uc3QgcHJvdG90eXBlcyA9IHtcbiAgZXZlbnRzRW1pdHRlcixcbiAgdXBkYXRlLFxuICB0cmFuc2xhdGUsXG4gIHRyYW5zaXRpb24sXG4gIHNsaWRlLFxuICBsb29wLFxuICBncmFiQ3Vyc29yLFxuICBldmVudHM6IGV2ZW50cyQxLFxuICBicmVha3BvaW50cyxcbiAgY2hlY2tPdmVyZmxvdzogY2hlY2tPdmVyZmxvdyQxLFxuICBjbGFzc2VzXG59O1xuY29uc3QgZXh0ZW5kZWREZWZhdWx0cyA9IHt9O1xuY2xhc3MgU3dpcGVyIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIGxldCBlbDtcbiAgICBsZXQgcGFyYW1zO1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBhcmdzWzBdLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmdzWzBdKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnKSB7XG4gICAgICBwYXJhbXMgPSBhcmdzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBbZWwsIHBhcmFtc10gPSBhcmdzO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcykgcGFyYW1zID0ge307XG4gICAgcGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpO1xuICAgIGlmIChlbCAmJiAhcGFyYW1zLmVsKSBwYXJhbXMuZWwgPSBlbDtcbiAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKHBhcmFtcy5lbCAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcmFtcy5lbCkubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3dpcGVycyA9IFtdO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJhbXMuZWwpLmZvckVhY2goY29udGFpbmVyRWwgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcywge1xuICAgICAgICAgIGVsOiBjb250YWluZXJFbFxuICAgICAgICB9KTtcbiAgICAgICAgc3dpcGVycy5wdXNoKG5ldyBTd2lwZXIobmV3UGFyYW1zKSk7XG4gICAgICB9KTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdHJ1Y3Rvci1yZXR1cm5cbiAgICAgIHJldHVybiBzd2lwZXJzO1xuICAgIH1cblxuICAgIC8vIFN3aXBlciBJbnN0YW5jZVxuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLl9fc3dpcGVyX18gPSB0cnVlO1xuICAgIHN3aXBlci5zdXBwb3J0ID0gZ2V0U3VwcG9ydCgpO1xuICAgIHN3aXBlci5kZXZpY2UgPSBnZXREZXZpY2Uoe1xuICAgICAgdXNlckFnZW50OiBwYXJhbXMudXNlckFnZW50XG4gICAgfSk7XG4gICAgc3dpcGVyLmJyb3dzZXIgPSBnZXRCcm93c2VyKCk7XG4gICAgc3dpcGVyLmV2ZW50c0xpc3RlbmVycyA9IHt9O1xuICAgIHN3aXBlci5ldmVudHNBbnlMaXN0ZW5lcnMgPSBbXTtcbiAgICBzd2lwZXIubW9kdWxlcyA9IFsuLi5zd2lwZXIuX19tb2R1bGVzX19dO1xuICAgIGlmIChwYXJhbXMubW9kdWxlcyAmJiBBcnJheS5pc0FycmF5KHBhcmFtcy5tb2R1bGVzKSkge1xuICAgICAgcGFyYW1zLm1vZHVsZXMuZm9yRWFjaChtb2QgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG1vZCA9PT0gJ2Z1bmN0aW9uJyAmJiBzd2lwZXIubW9kdWxlcy5pbmRleE9mKG1vZCkgPCAwKSB7XG4gICAgICAgICAgc3dpcGVyLm1vZHVsZXMucHVzaChtb2QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgYWxsTW9kdWxlc1BhcmFtcyA9IHt9O1xuICAgIHN3aXBlci5tb2R1bGVzLmZvckVhY2gobW9kID0+IHtcbiAgICAgIG1vZCh7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgc3dpcGVyLFxuICAgICAgICBleHRlbmRQYXJhbXM6IG1vZHVsZUV4dGVuZFBhcmFtcyhwYXJhbXMsIGFsbE1vZHVsZXNQYXJhbXMpLFxuICAgICAgICBvbjogc3dpcGVyLm9uLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgb25jZTogc3dpcGVyLm9uY2UuYmluZChzd2lwZXIpLFxuICAgICAgICBvZmY6IHN3aXBlci5vZmYuYmluZChzd2lwZXIpLFxuICAgICAgICBlbWl0OiBzd2lwZXIuZW1pdC5iaW5kKHN3aXBlcilcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gRXh0ZW5kIGRlZmF1bHRzIHdpdGggbW9kdWxlcyBwYXJhbXNcbiAgICBjb25zdCBzd2lwZXJQYXJhbXMgPSBleHRlbmQoe30sIGRlZmF1bHRzLCBhbGxNb2R1bGVzUGFyYW1zKTtcblxuICAgIC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIHBhc3NlZCBwYXJhbXNcbiAgICBzd2lwZXIucGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXJQYXJhbXMsIGV4dGVuZGVkRGVmYXVsdHMsIHBhcmFtcyk7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXIucGFyYW1zKTtcbiAgICBzd2lwZXIucGFzc2VkUGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpO1xuXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgIGlmIChzd2lwZXIucGFyYW1zICYmIHN3aXBlci5wYXJhbXMub24pIHtcbiAgICAgIE9iamVjdC5rZXlzKHN3aXBlci5wYXJhbXMub24pLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgc3dpcGVyLm9uKGV2ZW50TmFtZSwgc3dpcGVyLnBhcmFtcy5vbltldmVudE5hbWVdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uQW55KSB7XG4gICAgICBzd2lwZXIub25Bbnkoc3dpcGVyLnBhcmFtcy5vbkFueSk7XG4gICAgfVxuXG4gICAgLy8gRXh0ZW5kIFN3aXBlclxuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgICBlbmFibGVkOiBzd2lwZXIucGFyYW1zLmVuYWJsZWQsXG4gICAgICBlbCxcbiAgICAgIC8vIENsYXNzZXNcbiAgICAgIGNsYXNzTmFtZXM6IFtdLFxuICAgICAgLy8gU2xpZGVzXG4gICAgICBzbGlkZXM6IFtdLFxuICAgICAgc2xpZGVzR3JpZDogW10sXG4gICAgICBzbmFwR3JpZDogW10sXG4gICAgICBzbGlkZXNTaXplc0dyaWQ6IFtdLFxuICAgICAgLy8gaXNEaXJlY3Rpb25cbiAgICAgIGlzSG9yaXpvbnRhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB9LFxuICAgICAgaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICAgICAgfSxcbiAgICAgIC8vIEluZGV4ZXNcbiAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgcmVhbEluZGV4OiAwLFxuICAgICAgLy9cbiAgICAgIGlzQmVnaW5uaW5nOiB0cnVlLFxuICAgICAgaXNFbmQ6IGZhbHNlLFxuICAgICAgLy8gUHJvcHNcbiAgICAgIHRyYW5zbGF0ZTogMCxcbiAgICAgIHByZXZpb3VzVHJhbnNsYXRlOiAwLFxuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICB2ZWxvY2l0eTogMCxcbiAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICBjc3NPdmVyZmxvd0FkanVzdG1lbnQoKSB7XG4gICAgICAgIC8vIFJldHVybnMgMCB1bmxlc3MgYHRyYW5zbGF0ZWAgaXMgPiAyKioyM1xuICAgICAgICAvLyBTaG91bGQgYmUgc3VidHJhY3RlZCBmcm9tIGNzcyB2YWx1ZXMgdG8gcHJldmVudCBvdmVyZmxvd1xuICAgICAgICByZXR1cm4gTWF0aC50cnVuYyh0aGlzLnRyYW5zbGF0ZSAvIDIgKiogMjMpICogMiAqKiAyMztcbiAgICAgIH0sXG4gICAgICAvLyBMb2Nrc1xuICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldixcbiAgICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgICAgdG91Y2hFdmVudHNEYXRhOiB7XG4gICAgICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgICAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHVuZGVmaW5lZCxcbiAgICAgICAgdG91Y2hTdGFydFRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgY3VycmVudFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RocmVzaG9sZE1vdmU6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gRm9ybSBlbGVtZW50cyB0byBtYXRjaFxuICAgICAgICBmb2N1c2FibGVFbGVtZW50czogc3dpcGVyLnBhcmFtcy5mb2N1c2FibGVFbGVtZW50cyxcbiAgICAgICAgLy8gTGFzdCBjbGljayB0aW1lXG4gICAgICAgIGxhc3RDbGlja1RpbWU6IDAsXG4gICAgICAgIGNsaWNrVGltZW91dDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBWZWxvY2l0aWVzXG4gICAgICAgIHZlbG9jaXRpZXM6IFtdLFxuICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlOiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWQsXG4gICAgICAgIHBvaW50ZXJJZDogbnVsbCxcbiAgICAgICAgdG91Y2hJZDogbnVsbFxuICAgICAgfSxcbiAgICAgIC8vIENsaWNrc1xuICAgICAgYWxsb3dDbGljazogdHJ1ZSxcbiAgICAgIC8vIFRvdWNoZXNcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiBzd2lwZXIucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgICAgdG91Y2hlczoge1xuICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgIGN1cnJlbnRZOiAwLFxuICAgICAgICBkaWZmOiAwXG4gICAgICB9LFxuICAgICAgLy8gSW1hZ2VzXG4gICAgICBpbWFnZXNUb0xvYWQ6IFtdLFxuICAgICAgaW1hZ2VzTG9hZGVkOiAwXG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19zd2lwZXInKTtcblxuICAgIC8vIEluaXRcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5pbml0KSB7XG4gICAgICBzd2lwZXIuaW5pdCgpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBhcHAgaW5zdGFuY2VcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RydWN0b3ItcmV0dXJuXG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuICBnZXREaXJlY3Rpb25MYWJlbChwcm9wZXJ0eSkge1xuICAgIGlmICh0aGlzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfVxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHJldHVybiB7XG4gICAgICAnd2lkdGgnOiAnaGVpZ2h0JyxcbiAgICAgICdtYXJnaW4tdG9wJzogJ21hcmdpbi1sZWZ0JyxcbiAgICAgICdtYXJnaW4tYm90dG9tICc6ICdtYXJnaW4tcmlnaHQnLFxuICAgICAgJ21hcmdpbi1sZWZ0JzogJ21hcmdpbi10b3AnLFxuICAgICAgJ21hcmdpbi1yaWdodCc6ICdtYXJnaW4tYm90dG9tJyxcbiAgICAgICdwYWRkaW5nLWxlZnQnOiAncGFkZGluZy10b3AnLFxuICAgICAgJ3BhZGRpbmctcmlnaHQnOiAncGFkZGluZy1ib3R0b20nLFxuICAgICAgJ21hcmdpblJpZ2h0JzogJ21hcmdpbkJvdHRvbSdcbiAgICB9W3Byb3BlcnR5XTtcbiAgfVxuICBnZXRTbGlkZUluZGV4KHNsaWRlRWwpIHtcbiAgICBjb25zdCB7XG4gICAgICBzbGlkZXNFbCxcbiAgICAgIHBhcmFtc1xuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNsaWRlcyA9IGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCk7XG4gICAgY29uc3QgZmlyc3RTbGlkZUluZGV4ID0gZWxlbWVudEluZGV4KHNsaWRlc1swXSk7XG4gICAgcmV0dXJuIGVsZW1lbnRJbmRleChzbGlkZUVsKSAtIGZpcnN0U2xpZGVJbmRleDtcbiAgfVxuICBnZXRTbGlkZUluZGV4QnlEYXRhKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2xpZGVJbmRleCh0aGlzLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKiAxID09PSBpbmRleCkpO1xuICB9XG4gIGdldFNsaWRlSW5kZXhXaGVuR3JpZChpbmRleCkge1xuICAgIGlmICh0aGlzLmdyaWQgJiYgdGhpcy5wYXJhbXMuZ3JpZCAmJiB0aGlzLnBhcmFtcy5ncmlkLnJvd3MgPiAxKSB7XG4gICAgICBpZiAodGhpcy5wYXJhbXMuZ3JpZC5maWxsID09PSAnY29sdW1uJykge1xuICAgICAgICBpbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLnBhcmFtcy5ncmlkLnJvd3MpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBhcmFtcy5ncmlkLmZpbGwgPT09ICdyb3cnKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggJSBNYXRoLmNlaWwodGhpcy5zbGlkZXMubGVuZ3RoIC8gdGhpcy5wYXJhbXMuZ3JpZC5yb3dzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIHJlY2FsY1NsaWRlcygpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlc0VsLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IHN3aXBlcjtcbiAgICBzd2lwZXIuc2xpZGVzID0gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKTtcbiAgfVxuICBlbmFibGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoKTtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ2VuYWJsZScpO1xuICB9XG4gIGRpc2FibGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgc3dpcGVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIudW5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdkaXNhYmxlJyk7XG4gIH1cbiAgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MsIHNwZWVkKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBwcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHByb2dyZXNzLCAwKSwgMSk7XG4gICAgY29uc3QgbWluID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgIGNvbnN0IG1heCA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICBjb25zdCBjdXJyZW50ID0gKG1heCAtIG1pbikgKiBwcm9ncmVzcyArIG1pbjtcbiAgICBzd2lwZXIudHJhbnNsYXRlVG8oY3VycmVudCwgdHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJyA/IDAgOiBzcGVlZCk7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfVxuICBlbWl0Q29udGFpbmVyQ2xhc3NlcygpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5fZW1pdENsYXNzZXMgfHwgIXN3aXBlci5lbCkgcmV0dXJuO1xuICAgIGNvbnN0IGNscyA9IHN3aXBlci5lbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoY2xhc3NOYW1lID0+IHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSA9PT0gMDtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX2NvbnRhaW5lckNsYXNzZXMnLCBjbHMuam9pbignICcpKTtcbiAgfVxuICBnZXRTbGlkZUNsYXNzZXMoc2xpZGVFbCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5kZXN0cm95ZWQpIHJldHVybiAnJztcbiAgICByZXR1cm4gc2xpZGVFbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoY2xhc3NOYW1lID0+IHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyLXNsaWRlJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSA9PT0gMDtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH1cbiAgZW1pdFNsaWRlc0NsYXNzZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuX2VtaXRDbGFzc2VzIHx8ICFzd2lwZXIuZWwpIHJldHVybjtcbiAgICBjb25zdCB1cGRhdGVzID0gW107XG4gICAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IHN3aXBlci5nZXRTbGlkZUNsYXNzZXMoc2xpZGVFbCk7XG4gICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICBzbGlkZUVsLFxuICAgICAgICBjbGFzc05hbWVzXG4gICAgICB9KTtcbiAgICAgIHN3aXBlci5lbWl0KCdfc2xpZGVDbGFzcycsIHNsaWRlRWwsIGNsYXNzTmFtZXMpO1xuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdfc2xpZGVDbGFzc2VzJywgdXBkYXRlcyk7XG4gIH1cbiAgc2xpZGVzUGVyVmlld0R5bmFtaWModmlldyA9ICdjdXJyZW50JywgZXhhY3QgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgcGFyYW1zLFxuICAgICAgc2xpZGVzLFxuICAgICAgc2xpZGVzR3JpZCxcbiAgICAgIHNsaWRlc1NpemVzR3JpZCxcbiAgICAgIHNpemU6IHN3aXBlclNpemUsXG4gICAgICBhY3RpdmVJbmRleFxuICAgIH0gPSBzd2lwZXI7XG4gICAgbGV0IHNwdiA9IDE7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ251bWJlcicpIHJldHVybiBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBsZXQgc2xpZGVTaXplID0gc2xpZGVzW2FjdGl2ZUluZGV4XSA/IE1hdGguY2VpbChzbGlkZXNbYWN0aXZlSW5kZXhdLnN3aXBlclNsaWRlU2l6ZSkgOiAwO1xuICAgICAgbGV0IGJyZWFrTG9vcDtcbiAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCArIDE7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IE1hdGguY2VpbChzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplKTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4IC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAodmlldyA9PT0gJ2N1cnJlbnQnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCArIDE7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZUluVmlldyA9IGV4YWN0ID8gc2xpZGVzR3JpZFtpXSArIHNsaWRlc1NpemVzR3JpZFtpXSAtIHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIDwgc3dpcGVyU2l6ZSA6IHNsaWRlc0dyaWRbaV0gLSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSA8IHN3aXBlclNpemU7XG4gICAgICAgICAgaWYgKHNsaWRlSW5WaWV3KSB7XG4gICAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHByZXZpb3VzXG4gICAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVJblZpZXcgPSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSAtIHNsaWRlc0dyaWRbaV0gPCBzd2lwZXJTaXplO1xuICAgICAgICAgIGlmIChzbGlkZUluVmlldykge1xuICAgICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzcHY7XG4gIH1cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgIHNuYXBHcmlkLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IHN3aXBlcjtcbiAgICAvLyBCcmVha3BvaW50c1xuICAgIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgfVxuICAgIFsuLi5zd2lwZXIuZWwucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJyldLmZvckVhY2goaW1hZ2VFbCA9PiB7XG4gICAgICBpZiAoaW1hZ2VFbC5jb21wbGV0ZSkge1xuICAgICAgICBwcm9jZXNzTGF6eVByZWxvYWRlcihzd2lwZXIsIGltYWdlRWwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgY29uc3QgdHJhbnNsYXRlVmFsdWUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSAqIC0xIDogc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHRyYW5zbGF0ZVZhbHVlLCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpLCBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH1cbiAgICBsZXQgdHJhbnNsYXRlZDtcbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmICFwYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc2V0VHJhbnNsYXRlKCk7XG4gICAgICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcyA6IHN3aXBlci5zbGlkZXM7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBzd2lwZXIuc2xpZGVUbyhzbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKCF0cmFuc2xhdGVkKSB7XG4gICAgICAgIHNldFRyYW5zbGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG4gIGNoYW5nZURpcmVjdGlvbihuZXdEaXJlY3Rpb24sIG5lZWRVcGRhdGUgPSB0cnVlKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBjdXJyZW50RGlyZWN0aW9uID0gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb247XG4gICAgaWYgKCFuZXdEaXJlY3Rpb24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgbmV3RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gY3VycmVudERpcmVjdGlvbiB8fCBuZXdEaXJlY3Rpb24gIT09ICdob3Jpem9udGFsJyAmJiBuZXdEaXJlY3Rpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiBzd2lwZXI7XG4gICAgfVxuICAgIHN3aXBlci5lbC5jbGFzc0xpc3QucmVtb3ZlKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc30ke2N1cnJlbnREaXJlY3Rpb259YCk7XG4gICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5hZGQoYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfSR7bmV3RGlyZWN0aW9ufWApO1xuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICAgIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xuICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgIGlmIChuZXdEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnY2hhbmdlRGlyZWN0aW9uJyk7XG4gICAgaWYgKG5lZWRVcGRhdGUpIHN3aXBlci51cGRhdGUoKTtcbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG4gIGNoYW5nZUxhbmd1YWdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5ydGwgJiYgZGlyZWN0aW9uID09PSAncnRsJyB8fCAhc3dpcGVyLnJ0bCAmJiBkaXJlY3Rpb24gPT09ICdsdHInKSByZXR1cm47XG4gICAgc3dpcGVyLnJ0bCA9IGRpcmVjdGlvbiA9PT0gJ3J0bCc7XG4gICAgc3dpcGVyLnJ0bFRyYW5zbGF0ZSA9IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgc3dpcGVyLnJ0bDtcbiAgICBpZiAoc3dpcGVyLnJ0bCkge1xuICAgICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5hZGQoYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfXJ0bGApO1xuICAgICAgc3dpcGVyLmVsLmRpciA9ICdydGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LnJlbW92ZShgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9cnRsYCk7XG4gICAgICBzd2lwZXIuZWwuZGlyID0gJ2x0cic7XG4gICAgfVxuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuICBtb3VudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLm1vdW50ZWQpIHJldHVybiB0cnVlO1xuXG4gICAgLy8gRmluZCBlbFxuICAgIGxldCBlbCA9IGVsZW1lbnQgfHwgc3dpcGVyLnBhcmFtcy5lbDtcbiAgICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICB9XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbC5zd2lwZXIgPSBzd2lwZXI7XG4gICAgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5ob3N0ICYmIGVsLnBhcmVudE5vZGUuaG9zdC5ub2RlTmFtZSA9PT0gc3dpcGVyLnBhcmFtcy5zd2lwZXJFbGVtZW50Tm9kZU5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgc3dpcGVyLmlzRWxlbWVudCA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGdldFdyYXBwZXJTZWxlY3RvciA9ICgpID0+IHtcbiAgICAgIHJldHVybiBgLiR7KHN3aXBlci5wYXJhbXMud3JhcHBlckNsYXNzIHx8ICcnKS50cmltKCkuc3BsaXQoJyAnKS5qb2luKCcuJyl9YDtcbiAgICB9O1xuICAgIGNvbnN0IGdldFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICBpZiAoZWwgJiYgZWwuc2hhZG93Um9vdCAmJiBlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgcmVzID0gZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGdldFdyYXBwZXJTZWxlY3RvcigpKTtcbiAgICAgICAgLy8gQ2hpbGRyZW4gbmVlZHMgdG8gcmV0dXJuIHNsb3QgaXRlbXNcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbGVtZW50Q2hpbGRyZW4oZWwsIGdldFdyYXBwZXJTZWxlY3RvcigpKVswXTtcbiAgICB9O1xuICAgIC8vIEZpbmQgV3JhcHBlclxuICAgIGxldCB3cmFwcGVyRWwgPSBnZXRXcmFwcGVyKCk7XG4gICAgaWYgKCF3cmFwcGVyRWwgJiYgc3dpcGVyLnBhcmFtcy5jcmVhdGVFbGVtZW50cykge1xuICAgICAgd3JhcHBlckVsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywgc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3MpO1xuICAgICAgZWwuYXBwZW5kKHdyYXBwZXJFbCk7XG4gICAgICBlbGVtZW50Q2hpbGRyZW4oZWwsIGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9YCkuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgICAgd3JhcHBlckVsLmFwcGVuZChzbGlkZUVsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgICAgZWwsXG4gICAgICB3cmFwcGVyRWwsXG4gICAgICBzbGlkZXNFbDogc3dpcGVyLmlzRWxlbWVudCAmJiAhZWwucGFyZW50Tm9kZS5ob3N0LnNsaWRlU2xvdHMgPyBlbC5wYXJlbnROb2RlLmhvc3QgOiB3cmFwcGVyRWwsXG4gICAgICBob3N0RWw6IHN3aXBlci5pc0VsZW1lbnQgPyBlbC5wYXJlbnROb2RlLmhvc3QgOiBlbCxcbiAgICAgIG1vdW50ZWQ6IHRydWUsXG4gICAgICAvLyBSVExcbiAgICAgIHJ0bDogZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8IGVsZW1lbnRTdHlsZShlbCwgJ2RpcmVjdGlvbicpID09PSAncnRsJyxcbiAgICAgIHJ0bFRyYW5zbGF0ZTogc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiAoZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8IGVsZW1lbnRTdHlsZShlbCwgJ2RpcmVjdGlvbicpID09PSAncnRsJyksXG4gICAgICB3cm9uZ1JUTDogZWxlbWVudFN0eWxlKHdyYXBwZXJFbCwgJ2Rpc3BsYXknKSA9PT0gJy13ZWJraXQtYm94J1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGluaXQoZWwpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybiBzd2lwZXI7XG4gICAgY29uc3QgbW91bnRlZCA9IHN3aXBlci5tb3VudChlbCk7XG4gICAgaWYgKG1vdW50ZWQgPT09IGZhbHNlKSByZXR1cm4gc3dpcGVyO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVJbml0Jyk7XG5cbiAgICAvLyBTZXQgYnJlYWtwb2ludFxuICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH1cblxuICAgIC8vIEFkZCBDbGFzc2VzXG4gICAgc3dpcGVyLmFkZENsYXNzZXMoKTtcblxuICAgIC8vIFVwZGF0ZSBzaXplXG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcblxuICAgIC8vIFVwZGF0ZSBzbGlkZXNcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgR3JhYiBDdXJzb3JcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yICYmIHN3aXBlci5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIC8vIFNsaWRlIFRvIEluaXRpYWwgU2xpZGVcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wICYmIHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSArIHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIGZhbHNlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUsIDAsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGxvb3BcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSh1bmRlZmluZWQsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIEF0dGFjaCBldmVudHNcbiAgICBzd2lwZXIuYXR0YWNoRXZlbnRzKCk7XG4gICAgY29uc3QgbGF6eUVsZW1lbnRzID0gWy4uLnN3aXBlci5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKV07XG4gICAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICAgIGxhenlFbGVtZW50cy5wdXNoKC4uLnN3aXBlci5ob3N0RWwucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJykpO1xuICAgIH1cbiAgICBsYXp5RWxlbWVudHMuZm9yRWFjaChpbWFnZUVsID0+IHtcbiAgICAgIGlmIChpbWFnZUVsLmNvbXBsZXRlKSB7XG4gICAgICAgIHByb2Nlc3NMYXp5UHJlbG9hZGVyKHN3aXBlciwgaW1hZ2VFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+IHtcbiAgICAgICAgICBwcm9jZXNzTGF6eVByZWxvYWRlcihzd2lwZXIsIGUudGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcHJlbG9hZChzd2lwZXIpO1xuXG4gICAgLy8gSW5pdCBGbGFnXG4gICAgc3dpcGVyLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBwcmVsb2FkKHN3aXBlcik7XG5cbiAgICAvLyBFbWl0XG4gICAgc3dpcGVyLmVtaXQoJ2luaXQnKTtcbiAgICBzd2lwZXIuZW1pdCgnYWZ0ZXJJbml0Jyk7XG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuICBkZXN0cm95KGRlbGV0ZUluc3RhbmNlID0gdHJ1ZSwgY2xlYW5TdHlsZXMgPSB0cnVlKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBwYXJhbXMsXG4gICAgICBlbCxcbiAgICAgIHdyYXBwZXJFbCxcbiAgICAgIHNsaWRlc1xuICAgIH0gPSBzd2lwZXI7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIuZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZURlc3Ryb3knKTtcblxuICAgIC8vIEluaXQgRmxhZ1xuICAgIHN3aXBlci5pbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gICAgLy8gRGV0YWNoIGV2ZW50c1xuICAgIHN3aXBlci5kZXRhY2hFdmVudHMoKTtcblxuICAgIC8vIERlc3Ryb3kgbG9vcFxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW51cCBzdHlsZXNcbiAgICBpZiAoY2xlYW5TdHlsZXMpIHtcbiAgICAgIHN3aXBlci5yZW1vdmVDbGFzc2VzKCk7XG4gICAgICBpZiAoZWwgJiYgdHlwZW9mIGVsICE9PSAnc3RyaW5nJykge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB9XG4gICAgICBpZiAod3JhcHBlckVsKSB7XG4gICAgICAgIHdyYXBwZXJFbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB9XG4gICAgICBpZiAoc2xpZGVzICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgICAgICAgc2xpZGVFbC5jbGFzc0xpc3QucmVtb3ZlKHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcywgcGFyYW1zLnNsaWRlRnVsbHlWaXNpYmxlQ2xhc3MsIHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzLCBwYXJhbXMuc2xpZGVOZXh0Q2xhc3MsIHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gICAgICAgICAgc2xpZGVFbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgc2xpZGVFbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnZGVzdHJveScpO1xuXG4gICAgLy8gRGV0YWNoIGVtaXR0ZXIgZXZlbnRzXG4gICAgT2JqZWN0LmtleXMoc3dpcGVyLmV2ZW50c0xpc3RlbmVycykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgc3dpcGVyLm9mZihldmVudE5hbWUpO1xuICAgIH0pO1xuICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgIGlmIChzd2lwZXIuZWwgJiYgdHlwZW9mIHN3aXBlci5lbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3dpcGVyLmVsLnN3aXBlciA9IG51bGw7XG4gICAgICB9XG4gICAgICBkZWxldGVQcm9wcyhzd2lwZXIpO1xuICAgIH1cbiAgICBzd2lwZXIuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBzdGF0aWMgZXh0ZW5kRGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgICBleHRlbmQoZXh0ZW5kZWREZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xuICB9XG4gIHN0YXRpYyBnZXQgZXh0ZW5kZWREZWZhdWx0cygpIHtcbiAgICByZXR1cm4gZXh0ZW5kZWREZWZhdWx0cztcbiAgfVxuICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuICBzdGF0aWMgaW5zdGFsbE1vZHVsZShtb2QpIHtcbiAgICBpZiAoIVN3aXBlci5wcm90b3R5cGUuX19tb2R1bGVzX18pIFN3aXBlci5wcm90b3R5cGUuX19tb2R1bGVzX18gPSBbXTtcbiAgICBjb25zdCBtb2R1bGVzID0gU3dpcGVyLnByb3RvdHlwZS5fX21vZHVsZXNfXztcbiAgICBpZiAodHlwZW9mIG1vZCA9PT0gJ2Z1bmN0aW9uJyAmJiBtb2R1bGVzLmluZGV4T2YobW9kKSA8IDApIHtcbiAgICAgIG1vZHVsZXMucHVzaChtb2QpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgdXNlKG1vZHVsZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZHVsZSkpIHtcbiAgICAgIG1vZHVsZS5mb3JFYWNoKG0gPT4gU3dpcGVyLmluc3RhbGxNb2R1bGUobSkpO1xuICAgICAgcmV0dXJuIFN3aXBlcjtcbiAgICB9XG4gICAgU3dpcGVyLmluc3RhbGxNb2R1bGUobW9kdWxlKTtcbiAgICByZXR1cm4gU3dpcGVyO1xuICB9XG59XG5PYmplY3Qua2V5cyhwcm90b3R5cGVzKS5mb3JFYWNoKHByb3RvdHlwZUdyb3VwID0+IHtcbiAgT2JqZWN0LmtleXMocHJvdG90eXBlc1twcm90b3R5cGVHcm91cF0pLmZvckVhY2gocHJvdG9NZXRob2QgPT4ge1xuICAgIFN3aXBlci5wcm90b3R5cGVbcHJvdG9NZXRob2RdID0gcHJvdG90eXBlc1twcm90b3R5cGVHcm91cF1bcHJvdG9NZXRob2RdO1xuICB9KTtcbn0pO1xuU3dpcGVyLnVzZShbUmVzaXplLCBPYnNlcnZlcl0pO1xuXG5leHBvcnQgeyBTd2lwZXIgYXMgUywgZGVmYXVsdHMgYXMgZCB9O1xuIiwiLyoqXG4gKiBTd2lwZXIgMTIuMS4zXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cHM6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDI2IFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IE1hcmNoIDI0LCAyMDI2XG4gKi9cblxuZXhwb3J0IHsgUyBhcyBTd2lwZXIsIFMgYXMgZGVmYXVsdCB9IGZyb20gJy4vc2hhcmVkL3N3aXBlci1jb3JlLm1qcyc7XG4iLCJpbXBvcnQgeyBnIGFzIGdldERvY3VtZW50IH0gZnJvbSAnLi4vc2hhcmVkL3Nzci13aW5kb3cuZXNtLm1qcyc7XG5pbXBvcnQgeyBiIGFzIHNldENTU1Byb3BlcnR5LCBlIGFzIGVsZW1lbnRDaGlsZHJlbiwgcyBhcyBzZXRJbm5lckhUTUwsIGMgYXMgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBWaXJ0dWFsKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgdmlydHVhbDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBzbGlkZXM6IFtdLFxuICAgICAgY2FjaGU6IHRydWUsXG4gICAgICBzbGlkZXNQZXJWaWV3QXV0b1NsaWRlU2l6ZTogMzIwLFxuICAgICAgcmVuZGVyU2xpZGU6IG51bGwsXG4gICAgICByZW5kZXJFeHRlcm5hbDogbnVsbCxcbiAgICAgIHJlbmRlckV4dGVybmFsVXBkYXRlOiB0cnVlLFxuICAgICAgYWRkU2xpZGVzQmVmb3JlOiAwLFxuICAgICAgYWRkU2xpZGVzQWZ0ZXI6IDBcbiAgICB9XG4gIH0pO1xuICBsZXQgY3NzTW9kZVRpbWVvdXQ7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgc3dpcGVyLnZpcnR1YWwgPSB7XG4gICAgY2FjaGU6IHt9LFxuICAgIGZyb206IHVuZGVmaW5lZCxcbiAgICB0bzogdW5kZWZpbmVkLFxuICAgIHNsaWRlczogW10sXG4gICAgb2Zmc2V0OiAwLFxuICAgIHNsaWRlc0dyaWQ6IFtdXG4gIH07XG4gIGNvbnN0IHRlbXBET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZnVuY3Rpb24gcmVuZGVyU2xpZGUoc2xpZGUsIGluZGV4KSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy52aXJ0dWFsO1xuICAgIGlmIChwYXJhbXMuY2FjaGUgJiYgc3dpcGVyLnZpcnR1YWwuY2FjaGVbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gc3dpcGVyLnZpcnR1YWwuY2FjaGVbaW5kZXhdO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBsZXQgc2xpZGVFbDtcbiAgICBpZiAocGFyYW1zLnJlbmRlclNsaWRlKSB7XG4gICAgICBzbGlkZUVsID0gcGFyYW1zLnJlbmRlclNsaWRlLmNhbGwoc3dpcGVyLCBzbGlkZSwgaW5kZXgpO1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZUVsID09PSAnc3RyaW5nJykge1xuICAgICAgICBzZXRJbm5lckhUTUwodGVtcERPTSwgc2xpZGVFbCk7XG4gICAgICAgIHNsaWRlRWwgPSB0ZW1wRE9NLmNoaWxkcmVuWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3dpcGVyLmlzRWxlbWVudCkge1xuICAgICAgc2xpZGVFbCA9IGNyZWF0ZUVsZW1lbnQoJ3N3aXBlci1zbGlkZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZUVsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICB9XG4gICAgc2xpZGVFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICAgIGlmICghcGFyYW1zLnJlbmRlclNsaWRlKSB7XG4gICAgICBzZXRJbm5lckhUTUwoc2xpZGVFbCwgc2xpZGUpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmNhY2hlKSB7XG4gICAgICBzd2lwZXIudmlydHVhbC5jYWNoZVtpbmRleF0gPSBzbGlkZUVsO1xuICAgIH1cbiAgICByZXR1cm4gc2xpZGVFbDtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGUoZm9yY2UsIGJlZm9yZUluaXQsIGZvcmNlQWN0aXZlSW5kZXgpIHtcbiAgICBjb25zdCB7XG4gICAgICBzbGlkZXNQZXJHcm91cCxcbiAgICAgIGNlbnRlcmVkU2xpZGVzLFxuICAgICAgc2xpZGVzUGVyVmlldyxcbiAgICAgIGxvb3A6IGlzTG9vcCxcbiAgICAgIGluaXRpYWxTbGlkZVxuICAgIH0gPSBzd2lwZXIucGFyYW1zO1xuICAgIGlmIChiZWZvcmVJbml0ICYmICFpc0xvb3AgJiYgaW5pdGlhbFNsaWRlID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBhZGRTbGlkZXNCZWZvcmUsXG4gICAgICBhZGRTbGlkZXNBZnRlcixcbiAgICAgIHNsaWRlc1BlclZpZXdBdXRvU2xpZGVTaXplXG4gICAgfSA9IHN3aXBlci5wYXJhbXMudmlydHVhbDtcbiAgICBjb25zdCB7XG4gICAgICBmcm9tOiBwcmV2aW91c0Zyb20sXG4gICAgICB0bzogcHJldmlvdXNUbyxcbiAgICAgIHNsaWRlcyxcbiAgICAgIHNsaWRlc0dyaWQ6IHByZXZpb3VzU2xpZGVzR3JpZCxcbiAgICAgIG9mZnNldDogcHJldmlvdXNPZmZzZXRcbiAgICB9ID0gc3dpcGVyLnZpcnR1YWw7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHR5cGVvZiBmb3JjZUFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJyA/IHN3aXBlci5hY3RpdmVJbmRleCB8fCAwIDogZm9yY2VBY3RpdmVJbmRleDtcbiAgICBsZXQgb2Zmc2V0UHJvcDtcbiAgICBpZiAoc3dpcGVyLnJ0bFRyYW5zbGF0ZSkgb2Zmc2V0UHJvcCA9ICdyaWdodCc7ZWxzZSBvZmZzZXRQcm9wID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgbGV0IHNsaWRlc1BlclZpZXdOdW1lcmljO1xuICAgIGlmIChzbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgIGlmIChzbGlkZXNQZXJWaWV3QXV0b1NsaWRlU2l6ZSkge1xuICAgICAgICBsZXQgc3dpcGVyU2l6ZSA9IHN3aXBlci5zaXplO1xuICAgICAgICBpZiAoIXN3aXBlclNpemUpIHtcbiAgICAgICAgICBzd2lwZXJTaXplID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gc3dpcGVyLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogc3dpcGVyLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBzbGlkZXNQZXJWaWV3TnVtZXJpYyA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChzd2lwZXJTaXplIC8gc2xpZGVzUGVyVmlld0F1dG9TbGlkZVNpemUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlc1BlclZpZXdOdW1lcmljID0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVzUGVyVmlld051bWVyaWMgPSBzbGlkZXNQZXJWaWV3O1xuICAgIH1cbiAgICBsZXQgc2xpZGVzQWZ0ZXI7XG4gICAgbGV0IHNsaWRlc0JlZm9yZTtcbiAgICBpZiAoY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHNsaWRlc0FmdGVyID0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3TnVtZXJpYyAvIDIpICsgc2xpZGVzUGVyR3JvdXAgKyBhZGRTbGlkZXNBZnRlcjtcbiAgICAgIHNsaWRlc0JlZm9yZSA9IE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlld051bWVyaWMgLyAyKSArIHNsaWRlc1Blckdyb3VwICsgYWRkU2xpZGVzQmVmb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZXNBZnRlciA9IHNsaWRlc1BlclZpZXdOdW1lcmljICsgKHNsaWRlc1Blckdyb3VwIC0gMSkgKyBhZGRTbGlkZXNBZnRlcjtcbiAgICAgIHNsaWRlc0JlZm9yZSA9IChpc0xvb3AgPyBzbGlkZXNQZXJWaWV3TnVtZXJpYyA6IHNsaWRlc1Blckdyb3VwKSArIGFkZFNsaWRlc0JlZm9yZTtcbiAgICB9XG4gICAgbGV0IGZyb20gPSBhY3RpdmVJbmRleCAtIHNsaWRlc0JlZm9yZTtcbiAgICBsZXQgdG8gPSBhY3RpdmVJbmRleCArIHNsaWRlc0FmdGVyO1xuICAgIGlmICghaXNMb29wKSB7XG4gICAgICBmcm9tID0gTWF0aC5tYXgoZnJvbSwgMCk7XG4gICAgICB0byA9IE1hdGgubWluKHRvLCBzbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIGxldCBvZmZzZXQgPSAoc3dpcGVyLnNsaWRlc0dyaWRbZnJvbV0gfHwgMCkgLSAoc3dpcGVyLnNsaWRlc0dyaWRbMF0gfHwgMCk7XG4gICAgaWYgKGlzTG9vcCAmJiBhY3RpdmVJbmRleCA+PSBzbGlkZXNCZWZvcmUpIHtcbiAgICAgIGZyb20gLT0gc2xpZGVzQmVmb3JlO1xuICAgICAgaWYgKCFjZW50ZXJlZFNsaWRlcykgb2Zmc2V0ICs9IHN3aXBlci5zbGlkZXNHcmlkWzBdO1xuICAgIH0gZWxzZSBpZiAoaXNMb29wICYmIGFjdGl2ZUluZGV4IDwgc2xpZGVzQmVmb3JlKSB7XG4gICAgICBmcm9tID0gLXNsaWRlc0JlZm9yZTtcbiAgICAgIGlmIChjZW50ZXJlZFNsaWRlcykgb2Zmc2V0ICs9IHN3aXBlci5zbGlkZXNHcmlkWzBdO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHN3aXBlci52aXJ0dWFsLCB7XG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgICBvZmZzZXQsXG4gICAgICBzbGlkZXNHcmlkOiBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgIHNsaWRlc0JlZm9yZSxcbiAgICAgIHNsaWRlc0FmdGVyXG4gICAgfSk7XG4gICAgZnVuY3Rpb24gb25SZW5kZXJlZCgpIHtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgIGVtaXQoJ3ZpcnR1YWxVcGRhdGUnKTtcbiAgICB9XG4gICAgaWYgKHByZXZpb3VzRnJvbSA9PT0gZnJvbSAmJiBwcmV2aW91c1RvID09PSB0byAmJiAhZm9yY2UpIHtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzR3JpZCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkICYmIG9mZnNldCAhPT0gcHJldmlvdXNPZmZzZXQpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgICAgIHNsaWRlRWwuc3R5bGVbb2Zmc2V0UHJvcF0gPSBgJHtvZmZzZXQgLSBNYXRoLmFicyhzd2lwZXIuY3NzT3ZlcmZsb3dBZGp1c3RtZW50KCkpfXB4YDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgIGVtaXQoJ3ZpcnR1YWxVcGRhdGUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5yZW5kZXJFeHRlcm5hbCkge1xuICAgICAgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsLmNhbGwoc3dpcGVyLCB7XG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgdG8sXG4gICAgICAgIHNsaWRlczogZnVuY3Rpb24gZ2V0U2xpZGVzKCkge1xuICAgICAgICAgIGNvbnN0IHNsaWRlc1RvUmVuZGVyID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGZyb207IGkgPD0gdG87IGkgKz0gMSkge1xuICAgICAgICAgICAgc2xpZGVzVG9SZW5kZXIucHVzaChzbGlkZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc2xpZGVzVG9SZW5kZXI7XG4gICAgICAgIH0oKVxuICAgICAgfSk7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsVXBkYXRlKSB7XG4gICAgICAgIG9uUmVuZGVyZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVtaXQoJ3ZpcnR1YWxVcGRhdGUnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJlcGVuZEluZGV4ZXMgPSBbXTtcbiAgICBjb25zdCBhcHBlbmRJbmRleGVzID0gW107XG4gICAgY29uc3QgZ2V0U2xpZGVJbmRleCA9IGluZGV4ID0+IHtcbiAgICAgIGxldCBzbGlkZUluZGV4ID0gaW5kZXg7XG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoICsgaW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKHNsaWRlSW5kZXggPj0gc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgc2xpZGVJbmRleCA9IHNsaWRlSW5kZXggLSBzbGlkZXMubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNsaWRlSW5kZXg7XG4gICAgfTtcbiAgICBpZiAoZm9yY2UpIHtcbiAgICAgIHN3aXBlci5zbGlkZXMuZmlsdGVyKGVsID0+IGVsLm1hdGNoZXMoYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApKS5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgICBzbGlkZUVsLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSBwcmV2aW91c0Zyb207IGkgPD0gcHJldmlvdXNUbzsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpIDwgZnJvbSB8fCBpID4gdG8pIHtcbiAgICAgICAgICBjb25zdCBzbGlkZUluZGV4ID0gZ2V0U2xpZGVJbmRleChpKTtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVzLmZpbHRlcihlbCA9PiBlbC5tYXRjaGVzKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzbGlkZUluZGV4fVwiXSwgc3dpcGVyLXNsaWRlW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzbGlkZUluZGV4fVwiXWApKS5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgICAgICAgc2xpZGVFbC5yZW1vdmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBsb29wRnJvbSA9IGlzTG9vcCA/IC1zbGlkZXMubGVuZ3RoIDogMDtcbiAgICBjb25zdCBsb29wVG8gPSBpc0xvb3AgPyBzbGlkZXMubGVuZ3RoICogMiA6IHNsaWRlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IGxvb3BGcm9tOyBpIDwgbG9vcFRvOyBpICs9IDEpIHtcbiAgICAgIGlmIChpID49IGZyb20gJiYgaSA8PSB0bykge1xuICAgICAgICBjb25zdCBzbGlkZUluZGV4ID0gZ2V0U2xpZGVJbmRleChpKTtcbiAgICAgICAgaWYgKHR5cGVvZiBwcmV2aW91c1RvID09PSAndW5kZWZpbmVkJyB8fCBmb3JjZSkge1xuICAgICAgICAgIGFwcGVuZEluZGV4ZXMucHVzaChzbGlkZUluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaSA+IHByZXZpb3VzVG8pIGFwcGVuZEluZGV4ZXMucHVzaChzbGlkZUluZGV4KTtcbiAgICAgICAgICBpZiAoaSA8IHByZXZpb3VzRnJvbSkgcHJlcGVuZEluZGV4ZXMucHVzaChzbGlkZUluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBhcHBlbmRJbmRleGVzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgc3dpcGVyLnNsaWRlc0VsLmFwcGVuZChyZW5kZXJTbGlkZShzbGlkZXNbaW5kZXhdLCBpbmRleCkpO1xuICAgIH0pO1xuICAgIGlmIChpc0xvb3ApIHtcbiAgICAgIGZvciAobGV0IGkgPSBwcmVwZW5kSW5kZXhlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHByZXBlbmRJbmRleGVzW2ldO1xuICAgICAgICBzd2lwZXIuc2xpZGVzRWwucHJlcGVuZChyZW5kZXJTbGlkZShzbGlkZXNbaW5kZXhdLCBpbmRleCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcmVwZW5kSW5kZXhlcy5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG4gICAgICBwcmVwZW5kSW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgc3dpcGVyLnNsaWRlc0VsLnByZXBlbmQocmVuZGVyU2xpZGUoc2xpZGVzW2luZGV4XSwgaW5kZXgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbGVtZW50Q2hpbGRyZW4oc3dpcGVyLnNsaWRlc0VsLCAnLnN3aXBlci1zbGlkZSwgc3dpcGVyLXNsaWRlJykuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgIHNsaWRlRWwuc3R5bGVbb2Zmc2V0UHJvcF0gPSBgJHtvZmZzZXQgLSBNYXRoLmFicyhzd2lwZXIuY3NzT3ZlcmZsb3dBZGp1c3RtZW50KCkpfXB4YDtcbiAgICB9KTtcbiAgICBvblJlbmRlcmVkKCk7XG4gIH1cbiAgZnVuY3Rpb24gYXBwZW5kU2xpZGUoc2xpZGVzKSB7XG4gICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSkgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnB1c2goc2xpZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnB1c2goc2xpZGVzKTtcbiAgICB9XG4gICAgdXBkYXRlKHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIHByZXBlbmRTbGlkZShzbGlkZXMpIHtcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICBsZXQgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG4gICAgbGV0IG51bWJlck9mTmV3U2xpZGVzID0gMTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzbGlkZXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldKSBzd2lwZXIudmlydHVhbC5zbGlkZXMudW5zaGlmdChzbGlkZXNbaV0pO1xuICAgICAgfVxuICAgICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIHNsaWRlcy5sZW5ndGg7XG4gICAgICBudW1iZXJPZk5ld1NsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KHNsaWRlcyk7XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgIGNvbnN0IGNhY2hlID0gc3dpcGVyLnZpcnR1YWwuY2FjaGU7XG4gICAgICBjb25zdCBuZXdDYWNoZSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoY2FjaGUpLmZvckVhY2goY2FjaGVkSW5kZXggPT4ge1xuICAgICAgICBjb25zdCBjYWNoZWRFbCA9IGNhY2hlW2NhY2hlZEluZGV4XTtcbiAgICAgICAgY29uc3QgY2FjaGVkRWxJbmRleCA9IGNhY2hlZEVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgICAgaWYgKGNhY2hlZEVsSW5kZXgpIHtcbiAgICAgICAgICBjYWNoZWRFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgcGFyc2VJbnQoY2FjaGVkRWxJbmRleCwgMTApICsgbnVtYmVyT2ZOZXdTbGlkZXMpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0NhY2hlW3BhcnNlSW50KGNhY2hlZEluZGV4LCAxMCkgKyBudW1iZXJPZk5ld1NsaWRlc10gPSBjYWNoZWRFbDtcbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLnZpcnR1YWwuY2FjaGUgPSBuZXdDYWNoZTtcbiAgICB9XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKSB7XG4gICAgaWYgKHR5cGVvZiBzbGlkZXNJbmRleGVzID09PSAndW5kZWZpbmVkJyB8fCBzbGlkZXNJbmRleGVzID09PSBudWxsKSByZXR1cm47XG4gICAgbGV0IGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsaWRlc0luZGV4ZXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gc2xpZGVzSW5kZXhlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmNhY2hlKSB7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci52aXJ0dWFsLmNhY2hlW3NsaWRlc0luZGV4ZXNbaV1dO1xuICAgICAgICAgIC8vIHNoaWZ0IGNhY2hlIGluZGV4ZXNcbiAgICAgICAgICBPYmplY3Qua2V5cyhzd2lwZXIudmlydHVhbC5jYWNoZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA+IHNsaWRlc0luZGV4ZXMpIHtcbiAgICAgICAgICAgICAgc3dpcGVyLnZpcnR1YWwuY2FjaGVba2V5IC0gMV0gPSBzd2lwZXIudmlydHVhbC5jYWNoZVtrZXldO1xuICAgICAgICAgICAgICBzd2lwZXIudmlydHVhbC5jYWNoZVtrZXkgLSAxXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jywga2V5IC0gMSk7XG4gICAgICAgICAgICAgIGRlbGV0ZSBzd2lwZXIudmlydHVhbC5jYWNoZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcy5zcGxpY2Uoc2xpZGVzSW5kZXhlc1tpXSwgMSk7XG4gICAgICAgIGlmIChzbGlkZXNJbmRleGVzW2ldIDwgYWN0aXZlSW5kZXgpIGFjdGl2ZUluZGV4IC09IDE7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gTWF0aC5tYXgoYWN0aXZlSW5kZXgsIDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmNhY2hlKSB7XG4gICAgICAgIGRlbGV0ZSBzd2lwZXIudmlydHVhbC5jYWNoZVtzbGlkZXNJbmRleGVzXTtcbiAgICAgICAgLy8gc2hpZnQgY2FjaGUgaW5kZXhlc1xuICAgICAgICBPYmplY3Qua2V5cyhzd2lwZXIudmlydHVhbC5jYWNoZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGlmIChrZXkgPiBzbGlkZXNJbmRleGVzKSB7XG4gICAgICAgICAgICBzd2lwZXIudmlydHVhbC5jYWNoZVtrZXkgLSAxXSA9IHN3aXBlci52aXJ0dWFsLmNhY2hlW2tleV07XG4gICAgICAgICAgICBzd2lwZXIudmlydHVhbC5jYWNoZVtrZXkgLSAxXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jywga2V5IC0gMSk7XG4gICAgICAgICAgICBkZWxldGUgc3dpcGVyLnZpcnR1YWwuY2FjaGVba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnNwbGljZShzbGlkZXNJbmRleGVzLCAxKTtcbiAgICAgIGlmIChzbGlkZXNJbmRleGVzIDwgYWN0aXZlSW5kZXgpIGFjdGl2ZUluZGV4IC09IDE7XG4gICAgICBhY3RpdmVJbmRleCA9IE1hdGgubWF4KGFjdGl2ZUluZGV4LCAwKTtcbiAgICB9XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHN3aXBlci5zbGlkZVRvKGFjdGl2ZUluZGV4LCAwKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVBbGxTbGlkZXMoKSB7XG4gICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzID0gW107XG4gICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5jYWNoZSkge1xuICAgICAgc3dpcGVyLnZpcnR1YWwuY2FjaGUgPSB7fTtcbiAgICB9XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHN3aXBlci5zbGlkZVRvKDAsIDApO1xuICB9XG4gIG9uKCdiZWZvcmVJbml0JywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHJldHVybjtcbiAgICBsZXQgZG9tU2xpZGVzQXNzaWduZWQ7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXIucGFzc2VkUGFyYW1zLnZpcnR1YWwuc2xpZGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3Qgc2xpZGVzID0gWy4uLnN3aXBlci5zbGlkZXNFbC5jaGlsZHJlbl0uZmlsdGVyKGVsID0+IGVsLm1hdGNoZXMoYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApKTtcbiAgICAgIGlmIChzbGlkZXMgJiYgc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMgPSBbLi4uc2xpZGVzXTtcbiAgICAgICAgZG9tU2xpZGVzQXNzaWduZWQgPSB0cnVlO1xuICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGVFbCwgc2xpZGVJbmRleCkgPT4ge1xuICAgICAgICAgIHNsaWRlRWwuc2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIHNsaWRlSW5kZXgpO1xuICAgICAgICAgIHN3aXBlci52aXJ0dWFsLmNhY2hlW3NsaWRlSW5kZXhdID0gc2xpZGVFbDtcbiAgICAgICAgICBzbGlkZUVsLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFkb21TbGlkZXNBc3NpZ25lZCkge1xuICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzID0gc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnNsaWRlcztcbiAgICB9XG4gICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9dmlydHVhbGApO1xuICAgIHN3aXBlci5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIHVwZGF0ZShmYWxzZSwgdHJ1ZSk7XG4gIH0pO1xuICBvbignc2V0VHJhbnNsYXRlJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlICYmICFzd2lwZXIuX2ltbWVkaWF0ZVZpcnR1YWwpIHtcbiAgICAgIGNsZWFyVGltZW91dChjc3NNb2RlVGltZW91dCk7XG4gICAgICBjc3NNb2RlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB1cGRhdGUoKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdpbml0IHVwZGF0ZSByZXNpemUnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHNldENTU1Byb3BlcnR5KHN3aXBlci53cmFwcGVyRWwsICctLXN3aXBlci12aXJ0dWFsLXNpemUnLCBgJHtzd2lwZXIudmlydHVhbFNpemV9cHhgKTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci52aXJ0dWFsLCB7XG4gICAgYXBwZW5kU2xpZGUsXG4gICAgcHJlcGVuZFNsaWRlLFxuICAgIHJlbW92ZVNsaWRlLFxuICAgIHJlbW92ZUFsbFNsaWRlcyxcbiAgICB1cGRhdGVcbiAgfSk7XG59XG5cbmV4cG9ydCB7IFZpcnR1YWwgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZyBhcyBnZXREb2N1bWVudCwgYSBhcyBnZXRXaW5kb3cgfSBmcm9tICcuLi9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzJztcbmltcG9ydCB7IGQgYXMgZWxlbWVudFBhcmVudHMsIGYgYXMgZWxlbWVudE9mZnNldCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5tanMnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuZnVuY3Rpb24gS2V5Ym9hcmQoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgc3dpcGVyLmtleWJvYXJkID0ge1xuICAgIGVuYWJsZWQ6IGZhbHNlXG4gIH07XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAga2V5Ym9hcmQ6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgb25seUluVmlld3BvcnQ6IHRydWUsXG4gICAgICBwYWdlVXBEb3duOiB0cnVlLFxuICAgICAgc3BlZWQ6IHVuZGVmaW5lZFxuICAgIH1cbiAgfSk7XG4gIGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBydGxUcmFuc2xhdGU6IHJ0bFxuICAgIH0gPSBzd2lwZXI7XG4gICAgbGV0IGUgPSBldmVudDtcbiAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvLyBqcXVlcnkgZml4XG4gICAgY29uc3Qga2MgPSBlLmtleUNvZGUgfHwgZS5jaGFyQ29kZTtcbiAgICBjb25zdCBwYWdlVXBEb3duID0gc3dpcGVyLnBhcmFtcy5rZXlib2FyZC5wYWdlVXBEb3duO1xuICAgIGNvbnN0IGlzUGFnZVVwID0gcGFnZVVwRG93biAmJiBrYyA9PT0gMzM7XG4gICAgY29uc3QgaXNQYWdlRG93biA9IHBhZ2VVcERvd24gJiYga2MgPT09IDM0O1xuICAgIGNvbnN0IGlzQXJyb3dMZWZ0ID0ga2MgPT09IDM3O1xuICAgIGNvbnN0IGlzQXJyb3dSaWdodCA9IGtjID09PSAzOTtcbiAgICBjb25zdCBpc0Fycm93VXAgPSBrYyA9PT0gMzg7XG4gICAgY29uc3QgaXNBcnJvd0Rvd24gPSBrYyA9PT0gNDA7XG4gICAgLy8gRGlyZWN0aW9ucyBsb2Nrc1xuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgaXNBcnJvd1JpZ2h0IHx8IHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYgaXNBcnJvd0Rvd24gfHwgaXNQYWdlRG93bikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBpc0Fycm93TGVmdCB8fCBzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIGlzQXJyb3dVcCB8fCBpc1BhZ2VVcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGUuc2hpZnRLZXkgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaXNDb250ZW50RWRpdGFibGUgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZSAmJiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RleHRhcmVhJykpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5rZXlib2FyZC5vbmx5SW5WaWV3cG9ydCAmJiAoaXNQYWdlVXAgfHwgaXNQYWdlRG93biB8fCBpc0Fycm93TGVmdCB8fCBpc0Fycm93UmlnaHQgfHwgaXNBcnJvd1VwIHx8IGlzQXJyb3dEb3duKSkge1xuICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuICAgICAgLy8gQ2hlY2sgdGhhdCBzd2lwZXIgc2hvdWxkIGJlIGluc2lkZSBvZiB2aXNpYmxlIGFyZWEgb2Ygd2luZG93XG4gICAgICBpZiAoZWxlbWVudFBhcmVudHMoc3dpcGVyLmVsLCBgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCkubGVuZ3RoID4gMCAmJiBlbGVtZW50UGFyZW50cyhzd2lwZXIuZWwsIGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3N9YCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCBlbCA9IHN3aXBlci5lbDtcbiAgICAgIGNvbnN0IHN3aXBlcldpZHRoID0gZWwuY2xpZW50V2lkdGg7XG4gICAgICBjb25zdCBzd2lwZXJIZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY29uc3Qgc3dpcGVyT2Zmc2V0ID0gZWxlbWVudE9mZnNldChlbCk7XG4gICAgICBpZiAocnRsKSBzd2lwZXJPZmZzZXQubGVmdCAtPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgY29uc3Qgc3dpcGVyQ29vcmQgPSBbW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wXSwgW3N3aXBlck9mZnNldC5sZWZ0ICsgc3dpcGVyV2lkdGgsIHN3aXBlck9mZnNldC50b3BdLCBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3AgKyBzd2lwZXJIZWlnaHRdLCBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzd2lwZXJXaWR0aCwgc3dpcGVyT2Zmc2V0LnRvcCArIHN3aXBlckhlaWdodF1dO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXJDb29yZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBwb2ludCA9IHN3aXBlckNvb3JkW2ldO1xuICAgICAgICBpZiAocG9pbnRbMF0gPj0gMCAmJiBwb2ludFswXSA8PSB3aW5kb3dXaWR0aCAmJiBwb2ludFsxXSA+PSAwICYmIHBvaW50WzFdIDw9IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgIGlmIChwb2ludFswXSA9PT0gMCAmJiBwb2ludFsxXSA9PT0gMCkgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICBpblZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWluVmlldykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgc3BlZWQgPSBzd2lwZXIucGFyYW1zLmtleWJvYXJkLnNwZWVkO1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIGlmIChpc1BhZ2VVcCB8fCBpc1BhZ2VEb3duIHx8IGlzQXJyb3dMZWZ0IHx8IGlzQXJyb3dSaWdodCkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKChpc1BhZ2VEb3duIHx8IGlzQXJyb3dSaWdodCkgJiYgIXJ0bCB8fCAoaXNQYWdlVXAgfHwgaXNBcnJvd0xlZnQpICYmIHJ0bCkgc3dpcGVyLnNsaWRlTmV4dChzcGVlZCk7XG4gICAgICBpZiAoKGlzUGFnZVVwIHx8IGlzQXJyb3dMZWZ0KSAmJiAhcnRsIHx8IChpc1BhZ2VEb3duIHx8IGlzQXJyb3dSaWdodCkgJiYgcnRsKSBzd2lwZXIuc2xpZGVQcmV2KHNwZWVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzUGFnZVVwIHx8IGlzUGFnZURvd24gfHwgaXNBcnJvd1VwIHx8IGlzQXJyb3dEb3duKSB7XG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7ZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoaXNQYWdlRG93biB8fCBpc0Fycm93RG93bikgc3dpcGVyLnNsaWRlTmV4dChzcGVlZCk7XG4gICAgICBpZiAoaXNQYWdlVXAgfHwgaXNBcnJvd1VwKSBzd2lwZXIuc2xpZGVQcmV2KHNwZWVkKTtcbiAgICB9XG4gICAgZW1pdCgna2V5UHJlc3MnLCBrYyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgaWYgKHN3aXBlci5rZXlib2FyZC5lbmFibGVkKSByZXR1cm47XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZSk7XG4gICAgc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgaWYgKCFzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGUpO1xuICAgIHN3aXBlci5rZXlib2FyZC5lbmFibGVkID0gZmFsc2U7XG4gIH1cbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMua2V5Ym9hcmQuZW5hYmxlZCkge1xuICAgICAgZW5hYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5rZXlib2FyZC5lbmFibGVkKSB7XG4gICAgICBkaXNhYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIua2V5Ym9hcmQsIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZVxuICB9KTtcbn1cblxuZXhwb3J0IHsgS2V5Ym9hcmQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgYSBhcyBnZXRXaW5kb3cgfSBmcm9tICcuLi9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzJztcbmltcG9ydCB7IG4gYXMgbmV4dFRpY2ssIGggYXMgbm93IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5mdW5jdGlvbiBNb3VzZXdoZWVsKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBleHRlbmRQYXJhbXMoe1xuICAgIG1vdXNld2hlZWw6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAgICAgaW52ZXJ0OiBmYWxzZSxcbiAgICAgIGZvcmNlVG9BeGlzOiBmYWxzZSxcbiAgICAgIHNlbnNpdGl2aXR5OiAxLFxuICAgICAgZXZlbnRzVGFyZ2V0OiAnY29udGFpbmVyJyxcbiAgICAgIHRocmVzaG9sZERlbHRhOiBudWxsLFxuICAgICAgdGhyZXNob2xkVGltZTogbnVsbCxcbiAgICAgIG5vTW91c2V3aGVlbENsYXNzOiAnc3dpcGVyLW5vLW1vdXNld2hlZWwnXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLm1vdXNld2hlZWwgPSB7XG4gICAgZW5hYmxlZDogZmFsc2VcbiAgfTtcbiAgbGV0IHRpbWVvdXQ7XG4gIGxldCBsYXN0U2Nyb2xsVGltZSA9IG5vdygpO1xuICBsZXQgbGFzdEV2ZW50QmVmb3JlU25hcDtcbiAgY29uc3QgcmVjZW50V2hlZWxFdmVudHMgPSBbXTtcbiAgZnVuY3Rpb24gbm9ybWFsaXplKGUpIHtcbiAgICAvLyBSZWFzb25hYmxlIGRlZmF1bHRzXG4gICAgY29uc3QgUElYRUxfU1RFUCA9IDEwO1xuICAgIGNvbnN0IExJTkVfSEVJR0hUID0gNDA7XG4gICAgY29uc3QgUEFHRV9IRUlHSFQgPSA4MDA7XG4gICAgbGV0IHNYID0gMDtcbiAgICBsZXQgc1kgPSAwOyAvLyBzcGluWCwgc3BpbllcbiAgICBsZXQgcFggPSAwO1xuICAgIGxldCBwWSA9IDA7IC8vIHBpeGVsWCwgcGl4ZWxZXG5cbiAgICAvLyBMZWdhY3lcbiAgICBpZiAoJ2RldGFpbCcgaW4gZSkge1xuICAgICAgc1kgPSBlLmRldGFpbDtcbiAgICB9XG4gICAgaWYgKCd3aGVlbERlbHRhJyBpbiBlKSB7XG4gICAgICBzWSA9IC1lLndoZWVsRGVsdGEgLyAxMjA7XG4gICAgfVxuICAgIGlmICgnd2hlZWxEZWx0YVknIGluIGUpIHtcbiAgICAgIHNZID0gLWUud2hlZWxEZWx0YVkgLyAxMjA7XG4gICAgfVxuICAgIGlmICgnd2hlZWxEZWx0YVgnIGluIGUpIHtcbiAgICAgIHNYID0gLWUud2hlZWxEZWx0YVggLyAxMjA7XG4gICAgfVxuXG4gICAgLy8gc2lkZSBzY3JvbGxpbmcgb24gRkYgd2l0aCBET01Nb3VzZVNjcm9sbFxuICAgIGlmICgnYXhpcycgaW4gZSAmJiBlLmF4aXMgPT09IGUuSE9SSVpPTlRBTF9BWElTKSB7XG4gICAgICBzWCA9IHNZO1xuICAgICAgc1kgPSAwO1xuICAgIH1cbiAgICBwWCA9IHNYICogUElYRUxfU1RFUDtcbiAgICBwWSA9IHNZICogUElYRUxfU1RFUDtcbiAgICBpZiAoJ2RlbHRhWScgaW4gZSkge1xuICAgICAgcFkgPSBlLmRlbHRhWTtcbiAgICB9XG4gICAgaWYgKCdkZWx0YVgnIGluIGUpIHtcbiAgICAgIHBYID0gZS5kZWx0YVg7XG4gICAgfVxuICAgIGlmIChlLnNoaWZ0S2V5ICYmICFwWCkge1xuICAgICAgLy8gaWYgdXNlciBzY3JvbGxzIHdpdGggc2hpZnQgaGUgd2FudHMgaG9yaXpvbnRhbCBzY3JvbGxcbiAgICAgIHBYID0gcFk7XG4gICAgICBwWSA9IDA7XG4gICAgfVxuICAgIGlmICgocFggfHwgcFkpICYmIGUuZGVsdGFNb2RlKSB7XG4gICAgICBpZiAoZS5kZWx0YU1vZGUgPT09IDEpIHtcbiAgICAgICAgLy8gZGVsdGEgaW4gTElORSB1bml0c1xuICAgICAgICBwWCAqPSBMSU5FX0hFSUdIVDtcbiAgICAgICAgcFkgKj0gTElORV9IRUlHSFQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWx0YSBpbiBQQUdFIHVuaXRzXG4gICAgICAgIHBYICo9IFBBR0VfSEVJR0hUO1xuICAgICAgICBwWSAqPSBQQUdFX0hFSUdIVDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGYWxsLWJhY2sgaWYgc3BpbiBjYW5ub3QgYmUgZGV0ZXJtaW5lZFxuICAgIGlmIChwWCAmJiAhc1gpIHtcbiAgICAgIHNYID0gcFggPCAxID8gLTEgOiAxO1xuICAgIH1cbiAgICBpZiAocFkgJiYgIXNZKSB7XG4gICAgICBzWSA9IHBZIDwgMSA/IC0xIDogMTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHNwaW5YOiBzWCxcbiAgICAgIHNwaW5ZOiBzWSxcbiAgICAgIHBpeGVsWDogcFgsXG4gICAgICBwaXhlbFk6IHBZXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKCkge1xuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIubW91c2VFbnRlcmVkID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIubW91c2VFbnRlcmVkID0gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gYW5pbWF0ZVNsaWRlcihuZXdFdmVudCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwudGhyZXNob2xkRGVsdGEgJiYgbmV3RXZlbnQuZGVsdGEgPCBzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwudGhyZXNob2xkRGVsdGEpIHtcbiAgICAgIC8vIFByZXZlbnQgaWYgZGVsdGEgb2Ygd2hlZWwgc2Nyb2xsIGRlbHRhIGlzIGJlbG93IGNvbmZpZ3VyZWQgdGhyZXNob2xkXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwudGhyZXNob2xkVGltZSAmJiBub3coKSAtIGxhc3RTY3JvbGxUaW1lIDwgc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLnRocmVzaG9sZFRpbWUpIHtcbiAgICAgIC8vIFByZXZlbnQgaWYgdGltZSBiZXR3ZWVuIHNjcm9sbHMgaXMgYmVsb3cgY29uZmlndXJlZCB0aHJlc2hvbGRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbW92ZW1lbnQgaXMgTk9UIGJpZyBlbm91Z2ggYW5kXG4gICAgLy8gaWYgdGhlIGxhc3QgdGltZSB0aGUgdXNlciBzY3JvbGxlZCB3YXMgdG9vIGNsb3NlIHRvIHRoZSBjdXJyZW50IG9uZSAoYXZvaWQgY29udGludW91c2x5IHRyaWdnZXJpbmcgdGhlIHNsaWRlcik6XG4gICAgLy8gICBEb24ndCBnbyBhbnkgZnVydGhlciAoYXZvaWQgaW5zaWduaWZpY2FudCBzY3JvbGwgbW92ZW1lbnQpLlxuICAgIGlmIChuZXdFdmVudC5kZWx0YSA+PSA2ICYmIG5vdygpIC0gbGFzdFNjcm9sbFRpbWUgPCA2MCkge1xuICAgICAgLy8gUmV0dXJuIGZhbHNlIGFzIGEgZGVmYXVsdFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIElmIHVzZXIgaXMgc2Nyb2xsaW5nIHRvd2FyZHMgdGhlIGVuZDpcbiAgICAvLyAgIElmIHRoZSBzbGlkZXIgaGFzbid0IGhpdCB0aGUgbGF0ZXN0IHNsaWRlIG9yXG4gICAgLy8gICBpZiB0aGUgc2xpZGVyIGlzIGEgbG9vcCBhbmRcbiAgICAvLyAgIGlmIHRoZSBzbGlkZXIgaXNuJ3QgbW92aW5nIHJpZ2h0IG5vdzpcbiAgICAvLyAgICAgR28gdG8gbmV4dCBzbGlkZSBhbmRcbiAgICAvLyAgICAgZW1pdCBhIHNjcm9sbCBldmVudC5cbiAgICAvLyBFbHNlICh0aGUgdXNlciBpcyBzY3JvbGxpbmcgdG93YXJkcyB0aGUgYmVnaW5uaW5nKSBhbmRcbiAgICAvLyBpZiB0aGUgc2xpZGVyIGhhc24ndCBoaXQgdGhlIGZpcnN0IHNsaWRlIG9yXG4gICAgLy8gaWYgdGhlIHNsaWRlciBpcyBhIGxvb3AgYW5kXG4gICAgLy8gaWYgdGhlIHNsaWRlciBpc24ndCBtb3ZpbmcgcmlnaHQgbm93OlxuICAgIC8vICAgR28gdG8gcHJldiBzbGlkZSBhbmRcbiAgICAvLyAgIGVtaXQgYSBzY3JvbGwgZXZlbnQuXG4gICAgaWYgKG5ld0V2ZW50LmRpcmVjdGlvbiA8IDApIHtcbiAgICAgIGlmICgoIXN3aXBlci5pc0VuZCB8fCBzd2lwZXIucGFyYW1zLmxvb3ApICYmICFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgICAgZW1pdCgnc2Nyb2xsJywgbmV3RXZlbnQucmF3KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCghc3dpcGVyLmlzQmVnaW5uaW5nIHx8IHN3aXBlci5wYXJhbXMubG9vcCkgJiYgIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgIGVtaXQoJ3Njcm9sbCcsIG5ld0V2ZW50LnJhdyk7XG4gICAgfVxuICAgIC8vIElmIHlvdSBnb3QgaGVyZSBpcyBiZWNhdXNlIGFuIGFuaW1hdGlvbiBoYXMgYmVlbiB0cmlnZ2VyZWQgc28gc3RvcmUgdGhlIGN1cnJlbnQgdGltZVxuICAgIGxhc3RTY3JvbGxUaW1lID0gbmV3IHdpbmRvdy5EYXRlKCkuZ2V0VGltZSgpO1xuICAgIC8vIFJldHVybiBmYWxzZSBhcyBhIGRlZmF1bHRcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gcmVsZWFzZVNjcm9sbChuZXdFdmVudCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubW91c2V3aGVlbDtcbiAgICBpZiAobmV3RXZlbnQuZGlyZWN0aW9uIDwgMCkge1xuICAgICAgaWYgKHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmIHBhcmFtcy5yZWxlYXNlT25FZGdlcykge1xuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSB0byBhbmltYXRlIHNjcm9sbCBvbiBlZGdlc1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmIHBhcmFtcy5yZWxlYXNlT25FZGdlcykge1xuICAgICAgLy8gUmV0dXJuIHRydWUgdG8gYW5pbWF0ZSBzY3JvbGwgb24gZWRnZXNcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgbGV0IGUgPSBldmVudDtcbiAgICBsZXQgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gICAgaWYgKCFzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgLy8gSWdub3JlIGV2ZW50IGlmIHRoZSB0YXJnZXQgb3IgaXRzIHBhcmVudHMgaGF2ZSB0aGUgc3dpcGVyLW5vLW1vdXNld2hlZWwgY2xhc3NcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYC4ke3N3aXBlci5wYXJhbXMubW91c2V3aGVlbC5ub01vdXNld2hlZWxDbGFzc31gKSkgcmV0dXJuO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubW91c2V3aGVlbDtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGxldCB0YXJnZXRFbCA9IHN3aXBlci5lbDtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2V0KTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0RWxDb250YWluc1RhcmdldCA9IHRhcmdldEVsICYmIHRhcmdldEVsLmNvbnRhaW5zKGUudGFyZ2V0KTtcbiAgICBpZiAoIXN3aXBlci5tb3VzZUVudGVyZWQgJiYgIXRhcmdldEVsQ29udGFpbnNUYXJnZXQgJiYgIXBhcmFtcy5yZWxlYXNlT25FZGdlcykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDsgLy8ganF1ZXJ5IGZpeFxuICAgIGxldCBkZWx0YSA9IDA7XG4gICAgY29uc3QgcnRsRmFjdG9yID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC0xIDogMTtcbiAgICBjb25zdCBkYXRhID0gbm9ybWFsaXplKGUpO1xuICAgIGlmIChwYXJhbXMuZm9yY2VUb0F4aXMpIHtcbiAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRhdGEucGl4ZWxYKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxZKSkgZGVsdGEgPSAtZGF0YS5waXhlbFggKiBydGxGYWN0b3I7ZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGF0YS5waXhlbFkpID4gTWF0aC5hYnMoZGF0YS5waXhlbFgpKSBkZWx0YSA9IC1kYXRhLnBpeGVsWTtlbHNlIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWx0YSA9IE1hdGguYWJzKGRhdGEucGl4ZWxYKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxZKSA/IC1kYXRhLnBpeGVsWCAqIHJ0bEZhY3RvciA6IC1kYXRhLnBpeGVsWTtcbiAgICB9XG4gICAgaWYgKGRlbHRhID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocGFyYW1zLmludmVydCkgZGVsdGEgPSAtZGVsdGE7XG5cbiAgICAvLyBHZXQgdGhlIHNjcm9sbCBwb3NpdGlvbnNcbiAgICBsZXQgcG9zaXRpb25zID0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpICsgZGVsdGEgKiBwYXJhbXMuc2Vuc2l0aXZpdHk7XG4gICAgaWYgKHBvc2l0aW9ucyA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHBvc2l0aW9ucyA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICBpZiAocG9zaXRpb25zIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkgcG9zaXRpb25zID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuXG4gICAgLy8gV2hlbiBsb29wIGlzIHRydWU6XG4gICAgLy8gICAgIHRoZSBkaXNhYmxlUGFyZW50U3dpcGVyIHdpbGwgYmUgdHJ1ZS5cbiAgICAvLyBXaGVuIGxvb3AgaXMgZmFsc2U6XG4gICAgLy8gICAgIGlmIHRoZSBzY3JvbGwgcG9zaXRpb25zIGlzIG5vdCBvbiBlZGdlLFxuICAgIC8vICAgICB0aGVuIHRoZSBkaXNhYmxlUGFyZW50U3dpcGVyIHdpbGwgYmUgdHJ1ZS5cbiAgICAvLyAgICAgaWYgdGhlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9ucyxcbiAgICAvLyAgICAgdGhlbiB0aGUgZGlzYWJsZVBhcmVudFN3aXBlciB3aWxsIGJlIGZhbHNlLlxuICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyB0cnVlIDogIShwb3NpdGlvbnMgPT09IHN3aXBlci5taW5UcmFuc2xhdGUoKSB8fCBwb3NpdGlvbnMgPT09IHN3aXBlci5tYXhUcmFuc2xhdGUoKSk7XG4gICAgaWYgKGRpc2FibGVQYXJlbnRTd2lwZXIgJiYgc3dpcGVyLnBhcmFtcy5uZXN0ZWQpIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmZyZWVNb2RlIHx8ICFzd2lwZXIucGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQpIHtcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBuZXcgZXZlbnQgaW4gYSB2YXJpYWJsZSB3aGljaCBzdG9yZXMgdGhlIHJlbGV2YW50IGRhdGFcbiAgICAgIGNvbnN0IG5ld0V2ZW50ID0ge1xuICAgICAgICB0aW1lOiBub3coKSxcbiAgICAgICAgZGVsdGE6IE1hdGguYWJzKGRlbHRhKSxcbiAgICAgICAgZGlyZWN0aW9uOiBNYXRoLnNpZ24oZGVsdGEpLFxuICAgICAgICByYXc6IGV2ZW50XG4gICAgICB9O1xuXG4gICAgICAvLyBLZWVwIHRoZSBtb3N0IHJlY2VudCBldmVudHNcbiAgICAgIGlmIChyZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICByZWNlbnRXaGVlbEV2ZW50cy5zaGlmdCgpOyAvLyBvbmx5IHN0b3JlIHRoZSBsYXN0IE4gZXZlbnRzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByZXZFdmVudCA9IHJlY2VudFdoZWVsRXZlbnRzLmxlbmd0aCA/IHJlY2VudFdoZWVsRXZlbnRzW3JlY2VudFdoZWVsRXZlbnRzLmxlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xuICAgICAgcmVjZW50V2hlZWxFdmVudHMucHVzaChuZXdFdmVudCk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBwcmV2aW91cyByZWNvcmRlZCBldmVudDpcbiAgICAgIC8vICAgSWYgZGlyZWN0aW9uIGhhcyBjaGFuZ2VkIG9yXG4gICAgICAvLyAgIGlmIHRoZSBzY3JvbGwgaXMgcXVpY2tlciB0aGFuIHRoZSBwcmV2aW91cyBvbmU6XG4gICAgICAvLyAgICAgQW5pbWF0ZSB0aGUgc2xpZGVyLlxuICAgICAgLy8gRWxzZSAodGhpcyBpcyB0aGUgZmlyc3QgdGltZSB0aGUgd2hlZWwgaXMgbW92ZWQpOlxuICAgICAgLy8gICAgIEFuaW1hdGUgdGhlIHNsaWRlci5cbiAgICAgIGlmIChwcmV2RXZlbnQpIHtcbiAgICAgICAgaWYgKG5ld0V2ZW50LmRpcmVjdGlvbiAhPT0gcHJldkV2ZW50LmRpcmVjdGlvbiB8fCBuZXdFdmVudC5kZWx0YSA+IHByZXZFdmVudC5kZWx0YSB8fCBuZXdFdmVudC50aW1lID4gcHJldkV2ZW50LnRpbWUgKyAxNTApIHtcbiAgICAgICAgICBhbmltYXRlU2xpZGVyKG5ld0V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5pbWF0ZVNsaWRlcihuZXdFdmVudCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0J3MgdGltZSB0byByZWxlYXNlIHRoZSBzY3JvbGw6XG4gICAgICAvLyAgIFJldHVybiBub3cgc28geW91IGRvbid0IGhpdCB0aGUgcHJldmVudERlZmF1bHQuXG4gICAgICBpZiAocmVsZWFzZVNjcm9sbChuZXdFdmVudCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZyZWVtb2RlIG9yIHNjcm9sbENvbnRhaW5lcjpcblxuICAgICAgLy8gSWYgd2UgcmVjZW50bHkgc25hcHBlZCBhZnRlciBhIG1vbWVudHVtIHNjcm9sbCwgdGhlbiBpZ25vcmUgd2hlZWwgZXZlbnRzXG4gICAgICAvLyB0byBnaXZlIHRpbWUgZm9yIHRoZSBkZWNlbGVyYXRpb24gdG8gZmluaXNoLiBTdG9wIGlnbm9yaW5nIGFmdGVyIDUwMCBtc2Vjc1xuICAgICAgLy8gb3IgaWYgaXQncyBhIG5ldyBzY3JvbGwgKGxhcmdlciBkZWx0YSBvciBpbnZlcnNlIHNpZ24gYXMgbGFzdCBldmVudCBiZWZvcmVcbiAgICAgIC8vIGFuIGVuZC1vZi1tb21lbnR1bSBzbmFwKS5cbiAgICAgIGNvbnN0IG5ld0V2ZW50ID0ge1xuICAgICAgICB0aW1lOiBub3coKSxcbiAgICAgICAgZGVsdGE6IE1hdGguYWJzKGRlbHRhKSxcbiAgICAgICAgZGlyZWN0aW9uOiBNYXRoLnNpZ24oZGVsdGEpXG4gICAgICB9O1xuICAgICAgY29uc3QgaWdub3JlV2hlZWxFdmVudHMgPSBsYXN0RXZlbnRCZWZvcmVTbmFwICYmIG5ld0V2ZW50LnRpbWUgPCBsYXN0RXZlbnRCZWZvcmVTbmFwLnRpbWUgKyA1MDAgJiYgbmV3RXZlbnQuZGVsdGEgPD0gbGFzdEV2ZW50QmVmb3JlU25hcC5kZWx0YSAmJiBuZXdFdmVudC5kaXJlY3Rpb24gPT09IGxhc3RFdmVudEJlZm9yZVNuYXAuZGlyZWN0aW9uO1xuICAgICAgaWYgKCFpZ25vcmVXaGVlbEV2ZW50cykge1xuICAgICAgICBsYXN0RXZlbnRCZWZvcmVTbmFwID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCkgKyBkZWx0YSAqIHBhcmFtcy5zZW5zaXRpdml0eTtcbiAgICAgICAgY29uc3Qgd2FzQmVnaW5uaW5nID0gc3dpcGVyLmlzQmVnaW5uaW5nO1xuICAgICAgICBjb25zdCB3YXNFbmQgPSBzd2lwZXIuaXNFbmQ7XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICBpZiAocG9zaXRpb24gPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSBwb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUocG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICAgIGlmICghd2FzQmVnaW5uaW5nICYmIHN3aXBlci5pc0JlZ2lubmluZyB8fCAhd2FzRW5kICYmIHN3aXBlci5pc0VuZCkge1xuICAgICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgIHN3aXBlci5sb29wRml4KHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbmV3RXZlbnQuZGlyZWN0aW9uIDwgMCA/ICduZXh0JyA6ICdwcmV2JyxcbiAgICAgICAgICAgIGJ5TW91c2V3aGVlbDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlLnN0aWNreSkge1xuICAgICAgICAgIC8vIFdoZW4gd2hlZWwgc2Nyb2xsaW5nIHN0YXJ0cyB3aXRoIHN0aWNreSAoYWthIHNuYXApIGVuYWJsZWQsIHRoZW4gZGV0ZWN0XG4gICAgICAgICAgLy8gdGhlIGVuZCBvZiBhIG1vbWVudHVtIHNjcm9sbCBieSBzdG9yaW5nIHJlY2VudCAoTj0xNT8pIHdoZWVsIGV2ZW50cy5cbiAgICAgICAgICAvLyAxLiBkbyBhbGwgTiBldmVudHMgaGF2ZSBkZWNyZWFzaW5nIG9yIHNhbWUgKGFic29sdXRlIHZhbHVlKSBkZWx0YT9cbiAgICAgICAgICAvLyAyLiBkaWQgYWxsIE4gZXZlbnRzIGFycml2ZSBpbiB0aGUgbGFzdCBNIChNPTUwMD8pIG1zZWNzP1xuICAgICAgICAgIC8vIDMuIGRvZXMgdGhlIGVhcmxpZXN0IGV2ZW50IGhhdmUgYW4gKGFic29sdXRlIHZhbHVlKSBkZWx0YSB0aGF0J3NcbiAgICAgICAgICAvLyAgICBhdCBsZWFzdCBQIChQPTE/KSBsYXJnZXIgdGhhbiB0aGUgbW9zdCByZWNlbnQgZXZlbnQncyBkZWx0YT9cbiAgICAgICAgICAvLyA0LiBkb2VzIHRoZSBsYXRlc3QgZXZlbnQgaGF2ZSBhIGRlbHRhIHRoYXQncyBzbWFsbGVyIHRoYW4gUSAoUT02PykgcGl4ZWxzP1xuICAgICAgICAgIC8vIElmIDEtNCBhcmUgXCJ5ZXNcIiB0aGVuIHdlJ3JlIG5lYXIgdGhlIGVuZCBvZiBhIG1vbWVudHVtIHNjcm9sbCBkZWNlbGVyYXRpb24uXG4gICAgICAgICAgLy8gU25hcCBpbW1lZGlhdGVseSBhbmQgaWdub3JlIHJlbWFpbmluZyB3aGVlbCBldmVudHMgaW4gdGhpcyBzY3JvbGwuXG4gICAgICAgICAgLy8gU2VlIGNvbW1lbnQgYWJvdmUgZm9yIFwicmVtYWluaW5nIHdoZWVsIGV2ZW50cyBpbiB0aGlzIHNjcm9sbFwiIGRldGVybWluYXRpb24uXG4gICAgICAgICAgLy8gSWYgMS00IGFyZW4ndCBzYXRpc2ZpZWQsIHRoZW4gd2FpdCB0byBzbmFwIHVudGlsIDUwMG1zIGFmdGVyIHRoZSBsYXN0IGV2ZW50LlxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmIChyZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggPj0gMTUpIHtcbiAgICAgICAgICAgIHJlY2VudFdoZWVsRXZlbnRzLnNoaWZ0KCk7IC8vIG9ubHkgc3RvcmUgdGhlIGxhc3QgTiBldmVudHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwcmV2RXZlbnQgPSByZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggPyByZWNlbnRXaGVlbEV2ZW50c1tyZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICBjb25zdCBmaXJzdEV2ZW50ID0gcmVjZW50V2hlZWxFdmVudHNbMF07XG4gICAgICAgICAgcmVjZW50V2hlZWxFdmVudHMucHVzaChuZXdFdmVudCk7XG4gICAgICAgICAgaWYgKHByZXZFdmVudCAmJiAobmV3RXZlbnQuZGVsdGEgPiBwcmV2RXZlbnQuZGVsdGEgfHwgbmV3RXZlbnQuZGlyZWN0aW9uICE9PSBwcmV2RXZlbnQuZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgLy8gSW5jcmVhc2luZyBvciByZXZlcnNlLXNpZ24gZGVsdGEgbWVhbnMgdGhlIHVzZXIgc3RhcnRlZCBzY3JvbGxpbmcgYWdhaW4uIENsZWFyIHRoZSB3aGVlbCBldmVudCBsb2cuXG4gICAgICAgICAgICByZWNlbnRXaGVlbEV2ZW50cy5zcGxpY2UoMCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggPj0gMTUgJiYgbmV3RXZlbnQudGltZSAtIGZpcnN0RXZlbnQudGltZSA8IDUwMCAmJiBmaXJzdEV2ZW50LmRlbHRhIC0gbmV3RXZlbnQuZGVsdGEgPj0gMSAmJiBuZXdFdmVudC5kZWx0YSA8PSA2KSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBkZWNlbGVyYXRpb24gb2YgYSBtb21lbnR1bSBzY3JvbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAgICAgICAgICAgLy8gdG8gd2FpdCBmb3IgbW9yZSBldmVudHMuIFNuYXAgQVNBUCBvbiB0aGUgbmV4dCB0aWNrLlxuICAgICAgICAgICAgLy8gQWxzbywgYmVjYXVzZSB0aGVyZSdzIHNvbWUgcmVtYWluaW5nIG1vbWVudHVtIHdlJ2xsIGJpYXMgdGhlIHNuYXAgaW4gdGhlXG4gICAgICAgICAgICAvLyBkaXJlY3Rpb24gb2YgdGhlIG9uZ29pbmcgc2Nyb2xsIGJlY2F1c2UgaXQncyBiZXR0ZXIgVVggZm9yIHRoZSBzY3JvbGwgdG8gc25hcFxuICAgICAgICAgICAgLy8gaW4gdGhlIHNhbWUgZGlyZWN0aW9uIGFzIHRoZSBzY3JvbGwgaW5zdGVhZCBvZiByZXZlcnNpbmcgdG8gc25hcC4gIFRoZXJlZm9yZSxcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgYWxyZWFkeSBzY3JvbGxlZCBtb3JlIHRoYW4gMjAlIGluIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwga2VlcCBnb2luZy5cbiAgICAgICAgICAgIGNvbnN0IHNuYXBUb1RocmVzaG9sZCA9IGRlbHRhID4gMCA/IDAuOCA6IDAuMjtcbiAgICAgICAgICAgIGxhc3RFdmVudEJlZm9yZVNuYXAgPSBuZXdFdmVudDtcbiAgICAgICAgICAgIHJlY2VudFdoZWVsRXZlbnRzLnNwbGljZSgwKTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIucGFyYW1zKSByZXR1cm47XG4gICAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdChzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB1bmRlZmluZWQsIHNuYXBUb1RocmVzaG9sZCk7XG4gICAgICAgICAgICB9LCAwKTsgLy8gbm8gZGVsYXk7IG1vdmUgb24gbmV4dCB0aWNrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBnZXQgaGVyZSwgdGhlbiB3ZSBoYXZlbid0IGRldGVjdGVkIHRoZSBlbmQgb2YgYSBtb21lbnR1bSBzY3JvbGwsIHNvXG4gICAgICAgICAgICAvLyB3ZSdsbCBjb25zaWRlciBhIHNjcm9sbCBcImNvbXBsZXRlXCIgd2hlbiB0aGVyZSBoYXZlbid0IGJlZW4gYW55IHdoZWVsIGV2ZW50c1xuICAgICAgICAgICAgLy8gZm9yIDUwMG1zLlxuICAgICAgICAgICAgdGltZW91dCA9IG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5wYXJhbXMpIHJldHVybjtcbiAgICAgICAgICAgICAgY29uc3Qgc25hcFRvVGhyZXNob2xkID0gMC41O1xuICAgICAgICAgICAgICBsYXN0RXZlbnRCZWZvcmVTbmFwID0gbmV3RXZlbnQ7XG4gICAgICAgICAgICAgIHJlY2VudFdoZWVsRXZlbnRzLnNwbGljZSgwKTtcbiAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHVuZGVmaW5lZCwgc25hcFRvVGhyZXNob2xkKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW1pdCBldmVudFxuICAgICAgICBpZiAoIWlnbm9yZVdoZWVsRXZlbnRzKSBlbWl0KCdzY3JvbGwnLCBlKTtcblxuICAgICAgICAvLyBTdG9wIGF1dG9wbGF5XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5ICYmIHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24pIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgIC8vIFJldHVybiBwYWdlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9uc1xuICAgICAgICBpZiAocGFyYW1zLnJlbGVhc2VPbkVkZ2VzICYmIChwb3NpdGlvbiA9PT0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIHx8IHBvc2l0aW9uID09PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gZXZlbnRzKG1ldGhvZCkge1xuICAgIGxldCB0YXJnZXRFbCA9IHN3aXBlci5lbDtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2V0KTtcbiAgICB9XG4gICAgdGFyZ2V0RWxbbWV0aG9kXSgnbW91c2VlbnRlcicsIGhhbmRsZU1vdXNlRW50ZXIpO1xuICAgIHRhcmdldEVsW21ldGhvZF0oJ21vdXNlbGVhdmUnLCBoYW5kbGVNb3VzZUxlYXZlKTtcbiAgICB0YXJnZXRFbFttZXRob2RdKCd3aGVlbCcsIGhhbmRsZSk7XG4gIH1cbiAgZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkKSByZXR1cm4gZmFsc2U7XG4gICAgZXZlbnRzKCdhZGRFdmVudExpc3RlbmVyJyk7XG4gICAgc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkKSByZXR1cm4gZmFsc2U7XG4gICAgZXZlbnRzKCdyZW1vdmVFdmVudExpc3RlbmVyJyk7XG4gICAgc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBkaXNhYmxlKCk7XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZW5hYmxlZCkgZW5hYmxlKCk7XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBlbmFibGUoKTtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQpIGRpc2FibGUoKTtcbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLm1vdXNld2hlZWwsIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZVxuICB9KTtcbn1cblxuZXhwb3J0IHsgTW91c2V3aGVlbCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBlIGFzIGVsZW1lbnRDaGlsZHJlbiwgYyBhcyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkKHN3aXBlciwgb3JpZ2luYWxQYXJhbXMsIHBhcmFtcywgY2hlY2tQcm9wcykge1xuICBpZiAoc3dpcGVyLnBhcmFtcy5jcmVhdGVFbGVtZW50cykge1xuICAgIE9iamVjdC5rZXlzKGNoZWNrUHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICghcGFyYW1zW2tleV0gJiYgcGFyYW1zLmF1dG8gPT09IHRydWUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50Q2hpbGRyZW4oc3dpcGVyLmVsLCBgLiR7Y2hlY2tQcm9wc1trZXldfWApWzBdO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY2hlY2tQcm9wc1trZXldKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNoZWNrUHJvcHNba2V5XTtcbiAgICAgICAgICBzd2lwZXIuZWwuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtc1trZXldID0gZWxlbWVudDtcbiAgICAgICAgb3JpZ2luYWxQYXJhbXNba2V5XSA9IGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZCBhcyBjIH07XG4iLCJpbXBvcnQgeyBjIGFzIGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQgfSBmcm9tICcuLi9zaGFyZWQvY3JlYXRlLWVsZW1lbnQtaWYtbm90LWRlZmluZWQubWpzJztcbmltcG9ydCB7IG0gYXMgbWFrZUVsZW1lbnRzQXJyYXksIHMgYXMgc2V0SW5uZXJIVE1MIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbmNvbnN0IGFycm93U3ZnID0gYDxzdmcgY2xhc3M9XCJzd2lwZXItbmF2aWdhdGlvbi1pY29uXCIgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxMSAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMC4zODI5NiAyMC4wNzYyQzAuMTExNzg4IDE5LjgwNSAwLjExMTc4OCAxOS4zNjU0IDAuMzgyOTYgMTkuMDk0Mkw5LjE5NzU4IDEwLjI3OTZMMC4zODI5NiAxLjQ2NDk3QzAuMTExNzg4IDEuMTkzNzkgMC4xMTE3ODggMC43NTQxMzggMC4zODI5NiAwLjQ4Mjk2NkMwLjY1NDEzMSAwLjIxMTc5NCAxLjA5Mzc5IDAuMjExNzk0IDEuMzY0OTYgMC40ODI5NjZMMTAuNDM0MSA5LjU1MjE0QzEwLjgzNTkgOS45NTM5IDEwLjgzNTkgMTAuNjA1MyAxMC40MzQxIDExLjAwN0wxLjM2NDk2IDIwLjA3NjJDMS4wOTM3OSAyMC4zNDc0IDAuNjU0MTMxIDIwLjM0NzQgMC4zODI5NiAyMC4wNzYyWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PC9zdmc+YDtcbmZ1bmN0aW9uIE5hdmlnYXRpb24oe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IG51bGwsXG4gICAgICBwcmV2RWw6IG51bGwsXG4gICAgICBhZGRJY29uczogdHJ1ZSxcbiAgICAgIGhpZGVPbkNsaWNrOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWRpc2FibGVkJyxcbiAgICAgIGhpZGRlbkNsYXNzOiAnc3dpcGVyLWJ1dHRvbi1oaWRkZW4nLFxuICAgICAgbG9ja0NsYXNzOiAnc3dpcGVyLWJ1dHRvbi1sb2NrJyxcbiAgICAgIG5hdmlnYXRpb25EaXNhYmxlZENsYXNzOiAnc3dpcGVyLW5hdmlnYXRpb24tZGlzYWJsZWQnXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLm5hdmlnYXRpb24gPSB7XG4gICAgbmV4dEVsOiBudWxsLFxuICAgIHByZXZFbDogbnVsbCxcbiAgICBhcnJvd1N2Z1xuICB9O1xuICBmdW5jdGlvbiBnZXRFbChlbCkge1xuICAgIGxldCByZXM7XG4gICAgaWYgKGVsICYmIHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgJiYgc3dpcGVyLmlzRWxlbWVudCkge1xuICAgICAgcmVzID0gc3dpcGVyLmVsLnF1ZXJ5U2VsZWN0b3IoZWwpIHx8IHN3aXBlci5ob3N0RWwucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgICBpZiAocmVzKSByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBpZiAoZWwpIHtcbiAgICAgIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSByZXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbCldO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIGVsID09PSAnc3RyaW5nJyAmJiByZXMgJiYgcmVzLmxlbmd0aCA+IDEgJiYgc3dpcGVyLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoZWwpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXMgPSBzd2lwZXIuZWwucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgICB9IGVsc2UgaWYgKHJlcyAmJiByZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJlcyA9IHJlc1swXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVsICYmICFyZXMpIHJldHVybiBlbDtcbiAgICAvLyBpZiAoQXJyYXkuaXNBcnJheShyZXMpICYmIHJlcy5sZW5ndGggPT09IDEpIHJlcyA9IHJlc1swXTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUVsKGVsLCBkaXNhYmxlZCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbjtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIGlmIChzdWJFbCkge1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3RbZGlzYWJsZWQgPyAnYWRkJyA6ICdyZW1vdmUnXSguLi5wYXJhbXMuZGlzYWJsZWRDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgICAgaWYgKHN1YkVsLnRhZ05hbWUgPT09ICdCVVRUT04nKSBzdWJFbC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5lbmFibGVkKSB7XG4gICAgICAgICAgc3ViRWwuY2xhc3NMaXN0W3N3aXBlci5pc0xvY2tlZCA/ICdhZGQnIDogJ3JlbW92ZSddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIC8vIFVwZGF0ZSBOYXZpZ2F0aW9uIEJ1dHRvbnNcbiAgICBjb25zdCB7XG4gICAgICBuZXh0RWwsXG4gICAgICBwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgdG9nZ2xlRWwocHJldkVsLCBmYWxzZSk7XG4gICAgICB0b2dnbGVFbChuZXh0RWwsIGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdG9nZ2xlRWwocHJldkVsLCBzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMucmV3aW5kKTtcbiAgICB0b2dnbGVFbChuZXh0RWwsIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5yZXdpbmQpO1xuICB9XG4gIGZ1bmN0aW9uIG9uUHJldkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmICFzd2lwZXIucGFyYW1zLnJld2luZCkgcmV0dXJuO1xuICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICBlbWl0KCduYXZpZ2F0aW9uUHJldicpO1xuICB9XG4gIGZ1bmN0aW9uIG9uTmV4dENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmICFzd2lwZXIucGFyYW1zLnJld2luZCkgcmV0dXJuO1xuICAgIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICBlbWl0KCduYXZpZ2F0aW9uTmV4dCcpO1xuICB9XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uO1xuICAgIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbiA9IGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQoc3dpcGVyLCBzd2lwZXIub3JpZ2luYWxQYXJhbXMubmF2aWdhdGlvbiwgc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLCB7XG4gICAgICBuZXh0RWw6ICdzd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnc3dpcGVyLWJ1dHRvbi1wcmV2J1xuICAgIH0pO1xuICAgIGlmICghKHBhcmFtcy5uZXh0RWwgfHwgcGFyYW1zLnByZXZFbCkpIHJldHVybjtcbiAgICBsZXQgbmV4dEVsID0gZ2V0RWwocGFyYW1zLm5leHRFbCk7XG4gICAgbGV0IHByZXZFbCA9IGdldEVsKHBhcmFtcy5wcmV2RWwpO1xuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLm5hdmlnYXRpb24sIHtcbiAgICAgIG5leHRFbCxcbiAgICAgIHByZXZFbFxuICAgIH0pO1xuICAgIG5leHRFbCA9IG1ha2VFbGVtZW50c0FycmF5KG5leHRFbCk7XG4gICAgcHJldkVsID0gbWFrZUVsZW1lbnRzQXJyYXkocHJldkVsKTtcbiAgICBjb25zdCBpbml0QnV0dG9uID0gKGVsLCBkaXIpID0+IHtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBpZiAocGFyYW1zLmFkZEljb25zICYmIGVsLm1hdGNoZXMoJy5zd2lwZXItYnV0dG9uLW5leHQsLnN3aXBlci1idXR0b24tcHJldicpICYmICFlbC5xdWVyeVNlbGVjdG9yKCdzdmcnKSkge1xuICAgICAgICAgIGNvbnN0IHRlbXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHNldElubmVySFRNTCh0ZW1wRWwsIGFycm93U3ZnKTtcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZCh0ZW1wRWwucXVlcnlTZWxlY3Rvcignc3ZnJykpO1xuICAgICAgICAgIHRlbXBFbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpciA9PT0gJ25leHQnID8gb25OZXh0Q2xpY2sgOiBvblByZXZDbGljayk7XG4gICAgICB9XG4gICAgICBpZiAoIXN3aXBlci5lbmFibGVkICYmIGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4ucGFyYW1zLmxvY2tDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIG5leHRFbC5mb3JFYWNoKGVsID0+IGluaXRCdXR0b24oZWwsICduZXh0JykpO1xuICAgIHByZXZFbC5mb3JFYWNoKGVsID0+IGluaXRCdXR0b24oZWwsICdwcmV2JykpO1xuICB9XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgbGV0IHtcbiAgICAgIG5leHRFbCxcbiAgICAgIHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbjtcbiAgICBuZXh0RWwgPSBtYWtlRWxlbWVudHNBcnJheShuZXh0RWwpO1xuICAgIHByZXZFbCA9IG1ha2VFbGVtZW50c0FycmF5KHByZXZFbCk7XG4gICAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IChlbCwgZGlyKSA9PiB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRpciA9PT0gJ25leHQnID8gb25OZXh0Q2xpY2sgOiBvblByZXZDbGljayk7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKC4uLnN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzLnNwbGl0KCcgJykpO1xuICAgIH07XG4gICAgbmV4dEVsLmZvckVhY2goZWwgPT4gZGVzdHJveUJ1dHRvbihlbCwgJ25leHQnKSk7XG4gICAgcHJldkVsLmZvckVhY2goZWwgPT4gZGVzdHJveUJ1dHRvbihlbCwgJ3ByZXYnKSk7XG4gIH1cbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBkaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXQoKTtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCd0b0VkZ2UgZnJvbUVkZ2UgbG9jayB1bmxvY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBkZXN0cm95KCk7XG4gIH0pO1xuICBvbignZW5hYmxlIGRpc2FibGUnLCAoKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIG5leHRFbCxcbiAgICAgIHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbjtcbiAgICBuZXh0RWwgPSBtYWtlRWxlbWVudHNBcnJheShuZXh0RWwpO1xuICAgIHByZXZFbCA9IG1ha2VFbGVtZW50c0FycmF5KHByZXZFbCk7XG4gICAgaWYgKHN3aXBlci5lbmFibGVkKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgWy4uLm5leHRFbCwgLi4ucHJldkVsXS5maWx0ZXIoZWwgPT4gISFlbCkuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5sb2NrQ2xhc3MpKTtcbiAgfSk7XG4gIG9uKCdjbGljaycsIChfcywgZSkgPT4ge1xuICAgIGxldCB7XG4gICAgICBuZXh0RWwsXG4gICAgICBwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG4gICAgbmV4dEVsID0gbWFrZUVsZW1lbnRzQXJyYXkobmV4dEVsKTtcbiAgICBwcmV2RWwgPSBtYWtlRWxlbWVudHNBcnJheShwcmV2RWwpO1xuICAgIGNvbnN0IHRhcmdldEVsID0gZS50YXJnZXQ7XG4gICAgbGV0IHRhcmdldElzQnV0dG9uID0gcHJldkVsLmluY2x1ZGVzKHRhcmdldEVsKSB8fCBuZXh0RWwuaW5jbHVkZXModGFyZ2V0RWwpO1xuICAgIGlmIChzd2lwZXIuaXNFbGVtZW50ICYmICF0YXJnZXRJc0J1dHRvbikge1xuICAgICAgY29uc3QgcGF0aCA9IGUucGF0aCB8fCBlLmNvbXBvc2VkUGF0aCAmJiBlLmNvbXBvc2VkUGF0aCgpO1xuICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgdGFyZ2V0SXNCdXR0b24gPSBwYXRoLmZpbmQocGF0aEVsID0+IG5leHRFbC5pbmNsdWRlcyhwYXRoRWwpIHx8IHByZXZFbC5pbmNsdWRlcyhwYXRoRWwpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRlT25DbGljayAmJiAhdGFyZ2V0SXNCdXR0b24pIHtcbiAgICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbiAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSAmJiAoc3dpcGVyLnBhZ2luYXRpb24uZWwgPT09IHRhcmdldEVsIHx8IHN3aXBlci5wYWdpbmF0aW9uLmVsLmNvbnRhaW5zKHRhcmdldEVsKSkpIHJldHVybjtcbiAgICAgIGxldCBpc0hpZGRlbjtcbiAgICAgIGlmIChuZXh0RWwubGVuZ3RoKSB7XG4gICAgICAgIGlzSGlkZGVuID0gbmV4dEVsWzBdLmNsYXNzTGlzdC5jb250YWlucyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2RWwubGVuZ3RoKSB7XG4gICAgICAgIGlzSGlkZGVuID0gcHJldkVsWzBdLmNsYXNzTGlzdC5jb250YWlucyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKGlzSGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgIGVtaXQoJ25hdmlnYXRpb25TaG93Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbWl0KCduYXZpZ2F0aW9uSGlkZScpO1xuICAgICAgfVxuICAgICAgWy4uLm5leHRFbCwgLi4ucHJldkVsXS5maWx0ZXIoZWwgPT4gISFlbCkuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcykpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGVuYWJsZSA9ICgpID0+IHtcbiAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5zd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ubmF2aWdhdGlvbkRpc2FibGVkQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgaW5pdCgpO1xuICAgIHVwZGF0ZSgpO1xuICB9O1xuICBjb25zdCBkaXNhYmxlID0gKCkgPT4ge1xuICAgIHN3aXBlci5lbC5jbGFzc0xpc3QuYWRkKC4uLnN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5uYXZpZ2F0aW9uRGlzYWJsZWRDbGFzcy5zcGxpdCgnICcpKTtcbiAgICBkZXN0cm95KCk7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLm5hdmlnYXRpb24sIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgICB1cGRhdGUsXG4gICAgaW5pdCxcbiAgICBkZXN0cm95XG4gIH0pO1xufVxuXG5leHBvcnQgeyBOYXZpZ2F0aW9uIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGMgYXMgY2xhc3Nlc1RvU2VsZWN0b3IgfSBmcm9tICcuLi9zaGFyZWQvY2xhc3Nlcy10by1zZWxlY3Rvci5tanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIH0gZnJvbSAnLi4vc2hhcmVkL2NyZWF0ZS1lbGVtZW50LWlmLW5vdC1kZWZpbmVkLm1qcyc7XG5pbXBvcnQgeyBtIGFzIG1ha2VFbGVtZW50c0FycmF5LCBpIGFzIGVsZW1lbnRPdXRlclNpemUsIGogYXMgZWxlbWVudEluZGV4LCBzIGFzIHNldElubmVySFRNTCwgZCBhcyBlbGVtZW50UGFyZW50cyB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBQYWdpbmF0aW9uKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGNvbnN0IHBmeCA9ICdzd2lwZXItcGFnaW5hdGlvbic7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IG51bGwsXG4gICAgICBidWxsZXRFbGVtZW50OiAnc3BhbicsXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgcmVuZGVyQnVsbGV0OiBudWxsLFxuICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IG51bGwsXG4gICAgICByZW5kZXJGcmFjdGlvbjogbnVsbCxcbiAgICAgIHJlbmRlckN1c3RvbTogbnVsbCxcbiAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGU6IGZhbHNlLFxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzc2Jhcicgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xuICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLFxuICAgICAgZHluYW1pY01haW5CdWxsZXRzOiAxLFxuICAgICAgZm9ybWF0RnJhY3Rpb25DdXJyZW50OiBudW1iZXIgPT4gbnVtYmVyLFxuICAgICAgZm9ybWF0RnJhY3Rpb25Ub3RhbDogbnVtYmVyID0+IG51bWJlcixcbiAgICAgIGJ1bGxldENsYXNzOiBgJHtwZnh9LWJ1bGxldGAsXG4gICAgICBidWxsZXRBY3RpdmVDbGFzczogYCR7cGZ4fS1idWxsZXQtYWN0aXZlYCxcbiAgICAgIG1vZGlmaWVyQ2xhc3M6IGAke3BmeH0tYCxcbiAgICAgIGN1cnJlbnRDbGFzczogYCR7cGZ4fS1jdXJyZW50YCxcbiAgICAgIHRvdGFsQ2xhc3M6IGAke3BmeH0tdG90YWxgLFxuICAgICAgaGlkZGVuQ2xhc3M6IGAke3BmeH0taGlkZGVuYCxcbiAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiBgJHtwZnh9LXByb2dyZXNzYmFyLWZpbGxgLFxuICAgICAgcHJvZ3Jlc3NiYXJPcHBvc2l0ZUNsYXNzOiBgJHtwZnh9LXByb2dyZXNzYmFyLW9wcG9zaXRlYCxcbiAgICAgIGNsaWNrYWJsZUNsYXNzOiBgJHtwZnh9LWNsaWNrYWJsZWAsXG4gICAgICBsb2NrQ2xhc3M6IGAke3BmeH0tbG9ja2AsXG4gICAgICBob3Jpem9udGFsQ2xhc3M6IGAke3BmeH0taG9yaXpvbnRhbGAsXG4gICAgICB2ZXJ0aWNhbENsYXNzOiBgJHtwZnh9LXZlcnRpY2FsYCxcbiAgICAgIHBhZ2luYXRpb25EaXNhYmxlZENsYXNzOiBgJHtwZnh9LWRpc2FibGVkYFxuICAgIH1cbiAgfSk7XG4gIHN3aXBlci5wYWdpbmF0aW9uID0ge1xuICAgIGVsOiBudWxsLFxuICAgIGJ1bGxldHM6IFtdXG4gIH07XG4gIGxldCBidWxsZXRTaXplO1xuICBsZXQgZHluYW1pY0J1bGxldEluZGV4ID0gMDtcbiAgZnVuY3Rpb24gaXNQYWdpbmF0aW9uRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuICFzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsIHx8IEFycmF5LmlzQXJyYXkoc3dpcGVyLnBhZ2luYXRpb24uZWwpICYmIHN3aXBlci5wYWdpbmF0aW9uLmVsLmxlbmd0aCA9PT0gMDtcbiAgfVxuICBmdW5jdGlvbiBzZXRTaWRlQnVsbGV0cyhidWxsZXRFbCwgcG9zaXRpb24pIHtcbiAgICBjb25zdCB7XG4gICAgICBidWxsZXRBY3RpdmVDbGFzc1xuICAgIH0gPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKCFidWxsZXRFbCkgcmV0dXJuO1xuICAgIGJ1bGxldEVsID0gYnVsbGV0RWxbYCR7cG9zaXRpb24gPT09ICdwcmV2JyA/ICdwcmV2aW91cycgOiAnbmV4dCd9RWxlbWVudFNpYmxpbmdgXTtcbiAgICBpZiAoYnVsbGV0RWwpIHtcbiAgICAgIGJ1bGxldEVsLmNsYXNzTGlzdC5hZGQoYCR7YnVsbGV0QWN0aXZlQ2xhc3N9LSR7cG9zaXRpb259YCk7XG4gICAgICBidWxsZXRFbCA9IGJ1bGxldEVsW2Ake3Bvc2l0aW9uID09PSAncHJldicgPyAncHJldmlvdXMnIDogJ25leHQnfUVsZW1lbnRTaWJsaW5nYF07XG4gICAgICBpZiAoYnVsbGV0RWwpIHtcbiAgICAgICAgYnVsbGV0RWwuY2xhc3NMaXN0LmFkZChgJHtidWxsZXRBY3RpdmVDbGFzc30tJHtwb3NpdGlvbn0tJHtwb3NpdGlvbn1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2V0TW92ZURpcmVjdGlvbihwcmV2SW5kZXgsIG5leHRJbmRleCwgbGVuZ3RoKSB7XG4gICAgcHJldkluZGV4ID0gcHJldkluZGV4ICUgbGVuZ3RoO1xuICAgIG5leHRJbmRleCA9IG5leHRJbmRleCAlIGxlbmd0aDtcbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2SW5kZXggKyAxKSB7XG4gICAgICByZXR1cm4gJ25leHQnO1xuICAgIH0gZWxzZSBpZiAobmV4dEluZGV4ID09PSBwcmV2SW5kZXggLSAxKSB7XG4gICAgICByZXR1cm4gJ3ByZXZpb3VzJztcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGZ1bmN0aW9uIG9uQnVsbGV0Q2xpY2soZSkge1xuICAgIGNvbnN0IGJ1bGxldEVsID0gZS50YXJnZXQuY2xvc2VzdChjbGFzc2VzVG9TZWxlY3Rvcihzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpKTtcbiAgICBpZiAoIWJ1bGxldEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbmRleCA9IGVsZW1lbnRJbmRleChidWxsZXRFbCkgKiBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIGlmIChzd2lwZXIucmVhbEluZGV4ID09PSBpbmRleCkgcmV0dXJuO1xuICAgICAgY29uc3QgbW92ZURpcmVjdGlvbiA9IGdldE1vdmVEaXJlY3Rpb24oc3dpcGVyLnJlYWxJbmRleCwgaW5kZXgsIHN3aXBlci5zbGlkZXMubGVuZ3RoKTtcbiAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChtb3ZlRGlyZWN0aW9uID09PSAncHJldmlvdXMnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvTG9vcChpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIC8vIFJlbmRlciB8fCBVcGRhdGUgUGFnaW5hdGlvbiBidWxsZXRzL2l0ZW1zXG4gICAgY29uc3QgcnRsID0gc3dpcGVyLnJ0bDtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKGlzUGFnaW5hdGlvbkRpc2FibGVkKCkpIHJldHVybjtcbiAgICBsZXQgZWwgPSBzd2lwZXIucGFnaW5hdGlvbi5lbDtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICAvLyBDdXJyZW50L1RvdGFsXG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IHByZXZpb3VzSW5kZXg7XG4gICAgY29uc3Qgc2xpZGVzTGVuZ3RoID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgY29uc3QgdG90YWwgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoc2xpZGVzTGVuZ3RoIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIucHJldmlvdXNSZWFsSW5kZXggfHwgMDtcbiAgICAgIGN1cnJlbnQgPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSA/IE1hdGguZmxvb3Ioc3dpcGVyLnJlYWxJbmRleCAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogc3dpcGVyLnJlYWxJbmRleDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzd2lwZXIuc25hcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY3VycmVudCA9IHN3aXBlci5zbmFwSW5kZXg7XG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzU25hcEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzSW5kZXggfHwgMDtcbiAgICAgIGN1cnJlbnQgPSBzd2lwZXIuYWN0aXZlSW5kZXggfHwgMDtcbiAgICB9XG4gICAgLy8gVHlwZXNcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYnVsbGV0cyA9IHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHM7XG4gICAgICBsZXQgZmlyc3RJbmRleDtcbiAgICAgIGxldCBsYXN0SW5kZXg7XG4gICAgICBsZXQgbWlkSW5kZXg7XG4gICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgIGJ1bGxldFNpemUgPSBlbGVtZW50T3V0ZXJTaXplKGJ1bGxldHNbMF0sIHN3aXBlci5pc0hvcml6b250YWwoKSA/ICd3aWR0aCcgOiAnaGVpZ2h0JywgdHJ1ZSk7XG4gICAgICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgICAgIHN1YkVsLnN0eWxlW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICd3aWR0aCcgOiAnaGVpZ2h0J10gPSBgJHtidWxsZXRTaXplICogKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgKyA0KX1weGA7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyA+IDEgJiYgcHJldmlvdXNJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZHluYW1pY0J1bGxldEluZGV4ICs9IGN1cnJlbnQgLSAocHJldmlvdXNJbmRleCB8fCAwKTtcbiAgICAgICAgICBpZiAoZHluYW1pY0J1bGxldEluZGV4ID4gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDEpIHtcbiAgICAgICAgICAgIGR5bmFtaWNCdWxsZXRJbmRleCA9IHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgLSAxO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZHluYW1pY0J1bGxldEluZGV4IDwgMCkge1xuICAgICAgICAgICAgZHluYW1pY0J1bGxldEluZGV4ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmlyc3RJbmRleCA9IE1hdGgubWF4KGN1cnJlbnQgLSBkeW5hbWljQnVsbGV0SW5kZXgsIDApO1xuICAgICAgICBsYXN0SW5kZXggPSBmaXJzdEluZGV4ICsgKE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzKSAtIDEpO1xuICAgICAgICBtaWRJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSAvIDI7XG4gICAgICB9XG4gICAgICBidWxsZXRzLmZvckVhY2goYnVsbGV0RWwgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc2VzVG9SZW1vdmUgPSBbLi4uWycnLCAnLW5leHQnLCAnLW5leHQtbmV4dCcsICctcHJldicsICctcHJldi1wcmV2JywgJy1tYWluJ10ubWFwKHN1ZmZpeCA9PiBgJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9JHtzdWZmaXh9YCldLm1hcChzID0+IHR5cGVvZiBzID09PSAnc3RyaW5nJyAmJiBzLmluY2x1ZGVzKCcgJykgPyBzLnNwbGl0KCcgJykgOiBzKS5mbGF0KCk7XG4gICAgICAgIGJ1bGxldEVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlc1RvUmVtb3ZlKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgYnVsbGV0cy5mb3JFYWNoKGJ1bGxldCA9PiB7XG4gICAgICAgICAgY29uc3QgYnVsbGV0SW5kZXggPSBlbGVtZW50SW5kZXgoYnVsbGV0KTtcbiAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKC4uLnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGJ1bGxldC5zZXRBdHRyaWJ1dGUoJ3BhcnQnLCAnYnVsbGV0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA+PSBmaXJzdEluZGV4ICYmIGJ1bGxldEluZGV4IDw9IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCguLi5gJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW1haW5gLnNwbGl0KCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID09PSBmaXJzdEluZGV4KSB7XG4gICAgICAgICAgICAgIHNldFNpZGVCdWxsZXRzKGJ1bGxldCwgJ3ByZXYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgIHNldFNpZGVCdWxsZXRzKGJ1bGxldCwgJ25leHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYnVsbGV0ID0gYnVsbGV0c1tjdXJyZW50XTtcbiAgICAgICAgaWYgKGJ1bGxldCkge1xuICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKC4uLnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVyLmlzRWxlbWVudCkge1xuICAgICAgICAgIGJ1bGxldHMuZm9yRWFjaCgoYnVsbGV0RWwsIGJ1bGxldEluZGV4KSA9PiB7XG4gICAgICAgICAgICBidWxsZXRFbC5zZXRBdHRyaWJ1dGUoJ3BhcnQnLCBidWxsZXRJbmRleCA9PT0gY3VycmVudCA/ICdidWxsZXQtYWN0aXZlJyA6ICdidWxsZXQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzW2ZpcnN0SW5kZXhdO1xuICAgICAgICAgIGNvbnN0IGxhc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzW2xhc3RJbmRleF07XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChidWxsZXRzW2ldKSB7XG4gICAgICAgICAgICAgIGJ1bGxldHNbaV0uY2xhc3NMaXN0LmFkZCguLi5gJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW1haW5gLnNwbGl0KCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRTaWRlQnVsbGV0cyhmaXJzdERpc3BsYXllZEJ1bGxldCwgJ3ByZXYnKTtcbiAgICAgICAgICBzZXRTaWRlQnVsbGV0cyhsYXN0RGlzcGxheWVkQnVsbGV0LCAnbmV4dCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgIGNvbnN0IGR5bmFtaWNCdWxsZXRzTGVuZ3RoID0gTWF0aC5taW4oYnVsbGV0cy5sZW5ndGgsIHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgKyA0KTtcbiAgICAgICAgY29uc3QgYnVsbGV0c09mZnNldCA9IChidWxsZXRTaXplICogZHluYW1pY0J1bGxldHNMZW5ndGggLSBidWxsZXRTaXplKSAvIDIgLSBtaWRJbmRleCAqIGJ1bGxldFNpemU7XG4gICAgICAgIGNvbnN0IG9mZnNldFByb3AgPSBydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICBidWxsZXRzLmZvckVhY2goYnVsbGV0ID0+IHtcbiAgICAgICAgICBidWxsZXQuc3R5bGVbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gb2Zmc2V0UHJvcCA6ICd0b3AnXSA9IGAke2J1bGxldHNPZmZzZXR9cHhgO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWwuZm9yRWFjaCgoc3ViRWwsIHN1YkVsSW5kZXgpID0+IHtcbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgICBzdWJFbC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy5jdXJyZW50Q2xhc3MpKS5mb3JFYWNoKGZyYWN0aW9uRWwgPT4ge1xuICAgICAgICAgIGZyYWN0aW9uRWwudGV4dENvbnRlbnQgPSBwYXJhbXMuZm9ybWF0RnJhY3Rpb25DdXJyZW50KGN1cnJlbnQgKyAxKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1YkVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3Nlc1RvU2VsZWN0b3IocGFyYW1zLnRvdGFsQ2xhc3MpKS5mb3JFYWNoKHRvdGFsRWwgPT4ge1xuICAgICAgICAgIHRvdGFsRWwudGV4dENvbnRlbnQgPSBwYXJhbXMuZm9ybWF0RnJhY3Rpb25Ub3RhbCh0b3RhbCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInKSB7XG4gICAgICAgIGxldCBwcm9ncmVzc2JhckRpcmVjdGlvbjtcbiAgICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAgICAgcHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzY2FsZSA9IChjdXJyZW50ICsgMSkgLyB0b3RhbDtcbiAgICAgICAgbGV0IHNjYWxlWCA9IDE7XG4gICAgICAgIGxldCBzY2FsZVkgPSAxO1xuICAgICAgICBpZiAocHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHNjYWxlWCA9IHNjYWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjYWxlWSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIHN1YkVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3Nlc1RvU2VsZWN0b3IocGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzKSkuZm9yRWFjaChwcm9ncmVzc0VsID0+IHtcbiAgICAgICAgICBwcm9ncmVzc0VsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGVYKCR7c2NhbGVYfSkgc2NhbGVZKCR7c2NhbGVZfSlgO1xuICAgICAgICAgIHByb2dyZXNzRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7c3dpcGVyLnBhcmFtcy5zcGVlZH1tc2A7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnY3VzdG9tJyAmJiBwYXJhbXMucmVuZGVyQ3VzdG9tKSB7XG4gICAgICAgIHNldElubmVySFRNTChzdWJFbCwgcGFyYW1zLnJlbmRlckN1c3RvbShzd2lwZXIsIGN1cnJlbnQgKyAxLCB0b3RhbCkpO1xuICAgICAgICBpZiAoc3ViRWxJbmRleCA9PT0gMCkgZW1pdCgncGFnaW5hdGlvblJlbmRlcicsIHN1YkVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdWJFbEluZGV4ID09PSAwKSBlbWl0KCdwYWdpbmF0aW9uUmVuZGVyJywgc3ViRWwpO1xuICAgICAgICBlbWl0KCdwYWdpbmF0aW9uVXBkYXRlJywgc3ViRWwpO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3Rbc3dpcGVyLmlzTG9ja2VkID8gJ2FkZCcgOiAncmVtb3ZlJ10ocGFyYW1zLmxvY2tDbGFzcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIC8vIFJlbmRlciBDb250YWluZXJcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKGlzUGFnaW5hdGlvbkRpc2FibGVkKCkpIHJldHVybjtcbiAgICBjb25zdCBzbGlkZXNMZW5ndGggPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQucm93cyA+IDEgPyBzd2lwZXIuc2xpZGVzLmxlbmd0aCAvIE1hdGguY2VpbChzd2lwZXIucGFyYW1zLmdyaWQucm93cykgOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICBsZXQgZWwgPSBzd2lwZXIucGFnaW5hdGlvbi5lbDtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBsZXQgcGFnaW5hdGlvbkhUTUwgPSAnJztcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJykge1xuICAgICAgbGV0IG51bWJlck9mQnVsbGV0cyA9IHN3aXBlci5wYXJhbXMubG9vcCA/IE1hdGguY2VpbChzbGlkZXNMZW5ndGggLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSAmJiBzd2lwZXIucGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQgJiYgbnVtYmVyT2ZCdWxsZXRzID4gc2xpZGVzTGVuZ3RoKSB7XG4gICAgICAgIG51bWJlck9mQnVsbGV0cyA9IHNsaWRlc0xlbmd0aDtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5yZW5kZXJCdWxsZXQpIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSBwYXJhbXMucmVuZGVyQnVsbGV0LmNhbGwoc3dpcGVyLCBpLCBwYXJhbXMuYnVsbGV0Q2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9IGA8JHtwYXJhbXMuYnVsbGV0RWxlbWVudH0gJHtzd2lwZXIuaXNFbGVtZW50ID8gJ3BhcnQ9XCJidWxsZXRcIicgOiAnJ30gY2xhc3M9XCIke3BhcmFtcy5idWxsZXRDbGFzc31cIj48LyR7cGFyYW1zLmJ1bGxldEVsZW1lbnR9PmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICBpZiAocGFyYW1zLnJlbmRlckZyYWN0aW9uKSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gcGFyYW1zLnJlbmRlckZyYWN0aW9uLmNhbGwoc3dpcGVyLCBwYXJhbXMuY3VycmVudENsYXNzLCBwYXJhbXMudG90YWxDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IGA8c3BhbiBjbGFzcz1cIiR7cGFyYW1zLmN1cnJlbnRDbGFzc31cIj48L3NwYW4+YCArICcgLyAnICsgYDxzcGFuIGNsYXNzPVwiJHtwYXJhbXMudG90YWxDbGFzc31cIj48L3NwYW4+YDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInKSB7XG4gICAgICBpZiAocGFyYW1zLnJlbmRlclByb2dyZXNzYmFyKSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gcGFyYW1zLnJlbmRlclByb2dyZXNzYmFyLmNhbGwoc3dpcGVyLCBwYXJhbXMucHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBgPHNwYW4gY2xhc3M9XCIke3BhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzc31cIj48L3NwYW4+YDtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyA9IFtdO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgaWYgKHBhcmFtcy50eXBlICE9PSAnY3VzdG9tJykge1xuICAgICAgICBzZXRJbm5lckhUTUwoc3ViRWwsIHBhZ2luYXRpb25IVE1MIHx8ICcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnKSB7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMucHVzaCguLi5zdWJFbC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy5idWxsZXRDbGFzcykpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocGFyYW1zLnR5cGUgIT09ICdjdXN0b20nKSB7XG4gICAgICBlbWl0KCdwYWdpbmF0aW9uUmVuZGVyJywgZWxbMF0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbiA9IGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQoc3dpcGVyLCBzd2lwZXIub3JpZ2luYWxQYXJhbXMucGFnaW5hdGlvbiwgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLCB7XG4gICAgICBlbDogJ3N3aXBlci1wYWdpbmF0aW9uJ1xuICAgIH0pO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoIXBhcmFtcy5lbCkgcmV0dXJuO1xuICAgIGxldCBlbDtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycgJiYgc3dpcGVyLmlzRWxlbWVudCkge1xuICAgICAgZWwgPSBzd2lwZXIuZWwucXVlcnlTZWxlY3RvcihwYXJhbXMuZWwpO1xuICAgIH1cbiAgICBpZiAoIWVsICYmIHR5cGVvZiBwYXJhbXMuZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbCA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcmFtcy5lbCldO1xuICAgIH1cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IHBhcmFtcy5lbDtcbiAgICB9XG4gICAgaWYgKCFlbCB8fCBlbC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJyAmJiBBcnJheS5pc0FycmF5KGVsKSAmJiBlbC5sZW5ndGggPiAxKSB7XG4gICAgICBlbCA9IFsuLi5zd2lwZXIuZWwucXVlcnlTZWxlY3RvckFsbChwYXJhbXMuZWwpXTtcbiAgICAgIC8vIGNoZWNrIGlmIGl0IGJlbG9uZ3MgdG8gYW5vdGhlciBuZXN0ZWQgU3dpcGVyXG4gICAgICBpZiAoZWwubGVuZ3RoID4gMSkge1xuICAgICAgICBlbCA9IGVsLmZpbmQoc3ViRWwgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50UGFyZW50cyhzdWJFbCwgJy5zd2lwZXInKVswXSAhPT0gc3dpcGVyLmVsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbCkgJiYgZWwubGVuZ3RoID09PSAxKSBlbCA9IGVsWzBdO1xuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLnBhZ2luYXRpb24sIHtcbiAgICAgIGVsXG4gICAgfSk7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJyAmJiBwYXJhbXMuY2xpY2thYmxlKSB7XG4gICAgICAgIHN1YkVsLmNsYXNzTGlzdC5hZGQoLi4uKHBhcmFtcy5jbGlja2FibGVDbGFzcyB8fCAnJykuc3BsaXQoJyAnKSk7XG4gICAgICB9XG4gICAgICBzdWJFbC5jbGFzc0xpc3QuYWRkKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuICAgICAgc3ViRWwuY2xhc3NMaXN0LmFkZChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBwYXJhbXMuaG9yaXpvbnRhbENsYXNzIDogcGFyYW1zLnZlcnRpY2FsQ2xhc3MpO1xuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgIHN1YkVsLmNsYXNzTGlzdC5hZGQoYCR7cGFyYW1zLm1vZGlmaWVyQ2xhc3N9JHtwYXJhbXMudHlwZX0tZHluYW1pY2ApO1xuICAgICAgICBkeW5hbWljQnVsbGV0SW5kZXggPSAwO1xuICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyA8IDEpIHtcbiAgICAgICAgICBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInICYmIHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAgIHN1YkVsLmNsYXNzTGlzdC5hZGQocGFyYW1zLnByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgICBzdWJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQnVsbGV0Q2xpY2spO1xuICAgICAgfVxuICAgICAgaWYgKCFzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3QuYWRkKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmIChpc1BhZ2luYXRpb25EaXNhYmxlZCgpKSByZXR1cm47XG4gICAgbGV0IGVsID0gc3dpcGVyLnBhZ2luYXRpb24uZWw7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3QucmVtb3ZlKHBhcmFtcy5oaWRkZW5DbGFzcyk7XG4gICAgICAgIHN1YkVsLmNsYXNzTGlzdC5yZW1vdmUocGFyYW1zLm1vZGlmaWVyQ2xhc3MgKyBwYXJhbXMudHlwZSk7XG4gICAgICAgIHN1YkVsLmNsYXNzTGlzdC5yZW1vdmUoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gcGFyYW1zLmhvcml6b250YWxDbGFzcyA6IHBhcmFtcy52ZXJ0aWNhbENsYXNzKTtcbiAgICAgICAgaWYgKHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICAgICBzdWJFbC5jbGFzc0xpc3QucmVtb3ZlKC4uLihwYXJhbXMuY2xpY2thYmxlQ2xhc3MgfHwgJycpLnNwbGl0KCcgJykpO1xuICAgICAgICAgIHN1YkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25CdWxsZXRDbGljayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cykgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5mb3JFYWNoKHN1YkVsID0+IHN1YkVsLmNsYXNzTGlzdC5yZW1vdmUoLi4ucGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzLnNwbGl0KCcgJykpKTtcbiAgfVxuICBvbignY2hhbmdlRGlyZWN0aW9uJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhZ2luYXRpb24gfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsKSByZXR1cm47XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGxldCB7XG4gICAgICBlbFxuICAgIH0gPSBzd2lwZXIucGFnaW5hdGlvbjtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLmNsYXNzTGlzdC5yZW1vdmUocGFyYW1zLmhvcml6b250YWxDbGFzcywgcGFyYW1zLnZlcnRpY2FsQ2xhc3MpO1xuICAgICAgc3ViRWwuY2xhc3NMaXN0LmFkZChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBwYXJhbXMuaG9yaXpvbnRhbENsYXNzIDogcGFyYW1zLnZlcnRpY2FsQ2xhc3MpO1xuICAgIH0pO1xuICB9KTtcbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBkaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXQoKTtcbiAgICAgIHJlbmRlcigpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2FjdGl2ZUluZGV4Q2hhbmdlJywgKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbmFwSW5kZXhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignc25hcEdyaWRMZW5ndGhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgcmVuZGVyKCk7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBkZXN0cm95KCk7XG4gIH0pO1xuICBvbignZW5hYmxlIGRpc2FibGUnLCAoKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGVsXG4gICAgfSA9IHN3aXBlci5wYWdpbmF0aW9uO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHN1YkVsLmNsYXNzTGlzdFtzd2lwZXIuZW5hYmxlZCA/ICdyZW1vdmUnIDogJ2FkZCddKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5sb2NrQ2xhc3MpKTtcbiAgICB9XG4gIH0pO1xuICBvbignbG9jayB1bmxvY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignY2xpY2snLCAoX3MsIGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoc3dpcGVyLnBhZ2luYXRpb24uZWwpO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGVPbkNsaWNrICYmIGVsICYmIGVsLmxlbmd0aCA+IDAgJiYgIXRhcmdldEVsLmNsYXNzTGlzdC5jb250YWlucyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpKSB7XG4gICAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgKHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCAmJiB0YXJnZXRFbCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsIHx8IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCAmJiB0YXJnZXRFbCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKSkgcmV0dXJuO1xuICAgICAgY29uc3QgaXNIaWRkZW4gPSBlbFswXS5jbGFzc0xpc3QuY29udGFpbnMoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgIGlmIChpc0hpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICBlbWl0KCdwYWdpbmF0aW9uU2hvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW1pdCgncGFnaW5hdGlvbkhpZGUnKTtcbiAgICAgIH1cbiAgICAgIGVsLmZvckVhY2goc3ViRWwgPT4gc3ViRWwuY2xhc3NMaXN0LnRvZ2dsZShzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBlbmFibGUgPSAoKSA9PiB7XG4gICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5yZW1vdmUoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLnBhZ2luYXRpb25EaXNhYmxlZENsYXNzKTtcbiAgICBsZXQge1xuICAgICAgZWxcbiAgICB9ID0gc3dpcGVyLnBhZ2luYXRpb247XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICAgIGVsLmZvckVhY2goc3ViRWwgPT4gc3ViRWwuY2xhc3NMaXN0LnJlbW92ZShzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24ucGFnaW5hdGlvbkRpc2FibGVkQ2xhc3MpKTtcbiAgICB9XG4gICAgaW5pdCgpO1xuICAgIHJlbmRlcigpO1xuICAgIHVwZGF0ZSgpO1xuICB9O1xuICBjb25zdCBkaXNhYmxlID0gKCkgPT4ge1xuICAgIHN3aXBlci5lbC5jbGFzc0xpc3QuYWRkKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5wYWdpbmF0aW9uRGlzYWJsZWRDbGFzcyk7XG4gICAgbGV0IHtcbiAgICAgIGVsXG4gICAgfSA9IHN3aXBlci5wYWdpbmF0aW9uO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHN1YkVsLmNsYXNzTGlzdC5hZGQoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLnBhZ2luYXRpb25EaXNhYmxlZENsYXNzKSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKTtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIucGFnaW5hdGlvbiwge1xuICAgIGVuYWJsZSxcbiAgICBkaXNhYmxlLFxuICAgIHJlbmRlcixcbiAgICB1cGRhdGUsXG4gICAgaW5pdCxcbiAgICBkZXN0cm95XG4gIH0pO1xufVxuXG5leHBvcnQgeyBQYWdpbmF0aW9uIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGcgYXMgZ2V0RG9jdW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzJztcbmltcG9ydCB7IG0gYXMgbWFrZUVsZW1lbnRzQXJyYXksIGsgYXMgY2xhc3Nlc1RvVG9rZW5zLCBjIGFzIGNyZWF0ZUVsZW1lbnQsIG4gYXMgbmV4dFRpY2ssIGYgYXMgZWxlbWVudE9mZnNldCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5tanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIH0gZnJvbSAnLi4vc2hhcmVkL2NyZWF0ZS1lbGVtZW50LWlmLW5vdC1kZWZpbmVkLm1qcyc7XG5pbXBvcnQgeyBjIGFzIGNsYXNzZXNUb1NlbGVjdG9yIH0gZnJvbSAnLi4vc2hhcmVkL2NsYXNzZXMtdG8tc2VsZWN0b3IubWpzJztcblxuZnVuY3Rpb24gU2Nyb2xsYmFyKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgbGV0IGlzVG91Y2hlZCA9IGZhbHNlO1xuICBsZXQgdGltZW91dCA9IG51bGw7XG4gIGxldCBkcmFnVGltZW91dCA9IG51bGw7XG4gIGxldCBkcmFnU3RhcnRQb3M7XG4gIGxldCBkcmFnU2l6ZTtcbiAgbGV0IHRyYWNrU2l6ZTtcbiAgbGV0IGRpdmlkZXI7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgc2Nyb2xsYmFyOiB7XG4gICAgICBlbDogbnVsbCxcbiAgICAgIGRyYWdTaXplOiAnYXV0bycsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBzbmFwT25SZWxlYXNlOiB0cnVlLFxuICAgICAgbG9ja0NsYXNzOiAnc3dpcGVyLXNjcm9sbGJhci1sb2NrJyxcbiAgICAgIGRyYWdDbGFzczogJ3N3aXBlci1zY3JvbGxiYXItZHJhZycsXG4gICAgICBzY3JvbGxiYXJEaXNhYmxlZENsYXNzOiAnc3dpcGVyLXNjcm9sbGJhci1kaXNhYmxlZCcsXG4gICAgICBob3Jpem9udGFsQ2xhc3M6IGBzd2lwZXItc2Nyb2xsYmFyLWhvcml6b250YWxgLFxuICAgICAgdmVydGljYWxDbGFzczogYHN3aXBlci1zY3JvbGxiYXItdmVydGljYWxgXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLnNjcm9sbGJhciA9IHtcbiAgICBlbDogbnVsbCxcbiAgICBkcmFnRWw6IG51bGxcbiAgfTtcbiAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwgfHwgIXN3aXBlci5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBzY3JvbGxiYXIsXG4gICAgICBydGxUcmFuc2xhdGU6IHJ0bFxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3Qge1xuICAgICAgZHJhZ0VsLFxuICAgICAgZWxcbiAgICB9ID0gc2Nyb2xsYmFyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIGNvbnN0IHByb2dyZXNzID0gc3dpcGVyLnBhcmFtcy5sb29wID8gc3dpcGVyLnByb2dyZXNzTG9vcCA6IHN3aXBlci5wcm9ncmVzcztcbiAgICBsZXQgbmV3U2l6ZSA9IGRyYWdTaXplO1xuICAgIGxldCBuZXdQb3MgPSAodHJhY2tTaXplIC0gZHJhZ1NpemUpICogcHJvZ3Jlc3M7XG4gICAgaWYgKHJ0bCkge1xuICAgICAgbmV3UG9zID0gLW5ld1BvcztcbiAgICAgIGlmIChuZXdQb3MgPiAwKSB7XG4gICAgICAgIG5ld1NpemUgPSBkcmFnU2l6ZSAtIG5ld1BvcztcbiAgICAgICAgbmV3UG9zID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoLW5ld1BvcyArIGRyYWdTaXplID4gdHJhY2tTaXplKSB7XG4gICAgICAgIG5ld1NpemUgPSB0cmFja1NpemUgKyBuZXdQb3M7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuZXdQb3MgPCAwKSB7XG4gICAgICBuZXdTaXplID0gZHJhZ1NpemUgKyBuZXdQb3M7XG4gICAgICBuZXdQb3MgPSAwO1xuICAgIH0gZWxzZSBpZiAobmV3UG9zICsgZHJhZ1NpemUgPiB0cmFja1NpemUpIHtcbiAgICAgIG5ld1NpemUgPSB0cmFja1NpemUgLSBuZXdQb3M7XG4gICAgfVxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIGRyYWdFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtuZXdQb3N9cHgsIDAsIDApYDtcbiAgICAgIGRyYWdFbC5zdHlsZS53aWR0aCA9IGAke25ld1NpemV9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnRWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDBweCwgJHtuZXdQb3N9cHgsIDApYDtcbiAgICAgIGRyYWdFbC5zdHlsZS5oZWlnaHQgPSBgJHtuZXdTaXplfXB4YDtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5oaWRlKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICc0MDBtcyc7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwgfHwgIXN3aXBlci5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICBzd2lwZXIuc2Nyb2xsYmFyLmRyYWdFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsIHx8ICFzd2lwZXIuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCB7XG4gICAgICBkcmFnRWwsXG4gICAgICBlbFxuICAgIH0gPSBzY3JvbGxiYXI7XG4gICAgZHJhZ0VsLnN0eWxlLndpZHRoID0gJyc7XG4gICAgZHJhZ0VsLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgIHRyYWNrU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGVsLm9mZnNldFdpZHRoIDogZWwub2Zmc2V0SGVpZ2h0O1xuICAgIGRpdmlkZXIgPSBzd2lwZXIuc2l6ZSAvIChzd2lwZXIudmlydHVhbFNpemUgKyBzd2lwZXIucGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSAtIChzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLnNuYXBHcmlkWzBdIDogMCkpO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICBkcmFnU2l6ZSA9IHRyYWNrU2l6ZSAqIGRpdmlkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdTaXplID0gcGFyc2VJbnQoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ1NpemUsIDEwKTtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgZHJhZ0VsLnN0eWxlLndpZHRoID0gYCR7ZHJhZ1NpemV9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnRWwuc3R5bGUuaGVpZ2h0ID0gYCR7ZHJhZ1NpemV9cHhgO1xuICAgIH1cbiAgICBpZiAoZGl2aWRlciA+PSAxKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5oaWRlKSB7XG4gICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgc2Nyb2xsYmFyLmVsLmNsYXNzTGlzdFtzd2lwZXIuaXNMb2NrZWQgPyAnYWRkJyA6ICdyZW1vdmUnXShzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5sb2NrQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb24oZSkge1xuICAgIHJldHVybiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBlLmNsaWVudFggOiBlLmNsaWVudFk7XG4gIH1cbiAgZnVuY3Rpb24gc2V0RHJhZ1Bvc2l0aW9uKGUpIHtcbiAgICBjb25zdCB7XG4gICAgICBzY3JvbGxiYXIsXG4gICAgICBydGxUcmFuc2xhdGU6IHJ0bFxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3Qge1xuICAgICAgZWxcbiAgICB9ID0gc2Nyb2xsYmFyO1xuICAgIGxldCBwb3NpdGlvblJhdGlvO1xuICAgIHBvc2l0aW9uUmF0aW8gPSAoZ2V0UG9pbnRlclBvc2l0aW9uKGUpIC0gZWxlbWVudE9mZnNldChlbClbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCddIC0gKGRyYWdTdGFydFBvcyAhPT0gbnVsbCA/IGRyYWdTdGFydFBvcyA6IGRyYWdTaXplIC8gMikpIC8gKHRyYWNrU2l6ZSAtIGRyYWdTaXplKTtcbiAgICBwb3NpdGlvblJhdGlvID0gTWF0aC5tYXgoTWF0aC5taW4ocG9zaXRpb25SYXRpbywgMSksIDApO1xuICAgIGlmIChydGwpIHtcbiAgICAgIHBvc2l0aW9uUmF0aW8gPSAxIC0gcG9zaXRpb25SYXRpbztcbiAgICB9XG4gICAgY29uc3QgcG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgKyAoc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAqIHBvc2l0aW9uUmF0aW87XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHBvc2l0aW9uKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHBvc2l0aW9uKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICB9XG4gIGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcbiAgICBjb25zdCB7XG4gICAgICBzY3JvbGxiYXIsXG4gICAgICB3cmFwcGVyRWxcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgZHJhZ0VsXG4gICAgfSA9IHNjcm9sbGJhcjtcbiAgICBpc1RvdWNoZWQgPSB0cnVlO1xuICAgIGRyYWdTdGFydFBvcyA9IGUudGFyZ2V0ID09PSBkcmFnRWwgPyBnZXRQb2ludGVyUG9zaXRpb24oZSkgLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJ10gOiBudWxsO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHdyYXBwZXJFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMTAwbXMnO1xuICAgIGRyYWdFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMTAwbXMnO1xuICAgIHNldERyYWdQb3NpdGlvbihlKTtcbiAgICBjbGVhclRpbWVvdXQoZHJhZ1RpbWVvdXQpO1xuICAgIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwbXMnO1xuICAgIGlmIChwYXJhbXMuaGlkZSkge1xuICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGVbJ3Njcm9sbC1zbmFwLXR5cGUnXSA9ICdub25lJztcbiAgICB9XG4gICAgZW1pdCgnc2Nyb2xsYmFyRHJhZ1N0YXJ0JywgZSk7XG4gIH1cbiAgZnVuY3Rpb24gb25EcmFnTW92ZShlKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyLFxuICAgICAgd3JhcHBlckVsXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGRyYWdFbFxuICAgIH0gPSBzY3JvbGxiYXI7XG4gICAgaWYgKCFpc1RvdWNoZWQpIHJldHVybjtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCAmJiBlLmNhbmNlbGFibGUpIGUucHJldmVudERlZmF1bHQoKTtlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICBzZXREcmFnUG9zaXRpb24oZSk7XG4gICAgd3JhcHBlckVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwbXMnO1xuICAgIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwbXMnO1xuICAgIGRyYWdFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMG1zJztcbiAgICBlbWl0KCdzY3JvbGxiYXJEcmFnTW92ZScsIGUpO1xuICB9XG4gIGZ1bmN0aW9uIG9uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyLFxuICAgICAgd3JhcHBlckVsXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCB7XG4gICAgICBlbFxuICAgIH0gPSBzY3JvbGxiYXI7XG4gICAgaWYgKCFpc1RvdWNoZWQpIHJldHVybjtcbiAgICBpc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlWydzY3JvbGwtc25hcC10eXBlJ10gPSAnJztcbiAgICAgIHdyYXBwZXJFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5oaWRlKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZHJhZ1RpbWVvdXQpO1xuICAgICAgZHJhZ1RpbWVvdXQgPSBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnNDAwbXMnO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIGVtaXQoJ3Njcm9sbGJhckRyYWdFbmQnLCBlKTtcbiAgICBpZiAocGFyYW1zLnNuYXBPblJlbGVhc2UpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBldmVudHMobWV0aG9kKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCBlbCA9IHNjcm9sbGJhci5lbDtcbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgY29uc3QgdGFyZ2V0ID0gZWw7XG4gICAgY29uc3QgYWN0aXZlTGlzdGVuZXIgPSBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgY29uc3QgcGFzc2l2ZUxpc3RlbmVyID0gcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICBjb25zdCBldmVudE1ldGhvZCA9IG1ldGhvZCA9PT0gJ29uJyA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgICB0YXJnZXRbZXZlbnRNZXRob2RdKCdwb2ludGVyZG93bicsIG9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgZG9jdW1lbnRbZXZlbnRNZXRob2RdKCdwb2ludGVybW92ZScsIG9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICBkb2N1bWVudFtldmVudE1ldGhvZF0oJ3BvaW50ZXJ1cCcsIG9uRHJhZ0VuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgfVxuICBmdW5jdGlvbiBlbmFibGVEcmFnZ2FibGUoKSB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIGV2ZW50cygnb24nKTtcbiAgfVxuICBmdW5jdGlvbiBkaXNhYmxlRHJhZ2dhYmxlKCkge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwgfHwgIXN3aXBlci5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICBldmVudHMoJ29mZicpO1xuICB9XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyLFxuICAgICAgZWw6IHN3aXBlckVsXG4gICAgfSA9IHN3aXBlcjtcbiAgICBzd2lwZXIucGFyYW1zLnNjcm9sbGJhciA9IGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQoc3dpcGVyLCBzd2lwZXIub3JpZ2luYWxQYXJhbXMuc2Nyb2xsYmFyLCBzd2lwZXIucGFyYW1zLnNjcm9sbGJhciwge1xuICAgICAgZWw6ICdzd2lwZXItc2Nyb2xsYmFyJ1xuICAgIH0pO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIGlmICghcGFyYW1zLmVsKSByZXR1cm47XG4gICAgbGV0IGVsO1xuICAgIGlmICh0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJyAmJiBzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgICBlbCA9IHN3aXBlci5lbC5xdWVyeVNlbGVjdG9yKHBhcmFtcy5lbCk7XG4gICAgfVxuICAgIGlmICghZWwgJiYgdHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJhbXMuZWwpO1xuICAgICAgaWYgKCFlbC5sZW5ndGgpIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCFlbCkge1xuICAgICAgZWwgPSBwYXJhbXMuZWw7XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBwYXJhbXMuZWwgPT09ICdzdHJpbmcnICYmIGVsLmxlbmd0aCA+IDEgJiYgc3dpcGVyRWwucXVlcnlTZWxlY3RvckFsbChwYXJhbXMuZWwpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZWwgPSBzd2lwZXJFbC5xdWVyeVNlbGVjdG9yKHBhcmFtcy5lbCk7XG4gICAgfVxuICAgIGlmIChlbC5sZW5ndGggPiAwKSBlbCA9IGVsWzBdO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gcGFyYW1zLmhvcml6b250YWxDbGFzcyA6IHBhcmFtcy52ZXJ0aWNhbENsYXNzKTtcbiAgICBsZXQgZHJhZ0VsO1xuICAgIGlmIChlbCkge1xuICAgICAgZHJhZ0VsID0gZWwucXVlcnlTZWxlY3RvcihjbGFzc2VzVG9TZWxlY3Rvcihzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnQ2xhc3MpKTtcbiAgICAgIGlmICghZHJhZ0VsKSB7XG4gICAgICAgIGRyYWdFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdDbGFzcyk7XG4gICAgICAgIGVsLmFwcGVuZChkcmFnRWwpO1xuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHNjcm9sbGJhciwge1xuICAgICAgZWwsXG4gICAgICBkcmFnRWxcbiAgICB9KTtcbiAgICBpZiAocGFyYW1zLmRyYWdnYWJsZSkge1xuICAgICAgZW5hYmxlRHJhZ2dhYmxlKCk7XG4gICAgfVxuICAgIGlmIChlbCkge1xuICAgICAgZWwuY2xhc3NMaXN0W3N3aXBlci5lbmFibGVkID8gJ3JlbW92ZScgOiAnYWRkJ10oLi4uY2xhc3Nlc1RvVG9rZW5zKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmxvY2tDbGFzcykpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIGNvbnN0IGVsID0gc3dpcGVyLnNjcm9sbGJhci5lbDtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlc1RvVG9rZW5zKHN3aXBlci5pc0hvcml6b250YWwoKSA/IHBhcmFtcy5ob3Jpem9udGFsQ2xhc3MgOiBwYXJhbXMudmVydGljYWxDbGFzcykpO1xuICAgIH1cbiAgICBkaXNhYmxlRHJhZ2dhYmxlKCk7XG4gIH1cbiAgb24oJ2NoYW5nZURpcmVjdGlvbicsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5zY3JvbGxiYXIgfHwgIXN3aXBlci5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcbiAgICBsZXQge1xuICAgICAgZWxcbiAgICB9ID0gc3dpcGVyLnNjcm9sbGJhcjtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLmNsYXNzTGlzdC5yZW1vdmUocGFyYW1zLmhvcml6b250YWxDbGFzcywgcGFyYW1zLnZlcnRpY2FsQ2xhc3MpO1xuICAgICAgc3ViRWwuY2xhc3NMaXN0LmFkZChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBwYXJhbXMuaG9yaXpvbnRhbENsYXNzIDogcGFyYW1zLnZlcnRpY2FsQ2xhc3MpO1xuICAgIH0pO1xuICB9KTtcbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdCgpO1xuICAgICAgdXBkYXRlU2l6ZSgpO1xuICAgICAgc2V0VHJhbnNsYXRlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ3VwZGF0ZSByZXNpemUgb2JzZXJ2ZXJVcGRhdGUgbG9jayB1bmxvY2sgY2hhbmdlRGlyZWN0aW9uJywgKCkgPT4ge1xuICAgIHVwZGF0ZVNpemUoKTtcbiAgfSk7XG4gIG9uKCdzZXRUcmFuc2xhdGUnLCAoKSA9PiB7XG4gICAgc2V0VHJhbnNsYXRlKCk7XG4gIH0pO1xuICBvbignc2V0VHJhbnNpdGlvbicsIChfcywgZHVyYXRpb24pID0+IHtcbiAgICBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfSk7XG4gIG9uKCdlbmFibGUgZGlzYWJsZScsICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBlbFxuICAgIH0gPSBzd2lwZXIuc2Nyb2xsYmFyO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuY2xhc3NMaXN0W3N3aXBlci5lbmFibGVkID8gJ3JlbW92ZScgOiAnYWRkJ10oLi4uY2xhc3Nlc1RvVG9rZW5zKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmxvY2tDbGFzcykpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGRlc3Ryb3koKTtcbiAgfSk7XG4gIGNvbnN0IGVuYWJsZSA9ICgpID0+IHtcbiAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzVG9Ub2tlbnMoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuc2Nyb2xsYmFyRGlzYWJsZWRDbGFzcykpO1xuICAgIGlmIChzd2lwZXIuc2Nyb2xsYmFyLmVsKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLmVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlc1RvVG9rZW5zKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLnNjcm9sbGJhckRpc2FibGVkQ2xhc3MpKTtcbiAgICB9XG4gICAgaW5pdCgpO1xuICAgIHVwZGF0ZVNpemUoKTtcbiAgICBzZXRUcmFuc2xhdGUoKTtcbiAgfTtcbiAgY29uc3QgZGlzYWJsZSA9ICgpID0+IHtcbiAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzVG9Ub2tlbnMoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuc2Nyb2xsYmFyRGlzYWJsZWRDbGFzcykpO1xuICAgIGlmIChzd2lwZXIuc2Nyb2xsYmFyLmVsKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLmVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlc1RvVG9rZW5zKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLnNjcm9sbGJhckRpc2FibGVkQ2xhc3MpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHN3aXBlci5zY3JvbGxiYXIsIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgICB1cGRhdGVTaXplLFxuICAgIHNldFRyYW5zbGF0ZSxcbiAgICBpbml0LFxuICAgIGRlc3Ryb3lcbiAgfSk7XG59XG5cbmV4cG9ydCB7IFNjcm9sbGJhciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBlIGFzIGVsZW1lbnRDaGlsZHJlbiB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBQYXJhbGxheCh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIHBhcmFsbGF4OiB7XG4gICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGVsZW1lbnRzU2VsZWN0b3IgPSAnW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlXSc7XG4gIGNvbnN0IHNldFRyYW5zZm9ybSA9IChlbCwgcHJvZ3Jlc3MpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBydGxcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHJ0bEZhY3RvciA9IHJ0bCA/IC0xIDogMTtcbiAgICBjb25zdCBwID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1wYXJhbGxheCcpIHx8ICcwJztcbiAgICBsZXQgeCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItcGFyYWxsYXgteCcpO1xuICAgIGxldCB5ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1wYXJhbGxheC15Jyk7XG4gICAgY29uc3Qgc2NhbGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlJyk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eScpO1xuICAgIGNvbnN0IHJvdGF0ZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItcGFyYWxsYXgtcm90YXRlJyk7XG4gICAgaWYgKHggfHwgeSkge1xuICAgICAgeCA9IHggfHwgJzAnO1xuICAgICAgeSA9IHkgfHwgJzAnO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICB4ID0gcDtcbiAgICAgIHkgPSAnMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgPSBwO1xuICAgICAgeCA9ICcwJztcbiAgICB9XG4gICAgaWYgKHguaW5kZXhPZignJScpID49IDApIHtcbiAgICAgIHggPSBgJHtwYXJzZUludCh4LCAxMCkgKiBwcm9ncmVzcyAqIHJ0bEZhY3Rvcn0lYDtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IGAke3ggKiBwcm9ncmVzcyAqIHJ0bEZhY3Rvcn1weGA7XG4gICAgfVxuICAgIGlmICh5LmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICB5ID0gYCR7cGFyc2VJbnQoeSwgMTApICogcHJvZ3Jlc3N9JWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgPSBgJHt5ICogcHJvZ3Jlc3N9cHhgO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wYWNpdHkgIT09ICd1bmRlZmluZWQnICYmIG9wYWNpdHkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRPcGFjaXR5ID0gb3BhY2l0eSAtIChvcGFjaXR5IC0gMSkgKiAoMSAtIE1hdGguYWJzKHByb2dyZXNzKSk7XG4gICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG4gICAgfVxuICAgIGxldCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt4fSwgJHt5fSwgMHB4KWA7XG4gICAgaWYgKHR5cGVvZiBzY2FsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2NhbGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTY2FsZSA9IHNjYWxlIC0gKHNjYWxlIC0gMSkgKiAoMSAtIE1hdGguYWJzKHByb2dyZXNzKSk7XG4gICAgICB0cmFuc2Zvcm0gKz0gYCBzY2FsZSgke2N1cnJlbnRTY2FsZX0pYDtcbiAgICB9XG4gICAgaWYgKHJvdGF0ZSAmJiB0eXBlb2Ygcm90YXRlICE9PSAndW5kZWZpbmVkJyAmJiByb3RhdGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRSb3RhdGUgPSByb3RhdGUgKiBwcm9ncmVzcyAqIC0xO1xuICAgICAgdHJhbnNmb3JtICs9IGAgcm90YXRlKCR7Y3VycmVudFJvdGF0ZX1kZWcpYDtcbiAgICB9XG4gICAgZWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9O1xuICBjb25zdCBzZXRUcmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBzbGlkZXMsXG4gICAgICBwcm9ncmVzcyxcbiAgICAgIHNuYXBHcmlkLFxuICAgICAgaXNFbGVtZW50XG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCBlbGVtZW50cyA9IGVsZW1lbnRDaGlsZHJlbihlbCwgZWxlbWVudHNTZWxlY3Rvcik7XG4gICAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goLi4uZWxlbWVudENoaWxkcmVuKHN3aXBlci5ob3N0RWwsIGVsZW1lbnRzU2VsZWN0b3IpKTtcbiAgICB9XG4gICAgZWxlbWVudHMuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzZXRUcmFuc2Zvcm0oc3ViRWwsIHByb2dyZXNzKTtcbiAgICB9KTtcbiAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGVFbCwgc2xpZGVJbmRleCkgPT4ge1xuICAgICAgbGV0IHNsaWRlUHJvZ3Jlc3MgPSBzbGlkZUVsLnByb2dyZXNzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nKSB7XG4gICAgICAgIHNsaWRlUHJvZ3Jlc3MgKz0gTWF0aC5jZWlsKHNsaWRlSW5kZXggLyAyKSAtIHByb2dyZXNzICogKHNuYXBHcmlkLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgICAgc2xpZGVQcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHNsaWRlUHJvZ3Jlc3MsIC0xKSwgMSk7XG4gICAgICBzbGlkZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoYCR7ZWxlbWVudHNTZWxlY3Rvcn0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1yb3RhdGVdYCkuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICAgIHNldFRyYW5zZm9ybShzdWJFbCwgc2xpZGVQcm9ncmVzcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgc2V0VHJhbnNpdGlvbiA9IChkdXJhdGlvbiA9IHN3aXBlci5wYXJhbXMuc3BlZWQpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGhvc3RFbFxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbLi4uZWwucXVlcnlTZWxlY3RvckFsbChlbGVtZW50c1NlbGVjdG9yKV07XG4gICAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goLi4uaG9zdEVsLnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHNTZWxlY3RvcikpO1xuICAgIH1cbiAgICBlbGVtZW50cy5mb3JFYWNoKHBhcmFsbGF4RWwgPT4ge1xuICAgICAgbGV0IHBhcmFsbGF4RHVyYXRpb24gPSBwYXJzZUludChwYXJhbGxheEVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItcGFyYWxsYXgtZHVyYXRpb24nKSwgMTApIHx8IGR1cmF0aW9uO1xuICAgICAgaWYgKGR1cmF0aW9uID09PSAwKSBwYXJhbGxheER1cmF0aW9uID0gMDtcbiAgICAgIHBhcmFsbGF4RWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7cGFyYWxsYXhEdXJhdGlvbn1tc2A7XG4gICAgfSk7XG4gIH07XG4gIG9uKCdiZWZvcmVJbml0JywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkKSByZXR1cm47XG4gICAgc3dpcGVyLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICBzd2lwZXIub3JpZ2luYWxQYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gIH0pO1xuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCkgcmV0dXJuO1xuICAgIHNldFRyYW5zbGF0ZSgpO1xuICB9KTtcbiAgb24oJ3NldFRyYW5zbGF0ZScsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCkgcmV0dXJuO1xuICAgIHNldFRyYW5zbGF0ZSgpO1xuICB9KTtcbiAgb24oJ3NldFRyYW5zaXRpb24nLCAoX3N3aXBlciwgZHVyYXRpb24pID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCkgcmV0dXJuO1xuICAgIHNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgUGFyYWxsYXggYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgYSBhcyBnZXRXaW5kb3cgfSBmcm9tICcuLi9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzJztcbmltcG9ydCB7IGUgYXMgZWxlbWVudENoaWxkcmVuLCBkIGFzIGVsZW1lbnRQYXJlbnRzLCBmIGFzIGVsZW1lbnRPZmZzZXQsIGwgYXMgZ2V0VHJhbnNsYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbmZ1bmN0aW9uIFpvb20oe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgem9vbToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBsaW1pdFRvT3JpZ2luYWxTaXplOiBmYWxzZSxcbiAgICAgIG1heFJhdGlvOiAzLFxuICAgICAgbWluUmF0aW86IDEsXG4gICAgICBwYW5Pbk1vdXNlTW92ZTogZmFsc2UsXG4gICAgICB0b2dnbGU6IHRydWUsXG4gICAgICBjb250YWluZXJDbGFzczogJ3N3aXBlci16b29tLWNvbnRhaW5lcicsXG4gICAgICB6b29tZWRTbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXpvb21lZCdcbiAgICB9XG4gIH0pO1xuICBzd2lwZXIuem9vbSA9IHtcbiAgICBlbmFibGVkOiBmYWxzZVxuICB9O1xuICBsZXQgY3VycmVudFNjYWxlID0gMTtcbiAgbGV0IGlzU2NhbGluZyA9IGZhbHNlO1xuICBsZXQgaXNQYW5uaW5nV2l0aE1vdXNlID0gZmFsc2U7XG4gIGxldCBtb3VzZVBhblN0YXJ0ID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuICBjb25zdCBtb3VzZVBhblNlbnNpdGl2aXR5ID0gLTM7IC8vIE5lZ2F0aXZlIHRvIGludmVydCBwYW4gZGlyZWN0aW9uXG4gIGxldCBmYWtlR2VzdHVyZVRvdWNoZWQ7XG4gIGxldCBmYWtlR2VzdHVyZU1vdmVkO1xuICBjb25zdCBldkNhY2hlID0gW107XG4gIGNvbnN0IGdlc3R1cmUgPSB7XG4gICAgb3JpZ2luWDogMCxcbiAgICBvcmlnaW5ZOiAwLFxuICAgIHNsaWRlRWw6IHVuZGVmaW5lZCxcbiAgICBzbGlkZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgc2xpZGVIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICBpbWFnZUVsOiB1bmRlZmluZWQsXG4gICAgaW1hZ2VXcmFwRWw6IHVuZGVmaW5lZCxcbiAgICBtYXhSYXRpbzogM1xuICB9O1xuICBjb25zdCBpbWFnZSA9IHtcbiAgICBpc1RvdWNoZWQ6IHVuZGVmaW5lZCxcbiAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgY3VycmVudFg6IHVuZGVmaW5lZCxcbiAgICBjdXJyZW50WTogdW5kZWZpbmVkLFxuICAgIG1pblg6IHVuZGVmaW5lZCxcbiAgICBtaW5ZOiB1bmRlZmluZWQsXG4gICAgbWF4WDogdW5kZWZpbmVkLFxuICAgIG1heFk6IHVuZGVmaW5lZCxcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgIHN0YXJ0WDogdW5kZWZpbmVkLFxuICAgIHN0YXJ0WTogdW5kZWZpbmVkLFxuICAgIHRvdWNoZXNTdGFydDoge30sXG4gICAgdG91Y2hlc0N1cnJlbnQ6IHt9XG4gIH07XG4gIGNvbnN0IHZlbG9jaXR5ID0ge1xuICAgIHg6IHVuZGVmaW5lZCxcbiAgICB5OiB1bmRlZmluZWQsXG4gICAgcHJldlBvc2l0aW9uWDogdW5kZWZpbmVkLFxuICAgIHByZXZQb3NpdGlvblk6IHVuZGVmaW5lZCxcbiAgICBwcmV2VGltZTogdW5kZWZpbmVkXG4gIH07XG4gIGxldCBzY2FsZSA9IDE7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzd2lwZXIuem9vbSwgJ3NjYWxlJywge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9LFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgaWYgKHNjYWxlICE9PSB2YWx1ZSkge1xuICAgICAgICBjb25zdCBpbWFnZUVsID0gZ2VzdHVyZS5pbWFnZUVsO1xuICAgICAgICBjb25zdCBzbGlkZUVsID0gZ2VzdHVyZS5zbGlkZUVsO1xuICAgICAgICBlbWl0KCd6b29tQ2hhbmdlJywgdmFsdWUsIGltYWdlRWwsIHNsaWRlRWwpO1xuICAgICAgfVxuICAgICAgc2NhbGUgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuICBmdW5jdGlvbiBnZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKCkge1xuICAgIGlmIChldkNhY2hlLmxlbmd0aCA8IDIpIHJldHVybiAxO1xuICAgIGNvbnN0IHgxID0gZXZDYWNoZVswXS5wYWdlWDtcbiAgICBjb25zdCB5MSA9IGV2Q2FjaGVbMF0ucGFnZVk7XG4gICAgY29uc3QgeDIgPSBldkNhY2hlWzFdLnBhZ2VYO1xuICAgIGNvbnN0IHkyID0gZXZDYWNoZVsxXS5wYWdlWTtcbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeDIgLSB4MSkgKiogMiArICh5MiAtIHkxKSAqKiAyKTtcbiAgICByZXR1cm4gZGlzdGFuY2U7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0TWF4UmF0aW8oKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgIGNvbnN0IG1heFJhdGlvID0gZ2VzdHVyZS5pbWFnZVdyYXBFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgaWYgKHBhcmFtcy5saW1pdFRvT3JpZ2luYWxTaXplICYmIGdlc3R1cmUuaW1hZ2VFbCAmJiBnZXN0dXJlLmltYWdlRWwubmF0dXJhbFdpZHRoKSB7XG4gICAgICBjb25zdCBpbWFnZU1heFJhdGlvID0gZ2VzdHVyZS5pbWFnZUVsLm5hdHVyYWxXaWR0aCAvIGdlc3R1cmUuaW1hZ2VFbC5vZmZzZXRXaWR0aDtcbiAgICAgIHJldHVybiBNYXRoLm1pbihpbWFnZU1heFJhdGlvLCBtYXhSYXRpbyk7XG4gICAgfVxuICAgIHJldHVybiBtYXhSYXRpbztcbiAgfVxuICBmdW5jdGlvbiBnZXRTY2FsZU9yaWdpbigpIHtcbiAgICBpZiAoZXZDYWNoZS5sZW5ndGggPCAyKSByZXR1cm4ge1xuICAgICAgeDogbnVsbCxcbiAgICAgIHk6IG51bGxcbiAgICB9O1xuICAgIGNvbnN0IGJveCA9IGdlc3R1cmUuaW1hZ2VFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gWyhldkNhY2hlWzBdLnBhZ2VYICsgKGV2Q2FjaGVbMV0ucGFnZVggLSBldkNhY2hlWzBdLnBhZ2VYKSAvIDIgLSBib3gueCAtIHdpbmRvdy5zY3JvbGxYKSAvIGN1cnJlbnRTY2FsZSwgKGV2Q2FjaGVbMF0ucGFnZVkgKyAoZXZDYWNoZVsxXS5wYWdlWSAtIGV2Q2FjaGVbMF0ucGFnZVkpIC8gMiAtIGJveC55IC0gd2luZG93LnNjcm9sbFkpIC8gY3VycmVudFNjYWxlXTtcbiAgfVxuICBmdW5jdGlvbiBnZXRTbGlkZVNlbGVjdG9yKCkge1xuICAgIHJldHVybiBzd2lwZXIuaXNFbGVtZW50ID8gYHN3aXBlci1zbGlkZWAgOiBgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfWA7XG4gIH1cbiAgZnVuY3Rpb24gZXZlbnRXaXRoaW5TbGlkZShlKSB7XG4gICAgY29uc3Qgc2xpZGVTZWxlY3RvciA9IGdldFNsaWRlU2VsZWN0b3IoKTtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhzbGlkZVNlbGVjdG9yKSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHN3aXBlci5zbGlkZXMuZmlsdGVyKHNsaWRlRWwgPT4gc2xpZGVFbC5jb250YWlucyhlLnRhcmdldCkpLmxlbmd0aCA+IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBldmVudFdpdGhpblpvb21Db250YWluZXIoZSkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYC4ke3N3aXBlci5wYXJhbXMuem9vbS5jb250YWluZXJDbGFzc31gO1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKFsuLi5zd2lwZXIuaG9zdEVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5maWx0ZXIoY29udGFpbmVyRWwgPT4gY29udGFpbmVyRWwuY29udGFpbnMoZS50YXJnZXQpKS5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFdmVudHNcbiAgZnVuY3Rpb24gb25HZXN0dXJlU3RhcnQoZSkge1xuICAgIGlmIChlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSB7XG4gICAgICBldkNhY2hlLnNwbGljZSgwLCBldkNhY2hlLmxlbmd0aCk7XG4gICAgfVxuICAgIGlmICghZXZlbnRXaXRoaW5TbGlkZShlKSkgcmV0dXJuO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICBmYWtlR2VzdHVyZVRvdWNoZWQgPSBmYWxzZTtcbiAgICBmYWtlR2VzdHVyZU1vdmVkID0gZmFsc2U7XG4gICAgZXZDYWNoZS5wdXNoKGUpO1xuICAgIGlmIChldkNhY2hlLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmFrZUdlc3R1cmVUb3VjaGVkID0gdHJ1ZTtcbiAgICBnZXN0dXJlLnNjYWxlU3RhcnQgPSBnZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKCk7XG4gICAgaWYgKCFnZXN0dXJlLnNsaWRlRWwpIHtcbiAgICAgIGdlc3R1cmUuc2xpZGVFbCA9IGUudGFyZ2V0LmNsb3Nlc3QoYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApO1xuICAgICAgaWYgKCFnZXN0dXJlLnNsaWRlRWwpIGdlc3R1cmUuc2xpZGVFbCA9IHN3aXBlci5zbGlkZXNbc3dpcGVyLmFjdGl2ZUluZGV4XTtcbiAgICAgIGxldCBpbWFnZUVsID0gZ2VzdHVyZS5zbGlkZUVsLnF1ZXJ5U2VsZWN0b3IoYC4ke3BhcmFtcy5jb250YWluZXJDbGFzc31gKTtcbiAgICAgIGlmIChpbWFnZUVsKSB7XG4gICAgICAgIGltYWdlRWwgPSBpbWFnZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BpY3R1cmUsIGltZywgc3ZnLCBjYW52YXMsIC5zd2lwZXItem9vbS10YXJnZXQnKVswXTtcbiAgICAgIH1cbiAgICAgIGdlc3R1cmUuaW1hZ2VFbCA9IGltYWdlRWw7XG4gICAgICBpZiAoaW1hZ2VFbCkge1xuICAgICAgICBnZXN0dXJlLmltYWdlV3JhcEVsID0gZWxlbWVudFBhcmVudHMoZ2VzdHVyZS5pbWFnZUVsLCBgLiR7cGFyYW1zLmNvbnRhaW5lckNsYXNzfWApWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2VzdHVyZS5pbWFnZVdyYXBFbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmICghZ2VzdHVyZS5pbWFnZVdyYXBFbCkge1xuICAgICAgICBnZXN0dXJlLmltYWdlRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGdlc3R1cmUubWF4UmF0aW8gPSBnZXRNYXhSYXRpbygpO1xuICAgIH1cbiAgICBpZiAoZ2VzdHVyZS5pbWFnZUVsKSB7XG4gICAgICBjb25zdCBbb3JpZ2luWCwgb3JpZ2luWV0gPSBnZXRTY2FsZU9yaWdpbigpO1xuICAgICAgZ2VzdHVyZS5vcmlnaW5YID0gb3JpZ2luWDtcbiAgICAgIGdlc3R1cmUub3JpZ2luWSA9IG9yaWdpblk7XG4gICAgICBnZXN0dXJlLmltYWdlRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBtcyc7XG4gICAgfVxuICAgIGlzU2NhbGluZyA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gb25HZXN0dXJlQ2hhbmdlKGUpIHtcbiAgICBpZiAoIWV2ZW50V2l0aGluU2xpZGUoZSkpIHJldHVybjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuICAgIGNvbnN0IHBvaW50ZXJJbmRleCA9IGV2Q2FjaGUuZmluZEluZGV4KGNhY2hlZEV2ID0+IGNhY2hlZEV2LnBvaW50ZXJJZCA9PT0gZS5wb2ludGVySWQpO1xuICAgIGlmIChwb2ludGVySW5kZXggPj0gMCkgZXZDYWNoZVtwb2ludGVySW5kZXhdID0gZTtcbiAgICBpZiAoZXZDYWNoZS5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZha2VHZXN0dXJlTW92ZWQgPSB0cnVlO1xuICAgIGdlc3R1cmUuc2NhbGVNb3ZlID0gZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcygpO1xuICAgIGlmICghZ2VzdHVyZS5pbWFnZUVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHpvb20uc2NhbGUgPSBnZXN0dXJlLnNjYWxlTW92ZSAvIGdlc3R1cmUuc2NhbGVTdGFydCAqIGN1cnJlbnRTY2FsZTtcbiAgICBpZiAoem9vbS5zY2FsZSA+IGdlc3R1cmUubWF4UmF0aW8pIHtcbiAgICAgIHpvb20uc2NhbGUgPSBnZXN0dXJlLm1heFJhdGlvIC0gMSArICh6b29tLnNjYWxlIC0gZ2VzdHVyZS5tYXhSYXRpbyArIDEpICoqIDAuNTtcbiAgICB9XG4gICAgaWYgKHpvb20uc2NhbGUgPCBwYXJhbXMubWluUmF0aW8pIHtcbiAgICAgIHpvb20uc2NhbGUgPSBwYXJhbXMubWluUmF0aW8gKyAxIC0gKHBhcmFtcy5taW5SYXRpbyAtIHpvb20uc2NhbGUgKyAxKSAqKiAwLjU7XG4gICAgfVxuICAgIGdlc3R1cmUuaW1hZ2VFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKCR7em9vbS5zY2FsZX0pYDtcbiAgfVxuICBmdW5jdGlvbiBvbkdlc3R1cmVFbmQoZSkge1xuICAgIGlmICghZXZlbnRXaXRoaW5TbGlkZShlKSkgcmV0dXJuO1xuICAgIGlmIChlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnICYmIGUudHlwZSA9PT0gJ3BvaW50ZXJvdXQnKSByZXR1cm47XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBjb25zdCBwb2ludGVySW5kZXggPSBldkNhY2hlLmZpbmRJbmRleChjYWNoZWRFdiA9PiBjYWNoZWRFdi5wb2ludGVySWQgPT09IGUucG9pbnRlcklkKTtcbiAgICBpZiAocG9pbnRlckluZGV4ID49IDApIGV2Q2FjaGUuc3BsaWNlKHBvaW50ZXJJbmRleCwgMSk7XG4gICAgaWYgKCFmYWtlR2VzdHVyZVRvdWNoZWQgfHwgIWZha2VHZXN0dXJlTW92ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmFrZUdlc3R1cmVUb3VjaGVkID0gZmFsc2U7XG4gICAgZmFrZUdlc3R1cmVNb3ZlZCA9IGZhbHNlO1xuICAgIGlmICghZ2VzdHVyZS5pbWFnZUVsKSByZXR1cm47XG4gICAgem9vbS5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHpvb20uc2NhbGUsIGdlc3R1cmUubWF4UmF0aW8pLCBwYXJhbXMubWluUmF0aW8pO1xuICAgIGdlc3R1cmUuaW1hZ2VFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtzd2lwZXIucGFyYW1zLnNwZWVkfW1zYDtcbiAgICBnZXN0dXJlLmltYWdlRWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgke3pvb20uc2NhbGV9KWA7XG4gICAgY3VycmVudFNjYWxlID0gem9vbS5zY2FsZTtcbiAgICBpc1NjYWxpbmcgPSBmYWxzZTtcbiAgICBpZiAoem9vbS5zY2FsZSA+IDEgJiYgZ2VzdHVyZS5zbGlkZUVsKSB7XG4gICAgICBnZXN0dXJlLnNsaWRlRWwuY2xhc3NMaXN0LmFkZChgJHtwYXJhbXMuem9vbWVkU2xpZGVDbGFzc31gKTtcbiAgICB9IGVsc2UgaWYgKHpvb20uc2NhbGUgPD0gMSAmJiBnZXN0dXJlLnNsaWRlRWwpIHtcbiAgICAgIGdlc3R1cmUuc2xpZGVFbC5jbGFzc0xpc3QucmVtb3ZlKGAke3BhcmFtcy56b29tZWRTbGlkZUNsYXNzfWApO1xuICAgIH1cbiAgICBpZiAoem9vbS5zY2FsZSA9PT0gMSkge1xuICAgICAgZ2VzdHVyZS5vcmlnaW5YID0gMDtcbiAgICAgIGdlc3R1cmUub3JpZ2luWSA9IDA7XG4gICAgICBnZXN0dXJlLnNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGxldCBhbGxvd1RvdWNoTW92ZVRpbWVvdXQ7XG4gIGZ1bmN0aW9uIGFsbG93VG91Y2hNb3ZlKCkge1xuICAgIHN3aXBlci50b3VjaEV2ZW50c0RhdGEucHJldmVudFRvdWNoTW92ZUZyb21Qb2ludGVyTW92ZSA9IGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIHByZXZlbnRUb3VjaE1vdmUoKSB7XG4gICAgY2xlYXJUaW1lb3V0KGFsbG93VG91Y2hNb3ZlVGltZW91dCk7XG4gICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5wcmV2ZW50VG91Y2hNb3ZlRnJvbVBvaW50ZXJNb3ZlID0gdHJ1ZTtcbiAgICBhbGxvd1RvdWNoTW92ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICBhbGxvd1RvdWNoTW92ZSgpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgY29uc3QgZGV2aWNlID0gc3dpcGVyLmRldmljZTtcbiAgICBpZiAoIWdlc3R1cmUuaW1hZ2VFbCkgcmV0dXJuO1xuICAgIGlmIChpbWFnZS5pc1RvdWNoZWQpIHJldHVybjtcbiAgICBpZiAoZGV2aWNlLmFuZHJvaWQgJiYgZS5jYW5jZWxhYmxlKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaW1hZ2UuaXNUb3VjaGVkID0gdHJ1ZTtcbiAgICBjb25zdCBldmVudCA9IGV2Q2FjaGUubGVuZ3RoID4gMCA/IGV2Q2FjaGVbMF0gOiBlO1xuICAgIGltYWdlLnRvdWNoZXNTdGFydC54ID0gZXZlbnQucGFnZVg7XG4gICAgaW1hZ2UudG91Y2hlc1N0YXJ0LnkgPSBldmVudC5wYWdlWTtcbiAgfVxuICBmdW5jdGlvbiBvblRvdWNoTW92ZShlKSB7XG4gICAgY29uc3QgaXNNb3VzZUV2ZW50ID0gZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJztcbiAgICBjb25zdCBpc01vdXNlUGFuID0gaXNNb3VzZUV2ZW50ICYmIHN3aXBlci5wYXJhbXMuem9vbS5wYW5Pbk1vdXNlTW92ZTtcbiAgICBpZiAoIWV2ZW50V2l0aGluU2xpZGUoZSkgfHwgIWV2ZW50V2l0aGluWm9vbUNvbnRhaW5lcihlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG4gICAgaWYgKCFnZXN0dXJlLmltYWdlRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpbWFnZS5pc1RvdWNoZWQgfHwgIWdlc3R1cmUuc2xpZGVFbCkge1xuICAgICAgaWYgKGlzTW91c2VQYW4pIG9uTW91c2VNb3ZlKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNNb3VzZVBhbikge1xuICAgICAgb25Nb3VzZU1vdmUoZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaW1hZ2UuaXNNb3ZlZCkge1xuICAgICAgaW1hZ2Uud2lkdGggPSBnZXN0dXJlLmltYWdlRWwub2Zmc2V0V2lkdGggfHwgZ2VzdHVyZS5pbWFnZUVsLmNsaWVudFdpZHRoO1xuICAgICAgaW1hZ2UuaGVpZ2h0ID0gZ2VzdHVyZS5pbWFnZUVsLm9mZnNldEhlaWdodCB8fCBnZXN0dXJlLmltYWdlRWwuY2xpZW50SGVpZ2h0O1xuICAgICAgaW1hZ2Uuc3RhcnRYID0gZ2V0VHJhbnNsYXRlKGdlc3R1cmUuaW1hZ2VXcmFwRWwsICd4JykgfHwgMDtcbiAgICAgIGltYWdlLnN0YXJ0WSA9IGdldFRyYW5zbGF0ZShnZXN0dXJlLmltYWdlV3JhcEVsLCAneScpIHx8IDA7XG4gICAgICBnZXN0dXJlLnNsaWRlV2lkdGggPSBnZXN0dXJlLnNsaWRlRWwub2Zmc2V0V2lkdGg7XG4gICAgICBnZXN0dXJlLnNsaWRlSGVpZ2h0ID0gZ2VzdHVyZS5zbGlkZUVsLm9mZnNldEhlaWdodDtcbiAgICAgIGdlc3R1cmUuaW1hZ2VXcmFwRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBtcyc7XG4gICAgfVxuICAgIC8vIERlZmluZSBpZiB3ZSBuZWVkIGltYWdlIGRyYWdcbiAgICBjb25zdCBzY2FsZWRXaWR0aCA9IGltYWdlLndpZHRoICogem9vbS5zY2FsZTtcbiAgICBjb25zdCBzY2FsZWRIZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiB6b29tLnNjYWxlO1xuICAgIGltYWdlLm1pblggPSBNYXRoLm1pbihnZXN0dXJlLnNsaWRlV2lkdGggLyAyIC0gc2NhbGVkV2lkdGggLyAyLCAwKTtcbiAgICBpbWFnZS5tYXhYID0gLWltYWdlLm1pblg7XG4gICAgaW1hZ2UubWluWSA9IE1hdGgubWluKGdlc3R1cmUuc2xpZGVIZWlnaHQgLyAyIC0gc2NhbGVkSGVpZ2h0IC8gMiwgMCk7XG4gICAgaW1hZ2UubWF4WSA9IC1pbWFnZS5taW5ZO1xuICAgIGltYWdlLnRvdWNoZXNDdXJyZW50LnggPSBldkNhY2hlLmxlbmd0aCA+IDAgPyBldkNhY2hlWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICBpbWFnZS50b3VjaGVzQ3VycmVudC55ID0gZXZDYWNoZS5sZW5ndGggPiAwID8gZXZDYWNoZVswXS5wYWdlWSA6IGUucGFnZVk7XG4gICAgY29uc3QgdG91Y2hlc0RpZmYgPSBNYXRoLm1heChNYXRoLmFicyhpbWFnZS50b3VjaGVzQ3VycmVudC54IC0gaW1hZ2UudG91Y2hlc1N0YXJ0LngpLCBNYXRoLmFicyhpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gaW1hZ2UudG91Y2hlc1N0YXJ0LnkpKTtcbiAgICBpZiAodG91Y2hlc0RpZmYgPiA1KSB7XG4gICAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWltYWdlLmlzTW92ZWQgJiYgIWlzU2NhbGluZykge1xuICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiAoTWF0aC5mbG9vcihpbWFnZS5taW5YKSA9PT0gTWF0aC5mbG9vcihpbWFnZS5zdGFydFgpICYmIGltYWdlLnRvdWNoZXNDdXJyZW50LnggPCBpbWFnZS50b3VjaGVzU3RhcnQueCB8fCBNYXRoLmZsb29yKGltYWdlLm1heFgpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WCkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA+IGltYWdlLnRvdWNoZXNTdGFydC54KSkge1xuICAgICAgICBpbWFnZS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgYWxsb3dUb3VjaE1vdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgKE1hdGguZmxvb3IoaW1hZ2UubWluWSkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRZKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC55IDwgaW1hZ2UudG91Y2hlc1N0YXJ0LnkgfHwgTWF0aC5mbG9vcihpbWFnZS5tYXhZKSA9PT0gTWF0aC5mbG9vcihpbWFnZS5zdGFydFkpICYmIGltYWdlLnRvdWNoZXNDdXJyZW50LnkgPiBpbWFnZS50b3VjaGVzU3RhcnQueSkpIHtcbiAgICAgICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIGFsbG93VG91Y2hNb3ZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHByZXZlbnRUb3VjaE1vdmUoKTtcbiAgICBpbWFnZS5pc01vdmVkID0gdHJ1ZTtcbiAgICBjb25zdCBzY2FsZVJhdGlvID0gKHpvb20uc2NhbGUgLSBjdXJyZW50U2NhbGUpIC8gKGdlc3R1cmUubWF4UmF0aW8gLSBzd2lwZXIucGFyYW1zLnpvb20ubWluUmF0aW8pO1xuICAgIGNvbnN0IHtcbiAgICAgIG9yaWdpblgsXG4gICAgICBvcmlnaW5ZXG4gICAgfSA9IGdlc3R1cmU7XG4gICAgaW1hZ2UuY3VycmVudFggPSBpbWFnZS50b3VjaGVzQ3VycmVudC54IC0gaW1hZ2UudG91Y2hlc1N0YXJ0LnggKyBpbWFnZS5zdGFydFggKyBzY2FsZVJhdGlvICogKGltYWdlLndpZHRoIC0gb3JpZ2luWCAqIDIpO1xuICAgIGltYWdlLmN1cnJlbnRZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueSAtIGltYWdlLnRvdWNoZXNTdGFydC55ICsgaW1hZ2Uuc3RhcnRZICsgc2NhbGVSYXRpbyAqIChpbWFnZS5oZWlnaHQgLSBvcmlnaW5ZICogMik7XG4gICAgaWYgKGltYWdlLmN1cnJlbnRYIDwgaW1hZ2UubWluWCkge1xuICAgICAgaW1hZ2UuY3VycmVudFggPSBpbWFnZS5taW5YICsgMSAtIChpbWFnZS5taW5YIC0gaW1hZ2UuY3VycmVudFggKyAxKSAqKiAwLjg7XG4gICAgfVxuICAgIGlmIChpbWFnZS5jdXJyZW50WCA+IGltYWdlLm1heFgpIHtcbiAgICAgIGltYWdlLmN1cnJlbnRYID0gaW1hZ2UubWF4WCAtIDEgKyAoaW1hZ2UuY3VycmVudFggLSBpbWFnZS5tYXhYICsgMSkgKiogMC44O1xuICAgIH1cbiAgICBpZiAoaW1hZ2UuY3VycmVudFkgPCBpbWFnZS5taW5ZKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WSA9IGltYWdlLm1pblkgKyAxIC0gKGltYWdlLm1pblkgLSBpbWFnZS5jdXJyZW50WSArIDEpICoqIDAuODtcbiAgICB9XG4gICAgaWYgKGltYWdlLmN1cnJlbnRZID4gaW1hZ2UubWF4WSkge1xuICAgICAgaW1hZ2UuY3VycmVudFkgPSBpbWFnZS5tYXhZIC0gMSArIChpbWFnZS5jdXJyZW50WSAtIGltYWdlLm1heFkgKyAxKSAqKiAwLjg7XG4gICAgfVxuXG4gICAgLy8gVmVsb2NpdHlcbiAgICBpZiAoIXZlbG9jaXR5LnByZXZQb3NpdGlvblgpIHZlbG9jaXR5LnByZXZQb3NpdGlvblggPSBpbWFnZS50b3VjaGVzQ3VycmVudC54O1xuICAgIGlmICghdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgdmVsb2NpdHkucHJldlBvc2l0aW9uWSA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lnk7XG4gICAgaWYgKCF2ZWxvY2l0eS5wcmV2VGltZSkgdmVsb2NpdHkucHJldlRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZlbG9jaXR5LnggPSAoaW1hZ2UudG91Y2hlc0N1cnJlbnQueCAtIHZlbG9jaXR5LnByZXZQb3NpdGlvblgpIC8gKERhdGUubm93KCkgLSB2ZWxvY2l0eS5wcmV2VGltZSkgLyAyO1xuICAgIHZlbG9jaXR5LnkgPSAoaW1hZ2UudG91Y2hlc0N1cnJlbnQueSAtIHZlbG9jaXR5LnByZXZQb3NpdGlvblkpIC8gKERhdGUubm93KCkgLSB2ZWxvY2l0eS5wcmV2VGltZSkgLyAyO1xuICAgIGlmIChNYXRoLmFicyhpbWFnZS50b3VjaGVzQ3VycmVudC54IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWCkgPCAyKSB2ZWxvY2l0eS54ID0gMDtcbiAgICBpZiAoTWF0aC5hYnMoaW1hZ2UudG91Y2hlc0N1cnJlbnQueSAtIHZlbG9jaXR5LnByZXZQb3NpdGlvblkpIDwgMikgdmVsb2NpdHkueSA9IDA7XG4gICAgdmVsb2NpdHkucHJldlBvc2l0aW9uWCA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lng7XG4gICAgdmVsb2NpdHkucHJldlBvc2l0aW9uWSA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lnk7XG4gICAgdmVsb2NpdHkucHJldlRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGdlc3R1cmUuaW1hZ2VXcmFwRWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7aW1hZ2UuY3VycmVudFh9cHgsICR7aW1hZ2UuY3VycmVudFl9cHgsMClgO1xuICB9XG4gIGZ1bmN0aW9uIG9uVG91Y2hFbmQoKSB7XG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuICAgIGV2Q2FjaGUubGVuZ3RoID0gMDtcbiAgICBpZiAoIWdlc3R1cmUuaW1hZ2VFbCkgcmV0dXJuO1xuICAgIGlmICghaW1hZ2UuaXNUb3VjaGVkIHx8ICFpbWFnZS5pc01vdmVkKSB7XG4gICAgICBpbWFnZS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgIGltYWdlLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgaW1hZ2UuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIGxldCBtb21lbnR1bUR1cmF0aW9uWCA9IDMwMDtcbiAgICBsZXQgbW9tZW50dW1EdXJhdGlvblkgPSAzMDA7XG4gICAgY29uc3QgbW9tZW50dW1EaXN0YW5jZVggPSB2ZWxvY2l0eS54ICogbW9tZW50dW1EdXJhdGlvblg7XG4gICAgY29uc3QgbmV3UG9zaXRpb25YID0gaW1hZ2UuY3VycmVudFggKyBtb21lbnR1bURpc3RhbmNlWDtcbiAgICBjb25zdCBtb21lbnR1bURpc3RhbmNlWSA9IHZlbG9jaXR5LnkgKiBtb21lbnR1bUR1cmF0aW9uWTtcbiAgICBjb25zdCBuZXdQb3NpdGlvblkgPSBpbWFnZS5jdXJyZW50WSArIG1vbWVudHVtRGlzdGFuY2VZO1xuXG4gICAgLy8gRml4IGR1cmF0aW9uXG4gICAgaWYgKHZlbG9jaXR5LnggIT09IDApIG1vbWVudHVtRHVyYXRpb25YID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uWCAtIGltYWdlLmN1cnJlbnRYKSAvIHZlbG9jaXR5LngpO1xuICAgIGlmICh2ZWxvY2l0eS55ICE9PSAwKSBtb21lbnR1bUR1cmF0aW9uWSA9IE1hdGguYWJzKChuZXdQb3NpdGlvblkgLSBpbWFnZS5jdXJyZW50WSkgLyB2ZWxvY2l0eS55KTtcbiAgICBjb25zdCBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5tYXgobW9tZW50dW1EdXJhdGlvblgsIG1vbWVudHVtRHVyYXRpb25ZKTtcbiAgICBpbWFnZS5jdXJyZW50WCA9IG5ld1Bvc2l0aW9uWDtcbiAgICBpbWFnZS5jdXJyZW50WSA9IG5ld1Bvc2l0aW9uWTtcbiAgICAvLyBEZWZpbmUgaWYgd2UgbmVlZCBpbWFnZSBkcmFnXG4gICAgY29uc3Qgc2NhbGVkV2lkdGggPSBpbWFnZS53aWR0aCAqIHpvb20uc2NhbGU7XG4gICAgY29uc3Qgc2NhbGVkSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICBpbWFnZS5taW5YID0gTWF0aC5taW4oZ2VzdHVyZS5zbGlkZVdpZHRoIC8gMiAtIHNjYWxlZFdpZHRoIC8gMiwgMCk7XG4gICAgaW1hZ2UubWF4WCA9IC1pbWFnZS5taW5YO1xuICAgIGltYWdlLm1pblkgPSBNYXRoLm1pbihnZXN0dXJlLnNsaWRlSGVpZ2h0IC8gMiAtIHNjYWxlZEhlaWdodCAvIDIsIDApO1xuICAgIGltYWdlLm1heFkgPSAtaW1hZ2UubWluWTtcbiAgICBpbWFnZS5jdXJyZW50WCA9IE1hdGgubWF4KE1hdGgubWluKGltYWdlLmN1cnJlbnRYLCBpbWFnZS5tYXhYKSwgaW1hZ2UubWluWCk7XG4gICAgaW1hZ2UuY3VycmVudFkgPSBNYXRoLm1heChNYXRoLm1pbihpbWFnZS5jdXJyZW50WSwgaW1hZ2UubWF4WSksIGltYWdlLm1pblkpO1xuICAgIGdlc3R1cmUuaW1hZ2VXcmFwRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7bW9tZW50dW1EdXJhdGlvbn1tc2A7XG4gICAgZ2VzdHVyZS5pbWFnZVdyYXBFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtpbWFnZS5jdXJyZW50WH1weCwgJHtpbWFnZS5jdXJyZW50WX1weCwwKWA7XG4gIH1cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKCkge1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBpZiAoZ2VzdHVyZS5zbGlkZUVsICYmIHN3aXBlci5hY3RpdmVJbmRleCAhPT0gc3dpcGVyLnNsaWRlcy5pbmRleE9mKGdlc3R1cmUuc2xpZGVFbCkpIHtcbiAgICAgIGlmIChnZXN0dXJlLmltYWdlRWwpIHtcbiAgICAgICAgZ2VzdHVyZS5pbWFnZUVsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoMSknO1xuICAgICAgfVxuICAgICAgaWYgKGdlc3R1cmUuaW1hZ2VXcmFwRWwpIHtcbiAgICAgICAgZ2VzdHVyZS5pbWFnZVdyYXBFbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwwLDApJztcbiAgICAgIH1cbiAgICAgIGdlc3R1cmUuc2xpZGVFbC5jbGFzc0xpc3QucmVtb3ZlKGAke3N3aXBlci5wYXJhbXMuem9vbS56b29tZWRTbGlkZUNsYXNzfWApO1xuICAgICAgem9vbS5zY2FsZSA9IDE7XG4gICAgICBjdXJyZW50U2NhbGUgPSAxO1xuICAgICAgZ2VzdHVyZS5zbGlkZUVsID0gdW5kZWZpbmVkO1xuICAgICAgZ2VzdHVyZS5pbWFnZUVsID0gdW5kZWZpbmVkO1xuICAgICAgZ2VzdHVyZS5pbWFnZVdyYXBFbCA9IHVuZGVmaW5lZDtcbiAgICAgIGdlc3R1cmUub3JpZ2luWCA9IDA7XG4gICAgICBnZXN0dXJlLm9yaWdpblkgPSAwO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBvbk1vdXNlTW92ZShlKSB7XG4gICAgLy8gT25seSBwYW4gaWYgem9vbWVkIGluIGFuZCBtb3VzZSBwYW5uaW5nIGlzIGVuYWJsZWRcbiAgICBpZiAoY3VycmVudFNjYWxlIDw9IDEgfHwgIWdlc3R1cmUuaW1hZ2VXcmFwRWwpIHJldHVybjtcbiAgICBpZiAoIWV2ZW50V2l0aGluU2xpZGUoZSkgfHwgIWV2ZW50V2l0aGluWm9vbUNvbnRhaW5lcihlKSkgcmV0dXJuO1xuICAgIGNvbnN0IGN1cnJlbnRUcmFuc2Zvcm0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShnZXN0dXJlLmltYWdlV3JhcEVsKS50cmFuc2Zvcm07XG4gICAgY29uc3QgbWF0cml4ID0gbmV3IHdpbmRvdy5ET01NYXRyaXgoY3VycmVudFRyYW5zZm9ybSk7XG4gICAgaWYgKCFpc1Bhbm5pbmdXaXRoTW91c2UpIHtcbiAgICAgIGlzUGFubmluZ1dpdGhNb3VzZSA9IHRydWU7XG4gICAgICBtb3VzZVBhblN0YXJ0LnggPSBlLmNsaWVudFg7XG4gICAgICBtb3VzZVBhblN0YXJ0LnkgPSBlLmNsaWVudFk7XG4gICAgICBpbWFnZS5zdGFydFggPSBtYXRyaXguZTtcbiAgICAgIGltYWdlLnN0YXJ0WSA9IG1hdHJpeC5mO1xuICAgICAgaW1hZ2Uud2lkdGggPSBnZXN0dXJlLmltYWdlRWwub2Zmc2V0V2lkdGggfHwgZ2VzdHVyZS5pbWFnZUVsLmNsaWVudFdpZHRoO1xuICAgICAgaW1hZ2UuaGVpZ2h0ID0gZ2VzdHVyZS5pbWFnZUVsLm9mZnNldEhlaWdodCB8fCBnZXN0dXJlLmltYWdlRWwuY2xpZW50SGVpZ2h0O1xuICAgICAgZ2VzdHVyZS5zbGlkZVdpZHRoID0gZ2VzdHVyZS5zbGlkZUVsLm9mZnNldFdpZHRoO1xuICAgICAgZ2VzdHVyZS5zbGlkZUhlaWdodCA9IGdlc3R1cmUuc2xpZGVFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRlbHRhWCA9IChlLmNsaWVudFggLSBtb3VzZVBhblN0YXJ0LngpICogbW91c2VQYW5TZW5zaXRpdml0eTtcbiAgICBjb25zdCBkZWx0YVkgPSAoZS5jbGllbnRZIC0gbW91c2VQYW5TdGFydC55KSAqIG1vdXNlUGFuU2Vuc2l0aXZpdHk7XG4gICAgY29uc3Qgc2NhbGVkV2lkdGggPSBpbWFnZS53aWR0aCAqIGN1cnJlbnRTY2FsZTtcbiAgICBjb25zdCBzY2FsZWRIZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiBjdXJyZW50U2NhbGU7XG4gICAgY29uc3Qgc2xpZGVXaWR0aCA9IGdlc3R1cmUuc2xpZGVXaWR0aDtcbiAgICBjb25zdCBzbGlkZUhlaWdodCA9IGdlc3R1cmUuc2xpZGVIZWlnaHQ7XG4gICAgY29uc3QgbWluWCA9IE1hdGgubWluKHNsaWRlV2lkdGggLyAyIC0gc2NhbGVkV2lkdGggLyAyLCAwKTtcbiAgICBjb25zdCBtYXhYID0gLW1pblg7XG4gICAgY29uc3QgbWluWSA9IE1hdGgubWluKHNsaWRlSGVpZ2h0IC8gMiAtIHNjYWxlZEhlaWdodCAvIDIsIDApO1xuICAgIGNvbnN0IG1heFkgPSAtbWluWTtcbiAgICBjb25zdCBuZXdYID0gTWF0aC5tYXgoTWF0aC5taW4oaW1hZ2Uuc3RhcnRYICsgZGVsdGFYLCBtYXhYKSwgbWluWCk7XG4gICAgY29uc3QgbmV3WSA9IE1hdGgubWF4KE1hdGgubWluKGltYWdlLnN0YXJ0WSArIGRlbHRhWSwgbWF4WSksIG1pblkpO1xuICAgIGdlc3R1cmUuaW1hZ2VXcmFwRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBtcyc7XG4gICAgZ2VzdHVyZS5pbWFnZVdyYXBFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtuZXdYfXB4LCAke25ld1l9cHgsIDApYDtcbiAgICBtb3VzZVBhblN0YXJ0LnggPSBlLmNsaWVudFg7XG4gICAgbW91c2VQYW5TdGFydC55ID0gZS5jbGllbnRZO1xuICAgIGltYWdlLnN0YXJ0WCA9IG5ld1g7XG4gICAgaW1hZ2Uuc3RhcnRZID0gbmV3WTtcbiAgICBpbWFnZS5jdXJyZW50WCA9IG5ld1g7XG4gICAgaW1hZ2UuY3VycmVudFkgPSBuZXdZO1xuICB9XG4gIGZ1bmN0aW9uIHpvb21JbihlKSB7XG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICBpZiAoIWdlc3R1cmUuc2xpZGVFbCkge1xuICAgICAgaWYgKGUgJiYgZS50YXJnZXQpIHtcbiAgICAgICAgZ2VzdHVyZS5zbGlkZUVsID0gZS50YXJnZXQuY2xvc2VzdChgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCk7XG4gICAgICB9XG4gICAgICBpZiAoIWdlc3R1cmUuc2xpZGVFbCkge1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkICYmIHN3aXBlci52aXJ0dWFsKSB7XG4gICAgICAgICAgZ2VzdHVyZS5zbGlkZUVsID0gZWxlbWVudENoaWxkcmVuKHN3aXBlci5zbGlkZXNFbCwgYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzc31gKVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnZXN0dXJlLnNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzW3N3aXBlci5hY3RpdmVJbmRleF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBpbWFnZUVsID0gZ2VzdHVyZS5zbGlkZUVsLnF1ZXJ5U2VsZWN0b3IoYC4ke3BhcmFtcy5jb250YWluZXJDbGFzc31gKTtcbiAgICAgIGlmIChpbWFnZUVsKSB7XG4gICAgICAgIGltYWdlRWwgPSBpbWFnZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BpY3R1cmUsIGltZywgc3ZnLCBjYW52YXMsIC5zd2lwZXItem9vbS10YXJnZXQnKVswXTtcbiAgICAgIH1cbiAgICAgIGdlc3R1cmUuaW1hZ2VFbCA9IGltYWdlRWw7XG4gICAgICBpZiAoaW1hZ2VFbCkge1xuICAgICAgICBnZXN0dXJlLmltYWdlV3JhcEVsID0gZWxlbWVudFBhcmVudHMoZ2VzdHVyZS5pbWFnZUVsLCBgLiR7cGFyYW1zLmNvbnRhaW5lckNsYXNzfWApWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2VzdHVyZS5pbWFnZVdyYXBFbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLmltYWdlRWwgfHwgIWdlc3R1cmUuaW1hZ2VXcmFwRWwpIHJldHVybjtcbiAgICBnZXN0dXJlLm1heFJhdGlvID0gZ2V0TWF4UmF0aW8oKTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgIH1cbiAgICBnZXN0dXJlLnNsaWRlRWwuY2xhc3NMaXN0LmFkZChgJHtwYXJhbXMuem9vbWVkU2xpZGVDbGFzc31gKTtcbiAgICBsZXQgdG91Y2hYO1xuICAgIGxldCB0b3VjaFk7XG4gICAgbGV0IG9mZnNldFg7XG4gICAgbGV0IG9mZnNldFk7XG4gICAgbGV0IGRpZmZYO1xuICAgIGxldCBkaWZmWTtcbiAgICBsZXQgdHJhbnNsYXRlWDtcbiAgICBsZXQgdHJhbnNsYXRlWTtcbiAgICBsZXQgaW1hZ2VXaWR0aDtcbiAgICBsZXQgaW1hZ2VIZWlnaHQ7XG4gICAgbGV0IHNjYWxlZFdpZHRoO1xuICAgIGxldCBzY2FsZWRIZWlnaHQ7XG4gICAgbGV0IHRyYW5zbGF0ZU1pblg7XG4gICAgbGV0IHRyYW5zbGF0ZU1pblk7XG4gICAgbGV0IHRyYW5zbGF0ZU1heFg7XG4gICAgbGV0IHRyYW5zbGF0ZU1heFk7XG4gICAgbGV0IHNsaWRlV2lkdGg7XG4gICAgbGV0IHNsaWRlSGVpZ2h0O1xuICAgIGlmICh0eXBlb2YgaW1hZ2UudG91Y2hlc1N0YXJ0LnggPT09ICd1bmRlZmluZWQnICYmIGUpIHtcbiAgICAgIHRvdWNoWCA9IGUucGFnZVg7XG4gICAgICB0b3VjaFkgPSBlLnBhZ2VZO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3VjaFggPSBpbWFnZS50b3VjaGVzU3RhcnQueDtcbiAgICAgIHRvdWNoWSA9IGltYWdlLnRvdWNoZXNTdGFydC55O1xuICAgIH1cbiAgICBjb25zdCBwcmV2U2NhbGUgPSBjdXJyZW50U2NhbGU7XG4gICAgY29uc3QgZm9yY2Vab29tUmF0aW8gPSB0eXBlb2YgZSA9PT0gJ251bWJlcicgPyBlIDogbnVsbDtcbiAgICBpZiAoY3VycmVudFNjYWxlID09PSAxICYmIGZvcmNlWm9vbVJhdGlvKSB7XG4gICAgICB0b3VjaFggPSB1bmRlZmluZWQ7XG4gICAgICB0b3VjaFkgPSB1bmRlZmluZWQ7XG4gICAgICBpbWFnZS50b3VjaGVzU3RhcnQueCA9IHVuZGVmaW5lZDtcbiAgICAgIGltYWdlLnRvdWNoZXNTdGFydC55ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBtYXhSYXRpbyA9IGdldE1heFJhdGlvKCk7XG4gICAgem9vbS5zY2FsZSA9IGZvcmNlWm9vbVJhdGlvIHx8IG1heFJhdGlvO1xuICAgIGN1cnJlbnRTY2FsZSA9IGZvcmNlWm9vbVJhdGlvIHx8IG1heFJhdGlvO1xuICAgIGlmIChlICYmICEoY3VycmVudFNjYWxlID09PSAxICYmIGZvcmNlWm9vbVJhdGlvKSkge1xuICAgICAgc2xpZGVXaWR0aCA9IGdlc3R1cmUuc2xpZGVFbC5vZmZzZXRXaWR0aDtcbiAgICAgIHNsaWRlSGVpZ2h0ID0gZ2VzdHVyZS5zbGlkZUVsLm9mZnNldEhlaWdodDtcbiAgICAgIG9mZnNldFggPSBlbGVtZW50T2Zmc2V0KGdlc3R1cmUuc2xpZGVFbCkubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuICAgICAgb2Zmc2V0WSA9IGVsZW1lbnRPZmZzZXQoZ2VzdHVyZS5zbGlkZUVsKS50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGRpZmZYID0gb2Zmc2V0WCArIHNsaWRlV2lkdGggLyAyIC0gdG91Y2hYO1xuICAgICAgZGlmZlkgPSBvZmZzZXRZICsgc2xpZGVIZWlnaHQgLyAyIC0gdG91Y2hZO1xuICAgICAgaW1hZ2VXaWR0aCA9IGdlc3R1cmUuaW1hZ2VFbC5vZmZzZXRXaWR0aCB8fCBnZXN0dXJlLmltYWdlRWwuY2xpZW50V2lkdGg7XG4gICAgICBpbWFnZUhlaWdodCA9IGdlc3R1cmUuaW1hZ2VFbC5vZmZzZXRIZWlnaHQgfHwgZ2VzdHVyZS5pbWFnZUVsLmNsaWVudEhlaWdodDtcbiAgICAgIHNjYWxlZFdpZHRoID0gaW1hZ2VXaWR0aCAqIHpvb20uc2NhbGU7XG4gICAgICBzY2FsZWRIZWlnaHQgPSBpbWFnZUhlaWdodCAqIHpvb20uc2NhbGU7XG4gICAgICB0cmFuc2xhdGVNaW5YID0gTWF0aC5taW4oc2xpZGVXaWR0aCAvIDIgLSBzY2FsZWRXaWR0aCAvIDIsIDApO1xuICAgICAgdHJhbnNsYXRlTWluWSA9IE1hdGgubWluKHNsaWRlSGVpZ2h0IC8gMiAtIHNjYWxlZEhlaWdodCAvIDIsIDApO1xuICAgICAgdHJhbnNsYXRlTWF4WCA9IC10cmFuc2xhdGVNaW5YO1xuICAgICAgdHJhbnNsYXRlTWF4WSA9IC10cmFuc2xhdGVNaW5ZO1xuICAgICAgaWYgKHByZXZTY2FsZSA+IDAgJiYgZm9yY2Vab29tUmF0aW8gJiYgdHlwZW9mIGltYWdlLmN1cnJlbnRYID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgaW1hZ2UuY3VycmVudFkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRyYW5zbGF0ZVggPSBpbWFnZS5jdXJyZW50WCAqIHpvb20uc2NhbGUgLyBwcmV2U2NhbGU7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSBpbWFnZS5jdXJyZW50WSAqIHpvb20uc2NhbGUgLyBwcmV2U2NhbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2xhdGVYID0gZGlmZlggKiB6b29tLnNjYWxlO1xuICAgICAgICB0cmFuc2xhdGVZID0gZGlmZlkgKiB6b29tLnNjYWxlO1xuICAgICAgfVxuICAgICAgaWYgKHRyYW5zbGF0ZVggPCB0cmFuc2xhdGVNaW5YKSB7XG4gICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVNaW5YO1xuICAgICAgfVxuICAgICAgaWYgKHRyYW5zbGF0ZVggPiB0cmFuc2xhdGVNYXhYKSB7XG4gICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVNYXhYO1xuICAgICAgfVxuICAgICAgaWYgKHRyYW5zbGF0ZVkgPCB0cmFuc2xhdGVNaW5ZKSB7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVNaW5ZO1xuICAgICAgfVxuICAgICAgaWYgKHRyYW5zbGF0ZVkgPiB0cmFuc2xhdGVNYXhZKSB7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVNYXhZO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2xhdGVYID0gMDtcbiAgICAgIHRyYW5zbGF0ZVkgPSAwO1xuICAgIH1cbiAgICBpZiAoZm9yY2Vab29tUmF0aW8gJiYgem9vbS5zY2FsZSA9PT0gMSkge1xuICAgICAgZ2VzdHVyZS5vcmlnaW5YID0gMDtcbiAgICAgIGdlc3R1cmUub3JpZ2luWSA9IDA7XG4gICAgfVxuICAgIGltYWdlLmN1cnJlbnRYID0gdHJhbnNsYXRlWDtcbiAgICBpbWFnZS5jdXJyZW50WSA9IHRyYW5zbGF0ZVk7XG4gICAgZ2VzdHVyZS5pbWFnZVdyYXBFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMzAwbXMnO1xuICAgIGdlc3R1cmUuaW1hZ2VXcmFwRWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlWH1weCwgJHt0cmFuc2xhdGVZfXB4LDApYDtcbiAgICBnZXN0dXJlLmltYWdlRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzMwMG1zJztcbiAgICBnZXN0dXJlLmltYWdlRWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgke3pvb20uc2NhbGV9KWA7XG4gIH1cbiAgZnVuY3Rpb24gem9vbU91dCgpIHtcbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgIGlmICghZ2VzdHVyZS5zbGlkZUVsKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkICYmIHN3aXBlci52aXJ0dWFsKSB7XG4gICAgICAgIGdlc3R1cmUuc2xpZGVFbCA9IGVsZW1lbnRDaGlsZHJlbihzd2lwZXIuc2xpZGVzRWwsIGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3N9YClbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXN0dXJlLnNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzW3N3aXBlci5hY3RpdmVJbmRleF07XG4gICAgICB9XG4gICAgICBsZXQgaW1hZ2VFbCA9IGdlc3R1cmUuc2xpZGVFbC5xdWVyeVNlbGVjdG9yKGAuJHtwYXJhbXMuY29udGFpbmVyQ2xhc3N9YCk7XG4gICAgICBpZiAoaW1hZ2VFbCkge1xuICAgICAgICBpbWFnZUVsID0gaW1hZ2VFbC5xdWVyeVNlbGVjdG9yQWxsKCdwaWN0dXJlLCBpbWcsIHN2ZywgY2FudmFzLCAuc3dpcGVyLXpvb20tdGFyZ2V0JylbMF07XG4gICAgICB9XG4gICAgICBnZXN0dXJlLmltYWdlRWwgPSBpbWFnZUVsO1xuICAgICAgaWYgKGltYWdlRWwpIHtcbiAgICAgICAgZ2VzdHVyZS5pbWFnZVdyYXBFbCA9IGVsZW1lbnRQYXJlbnRzKGdlc3R1cmUuaW1hZ2VFbCwgYC4ke3BhcmFtcy5jb250YWluZXJDbGFzc31gKVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdlc3R1cmUuaW1hZ2VXcmFwRWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZ2VzdHVyZS5pbWFnZUVsIHx8ICFnZXN0dXJlLmltYWdlV3JhcEVsKSByZXR1cm47XG4gICAgZ2VzdHVyZS5tYXhSYXRpbyA9IGdldE1heFJhdGlvKCk7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS50b3VjaEFjdGlvbiA9ICcnO1xuICAgIH1cbiAgICB6b29tLnNjYWxlID0gMTtcbiAgICBjdXJyZW50U2NhbGUgPSAxO1xuICAgIGltYWdlLmN1cnJlbnRYID0gdW5kZWZpbmVkO1xuICAgIGltYWdlLmN1cnJlbnRZID0gdW5kZWZpbmVkO1xuICAgIGltYWdlLnRvdWNoZXNTdGFydC54ID0gdW5kZWZpbmVkO1xuICAgIGltYWdlLnRvdWNoZXNTdGFydC55ID0gdW5kZWZpbmVkO1xuICAgIGdlc3R1cmUuaW1hZ2VXcmFwRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzMwMG1zJztcbiAgICBnZXN0dXJlLmltYWdlV3JhcEVsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLDAsMCknO1xuICAgIGdlc3R1cmUuaW1hZ2VFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMzAwbXMnO1xuICAgIGdlc3R1cmUuaW1hZ2VFbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKDEpJztcbiAgICBnZXN0dXJlLnNsaWRlRWwuY2xhc3NMaXN0LnJlbW92ZShgJHtwYXJhbXMuem9vbWVkU2xpZGVDbGFzc31gKTtcbiAgICBnZXN0dXJlLnNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gICAgZ2VzdHVyZS5vcmlnaW5YID0gMDtcbiAgICBnZXN0dXJlLm9yaWdpblkgPSAwO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnpvb20ucGFuT25Nb3VzZU1vdmUpIHtcbiAgICAgIG1vdXNlUGFuU3RhcnQgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH07XG4gICAgICBpZiAoaXNQYW5uaW5nV2l0aE1vdXNlKSB7XG4gICAgICAgIGlzUGFubmluZ1dpdGhNb3VzZSA9IGZhbHNlO1xuICAgICAgICBpbWFnZS5zdGFydFggPSAwO1xuICAgICAgICBpbWFnZS5zdGFydFkgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRvZ2dsZSBab29tXG4gIGZ1bmN0aW9uIHpvb21Ub2dnbGUoZSkge1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBpZiAoem9vbS5zY2FsZSAmJiB6b29tLnNjYWxlICE9PSAxKSB7XG4gICAgICAvLyBab29tIE91dFxuICAgICAgem9vbU91dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBab29tIEluXG4gICAgICB6b29tSW4oZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdldExpc3RlbmVycygpIHtcbiAgICBjb25zdCBwYXNzaXZlTGlzdGVuZXIgPSBzd2lwZXIucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgY29uc3QgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSA9IHN3aXBlci5wYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0gOiB0cnVlO1xuICAgIHJldHVybiB7XG4gICAgICBwYXNzaXZlTGlzdGVuZXIsXG4gICAgICBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlXG4gICAgfTtcbiAgfVxuXG4gIC8vIEF0dGFjaC9EZXRhY2ggRXZlbnRzXG4gIGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG4gICAgaWYgKHpvb20uZW5hYmxlZCkgcmV0dXJuO1xuICAgIHpvb20uZW5hYmxlZCA9IHRydWU7XG4gICAgY29uc3Qge1xuICAgICAgcGFzc2l2ZUxpc3RlbmVyLFxuICAgICAgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZVxuICAgIH0gPSBnZXRMaXN0ZW5lcnMoKTtcblxuICAgIC8vIFNjYWxlIGltYWdlXG4gICAgc3dpcGVyLndyYXBwZXJFbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIHN3aXBlci53cmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkdlc3R1cmVDaGFuZ2UsIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmUpO1xuICAgIFsncG9pbnRlcnVwJywgJ3BvaW50ZXJjYW5jZWwnLCAncG9pbnRlcm91dCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9KTtcblxuICAgIC8vIE1vdmUgaW1hZ2VcbiAgICBzd2lwZXIud3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgb25Ub3VjaE1vdmUsIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmUpO1xuICB9XG4gIGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuICAgIGlmICghem9vbS5lbmFibGVkKSByZXR1cm47XG4gICAgem9vbS5lbmFibGVkID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAgcGFzc2l2ZUxpc3RlbmVyLFxuICAgICAgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZVxuICAgIH0gPSBnZXRMaXN0ZW5lcnMoKTtcblxuICAgIC8vIFNjYWxlIGltYWdlXG4gICAgc3dpcGVyLndyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIHN3aXBlci53cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkdlc3R1cmVDaGFuZ2UsIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmUpO1xuICAgIFsncG9pbnRlcnVwJywgJ3BvaW50ZXJjYW5jZWwnLCAncG9pbnRlcm91dCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9KTtcblxuICAgIC8vIE1vdmUgaW1hZ2VcbiAgICBzd2lwZXIud3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgb25Ub3VjaE1vdmUsIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmUpO1xuICB9XG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgZW5hYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgZGlzYWJsZSgpO1xuICB9KTtcbiAgb24oJ3RvdWNoU3RhcnQnLCAoX3MsIGUpID0+IHtcbiAgICBpZiAoIXN3aXBlci56b29tLmVuYWJsZWQpIHJldHVybjtcbiAgICBvblRvdWNoU3RhcnQoZSk7XG4gIH0pO1xuICBvbigndG91Y2hFbmQnLCAoX3MsIGUpID0+IHtcbiAgICBpZiAoIXN3aXBlci56b29tLmVuYWJsZWQpIHJldHVybjtcbiAgICBvblRvdWNoRW5kKCk7XG4gIH0pO1xuICBvbignZG91YmxlVGFwJywgKF9zLCBlKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nICYmIHN3aXBlci5wYXJhbXMuem9vbS5lbmFibGVkICYmIHN3aXBlci56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy56b29tLnRvZ2dsZSkge1xuICAgICAgem9vbVRvZ2dsZShlKTtcbiAgICB9XG4gIH0pO1xuICBvbigndHJhbnNpdGlvbkVuZCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgb25UcmFuc2l0aW9uRW5kKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIuem9vbS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMuem9vbS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgb25UcmFuc2l0aW9uRW5kKCk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIuem9vbSwge1xuICAgIGVuYWJsZSxcbiAgICBkaXNhYmxlLFxuICAgIGluOiB6b29tSW4sXG4gICAgb3V0OiB6b29tT3V0LFxuICAgIHRvZ2dsZTogem9vbVRvZ2dsZVxuICB9KTtcbn1cblxuZXhwb3J0IHsgWm9vbSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBuIGFzIG5leHRUaWNrLCBvIGFzIGVsZW1lbnRUcmFuc2l0aW9uRW5kIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbi8qIGVzbGludCBuby1iaXR3aXNlOiBbXCJlcnJvclwiLCB7IFwiYWxsb3dcIjogW1wiPj5cIl0gfV0gKi9cbmZ1bmN0aW9uIENvbnRyb2xsZXIoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBjb250cm9sbGVyOiB7XG4gICAgICBjb250cm9sOiB1bmRlZmluZWQsXG4gICAgICBpbnZlcnNlOiBmYWxzZSxcbiAgICAgIGJ5OiAnc2xpZGUnIC8vIG9yICdjb250YWluZXInXG4gICAgfVxuICB9KTtcblxuICBzd2lwZXIuY29udHJvbGxlciA9IHtcbiAgICBjb250cm9sOiB1bmRlZmluZWRcbiAgfTtcbiAgZnVuY3Rpb24gTGluZWFyU3BsaW5lKHgsIHkpIHtcbiAgICBjb25zdCBiaW5hcnlTZWFyY2ggPSBmdW5jdGlvbiBzZWFyY2goKSB7XG4gICAgICBsZXQgbWF4SW5kZXg7XG4gICAgICBsZXQgbWluSW5kZXg7XG4gICAgICBsZXQgZ3Vlc3M7XG4gICAgICByZXR1cm4gKGFycmF5LCB2YWwpID0+IHtcbiAgICAgICAgbWluSW5kZXggPSAtMTtcbiAgICAgICAgbWF4SW5kZXggPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChtYXhJbmRleCAtIG1pbkluZGV4ID4gMSkge1xuICAgICAgICAgIGd1ZXNzID0gbWF4SW5kZXggKyBtaW5JbmRleCA+PiAxO1xuICAgICAgICAgIGlmIChhcnJheVtndWVzc10gPD0gdmFsKSB7XG4gICAgICAgICAgICBtaW5JbmRleCA9IGd1ZXNzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXhJbmRleCA9IGd1ZXNzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4SW5kZXg7XG4gICAgICB9O1xuICAgIH0oKTtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB4Lmxlbmd0aCAtIDE7XG4gICAgLy8gR2l2ZW4gYW4geCB2YWx1ZSAoeDIpLCByZXR1cm4gdGhlIGV4cGVjdGVkIHkyIHZhbHVlOlxuICAgIC8vICh4MSx5MSkgaXMgdGhlIGtub3duIHBvaW50IGJlZm9yZSBnaXZlbiB2YWx1ZSxcbiAgICAvLyAoeDMseTMpIGlzIHRoZSBrbm93biBwb2ludCBhZnRlciBnaXZlbiB2YWx1ZS5cbiAgICBsZXQgaTE7XG4gICAgbGV0IGkzO1xuICAgIHRoaXMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZSh4Mikge1xuICAgICAgaWYgKCF4MikgcmV0dXJuIDA7XG5cbiAgICAgIC8vIEdldCB0aGUgaW5kZXhlcyBvZiB4MSBhbmQgeDMgKHRoZSBhcnJheSBpbmRleGVzIGJlZm9yZSBhbmQgYWZ0ZXIgZ2l2ZW4geDIpOlxuICAgICAgaTMgPSBiaW5hcnlTZWFyY2godGhpcy54LCB4Mik7XG4gICAgICBpMSA9IGkzIC0gMTtcblxuICAgICAgLy8gV2UgaGF2ZSBvdXIgaW5kZXhlcyBpMSAmIGkzLCBzbyB3ZSBjYW4gY2FsY3VsYXRlIGFscmVhZHk6XG4gICAgICAvLyB5MiA6PSAoKHgy4oiSeDEpIMOXICh5M+KIknkxKSkgw7cgKHgz4oiSeDEpICsgeTFcbiAgICAgIHJldHVybiAoeDIgLSB0aGlzLnhbaTFdKSAqICh0aGlzLnlbaTNdIC0gdGhpcy55W2kxXSkgLyAodGhpcy54W2kzXSAtIHRoaXMueFtpMV0pICsgdGhpcy55W2kxXTtcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIGdldEludGVycG9sYXRlRnVuY3Rpb24oYykge1xuICAgIHN3aXBlci5jb250cm9sbGVyLnNwbGluZSA9IHN3aXBlci5wYXJhbXMubG9vcCA/IG5ldyBMaW5lYXJTcGxpbmUoc3dpcGVyLnNsaWRlc0dyaWQsIGMuc2xpZGVzR3JpZCkgOiBuZXcgTGluZWFyU3BsaW5lKHN3aXBlci5zbmFwR3JpZCwgYy5zbmFwR3JpZCk7XG4gIH1cbiAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKF90LCBieUNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBjb250cm9sbGVkID0gc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbDtcbiAgICBsZXQgbXVsdGlwbGllcjtcbiAgICBsZXQgY29udHJvbGxlZFRyYW5zbGF0ZTtcbiAgICBjb25zdCBTd2lwZXIgPSBzd2lwZXIuY29uc3RydWN0b3I7XG4gICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjKSB7XG4gICAgICBpZiAoYy5kZXN0cm95ZWQpIHJldHVybjtcblxuICAgICAgLy8gdGhpcyB3aWxsIGNyZWF0ZSBhbiBJbnRlcnBvbGF0ZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgc25hcEdyaWRzXG4gICAgICAvLyB4IGlzIHRoZSBHcmlkIG9mIHRoZSBzY3JvbGxlZCBzY3JvbGxlciBhbmQgeSB3aWxsIGJlIHRoZSBjb250cm9sbGVkIHNjcm9sbGVyXG4gICAgICAvLyBpdCBtYWtlcyBzZW5zZSB0byBjcmVhdGUgdGhpcyBvbmx5IG9uY2UgYW5kIHJlY2FsbCBpdCBmb3IgdGhlIGludGVycG9sYXRpb25cbiAgICAgIC8vIHRoZSBmdW5jdGlvbiBkb2VzIGEgbG90IG9mIHZhbHVlIGNhY2hpbmcgZm9yIHBlcmZvcm1hbmNlXG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ3NsaWRlJykge1xuICAgICAgICBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uKGMpO1xuICAgICAgICAvLyBpIGFtIG5vdCBzdXJlIHdoeSB0aGUgdmFsdWVzIGhhdmUgdG8gYmUgbXVsdGlwbGljYXRlZCB0aGlzIHdheSwgdHJpZWQgdG8gaW52ZXJ0IHRoZSBzbmFwR3JpZFxuICAgICAgICAvLyBidXQgaXQgZGlkIG5vdCB3b3JrIG91dFxuICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gLXN3aXBlci5jb250cm9sbGVyLnNwbGluZS5pbnRlcnBvbGF0ZSgtdHJhbnNsYXRlKTtcbiAgICAgIH1cbiAgICAgIGlmICghY29udHJvbGxlZFRyYW5zbGF0ZSB8fCBzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuYnkgPT09ICdjb250YWluZXInKSB7XG4gICAgICAgIG11bHRpcGxpZXIgPSAoYy5tYXhUcmFuc2xhdGUoKSAtIGMubWluVHJhbnNsYXRlKCkpIC8gKHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSk7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4obXVsdGlwbGllcikgfHwgIU51bWJlci5pc0Zpbml0ZShtdWx0aXBsaWVyKSkge1xuICAgICAgICAgIG11bHRpcGxpZXIgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSAodHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAqIG11bHRpcGxpZXIgKyBjLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5pbnZlcnNlKSB7XG4gICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSBjLm1heFRyYW5zbGF0ZSgpIC0gY29udHJvbGxlZFRyYW5zbGF0ZTtcbiAgICAgIH1cbiAgICAgIGMudXBkYXRlUHJvZ3Jlc3MoY29udHJvbGxlZFRyYW5zbGF0ZSk7XG4gICAgICBjLnNldFRyYW5zbGF0ZShjb250cm9sbGVkVHJhbnNsYXRlLCBzd2lwZXIpO1xuICAgICAgYy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgYy51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2xsZWQpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xsZWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNvbnRyb2xsZWRbaV0gIT09IGJ5Q29udHJvbGxlciAmJiBjb250cm9sbGVkW2ldIGluc3RhbmNlb2YgU3dpcGVyKSB7XG4gICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udHJvbGxlZCBpbnN0YW5jZW9mIFN3aXBlciAmJiBieUNvbnRyb2xsZXIgIT09IGNvbnRyb2xsZWQpIHtcbiAgICAgIHNldENvbnRyb2xsZWRUcmFuc2xhdGUoY29udHJvbGxlZCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICAgIGNvbnN0IFN3aXBlciA9IHN3aXBlci5jb25zdHJ1Y3RvcjtcbiAgICBjb25zdCBjb250cm9sbGVkID0gc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbDtcbiAgICBsZXQgaTtcbiAgICBmdW5jdGlvbiBzZXRDb250cm9sbGVkVHJhbnNpdGlvbihjKSB7XG4gICAgICBpZiAoYy5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgIGMuc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgc3dpcGVyKTtcbiAgICAgIGlmIChkdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICBjLnRyYW5zaXRpb25TdGFydCgpO1xuICAgICAgICBpZiAoYy5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGMudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnRUcmFuc2l0aW9uRW5kKGMud3JhcHBlckVsLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKCFjb250cm9sbGVkKSByZXR1cm47XG4gICAgICAgICAgYy50cmFuc2l0aW9uRW5kKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb250cm9sbGVkKSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnRyb2xsZWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNvbnRyb2xsZWRbaV0gIT09IGJ5Q29udHJvbGxlciAmJiBjb250cm9sbGVkW2ldIGluc3RhbmNlb2YgU3dpcGVyKSB7XG4gICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oY29udHJvbGxlZFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRyb2xsZWQgaW5zdGFuY2VvZiBTd2lwZXIgJiYgYnlDb250cm9sbGVyICE9PSBjb250cm9sbGVkKSB7XG4gICAgICBzZXRDb250cm9sbGVkVHJhbnNpdGlvbihjb250cm9sbGVkKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlU3BsaW5lKCkge1xuICAgIGlmICghc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCkgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgIHN3aXBlci5jb250cm9sbGVyLnNwbGluZSA9IHVuZGVmaW5lZDtcbiAgICAgIGRlbGV0ZSBzd2lwZXIuY29udHJvbGxlci5zcGxpbmU7XG4gICAgfVxuICB9XG4gIG9uKCdiZWZvcmVJbml0JywgKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHR5cGVvZiBzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuY29udHJvbCA9PT0gJ3N0cmluZycgfHwgc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmNvbnRyb2wgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2xFbGVtZW50cyA9IHR5cGVvZiBzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuY29udHJvbCA9PT0gJ3N0cmluZycgPyBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuY29udHJvbCldIDogW3N3aXBlci5wYXJhbXMuY29udHJvbGxlci5jb250cm9sXTtcbiAgICAgIGNvbnRyb2xFbGVtZW50cy5mb3JFYWNoKGNvbnRyb2xFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sKSBzd2lwZXIuY29udHJvbGxlci5jb250cm9sID0gW107XG4gICAgICAgIGlmIChjb250cm9sRWxlbWVudCAmJiBjb250cm9sRWxlbWVudC5zd2lwZXIpIHtcbiAgICAgICAgICBzd2lwZXIuY29udHJvbGxlci5jb250cm9sLnB1c2goY29udHJvbEVsZW1lbnQuc3dpcGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb250cm9sRWxlbWVudCkge1xuICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGAke3N3aXBlci5wYXJhbXMuZXZlbnRzUHJlZml4fWluaXRgO1xuICAgICAgICAgIGNvbnN0IG9uQ29udHJvbGxlclN3aXBlciA9IGUgPT4ge1xuICAgICAgICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbC5wdXNoKGUuZGV0YWlsWzBdKTtcbiAgICAgICAgICAgIHN3aXBlci51cGRhdGUoKTtcbiAgICAgICAgICAgIGNvbnRyb2xFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBvbkNvbnRyb2xsZXJTd2lwZXIpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgY29udHJvbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG9uQ29udHJvbGxlclN3aXBlcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2lwZXIuY29udHJvbGxlci5jb250cm9sID0gc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmNvbnRyb2w7XG4gIH0pO1xuICBvbigndXBkYXRlJywgKCkgPT4ge1xuICAgIHJlbW92ZVNwbGluZSgpO1xuICB9KTtcbiAgb24oJ3Jlc2l6ZScsICgpID0+IHtcbiAgICByZW1vdmVTcGxpbmUoKTtcbiAgfSk7XG4gIG9uKCdvYnNlcnZlclVwZGF0ZScsICgpID0+IHtcbiAgICByZW1vdmVTcGxpbmUoKTtcbiAgfSk7XG4gIG9uKCdzZXRUcmFuc2xhdGUnLCAoX3MsIHRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sIHx8IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wuZGVzdHJveWVkKSByZXR1cm47XG4gICAgc3dpcGVyLmNvbnRyb2xsZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcbiAgfSk7XG4gIG9uKCdzZXRUcmFuc2l0aW9uJywgKF9zLCBkdXJhdGlvbiwgYnlDb250cm9sbGVyKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sIHx8IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wuZGVzdHJveWVkKSByZXR1cm47XG4gICAgc3dpcGVyLmNvbnRyb2xsZXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgYnlDb250cm9sbGVyKTtcbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLmNvbnRyb2xsZXIsIHtcbiAgICBzZXRUcmFuc2xhdGUsXG4gICAgc2V0VHJhbnNpdGlvblxuICB9KTtcbn1cblxuZXhwb3J0IHsgQ29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBnIGFzIGdldERvY3VtZW50IH0gZnJvbSAnLi4vc2hhcmVkL3Nzci13aW5kb3cuZXNtLm1qcyc7XG5pbXBvcnQgeyBjIGFzIGNsYXNzZXNUb1NlbGVjdG9yIH0gZnJvbSAnLi4vc2hhcmVkL2NsYXNzZXMtdG8tc2VsZWN0b3IubWpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlRWxlbWVudCwgaiBhcyBlbGVtZW50SW5kZXgsIG0gYXMgbWFrZUVsZW1lbnRzQXJyYXksIHMgYXMgc2V0SW5uZXJIVE1MIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbmZ1bmN0aW9uIEExMXkoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBhMTF5OiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgbm90aWZpY2F0aW9uQ2xhc3M6ICdzd2lwZXItbm90aWZpY2F0aW9uJyxcbiAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICdQcmV2aW91cyBzbGlkZScsXG4gICAgICBuZXh0U2xpZGVNZXNzYWdlOiAnTmV4dCBzbGlkZScsXG4gICAgICBmaXJzdFNsaWRlTWVzc2FnZTogJ1RoaXMgaXMgdGhlIGZpcnN0IHNsaWRlJyxcbiAgICAgIGxhc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBsYXN0IHNsaWRlJyxcbiAgICAgIHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlOiAnR28gdG8gc2xpZGUge3tpbmRleH19JyxcbiAgICAgIHNsaWRlTGFiZWxNZXNzYWdlOiAne3tpbmRleH19IC8ge3tzbGlkZXNMZW5ndGh9fScsXG4gICAgICBjb250YWluZXJNZXNzYWdlOiBudWxsLFxuICAgICAgY29udGFpbmVyUm9sZURlc2NyaXB0aW9uTWVzc2FnZTogbnVsbCxcbiAgICAgIGNvbnRhaW5lclJvbGU6IG51bGwsXG4gICAgICBpdGVtUm9sZURlc2NyaXB0aW9uTWVzc2FnZTogbnVsbCxcbiAgICAgIHNsaWRlUm9sZTogJ2dyb3VwJyxcbiAgICAgIGlkOiBudWxsLFxuICAgICAgc2Nyb2xsT25Gb2N1czogdHJ1ZSxcbiAgICAgIHdyYXBwZXJMaXZlUmVnaW9uOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLmExMXkgPSB7XG4gICAgY2xpY2tlZDogZmFsc2VcbiAgfTtcbiAgbGV0IGxpdmVSZWdpb24gPSBudWxsO1xuICBsZXQgcHJldmVudEZvY3VzSGFuZGxlcjtcbiAgbGV0IGZvY3VzVGFyZ2V0U2xpZGVFbDtcbiAgbGV0IHZpc2liaWxpdHlDaGFuZ2VkVGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIGZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlKSB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbGl2ZVJlZ2lvbjtcbiAgICBpZiAobm90aWZpY2F0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHNldElubmVySFRNTChub3RpZmljYXRpb24sIG1lc3NhZ2UpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihzaXplID0gMTYpIHtcbiAgICBjb25zdCByYW5kb21DaGFyID0gKCkgPT4gTWF0aC5yb3VuZCgxNiAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gJ3gnLnJlcGVhdChzaXplKS5yZXBsYWNlKC94L2csIHJhbmRvbUNoYXIpO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VFbEZvY3VzYWJsZShlbCkge1xuICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgc3ViRWwuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsICcwJyk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUVsTm90Rm9jdXNhYmxlKGVsKSB7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgJy0xJyk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkRWxSb2xlKGVsLCByb2xlKSB7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCByb2xlKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhZGRFbFJvbGVEZXNjcmlwdGlvbihlbCwgZGVzY3JpcHRpb24pIHtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLnNldEF0dHJpYnV0ZSgnYXJpYS1yb2xlZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbik7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkRWxDb250cm9scyhlbCwgY29udHJvbHMpIHtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGNvbnRyb2xzKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhZGRFbExhYmVsKGVsLCBsYWJlbCkge1xuICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgc3ViRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEVsSWQoZWwsIGlkKSB7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEVsTGl2ZShlbCwgbGl2ZSkge1xuICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgc3ViRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBsaXZlKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBkaXNhYmxlRWwoZWwpIHtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGVuYWJsZUVsKGVsKSB7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gb25FbnRlck9yU3BhY2VLZXkoZSkge1xuICAgIGlmIChlLmtleUNvZGUgIT09IDEzICYmIGUua2V5Q29kZSAhPT0gMzIpIHJldHVybjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBlLnRhcmdldDtcbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhZ2luYXRpb24uZWwgJiYgKHRhcmdldEVsID09PSBzd2lwZXIucGFnaW5hdGlvbi5lbCB8fCBzd2lwZXIucGFnaW5hdGlvbi5lbC5jb250YWlucyhlLnRhcmdldCkpKSB7XG4gICAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoY2xhc3Nlc1RvU2VsZWN0b3Ioc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSkpIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCAmJiBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwpIHtcbiAgICAgIGNvbnN0IHByZXZFbHMgPSBtYWtlRWxlbWVudHNBcnJheShzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwpO1xuICAgICAgY29uc3QgbmV4dEVscyA9IG1ha2VFbGVtZW50c0FycmF5KHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCk7XG4gICAgICBpZiAobmV4dEVscy5pbmNsdWRlcyh0YXJnZXRFbCkpIHtcbiAgICAgICAgaWYgKCEoc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmxvb3ApKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgICBub3RpZnkocGFyYW1zLmxhc3RTbGlkZU1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdGlmeShwYXJhbXMubmV4dFNsaWRlTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcmV2RWxzLmluY2x1ZGVzKHRhcmdldEVsKSkge1xuICAgICAgICBpZiAoIShzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICAgIG5vdGlmeShwYXJhbXMuZmlyc3RTbGlkZU1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdGlmeShwYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHRhcmdldEVsLm1hdGNoZXMoY2xhc3Nlc1RvU2VsZWN0b3Ioc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSkpIHtcbiAgICAgIHRhcmdldEVsLmNsaWNrKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb24oKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCB8fCBzd2lwZXIucGFyYW1zLnJld2luZCB8fCAhc3dpcGVyLm5hdmlnYXRpb24pIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBuZXh0RWwsXG4gICAgICBwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICBkaXNhYmxlRWwocHJldkVsKTtcbiAgICAgICAgbWFrZUVsTm90Rm9jdXNhYmxlKHByZXZFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmFibGVFbChwcmV2RWwpO1xuICAgICAgICBtYWtlRWxGb2N1c2FibGUocHJldkVsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5leHRFbCkge1xuICAgICAgaWYgKHN3aXBlci5pc0VuZCkge1xuICAgICAgICBkaXNhYmxlRWwobmV4dEVsKTtcbiAgICAgICAgbWFrZUVsTm90Rm9jdXNhYmxlKG5leHRFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmFibGVFbChuZXh0RWwpO1xuICAgICAgICBtYWtlRWxGb2N1c2FibGUobmV4dEVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFzUGFnaW5hdGlvbigpIHtcbiAgICByZXR1cm4gc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aDtcbiAgfVxuICBmdW5jdGlvbiBoYXNDbGlja2FibGVQYWdpbmF0aW9uKCkge1xuICAgIHJldHVybiBoYXNQYWdpbmF0aW9uKCkgJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVQYWdpbmF0aW9uKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuYTExeTtcbiAgICBpZiAoIWhhc1BhZ2luYXRpb24oKSkgcmV0dXJuO1xuICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMuZm9yRWFjaChidWxsZXRFbCA9PiB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSkge1xuICAgICAgICBtYWtlRWxGb2N1c2FibGUoYnVsbGV0RWwpO1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5yZW5kZXJCdWxsZXQpIHtcbiAgICAgICAgICBhZGRFbFJvbGUoYnVsbGV0RWwsICdidXR0b24nKTtcbiAgICAgICAgICBhZGRFbExhYmVsKGJ1bGxldEVsLCBwYXJhbXMucGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2UucmVwbGFjZSgvXFx7XFx7aW5kZXhcXH1cXH0vLCBlbGVtZW50SW5kZXgoYnVsbGV0RWwpICsgMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYnVsbGV0RWwubWF0Y2hlcyhjbGFzc2VzVG9TZWxlY3Rvcihzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0QWN0aXZlQ2xhc3MpKSkge1xuICAgICAgICBidWxsZXRFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidWxsZXRFbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGluaXROYXZFbCA9IChlbCwgd3JhcHBlcklkLCBtZXNzYWdlKSA9PiB7XG4gICAgbWFrZUVsRm9jdXNhYmxlKGVsKTtcbiAgICBpZiAoZWwudGFnTmFtZSAhPT0gJ0JVVFRPTicpIHtcbiAgICAgIGFkZEVsUm9sZShlbCwgJ2J1dHRvbicpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICB9XG4gICAgYWRkRWxMYWJlbChlbCwgbWVzc2FnZSk7XG4gICAgYWRkRWxDb250cm9scyhlbCwgd3JhcHBlcklkKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUG9pbnRlckRvd24gPSBlID0+IHtcbiAgICBpZiAoZm9jdXNUYXJnZXRTbGlkZUVsICYmIGZvY3VzVGFyZ2V0U2xpZGVFbCAhPT0gZS50YXJnZXQgJiYgIWZvY3VzVGFyZ2V0U2xpZGVFbC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHByZXZlbnRGb2N1c0hhbmRsZXIgPSB0cnVlO1xuICAgIH1cbiAgICBzd2lwZXIuYTExeS5jbGlja2VkID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgIHByZXZlbnRGb2N1c0hhbmRsZXIgPSBmYWxzZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKCFzd2lwZXIuZGVzdHJveWVkKSB7XG4gICAgICAgICAgc3dpcGVyLmExMXkuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgb25WaXNpYmlsaXR5Q2hhbmdlID0gZSA9PiB7XG4gICAgdmlzaWJpbGl0eUNoYW5nZWRUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSBlID0+IHtcbiAgICBpZiAoc3dpcGVyLmExMXkuY2xpY2tlZCB8fCAhc3dpcGVyLnBhcmFtcy5hMTF5LnNjcm9sbE9uRm9jdXMpIHJldHVybjtcbiAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB2aXNpYmlsaXR5Q2hhbmdlZFRpbWVzdGFtcCA8IDEwMCkgcmV0dXJuO1xuICAgIGNvbnN0IHNsaWRlRWwgPSBlLnRhcmdldC5jbG9zZXN0KGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKTtcbiAgICBpZiAoIXNsaWRlRWwgfHwgIXN3aXBlci5zbGlkZXMuaW5jbHVkZXMoc2xpZGVFbCkpIHJldHVybjtcbiAgICBmb2N1c1RhcmdldFNsaWRlRWwgPSBzbGlkZUVsO1xuICAgIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gKGlzVmlydHVhbCA/IHBhcnNlSW50KHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCkgOiBzd2lwZXIuc2xpZGVzLmluZGV4T2Yoc2xpZGVFbCkpID09PSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gc3dpcGVyLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzICYmIHN3aXBlci52aXNpYmxlU2xpZGVzICYmIHN3aXBlci52aXNpYmxlU2xpZGVzLmluY2x1ZGVzKHNsaWRlRWwpO1xuICAgIGlmIChpc0FjdGl2ZSB8fCBpc1Zpc2libGUpIHJldHVybjtcbiAgICBpZiAoZS5zb3VyY2VDYXBhYmlsaXRpZXMgJiYgZS5zb3VyY2VDYXBhYmlsaXRpZXMuZmlyZXNUb3VjaEV2ZW50cykgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHN3aXBlci5lbC5zY3JvbGxMZWZ0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVsLnNjcm9sbFRvcCA9IDA7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAocHJldmVudEZvY3VzSGFuZGxlcikgcmV0dXJuO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUb0xvb3Aoc3dpcGVyLmdldFNsaWRlSW5kZXhXaGVuR3JpZChwYXJzZUludChzbGlkZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSkpLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5nZXRTbGlkZUluZGV4V2hlbkdyaWQocGFyc2VJbnQoc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKSksIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmdldFNsaWRlSW5kZXhXaGVuR3JpZChzd2lwZXIuc2xpZGVzLmluZGV4T2Yoc2xpZGVFbCkpLCAwKTtcbiAgICAgIH1cbiAgICAgIHByZXZlbnRGb2N1c0hhbmRsZXIgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaW5pdFNsaWRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG4gICAgaWYgKHBhcmFtcy5pdGVtUm9sZURlc2NyaXB0aW9uTWVzc2FnZSkge1xuICAgICAgYWRkRWxSb2xlRGVzY3JpcHRpb24oc3dpcGVyLnNsaWRlcywgcGFyYW1zLml0ZW1Sb2xlRGVzY3JpcHRpb25NZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5zbGlkZVJvbGUpIHtcbiAgICAgIGFkZEVsUm9sZShzd2lwZXIuc2xpZGVzLCBwYXJhbXMuc2xpZGVSb2xlKTtcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVzTGVuZ3RoID0gc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgaWYgKHBhcmFtcy5zbGlkZUxhYmVsTWVzc2FnZSkge1xuICAgICAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKChzbGlkZUVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzbGlkZUluZGV4ID0gc3dpcGVyLnBhcmFtcy5sb29wID8gcGFyc2VJbnQoc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKSA6IGluZGV4O1xuICAgICAgICBjb25zdCBhcmlhTGFiZWxNZXNzYWdlID0gcGFyYW1zLnNsaWRlTGFiZWxNZXNzYWdlLnJlcGxhY2UoL1xce1xce2luZGV4XFx9XFx9Lywgc2xpZGVJbmRleCArIDEpLnJlcGxhY2UoL1xce1xce3NsaWRlc0xlbmd0aFxcfVxcfS8sIHNsaWRlc0xlbmd0aCk7XG4gICAgICAgIGFkZEVsTGFiZWwoc2xpZGVFbCwgYXJpYUxhYmVsTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5hMTF5O1xuICAgIHN3aXBlci5lbC5hcHBlbmQobGl2ZVJlZ2lvbik7XG5cbiAgICAvLyBDb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXJFbCA9IHN3aXBlci5lbDtcbiAgICBpZiAocGFyYW1zLmNvbnRhaW5lclJvbGVEZXNjcmlwdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGFkZEVsUm9sZURlc2NyaXB0aW9uKGNvbnRhaW5lckVsLCBwYXJhbXMuY29udGFpbmVyUm9sZURlc2NyaXB0aW9uTWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuY29udGFpbmVyTWVzc2FnZSkge1xuICAgICAgYWRkRWxMYWJlbChjb250YWluZXJFbCwgcGFyYW1zLmNvbnRhaW5lck1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmNvbnRhaW5lclJvbGUpIHtcbiAgICAgIGFkZEVsUm9sZShjb250YWluZXJFbCwgcGFyYW1zLmNvbnRhaW5lclJvbGUpO1xuICAgIH1cblxuICAgIC8vIFdyYXBwZXJcbiAgICBjb25zdCB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsO1xuICAgIGNvbnN0IHdyYXBwZXJJZCA9IHBhcmFtcy5pZCB8fCB3cmFwcGVyRWwuZ2V0QXR0cmlidXRlKCdpZCcpIHx8IGBzd2lwZXItd3JhcHBlci0ke2dldFJhbmRvbU51bWJlcigxNil9YDtcbiAgICBhZGRFbElkKHdyYXBwZXJFbCwgd3JhcHBlcklkKTtcbiAgICBpZiAocGFyYW1zLndyYXBwZXJMaXZlUmVnaW9uKSB7XG4gICAgICBjb25zdCBsaXZlID0gc3dpcGVyLnBhcmFtcy5hdXRvcGxheSAmJiBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmVuYWJsZWQgPyAnb2ZmJyA6ICdwb2xpdGUnO1xuICAgICAgYWRkRWxMaXZlKHdyYXBwZXJFbCwgbGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gU2xpZGVcbiAgICBpbml0U2xpZGVzKCk7XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgbGV0IHtcbiAgICAgIG5leHRFbCxcbiAgICAgIHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbiA/IHN3aXBlci5uYXZpZ2F0aW9uIDoge307XG4gICAgbmV4dEVsID0gbWFrZUVsZW1lbnRzQXJyYXkobmV4dEVsKTtcbiAgICBwcmV2RWwgPSBtYWtlRWxlbWVudHNBcnJheShwcmV2RWwpO1xuICAgIGlmIChuZXh0RWwpIHtcbiAgICAgIG5leHRFbC5mb3JFYWNoKGVsID0+IGluaXROYXZFbChlbCwgd3JhcHBlcklkLCBwYXJhbXMubmV4dFNsaWRlTWVzc2FnZSkpO1xuICAgIH1cbiAgICBpZiAocHJldkVsKSB7XG4gICAgICBwcmV2RWwuZm9yRWFjaChlbCA9PiBpbml0TmF2RWwoZWwsIHdyYXBwZXJJZCwgcGFyYW1zLnByZXZTbGlkZU1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgaWYgKGhhc0NsaWNrYWJsZVBhZ2luYXRpb24oKSkge1xuICAgICAgY29uc3QgcGFnaW5hdGlvbkVsID0gbWFrZUVsZW1lbnRzQXJyYXkoc3dpcGVyLnBhZ2luYXRpb24uZWwpO1xuICAgICAgcGFnaW5hdGlvbkVsLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25FbnRlck9yU3BhY2VLZXkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVGFiIGZvY3VzXG4gICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UpO1xuICAgIHN3aXBlci5lbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzLCB0cnVlKTtcbiAgICBzd2lwZXIuZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBoYW5kbGVQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgc3dpcGVyLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIGhhbmRsZVBvaW50ZXJVcCwgdHJ1ZSk7XG4gIH07XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKGxpdmVSZWdpb24pIGxpdmVSZWdpb24ucmVtb3ZlKCk7XG4gICAgbGV0IHtcbiAgICAgIG5leHRFbCxcbiAgICAgIHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbiA/IHN3aXBlci5uYXZpZ2F0aW9uIDoge307XG4gICAgbmV4dEVsID0gbWFrZUVsZW1lbnRzQXJyYXkobmV4dEVsKTtcbiAgICBwcmV2RWwgPSBtYWtlRWxlbWVudHNBcnJheShwcmV2RWwpO1xuICAgIGlmIChuZXh0RWwpIHtcbiAgICAgIG5leHRFbC5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkVudGVyT3JTcGFjZUtleSkpO1xuICAgIH1cbiAgICBpZiAocHJldkVsKSB7XG4gICAgICBwcmV2RWwuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25FbnRlck9yU3BhY2VLZXkpKTtcbiAgICB9XG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgaWYgKGhhc0NsaWNrYWJsZVBhZ2luYXRpb24oKSkge1xuICAgICAgY29uc3QgcGFnaW5hdGlvbkVsID0gbWFrZUVsZW1lbnRzQXJyYXkoc3dpcGVyLnBhZ2luYXRpb24uZWwpO1xuICAgICAgcGFnaW5hdGlvbkVsLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25FbnRlck9yU3BhY2VLZXkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlKTtcbiAgICAvLyBUYWIgZm9jdXNcbiAgICBpZiAoc3dpcGVyLmVsICYmIHR5cGVvZiBzd2lwZXIuZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2lwZXIuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cywgdHJ1ZSk7XG4gICAgICBzd2lwZXIuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBoYW5kbGVQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgICBzd2lwZXIuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgaGFuZGxlUG9pbnRlclVwLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgb24oJ2JlZm9yZUluaXQnLCAoKSA9PiB7XG4gICAgbGl2ZVJlZ2lvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBzd2lwZXIucGFyYW1zLmExMXkubm90aWZpY2F0aW9uQ2xhc3MpO1xuICAgIGxpdmVSZWdpb24uc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAnYXNzZXJ0aXZlJyk7XG4gICAgbGl2ZVJlZ2lvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtYXRvbWljJywgJ3RydWUnKTtcbiAgfSk7XG4gIG9uKCdhZnRlckluaXQnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGluaXQoKTtcbiAgfSk7XG4gIG9uKCdzbGlkZXNMZW5ndGhDaGFuZ2Ugc25hcEdyaWRMZW5ndGhDaGFuZ2Ugc2xpZGVzR3JpZExlbmd0aENoYW5nZScsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgaW5pdFNsaWRlcygpO1xuICB9KTtcbiAgb24oJ2Zyb21FZGdlIHRvRWRnZSBhZnRlckluaXQgbG9jayB1bmxvY2snLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHVwZGF0ZU5hdmlnYXRpb24oKTtcbiAgfSk7XG4gIG9uKCdwYWdpbmF0aW9uVXBkYXRlJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICB1cGRhdGVQYWdpbmF0aW9uKCk7XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgZGVzdHJveSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgQTExeSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBhIGFzIGdldFdpbmRvdyB9IGZyb20gJy4uL3NoYXJlZC9zc3Itd2luZG93LmVzbS5tanMnO1xuXG5mdW5jdGlvbiBIaXN0b3J5KHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uXG59KSB7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgaGlzdG9yeToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICByb290OiAnJyxcbiAgICAgIHJlcGxhY2VTdGF0ZTogZmFsc2UsXG4gICAgICBrZXk6ICdzbGlkZXMnLFxuICAgICAga2VlcFF1ZXJ5OiBmYWxzZVxuICAgIH1cbiAgfSk7XG4gIGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBsZXQgcGF0aHMgPSB7fTtcbiAgY29uc3Qgc2x1Z2lmeSA9IHRleHQgPT4ge1xuICAgIHJldHVybiB0ZXh0LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpLnJlcGxhY2UoL1teXFx3LV0rL2csICcnKS5yZXBsYWNlKC8tLSsvZywgJy0nKS5yZXBsYWNlKC9eLSsvLCAnJykucmVwbGFjZSgvLSskLywgJycpO1xuICB9O1xuICBjb25zdCBnZXRQYXRoVmFsdWVzID0gdXJsT3ZlcnJpZGUgPT4ge1xuICAgIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICAgIGxldCBsb2NhdGlvbjtcbiAgICBpZiAodXJsT3ZlcnJpZGUpIHtcbiAgICAgIGxvY2F0aW9uID0gbmV3IFVSTCh1cmxPdmVycmlkZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICAgIH1cbiAgICBjb25zdCBwYXRoQXJyYXkgPSBsb2NhdGlvbi5wYXRobmFtZS5zbGljZSgxKS5zcGxpdCgnLycpLmZpbHRlcihwYXJ0ID0+IHBhcnQgIT09ICcnKTtcbiAgICBjb25zdCB0b3RhbCA9IHBhdGhBcnJheS5sZW5ndGg7XG4gICAgY29uc3Qga2V5ID0gcGF0aEFycmF5W3RvdGFsIC0gMl07XG4gICAgY29uc3QgdmFsdWUgPSBwYXRoQXJyYXlbdG90YWwgLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAga2V5LFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9O1xuICBjb25zdCBzZXRIaXN0b3J5ID0gKGtleSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgICBpZiAoIWluaXRpYWxpemVkIHx8ICFzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGxldCBsb2NhdGlvbjtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy51cmwpIHtcbiAgICAgIGxvY2F0aW9uID0gbmV3IFVSTChzd2lwZXIucGFyYW1zLnVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICAgIH1cbiAgICBjb25zdCBzbGlkZSA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gc3dpcGVyLnNsaWRlc0VsLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7aW5kZXh9XCJdYCkgOiBzd2lwZXIuc2xpZGVzW2luZGV4XTtcbiAgICBsZXQgdmFsdWUgPSBzbHVnaWZ5KHNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1oaXN0b3J5JykpO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3Rvcnkucm9vdC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgcm9vdCA9IHN3aXBlci5wYXJhbXMuaGlzdG9yeS5yb290O1xuICAgICAgaWYgKHJvb3Rbcm9vdC5sZW5ndGggLSAxXSA9PT0gJy8nKSByb290ID0gcm9vdC5zbGljZSgwLCByb290Lmxlbmd0aCAtIDEpO1xuICAgICAgdmFsdWUgPSBgJHtyb290fS8ke2tleSA/IGAke2tleX0vYCA6ICcnfSR7dmFsdWV9YDtcbiAgICB9IGVsc2UgaWYgKCFsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICB2YWx1ZSA9IGAke2tleSA/IGAke2tleX0vYCA6ICcnfSR7dmFsdWV9YDtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaGlzdG9yeS5rZWVwUXVlcnkpIHtcbiAgICAgIHZhbHVlICs9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gd2luZG93Lmhpc3Rvcnkuc3RhdGU7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe1xuICAgICAgICB2YWx1ZVxuICAgICAgfSwgbnVsbCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICB2YWx1ZVxuICAgICAgfSwgbnVsbCwgdmFsdWUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2Nyb2xsVG9TbGlkZSA9IChzcGVlZCwgdmFsdWUsIHJ1bkNhbGxiYWNrcykgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc2xpZGUgPSBzd2lwZXIuc2xpZGVzW2ldO1xuICAgICAgICBjb25zdCBzbGlkZUhpc3RvcnkgPSBzbHVnaWZ5KHNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1oaXN0b3J5JykpO1xuICAgICAgICBpZiAoc2xpZGVIaXN0b3J5ID09PSB2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXgoc2xpZGUpO1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbygwLCBzcGVlZCwgcnVuQ2FsbGJhY2tzKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNldEhpc3RvcnlQb3BTdGF0ZSA9ICgpID0+IHtcbiAgICBwYXRocyA9IGdldFBhdGhWYWx1ZXMoc3dpcGVyLnBhcmFtcy51cmwpO1xuICAgIHNjcm9sbFRvU2xpZGUoc3dpcGVyLnBhcmFtcy5zcGVlZCwgcGF0aHMudmFsdWUsIGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGlzdG9yeSkgcmV0dXJuO1xuICAgIGlmICghd2luZG93Lmhpc3RvcnkgfHwgIXdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSkge1xuICAgICAgc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBwYXRocyA9IGdldFBhdGhWYWx1ZXMoc3dpcGVyLnBhcmFtcy51cmwpO1xuICAgIGlmICghcGF0aHMua2V5ICYmICFwYXRocy52YWx1ZSkge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHNldEhpc3RvcnlQb3BTdGF0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNjcm9sbFRvU2xpZGUoMCwgcGF0aHMudmFsdWUsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KTtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHNldEhpc3RvcnlQb3BTdGF0ZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgc2V0SGlzdG9yeVBvcFN0YXRlKTtcbiAgICB9XG4gIH07XG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkge1xuICAgICAgaW5pdCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkge1xuICAgICAgZGVzdHJveSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCd0cmFuc2l0aW9uRW5kIF9mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJywgKCkgPT4ge1xuICAgIGlmIChpbml0aWFsaXplZCkge1xuICAgICAgc2V0SGlzdG9yeShzd2lwZXIucGFyYW1zLmhpc3Rvcnkua2V5LCBzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbGlkZUNoYW5nZScsICgpID0+IHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzZXRIaXN0b3J5KHN3aXBlci5wYXJhbXMuaGlzdG9yeS5rZXksIHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgSGlzdG9yeSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBnIGFzIGdldERvY3VtZW50LCBhIGFzIGdldFdpbmRvdyB9IGZyb20gJy4uL3NoYXJlZC9zc3Itd2luZG93LmVzbS5tanMnO1xuaW1wb3J0IHsgZSBhcyBlbGVtZW50Q2hpbGRyZW4gfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMubWpzJztcblxuZnVuY3Rpb24gSGFzaE5hdmlnYXRpb24oe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgZW1pdCxcbiAgb25cbn0pIHtcbiAgbGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgaGFzaE5hdmlnYXRpb246IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcmVwbGFjZVN0YXRlOiBmYWxzZSxcbiAgICAgIHdhdGNoU3RhdGU6IGZhbHNlLFxuICAgICAgZ2V0U2xpZGVJbmRleChfcywgaGFzaCkge1xuICAgICAgICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZVdpdGhIYXNoID0gc3dpcGVyLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzaCcpID09PSBoYXNoKTtcbiAgICAgICAgICBpZiAoIXNsaWRlV2l0aEhhc2gpIHJldHVybiAwO1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2xpZGVXaXRoSGFzaC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN3aXBlci5nZXRTbGlkZUluZGV4KGVsZW1lbnRDaGlsZHJlbihzd2lwZXIuc2xpZGVzRWwsIGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtaGFzaD1cIiR7aGFzaH1cIl0sIHN3aXBlci1zbGlkZVtkYXRhLWhhc2g9XCIke2hhc2h9XCJdYClbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGNvbnN0IG9uSGFzaENoYW5nZSA9ICgpID0+IHtcbiAgICBlbWl0KCdoYXNoQ2hhbmdlJyk7XG4gICAgY29uc3QgbmV3SGFzaCA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICBjb25zdCBhY3RpdmVTbGlkZUVsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgPyBzd2lwZXIuc2xpZGVzRWwucXVlcnlTZWxlY3RvcihgW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzd2lwZXIuYWN0aXZlSW5kZXh9XCJdYCkgOiBzd2lwZXIuc2xpZGVzW3N3aXBlci5hY3RpdmVJbmRleF07XG4gICAgY29uc3QgYWN0aXZlU2xpZGVIYXNoID0gYWN0aXZlU2xpZGVFbCA/IGFjdGl2ZVNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWhhc2gnKSA6ICcnO1xuICAgIGlmIChuZXdIYXNoICE9PSBhY3RpdmVTbGlkZUhhc2gpIHtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5nZXRTbGlkZUluZGV4KHN3aXBlciwgbmV3SGFzaCk7XG4gICAgICBpZiAodHlwZW9mIG5ld0luZGV4ID09PSAndW5kZWZpbmVkJyB8fCBOdW1iZXIuaXNOYU4obmV3SW5kZXgpKSByZXR1cm47XG4gICAgICBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRIYXNoID0gKCkgPT4ge1xuICAgIGlmICghaW5pdGlhbGl6ZWQgfHwgIXN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGFjdGl2ZVNsaWRlRWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci5zbGlkZXNFbC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3N3aXBlci5hY3RpdmVJbmRleH1cIl1gKSA6IHN3aXBlci5zbGlkZXNbc3dpcGVyLmFjdGl2ZUluZGV4XTtcbiAgICBjb25zdCBhY3RpdmVTbGlkZUhhc2ggPSBhY3RpdmVTbGlkZUVsID8gYWN0aXZlU2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzaCcpIHx8IGFjdGl2ZVNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWhpc3RvcnknKSA6ICcnO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLnJlcGxhY2VTdGF0ZSAmJiB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBgIyR7YWN0aXZlU2xpZGVIYXNofWAgfHwgJycpO1xuICAgICAgZW1pdCgnaGFzaFNldCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5oYXNoID0gYWN0aXZlU2xpZGVIYXNoIHx8ICcnO1xuICAgICAgZW1pdCgnaGFzaFNldCcpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCB8fCBzd2lwZXIucGFyYW1zLmhpc3RvcnkgJiYgc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpIHJldHVybjtcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgY29uc3QgaGFzaCA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICBpZiAoaGFzaCkge1xuICAgICAgY29uc3Qgc3BlZWQgPSAwO1xuICAgICAgY29uc3QgaW5kZXggPSBzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmdldFNsaWRlSW5kZXgoc3dpcGVyLCBoYXNoKTtcbiAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4IHx8IDAsIHNwZWVkLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLndhdGNoU3RhdGUpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24ud2F0Y2hTdGF0ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfTtcbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCkge1xuICAgICAgaW5pdCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQpIHtcbiAgICAgIGRlc3Ryb3koKTtcbiAgICB9XG4gIH0pO1xuICBvbigndHJhbnNpdGlvbkVuZCBfZnJlZU1vZGVOb01vbWVudHVtUmVsZWFzZScsICgpID0+IHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHNldEhhc2goKTtcbiAgICB9XG4gIH0pO1xuICBvbignc2xpZGVDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxpemVkICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc2V0SGFzaCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IEhhc2hOYXZpZ2F0aW9uIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGcgYXMgZ2V0RG9jdW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzJztcblxuLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBcIm9mZlwiICovXG4vKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIEF1dG9wbGF5KHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uLFxuICBlbWl0LFxuICBwYXJhbXNcbn0pIHtcbiAgc3dpcGVyLmF1dG9wbGF5ID0ge1xuICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgIHBhdXNlZDogZmFsc2UsXG4gICAgdGltZUxlZnQ6IDBcbiAgfTtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBhdXRvcGxheToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBkZWxheTogMzAwMCxcbiAgICAgIHdhaXRGb3JUcmFuc2l0aW9uOiB0cnVlLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgc3RvcE9uTGFzdFNsaWRlOiBmYWxzZSxcbiAgICAgIHJldmVyc2VEaXJlY3Rpb246IGZhbHNlLFxuICAgICAgcGF1c2VPbk1vdXNlRW50ZXI6IGZhbHNlXG4gICAgfVxuICB9KTtcbiAgbGV0IHRpbWVvdXQ7XG4gIGxldCByYWY7XG4gIGxldCBhdXRvcGxheURlbGF5VG90YWwgPSBwYXJhbXMgJiYgcGFyYW1zLmF1dG9wbGF5ID8gcGFyYW1zLmF1dG9wbGF5LmRlbGF5IDogMzAwMDtcbiAgbGV0IGF1dG9wbGF5RGVsYXlDdXJyZW50ID0gcGFyYW1zICYmIHBhcmFtcy5hdXRvcGxheSA/IHBhcmFtcy5hdXRvcGxheS5kZWxheSA6IDMwMDA7XG4gIGxldCBhdXRvcGxheVRpbWVMZWZ0O1xuICBsZXQgYXV0b3BsYXlTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgbGV0IHdhc1BhdXNlZDtcbiAgbGV0IGlzVG91Y2hlZDtcbiAgbGV0IHBhdXNlZEJ5VG91Y2g7XG4gIGxldCB0b3VjaFN0YXJ0VGltZW91dDtcbiAgbGV0IHBhdXNlZEJ5SW50ZXJhY3Rpb247XG4gIGxldCBwYXVzZWRCeVBvaW50ZXJFbnRlcjtcbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKGUpIHtcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIud3JhcHBlckVsKSByZXR1cm47XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBzd2lwZXIud3JhcHBlckVsKSByZXR1cm47XG4gICAgc3dpcGVyLndyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb25UcmFuc2l0aW9uRW5kKTtcbiAgICBpZiAocGF1c2VkQnlQb2ludGVyRW50ZXIgfHwgZS5kZXRhaWwgJiYgZS5kZXRhaWwuYnlTd2lwZXJUb3VjaE1vdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzdW1lKCk7XG4gIH1cbiAgY29uc3QgY2FsY1RpbWVMZWZ0ID0gKCkgPT4ge1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucGF1c2VkKSB7XG4gICAgICB3YXNQYXVzZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAod2FzUGF1c2VkKSB7XG4gICAgICBhdXRvcGxheURlbGF5Q3VycmVudCA9IGF1dG9wbGF5VGltZUxlZnQ7XG4gICAgICB3YXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgdGltZUxlZnQgPSBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID8gYXV0b3BsYXlUaW1lTGVmdCA6IGF1dG9wbGF5U3RhcnRUaW1lICsgYXV0b3BsYXlEZWxheUN1cnJlbnQgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBzd2lwZXIuYXV0b3BsYXkudGltZUxlZnQgPSB0aW1lTGVmdDtcbiAgICBlbWl0KCdhdXRvcGxheVRpbWVMZWZ0JywgdGltZUxlZnQsIHRpbWVMZWZ0IC8gYXV0b3BsYXlEZWxheVRvdGFsKTtcbiAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY2FsY1RpbWVMZWZ0KCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGdldFNsaWRlRGVsYXkgPSAoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZVNsaWRlRWw7XG4gICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICBhY3RpdmVTbGlkZUVsID0gc3dpcGVyLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1zbGlkZS1hY3RpdmUnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzW3N3aXBlci5hY3RpdmVJbmRleF07XG4gICAgfVxuICAgIGlmICghYWN0aXZlU2xpZGVFbCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBjdXJyZW50U2xpZGVEZWxheSA9IHBhcnNlSW50KGFjdGl2ZVNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1hdXRvcGxheScpLCAxMCk7XG4gICAgcmV0dXJuIGN1cnJlbnRTbGlkZURlbGF5O1xuICB9O1xuICBjb25zdCBnZXRUb3RhbERlbGF5ID0gKCkgPT4ge1xuICAgIGxldCB0b3RhbERlbGF5ID0gc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheTtcbiAgICBjb25zdCBjdXJyZW50U2xpZGVEZWxheSA9IGdldFNsaWRlRGVsYXkoKTtcbiAgICBpZiAoIU51bWJlci5pc05hTihjdXJyZW50U2xpZGVEZWxheSkgJiYgY3VycmVudFNsaWRlRGVsYXkgPiAwKSB7XG4gICAgICB0b3RhbERlbGF5ID0gY3VycmVudFNsaWRlRGVsYXk7XG4gICAgfVxuICAgIHJldHVybiB0b3RhbERlbGF5O1xuICB9O1xuICBjb25zdCBydW4gPSBkZWxheUZvcmNlID0+IHtcbiAgICBpZiAoc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybjtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIGNhbGNUaW1lTGVmdCgpO1xuICAgIGxldCBkZWxheSA9IGRlbGF5Rm9yY2U7XG4gICAgaWYgKHR5cGVvZiBkZWxheSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRlbGF5ID0gZ2V0VG90YWxEZWxheSgpO1xuICAgICAgYXV0b3BsYXlEZWxheVRvdGFsID0gZGVsYXk7XG4gICAgICBhdXRvcGxheURlbGF5Q3VycmVudCA9IGRlbGF5O1xuICAgIH1cbiAgICBhdXRvcGxheVRpbWVMZWZ0ID0gZGVsYXk7XG4gICAgY29uc3Qgc3BlZWQgPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICAgIGNvbnN0IHByb2NlZWQgPSAoKSA9PiB7XG4gICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5yZXZlcnNlRGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICghc3dpcGVyLmlzQmVnaW5uaW5nIHx8IHN3aXBlci5wYXJhbXMubG9vcCB8fCBzd2lwZXIucGFyYW1zLnJld2luZCkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVByZXYoc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIGVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuc3RvcE9uTGFzdFNsaWRlKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCBzcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFzd2lwZXIuaXNFbmQgfHwgc3dpcGVyLnBhcmFtcy5sb29wIHx8IHN3aXBlci5wYXJhbXMucmV3aW5kKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlTmV4dChzcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfSBlbHNlIGlmICghc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGUpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbygwLCBzcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgICBhdXRvcGxheVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHJ1bigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcHJvY2VlZCgpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBwcm9jZWVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICByZXR1cm4gZGVsYXk7XG4gIH07XG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIGF1dG9wbGF5U3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgPSB0cnVlO1xuICAgIHJ1bigpO1xuICAgIGVtaXQoJ2F1dG9wbGF5U3RhcnQnKTtcbiAgfTtcbiAgY29uc3Qgc3RvcCA9ICgpID0+IHtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVubmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIGVtaXQoJ2F1dG9wbGF5U3RvcCcpO1xuICB9O1xuICBjb25zdCBwYXVzZSA9IChpbnRlcm5hbCwgcmVzZXQpID0+IHtcbiAgICBpZiAoc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybjtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgcGF1c2VkQnlJbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHByb2NlZWQgPSAoKSA9PiB7XG4gICAgICBlbWl0KCdhdXRvcGxheVBhdXNlJyk7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS53YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBvblRyYW5zaXRpb25FbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdW1lKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gdHJ1ZTtcbiAgICBpZiAocmVzZXQpIHtcbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGVsYXkgPSBhdXRvcGxheVRpbWVMZWZ0IHx8IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG4gICAgYXV0b3BsYXlUaW1lTGVmdCA9IGRlbGF5IC0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gYXV0b3BsYXlTdGFydFRpbWUpO1xuICAgIGlmIChzd2lwZXIuaXNFbmQgJiYgYXV0b3BsYXlUaW1lTGVmdCA8IDAgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkgcmV0dXJuO1xuICAgIGlmIChhdXRvcGxheVRpbWVMZWZ0IDwgMCkgYXV0b3BsYXlUaW1lTGVmdCA9IDA7XG4gICAgcHJvY2VlZCgpO1xuICB9O1xuICBjb25zdCByZXN1bWUgPSAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5pc0VuZCAmJiBhdXRvcGxheVRpbWVMZWZ0IDwgMCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm47XG4gICAgYXV0b3BsYXlTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBpZiAocGF1c2VkQnlJbnRlcmFjdGlvbikge1xuICAgICAgcGF1c2VkQnlJbnRlcmFjdGlvbiA9IGZhbHNlO1xuICAgICAgcnVuKGF1dG9wbGF5VGltZUxlZnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBydW4oKTtcbiAgICB9XG4gICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IGZhbHNlO1xuICAgIGVtaXQoJ2F1dG9wbGF5UmVzdW1lJyk7XG4gIH07XG4gIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybjtcbiAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIHBhdXNlZEJ5SW50ZXJhY3Rpb24gPSB0cnVlO1xuICAgICAgcGF1c2UodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJykge1xuICAgICAgcmVzdW1lKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvblBvaW50ZXJFbnRlciA9IGUgPT4ge1xuICAgIGlmIChlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnKSByZXR1cm47XG4gICAgcGF1c2VkQnlJbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgcGF1c2VkQnlQb2ludGVyRW50ZXIgPSB0cnVlO1xuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nIHx8IHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHJldHVybjtcbiAgICBwYXVzZSh0cnVlKTtcbiAgfTtcbiAgY29uc3Qgb25Qb2ludGVyTGVhdmUgPSBlID0+IHtcbiAgICBpZiAoZS5wb2ludGVyVHlwZSAhPT0gJ21vdXNlJykgcmV0dXJuO1xuICAgIHBhdXNlZEJ5UG9pbnRlckVudGVyID0gZmFsc2U7XG4gICAgaWYgKHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICAgIHJlc3VtZSgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYXR0YWNoTW91c2VFdmVudHMgPSAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkucGF1c2VPbk1vdXNlRW50ZXIpIHtcbiAgICAgIHN3aXBlci5lbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBvblBvaW50ZXJFbnRlcik7XG4gICAgICBzd2lwZXIuZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgb25Qb2ludGVyTGVhdmUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZGV0YWNoTW91c2VFdmVudHMgPSAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5lbCAmJiB0eXBlb2Ygc3dpcGVyLmVsICE9PSAnc3RyaW5nJykge1xuICAgICAgc3dpcGVyLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJlbnRlcicsIG9uUG9pbnRlckVudGVyKTtcbiAgICAgIHN3aXBlci5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCBvblBvaW50ZXJMZWF2ZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhdHRhY2hEb2N1bWVudEV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gIH07XG4gIGNvbnN0IGRldGFjaERvY3VtZW50RXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlKTtcbiAgfTtcbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZW5hYmxlZCkge1xuICAgICAgYXR0YWNoTW91c2VFdmVudHMoKTtcbiAgICAgIGF0dGFjaERvY3VtZW50RXZlbnRzKCk7XG4gICAgICBzdGFydCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGRldGFjaE1vdXNlRXZlbnRzKCk7XG4gICAgZGV0YWNoRG9jdW1lbnRFdmVudHMoKTtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH0pO1xuICBvbignX2ZyZWVNb2RlU3RhdGljUmVsZWFzZScsICgpID0+IHtcbiAgICBpZiAocGF1c2VkQnlUb3VjaCB8fCBwYXVzZWRCeUludGVyYWN0aW9uKSB7XG4gICAgICByZXN1bWUoKTtcbiAgICB9XG4gIH0pO1xuICBvbignX2ZyZWVNb2RlTm9Nb21lbnR1bVJlbGVhc2UnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICBwYXVzZSh0cnVlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCAoX3MsIHNwZWVkLCBpbnRlcm5hbCkgPT4ge1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGlmIChpbnRlcm5hbCB8fCAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgcGF1c2UodHJ1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH0pO1xuICBvbignc2xpZGVyRmlyc3RNb3ZlJywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICBzdG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzVG91Y2hlZCA9IHRydWU7XG4gICAgcGF1c2VkQnlUb3VjaCA9IGZhbHNlO1xuICAgIHBhdXNlZEJ5SW50ZXJhY3Rpb24gPSBmYWxzZTtcbiAgICB0b3VjaFN0YXJ0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGF1c2VkQnlJbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgICBwYXVzZWRCeVRvdWNoID0gdHJ1ZTtcbiAgICAgIHBhdXNlKHRydWUpO1xuICAgIH0sIDIwMCk7XG4gIH0pO1xuICBvbigndG91Y2hFbmQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nIHx8ICFpc1RvdWNoZWQpIHJldHVybjtcbiAgICBjbGVhclRpbWVvdXQodG91Y2hTdGFydFRpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgcGF1c2VkQnlUb3VjaCA9IGZhbHNlO1xuICAgICAgaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXVzZWRCeVRvdWNoICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkgcmVzdW1lKCk7XG4gICAgcGF1c2VkQnlUb3VjaCA9IGZhbHNlO1xuICAgIGlzVG91Y2hlZCA9IGZhbHNlO1xuICB9KTtcbiAgb24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucGF1c2VkKSB7XG4gICAgICBhdXRvcGxheVRpbWVMZWZ0ID0gZ2V0VG90YWxEZWxheSgpO1xuICAgICAgYXV0b3BsYXlEZWxheVRvdGFsID0gZ2V0VG90YWxEZWxheSgpO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLmF1dG9wbGF5LCB7XG4gICAgc3RhcnQsXG4gICAgc3RvcCxcbiAgICBwYXVzZSxcbiAgICByZXN1bWVcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEF1dG9wbGF5IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGcgYXMgZ2V0RG9jdW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzJztcbmltcG9ydCB7IHAgYXMgaXNPYmplY3QsIGUgYXMgZWxlbWVudENoaWxkcmVuIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbmZ1bmN0aW9uIFRodW1iKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uXG59KSB7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgdGh1bWJzOiB7XG4gICAgICBzd2lwZXI6IG51bGwsXG4gICAgICBtdWx0aXBsZUFjdGl2ZVRodW1iczogdHJ1ZSxcbiAgICAgIGF1dG9TY3JvbGxPZmZzZXQ6IDAsXG4gICAgICBzbGlkZVRodW1iQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtdGh1bWItYWN0aXZlJyxcbiAgICAgIHRodW1ic0NvbnRhaW5lckNsYXNzOiAnc3dpcGVyLXRodW1icydcbiAgICB9XG4gIH0pO1xuICBsZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgbGV0IHN3aXBlckNyZWF0ZWQgPSBmYWxzZTtcbiAgc3dpcGVyLnRodW1icyA9IHtcbiAgICBzd2lwZXI6IG51bGxcbiAgfTtcbiAgZnVuY3Rpb24gaXNWaXJ0dWFsRW5hYmxlZCgpIHtcbiAgICBjb25zdCB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICBpZiAoIXRodW1ic1N3aXBlciB8fCB0aHVtYnNTd2lwZXIuZGVzdHJveWVkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRodW1ic1N3aXBlci5wYXJhbXMudmlydHVhbCAmJiB0aHVtYnNTd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgfVxuICBmdW5jdGlvbiBvblRodW1iQ2xpY2soKSB7XG4gICAgY29uc3QgdGh1bWJzU3dpcGVyID0gc3dpcGVyLnRodW1icy5zd2lwZXI7XG4gICAgaWYgKCF0aHVtYnNTd2lwZXIgfHwgdGh1bWJzU3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGNvbnN0IGNsaWNrZWRJbmRleCA9IHRodW1ic1N3aXBlci5jbGlja2VkSW5kZXg7XG4gICAgY29uc3QgY2xpY2tlZFNsaWRlID0gdGh1bWJzU3dpcGVyLmNsaWNrZWRTbGlkZTtcbiAgICBpZiAoY2xpY2tlZFNsaWRlICYmIGNsaWNrZWRTbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoc3dpcGVyLnBhcmFtcy50aHVtYnMuc2xpZGVUaHVtYkFjdGl2ZUNsYXNzKSkgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgY2xpY2tlZEluZGV4ID09PSAndW5kZWZpbmVkJyB8fCBjbGlja2VkSW5kZXggPT09IG51bGwpIHJldHVybjtcbiAgICBsZXQgc2xpZGVUb0luZGV4O1xuICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHNsaWRlVG9JbmRleCA9IHBhcnNlSW50KHRodW1ic1N3aXBlci5jbGlja2VkU2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlVG9JbmRleCA9IGNsaWNrZWRJbmRleDtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG9Mb29wKHNsaWRlVG9JbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGh1bWJzOiB0aHVtYnNQYXJhbXNcbiAgICB9ID0gc3dpcGVyLnBhcmFtcztcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHJldHVybiBmYWxzZTtcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgY29uc3QgU3dpcGVyQ2xhc3MgPSBzd2lwZXIuY29uc3RydWN0b3I7XG4gICAgaWYgKHRodW1ic1BhcmFtcy5zd2lwZXIgaW5zdGFuY2VvZiBTd2lwZXJDbGFzcykge1xuICAgICAgaWYgKHRodW1ic1BhcmFtcy5zd2lwZXIuZGVzdHJveWVkKSB7XG4gICAgICAgIGluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHN3aXBlci50aHVtYnMuc3dpcGVyID0gdGh1bWJzUGFyYW1zLnN3aXBlcjtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLnRodW1icy5zd2lwZXIub3JpZ2luYWxQYXJhbXMsIHtcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmFzc2lnbihzd2lwZXIudGh1bWJzLnN3aXBlci5wYXJhbXMsIHtcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLnRodW1icy5zd2lwZXIudXBkYXRlKCk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh0aHVtYnNQYXJhbXMuc3dpcGVyKSkge1xuICAgICAgY29uc3QgdGh1bWJzU3dpcGVyUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgdGh1bWJzUGFyYW1zLnN3aXBlcik7XG4gICAgICBPYmplY3QuYXNzaWduKHRodW1ic1N3aXBlclBhcmFtcywge1xuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBzd2lwZXIudGh1bWJzLnN3aXBlciA9IG5ldyBTd2lwZXJDbGFzcyh0aHVtYnNTd2lwZXJQYXJhbXMpO1xuICAgICAgc3dpcGVyQ3JlYXRlZCA9IHRydWU7XG4gICAgfVxuICAgIHN3aXBlci50aHVtYnMuc3dpcGVyLmVsLmNsYXNzTGlzdC5hZGQoc3dpcGVyLnBhcmFtcy50aHVtYnMudGh1bWJzQ29udGFpbmVyQ2xhc3MpO1xuICAgIHN3aXBlci50aHVtYnMuc3dpcGVyLm9uKCd0YXAnLCBvblRodW1iQ2xpY2spO1xuICAgIGlmIChpc1ZpcnR1YWxFbmFibGVkKCkpIHtcbiAgICAgIHN3aXBlci50aHVtYnMuc3dpcGVyLm9uKCd2aXJ0dWFsVXBkYXRlJywgKCkgPT4ge1xuICAgICAgICB1cGRhdGUoZmFsc2UsIHtcbiAgICAgICAgICBhdXRvU2Nyb2xsOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGUoaW5pdGlhbCwgcCkge1xuICAgIGNvbnN0IHRodW1ic1N3aXBlciA9IHN3aXBlci50aHVtYnMuc3dpcGVyO1xuICAgIGlmICghdGh1bWJzU3dpcGVyIHx8IHRodW1ic1N3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcblxuICAgIC8vIEFjdGl2YXRlIHRodW1ic1xuICAgIGxldCB0aHVtYnNUb0FjdGl2YXRlID0gMTtcbiAgICBjb25zdCB0aHVtYkFjdGl2ZUNsYXNzID0gc3dpcGVyLnBhcmFtcy50aHVtYnMuc2xpZGVUaHVtYkFjdGl2ZUNsYXNzO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICB0aHVtYnNUb0FjdGl2YXRlID0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgIH1cbiAgICBpZiAoIXN3aXBlci5wYXJhbXMudGh1bWJzLm11bHRpcGxlQWN0aXZlVGh1bWJzKSB7XG4gICAgICB0aHVtYnNUb0FjdGl2YXRlID0gMTtcbiAgICB9XG4gICAgdGh1bWJzVG9BY3RpdmF0ZSA9IE1hdGguZmxvb3IodGh1bWJzVG9BY3RpdmF0ZSk7XG4gICAgdGh1bWJzU3dpcGVyLnNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4gc2xpZGVFbC5jbGFzc0xpc3QucmVtb3ZlKHRodW1iQWN0aXZlQ2xhc3MpKTtcbiAgICBpZiAodGh1bWJzU3dpcGVyLnBhcmFtcy5sb29wIHx8IGlzVmlydHVhbEVuYWJsZWQoKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aHVtYnNUb0FjdGl2YXRlOyBpICs9IDEpIHtcbiAgICAgICAgZWxlbWVudENoaWxkcmVuKHRodW1ic1N3aXBlci5zbGlkZXNFbCwgYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7c3dpcGVyLnJlYWxJbmRleCArIGl9XCJdYCkuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgICAgICBzbGlkZUVsLmNsYXNzTGlzdC5hZGQodGh1bWJBY3RpdmVDbGFzcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRodW1ic1RvQWN0aXZhdGU7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGh1bWJzU3dpcGVyLnNsaWRlc1tzd2lwZXIucmVhbEluZGV4ICsgaV0pIHtcbiAgICAgICAgICB0aHVtYnNTd2lwZXIuc2xpZGVzW3N3aXBlci5yZWFsSW5kZXggKyBpXS5jbGFzc0xpc3QuYWRkKHRodW1iQWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwPy5hdXRvU2Nyb2xsID8/IHRydWUpIHtcbiAgICAgIGF1dG9TY3JvbGwoaW5pdGlhbCA/IDAgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhdXRvU2Nyb2xsKHNsaWRlU3BlZWQpIHtcbiAgICBjb25zdCB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICBpZiAoIXRodW1ic1N3aXBlciB8fCB0aHVtYnNTd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgY29uc3Qgc2xpZGVzUGVyVmlldyA9IHRodW1ic1N3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gdGh1bWJzU3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiB0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgY29uc3QgYXV0b1Njcm9sbE9mZnNldCA9IHN3aXBlci5wYXJhbXMudGh1bWJzLmF1dG9TY3JvbGxPZmZzZXQ7XG4gICAgY29uc3QgdXNlT2Zmc2V0ID0gYXV0b1Njcm9sbE9mZnNldCAmJiAhdGh1bWJzU3dpcGVyLnBhcmFtcy5sb29wO1xuICAgIGlmIChzd2lwZXIucmVhbEluZGV4ICE9PSB0aHVtYnNTd2lwZXIucmVhbEluZGV4IHx8IHVzZU9mZnNldCkge1xuICAgICAgY29uc3QgY3VycmVudFRodW1ic0luZGV4ID0gdGh1bWJzU3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgbGV0IG5ld1RodW1ic0luZGV4O1xuICAgICAgbGV0IGRpcmVjdGlvbjtcbiAgICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgY29uc3QgbmV3VGh1bWJzU2xpZGUgPSB0aHVtYnNTd2lwZXIuc2xpZGVzLmZpbmQoc2xpZGVFbCA9PiBzbGlkZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSA9PT0gYCR7c3dpcGVyLnJlYWxJbmRleH1gKTtcbiAgICAgICAgbmV3VGh1bWJzSW5kZXggPSB0aHVtYnNTd2lwZXIuc2xpZGVzLmluZGV4T2YobmV3VGh1bWJzU2xpZGUpO1xuICAgICAgICBkaXJlY3Rpb24gPSBzd2lwZXIuYWN0aXZlSW5kZXggPiBzd2lwZXIucHJldmlvdXNJbmRleCA/ICduZXh0JyA6ICdwcmV2JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1RodW1ic0luZGV4ID0gc3dpcGVyLnJlYWxJbmRleDtcbiAgICAgICAgZGlyZWN0aW9uID0gbmV3VGh1bWJzSW5kZXggPiBzd2lwZXIucHJldmlvdXNJbmRleCA/ICduZXh0JyA6ICdwcmV2JztcbiAgICAgIH1cbiAgICAgIGlmICh1c2VPZmZzZXQpIHtcbiAgICAgICAgbmV3VGh1bWJzSW5kZXggKz0gZGlyZWN0aW9uID09PSAnbmV4dCcgPyBhdXRvU2Nyb2xsT2Zmc2V0IDogLTEgKiBhdXRvU2Nyb2xsT2Zmc2V0O1xuICAgICAgfVxuICAgICAgaWYgKHRodW1ic1N3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyAmJiB0aHVtYnNTd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMuaW5kZXhPZihuZXdUaHVtYnNJbmRleCkgPCAwKSB7XG4gICAgICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgaWYgKG5ld1RodW1ic0luZGV4ID4gY3VycmVudFRodW1ic0luZGV4KSB7XG4gICAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4IC0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3IC8gMikgKyAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4ICsgTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3IC8gMikgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuZXdUaHVtYnNJbmRleCA+IGN1cnJlbnRUaHVtYnNJbmRleCAmJiB0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAxKSA7XG4gICAgICAgIHRodW1ic1N3aXBlci5zbGlkZVRvKG5ld1RodW1ic0luZGV4LCBzbGlkZVNwZWVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb24oJ2JlZm9yZUluaXQnLCAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGh1bWJzXG4gICAgfSA9IHN3aXBlci5wYXJhbXM7XG4gICAgaWYgKCF0aHVtYnMgfHwgIXRodW1icy5zd2lwZXIpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHRodW1icy5zd2lwZXIgPT09ICdzdHJpbmcnIHx8IHRodW1icy5zd2lwZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgICAgY29uc3QgZ2V0VGh1bWJzRWxlbWVudEFuZEluaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRodW1ic0VsZW1lbnQgPSB0eXBlb2YgdGh1bWJzLnN3aXBlciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRodW1icy5zd2lwZXIpIDogdGh1bWJzLnN3aXBlcjtcbiAgICAgICAgaWYgKHRodW1ic0VsZW1lbnQgJiYgdGh1bWJzRWxlbWVudC5zd2lwZXIpIHtcbiAgICAgICAgICB0aHVtYnMuc3dpcGVyID0gdGh1bWJzRWxlbWVudC5zd2lwZXI7XG4gICAgICAgICAgaW5pdCgpO1xuICAgICAgICAgIHVwZGF0ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aHVtYnNFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gYCR7c3dpcGVyLnBhcmFtcy5ldmVudHNQcmVmaXh9aW5pdGA7XG4gICAgICAgICAgY29uc3Qgb25UaHVtYnNTd2lwZXIgPSBlID0+IHtcbiAgICAgICAgICAgIHRodW1icy5zd2lwZXIgPSBlLmRldGFpbFswXTtcbiAgICAgICAgICAgIHRodW1ic0VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG9uVGh1bWJzU3dpcGVyKTtcbiAgICAgICAgICAgIGluaXQoKTtcbiAgICAgICAgICAgIHVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIHRodW1icy5zd2lwZXIudXBkYXRlKCk7XG4gICAgICAgICAgICBzd2lwZXIudXBkYXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aHVtYnNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBvblRodW1ic1N3aXBlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRodW1ic0VsZW1lbnQ7XG4gICAgICB9O1xuICAgICAgY29uc3Qgd2F0Y2hGb3JUaHVtYnNUb0FwcGVhciA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgdGh1bWJzRWxlbWVudCA9IGdldFRodW1ic0VsZW1lbnRBbmRJbml0KCk7XG4gICAgICAgIGlmICghdGh1bWJzRWxlbWVudCkge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh3YXRjaEZvclRodW1ic1RvQXBwZWFyKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh3YXRjaEZvclRodW1ic1RvQXBwZWFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdCgpO1xuICAgICAgdXBkYXRlKHRydWUpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbGlkZUNoYW5nZSB1cGRhdGUgcmVzaXplIG9ic2VydmVyVXBkYXRlJywgKCkgPT4ge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbiAgb24oJ3NldFRyYW5zaXRpb24nLCAoX3MsIGR1cmF0aW9uKSA9PiB7XG4gICAgY29uc3QgdGh1bWJzU3dpcGVyID0gc3dpcGVyLnRodW1icy5zd2lwZXI7XG4gICAgaWYgKCF0aHVtYnNTd2lwZXIgfHwgdGh1bWJzU3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHRodW1ic1N3aXBlci5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfSk7XG4gIG9uKCdiZWZvcmVEZXN0cm95JywgKCkgPT4ge1xuICAgIGNvbnN0IHRodW1ic1N3aXBlciA9IHN3aXBlci50aHVtYnMuc3dpcGVyO1xuICAgIGlmICghdGh1bWJzU3dpcGVyIHx8IHRodW1ic1N3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyQ3JlYXRlZCkge1xuICAgICAgdGh1bWJzU3dpcGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci50aHVtYnMsIHtcbiAgICBpbml0LFxuICAgIHVwZGF0ZVxuICB9KTtcbn1cblxuZXhwb3J0IHsgVGh1bWIgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgaCBhcyBub3csIG8gYXMgZWxlbWVudFRyYW5zaXRpb25FbmQgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMubWpzJztcblxuZnVuY3Rpb24gZnJlZU1vZGUoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgZW1pdCxcbiAgb25jZVxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGZyZWVNb2RlOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIG1vbWVudHVtOiB0cnVlLFxuICAgICAgbW9tZW50dW1SYXRpbzogMSxcbiAgICAgIG1vbWVudHVtQm91bmNlOiB0cnVlLFxuICAgICAgbW9tZW50dW1Cb3VuY2VSYXRpbzogMSxcbiAgICAgIG1vbWVudHVtVmVsb2NpdHlSYXRpbzogMSxcbiAgICAgIHN0aWNreTogZmFsc2UsXG4gICAgICBtaW5pbXVtVmVsb2NpdHk6IDAuMDJcbiAgICB9XG4gIH0pO1xuICBmdW5jdGlvbiBvblRvdWNoU3RhcnQoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS52ZWxvY2l0aWVzLmxlbmd0aCA9IDA7XG4gICAgc3dpcGVyLmZyZWVNb2RlLm9uVG91Y2hFbmQoe1xuICAgICAgY3VycmVudFBvczogc3dpcGVyLnJ0bCA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICB0b3VjaEV2ZW50c0RhdGE6IGRhdGEsXG4gICAgICB0b3VjaGVzXG4gICAgfSA9IHN3aXBlcjtcbiAgICAvLyBWZWxvY2l0eVxuICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzdGFydFgnIDogJ3N0YXJ0WSddLFxuICAgICAgICB0aW1lOiBkYXRhLnRvdWNoU3RhcnRUaW1lXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGF0YS52ZWxvY2l0aWVzLnB1c2goe1xuICAgICAgcG9zaXRpb246IHRvdWNoZXNbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2N1cnJlbnRYJyA6ICdjdXJyZW50WSddLFxuICAgICAgdGltZTogbm93KClcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBvblRvdWNoRW5kKHtcbiAgICBjdXJyZW50UG9zXG4gIH0pIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgcGFyYW1zLFxuICAgICAgd3JhcHBlckVsLFxuICAgICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgICBzbmFwR3JpZCxcbiAgICAgIHRvdWNoRXZlbnRzRGF0YTogZGF0YVxuICAgIH0gPSBzd2lwZXI7XG4gICAgLy8gVGltZSBkaWZmXG4gICAgY29uc3QgdG91Y2hFbmRUaW1lID0gbm93KCk7XG4gICAgY29uc3QgdGltZURpZmYgPSB0b3VjaEVuZFRpbWUgLSBkYXRhLnRvdWNoU3RhcnRUaW1lO1xuICAgIGlmIChjdXJyZW50UG9zIDwgLXN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQb3MgPiAtc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggPCBzbmFwR3JpZC5sZW5ndGgpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc25hcEdyaWQubGVuZ3RoIC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlLm1vbWVudHVtKSB7XG4gICAgICBpZiAoZGF0YS52ZWxvY2l0aWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbGFzdE1vdmVFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgY29uc3QgdmVsb2NpdHlFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBsYXN0TW92ZUV2ZW50LnBvc2l0aW9uIC0gdmVsb2NpdHlFdmVudC5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgdGltZSA9IGxhc3RNb3ZlRXZlbnQudGltZSAtIHZlbG9jaXR5RXZlbnQudGltZTtcbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gZGlzdGFuY2UgLyB0aW1lO1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgLz0gMjtcbiAgICAgICAgaWYgKE1hdGguYWJzKHN3aXBlci52ZWxvY2l0eSkgPCBwYXJhbXMuZnJlZU1vZGUubWluaW11bVZlbG9jaXR5KSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzIGltcGxpZXMgdGhhdCB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBhIGZpbmdlciB0aGVuIHJlbGVhc2VkLlxuICAgICAgICAvLyBUaGVyZSB3b3VsZCBiZSBubyBldmVudHMgd2l0aCBkaXN0YW5jZSB6ZXJvLCBzbyB0aGUgbGFzdCBldmVudCBpcyBzdGFsZS5cbiAgICAgICAgaWYgKHRpbWUgPiAxNTAgfHwgbm93KCkgLSBsYXN0TW92ZUV2ZW50LnRpbWUgPiAzMDApIHtcbiAgICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgfVxuICAgICAgc3dpcGVyLnZlbG9jaXR5ICo9IHBhcmFtcy5mcmVlTW9kZS5tb21lbnR1bVZlbG9jaXR5UmF0aW87XG4gICAgICBkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID0gMDtcbiAgICAgIGxldCBtb21lbnR1bUR1cmF0aW9uID0gMTAwMCAqIHBhcmFtcy5mcmVlTW9kZS5tb21lbnR1bVJhdGlvO1xuICAgICAgY29uc3QgbW9tZW50dW1EaXN0YW5jZSA9IHN3aXBlci52ZWxvY2l0eSAqIG1vbWVudHVtRHVyYXRpb247XG4gICAgICBsZXQgbmV3UG9zaXRpb24gPSBzd2lwZXIudHJhbnNsYXRlICsgbW9tZW50dW1EaXN0YW5jZTtcbiAgICAgIGlmIChydGwpIG5ld1Bvc2l0aW9uID0gLW5ld1Bvc2l0aW9uO1xuICAgICAgbGV0IGRvQm91bmNlID0gZmFsc2U7XG4gICAgICBsZXQgYWZ0ZXJCb3VuY2VQb3NpdGlvbjtcbiAgICAgIGNvbnN0IGJvdW5jZUFtb3VudCA9IE1hdGguYWJzKHN3aXBlci52ZWxvY2l0eSkgKiAyMCAqIHBhcmFtcy5mcmVlTW9kZS5tb21lbnR1bUJvdW5jZVJhdGlvO1xuICAgICAgbGV0IG5lZWRzTG9vcEZpeDtcbiAgICAgIGlmIChuZXdQb3NpdGlvbiA8IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlLm1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uICsgc3dpcGVyLm1heFRyYW5zbGF0ZSgpIDwgLWJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFmdGVyQm91bmNlUG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgICAgZG9Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5sb29wICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlcykgbmVlZHNMb29wRml4ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24gPiBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZS5tb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSA+IGJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgKyBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFmdGVyQm91bmNlUG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgICAgICAgZG9Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5sb29wICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlcykgbmVlZHNMb29wRml4ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlLnN0aWNreSkge1xuICAgICAgICBsZXQgbmV4dFNsaWRlO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNuYXBHcmlkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHNuYXBHcmlkW2pdID4gLW5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICBuZXh0U2xpZGUgPSBqO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChNYXRoLmFicyhzbmFwR3JpZFtuZXh0U2xpZGVdIC0gbmV3UG9zaXRpb24pIDwgTWF0aC5hYnMoc25hcEdyaWRbbmV4dFNsaWRlIC0gMV0gLSBuZXdQb3NpdGlvbikgfHwgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHNuYXBHcmlkW25leHRTbGlkZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzbmFwR3JpZFtuZXh0U2xpZGUgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBuZXdQb3NpdGlvbiA9IC1uZXdQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkc0xvb3BGaXgpIHtcbiAgICAgICAgb25jZSgndHJhbnNpdGlvbkVuZCcsICgpID0+IHtcbiAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIEZpeCBkdXJhdGlvblxuICAgICAgaWYgKHN3aXBlci52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKCgtbmV3UG9zaXRpb24gLSBzd2lwZXIudHJhbnNsYXRlKSAvIHN3aXBlci52ZWxvY2l0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKChuZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlLnN0aWNreSkge1xuICAgICAgICAgIC8vIElmIGZyZWVNb2RlLnN0aWNreSBpcyBhY3RpdmUgYW5kIHRoZSB1c2VyIGVuZHMgYSBzd2lwZSB3aXRoIGEgc2xvdy12ZWxvY2l0eVxuICAgICAgICAgIC8vIGV2ZW50LCB0aGVuIGR1cmF0aW9ucyBjYW4gYmUgMjArIHNlY29uZHMgdG8gc2xpZGUgb25lIChvciB6ZXJvISkgc2xpZGVzLlxuICAgICAgICAgIC8vIEl0J3MgZWFzeSB0byBzZWUgdGhpcyB3aGVuIHNpbXVsYXRpbmcgdG91Y2ggd2l0aCBtb3VzZSBldmVudHMuIFRvIGZpeCB0aGlzLFxuICAgICAgICAgIC8vIGxpbWl0IHNpbmdsZS1zbGlkZSBzd2lwZXMgdG8gdGhlIGRlZmF1bHQgc2xpZGUgZHVyYXRpb24uIFRoaXMgYWxzbyBoYXMgdGhlXG4gICAgICAgICAgLy8gbmljZSBzaWRlIGVmZmVjdCBvZiBtYXRjaGluZyBzbGlkZSBzcGVlZCBpZiB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBiZWZvcmVcbiAgICAgICAgICAvLyBsaWZ0aW5nIGZpbmdlciBvciBtb3VzZSB2cy4gbW92aW5nIHNsb3dseSBiZWZvcmUgbGlmdGluZyB0aGUgZmluZ2VyL21vdXNlLlxuICAgICAgICAgIC8vIEZvciBmYXN0ZXIgc3dpcGVzLCBhbHNvIGFwcGx5IGxpbWl0cyAoYWxiZWl0IGhpZ2hlciBvbmVzKS5cbiAgICAgICAgICBjb25zdCBtb3ZlRGlzdGFuY2UgPSBNYXRoLmFicygocnRsID8gLW5ld1Bvc2l0aW9uIDogbmV3UG9zaXRpb24pIC0gc3dpcGVyLnRyYW5zbGF0ZSk7XG4gICAgICAgICAgY29uc3QgY3VycmVudFNsaWRlU2l6ZSA9IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbc3dpcGVyLmFjdGl2ZUluZGV4XTtcbiAgICAgICAgICBpZiAobW92ZURpc3RhbmNlIDwgY3VycmVudFNsaWRlU2l6ZSkge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1vdmVEaXN0YW5jZSA8IDIgKiBjdXJyZW50U2xpZGVTaXplKSB7XG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gcGFyYW1zLnNwZWVkICogMS41O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gcGFyYW1zLnNwZWVkICogMi41O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGUuc3RpY2t5KSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmZyZWVNb2RlLm1vbWVudHVtQm91bmNlICYmIGRvQm91bmNlKSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3UG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHRydWUsIHN3aXBlci5zd2lwZURpcmVjdGlvbik7XG4gICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICBlbGVtZW50VHJhbnNpdGlvbkVuZCh3cmFwcGVyRWwsICgpID0+IHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UpIHJldHVybjtcbiAgICAgICAgICBlbWl0KCdtb21lbnR1bUJvdW5jZScpO1xuICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHBhcmFtcy5zcGVlZCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKGFmdGVyQm91bmNlUG9zaXRpb24pO1xuICAgICAgICAgICAgZWxlbWVudFRyYW5zaXRpb25FbmQod3JhcHBlckVsLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnZlbG9jaXR5KSB7XG4gICAgICAgIGVtaXQoJ19mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJyk7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuICAgICAgICBpZiAoIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBlbGVtZW50VHJhbnNpdGlvbkVuZCh3cmFwcGVyRWwsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICB9XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGUuc3RpY2t5KSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgZW1pdCgnX2ZyZWVNb2RlTm9Nb21lbnR1bVJlbGVhc2UnKTtcbiAgICB9XG4gICAgaWYgKCFwYXJhbXMuZnJlZU1vZGUubW9tZW50dW0gfHwgdGltZURpZmYgPj0gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgICAgZW1pdCgnX2ZyZWVNb2RlU3RhdGljUmVsZWFzZScpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuICB9XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgZnJlZU1vZGU6IHtcbiAgICAgIG9uVG91Y2hTdGFydCxcbiAgICAgIG9uVG91Y2hNb3ZlLFxuICAgICAgb25Ub3VjaEVuZFxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGZyZWVNb2RlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IHMgYXMgc2V0SW5uZXJIVE1MIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbmZ1bmN0aW9uIGFwcGVuZFNsaWRlKHNsaWRlcykge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNsaWRlc0VsXG4gIH0gPSBzd2lwZXI7XG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICB9XG4gIGNvbnN0IGFwcGVuZEVsZW1lbnQgPSBzbGlkZUVsID0+IHtcbiAgICBpZiAodHlwZW9mIHNsaWRlRWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB0ZW1wRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzZXRJbm5lckhUTUwodGVtcERPTSwgc2xpZGVFbCk7XG4gICAgICBzbGlkZXNFbC5hcHBlbmQodGVtcERPTS5jaGlsZHJlblswXSk7XG4gICAgICBzZXRJbm5lckhUTUwodGVtcERPTSwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZXNFbC5hcHBlbmQoc2xpZGVFbCk7XG4gICAgfVxuICB9O1xuICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzbGlkZXNbaV0pIGFwcGVuZEVsZW1lbnQoc2xpZGVzW2ldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYXBwZW5kRWxlbWVudChzbGlkZXMpO1xuICB9XG4gIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgfVxuICBpZiAoIXBhcmFtcy5vYnNlcnZlciB8fCBzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZXBlbmRTbGlkZShzbGlkZXMpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBzbGlkZXNFbFxuICB9ID0gc3dpcGVyO1xuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgfVxuICBsZXQgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG4gIGNvbnN0IHByZXBlbmRFbGVtZW50ID0gc2xpZGVFbCA9PiB7XG4gICAgaWYgKHR5cGVvZiBzbGlkZUVsID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGVtcERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2V0SW5uZXJIVE1MKHRlbXBET00sIHNsaWRlRWwpO1xuICAgICAgc2xpZGVzRWwucHJlcGVuZCh0ZW1wRE9NLmNoaWxkcmVuWzBdKTtcbiAgICAgIHNldElubmVySFRNTCh0ZW1wRE9NLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlc0VsLnByZXBlbmQoc2xpZGVFbCk7XG4gICAgfVxuICB9O1xuICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzbGlkZXNbaV0pIHByZXBlbmRFbGVtZW50KHNsaWRlc1tpXSk7XG4gICAgfVxuICAgIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyBzbGlkZXMubGVuZ3RoO1xuICB9IGVsc2Uge1xuICAgIHByZXBlbmRFbGVtZW50KHNsaWRlcyk7XG4gIH1cbiAgc3dpcGVyLnJlY2FsY1NsaWRlcygpO1xuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG4gIGlmICghcGFyYW1zLm9ic2VydmVyIHx8IHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cbiAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gYWRkU2xpZGUoaW5kZXgsIHNsaWRlcykge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIGFjdGl2ZUluZGV4LFxuICAgIHNsaWRlc0VsXG4gIH0gPSBzd2lwZXI7XG4gIGxldCBhY3RpdmVJbmRleEJ1ZmZlciA9IGFjdGl2ZUluZGV4O1xuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBhY3RpdmVJbmRleEJ1ZmZlciAtPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgfVxuICBjb25zdCBiYXNlTGVuZ3RoID0gc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gIGlmIChpbmRleCA8PSAwKSB7XG4gICAgc3dpcGVyLnByZXBlbmRTbGlkZShzbGlkZXMpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5kZXggPj0gYmFzZUxlbmd0aCkge1xuICAgIHN3aXBlci5hcHBlbmRTbGlkZShzbGlkZXMpO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyAxIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gIGNvbnN0IHNsaWRlc0J1ZmZlciA9IFtdO1xuICBmb3IgKGxldCBpID0gYmFzZUxlbmd0aCAtIDE7IGkgPj0gaW5kZXg7IGkgLT0gMSkge1xuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHN3aXBlci5zbGlkZXNbaV07XG4gICAgY3VycmVudFNsaWRlLnJlbW92ZSgpO1xuICAgIHNsaWRlc0J1ZmZlci51bnNoaWZ0KGN1cnJlbnRTbGlkZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2xpZGVzW2ldKSBzbGlkZXNFbC5hcHBlbmQoc2xpZGVzW2ldKTtcbiAgICB9XG4gICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyBzbGlkZXMubGVuZ3RoIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gIH0gZWxzZSB7XG4gICAgc2xpZGVzRWwuYXBwZW5kKHNsaWRlcyk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNCdWZmZXIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzbGlkZXNFbC5hcHBlbmQoc2xpZGVzQnVmZmVyW2ldKTtcbiAgfVxuICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cbiAgaWYgKCFwYXJhbXMub2JzZXJ2ZXIgfHwgc3dpcGVyLmlzRWxlbWVudCkge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBhY3RpdmVJbmRleFxuICB9ID0gc3dpcGVyO1xuICBsZXQgYWN0aXZlSW5kZXhCdWZmZXIgPSBhY3RpdmVJbmRleDtcbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgfVxuICBsZXQgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlcjtcbiAgbGV0IGluZGV4VG9SZW1vdmU7XG4gIGlmICh0eXBlb2Ygc2xpZGVzSW5kZXhlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzSW5kZXhlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzSW5kZXhlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXNbaV07XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgc3dpcGVyLnNsaWRlc1tpbmRleFRvUmVtb3ZlXS5yZW1vdmUoKTtcbiAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgfVxuICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICB9IGVsc2Uge1xuICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzO1xuICAgIGlmIChzd2lwZXIuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSBzd2lwZXIuc2xpZGVzW2luZGV4VG9SZW1vdmVdLnJlbW92ZSgpO1xuICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gIH1cbiAgc3dpcGVyLnJlY2FsY1NsaWRlcygpO1xuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG4gIGlmICghcGFyYW1zLm9ic2VydmVyIHx8IHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxTbGlkZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHNsaWRlc0luZGV4ZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICB9XG4gIHN3aXBlci5yZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKTtcbn1cblxuZnVuY3Rpb24gTWFuaXB1bGF0aW9uKHtcbiAgc3dpcGVyXG59KSB7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgYXBwZW5kU2xpZGU6IGFwcGVuZFNsaWRlLmJpbmQoc3dpcGVyKSxcbiAgICBwcmVwZW5kU2xpZGU6IHByZXBlbmRTbGlkZS5iaW5kKHN3aXBlciksXG4gICAgYWRkU2xpZGU6IGFkZFNsaWRlLmJpbmQoc3dpcGVyKSxcbiAgICByZW1vdmVTbGlkZTogcmVtb3ZlU2xpZGUuYmluZChzd2lwZXIpLFxuICAgIHJlbW92ZUFsbFNsaWRlczogcmVtb3ZlQWxsU2xpZGVzLmJpbmQoc3dpcGVyKVxuICB9KTtcbn1cblxuZXhwb3J0IHsgTWFuaXB1bGF0aW9uIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGcgYXMgZ2V0U2xpZGVUcmFuc2Zvcm1FbCB9IGZyb20gJy4vdXRpbHMubWpzJztcblxuZnVuY3Rpb24gZWZmZWN0VGFyZ2V0KGVmZmVjdFBhcmFtcywgc2xpZGVFbCkge1xuICBjb25zdCB0cmFuc2Zvcm1FbCA9IGdldFNsaWRlVHJhbnNmb3JtRWwoc2xpZGVFbCk7XG4gIGlmICh0cmFuc2Zvcm1FbCAhPT0gc2xpZGVFbCkge1xuICAgIHRyYW5zZm9ybUVsLnN0eWxlLmJhY2tmYWNlVmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIHRyYW5zZm9ybUVsLnN0eWxlWyctd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHknXSA9ICdoaWRkZW4nO1xuICB9XG4gIHJldHVybiB0cmFuc2Zvcm1FbDtcbn1cblxuZXhwb3J0IHsgZWZmZWN0VGFyZ2V0IGFzIGUgfTtcbiIsImltcG9ydCB7IG8gYXMgZWxlbWVudFRyYW5zaXRpb25FbmQgfSBmcm9tICcuL3V0aWxzLm1qcyc7XG5cbmZ1bmN0aW9uIGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kKHtcbiAgc3dpcGVyLFxuICBkdXJhdGlvbixcbiAgdHJhbnNmb3JtRWxlbWVudHMsXG4gIGFsbFNsaWRlc1xufSkge1xuICBjb25zdCB7XG4gICAgYWN0aXZlSW5kZXhcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgZ2V0U2xpZGUgPSBlbCA9PiB7XG4gICAgaWYgKCFlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAvLyBhc3N1bWUgc2hhZG93IHJvb3RcbiAgICAgIGNvbnN0IHNsaWRlID0gc3dpcGVyLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5zaGFkb3dSb290ICYmIHNsaWRlRWwuc2hhZG93Um9vdCA9PT0gZWwucGFyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gc2xpZGU7XG4gICAgfVxuICAgIHJldHVybiBlbC5wYXJlbnRFbGVtZW50O1xuICB9O1xuICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XG4gICAgbGV0IGV2ZW50VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgbGV0IHRyYW5zaXRpb25FbmRUYXJnZXQ7XG4gICAgaWYgKGFsbFNsaWRlcykge1xuICAgICAgdHJhbnNpdGlvbkVuZFRhcmdldCA9IHRyYW5zZm9ybUVsZW1lbnRzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uRW5kVGFyZ2V0ID0gdHJhbnNmb3JtRWxlbWVudHMuZmlsdGVyKHRyYW5zZm9ybUVsID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSB0cmFuc2Zvcm1FbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1zbGlkZS10cmFuc2Zvcm0nKSA/IGdldFNsaWRlKHRyYW5zZm9ybUVsKSA6IHRyYW5zZm9ybUVsO1xuICAgICAgICByZXR1cm4gc3dpcGVyLmdldFNsaWRlSW5kZXgoZWwpID09PSBhY3RpdmVJbmRleDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cmFuc2l0aW9uRW5kVGFyZ2V0LmZvckVhY2goZWwgPT4ge1xuICAgICAgZWxlbWVudFRyYW5zaXRpb25FbmQoZWwsICgpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50VHJpZ2dlcmVkKSByZXR1cm47XG4gICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgZXZlbnRUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoJ3RyYW5zaXRpb25lbmQnLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kIGFzIGUgfTtcbiIsImltcG9ydCB7IGUgYXMgZWZmZWN0SW5pdCB9IGZyb20gJy4uL3NoYXJlZC9lZmZlY3QtaW5pdC5tanMnO1xuaW1wb3J0IHsgZSBhcyBlZmZlY3RUYXJnZXQgfSBmcm9tICcuLi9zaGFyZWQvZWZmZWN0LXRhcmdldC5tanMnO1xuaW1wb3J0IHsgZSBhcyBlZmZlY3RWaXJ0dWFsVHJhbnNpdGlvbkVuZCB9IGZyb20gJy4uL3NoYXJlZC9lZmZlY3QtdmlydHVhbC10cmFuc2l0aW9uLWVuZC5tanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTbGlkZVRyYW5zZm9ybUVsIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbmZ1bmN0aW9uIEVmZmVjdEZhZGUoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBmYWRlRWZmZWN0OiB7XG4gICAgICBjcm9zc0ZhZGU6IGZhbHNlXG4gICAgfVxuICB9KTtcbiAgY29uc3Qgc2V0VHJhbnNsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlc1xuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5mYWRlRWZmZWN0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzbGlkZUVsID0gc3dpcGVyLnNsaWRlc1tpXTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHNsaWRlRWwuc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICBsZXQgdHggPSAtb2Zmc2V0O1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHR4IC09IHN3aXBlci50cmFuc2xhdGU7XG4gICAgICBsZXQgdHkgPSAwO1xuICAgICAgaWYgKCFzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgdHggPSAwO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2xpZGVPcGFjaXR5ID0gc3dpcGVyLnBhcmFtcy5mYWRlRWZmZWN0LmNyb3NzRmFkZSA/IE1hdGgubWF4KDEgLSBNYXRoLmFicyhzbGlkZUVsLnByb2dyZXNzKSwgMCkgOiAxICsgTWF0aC5taW4oTWF0aC5tYXgoc2xpZGVFbC5wcm9ncmVzcywgLTEpLCAwKTtcbiAgICAgIGNvbnN0IHRhcmdldEVsID0gZWZmZWN0VGFyZ2V0KHBhcmFtcywgc2xpZGVFbCk7XG4gICAgICB0YXJnZXRFbC5zdHlsZS5vcGFjaXR5ID0gc2xpZGVPcGFjaXR5O1xuICAgICAgdGFyZ2V0RWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHh9cHgsICR7dHl9cHgsIDBweClgO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2V0VHJhbnNpdGlvbiA9IGR1cmF0aW9uID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm1FbGVtZW50cyA9IHN3aXBlci5zbGlkZXMubWFwKHNsaWRlRWwgPT4gZ2V0U2xpZGVUcmFuc2Zvcm1FbChzbGlkZUVsKSk7XG4gICAgdHJhbnNmb3JtRWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XG4gICAgfSk7XG4gICAgZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQoe1xuICAgICAgc3dpcGVyLFxuICAgICAgZHVyYXRpb24sXG4gICAgICB0cmFuc2Zvcm1FbGVtZW50cyxcbiAgICAgIGFsbFNsaWRlczogdHJ1ZVxuICAgIH0pO1xuICB9O1xuICBlZmZlY3RJbml0KHtcbiAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICBzd2lwZXIsXG4gICAgb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zaXRpb24sXG4gICAgb3ZlcndyaXRlUGFyYW1zOiAoKSA9PiAoe1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgIHZpcnR1YWxUcmFuc2xhdGU6ICFzd2lwZXIucGFyYW1zLmNzc01vZGVcbiAgICB9KVxuICB9KTtcbn1cblxuZXhwb3J0IHsgRWZmZWN0RmFkZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBlIGFzIGVmZmVjdEluaXQgfSBmcm9tICcuLi9zaGFyZWQvZWZmZWN0LWluaXQubWpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlRWxlbWVudCwgYSBhcyBnZXRSb3RhdGVGaXggfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMubWpzJztcblxuZnVuY3Rpb24gRWZmZWN0Q3ViZSh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGN1YmVFZmZlY3Q6IHtcbiAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgIHNoYWRvdzogdHJ1ZSxcbiAgICAgIHNoYWRvd09mZnNldDogMjAsXG4gICAgICBzaGFkb3dTY2FsZTogMC45NFxuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGNyZWF0ZVNsaWRlU2hhZG93cyA9IChzbGlkZUVsLCBwcm9ncmVzcywgaXNIb3Jpem9udGFsKSA9PiB7XG4gICAgbGV0IHNoYWRvd0JlZm9yZSA9IGlzSG9yaXpvbnRhbCA/IHNsaWRlRWwucXVlcnlTZWxlY3RvcignLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpIDogc2xpZGVFbC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICBsZXQgc2hhZG93QWZ0ZXIgPSBpc0hvcml6b250YWwgPyBzbGlkZUVsLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiBzbGlkZUVsLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuICAgIGlmICghc2hhZG93QmVmb3JlKSB7XG4gICAgICBzaGFkb3dCZWZvcmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBgc3dpcGVyLXNsaWRlLXNoYWRvdy1jdWJlIHN3aXBlci1zbGlkZS1zaGFkb3ctJHtpc0hvcml6b250YWwgPyAnbGVmdCcgOiAndG9wJ31gLnNwbGl0KCcgJykpO1xuICAgICAgc2xpZGVFbC5hcHBlbmQoc2hhZG93QmVmb3JlKTtcbiAgICB9XG4gICAgaWYgKCFzaGFkb3dBZnRlcikge1xuICAgICAgc2hhZG93QWZ0ZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBgc3dpcGVyLXNsaWRlLXNoYWRvdy1jdWJlIHN3aXBlci1zbGlkZS1zaGFkb3ctJHtpc0hvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbSd9YC5zcGxpdCgnICcpKTtcbiAgICAgIHNsaWRlRWwuYXBwZW5kKHNoYWRvd0FmdGVyKTtcbiAgICB9XG4gICAgaWYgKHNoYWRvd0JlZm9yZSkgc2hhZG93QmVmb3JlLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgtcHJvZ3Jlc3MsIDApO1xuICAgIGlmIChzaGFkb3dBZnRlcikgc2hhZG93QWZ0ZXIuc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KHByb2dyZXNzLCAwKTtcbiAgfTtcbiAgY29uc3QgcmVjcmVhdGVTaGFkb3dzID0gKCkgPT4ge1xuICAgIC8vIGNyZWF0ZSBuZXcgb25lc1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBzd2lwZXIuc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKHNsaWRlRWwucHJvZ3Jlc3MsIDEpLCAtMSk7XG4gICAgICBjcmVhdGVTbGlkZVNoYWRvd3Moc2xpZGVFbCwgcHJvZ3Jlc3MsIGlzSG9yaXpvbnRhbCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHNldFRyYW5zbGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIHdyYXBwZXJFbCxcbiAgICAgIHNsaWRlcyxcbiAgICAgIHdpZHRoOiBzd2lwZXJXaWR0aCxcbiAgICAgIGhlaWdodDogc3dpcGVySGVpZ2h0LFxuICAgICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgICBzaXplOiBzd2lwZXJTaXplLFxuICAgICAgYnJvd3NlclxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3QgciA9IGdldFJvdGF0ZUZpeChzd2lwZXIpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuY3ViZUVmZmVjdDtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG4gICAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgbGV0IHdyYXBwZXJSb3RhdGUgPSAwO1xuICAgIGxldCBjdWJlU2hhZG93RWw7XG4gICAgaWYgKHBhcmFtcy5zaGFkb3cpIHtcbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgY3ViZVNoYWRvd0VsID0gc3dpcGVyLndyYXBwZXJFbC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWN1YmUtc2hhZG93Jyk7XG4gICAgICAgIGlmICghY3ViZVNoYWRvd0VsKSB7XG4gICAgICAgICAgY3ViZVNoYWRvd0VsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3N3aXBlci1jdWJlLXNoYWRvdycpO1xuICAgICAgICAgIHN3aXBlci53cmFwcGVyRWwuYXBwZW5kKGN1YmVTaGFkb3dFbCk7XG4gICAgICAgIH1cbiAgICAgICAgY3ViZVNoYWRvd0VsLnN0eWxlLmhlaWdodCA9IGAke3N3aXBlcldpZHRofXB4YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1YmVTaGFkb3dFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY3ViZS1zaGFkb3cnKTtcbiAgICAgICAgaWYgKCFjdWJlU2hhZG93RWwpIHtcbiAgICAgICAgICBjdWJlU2hhZG93RWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc3dpcGVyLWN1YmUtc2hhZG93Jyk7XG4gICAgICAgICAgZWwuYXBwZW5kKGN1YmVTaGFkb3dFbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNsaWRlRWwgPSBzbGlkZXNbaV07XG4gICAgICBsZXQgc2xpZGVJbmRleCA9IGk7XG4gICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSBwYXJzZUludChzbGlkZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgICAgfVxuICAgICAgbGV0IHNsaWRlQW5nbGUgPSBzbGlkZUluZGV4ICogOTA7XG4gICAgICBsZXQgcm91bmQgPSBNYXRoLmZsb29yKHNsaWRlQW5nbGUgLyAzNjApO1xuICAgICAgaWYgKHJ0bCkge1xuICAgICAgICBzbGlkZUFuZ2xlID0gLXNsaWRlQW5nbGU7XG4gICAgICAgIHJvdW5kID0gTWF0aC5mbG9vcigtc2xpZGVBbmdsZSAvIDM2MCk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKHNsaWRlRWwucHJvZ3Jlc3MsIDEpLCAtMSk7XG4gICAgICBsZXQgdHggPSAwO1xuICAgICAgbGV0IHR5ID0gMDtcbiAgICAgIGxldCB0eiA9IDA7XG4gICAgICBpZiAoc2xpZGVJbmRleCAlIDQgPT09IDApIHtcbiAgICAgICAgdHggPSAtcm91bmQgKiA0ICogc3dpcGVyU2l6ZTtcbiAgICAgICAgdHogPSAwO1xuICAgICAgfSBlbHNlIGlmICgoc2xpZGVJbmRleCAtIDEpICUgNCA9PT0gMCkge1xuICAgICAgICB0eCA9IDA7XG4gICAgICAgIHR6ID0gLXJvdW5kICogNCAqIHN3aXBlclNpemU7XG4gICAgICB9IGVsc2UgaWYgKChzbGlkZUluZGV4IC0gMikgJSA0ID09PSAwKSB7XG4gICAgICAgIHR4ID0gc3dpcGVyU2l6ZSArIHJvdW5kICogNCAqIHN3aXBlclNpemU7XG4gICAgICAgIHR6ID0gc3dpcGVyU2l6ZTtcbiAgICAgIH0gZWxzZSBpZiAoKHNsaWRlSW5kZXggLSAzKSAlIDQgPT09IDApIHtcbiAgICAgICAgdHggPSAtc3dpcGVyU2l6ZTtcbiAgICAgICAgdHogPSAzICogc3dpcGVyU2l6ZSArIHN3aXBlclNpemUgKiA0ICogcm91bmQ7XG4gICAgICB9XG4gICAgICBpZiAocnRsKSB7XG4gICAgICAgIHR4ID0gLXR4O1xuICAgICAgfVxuICAgICAgaWYgKCFpc0hvcml6b250YWwpIHtcbiAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgdHggPSAwO1xuICAgICAgfVxuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZVgoJHtyKGlzSG9yaXpvbnRhbCA/IDAgOiAtc2xpZGVBbmdsZSl9ZGVnKSByb3RhdGVZKCR7cihpc0hvcml6b250YWwgPyBzbGlkZUFuZ2xlIDogMCl9ZGVnKSB0cmFuc2xhdGUzZCgke3R4fXB4LCAke3R5fXB4LCAke3R6fXB4KWA7XG4gICAgICBpZiAocHJvZ3Jlc3MgPD0gMSAmJiBwcm9ncmVzcyA+IC0xKSB7XG4gICAgICAgIHdyYXBwZXJSb3RhdGUgPSBzbGlkZUluZGV4ICogOTAgKyBwcm9ncmVzcyAqIDkwO1xuICAgICAgICBpZiAocnRsKSB3cmFwcGVyUm90YXRlID0gLXNsaWRlSW5kZXggKiA5MCAtIHByb2dyZXNzICogOTA7XG4gICAgICB9XG4gICAgICBzbGlkZUVsLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgIGlmIChwYXJhbXMuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgIGNyZWF0ZVNsaWRlU2hhZG93cyhzbGlkZUVsLCBwcm9ncmVzcywgaXNIb3Jpem9udGFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgd3JhcHBlckVsLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGA1MCUgNTAlIC0ke3N3aXBlclNpemUgLyAyfXB4YDtcbiAgICB3cmFwcGVyRWwuc3R5bGVbJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbiddID0gYDUwJSA1MCUgLSR7c3dpcGVyU2l6ZSAvIDJ9cHhgO1xuICAgIGlmIChwYXJhbXMuc2hhZG93KSB7XG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIGN1YmVTaGFkb3dFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMHB4LCAke3N3aXBlcldpZHRoIC8gMiArIHBhcmFtcy5zaGFkb3dPZmZzZXR9cHgsICR7LXN3aXBlcldpZHRoIC8gMn1weCkgcm90YXRlWCg4OS45OWRlZykgcm90YXRlWigwZGVnKSBzY2FsZSgke3BhcmFtcy5zaGFkb3dTY2FsZX0pYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd0FuZ2xlID0gTWF0aC5hYnMod3JhcHBlclJvdGF0ZSkgLSBNYXRoLmZsb29yKE1hdGguYWJzKHdyYXBwZXJSb3RhdGUpIC8gOTApICogOTA7XG4gICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAxLjUgLSAoTWF0aC5zaW4oc2hhZG93QW5nbGUgKiAyICogTWF0aC5QSSAvIDM2MCkgLyAyICsgTWF0aC5jb3Moc2hhZG93QW5nbGUgKiAyICogTWF0aC5QSSAvIDM2MCkgLyAyKTtcbiAgICAgICAgY29uc3Qgc2NhbGUxID0gcGFyYW1zLnNoYWRvd1NjYWxlO1xuICAgICAgICBjb25zdCBzY2FsZTIgPSBwYXJhbXMuc2hhZG93U2NhbGUgLyBtdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBwYXJhbXMuc2hhZG93T2Zmc2V0O1xuICAgICAgICBjdWJlU2hhZG93RWwuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlM2QoJHtzY2FsZTF9LCAxLCAke3NjYWxlMn0pIHRyYW5zbGF0ZTNkKDBweCwgJHtzd2lwZXJIZWlnaHQgLyAyICsgb2Zmc2V0fXB4LCAkey1zd2lwZXJIZWlnaHQgLyAyIC8gc2NhbGUyfXB4KSByb3RhdGVYKC04OS45OWRlZylgO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB6RmFjdG9yID0gKGJyb3dzZXIuaXNTYWZhcmkgfHwgYnJvd3Nlci5pc1dlYlZpZXcpICYmIGJyb3dzZXIubmVlZFBlcnNwZWN0aXZlRml4ID8gLXN3aXBlclNpemUgLyAyIDogMDtcbiAgICB3cmFwcGVyRWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDBweCwwLCR7ekZhY3Rvcn1weCkgcm90YXRlWCgke3Ioc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gMCA6IHdyYXBwZXJSb3RhdGUpfWRlZykgcm90YXRlWSgke3Ioc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLXdyYXBwZXJSb3RhdGUgOiAwKX1kZWcpYDtcbiAgICB3cmFwcGVyRWwuc3R5bGUuc2V0UHJvcGVydHkoJy0tc3dpcGVyLWN1YmUtdHJhbnNsYXRlLXonLCBgJHt6RmFjdG9yfXB4YCk7XG4gIH07XG4gIGNvbnN0IHNldFRyYW5zaXRpb24gPSBkdXJhdGlvbiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBzbGlkZXNcbiAgICB9ID0gc3dpcGVyO1xuICAgIHNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgc2xpZGVFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XG4gICAgICBzbGlkZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgICBzdWJFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jdWJlRWZmZWN0LnNoYWRvdyAmJiAhc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICBjb25zdCBzaGFkb3dFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY3ViZS1zaGFkb3cnKTtcbiAgICAgIGlmIChzaGFkb3dFbCkgc2hhZG93RWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xuICAgIH1cbiAgfTtcbiAgZWZmZWN0SW5pdCh7XG4gICAgZWZmZWN0OiAnY3ViZScsXG4gICAgc3dpcGVyLFxuICAgIG9uLFxuICAgIHNldFRyYW5zbGF0ZSxcbiAgICBzZXRUcmFuc2l0aW9uLFxuICAgIHJlY3JlYXRlU2hhZG93cyxcbiAgICBnZXRFZmZlY3RQYXJhbXM6ICgpID0+IHN3aXBlci5wYXJhbXMuY3ViZUVmZmVjdCxcbiAgICBwZXJzcGVjdGl2ZTogKCkgPT4gdHJ1ZSxcbiAgICBvdmVyd3JpdGVQYXJhbXM6ICgpID0+ICh7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgcmVzaXN0YW5jZVJhdGlvOiAwLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgdmlydHVhbFRyYW5zbGF0ZTogdHJ1ZVxuICAgIH0pXG4gIH0pO1xufVxuXG5leHBvcnQgeyBFZmZlY3RDdWJlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGcgYXMgZ2V0U2xpZGVUcmFuc2Zvcm1FbCwgYyBhcyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkb3coc3VmZml4LCBzbGlkZUVsLCBzaWRlKSB7XG4gIGNvbnN0IHNoYWRvd0NsYXNzID0gYHN3aXBlci1zbGlkZS1zaGFkb3cke3NpZGUgPyBgLSR7c2lkZX1gIDogJyd9JHtzdWZmaXggPyBgIHN3aXBlci1zbGlkZS1zaGFkb3ctJHtzdWZmaXh9YCA6ICcnfWA7XG4gIGNvbnN0IHNoYWRvd0NvbnRhaW5lciA9IGdldFNsaWRlVHJhbnNmb3JtRWwoc2xpZGVFbCk7XG4gIGxldCBzaGFkb3dFbCA9IHNoYWRvd0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAuJHtzaGFkb3dDbGFzcy5zcGxpdCgnICcpLmpvaW4oJy4nKX1gKTtcbiAgaWYgKCFzaGFkb3dFbCkge1xuICAgIHNoYWRvd0VsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywgc2hhZG93Q2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgc2hhZG93Q29udGFpbmVyLmFwcGVuZChzaGFkb3dFbCk7XG4gIH1cbiAgcmV0dXJuIHNoYWRvd0VsO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTaGFkb3cgYXMgYyB9O1xuIiwiaW1wb3J0IHsgYyBhcyBjcmVhdGVTaGFkb3cgfSBmcm9tICcuLi9zaGFyZWQvY3JlYXRlLXNoYWRvdy5tanMnO1xuaW1wb3J0IHsgZSBhcyBlZmZlY3RJbml0IH0gZnJvbSAnLi4vc2hhcmVkL2VmZmVjdC1pbml0Lm1qcyc7XG5pbXBvcnQgeyBlIGFzIGVmZmVjdFRhcmdldCB9IGZyb20gJy4uL3NoYXJlZC9lZmZlY3QtdGFyZ2V0Lm1qcyc7XG5pbXBvcnQgeyBlIGFzIGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kIH0gZnJvbSAnLi4vc2hhcmVkL2VmZmVjdC12aXJ0dWFsLXRyYW5zaXRpb24tZW5kLm1qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFNsaWRlVHJhbnNmb3JtRWwsIGEgYXMgZ2V0Um90YXRlRml4IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbmZ1bmN0aW9uIEVmZmVjdEZsaXAoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBmbGlwRWZmZWN0OiB7XG4gICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICBsaW1pdFJvdGF0aW9uOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgY29uc3QgY3JlYXRlU2xpZGVTaGFkb3dzID0gKHNsaWRlRWwsIHByb2dyZXNzKSA9PiB7XG4gICAgbGV0IHNoYWRvd0JlZm9yZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlRWwucXVlcnlTZWxlY3RvcignLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpIDogc2xpZGVFbC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICBsZXQgc2hhZG93QWZ0ZXIgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBzbGlkZUVsLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiBzbGlkZUVsLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuICAgIGlmICghc2hhZG93QmVmb3JlKSB7XG4gICAgICBzaGFkb3dCZWZvcmUgPSBjcmVhdGVTaGFkb3coJ2ZsaXAnLCBzbGlkZUVsLCBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJyk7XG4gICAgfVxuICAgIGlmICghc2hhZG93QWZ0ZXIpIHtcbiAgICAgIHNoYWRvd0FmdGVyID0gY3JlYXRlU2hhZG93KCdmbGlwJywgc2xpZGVFbCwgc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3JpZ2h0JyA6ICdib3R0b20nKTtcbiAgICB9XG4gICAgaWYgKHNoYWRvd0JlZm9yZSkgc2hhZG93QmVmb3JlLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgtcHJvZ3Jlc3MsIDApO1xuICAgIGlmIChzaGFkb3dBZnRlcikgc2hhZG93QWZ0ZXIuc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KHByb2dyZXNzLCAwKTtcbiAgfTtcbiAgY29uc3QgcmVjcmVhdGVTaGFkb3dzID0gKCkgPT4ge1xuICAgIC8vIFNldCBzaGFkb3dzXG4gICAgc3dpcGVyLnBhcmFtcy5mbGlwRWZmZWN0O1xuICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgIGxldCBwcm9ncmVzcyA9IHNsaWRlRWwucHJvZ3Jlc3M7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mbGlwRWZmZWN0LmxpbWl0Um90YXRpb24pIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbihzbGlkZUVsLnByb2dyZXNzLCAxKSwgLTEpO1xuICAgICAgfVxuICAgICAgY3JlYXRlU2xpZGVTaGFkb3dzKHNsaWRlRWwsIHByb2dyZXNzKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgc2V0VHJhbnNsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlcyxcbiAgICAgIHJ0bFRyYW5zbGF0ZTogcnRsXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmZsaXBFZmZlY3Q7XG4gICAgY29uc3Qgcm90YXRlRml4ID0gZ2V0Um90YXRlRml4KHN3aXBlcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNsaWRlRWwgPSBzbGlkZXNbaV07XG4gICAgICBsZXQgcHJvZ3Jlc3MgPSBzbGlkZUVsLnByb2dyZXNzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZmxpcEVmZmVjdC5saW1pdFJvdGF0aW9uKSB7XG4gICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oc2xpZGVFbC5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9IHNsaWRlRWwuc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICBjb25zdCByb3RhdGUgPSAtMTgwICogcHJvZ3Jlc3M7XG4gICAgICBsZXQgcm90YXRlWSA9IHJvdGF0ZTtcbiAgICAgIGxldCByb3RhdGVYID0gMDtcbiAgICAgIGxldCB0eCA9IHN3aXBlci5wYXJhbXMuY3NzTW9kZSA/IC1vZmZzZXQgLSBzd2lwZXIudHJhbnNsYXRlIDogLW9mZnNldDtcbiAgICAgIGxldCB0eSA9IDA7XG4gICAgICBpZiAoIXN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICB0eSA9IHR4O1xuICAgICAgICB0eCA9IDA7XG4gICAgICAgIHJvdGF0ZVggPSAtcm90YXRlWTtcbiAgICAgICAgcm90YXRlWSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHJ0bCkge1xuICAgICAgICByb3RhdGVZID0gLXJvdGF0ZVk7XG4gICAgICB9XG4gICAgICBzbGlkZUVsLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKHByb2dyZXNzKSkgKyBzbGlkZXMubGVuZ3RoO1xuICAgICAgaWYgKHBhcmFtcy5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgY3JlYXRlU2xpZGVTaGFkb3dzKHNsaWRlRWwsIHByb2dyZXNzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3R4fXB4LCAke3R5fXB4LCAwcHgpIHJvdGF0ZVgoJHtyb3RhdGVGaXgocm90YXRlWCl9ZGVnKSByb3RhdGVZKCR7cm90YXRlRml4KHJvdGF0ZVkpfWRlZylgO1xuICAgICAgY29uc3QgdGFyZ2V0RWwgPSBlZmZlY3RUYXJnZXQocGFyYW1zLCBzbGlkZUVsKTtcbiAgICAgIHRhcmdldEVsLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNldFRyYW5zaXRpb24gPSBkdXJhdGlvbiA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtRWxlbWVudHMgPSBzd2lwZXIuc2xpZGVzLm1hcChzbGlkZUVsID0+IGdldFNsaWRlVHJhbnNmb3JtRWwoc2xpZGVFbCkpO1xuICAgIHRyYW5zZm9ybUVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykuZm9yRWFjaChzaGFkb3dFbCA9PiB7XG4gICAgICAgIHNoYWRvd0VsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kKHtcbiAgICAgIHN3aXBlcixcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdHJhbnNmb3JtRWxlbWVudHNcbiAgICB9KTtcbiAgfTtcbiAgZWZmZWN0SW5pdCh7XG4gICAgZWZmZWN0OiAnZmxpcCcsXG4gICAgc3dpcGVyLFxuICAgIG9uLFxuICAgIHNldFRyYW5zbGF0ZSxcbiAgICBzZXRUcmFuc2l0aW9uLFxuICAgIHJlY3JlYXRlU2hhZG93cyxcbiAgICBnZXRFZmZlY3RQYXJhbXM6ICgpID0+IHN3aXBlci5wYXJhbXMuZmxpcEVmZmVjdCxcbiAgICBwZXJzcGVjdGl2ZTogKCkgPT4gdHJ1ZSxcbiAgICBvdmVyd3JpdGVQYXJhbXM6ICgpID0+ICh7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgdmlydHVhbFRyYW5zbGF0ZTogIXN3aXBlci5wYXJhbXMuY3NzTW9kZVxuICAgIH0pXG4gIH0pO1xufVxuXG5leHBvcnQgeyBFZmZlY3RGbGlwIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGMgYXMgY3JlYXRlU2hhZG93IH0gZnJvbSAnLi4vc2hhcmVkL2NyZWF0ZS1zaGFkb3cubWpzJztcbmltcG9ydCB7IGUgYXMgZWZmZWN0SW5pdCB9IGZyb20gJy4uL3NoYXJlZC9lZmZlY3QtaW5pdC5tanMnO1xuaW1wb3J0IHsgZSBhcyBlZmZlY3RUYXJnZXQgfSBmcm9tICcuLi9zaGFyZWQvZWZmZWN0LXRhcmdldC5tanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTbGlkZVRyYW5zZm9ybUVsLCBhIGFzIGdldFJvdGF0ZUZpeCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBFZmZlY3RDb3ZlcmZsb3coe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBjb3ZlcmZsb3dFZmZlY3Q6IHtcbiAgICAgIHJvdGF0ZTogNTAsXG4gICAgICBzdHJldGNoOiAwLFxuICAgICAgZGVwdGg6IDEwMCxcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgbW9kaWZpZXI6IDEsXG4gICAgICBzbGlkZVNoYWRvd3M6IHRydWVcbiAgICB9XG4gIH0pO1xuICBjb25zdCBzZXRUcmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgd2lkdGg6IHN3aXBlcldpZHRoLFxuICAgICAgaGVpZ2h0OiBzd2lwZXJIZWlnaHQsXG4gICAgICBzbGlkZXMsXG4gICAgICBzbGlkZXNTaXplc0dyaWRcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuY292ZXJmbG93RWZmZWN0O1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzd2lwZXIudHJhbnNsYXRlO1xuICAgIGNvbnN0IGNlbnRlciA9IGlzSG9yaXpvbnRhbCA/IC10cmFuc2Zvcm0gKyBzd2lwZXJXaWR0aCAvIDIgOiAtdHJhbnNmb3JtICsgc3dpcGVySGVpZ2h0IC8gMjtcbiAgICBjb25zdCByb3RhdGUgPSBpc0hvcml6b250YWwgPyBwYXJhbXMucm90YXRlIDogLXBhcmFtcy5yb3RhdGU7XG4gICAgY29uc3QgdHJhbnNsYXRlID0gcGFyYW1zLmRlcHRoO1xuICAgIGNvbnN0IHIgPSBnZXRSb3RhdGVGaXgoc3dpcGVyKTtcbiAgICAvLyBFYWNoIHNsaWRlIG9mZnNldCBmcm9tIGNlbnRlclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBzbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNsaWRlRWwgPSBzbGlkZXNbaV07XG4gICAgICBjb25zdCBzbGlkZVNpemUgPSBzbGlkZXNTaXplc0dyaWRbaV07XG4gICAgICBjb25zdCBzbGlkZU9mZnNldCA9IHNsaWRlRWwuc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICBjb25zdCBjZW50ZXJPZmZzZXQgPSAoY2VudGVyIC0gc2xpZGVPZmZzZXQgLSBzbGlkZVNpemUgLyAyKSAvIHNsaWRlU2l6ZTtcbiAgICAgIGNvbnN0IG9mZnNldE11bHRpcGxpZXIgPSB0eXBlb2YgcGFyYW1zLm1vZGlmaWVyID09PSAnZnVuY3Rpb24nID8gcGFyYW1zLm1vZGlmaWVyKGNlbnRlck9mZnNldCkgOiBjZW50ZXJPZmZzZXQgKiBwYXJhbXMubW9kaWZpZXI7XG4gICAgICBsZXQgcm90YXRlWSA9IGlzSG9yaXpvbnRhbCA/IHJvdGF0ZSAqIG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgbGV0IHJvdGF0ZVggPSBpc0hvcml6b250YWwgPyAwIDogcm90YXRlICogb2Zmc2V0TXVsdGlwbGllcjtcbiAgICAgIC8vIHZhciByb3RhdGVaID0gMFxuICAgICAgbGV0IHRyYW5zbGF0ZVogPSAtdHJhbnNsYXRlICogTWF0aC5hYnMob2Zmc2V0TXVsdGlwbGllcik7XG4gICAgICBsZXQgc3RyZXRjaCA9IHBhcmFtcy5zdHJldGNoO1xuICAgICAgLy8gQWxsb3cgcGVyY2VudGFnZSB0byBtYWtlIGEgcmVsYXRpdmUgc3RyZXRjaCBmb3IgcmVzcG9uc2l2ZSBzbGlkZXJzXG4gICAgICBpZiAodHlwZW9mIHN0cmV0Y2ggPT09ICdzdHJpbmcnICYmIHN0cmV0Y2guaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgICAgICBzdHJldGNoID0gcGFyc2VGbG9hdChwYXJhbXMuc3RyZXRjaCkgLyAxMDAgKiBzbGlkZVNpemU7XG4gICAgICB9XG4gICAgICBsZXQgdHJhbnNsYXRlWSA9IGlzSG9yaXpvbnRhbCA/IDAgOiBzdHJldGNoICogb2Zmc2V0TXVsdGlwbGllcjtcbiAgICAgIGxldCB0cmFuc2xhdGVYID0gaXNIb3Jpem9udGFsID8gc3RyZXRjaCAqIG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgbGV0IHNjYWxlID0gMSAtICgxIC0gcGFyYW1zLnNjYWxlKSAqIE1hdGguYWJzKG9mZnNldE11bHRpcGxpZXIpO1xuXG4gICAgICAvLyBGaXggZm9yIHVsdHJhIHNtYWxsIHZhbHVlc1xuICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVgpIDwgMC4wMDEpIHRyYW5zbGF0ZVggPSAwO1xuICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVkpIDwgMC4wMDEpIHRyYW5zbGF0ZVkgPSAwO1xuICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVopIDwgMC4wMDEpIHRyYW5zbGF0ZVogPSAwO1xuICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVkpIDwgMC4wMDEpIHJvdGF0ZVkgPSAwO1xuICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVgpIDwgMC4wMDEpIHJvdGF0ZVggPSAwO1xuICAgICAgaWYgKE1hdGguYWJzKHNjYWxlKSA8IDAuMDAxKSBzY2FsZSA9IDA7XG4gICAgICBjb25zdCBzbGlkZVRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3RyYW5zbGF0ZVh9cHgsJHt0cmFuc2xhdGVZfXB4LCR7dHJhbnNsYXRlWn1weCkgIHJvdGF0ZVgoJHtyKHJvdGF0ZVgpfWRlZykgcm90YXRlWSgke3Iocm90YXRlWSl9ZGVnKSBzY2FsZSgke3NjYWxlfSlgO1xuICAgICAgY29uc3QgdGFyZ2V0RWwgPSBlZmZlY3RUYXJnZXQocGFyYW1zLCBzbGlkZUVsKTtcbiAgICAgIHRhcmdldEVsLnN0eWxlLnRyYW5zZm9ybSA9IHNsaWRlVHJhbnNmb3JtO1xuICAgICAgc2xpZGVFbC5zdHlsZS56SW5kZXggPSAtTWF0aC5hYnMoTWF0aC5yb3VuZChvZmZzZXRNdWx0aXBsaWVyKSkgKyAxO1xuICAgICAgaWYgKHBhcmFtcy5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgLy8gU2V0IHNoYWRvd3NcbiAgICAgICAgbGV0IHNoYWRvd0JlZm9yZUVsID0gaXNIb3Jpem9udGFsID8gc2xpZGVFbC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiBzbGlkZUVsLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCcpO1xuICAgICAgICBsZXQgc2hhZG93QWZ0ZXJFbCA9IGlzSG9yaXpvbnRhbCA/IHNsaWRlRWwucXVlcnlTZWxlY3RvcignLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6IHNsaWRlRWwucXVlcnlTZWxlY3RvcignLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tJyk7XG4gICAgICAgIGlmICghc2hhZG93QmVmb3JlRWwpIHtcbiAgICAgICAgICBzaGFkb3dCZWZvcmVFbCA9IGNyZWF0ZVNoYWRvdygnY292ZXJmbG93Jywgc2xpZGVFbCwgaXNIb3Jpem9udGFsID8gJ2xlZnQnIDogJ3RvcCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2hhZG93QWZ0ZXJFbCkge1xuICAgICAgICAgIHNoYWRvd0FmdGVyRWwgPSBjcmVhdGVTaGFkb3coJ2NvdmVyZmxvdycsIHNsaWRlRWwsIGlzSG9yaXpvbnRhbCA/ICdyaWdodCcgOiAnYm90dG9tJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoYWRvd0JlZm9yZUVsKSBzaGFkb3dCZWZvcmVFbC5zdHlsZS5vcGFjaXR5ID0gb2Zmc2V0TXVsdGlwbGllciA+IDAgPyBvZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgICAgaWYgKHNoYWRvd0FmdGVyRWwpIHNoYWRvd0FmdGVyRWwuc3R5bGUub3BhY2l0eSA9IC1vZmZzZXRNdWx0aXBsaWVyID4gMCA/IC1vZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHNldFRyYW5zaXRpb24gPSBkdXJhdGlvbiA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtRWxlbWVudHMgPSBzd2lwZXIuc2xpZGVzLm1hcChzbGlkZUVsID0+IGdldFNsaWRlVHJhbnNmb3JtRWwoc2xpZGVFbCkpO1xuICAgIHRyYW5zZm9ybUVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykuZm9yRWFjaChzaGFkb3dFbCA9PiB7XG4gICAgICAgIHNoYWRvd0VsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBlZmZlY3RJbml0KHtcbiAgICBlZmZlY3Q6ICdjb3ZlcmZsb3cnLFxuICAgIHN3aXBlcixcbiAgICBvbixcbiAgICBzZXRUcmFuc2xhdGUsXG4gICAgc2V0VHJhbnNpdGlvbixcbiAgICBwZXJzcGVjdGl2ZTogKCkgPT4gdHJ1ZSxcbiAgICBvdmVyd3JpdGVQYXJhbXM6ICgpID0+ICh7XG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlXG4gICAgfSlcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEVmZmVjdENvdmVyZmxvdyBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBjIGFzIGNyZWF0ZVNoYWRvdyB9IGZyb20gJy4uL3NoYXJlZC9jcmVhdGUtc2hhZG93Lm1qcyc7XG5pbXBvcnQgeyBlIGFzIGVmZmVjdEluaXQgfSBmcm9tICcuLi9zaGFyZWQvZWZmZWN0LWluaXQubWpzJztcbmltcG9ydCB7IGUgYXMgZWZmZWN0VGFyZ2V0IH0gZnJvbSAnLi4vc2hhcmVkL2VmZmVjdC10YXJnZXQubWpzJztcbmltcG9ydCB7IGUgYXMgZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQgfSBmcm9tICcuLi9zaGFyZWQvZWZmZWN0LXZpcnR1YWwtdHJhbnNpdGlvbi1lbmQubWpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xpZGVUcmFuc2Zvcm1FbCwgYSBhcyBnZXRSb3RhdGVGaXggfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMubWpzJztcblxuZnVuY3Rpb24gRWZmZWN0Q3JlYXRpdmUoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBjcmVhdGl2ZUVmZmVjdDoge1xuICAgICAgbGltaXRQcm9ncmVzczogMSxcbiAgICAgIHNoYWRvd1BlclByb2dyZXNzOiBmYWxzZSxcbiAgICAgIHByb2dyZXNzTXVsdGlwbGllcjogMSxcbiAgICAgIHBlcnNwZWN0aXZlOiB0cnVlLFxuICAgICAgcHJldjoge1xuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9LFxuICAgICAgbmV4dDoge1xuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgY29uc3QgZ2V0VHJhbnNsYXRlVmFsdWUgPSB2YWx1ZSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHJldHVybiB2YWx1ZTtcbiAgICByZXR1cm4gYCR7dmFsdWV9cHhgO1xuICB9O1xuICBjb25zdCBzZXRUcmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVzLFxuICAgICAgd3JhcHBlckVsLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmNyZWF0aXZlRWZmZWN0O1xuICAgIGNvbnN0IHtcbiAgICAgIHByb2dyZXNzTXVsdGlwbGllcjogbXVsdGlwbGllclxuICAgIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgaXNDZW50ZXJlZFNsaWRlcyA9IHN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXM7XG4gICAgY29uc3Qgcm90YXRlRml4ID0gZ2V0Um90YXRlRml4KHN3aXBlcik7XG4gICAgaWYgKGlzQ2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIGNvbnN0IG1hcmdpbiA9IHNsaWRlc1NpemVzR3JpZFswXSAvIDIgLSBzd2lwZXIucGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSB8fCAwO1xuICAgICAgd3JhcHBlckVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKGNhbGMoNTAlIC0gJHttYXJnaW59cHgpKWA7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzbGlkZUVsID0gc2xpZGVzW2ldO1xuICAgICAgY29uc3Qgc2xpZGVQcm9ncmVzcyA9IHNsaWRlRWwucHJvZ3Jlc3M7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHNsaWRlRWwucHJvZ3Jlc3MsIC1wYXJhbXMubGltaXRQcm9ncmVzcyksIHBhcmFtcy5saW1pdFByb2dyZXNzKTtcbiAgICAgIGxldCBvcmlnaW5hbFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICBpZiAoIWlzQ2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgb3JpZ2luYWxQcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHNsaWRlRWwub3JpZ2luYWxQcm9ncmVzcywgLXBhcmFtcy5saW1pdFByb2dyZXNzKSwgcGFyYW1zLmxpbWl0UHJvZ3Jlc3MpO1xuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2xpZGVFbC5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgIGNvbnN0IHQgPSBbc3dpcGVyLnBhcmFtcy5jc3NNb2RlID8gLW9mZnNldCAtIHN3aXBlci50cmFuc2xhdGUgOiAtb2Zmc2V0LCAwLCAwXTtcbiAgICAgIGNvbnN0IHIgPSBbMCwgMCwgMF07XG4gICAgICBsZXQgY3VzdG9tID0gZmFsc2U7XG4gICAgICBpZiAoIXN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICB0WzFdID0gdFswXTtcbiAgICAgICAgdFswXSA9IDA7XG4gICAgICB9XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfTtcbiAgICAgIGlmIChwcm9ncmVzcyA8IDApIHtcbiAgICAgICAgZGF0YSA9IHBhcmFtcy5uZXh0O1xuICAgICAgICBjdXN0b20gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChwcm9ncmVzcyA+IDApIHtcbiAgICAgICAgZGF0YSA9IHBhcmFtcy5wcmV2O1xuICAgICAgICBjdXN0b20gPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gc2V0IHRyYW5zbGF0ZVxuICAgICAgdC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdFtpbmRleF0gPSBgY2FsYygke3ZhbHVlfXB4ICsgKCR7Z2V0VHJhbnNsYXRlVmFsdWUoZGF0YS50cmFuc2xhdGVbaW5kZXhdKX0gKiAke01hdGguYWJzKHByb2dyZXNzICogbXVsdGlwbGllcil9KSlgO1xuICAgICAgfSk7XG4gICAgICAvLyBzZXQgcm90YXRlc1xuICAgICAgci5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHZhbCA9IGRhdGEucm90YXRlW2luZGV4XSAqIE1hdGguYWJzKHByb2dyZXNzICogbXVsdGlwbGllcik7XG4gICAgICAgIHJbaW5kZXhdID0gdmFsO1xuICAgICAgfSk7XG4gICAgICBzbGlkZUVsLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKHNsaWRlUHJvZ3Jlc3MpKSArIHNsaWRlcy5sZW5ndGg7XG4gICAgICBjb25zdCB0cmFuc2xhdGVTdHJpbmcgPSB0LmpvaW4oJywgJyk7XG4gICAgICBjb25zdCByb3RhdGVTdHJpbmcgPSBgcm90YXRlWCgke3JvdGF0ZUZpeChyWzBdKX1kZWcpIHJvdGF0ZVkoJHtyb3RhdGVGaXgoclsxXSl9ZGVnKSByb3RhdGVaKCR7cm90YXRlRml4KHJbMl0pfWRlZylgO1xuICAgICAgY29uc3Qgc2NhbGVTdHJpbmcgPSBvcmlnaW5hbFByb2dyZXNzIDwgMCA/IGBzY2FsZSgkezEgKyAoMSAtIGRhdGEuc2NhbGUpICogb3JpZ2luYWxQcm9ncmVzcyAqIG11bHRpcGxpZXJ9KWAgOiBgc2NhbGUoJHsxIC0gKDEgLSBkYXRhLnNjYWxlKSAqIG9yaWdpbmFsUHJvZ3Jlc3MgKiBtdWx0aXBsaWVyfSlgO1xuICAgICAgY29uc3Qgb3BhY2l0eVN0cmluZyA9IG9yaWdpbmFsUHJvZ3Jlc3MgPCAwID8gMSArICgxIC0gZGF0YS5vcGFjaXR5KSAqIG9yaWdpbmFsUHJvZ3Jlc3MgKiBtdWx0aXBsaWVyIDogMSAtICgxIC0gZGF0YS5vcGFjaXR5KSAqIG9yaWdpbmFsUHJvZ3Jlc3MgKiBtdWx0aXBsaWVyO1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlU3RyaW5nfSkgJHtyb3RhdGVTdHJpbmd9ICR7c2NhbGVTdHJpbmd9YDtcblxuICAgICAgLy8gU2V0IHNoYWRvd3NcbiAgICAgIGlmIChjdXN0b20gJiYgZGF0YS5zaGFkb3cgfHwgIWN1c3RvbSkge1xuICAgICAgICBsZXQgc2hhZG93RWwgPSBzbGlkZUVsLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2xpZGUtc2hhZG93Jyk7XG4gICAgICAgIGlmICghc2hhZG93RWwgJiYgZGF0YS5zaGFkb3cpIHtcbiAgICAgICAgICBzaGFkb3dFbCA9IGNyZWF0ZVNoYWRvdygnY3JlYXRpdmUnLCBzbGlkZUVsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hhZG93RWwpIHtcbiAgICAgICAgICBjb25zdCBzaGFkb3dPcGFjaXR5ID0gcGFyYW1zLnNoYWRvd1BlclByb2dyZXNzID8gcHJvZ3Jlc3MgKiAoMSAvIHBhcmFtcy5saW1pdFByb2dyZXNzKSA6IHByb2dyZXNzO1xuICAgICAgICAgIHNoYWRvd0VsLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1pbihNYXRoLm1heChNYXRoLmFicyhzaGFkb3dPcGFjaXR5KSwgMCksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXRFbCA9IGVmZmVjdFRhcmdldChwYXJhbXMsIHNsaWRlRWwpO1xuICAgICAgdGFyZ2V0RWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgdGFyZ2V0RWwuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHlTdHJpbmc7XG4gICAgICBpZiAoZGF0YS5vcmlnaW4pIHtcbiAgICAgICAgdGFyZ2V0RWwuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gZGF0YS5vcmlnaW47XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRUcmFuc2l0aW9uID0gZHVyYXRpb24gPT4ge1xuICAgIGNvbnN0IHRyYW5zZm9ybUVsZW1lbnRzID0gc3dpcGVyLnNsaWRlcy5tYXAoc2xpZGVFbCA9PiBnZXRTbGlkZVRyYW5zZm9ybUVsKHNsaWRlRWwpKTtcbiAgICB0cmFuc2Zvcm1FbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUtc2hhZG93JykuZm9yRWFjaChzaGFkb3dFbCA9PiB7XG4gICAgICAgIHNoYWRvd0VsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kKHtcbiAgICAgIHN3aXBlcixcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdHJhbnNmb3JtRWxlbWVudHMsXG4gICAgICBhbGxTbGlkZXM6IHRydWVcbiAgICB9KTtcbiAgfTtcbiAgZWZmZWN0SW5pdCh7XG4gICAgZWZmZWN0OiAnY3JlYXRpdmUnLFxuICAgIHN3aXBlcixcbiAgICBvbixcbiAgICBzZXRUcmFuc2xhdGUsXG4gICAgc2V0VHJhbnNpdGlvbixcbiAgICBwZXJzcGVjdGl2ZTogKCkgPT4gc3dpcGVyLnBhcmFtcy5jcmVhdGl2ZUVmZmVjdC5wZXJzcGVjdGl2ZSxcbiAgICBvdmVyd3JpdGVQYXJhbXM6ICgpID0+ICh7XG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgdmlydHVhbFRyYW5zbGF0ZTogIXN3aXBlci5wYXJhbXMuY3NzTW9kZVxuICAgIH0pXG4gIH0pO1xufVxuXG5leHBvcnQgeyBFZmZlY3RDcmVhdGl2ZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBjIGFzIGNyZWF0ZVNoYWRvdyB9IGZyb20gJy4uL3NoYXJlZC9jcmVhdGUtc2hhZG93Lm1qcyc7XG5pbXBvcnQgeyBlIGFzIGVmZmVjdEluaXQgfSBmcm9tICcuLi9zaGFyZWQvZWZmZWN0LWluaXQubWpzJztcbmltcG9ydCB7IGUgYXMgZWZmZWN0VGFyZ2V0IH0gZnJvbSAnLi4vc2hhcmVkL2VmZmVjdC10YXJnZXQubWpzJztcbmltcG9ydCB7IGUgYXMgZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQgfSBmcm9tICcuLi9zaGFyZWQvZWZmZWN0LXZpcnR1YWwtdHJhbnNpdGlvbi1lbmQubWpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xpZGVUcmFuc2Zvcm1FbCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBFZmZlY3RDYXJkcyh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGNhcmRzRWZmZWN0OiB7XG4gICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICByb3RhdGU6IHRydWUsXG4gICAgICBwZXJTbGlkZVJvdGF0ZTogMixcbiAgICAgIHBlclNsaWRlT2Zmc2V0OiA4XG4gICAgfVxuICB9KTtcbiAgY29uc3Qgc2V0VHJhbnNsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlcyxcbiAgICAgIGFjdGl2ZUluZGV4LFxuICAgICAgcnRsVHJhbnNsYXRlOiBydGxcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuY2FyZHNFZmZlY3Q7XG4gICAgY29uc3Qge1xuICAgICAgc3RhcnRUcmFuc2xhdGUsXG4gICAgICBpc1RvdWNoZWRcbiAgICB9ID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRlID0gcnRsID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzbGlkZUVsID0gc2xpZGVzW2ldO1xuICAgICAgY29uc3Qgc2xpZGVQcm9ncmVzcyA9IHNsaWRlRWwucHJvZ3Jlc3M7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHNsaWRlUHJvZ3Jlc3MsIC00KSwgNCk7XG4gICAgICBsZXQgb2Zmc2V0ID0gc2xpZGVFbC5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmICFzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3N3aXBlci5taW5UcmFuc2xhdGUoKX1weClgO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgIG9mZnNldCAtPSBzbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICB9XG4gICAgICBsZXQgdFggPSBzd2lwZXIucGFyYW1zLmNzc01vZGUgPyAtb2Zmc2V0IC0gc3dpcGVyLnRyYW5zbGF0ZSA6IC1vZmZzZXQ7XG4gICAgICBsZXQgdFkgPSAwO1xuICAgICAgY29uc3QgdFogPSAtMTAwICogTWF0aC5hYnMocHJvZ3Jlc3MpO1xuICAgICAgbGV0IHNjYWxlID0gMTtcbiAgICAgIGxldCByb3RhdGUgPSAtcGFyYW1zLnBlclNsaWRlUm90YXRlICogcHJvZ3Jlc3M7XG4gICAgICBsZXQgdFhBZGQgPSBwYXJhbXMucGVyU2xpZGVPZmZzZXQgLSBNYXRoLmFicyhwcm9ncmVzcykgKiAwLjc1O1xuICAgICAgY29uc3Qgc2xpZGVJbmRleCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gc3dpcGVyLnZpcnR1YWwuZnJvbSArIGkgOiBpO1xuICAgICAgY29uc3QgaXNTd2lwZVRvTmV4dCA9IChzbGlkZUluZGV4ID09PSBhY3RpdmVJbmRleCB8fCBzbGlkZUluZGV4ID09PSBhY3RpdmVJbmRleCAtIDEpICYmIHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEgJiYgKGlzVG91Y2hlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpICYmIGN1cnJlbnRUcmFuc2xhdGUgPCBzdGFydFRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IGlzU3dpcGVUb1ByZXYgPSAoc2xpZGVJbmRleCA9PT0gYWN0aXZlSW5kZXggfHwgc2xpZGVJbmRleCA9PT0gYWN0aXZlSW5kZXggKyAxKSAmJiBwcm9ncmVzcyA8IDAgJiYgcHJvZ3Jlc3MgPiAtMSAmJiAoaXNUb3VjaGVkIHx8IHN3aXBlci5wYXJhbXMuY3NzTW9kZSkgJiYgY3VycmVudFRyYW5zbGF0ZSA+IHN0YXJ0VHJhbnNsYXRlO1xuICAgICAgaWYgKGlzU3dpcGVUb05leHQgfHwgaXNTd2lwZVRvUHJldikge1xuICAgICAgICBjb25zdCBzdWJQcm9ncmVzcyA9ICgxIC0gTWF0aC5hYnMoKE1hdGguYWJzKHByb2dyZXNzKSAtIDAuNSkgLyAwLjUpKSAqKiAwLjU7XG4gICAgICAgIHJvdGF0ZSArPSAtMjggKiBwcm9ncmVzcyAqIHN1YlByb2dyZXNzO1xuICAgICAgICBzY2FsZSArPSAtMC41ICogc3ViUHJvZ3Jlc3M7XG4gICAgICAgIHRYQWRkICs9IDk2ICogc3ViUHJvZ3Jlc3M7XG4gICAgICAgIHRZID0gYCR7KHBhcmFtcy5yb3RhdGUgfHwgc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLTI1IDogMCkgKiBzdWJQcm9ncmVzcyAqIE1hdGguYWJzKHByb2dyZXNzKX0lYDtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9ncmVzcyA8IDApIHtcbiAgICAgICAgLy8gbmV4dFxuICAgICAgICB0WCA9IGBjYWxjKCR7dFh9cHggJHtydGwgPyAnLScgOiAnKyd9ICgke3RYQWRkICogTWF0aC5hYnMocHJvZ3Jlc3MpfSUpKWA7XG4gICAgICB9IGVsc2UgaWYgKHByb2dyZXNzID4gMCkge1xuICAgICAgICAvLyBwcmV2XG4gICAgICAgIHRYID0gYGNhbGMoJHt0WH1weCAke3J0bCA/ICctJyA6ICcrJ30gKC0ke3RYQWRkICogTWF0aC5hYnMocHJvZ3Jlc3MpfSUpKWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0WCA9IGAke3RYfXB4YDtcbiAgICAgIH1cbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIGNvbnN0IHByZXZZID0gdFk7XG4gICAgICAgIHRZID0gdFg7XG4gICAgICAgIHRYID0gcHJldlk7XG4gICAgICB9XG4gICAgICBjb25zdCBzY2FsZVN0cmluZyA9IHByb2dyZXNzIDwgMCA/IGAkezEgKyAoMSAtIHNjYWxlKSAqIHByb2dyZXNzfWAgOiBgJHsxIC0gKDEgLSBzY2FsZSkgKiBwcm9ncmVzc31gO1xuXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYFxuICAgICAgICB0cmFuc2xhdGUzZCgke3RYfSwgJHt0WX0sICR7dFp9cHgpXG4gICAgICAgIHJvdGF0ZVooJHtwYXJhbXMucm90YXRlID8gcnRsID8gLXJvdGF0ZSA6IHJvdGF0ZSA6IDB9ZGVnKVxuICAgICAgICBzY2FsZSgke3NjYWxlU3RyaW5nfSlcbiAgICAgIGA7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICAgIGlmIChwYXJhbXMuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgIGxldCBzaGFkb3dFbCA9IHNsaWRlRWwucXVlcnlTZWxlY3RvcignLnN3aXBlci1zbGlkZS1zaGFkb3cnKTtcbiAgICAgICAgaWYgKCFzaGFkb3dFbCkge1xuICAgICAgICAgIHNoYWRvd0VsID0gY3JlYXRlU2hhZG93KCdjYXJkcycsIHNsaWRlRWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaGFkb3dFbCkgc2hhZG93RWwuc3R5bGUub3BhY2l0eSA9IE1hdGgubWluKE1hdGgubWF4KChNYXRoLmFicyhwcm9ncmVzcykgLSAwLjUpIC8gMC41LCAwKSwgMSk7XG4gICAgICB9XG4gICAgICBzbGlkZUVsLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKHNsaWRlUHJvZ3Jlc3MpKSArIHNsaWRlcy5sZW5ndGg7XG4gICAgICBjb25zdCB0YXJnZXRFbCA9IGVmZmVjdFRhcmdldChwYXJhbXMsIHNsaWRlRWwpO1xuICAgICAgdGFyZ2V0RWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2V0VHJhbnNpdGlvbiA9IGR1cmF0aW9uID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm1FbGVtZW50cyA9IHN3aXBlci5zbGlkZXMubWFwKHNsaWRlRWwgPT4gZ2V0U2xpZGVUcmFuc2Zvcm1FbChzbGlkZUVsKSk7XG4gICAgdHJhbnNmb3JtRWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XG4gICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlLXNoYWRvdycpLmZvckVhY2goc2hhZG93RWwgPT4ge1xuICAgICAgICBzaGFkb3dFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBlZmZlY3RWaXJ0dWFsVHJhbnNpdGlvbkVuZCh7XG4gICAgICBzd2lwZXIsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIHRyYW5zZm9ybUVsZW1lbnRzXG4gICAgfSk7XG4gIH07XG4gIGVmZmVjdEluaXQoe1xuICAgIGVmZmVjdDogJ2NhcmRzJyxcbiAgICBzd2lwZXIsXG4gICAgb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zaXRpb24sXG4gICAgcGVyc3BlY3RpdmU6ICgpID0+IHRydWUsXG4gICAgb3ZlcndyaXRlUGFyYW1zOiAoKSA9PiAoe1xuICAgICAgX2xvb3BTd2FwUmVzZXQ6IGZhbHNlLFxuICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiBzd2lwZXIucGFyYW1zLmNhcmRzRWZmZWN0LnJvdGF0ZSA/IDMgOiAyLFxuICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICB2aXJ0dWFsVHJhbnNsYXRlOiAhc3dpcGVyLnBhcmFtcy5jc3NNb2RlXG4gICAgfSlcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEVmZmVjdENhcmRzIGFzIGRlZmF1bHQgfTtcbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBWaXJ0dWFsfSBmcm9tICcuL3ZpcnR1YWwubWpzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBLZXlib2FyZH0gZnJvbSAnLi9rZXlib2FyZC5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE1vdXNld2hlZWx9IGZyb20gJy4vbW91c2V3aGVlbC5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE5hdmlnYXRpb259IGZyb20gJy4vbmF2aWdhdGlvbi5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFBhZ2luYXRpb259IGZyb20gJy4vcGFnaW5hdGlvbi5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFNjcm9sbGJhcn0gZnJvbSAnLi9zY3JvbGxiYXIubWpzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQYXJhbGxheH0gZnJvbSAnLi9wYXJhbGxheC5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFpvb219IGZyb20gJy4vem9vbS5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIENvbnRyb2xsZXJ9IGZyb20gJy4vY29udHJvbGxlci5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEExMXl9IGZyb20gJy4vYTExeS5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEhpc3Rvcnl9IGZyb20gJy4vaGlzdG9yeS5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEhhc2hOYXZpZ2F0aW9ufSBmcm9tICcuL2hhc2gtbmF2aWdhdGlvbi5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEF1dG9wbGF5fSBmcm9tICcuL2F1dG9wbGF5Lm1qcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgVGh1bWJzfSBmcm9tICcuL3RodW1icy5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEZyZWVNb2RlfSBmcm9tICcuL2ZyZWUtbW9kZS5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEdyaWR9IGZyb20gJy4vZ3JpZC5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE1hbmlwdWxhdGlvbn0gZnJvbSAnLi9tYW5pcHVsYXRpb24ubWpzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBFZmZlY3RGYWRlfSBmcm9tICcuL2VmZmVjdC1mYWRlLm1qcyc7XG5leHBvcnQge2RlZmF1bHQgYXMgRWZmZWN0Q3ViZX0gZnJvbSAnLi9lZmZlY3QtY3ViZS5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEVmZmVjdEZsaXB9IGZyb20gJy4vZWZmZWN0LWZsaXAubWpzJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBFZmZlY3RDb3ZlcmZsb3d9IGZyb20gJy4vZWZmZWN0LWNvdmVyZmxvdy5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEVmZmVjdENyZWF0aXZlfSBmcm9tICcuL2VmZmVjdC1jcmVhdGl2ZS5tanMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEVmZmVjdENhcmRzfSBmcm9tICcuL2VmZmVjdC1jYXJkcy5tanMnOyIsImltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IHsgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFydG5lcnNTd2lwZXIoKSB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnNfX3N3aXBlcicpO1xyXG4gIGlmICghZWwpIHJldHVybjtcclxuXHJcbiAgbmV3IFN3aXBlcihlbCwge1xyXG4gICAgbW9kdWxlczogW0F1dG9wbGF5XSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgc3BlZWQ6IDUwMDAsXHJcbiAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgY2VudGVySW5zdWZmaWNpZW50U2xpZGVzOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHtcclxuICAgICAgZGVsYXk6IDAsXHJcbiAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgcGF1c2VPbk1vdXNlRW50ZXI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgIGdyYWJDdXJzb3I6IGZhbHNlLFxyXG4gIH0pO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZhcSgpIHtcclxuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXFfX2l0ZW0nKTtcclxuICBpZiAoIWl0ZW1zLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgY29uc3QgYnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZmFxX19xdWVzdGlvbicpO1xyXG5cclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgaXNPcGVuID0gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhcV9faXRlbS0tb3BlbicpO1xyXG5cclxuICAgICAgLy8g0JfQsNC60YDRi9Cy0LDQtdC8INCy0YHQtSDQsiDRgtC+0Lkg0LbQtSDQutC+0LvQvtC90LrQtVxyXG4gICAgICBjb25zdCBjb2wgPSBpdGVtLmNsb3Nlc3QoJy5mYXFfX2NvbCcpO1xyXG4gICAgICBjb2wucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9faXRlbS0tb3BlbicpLmZvckVhY2gob3Blbkl0ZW0gPT4ge1xyXG4gICAgICAgIG9wZW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcV9faXRlbS0tb3BlbicpO1xyXG4gICAgICAgIG9wZW5JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5mYXFfX3F1ZXN0aW9uJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g0J7RgtC60YDRi9Cy0LDQtdC8INGC0LXQutGD0YnQuNC5INC10YHQu9C4INCx0YvQuyDQt9Cw0LrRgNGL0YJcclxuICAgICAgaWYgKCFpc09wZW4pIHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2ZhcV9faXRlbS0tb3BlbicpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufSIsImltcG9ydCB7IGhpZGVQcmVsb2FkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJlbG9hZGVyJztcbmltcG9ydCB7IGZ1bmN0aW9ucyB9IGZyb20gJy4vY29tcG9uZW50cy9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgbG9hZGVkIH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlZCc7XG5cbmltcG9ydCB7IHBhcnRuZXJzU3dpcGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3N3aXBlcic7XG5pbXBvcnQgeyBmYXEgfSBmcm9tICcuL2NvbXBvbmVudHMvZmFxJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGluaXQoKTtcbn0pO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBoaWRlUHJlbG9hZGVyKCk7XG4gIGxvYWRlZCgpO1xuICBmYXEoKTtcbiAgcGFydG5lcnNTd2lwZXIoKTtcbn1cbiJdLCJuYW1lcyI6WyJoaWRlUHJlbG9hZGVyIiwicHJlbG9hZGVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImZvckVhY2giLCJwcmVsb2FkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJfZG9jdW1lbnQiLCJ1bmxvY2siLCJsb2NhdGlvbiIsImhhc2giLCJoc2giLCJyZXBsYWNlIiwicXVlcnlTZWxlY3RvciIsInBvcHVwX29wZW4iLCJfZ290byIsInRoZW1lVG9nZ2xlIiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsIlRIRU1FX0tFWSIsIkRBUksiLCJzYXZlZFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEF0dHJpYnV0ZSIsImlzRGFyayIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEl0ZW0iLCJsb2FkZWQiLCJhbmltSXRlbXMiLCJhbmltT25TY3JvbGwiLCJpbmRleCIsImFuaW1JdGVtIiwiYW5pbUl0ZW1IZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJhbmltSXRlbU9mZnNldCIsIm9mZnNldCIsInRvcCIsImFuaW1JdGVtUG9pbnQiLCJpbm5lckhlaWdodCIsInBhZ2VZT2Zmc2V0IiwiY29udGFpbnMiLCJlbCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJzY3JvbGxUb3AiLCJsZWZ0IiwiU3dpcGVyIiwiQXV0b3BsYXkiLCJwYXJ0bmVyc1N3aXBlciIsIm1vZHVsZXMiLCJsb29wIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInNwZWVkIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsImNlbnRlckluc3VmZmljaWVudFNsaWRlcyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInBhdXNlT25Nb3VzZUVudGVyIiwiYWxsb3dUb3VjaE1vdmUiLCJncmFiQ3Vyc29yIiwiZmFxIiwiaXRlbXMiLCJpdGVtIiwiYnRuIiwiaXNPcGVuIiwiY29sIiwiY2xvc2VzdCIsIm9wZW5JdGVtIiwiZnVuY3Rpb25zIiwiaW5pdCJdLCJzb3VyY2VSb290IjoiIn0=