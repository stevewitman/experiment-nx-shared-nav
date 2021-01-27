import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstappShellComponent } from './firstapp-shell/firstapp-shell.component';

import { SharedNavModule } from '@experiment-nx-shared-nav/shared/nav';

@NgModule({
  imports: [CommonModule, SharedNavModule],
  declarations: [FirstappShellComponent],
  exports: [FirstappShellComponent, SharedNavModule],
})
export class FirstappShellModule {}
