import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UrlServiceService } from '../url-service.service';
import { URLValidator } from '../validator/url.validator';

@Component({
  selector: 'app-url-short',
  templateUrl: './url-short.component.html',
  styleUrls: ['./url-short.component.css']
})
export class UrlShortComponent implements OnInit {
  urlForm; 
  isApiCalled = false;
  submitted = false;
  allURLs:any = [];
  constructor(
    private fb: FormBuilder,
    private urlService: UrlServiceService
  ) { 
    this.urlForm = this.fb.group({
      url: ['', Validators.required]
    },
    {
      validators: [
        URLValidator('url')
      ]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.urlForm.valid) {
      this.isApiCalled = true;
      const createData = this.urlForm.value;
      this.urlService.getShortenUrl(createData.url).toPromise().then((data: any) => {
        if(data && data.hasOwnProperty('result')) {
          const response: any = data['result'];
          const indexNum = this.allURLs.length;
          const results = {...response, id: (this.allURLs.length == 0) ? 1 : indexNum + 1};
          this.allURLs.push(results);
        }
      }).catch(err => {
        alert('SOmthing went wrong!'+ err.error)
      });
      this.urlForm.reset();
      this.isApiCalled = false;
      this.submitted = false;
    }
  }

  get f() { return this.urlForm.controls; }

  copyToClipBoard(data: any) {
    navigator.clipboard.writeText(data);
  }

}
