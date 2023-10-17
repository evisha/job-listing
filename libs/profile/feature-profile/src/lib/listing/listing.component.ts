import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {increment, set} from "@angular/fire/database";
import random from "@angular-devkit/schematics/src/rules/random";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  jobListingForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private afs: AngularFirestore) {
    this.jobListingForm = this.formBuilder.group({
      title: '',
      company: '',
      description: '',
      location: '',
      salary: '',
      category: '',
    });
  }

  submitJobListing() {
    // Create a custom document reference with a numeric ID
    const usersCollection = this.afs.collection('jobs');
    console.log('Job Listing Submitted:', this.jobListingForm.value);
    this.afs.collection('jobs').doc(this.getRandomIntAsID()).set(this.jobListingForm.value)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

   getRandomIntAsID() {
    return Math.floor(Math.random() * 150).toString();
  }

}
