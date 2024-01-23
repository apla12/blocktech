import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  submitted = false;

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    } else {
      this.send();
    }
    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  async send() {
    emailjs.init('a0gCHaDZXomylHx83');
    let response = await emailjs.send('service_izo8t7f', 'template_4xkb4hk', {
      from_name: this.form.value.name,
      to_name: 'Blocktech',
      from_email: this.form.value.email,
      message: this.form.value.message,
    });
    alert('Mensagem has been send.');
  }
}
