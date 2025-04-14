import { Component, Input, OnInit } from '@angular/core';
import { IStepsInterface } from 'src/app/pages/home/data-models/steps.interface';

@Component({
  selector: 'app-step-component',
  templateUrl: './step-component.component.html',
  styleUrls: ['./step-component.component.scss'],
})
export class StepsComponent implements OnInit {
  @Input() stepsArray: IStepsInterface[] = [];
  constructor() {}

  ngOnInit() {}
}
