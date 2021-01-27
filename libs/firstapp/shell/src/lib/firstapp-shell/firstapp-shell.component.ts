import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { FirstappShellModule } from '@experiment-nx-shared-nav/firstapp/shell';

@Component({
  selector: 'fa-firstapp-shell',
  templateUrl: './firstapp-shell.component.html',
  styleUrls: ['./firstapp-shell.component.scss']
})
export class FirstappShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('shell')
  }

}
