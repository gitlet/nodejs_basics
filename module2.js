var a = 1;

// module.exports.a = a;
// module.exports.b = 2;

// SHORTHAND FOR ABOVE 'EXPORTS'
// exports.a = a;
// exports.b = 2;

// OR we can override/make the entire 'module exports obj' & make it a fn:
module.exports = function () {
  console.log('module 2!');
};
