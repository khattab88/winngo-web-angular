import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): FirebaseListObservable<Brand[]>{
    return this.db.list("/brands/");
  }

  get(id: string): FirebaseObjectObservable<Brand>{
    return this.db.object("/brands/" + id);
  }
}
