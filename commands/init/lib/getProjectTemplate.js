const request = require('@rookie-cli-dev-test/request');

module.exports = function() {
  return request({
    url: '/project/template',
  });
};
