import { describe, it, afterEach, beforeEach, vi, expect } from 'vitest';
import { isEven, isOdd, Calculator, Cat } from '../../src/main';

describe("isEven", () => {
  it("should return true for even numbers", () => {
    expect(isEven(4)).to.be.true;
    expect(isEven(0)).to.be.true;
  });

  it("should return false for odd numbers", () => {
    expect(isEven(3)).to.be.false;
    expect(isEven(-5)).to.be.false;
  });
});

describe("isOdd", () => {
    it("should return true for odd numbers", () => {
      expect(isOdd(3)).to.be.true;
      expect(isOdd(1)).to.be.true;
    });
  
    it("should return false for odd numbers", () => {
      expect(isOdd(2)).to.be.false;
      expect(isOdd(6)).to.be.false;
    });
  });

  describe("Calculator", () => {
    const calculator = new Calculator();
  
    it("should add two numbers", () => {
      expect(calculator.add(1, 2)).to.equal(3);
    });
  
    it("should subtract two numbers", () => {
      expect(calculator.subtract(5, 3)).to.equal(2);
    });
  
    it("should multiply two numbers", () => {
      expect(calculator.multiply(4, 3)).to.equal(12);
    });
  
    it("should divide two numbers", () => {
      expect(calculator.divide(6, 2)).to.equal(3);
    });
  
    it("should throw an error when dividing by zero", () => {
      expect(() => calculator.divide(4, 0)).to.throw("Cannot divide by zero");
    });

  });
  
//   describe("Cat", () => {
//     const cat = new Cat("some cat")
  
//     it("should add two numbers", () => {
//       expect(calculator.add(1, 2)).to.equal(3);
//     });
  
//     it("should subtract two numbers", () => {
//       expect(calculator.subtract(5, 3)).to.equal(2);
//     });
  
//     it("should multiply two numbers", () => {
//       expect(calculator.multiply(4, 3)).to.equal(12);
//     });
  
//     it("should divide two numbers", () => {
//       expect(calculator.divide(6, 2)).to.equal(3);
//     });
  
//     it("should throw an error when dividing by zero", () => {
//       expect(() => calculator.divide(4, 0)).to.throw("Cannot divide by zero");
//     });
    
//   });