import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  @Input() user: any;
  @Output() close = new EventEmitter();
  @Output() save = new EventEmitter()

  constructor(private fb: FormBuilder){}

  editForm!: FormGroup;

  ngOnInit(): void {
    this.editForm = this.fb.group({
      firstname: [this.user.firstname, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      email: [this.user.email, Validators.required],
      phone: [this.user.phone, Validators.required],
      age: [this.user.age, Validators.required],
      password: [this.user.password, Validators.required]
    });
  }
  onSave() {
    if (this.editForm.valid) {
      this.save.emit(this.editForm.value);
    }
  }
  onCancel() {
    this.close.emit();
  }
}
