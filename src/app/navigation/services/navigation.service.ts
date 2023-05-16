import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isOpen = false;
  private navStatus = new BehaviorSubject(this.isOpen);


  public toggleNav(): void {
    this.isOpen = !this.isOpen;

    this.navStatus.next(this.isOpen);
  }

  public getNavStatus(): Observable<boolean> {
    return this.navStatus.asObservable();
  }
}
