
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";  


export function firstLetterUppercase(): ValidatorFn {
       return (control: AbstractControl) : ValidationErrors | null => {
           const value  = <string>control.value;
           if(!value) return null;
           if(value.length === 0) return null;
   
           const firstLetter = value[0];
           if(firstLetter !== firstLetter.toUpperCase()){
               return {
                   firstLetterUppercase : {
                       message: 'The first letter must be uppercase'
                   }
               }
           }
           return null;
       }
   }
  
// export function firstLetterUppercase() : ValidatorFn
// {
// return (control:AbstractControl) => {
//     const value=<string>control.value;
//     if(!value) return;
//     if(value.length===0) return;

//     const firstLetter=value[0];
//     if(firstLetter!==firstLetter.toUpperCase())
//     {
//         return{
//             firstLetter:{
//                 message:"The first letter must be uppercase"
//             }
//         }
//     }
//     return;

// }

// }


// export function firstLetterUppercase(): ValidatorFn {
//     return (control: AbstractControl): {[key: string]: any} | null => {
//       return /^[A-Z]/.test(control.value) ? null : { firstLetterUpperCase: true };
//     };
//   }
