import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from './Validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formStatus: string = '';
  formdata: any = {};

  reactiveForm: FormGroup;

  ngOnInit() {
    // creating form group mapping formGroupName, formControlName and formArrayName in html
    // adding built in and custom validators
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(
        null,
        Validators.required,
        CustomValidators.checkUserName
      ),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('Bangladesh', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([new FormControl(null, Validators.required)]),
      experience: new FormArray([]),
    });

    //valuechange on value change
    // this.reactiveForm.get('firstname').valueChanges.subscribe((value) => {
    //   console.log(value);
    // })

    // this.reactiveForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // })

    // this.reactiveForm.get('username').statusChanges.subscribe((status) => {
    //   console.log(status);
    // })

    //statuschange on value change
    this.reactiveForm.statusChanges.subscribe((status) => {
      console.log(status);
      this.formStatus = status;
    });
  }

  // On submit button clicked
  OnFormSubmitted() {
    console.log(this.reactiveForm.value);
    // getting form value
    this.formdata = this.reactiveForm.value;

    //Resetting form and setting default value
    this.reactiveForm.reset({
      firstname: null,
      lastname: null,
      email: null,
      username: null,
      dob: null,
      gender: 'male',
      address: {
        street: null,
        country: 'Bangladesh',
        city: null,
        region: null,
        postal: null,
      },
      skills: [null],
      experience: [],
    });
  }

  // Add dynamic form control in form array
  AddSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  // Delete dynamic form control in form array
  DeleteSkill(index: number) {
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }

  // Add dynamic form group in form array
  AddExperience() {
    const frmgroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });

    (<FormArray>this.reactiveForm.get('experience')).push(frmgroup);
  }

  // Delete dynamic form group in form array
  DeleteExperience(index: number) {
    const frmArray = <FormArray>this.reactiveForm.get('experience');
    frmArray.removeAt(index);
  }

  // using other fields to generate a string and set in formControl
  GenerateUsername() {
    let username = '';
    const fName: string = this.reactiveForm.get('firstname').value;
    const lName: string = this.reactiveForm.get('lastname').value;
    const dob: string = this.reactiveForm.get('dob').value;

    if (fName.length >= 3) {
      username += fName.slice(0, 3);
    } else {
      username += fName;
    }

    if (lName.length >= 3) {
      username += lName.slice(0, 3);
    } else {
      username += lName;
    }

    let datetime = new Date(dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    //console.log(username);

    // Set value
    // this.reactiveForm.setValue({
    //   firstname: this.reactiveForm.get('firstname').value,
    //   lastname: this.reactiveForm.get('lastname').value,
    //   email: this.reactiveForm.get('email').value,
    //   username: username,
    //   dob: this.reactiveForm.get('dob').value,
    //   gender: this.reactiveForm.get('gender').value,
    //   address: {
    //     street: this.reactiveForm.get('address.street').value,
    //     country: this.reactiveForm.get('address.country').value,
    //     city: this.reactiveForm.get('address.city').value,
    //     region: this.reactiveForm.get('address.region').value,
    //     postal: this.reactiveForm.get('address.postal').value
    //   },
    //   skills: this.reactiveForm.get('skills').value,
    //   experience: this.reactiveForm.get('experience').value
    // })

    //this.reactiveForm.get('username').setValue(username);

    // Pathch value
    this.reactiveForm.patchValue({
      username: username,
      address: {
        city: 'Dhaka',
      },
    });
  }
}
