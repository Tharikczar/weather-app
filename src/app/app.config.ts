import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { WeatherInterceptorInterceptor } from './service/weather-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(BrowserAnimationsModule, HttpClientModule), 
    provideAnimations(), provideAnimations(),   { 
      provide: HTTP_INTERCEPTORS, useClass: WeatherInterceptorInterceptor, multi:true
    },]
};
