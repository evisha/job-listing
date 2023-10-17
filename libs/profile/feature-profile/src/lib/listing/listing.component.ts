import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  jobListingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.jobListingForm = this.formBuilder.group({
      title: '',
      company: '',
      description: '',
      location: '',
      salary: '',
    });
  }

  submitJobListing() {
    // Access form values using this.jobListingForm.value and send the data to a service or API for processing
    console.log('Job Listing Submitted:', this.jobListingForm.value);
  }
}
