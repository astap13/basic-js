const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  constructor(){
  }

  calculateDepth(arr) {
    if(Array.isArray(arr)){
      let d = 0;
      for(let elem of arr){
        d = Math.max(d, this.calculateDepth(elem));
      }
      return d + 1; 
    } else {
      return 0
    }  
  }
}

module.exports = {
  DepthCalculator
};
