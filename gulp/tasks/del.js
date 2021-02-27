const gulp = require('gulp'),
      del = require('del');

module.exports = function clean() {
    return del('dist')
}