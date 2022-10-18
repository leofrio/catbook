import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}
  addLSToken(key: string, value: Object): void {
    const valueToBeAdded = JSON.stringify(value);
    localStorage.setItem(key, valueToBeAdded);
  }
  getLSByKey(key: string): string {
    return localStorage.getItem(key) ?? '';
  }
  deleteLSByKey(key: string): void {
    localStorage.removeItem(key);
  }
  hasLS(key: string): boolean {
    return !!this.getLSByKey(key);
  }
}
