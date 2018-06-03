import { Component, OnInit } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseService } from 'app/services/firebase.services';


@Component({
  selector: 'femaleuser-page',
  templateUrl: './femaleuser-page.component.html',
  styleUrls: ['./femaleuser-page.component.css'],
  providers: [FirebaseService]
})
export class FemaleuserPageComponent implements OnInit {
	profiles: Profile[];
  genderType: Gender[];
  appState: string;
  activeKey: string;
  angular: any;
  constructor(private _firebaseService: FirebaseService) {
  }

  ngOnInit(){
    this.appState ='default';
    this._firebaseService.getProfile().subscribe(profiles => {
      this.profiles = profiles;
      var genderType : string;
    //   genderType = this.profiles.isRelated
    // if (genderType){
        
    //   }
    });
    this._firebaseService.getGender().subscribe(genderType => {
      this.genderType = genderType;
    });
  }
 changeState(state, key= null){
    if(key) {
      this.activeKey = key;
    }
    this.appState = state;
  }
  filterGender(genderType){
    this._firebaseService.getProfile(genderType).subscribe(profiles=>
    {
      this.profiles = profiles;
    })
  }
  addLike(target, value){
    value +=1;
    this._firebaseService.increment(target, value);
  }; 
}

export interface Profile{
  $key: string;
  name: string;
  surname: string;
  age: number;
  isRelated: boolean;
  image: string;
  likes: number;
  gender: string;
}
export interface Gender{
  $key: string;
  name: string;
}