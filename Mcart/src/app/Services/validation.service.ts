import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public validateDob(control: AbstractControl): ValidationErrors|null {
    if (new Date(control.value) > new Date())
      return {error:"DOB should be less than or eual to current date."};
    return null;
  }



}
