import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit{
  userForm!: FormGroup;

  insertUrl = 'http://localhost:7000/insertdata'
  constructor(private formBuilder: FormBuilder, private http: HttpClient){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      phone: ['', Validators.required],
      age: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submitData(){
    if(!this.userForm.valid){
      return console.log("Error form is not valid!!!!");
    }

    this.http.post(this.insertUrl, this.userForm.value, {responseType: "text"})
    .subscribe({
      next: (res)=>{
        console.log("Data submit successfully!!!!");
        console.log(`response is ${res}`);
      },
      error: (err)=> console.log(`Error is: ${err.message}`)
    })
  }

}
