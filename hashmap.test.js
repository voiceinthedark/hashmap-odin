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
  describe('testing the set methods', () => {
    test('set an item and increase the size of the hashmap', () => {
      const hashmap = new Hashmap()
      hashmap.set('jim', 22);
      expect(hashmap.size).toBe(1);
    });
    test('setting more than 1 item', () => {
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

  describe('testing the get method', () => {
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

  describe('testing the has method', () => {
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

  describe('testing the remove method', () => {

    const hashmap = new Hashmap()
    hashmap.set('kim', 45)
    hashmap.set('jum', 37)
    hashmap.set('tom', 'library')
    hashmap.set('fat', 'tren')
    hashmap.set('Mik', 39)
    test('removing a key that exists should return true', () => {
      expect(hashmap.remove('kim')).toBeTruthy()
      expect(hashmap.size).toBe(4)
    })
    test('removing a key that does not exist should return false', () => {
      expect(hashmap.remove('sss')).toBeFalsy()
      expect(hashmap.size).toBe(4)
    });
    test('removing an empty input', () => {
      expect(hashmap.remove()).toBeFalsy()
    })
  });
  describe('testing the length method', () => {
    const hashmap = new Hashmap()
    hashmap.set('kim', 45)
    hashmap.set('jum', 37)
    hashmap.set('tom', 'library')
    hashmap.set('fat', 'tren')
    hashmap.set('Mik', 39)

    const emptymap = new Hashmap();
    test('a list of 5 keys should return a length of 5', () => {
      expect(hashmap.length()).toBe(5)
    });
    test('An empty hashmap should return 0 length', () => {
      expect(emptymap.length()).toBe(0)
    });
  });
});
