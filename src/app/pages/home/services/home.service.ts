import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStepsInterface } from '../data-models/steps.interface';

@Injectable()
export class HomePageService {
  constructor(private httpClient: HttpClient) {}

  public getStepsData() {
    return this.httpClient.get<IStepsInterface[]>(
      'assets/json/steps-data.json'
    );
  }
}
