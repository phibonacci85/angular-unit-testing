import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jasmine',
  templateUrl: './jasmine.component.html',
  styleUrls: ['./jasmine.component.scss']
})
export class JasmineComponent implements OnInit {

  content = {
    suite: {
      basic: `
        describe("A suite", function() {
          it("contains spec with an expectation", function() {
            expect(true).toBe(true);
          });
        });
      `
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
