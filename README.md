Reproduction for issue [#31525](https://https://github.com/angular/angular/issues/31525). Check the dom for added meta tag in both cases.

```ts
this._meta.addTag({httpEquiv: 'Content-Security-Policy', content: "default-src 'self';" })
// adds: <meta httpequiv="Content-Security-Policy" content="default-src 'self';">
this._meta.addTag({'http-equiv': 'Content-Security-Policy', content: "default-src 'self';" })
// adds: <meta http-equiv="Content-Security-Policy" content="default-src 'self';">
```