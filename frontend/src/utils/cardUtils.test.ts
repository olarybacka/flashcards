import { formatCards } from './cardUtils';

const multiline = `a: b
c: d`


describe('formatCards', () => {
  describe('basic use', () => {
    it('check example with ":"', () => {
      const value = formatCards('a: b');
      expect(value).toEqual([{"sideA": "a", "sideB": " b", "tags": []}]);
    });
    it('check example with multiple ":"', () => {
      const value = formatCards(multiline);
      console.log('value: ', value);
      expect(value).toEqual([{"sideA": "a", "sideB": " b", "tags": []}, {"sideA": "c", "sideB": " d", "tags": []}]);
    });
  });
});
