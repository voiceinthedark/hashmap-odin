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
});
