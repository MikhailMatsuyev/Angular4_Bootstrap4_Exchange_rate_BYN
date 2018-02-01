import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpServiceService {

  constructor(private http: HttpClient) {
  }

  getRatesFromAPI() {
    /*
     if (!cardId) {
     return Observable.throw('invalid'); // <= A
     }
     */

    return this.http.get('https://www.nbrb.by/API/ExRates/Rates?Periodicity=0')
      .map((resp: Response) => { // api nbrb.by responses objecvt! If resource response json need add resp.json()
        return resp;
      })
      .do(this.consoleLog)
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  private consoleLog(resp: Response) {
    console.log(resp);
  }
}
