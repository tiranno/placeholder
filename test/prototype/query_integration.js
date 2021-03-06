
var Placeholder = require('../../Placeholder');

module.exports.query = function(test, util) {

  // load data
  var ph = new Placeholder();
  ph.load();

  var assert = runner.bind(null, test, ph);

  assert([['kelburn', 'wellington', 'new zealand']], [85772991]);
  assert([['north sydney']], [85771181, 85784821, 101931469, 102048877, 404225393]);
  assert([['sydney', 'new south wales', 'australia']], [101932003, 102049151, 404226357]);
  assert([['ケープタウン', '南アフリカ']], [101928027]);
};

// convenience function for writing quick 'n easy test cases
function runner( test, ph, actual, expected ){
  test( actual, function(t) {
    ph.query( actual[0].join(' '), ( err, ids, mask, group ) => {
      t.deepEqual( ids, expected );
      t.end();
    });
  });
}
