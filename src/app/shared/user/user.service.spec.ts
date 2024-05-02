import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve All users', () => {
    expect(true).toBe(false);
  });

  it('should retrieve [] when there are no users', () => {
    expect(true).toBe(false);
  });

  it('should retrieve all expected user properties', () => {
    expect(true).toBe(false);
  });

  it('should get a user by ID', () => {
    expect(true).toBe(false);
  });

  it('should get all user by ID expected properties', () => {
    expect(true).toBe(false);
  });

  it('should fail a when user ID does not exist or is not valid', () => {
    expect(true).toBe(false);
  });

  it('should create a new user and the new user count should be +1', () => {
    expect(true).toBe(false);
  });

  it('should create a new user with unique ID', () => {
    expect(true).toBe(false);
  });

  it('should successfully deletes a user when provided with a valid ID', () => {
    expect(true).toBe(false);
  });

  it('should remove user from the list of users after deletion', () => {
    expect(true).toBe(false);
  });

  it('should fail when the ID is not valid', () => {
    expect(true).toBe(false);
  })
});
