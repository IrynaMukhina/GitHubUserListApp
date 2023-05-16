import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {
  @Input() buttonText: string;

  constructor() { }

  ngOnInit() {
  }

}
