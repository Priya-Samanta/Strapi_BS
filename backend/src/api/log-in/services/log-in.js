'use strict';

/**
 * log-in service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::log-in.log-in');
