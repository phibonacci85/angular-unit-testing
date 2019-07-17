import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jasmine',
  templateUrl: './jasmine.component.html',
  styleUrls: ['./jasmine.component.scss']
})
export class JasmineComponent implements OnInit {

  content = {
    suite: [
      {
        title: 'Starting a Suite',
        code: `
          describe("A suite", function() {

          });
        `,
        description: 'A suite is started using the describe function block'
      },
      {
        title: 'Testing a Suite',
        code: `
          describe("A suite", function() {
            it("contains spec with an expectation", function() {

            });
          });
        `,
        description: 'Suites contain a set of unit tests. A unit test is the nested "it" function'
      },
      {
        title: 'Testing a Suite',
        code: `
          describe("A suite", function() {
            it("contains spec with an expectation", function() {

            });
          });
        `,
        description: 'Suites contain a set of unit tests. A unit test is the nested "it" function'
      },
      {
        title: 'Setup and Teardown a Suite',
        code: `
          describe("A suite", function() {
            it("contains spec with an expectation", function() {

            });
          });
        `,
        description: 'Suites contain a set of unit tests. A unit test is the nested "it" function'
      },
  ]
  };

  constructor() { }

  ngOnInit() {
  }

}
