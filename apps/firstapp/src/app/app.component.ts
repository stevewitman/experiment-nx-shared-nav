import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experiment-nx-shared-nav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'firstapp';

  ngOnInit() {
    console.log('app');
  }
}
