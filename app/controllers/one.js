import Controller from '@ember/controller';
// import { tracked } from 'tracked-built-ins';
import { A as emberA } from '@ember/array';
import { action } from '@ember/object';

export default class extends Controller {
  items = ['Item 0', 'Item 1', 'Item 2'];

  // @tracked visibility = tracked([]);
  visibility = emberA([]);

  @action
  toggle(item) {
    if (this.visibility.includes(item)) {
      this.hide(item);
    } else {
      this.show(item);
    }
  }

  show(item) {
    this.visibility.addObject(item);
  }

  hide(item) {
    this.visibility.removeObject(item);
  }
}
