import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Header } from '../../models/header/header.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private dbPath = '/header';

  constructor(private firestore: Firestore) { }

  getHeader(): Observable<Header[]> {
    const headerCollection = collection(this.firestore, this.dbPath);
    return collectionData(headerCollection, { idField: 'id' }) as Observable<Header[]>;
  }
}
