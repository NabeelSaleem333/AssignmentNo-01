import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  user = {
  name: 'Nabeel' ,
  city: 'Rawalpindi',
  interests: ['Cricket','Internet Suffering','Books']
};
  constructor() {}

}
