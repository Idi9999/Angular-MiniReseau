import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { shortenPipe } from './pipes/shorten.pipe';
import { usernamePipe } from './pipes/username.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighLightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    CommentsComponent,
    shortenPipe,
    usernamePipe,
    TimeAgoPipe,
    HighLightDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule,
    shortenPipe,
    usernamePipe,
    TimeAgoPipe,
    HighLightDirective
  ]
})
export class SharedModule { }
