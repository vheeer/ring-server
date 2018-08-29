const Base = require('./base.js');
const Rest = require('./rest.js');

const namespace = 'custom';

const actions = Rest(namespace);

class Controller extends Base {
  async indexAction() {
    const result = await this.model(namespace).limit(100).select();
    return this.success(result);
  }
  async executeAction() {
    const { execute } = this.get();
    const { userName } = this.ctx.state;
    const { custom_id } = await this.model('account').where({ username: userName }).find();
    const result = await this.model(namespace).where({ id: custom_id }).update({ execute });
    return this.success(result);
  }
}
Object.assign(Controller.prototype, actions);
module.exports = Controller;
