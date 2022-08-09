import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/Services/validation.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private validationService: ValidationService) { }

  userForm: FormGroup;


  ngOnInit(): void {

    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dob: new FormControl('', [Validators.required, this.validationService.validateDob]),
      gender: new FormControl('male', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }




  onSubmit() {
    console.log(this.userForm);
    console.log(this.userForm.value);

    alert("Submited!");
    this.userForm.reset();
  }
}

