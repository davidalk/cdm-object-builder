import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JSON_ATTRIBUTE_NODE_TOKEN } from '../../tokens';
import { mockJsonAttributeNode } from '../../mocks/model-mocks';

import { EnumNodeComponent } from './enum-node.component';

describe('EnumNodeComponent', () => {
  let component: EnumNodeComponent;
  let fixture: ComponentFixture<EnumNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnumNodeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: JSON_ATTRIBUTE_NODE_TOKEN,
          useValue: mockJsonAttributeNode(),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EnumNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
