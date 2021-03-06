
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TopNavComponent } from './top-nav.component';

describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [TopNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
