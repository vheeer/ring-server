const Base = require('./base.js');
const Rest = require('./rest.js');

const namespace = 'target';

const actions = Rest(namespace);

class Controller extends Base {
  async indexAction() {
    const result = await this.model(namespace).limit(100).select();
    return this.success(result);
  }
  async updatepAction() {
    const { execute } = this.post();
    const thisTime = parseInt(Date.now() / 1000);
    const result = await this.model(namespace).where({ contact: [ 'like', '%' + execute + '%' ] }).update({ custom_id: this.ctx.state.user_id, ring_time: thisTime });
    return this.success(result);
  }
}
Object.assign(Controller.prototype, actions);
module.exports = Controller;
