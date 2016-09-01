import test from 'tape';
import customSelect from './../';

test('Custom options extend check', assert => {
  document.body.innerHTML = '';
  const select = document.createElement('select');
  document.body.appendChild(select);

  const actual = customSelect('select', { scrollToSelected: false, newOption: 123 })[0].pluginOptions;
  const expected = {
    panelClass: 'custom-select-panel',
    optionClass: 'custom-select-option',
    openerClass: 'custom-select-opener',
    containerClass: 'custom-select-container',
    optgroupClass: 'custom-select-optgroup',
    scrollToSelected: false,
    newOption: 123,
  };

  assert.deepEqual(actual, expected,
    'should return true');
  assert.end();
});
