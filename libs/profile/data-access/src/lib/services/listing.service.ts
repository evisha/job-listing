import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

const favorites =  [
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
]
@Injectable({ providedIn: 'root' })
export class ListingService {

  addListing(listing: any): any {

  }

  getUserFavorites(): any {
    return favorites;
  }

}
