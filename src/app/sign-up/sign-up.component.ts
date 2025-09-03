import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

userSignup=new FormGroup({
name:new FormControl("",[Validators.required,Validators.minLength(3)]),
emailid:new  FormControl("",[Validators.required,Validators.email]),
age:new FormControl("",[Validators.required,Validators.min(18)])
});

onSubmit()
{

  console.log(this.userSignup.value.name);
  console.log(this.userSignup.value.emailid);
  console.log(this.userSignup.value.age);

}


}
