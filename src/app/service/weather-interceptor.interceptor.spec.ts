import { TestBed } from '@angular/core/testing';

import { WeatherInterceptorInterceptor } from './weather-interceptor.interceptor';

describe('WeatherInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      WeatherInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: WeatherInterceptorInterceptor = TestBed.inject(WeatherInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
