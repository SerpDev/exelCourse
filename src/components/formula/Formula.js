import {ExelComponent} from "@/ExelComponent";

export class Formula extends ExelComponent{
  static className = 'excel__formula';
  constructor($root){
    super($root, {
      name: 'Formula',
      listeners : ['input', 'click']
    });

  }
  toHTML() {
    return `<div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>`
  }

  onInput(e) {
    console.log(e.target.textContent.trim());
    console.log(this.$root);
  }
  onClick(){}
}
