import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Branch } from '../models/branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): FirebaseListObservable<Branch[]>{
    return this.db.list("/branches/");
  }

  get(id: string): FirebaseObjectObservable<Branch>{
    return this.db.object("/branches/" + id);
  }

  getByBrand(brandId: string): FirebaseListObservable<Branch[]>{
    return this.db.list("/branches/"
      , {query:{ orderByChild: "brandId", equalTo: brandId }});
  }

}
