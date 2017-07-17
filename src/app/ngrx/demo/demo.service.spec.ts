import { TestBed, inject } from '@angular/core/testing';
import { DemoService } from './demo.service';
import { NgrxExampleModule } from '../ngrx.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('DemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoService],
      imports: [
        NgrxExampleModule.forRoot(),
        FormsModule,
        HttpModule
      ]
    });
  });

  it('should ...', () => {
    const service = TestBed.get(DemoService);
    expect(service).toBeTruthy();
  });
});
