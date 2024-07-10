'use strict';

/**
 * brain-spark service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::brain-spark.brain-spark');
