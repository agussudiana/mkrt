import { isValidNumber } from "../numberValidation";


describe('Number Validation test', () => {
    
   test('Input valid number',()=>{

            expect(isValidNumber(Number("10"))).toBe(true)

   })

   test('Input invalid number',()=>{

            expect(isValidNumber(Number("01"))).toBe(true)

   })


    test('Input number with string',()=>{

          expect(isValidNumber(Number("10a"))).toBe(false)
    
    })

    test('Input number with special char',()=>{

          expect(isValidNumber(Number("10&"))).toBe(false)

    })

  
  
  });