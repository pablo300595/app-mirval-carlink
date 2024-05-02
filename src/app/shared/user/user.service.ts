import { Injectable } from '@angular/core';
import { User } from '../models/user/user.model';
import { UserRole } from '../models/user/user-role.model';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      username: 'john_doe',
      password: 'hashed_password',
      firstName: 'John',
      lastName: 'Doe',
      role: UserRole.STANDARD,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        postalCode: '12345',
        country: 'USA',
      },
      contactInfo: {
        email: 'john@example.com',
        phone: '555-123-4567',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      profileImage: 'https://example.com/profile.jpg',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialLinks: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
      },
      preferences: {
        theme: 'dark',
        language: 'en',
        notifications: {
          email: true,
          push: true,
        },
      },
    },
    {
      id: 2,
      username: 'jane_smith',
      password: 'hashed_password',
      firstName: 'Jane',
      lastName: 'Smith',
      role: UserRole.STANDARD,
      address: {
        street: '456 Elm St',
        city: 'Sometown',
        state: 'NY',
        postalCode: '54321',
        country: 'USA',
      },
      contactInfo: {
        email: 'jane@example.com',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
    },
    {
      id: 3,
      username: 'admin_user',
      password: 'hashed_password',
      firstName: 'Admin',
      lastName: 'User',
      role: UserRole.ADMIN,
      address: {
        street: '789 Oak St',
        city: 'Othertown',
        state: 'TX',
        postalCode: '98765',
        country: 'USA',
      },
      contactInfo: {
        email: 'admin@example.com',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
    }
  ];


  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(500));
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(u => u.id === id);
    return of(user).pipe(delay(500));
  }

  createUser(user: User): Observable<User> {
    const newId = this.users.length + 1;
    const newUser: User = { ...user, id: newId };
    this.users.push(newUser);
    return of(newUser).pipe(delay(500));
  }


  updateUser(user: User): Observable<User> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
    return of(user).pipe(delay(500));
  }

  deleteUser(id: number): Observable<void> {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
    return of(undefined).pipe(delay(500));
  }

}
