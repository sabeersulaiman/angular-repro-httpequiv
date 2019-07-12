import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _meta: Meta) {
    this._meta.addTag({httpEquiv: 'Content-Security-Policy', content: "default-src 'self';" })
    this._meta.addTag({'http-equiv': 'Content-Security-Policy', content: "default-src 'self';" })
  }
}
