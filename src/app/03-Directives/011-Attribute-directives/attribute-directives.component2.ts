import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { Model } from "../../repository.model";
import { Product } from "../../product.model";
import { ProductFormGroup } from "./reactive-form.model";

@Component({
  selector: "app-attribute-directives2",
  templateUrl: "./attribute-directives.component2.html",
  // styleUrls: ["./attribute-directives.component2.css"]
})

export class AttributeDirectivesComponent2 implements OnInit {

  model: Model = new Model();
  newProduct: Product = new Product();
  newProductForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.newProductForm = this.formBuilder.group({
        // Validate that the nameProduct field only contains letters or spaces
        nameProduct: ["", [
          Validators.required,
          Validators.pattern("[a-zA-Z ]*"), 
          Validators.minLength(3),
          Validators.maxLength(10)]
        ],
        categoryProduct: ["", [
          Validators.required,
          Validators.pattern("[a-zA-Z ]*"), 
          Validators.minLength(3)]
        ],
        priceProduct: ["", [
          Validators.required,
          Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
        ]
    });
  }

  get name() { return this.newProductForm.get('nameProduct'); }
  get category() { return this.newProductForm.get('categoryProduct'); }

  isControlInvalid(controlName: string): boolean {
    let control = this.newProductForm.controls[controlName];
    let result = control.invalid && (control.dirty || control.touched);
    return result;
  }

  // getFormValidationMessages(form: NgForm): string[] {
  //   let messages: string[] = [];
  //   Object.keys(form.controls).forEach(k => {
  //     this.getValidationMessages(form.controls[k], k)
  //     .forEach(m => messages.push(m));
  //   });
  //   return messages;
  //   }

  getValidationMessages(controlName: string): string[] {
    
    let messages: string[] = [];
    let control = this.newProductForm.controls[controlName];
    
    if (control.errors) {
        for (let errorName in control.errors) {
            switch (errorName) {
                case "required":
                    messages.push(`You must enter a characters`);
                    break;
                case "minlength":
                    messages.push(`A field must be at least
                    ${control.errors['minlength'].requiredLength} characters`);
                    break;
                case "maxlength":
                    messages.push(`A field must be no more than
                    ${control.errors['maxlength'].requiredLength} characters`);
                    break;
                case "pattern":
                    messages.push(`The field contains illegal characters`);
                    break;
                }
        }
    }
    return messages;
}

  get pForm() { return this.newProductForm.controls; } 

  onSubmit(): void {
    const controls = this.newProductForm.controls;
  
    if (this.newProductForm.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    
    // this.newProduct.id
    this.newProduct.name = this.newProductForm.controls['nameProduct'].value;
    this.newProduct.category = this.newProductForm.controls['categoryProduct'].value;
    this.newProduct.price = this.newProductForm.controls['priceProduct'].value;

    this.addProduct(this.newProduct);

    this.newProduct = new Product();
    this.newProductForm.reset();

    // console.log(this.newProductForm.value);
    // Object.keys(controls).forEach(controlName => console.log(controls[controlName].value));
  }

  // this.newProductForm.get("myControl").disable();
  
  getProductPrice(index: number): number {
    return Math.floor(this.model.getProduct(index).price);
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    this.model.saveProduct(p);
    console.log("New Product: " + this.jsonProduct);
  }

}

