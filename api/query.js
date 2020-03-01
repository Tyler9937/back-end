const db = require('../data/db.config');

module.exports = {
  getStrains(query) {
    const data = db('strains');
    if (query.sortby) {
      data.orderBy(query.sortby, query.sortdir);
    }
    if (query.limit && query.limit >= 1) {
      data.limit(query.limit);
    }
    return data;
  }
};
