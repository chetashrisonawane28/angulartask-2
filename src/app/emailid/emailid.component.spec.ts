import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailidComponent } from './emailid.component';

describe('EmailidComponent', () => {
  let component: EmailidComponent;
  let fixture: ComponentFixture<EmailidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
