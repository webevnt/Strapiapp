'use strict';

/**
 * Book.js controller
 *
 * @description: A set of functions called "actions" for managing `Book`.
 */

module.exports = {

  /**
   * Retrieve book records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.book.search(ctx.query);
    } else {
      return strapi.services.book.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a book record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.book.fetch(ctx.params);
  },

  /**
   * Count book records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.book.count(ctx.query, populate);
  },

  /**
   * Create a/an book record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.book.add(ctx.request.body);
  },

  /**
   * Update a/an book record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.book.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an book record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.book.remove(ctx.params);
  }
};
