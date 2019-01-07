import { Component } from "@angular/core";

// **** add Forms
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})

export class AppReactiveFormComponent {

 // add FormGroup
 myFormGroup: FormGroup;

// add FormBuilder
constructor(private fb: FormBuilder) { }

ngOnInit(): void {
  this.initForm();
}

onSubmit(): void {
  const controls = this.myFormGroup.controls;

  if (this.myFormGroup.invalid) {
    Object.keys(controls)
      .forEach(controlName => controls[controlName].markAsTouched());

    return;
  }

  /** TODO: Обработка данных формы */
  console.log(this.myFormGroup.value);
}

isControlInvalid(controlName: string): boolean {

    const control = this.myFormGroup.controls[controlName];
  const result = control.invalid && control.touched;

  return result;
}

private initForm() {
  this.myFormGroup = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.pattern(/[А-я]/)
    ]
    ],
    email: ['', [
      Validators.required, 
      Validators.email
    ]
    ]
  });
}

}
