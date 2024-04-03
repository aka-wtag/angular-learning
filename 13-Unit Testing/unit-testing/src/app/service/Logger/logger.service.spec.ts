import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    service = new LoggerService();
  });

  it('should not have any messages at starting', () => {
    //const service = new LoggerService();

    let count = service.messages.length;

    expect(count).toBe(0);
  });

  it('should add the message when log is called', () => {
    //const service = new LoggerService();

    service.log('message');

    expect(service.messages.length).toBe(1);
  });

  it('should clear all the messages when clear is called', () => {
    //const service = new LoggerService();
    service.log('message');

    service.clear();

    expect(service.messages.length).toBe(0);
  });
});
