import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {usernameValidator} from './validators/usernameValidator';
import {ageValidator} from './validators/ageValidator';
import {birthdayValidator} from './validators/birthdayValidator';
import {dateOfLoginValidator} from './validators/dateOfLoginValidator';
import {dateOfNotificationValidator} from './validators/dateOfNotificationValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  userForm: FormGroup;
  placeholders: {};
  submitFlag: boolean;
  constructor(private fb: FormBuilder) {
    this.submitFlag = false;
    this.placeholders = {
      username: 'Enter username (Dmitry Tsiareshchanka)',
      age: 'Enter age (18-65)',
      birthday: 'Enter birthday (2018/10/10)',
      dateOfLogin: 'Enter date of login (10 October 2018)',
      dateOfNotification: 'Enter date of notification (10-Oct-18)'
    };
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.userForm = this.fb.group({
      username: ['', '', usernameValidator],
      age: ['', ageValidator],
      birthday: ['', birthdayValidator],
      dateOfLogin: ['', dateOfLoginValidator],
      dateOfNotification: ['', dateOfNotificationValidator]
    });
  }
  isControlValid(currentControl: string): boolean {
    const control = this.userForm.controls[currentControl];
    return (control.invalid && (control.dirty || control.touched));
  }
  onSubmit() {
    this.submitFlag = true;
  }
}
