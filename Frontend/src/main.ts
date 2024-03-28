import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

const isProduction = true; // Set to true for production, false for development



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
