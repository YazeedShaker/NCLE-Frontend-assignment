import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITopicsInterface } from '../data-models/topic.interface';

@Injectable()
export class SubscriptionPageService {
  constructor(private httpClient: HttpClient) {}

  public getTopicsData() {
    return this.httpClient.get<ITopicsInterface[]>(
      'assets/json/topics-data.json'
    );
  }
}
