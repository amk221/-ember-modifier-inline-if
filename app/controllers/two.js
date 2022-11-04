import Controller from '@ember/controller';
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';

class Item {
  @tracked name;
  @tracked show;

  constructor(name) {
    this.name = name;
  }
}

export default class extends Controller {
  items = [new Item('Item 0'), new Item('Item 1'), new Item('Item 2')];

  @action
  toggle(item) {
    item.show = !item.show;
  }
}
