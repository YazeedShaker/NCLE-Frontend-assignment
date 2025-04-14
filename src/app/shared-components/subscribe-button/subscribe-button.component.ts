import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-subscribe-button',
  templateUrl: './subscribe-button.component.html',
  styleUrls: ['./subscribe-button.component.scss'],
  imports: [TranslateModule, TranslatePipe],
})
export class SubscribeButtonComponent {
  constructor(private router: Router) {}

  public navigateToSubscriptionPage() {
    this.router.navigate(['./subscription']);
  }
}
