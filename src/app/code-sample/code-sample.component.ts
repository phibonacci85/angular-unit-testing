import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-sample',
  templateUrl: './code-sample.component.html',
  styleUrls: ['./code-sample.component.scss']
})
export class CodeSampleComponent implements OnInit {

  @Input() title: string;
  @Input() code: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
