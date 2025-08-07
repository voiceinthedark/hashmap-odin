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

  /**
   * @method to return the hash key
   * @param {string} key 
   * */
  hash(key){
    let hashCode = 0
    const primeNumber = 31;
    for(let i = 0; i < key.length; i++){
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
      hashCode %= this.#capacity;
    }
    return hashCode;
  }

  /**
   * @method to set a value to a key
   * @param {string} key 
   * @param {any} value 
   * */
  set(key, value){
    // TODO: handle growth
    //
    // Implement the set method
  }

  /**
   * @method to get the value from the key, null if not found
   * @param {string} key
   * @returns {any}
   * */
  get(key){
    // TODO: Implement get method

  }

  /**
   * @method to check whether a key exists in the hashmap
   * @param {string} key 
   * @returns {boolean}
   * */
  has(key){

    // TODO: Implement has method
    return false
  }

  /**
   * @method to remove a key from the hashmap returns true on success
   * @param {string} key 
   * @returns {boolean}
   * */
  remove(key){
    // TODO: Implement the remove method

    return false
  }

  /**
   * @method to return the length of the hashmap
   * @returns {number}
   * */
  length(){
    // TODO: Implement the length method
    return 0
  }

  /**
   * @method to clear the hashmap of every element
   * */
  clear(){
    // TODO: Implement the clear method
  }

  /**
   * @method to return the keys of the hashmap as an array
   * @returns {Array<string>}
   * */
  keys(){
    // TODO: Implement the keys method
    return new Array();
  }

  /**
   * @method to return the values of the hashmap as an a array
   * @returns {Array}
   * */
  values(){
    // TODO: Implement the values method
    return [];
  }

  /**
   * @method to return the entries of hashmap
   * @returns {Array}
   * */
  entries(){
    // TODO: implement the entries method
    return [];
  }
}

/** @module Hashmap */
export default Hashmap;
