import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './shared-components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, TranslateModule, HeaderComponent],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.initTranslation();
  }

  private initTranslation() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }
}
