import { Component, OnInit } from '@angular/core';
import {jobsJSON} from "../../../../jobs/feature-jobs-list/src/lib/jobs";
import {Router} from "@angular/router";
import {appliedJobsJSON, favoriteJobsJSON} from "./myJobs";
import {Job} from "../../../../jobs/data-access/src";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
 // private readonly store = inject(Store);
  username!: string;
  jobs$: Job[] = jobsJSON;
  searchTerm: any;
  userJobs: any;
  favoriteJobs$: Job[]  = favoriteJobsJSON;
  appliedJobs$: Job[] = appliedJobsJSON;
  isAdmin = localStorage.getItem('roleID') === "1";

  constructor(private router: Router) {}
  ngOnInit() {}

  searchJobs() {
    if (!this.searchTerm) {
      this.jobs$ = jobsJSON;
    } else {
      this.jobs$ = jobsJSON.filter((job) =>
        job.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  goToEditor(jobId: number) {
    this.router.navigate(['/edit', jobId]);
  }

}
