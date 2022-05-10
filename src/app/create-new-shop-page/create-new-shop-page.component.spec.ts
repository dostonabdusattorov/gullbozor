import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewShopPageComponent } from './create-new-shop-page.component';

describe('CreateNewShopPageComponent', () => {
  let component: CreateNewShopPageComponent;
  let fixture: ComponentFixture<CreateNewShopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewShopPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
