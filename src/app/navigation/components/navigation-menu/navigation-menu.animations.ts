import { trigger, state, style, transition, animate } from '@angular/animations';

export const navigationMenuAnimation = trigger('slideInOut', [
  state('false', style({
    width: '50px'
  })),
  state('true', style({
    width: '200px'
  })),
  transition('false => true', animate('300ms ease-in-out')),
  transition('true => false', animate('200ms ease-in-out'))
]);
