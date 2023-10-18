import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {JobsService} from "../../../data-access/src/lib/services/jobs.service";
import {Job} from "../../../data-access/src";

@Component({
  selector: 'app-job-details',
  standalone: true,
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
  imports: [CommonModule]
})
export class JobDetailsComponent implements OnInit {
  public job!: Job;
  public loading = true; // Add a loading indicator
  constructor(private route: ActivatedRoute, private js: JobsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const jobId = params['slug'];
      this.js.getJob(jobId).subscribe(doc => {
        console.log("Document data:", doc.data());
        this.job = doc.data()
        this.loading = false; // Turn off the loading indicator when data is received
      }, (error) => {
        console.error('Error fetching data:', error);
        this.loading = false; // Turn off the loading indicator in case of an error
      })
    });
  }
/* // private readonly store = inject(Store);

  job$ = this.store.select(articleQuery.selectData);
  canModify = false;
  isAuthenticated$ = this.store.select(selectLoggedIn);
  structure$ = this.store.select(ngrxFormsQuery.selectStructure);
  data$ = this.store.select(ngrxFormsQuery.selectData);
  currentUser$ = this.store.select(selectUser);


  favorite(slug: string) {}

  unfavorite(slug: string) {}

 */
}
