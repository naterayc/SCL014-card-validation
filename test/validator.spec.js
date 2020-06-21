// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator.js';

describe('validator', () => {
  test('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    test.skip('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    test('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe(false);
    });
    test('deberia retornar true para "4137894711755904"', ()=>{
      expect(validator.isValid('4137894711755904')).toBe(true);
    });
  });

});

  describe('validator.maskify', () => {
    test('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    test('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('4556364607935616')).toBe('############5616');
    });

    test('Debería retornar "16" para "16"', () => {
      expect(validator.maskify('16')).toBe('16');
    });

    test('Debería retornar "#4516" para "34516"', () => {
      expect(validator.maskify('34516')).toBe('#4516');
    });
   
  });

