import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  form: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder) {}

  async send() {
    // emailjs.init('a0gCHaDZXomylHx83');
    // let response = await emailjs.send('service_izo8t7f', 'template_4xkb4hk', {
    //   from_name: this.form.value.name,
    //   to_name: 'Blocktech',
    //   from_email: this.form.value.email,
    //   subject: this.form.value.suject,
    //   message: this.form.value.message,
    // });

    alert('Mensagem has been send.');
    this.form.reset();
  }
}
