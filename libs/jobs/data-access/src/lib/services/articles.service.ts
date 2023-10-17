import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {jobsJSON} from "../../../../feature-jobs-list/src/lib/jobs";
import {ArticleListConfig} from "../+state/article-list/article-list.reducer";

@Injectable({ providedIn: 'root' })
export class JobsService {

  getJobs(slug: string): Observable<any> {
    return of(jobsJSON);
  }
  getJob(slug: string): Observable<any> {
    return of(jobsJSON[1]);
  }


  addFavorite(slug: string, payload = ''): Observable<any> {
    return of(jobsJSON);
  }


  publishJob(job: any): Observable<any> {
    return of(jobsJSON);
  }

  removeJob(id: any): Observable<any> {
    return of(jobsJSON);
  }

  query(config: ArticleListConfig): Observable<{ jobs: any[]; jobsCount: number }> {
    return of({jobs: jobsJSON, jobsCount: 10})
  }

}
