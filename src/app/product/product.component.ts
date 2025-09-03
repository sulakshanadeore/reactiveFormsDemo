import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
productForm=new FormGroup(
  {
    prodId:new FormControl('',[Validators.required]),
    prodName:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    prodPrice:new FormControl('',[Validators.min(1)]),
    prodQty:new FormControl('',[Validators.min(1),Validators.max(10)])
  }
);

onOrderComplete()
{

  console.log(this.productForm.value.prodId);
  console.log(this.productForm.value.prodName);

  console.log(this.productForm.value.prodPrice);
  console.log(this.productForm.value.prodQty);


}

}
