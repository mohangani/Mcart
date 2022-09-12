import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { urlConstants } from 'src/app/constants';
import { HttpHelperService } from 'src/app/Services/http-helper.service';
import { ValidationService } from 'src/app/Services/validation.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private validationService: ValidationService, private httphelper: HttpHelperService) { }

  userForm: FormGroup;


  ngOnInit(): void { this.setDefaultValue(); }

  private setDefaultValue() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dob: new FormControl(new Date().getDate(), [Validators.required, this.validationService.validateDob]),
      gender: new FormControl(1, Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required]),//,Validators.maxLength(13), Validators.pattern("[0-9]")
      address: new FormGroup({
        street: new FormControl(''),
        state: new FormControl(''),
        city: new FormControl(''),
        pincode: new FormControl('', [Validators.minLength(6)]),
        country: new FormControl(''),
      }),
      roleId: new FormControl(2, Validators.required),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.userForm);
    console.log(this.userForm.value);
    if (!this.userForm.valid) return;


    this.httphelper.Post(urlConstants.AddUser, this.userForm.value).subscribe(x => {
      this.setDefaultValue();
    });

  }
}

