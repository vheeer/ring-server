const Base = require('./base.js');
const Rest = require('./rest.js');

const namespace = 'role_permission';

const actions = Rest(namespace);

class Controller extends Base {
  async indexAction() {
    const result = await this.model(namespace).limit(100).select();
    return this.success(result);
  }
}
Object.assign(Controller.prototype, actions);
module.exports = Controller;
