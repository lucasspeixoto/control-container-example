import { Component, Input, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-validation-message',
  templateUrl: './custom-validation-message.component.html',
  styleUrls: ['./custom-validation-message.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class CustomValidationMessageComponent {
  @Input({ required: true })
  public controlName!: string;

  @Input({required: false})
  public minLength!: number;

  @Input({required: false})
  public maxLength!: number;

  private _controlContainer = inject(ControlContainer);

  get form(): FormGroup {
    return this._controlContainer.control as FormGroup;
  }

  get control(): FormControl {
    return this.form.get(this.controlName) as FormControl;
  }
}
