import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { JobListItemComponent } from './job-list-item/job-list-item.component';
import {Store} from "@ngrx/store";
import {jobsJSON} from "./jobs";
import {PagerComponent} from "../../../../ui/components/src";

@Component({
  selector: 'cdt-article-list',
  standalone: true,
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
  imports: [CommonModule, JobListItemComponent, PagerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsListComponent {
  //private readonly store = inject(Store);
  private readonly router = inject(Router);
  jobs = jobsJSON;

/*  totalPages$ = this.store.select(articleListQuery.selectTotalPages);
  articles$ = this.store.select(articleListQuery.selectArticleEntities);
  listConfig$ = this.store.select(articleListQuery.selectListConfig);
  isLoading$ = this.store.select(articleListQuery.isLoading);*/

  favorite(slug: string) {
   // this.store.dispatch(articlesActions.favorite({ slug }));
  }

  unFavorite(slug: string) {
   // this.store.dispatch(articlesActions.unfavorite({ slug }));
  }

  navigateToJob(slug: string) {
    console.log(111, slug)
    this.router.navigate(['/job', slug]);
  }

  setPage(page: number) {
   // this.store.dispatch(articleListActions.setListPage({ page }));
  }
}
