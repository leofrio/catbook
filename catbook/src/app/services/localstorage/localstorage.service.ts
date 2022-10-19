import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}
  private bsubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  addLSToken(key: string, value: Object): void {
    const valueToBeAdded = JSON.stringify(value);
    this.bsubject.next(value);
    localStorage.setItem(key, valueToBeAdded);
  }
  getLSByKey(key: string): Object {
    return JSON.parse(localStorage.getItem(key) ?? '');
  }
  getObservableOfLastEnteredKey(): Observable<any> {
    return this.bsubject.asObservable();
  }
  deleteLSByKey(key: string): void {
    this.bsubject.next({});
    localStorage.removeItem(key);
  }
  hasLS(key: string): boolean {
    return !!this.getLSByKey(key);
  }
}
