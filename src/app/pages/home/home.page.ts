import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { IStepsInterface } from './data-models/steps.interface';
import { HomePageService } from './services/home.service';
import { StepsComponent } from '../../shared-components/step-component/step-component.component';
import { SubscribeButtonComponent } from '../../shared-components/subscribe-button/subscribe-button.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonicModule,
    StepsComponent,
    TranslateModule,
    TranslatePipe,
    SubscribeButtonComponent,
  ],
  providers: [HomePageService],
})
export class HomePage implements OnInit {
  public stepsData: IStepsInterface[] = [];
  constructor(private service: HomePageService) {}

  ngOnInit(): void {
    this.getStepsArray();
  }

  private getStepsArray() {
    this.service.getStepsData().subscribe({
      next: (data: any) => {
        this.stepsData = data.steps;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
