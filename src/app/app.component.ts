import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PQ Lab';
  sampleSerial = '';
  showSpinner = false;

  sumbit() {
    this.showSpinner = true;

    setTimeout(() => this.showSpinner = false, 2000);
  }
}
