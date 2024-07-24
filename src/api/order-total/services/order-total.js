'use strict';

/**
 * order-total service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-total.order-total');
