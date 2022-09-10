import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public validateDob(control: AbstractControl){
    if (new Date(control.value) > new Date())
      return {
        invalidDob:true,
        error:"DOB should be less than or eual to current date."};
    return null;
  }



}
