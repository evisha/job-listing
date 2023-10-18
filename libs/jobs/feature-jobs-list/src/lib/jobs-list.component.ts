import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, HostListener, inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { JobListItemComponent } from './job-list-item/job-list-item.component';
import {JobsService} from "../../../data-access/src/lib/services/jobs.service";
import {FormsModule} from "@angular/forms";
import {Job} from "../../../data-access/src";

@Component({
  selector: 'cdt-article-list',
  standalone: true,
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
  imports: [CommonModule, JobListItemComponent, FormsModule ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsListComponent implements OnInit{
  //private readonly store = inject(Store);
  private readonly router = inject(Router);
  jobs: Job[] = [];
  currentPage = 1;
  pageSize = 5;
  searchTerm: any;

  constructor(private  js: JobsService) {
  }

  ngOnInit() {
    this.loadMoreData();
  }

  favorite(slug: string) {
   // this.store.dispatch(jobActions.favorite({ slug }));
  }

  unFavorite(slug: string) {
   // this.store.dispatch(jobActions.unfavorite({ slug }));
  }

  navigateToJob(slug: string) {
    this.router.navigate(['/job', slug]);
  }

  // Function to search for jobs by keyword
   searchJobsByKeyword() {
     if (!this.searchTerm) {
       this.loadMoreData()
     } else {
       const _searchTerm = this.searchTerm.toLowerCase();
      this.jobs = this.jobs.filter((job) => {
         return (
           job?.title.toLowerCase().includes(_searchTerm) ||
           job?.description.toLowerCase().includes(_searchTerm) ||
           job?.company.toLowerCase().includes(_searchTerm)
         );
       });
     }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 1
    ) {
      this.loadMoreData();
    }
  }

  loadMoreData() {
    this.js.getJobs(this.currentPage, this.pageSize).subscribe((response) => {
      this.jobs = this.jobs.concat(response); // Add new data to the existing data
      this.currentPage++;
    });
  }
}
