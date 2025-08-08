import Hashmap from './hashmap.js';

beforeAll(() => {
  const hashmap = new Hashmap();
})

describe('Hashmap tests', () => {
  describe('Constructor setup', () => {
    test('capacity', () => {
      const hashmap = new Hashmap();
      expect(hashmap.capacity).toBe(16);
    })
  });
  describe('set methods', () => {
    test('set an item and increase the size of the hashmap', () => {
      const hashmap = new Hashmap()
      hashmap.set('jim', 22);
      expect(hashmap.size).toBe(1);
    });
    test('setting more than 1 item', () =>{
      const hashmap = new Hashmap()
      hashmap.set('jim', 44)
      hashmap.set('kim', 2)
      hashmap.set('sony', 'camera')
      expect(hashmap.size).toBe(3);
    })
    test('setting the same key twice', () => {
      const hashmap = new Hashmap()
      hashmap.set('jum', 33)
      hashmap.set('kim', 33)
      hashmap.set('kim', 66)
      expect(hashmap.size).toBe(2)
    });
  });

  describe('get method', () => {
    const hashmap = new Hashmap()
    hashmap.set('kim', 45)
    hashmap.set('jum', 37)
    hashmap.set('tom', 'library')
    hashmap.set('fat', 'tren')
    hashmap.set('Mik', 39)
    test('get the correct value by key', () => {
      expect(hashmap.get('tom')).toBe('library')
      expect(hashmap.get('jum')).toBe(37)
      expect(hashmap.get('fat')).toBe('tren')
    });

    test('a non existant key should return null', () => {
      expect(hashmap.get('god')).toBeNull()
    });
  });

  describe('has method', () => {
    const hashmap = new Hashmap()
    hashmap.set('kim', 45)
    hashmap.set('jum', 37)
    hashmap.set('tom', 'library')
    hashmap.set('fat', 'tren')
    hashmap.set('Mik', 39)
    test('return true when key exists in the hashmap', () => {
      expect(hashmap.has('kim')).toBeTruthy()
      expect(hashmap.has('fat')).toBeTruthy()
    });
    test('return false when key does not exist in the hashmap', () => {
      expect(hashmap.has('sam')).toBeFalsy()
      expect(hashmap.has('eee')).toBeFalsy()
    });
    test('return false on empty input', () => {
      expect(hashmap.has('')).toBeFalsy()
    });
  });
});
