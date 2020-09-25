import {test} from './'

describe("my test", () => {
  it('fails', () => {
    expect(true).toBe(false);
  })

  it('succeeds', () => {
    expect(true).toBe(true);
  })

  it('imports a function', () => {
    expect(test()).toBe("hello");
  })

})
