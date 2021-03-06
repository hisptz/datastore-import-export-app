import { Component, OnInit, ViewChild } from "@angular/core";
import { KeyService } from "./key.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-key",
  templateUrl: "./key.component.html",
  styleUrls: ["./key.component.css"]
})
export class KeyComponent implements OnInit {
  key: string;
  name: string = this.route.parent.snapshot.params["name"];
  loadingValue: boolean = false;
  errorExists: boolean = false;
  errorObj: {};
  valueLoaded: boolean = false;
  loadedValue = {};
  valMode: boolean;
  jsonErrorMessage: string = "The JSON Object is invalid";
  jsonError: boolean = false;
  updSuccess: boolean;
  updFailed: boolean;

  constructor(private keyService: KeyService, private route: ActivatedRoute) {}

  ngOnInit() {
    //console.log(this.route.parent.snapshot.params['name']);

    this.route.params.subscribe((params: Params) => {
      //this.name = params["name"];
      this.key = params["key"];

      //console.log(this.name + this.key);

      this.fetchValueObject(this.name, this.key);
    });

    //this.key = this.route.snapshot.params['key'];
  }

  updateValue(keyID: string) {
    this.loadingValue = true;
    this.errorExists = false;
    this.valueLoaded = false;
    console.log(typeof this.loadedValue);

    this.keyService.updateVal(this.name, keyID, this.loadedValue).subscribe(
      updRes => {
        this.updSuccess = true;
        this.loadingValue = false;
        this.valueLoaded = true;
        console.log(1);
        setTimeout(() => {
          this.updSuccess = false;
          // console.log(1)
        }, 5000);
      },
      errUpd => {
        this.errorExists = true;
        this.errorObj = errUpd;
        this.loadingValue = false;
        this.valueLoaded = true;
      }
    );
  }

  fetchValueObject(name: string, key: string) {
    this.errorExists = false;
    this.loadingValue = true;
    this.valueLoaded = false;
    //console.log(this.route.parent.snapshot.params['name']);
    this.keyService.fetchValue(name, key).subscribe(
      responceData => {
        this.loadedValue = responceData;

        this.loadingValue = false;
        this.valueLoaded = true;
      },
      error => {
        this.errorExists = true;
        this.errorObj = error;
        this.loadingValue = false;
      }
    );
  }

  get code() {
    return JSON.stringify(this.loadedValue, null, 2);
  }

  set code(v) {
    this.jsonError = false;
    try {
      this.loadedValue = JSON.parse(v);
      //console.log(this.loadedValue);
    } catch (e) {
      //console.log('error occored while you were typing the JSON');
      this.jsonError = true;
    }
  }

  setValMode() {
    if (this.valMode) {
      this.valMode = false;
    } else {
      this.valMode = true;
    }
  }
}
