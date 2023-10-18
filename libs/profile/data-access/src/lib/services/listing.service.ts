import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
@Injectable({ providedIn: 'root' })
export class ListingService {

  constructor(private afs: AngularFirestore) {
  }


  addListing(listing: any): any {
  }

  getListing(slug: string): Observable<any> {
    return this.afs.collection("jobs").doc(slug).get()
  }


}
