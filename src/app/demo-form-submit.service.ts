import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { SampleFormModel } from './sample-form-model';

@Injectable({
  providedIn: 'root'
})
export class DemoFormSubmitService {

  _url = 'result'

  constructor(private _http:HttpClient) { }

  submit(demoform: SampleFormModel) {
    return this._http.post<any>(this._url, demoform)
  }
}
