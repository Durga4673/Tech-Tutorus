import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


 export interface CourseDetails {
  title: string;
  description: string;
  reruirments: string;
  courseFor: string;
  Ulearn: string;
  image: string
  expnList: { [key: string]: string[] };
}

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {

  courseTitle!: string;
  courseDetails: CourseDetails | undefined;

  // courseDetails: any;

  private coursesUrl = 'assets/courses.json';

  sectionOrder: string[] = [
    "Introduction of Cloud Computing & AWS",
    "Introduction to AWS Services",
    "Identity Access Management (IAM)",
    "Simple Storage Service",
    "CloudFront",
    "Introduction to RPA(Robotic process Automation)",
    " What is Openspan",
    "Installation of Openspan",
    "Modules in Openspan",
    "Windows Integration",
    "Interaction Framework",
    "Web Integration",
    "Agile Desktop and Deployment",
    "Diagnostics and Debugging",
    "CanopY project in RPA",
    "Introduction to Data Science With Python",
    "PYTHON: ESSENTIALS (CORE)",
    "SCIENTIFIC DISTRIBUTIONS USED IN PYTHON FOR DATA SCIENCE",
    "ACCESSING/IMPORTING AND EXPORTING DATA USING PYTHON MODULES",
    "DATA ANALYSIS VISUALIZATION USING PYTHON",
    "INTRODUCTION TO STATISTICS",
    "INTRODUCTION TO PREDICTIVE MODELING",
    "Fundamentals of Salesforce",
    "Data Modeling and Management",
    "Backing up and sharing data",
    "Business logic & process automation",
    "Salesforce development",
    "Introduction",
    "Java for Selenium",
    "Selenium IDEIntroduction",
    "How to do Browser settings by using Option Classes",
    "Introduction to Cloud Computing",
    "Introduction to Devops",
    "Basic of Networking",
    "Basic of linux Admin",
    "Installing & Running Python",
    // "Introduction",
    "Python Syntax ,Keywords and Operators",
    "Expressions, Statements, Variables",
    "Python Data Types: List,Tuples,Dictionaries"
  ];

  constructor(private route: ActivatedRoute,
    private http: HttpClient) {
      this.setSlideConfig();
     }


  ngOnInit(): void {
     this.route.paramMap.subscribe(params => {
      this.courseTitle = params.get('title') || '';
      this.loadCourseDetails(this.courseTitle);
    });
  }

  getImageUrl(image: string): string {
    return `assets/images/${image}`;
  }


  loadCourseDetails(title: string): void {
    const formattedTitle = title.replace(/-/g, ' ');
    
    this.http.get<any>(this.coursesUrl).subscribe(
      (data) => {
        const course = data.courses.find((c: any) => c.title.toLowerCase() === formattedTitle.toLowerCase());
        if (course) {
          this.courseDetails = course;
        } else {
          console.error('Course not found:', formattedTitle);
        }
      },
      (error) => {
        console.error('Error fetching course data:', error);
      }
    );
  }

  slides = [
    { img: "assets/images/Tech-tutorus-DataScience.png", heading: "Data Science" },
    { img: "assets/images/python-datascience-dh.jpg", heading: "Data Science With Python" },
    { img: "assets/images/salesforce-cloud-logo.jpg", heading: "Saleforce" },
    { img: "assets/images/aws-dh.png", heading: "AWS" },
    { img: "assets/images/RPA-dh.jpg", heading: "RPA" },
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

setSlideConfig() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1440) {
    this.slideConfig.slidesToShow = 3; // Show 4 slides at 1440px or higher
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
  
  
}
