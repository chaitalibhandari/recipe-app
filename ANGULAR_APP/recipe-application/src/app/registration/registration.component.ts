import { Component, OnInit, Output,EventEmitter, ViewChild ,ElementRef} from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, NgForm } from '@angular/forms';
import { AppValidators } from '../app-validators';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  user:User;
  url:string;
  //@ViewChild('f') userForm: NgForm;
 
  successMessage:boolean=false;
 
  constructor(private userService:UsersService) {
    this.user=new User;    
   }

  ngOnInit() {
    this.createForm();
  }
 
 
  private createForm(){
      this.form=new FormGroup({
        fname:new FormControl('',[ 
          Validators.required,
          Validators.minLength(4),
          AppValidators.cannotContainSpace]),
        email:new FormControl('',[Validators.required,Validators.email]),
        username:new FormControl('',Validators.required,AppValidators.checkUser(this.userService)),//for asynchronous,pass it as third parameter
        passwords: new FormGroup({
          password: new FormControl('', Validators.required),
          cpassword: new FormControl('', Validators.required),
          
        },AppValidators.matchPassword)

      });

      //console.log(this.form.get('passwords').matchPassword);    
  }

  private prepareSave(): any {

    let input = new FormData();
    //console.log(this.form.controls);

    input.append('fname', this.fname.value);
  
    input.append('email', this.email.value);
    input.append('username', this.username.value);
    input.append('password', this.password.value);
    input.append('address', this.address.value);
    input.append('phone', this.phone.value);
    input.append('pincode', this.pincode.value);

   
    return input;
  }


  onSubmit(){

    
    this.user.firstname=this.fname.value;
    this.user.email=this.email.value;
    this.user.username=this.username.value;
    this.user.password=this.password.value;
  

   // console.log(this.user);


    this.userService.adduser(this.user).subscribe(
    response => {
      this.successMessage=true;

      console.log('User:', response);
      this.form.reset();
     

      setTimeout(() => {
        this.successMessage = false;
      }, 3000);

    },
    error=>{
      console.log('User:', error);

    }
  );
  }

  

 

  get fname(){
    return this.form.get('fname');
  }
  get mname(){
    return this.form.get('mname');
  }
  get lname(){
    return this.form.get('lname');
  }
  get username(){
    return this.form.get('username');
  }
  get passwords(){
    return this.form.get('passwords');
  }
  get password(){
    return this.form.get('passwords.password');
  }
  get address(){
    return this.form.get('address');
  }
 // avatar
  get avatar(){
    return this.form.get('avatar');
  }
  get phone(){
    return this.form.get('phone').value
  }
  get pincode(){
    return this.form.get('pincode').value
  }
  get cpassword(){
    return this.form.get('passwords.cpassword');
  }
  get email(){
    return this.form.get('email');
  }
  
  get date_of_birth()
  {
    return this.form.get('date_of_birth');
  }

}
