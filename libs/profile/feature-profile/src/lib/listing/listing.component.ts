import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ActivatedRoute} from "@angular/router";
import {Job} from "../../../../../jobs/data-access/src";
import {ListingService} from "../../../../data-access/src/lib/services/listing.service";


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  jobListingForm: FormGroup;
  loading = false;
  listingID!: string;

  constructor(private formBuilder: FormBuilder,
              private afs: AngularFirestore,
              private route: ActivatedRoute,
              private ls: ListingService
  ) {
    this.jobListingForm = this.formBuilder.group({
      title: '',
      company: '',
      description: '',
      location: '',
      salary: '',
      category: '',
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listingID = params['slug'];
      if (this.listingID) {
        this.ls.getListing(this.listingID).subscribe(doc => {
          console.log("Document data:", doc.data());
          this.setFormData(doc.data())
          this.loading = false; // Turn off the loading indicator when data is received
        }, (error) => {
          console.error('Error fetching data:', error);
          this.loading = false; // Turn off the loading indicator in case of an error
        })
      }
    });
  }

  setFormData(listingData: Job) {
    this.jobListingForm = this.formBuilder.group({
      title: listingData.title,
      company: listingData.company,
      description: listingData.description,
      location: listingData.location,
      salary: listingData.salary,
      category: listingData.category,
    });
  }


  submitJobListing() {
    // Create a custom document reference with a numeric ID
    this.afs.collection('jobs').doc(this.listingID ?? this.getRandomIntAsID()).set(this.jobListingForm.value)
      .then(() => {
        console.log("Document successfully written!");
        if (!this.listingID) {
          this.jobListingForm.reset();
        }
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  getRandomIntAsID() {
    return Math.floor(Math.random() * 10).toString();
  }

}
