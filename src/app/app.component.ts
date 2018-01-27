import { Component} from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpServiceService]
})

export class AppComponent {

  dataForOutput: any= [];
  constructor(private httpService: HttpServiceService) {}

  submit( ) {
    this.httpService.getFactorial( )
      .subscribe((data) => {this.func(data); } );
  }

  func(data) {
    this.dataForOutput = data;
  }

}
