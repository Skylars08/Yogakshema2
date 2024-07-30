import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  imageUrl = 'assets/bird-removebg-preview.png';

  tolife(){
    document.getElementById("life")?.scrollIntoView({behavior:"smooth"})
  }
  tomotor(){
    document.getElementById("motor")?.scrollIntoView({behavior:"smooth"})
  }
  tohealth(){
    document.getElementById("motor")?.scrollIntoView({behavior:"smooth"})
  }


}
