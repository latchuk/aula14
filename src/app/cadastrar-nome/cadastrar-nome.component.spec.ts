import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarNomeComponent } from './cadastrar-nome.component';

describe('CadastrarNomeComponent', () => {
  let component: CadastrarNomeComponent;
  let fixture: ComponentFixture<CadastrarNomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarNomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
