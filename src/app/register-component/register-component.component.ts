import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { SheetService } from '../services/sheet.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { MatSnackBar } from '@angular/material/snack-bar';

declare var $: any; // Declare jQuery
@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent {

	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.Canada];
  separateDialCode = true;
  loading: boolean = false;
  form!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private service : SheetService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [null, [Validators.required, this.phoneValidator]],
      timeZone: ['', Validators.required],
      courseName: ['', Validators.required]
    });
  }

  
  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  phoneValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && value.internationalNumber) {
      if (typeof value.isValidNumber === 'function' && !value.isValidNumber()) {
        return { phoneValidation: true };
      }
      return null;
    }
    return { required: true };
  }

  
  
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.snackBar.open('Please enter the correct details.', 'Close', {
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        duration: 3000,
      });
      return;
    }
    const { fullname, email, mobile, timeZone, courseName } = this.form.value;


    const formattedData = {
      fullName: fullname,
      email: email,
      countryCode: mobile.dialCode,  
      mobile: mobile.number, 
      timeZone: timeZone,
      courses: courseName
    };

    this.loading = true;

    this.service.createUser(formattedData).subscribe({
      next: (res) => {
        console.log("res", res);
        this.form.reset();
        this.submitted = false;
        this.loading = false;
        this.snackBar.open(res.message, 'Close', {
          duration: 3000,
        });
        $('#successModal').modal('show');
      },
      error: (error) => {
        console.log("error", error);
        this.loading = false;
        this.snackBar.open(error, 'Close', {
          duration: 3000,
        });
      }
    });
  }

  // simulateSuccessResponse(): void {
  //   this.form.reset();
  //   this.submitted = false;
  //   this.loading = false;
  //   this.snackBar.open('Form submitted successfully!', 'Close', {
  //     duration: 3000,
  //   });
  //   $('#successModal').modal('show'); // Show the modal on success
  // }
  
}
