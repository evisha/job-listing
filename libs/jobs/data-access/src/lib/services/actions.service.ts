import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {jobsJSON} from "../../../../feature-jobs-list/src/lib/jobs";

@Injectable({ providedIn: 'root' })
export class ActionsService {

  favorite(slug: string): Observable<any> {
    //return this.apiService.post<JobsResponse, void>('/jobs/' + slug + '/favorite');
    return of(jobsJSON)
  }

  unfavorite(slug: string): Observable<any> {
   // return this.apiService.delete<JobsResponse>('/jobs/' + slug + '/favorite');
    return of(jobsJSON)
  }
}
