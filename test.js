const assert = require('assert');
Object.freeze(assert);
const check = require('./solution/index.js');

const config = [['(', ')'], ['[', ']'], ['{', '}']];

it('should check if brackets sequence is correct 1', () => {
  assert.equal(check('()', config), true);
});

it('should check if brackets sequence is correct 2', () => {
  assert.equal(check('((()))()', config), true);
});

it('should check if brackets sequence is not correct 3', () => {
  assert.equal(check('())(', config), false);
});

it('should check if brackets sequence is correct 4', () => {
  assert.equal(check('([{}])', config), true);
});

it('should check if brackets sequence is not correct 5', () => {
  assert.equal(check('[(])', config), false);
});

it('should check if brackets sequence is correct 6', () => {
  assert.equal(check('[]()', config), true);
});

it('should check if brackets sequence is not correct 7', () => {
  assert.equal(check('[]()(', config), false);
});

it('should check if brackets sequence is not correct 8', () => {
  assert.equal(check('[]][[]', config), false);
});

it('should check if brackets sequence is not correct 9', () => {
  assert.equal(check('[]][[]', config), false);
});

it('should check if brackets sequence is not correct 10', () => {
  assert.equal(check('([[[[(({{{}}}(([](((((((())))))))[[{{{{}}}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config), false);
});

it('should check if brackets sequence is correct 11', () => {
  assert.equal(check('([[[[(({{{}}}(([](((((((())))))))[[{{{{}}}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())', config), true);
});

it('should check if brackets sequence is correct 12', () => {
  assert.equal(check('([[[[(({{{}}}(([](((((((())))))))[[{{{{}}}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))))))[[{{{{}}}}[[[[]]]]{{{{{}}}}}]]))))]]]])))', config), true);
});

it('should check if brackets sequence is correct 13', () => {
    assert.equal(check('([])', config), true);
});

it('should check if brackets sequence is not correct 13', () => {
    assert.equal(check('{[(]}', config), false);
});