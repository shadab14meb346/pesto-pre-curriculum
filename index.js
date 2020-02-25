const colors = require("colors");
const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass'.green);
      return true
    } else {
      console.log('fail'.red);
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function divide(a, b) {
  return a / b
}

function multiply(a, b) {
  return a * b
}
describe('add', () => {
  it('adds two numbers', () => {
    const result = add(1, 2)
    expect(result).toBe(3)
  })
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    const result = subtract(1, 2)
    expect(result).toBe(-1)
  })
});

describe('divide', () => {
  it('divides two numbers', () => {
    const result = divide(1, 2)
    expect(result).toBe(0.5)
  })
});


describe('multiply', () => {
  it('multiplies two numbers', () => {
    const result = multiply(3, 2)
    expect(result).toBe(6)
  })
});