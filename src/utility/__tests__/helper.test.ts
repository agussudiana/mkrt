import { randomNumberBetween } from "../helper";

describe('Helper Function Test', () => {
    
   
    test('Random Number beetwen 1 and 10', () => {
        const randomNumber = randomNumberBetween(1,10)
        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(10)
    });
    test('Random Number beetwen 1 and 20', () => {
        const randomNumber = randomNumberBetween(1,20)
        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(20)
    });
    test('Random Number beetwen 1 and 30', () => {
        const randomNumber = randomNumberBetween(1,30)
        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(30)
    });
  
  });