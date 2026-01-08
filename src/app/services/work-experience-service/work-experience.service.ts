import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { WorkExperience } from '../../models/work-experience/work-experience.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  private dbPath = '/work-experience';

  constructor(private firestore: Firestore) { }

  getWorkExperience(): Observable<WorkExperience[]> {
    const workExperienceCollection = collection(this.firestore, this.dbPath);
    return collectionData(workExperienceCollection, { idField: 'id' }) as Observable<WorkExperience[]>;
  }
}