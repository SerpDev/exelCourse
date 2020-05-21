import {DOMListener} from "@/DOMListener";

export class ExelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  //Вернет шаблон компонента
  toHTML() {
    return ''
  }

  init() {
    this.initDomListeners();
  }

  destroy() {
    this.removeDomListeners();
  }
}