'use strict';

const { Controller } = require('egg');
const mongo = require('../utils/mongo.js');

class ProjectController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    const data = await mongo().query('project');
    ctx.body = data;
  }
}

module.exports = ProjectController;
