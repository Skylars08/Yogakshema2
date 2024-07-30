import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.css'
})
export class InsuranceComponent implements OnInit {
  life = 'assets/3d-casual-life-couple-walks-with-baby.png';
  motor = 'assets/3d-business-woman-and-man-on-a-moped.png';
  health = 'assets/3d-business-doctor-and-little-girl.png';
  home = 'assets/3d-casual-life-house.png'

  constructor(  ){}

  ngOnInit() {
    AOS.init({
      duration: 650,
      once: true
    });
  }
}
