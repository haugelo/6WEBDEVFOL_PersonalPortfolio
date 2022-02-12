import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hands-on';

  /* Two-Way Binding */

  Fname = '';
  Lname = '';
  Email = '';
  School = '';

  /* Data Binding */

  imagePIC: string = 'assets/img/headerImages.jpg';
  appliedCSSClass = 'MainHeading';

  appName = 'Research Conferences';
  appName2 = 'Join our Online Events this 2022!';

  appliedCSS = 'corporationMessage';

  /* ngFor */
  partners = [
    {
      company: 'Microsoft',
      trademark: 'assets/img/clipboard-image-6.png',
      sponsorship: 'Platinum',
      website: 'https://www.microsoft.com/en-ph',
    },
    {
      company: 'Apple, Inc.',
      trademark: 'assets/img/clipboard-image-7.png',
      sponsorship: 'Gold',
      website: 'https://www.apple.com/ph/',
    },
    {
      company: 'Amazon',
      trademark: 'assets/img/clipboard-image-9.png',
      sponsorship: 'Silver',
      website: 'https://www.amazon.com/',
    },
    {
      company: 'Google, Inc.',
      trademark: 'assets/img/clipboard-image-11.png',
      sponsorship: 'Bronze',
      website: 'https://www.google.com/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
