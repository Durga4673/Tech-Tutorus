import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  slides = [
    { img: "assets/images/aws-dh.png", heading: "AWS" },
    { img: "assets/images/python-datascience-dh.jpg", heading: "Data Science With Python" },
    { img: "assets/images/devops-dh.jpg", heading: "Devops" },
    { img: "assets/images/python-dh.jpg", heading: "Python" },
    { img: "assets/images/RPA-dh.jpg", heading: "RPA" },
    { img: "assets/images/saleforce-dh.jpg", heading: "Saleforce" },
    { img: "assets/images/selenium-dh.png", heading: "Selenium" },
];
  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1, 
    'autoplay': true, 
    'autoplaySpeed': 3000, 
    'dots': true, 
    'infinite': true, 
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
    responsive:[
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  constructor(private router: Router) {
    this.setSlideConfig();
  }

  setSlideConfig() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
      this.slideConfig.slidesToShow = 4; // Show 4 slides at 1440px or higher
      this.slideConfig.slidesToScroll = 1; // Scroll 4 items at a time at 1440px or higher
    } else if (screenWidth > 1024) {
      this.slideConfig.slidesToShow = 3; // Show 3 slides between 1024px and 1439px
      this.slideConfig.slidesToScroll = 1; // Scroll 3 items at a time between 1024px and 1439px
    } else if (screenWidth >= 768) {
      this.slideConfig.slidesToShow = 2; // Show 2 slides between 768px and 1023px
      this.slideConfig.slidesToScroll = 1; // Scroll 2 items at a time between 768px and 1023px
    } else {
      this.slideConfig.slidesToShow = 1; // Show 1 slide below 768px
      this.slideConfig.slidesToScroll = 1; // Scroll 1 item at a time below 768px
    }
  }

  navigateToCourses() {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    
    // Navigate to the "/courses" route
    this.router.navigate(['/courses']);
  }

  navigateToRegister(){
    window.scrollTo(0, 0);
    
    // Navigate to the "/courses" route
    this.router.navigate(['/registerUS']);
  }
}


