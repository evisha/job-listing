import { Component, OnInit, inject } from '@angular/core';
import {jobsJSON} from "../../../../jobs/feature-jobs-list/src/lib/jobs";

@Component({
  selector: 'cdt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
 // private readonly store = inject(Store);

  username!: string;
  jobs$: any[] = jobsJSON;
  searchTerm: any;
  userJobs: any;

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
