import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { NavigationService } from '../../services/navigation.service';

import { navigationMenuAnimation } from './navigation-menu.animations';

const ARROW_LEFT = 'keyboard_arrow_left';
const ARROW_RIGHT = 'keyboard_arrow_right';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [navigationMenuAnimation]
})
export class NavigationMenuComponent implements OnInit, OnDestroy {
  public isNavOpen: boolean;
  public toggleIcon = ARROW_LEFT;
  public routerSub: Subscription;
  public navSub: Subscription;
  public activePath: string;

  public navigationItems = [
    {
      navIcon: 'supervised_user_circle',
      navLink: '/users',
      navText: 'Users'
    },
    {
      navIcon: 'favorite_border',
      navLink: '/favorites',
      navText: 'Favorites'
    },
  ];

  constructor(
    private router: Router,
    private navService: NavigationService
  ) { }

  public ngOnInit(): void {
    this.navSub = this.navService.getNavStatus().subscribe(status => this.isNavOpen = status);

    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activePath = window.location.pathname;
      });
  }

  public navigateToHome(): void {
    this.router.navigateByUrl('');
  }

  public navigateTo(link: string): void {
    this.router.navigateByUrl(link);
  }

  public toggleState(): void {
    this.navService.toggleNav();

    this.toggleIcon = this.toggleIcon === ARROW_LEFT
      ? ARROW_RIGHT
      : ARROW_LEFT;
  }

  public ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.navSub.unsubscribe();
  }
}
