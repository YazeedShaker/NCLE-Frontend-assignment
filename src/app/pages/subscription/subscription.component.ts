import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { SubscriptionPageService } from './services/subscription.service';
import { ITopicsInterface } from './data-models/topic.interface';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  imports: [
    IonicModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    TranslatePipe,
    RouterLinkWithHref,
  ],
  providers: [SubscriptionPageService],
})
export class SubscriptionComponent implements OnInit {
  public topics: ITopicsInterface[] = [];
  public selectedTopicIds: Array<ITopicsInterface>[] = [];
  private readonly MAX_TOPICS_SELECTIONS = 3;
  public subscriptionForm!: FormGroup;
  public grades: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  public days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  public months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  public years: number[] = Array.from(
    { length: 18 },
    (_, i) => new Date().getFullYear() - i
  );
  public productPrice: number = 456;
  public productTaxes: number = 4;

  constructor(
    private fb: FormBuilder,
    private service: SubscriptionPageService
  ) {
    this.createFormWithValidation();
  }

  ngOnInit() {
    this.getTopics();
  }

  private getTopics() {
    this.service.getTopicsData().subscribe({
      next: (data: any) => {
        this.topics = data.topics;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  private minLengthArray(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!Array.isArray(control.value)) {
        return { notArray: true };
      }
      return control.value.length < min
        ? { minLength: { min, actual: control.value.length } }
        : null;
    };
  }

  private createFormWithValidation() {
    this.subscriptionForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      childName: ['', [Validators.required, Validators.minLength(3)]],
      dob: this.fb.group({
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required],
      }),
      grade: ['', Validators.required],
      gender: ['', Validators.required],
      topics: [[], [Validators.required, this.minLengthArray(3)]],
    });
  }

  public handleGenderChange(gender: any) {
    this.subscriptionForm.controls['gender'].setValue(gender?.detail?.value);
  }

  public toggleTopicChip(chipId: any) {
    const index = this.selectedTopicIds.indexOf(chipId);

    if (index === -1) {
      if (this.selectedTopicIds.length < this.MAX_TOPICS_SELECTIONS) {
        this.selectedTopicIds.push(chipId);
      }
    } else {
      this.selectedTopicIds.splice(index, 1);
    }
    this.subscriptionForm.controls['topics'].setValue(this.selectedTopicIds);
    this.subscriptionForm.controls['topics'].updateValueAndValidity();
  }

  public isChipSelected(chipId: any): boolean {
    return this.selectedTopicIds.includes(chipId);
  }

  public canSelectMore(): boolean {
    return this.selectedTopicIds.length < this.MAX_TOPICS_SELECTIONS;
  }

  public onSubmit() {
    if (this.subscriptionForm.valid) {
      console.log(this.subscriptionForm.value);
    }
  }
}
