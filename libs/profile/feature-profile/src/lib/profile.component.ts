import { Component, OnInit } from '@angular/core';
import {jobsJSON} from "../../../../jobs/feature-jobs-list/src/lib/jobs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
 // private readonly store = inject(Store);
  username!: string;
  jobs$: any[] = jobsJSON;
  favoriteJobs$: any[] =  [
    {
      "id": 1,
      "title": "Web Developer",
      "description": "Front-end and back-end development",
      "location": "New York",
      "company": "Company 1",
      "salary": 80000,
      "datePosted": "2023-10-16T10:41:45.620Z",
      "postedBy": "User123",
      "category": "Software Development"
    },
    {
      "id": 2,
      "title": "Graphic Designer",
      "description": "Designing visual content",
      "location": "Los Angeles",
      "company": "Company 1",
      "salary": 60000,
      "datePosted": "2023-10-17T12:41:45.620Z",
      "postedBy": "User22",
      "category": "Graphic Design"
    },
    {
      "id": 3,
      "title": "Graphic Designer",
      "description": "Designing visual content",
      "location": "Los Angeles",
      "company": "Company 1",
      "salary": 55000,
      "datePosted": "2023-10-15T10:41:45.620Z",
      "postedBy": "TestUser2",
      "category": "Graphic Design"
    }
  ];
  appliedJobs$: any[] = [
    {
      "id": 1,
      "title": "Web Developer",
      "description": "Front-end and back-end development",
      "location": "New York",
      "company": "Company 1",
      "salary": 80000,
      "datePosted": "2023-10-16T10:41:45.620Z",
      "postedBy": "User123",
      "category": "Software Development"
    },
    {
      "id": 2,
      "title": "Graphic Designer",
      "description": "Designing visual content",
      "location": "Los Angeles",
      "company": "Company 1",
      "salary": 60000,
      "datePosted": "2023-10-17T12:41:45.620Z",
      "postedBy": "User22",
      "category": "Graphic Design"
    },
    {
      "id": 3,
      "title": "Graphic Designer",
      "description": "Designing visual content",
      "location": "Los Angeles",
      "company": "Company 1",
      "salary": 55000,
      "datePosted": "2023-10-15T10:41:45.620Z",
      "postedBy": "TestUser2",
      "category": "Graphic Design"
    }
  ];
  searchTerm: any;
  userJobs: any;
  isAdmin = localStorage.getItem('roleID') === "1";

  ngOnInit() {

  }

  searchJobs() {
    if (!this.searchTerm) {
      this.jobs$ = jobsJSON;
    } else {
      this.jobs$ = jobsJSON.filter((job) =>
        job.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

}
