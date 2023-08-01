import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { EmojiDisplayComponent } from './emoji-display/emoji-display.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    EmojiDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
