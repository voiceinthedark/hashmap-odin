// @ts-check

/**
 * @class Hashmap
 * @classdesc A hashmap class
 * */
class Hashmap{
  #capacity;
  #load_factor;
  /**
   * @constructor
   * @description hashmap takes a capacity (default 16) and a load_factor (default 0.8)
   * @param {number} [capacity=16] 
   * @param {number} [load_factor=0.8] 
   * */
  constructor(capacity = 16, load_factor = 0.8){
    this.#capacity = capacity
    this.#load_factor = load_factor
  }

  /**
   * @method to return the capacity of the hashmap
   * */
  get capacity(){
    return this.#capacity
  }

  /**
   * @method to return the load factor of the hashmap (percentage to grow the hashmap)
   * */
  get load_factor(){
    return this.#load_factor
  }
}


/** @module Hashmap */
export default Hashmap;
