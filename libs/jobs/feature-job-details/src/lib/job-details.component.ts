import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-job-details',
  standalone: true,
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobDetailsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
/* // private readonly store = inject(Store);

  article$ = this.store.select(articleQuery.selectData);
  canModify = false;
  isAuthenticated$ = this.store.select(selectLoggedIn);
  structure$ = this.store.select(ngrxFormsQuery.selectStructure);
  data$ = this.store.select(ngrxFormsQuery.selectData);
  currentUser$ = this.store.select(selectUser);

  ngOnInit() {
  }


  favorite(slug: string) {

  }
  unfavorite(slug: string) {

  }

  ngOnDestroy() {
    //this.store.dispatch(articleActions.initializeArticle());
  }

 */
}
