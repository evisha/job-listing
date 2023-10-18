import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {jobsJSON} from "../../../../feature-jobs-list/src/lib/jobs";

@Injectable({ providedIn: 'root' })
export class JobsService {

  getJobs(page: number, pageSize: number ): Observable<any> {
    // mock pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return of(jobsJSON.slice(startIndex, endIndex));
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

}
