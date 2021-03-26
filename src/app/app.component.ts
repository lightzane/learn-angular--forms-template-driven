import { Component } from '@angular/core';
// import { DemoFormSubmitService } from './demo-form-submit.service';
import { SampleFormModel } from './sample-form-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'learn-angular-forms-template-driven';

  submitted = false

  topics = ['IU (아이유)','Angular', 'Vue'] // for dropdown field <select> html tag
  hide = true // for password field

  // for data binding with the Class model
  classmodel = new SampleFormModel(
    'Lightzane', 
    1234567890, 
    'sample@email.com', 
    this.topics[0], 
    'morning', 
    {
      'street':'',
      'city':'Seoul',
      'postalCode': null
    },
    true
  )

  // constructor(private _service:DemoFormSubmitService) {}

  onSubmit(demoform) {
    this.submitted = true
    // this code needs an a server to parse
    // this._service.submit(this.classmodel).subscribe(
    //   data => console.log('success', data),
    //   error => console.error('error', error)
    // )
    console.log(demoform)
  }
  
}
