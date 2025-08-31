import { TestBed } from '@angular/core/testing';

import { ManageTask } from './manage-task';

describe('ManageTask', () => {
  let service: ManageTask;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTask);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
