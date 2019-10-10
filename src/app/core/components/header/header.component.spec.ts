import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.debugElement.componentInstance;
    fixture.detectChanges();

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('show the app title and icon', () => {

    component.title = 'Weather Forecast';
    component.icon = 'weather.png';
    fixture.detectChanges();

    const compiledComponent = fixture.debugElement.nativeElement;
    
    expect(compiledComponent.querySelector('img').src).toContain('weather.png');
    expect(compiledComponent.querySelector('span').innerText).toContain('Weather Forecast');
  });

});
