import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpServiceService {

  constructor(private http: HttpClient) {  }

  getFactorial( ) {
    return this.http.get('https://www.nbrb.by/API/ExRates/Rates?Periodicity=0')
     .map( ( resp: Response ) => { return resp; } )
     .catch( (error: any) => { return Observable.throw(error); } );
     }
}
