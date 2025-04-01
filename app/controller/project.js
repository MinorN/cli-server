'use strict';

const { Controller } = require('egg');

class ProjectController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    ctx.body = 'this is project';
  }
}

module.exports = ProjectController;
