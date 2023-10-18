import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, HostListener, inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { JobListItemComponent } from './job-list-item/job-list-item.component';
import {Store} from "@ngrx/store";
import {jobsJSON} from "./jobs";
import {PagerComponent} from "../../../../ui/components/src";
import {of} from "rxjs";
import {JobsService} from "../../../data-access/src/lib/services/jobs.service";

@Component({
  selector: 'cdt-article-list',
  standalone: true,
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
  imports: [CommonModule, JobListItemComponent, PagerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsListComponent implements OnInit{
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  jobs$: any[] = [];
  currentPage = 1;
  pageSize = 5;

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


  searchJobsByKeyword() {
    // Use the filter method to return an array of objects containing the keyword
    /*    return jobsJSON.filter(item =>
      Object.values(item).some(value =>
        typeof value === 'string' && value.toLowerCase().includes('keyword'.toLowerCase())
      ));
      */
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
      this.jobs$ = this.jobs$.concat(response); // Add new data to the existing data
      this.currentPage++;
    });
  }
}
