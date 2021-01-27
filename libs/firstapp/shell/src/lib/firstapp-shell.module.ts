import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstappShellComponent } from './firstapp-shell/firstapp-shell.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FirstappShellComponent],
  exports: [FirstappShellComponent],
})
export class FirstappShellModule {}
