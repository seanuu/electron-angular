/**
 * Created by aman on 4/19/2018.
 */
const path = require('path');
const paths = [
    "../../node_modules/query/dist/jquery.js"
];

exports.script = function () {
  return paths.map((value) => {
      path.resolve(__dirname, value);
  })
};


