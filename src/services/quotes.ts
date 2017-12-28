import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/map';
import { Quote } from "../models/quotes";

@Injectable()
export class QuotesService {
  public readonly quotes: Observable<Quote[]>;

  private _quotes: BehaviorSubject<Quote[]>;
  private baseUrl: string;
  private dataStore: {
    quotes: Quote[];
  };

  constructor(private http: Http) {
    this.baseUrl = "assets/data/quotes.json";
    this.dataStore = { quotes: [] };

    this._quotes = <BehaviorSubject<Quote[]>>new BehaviorSubject([]);
    this.quotes = this._quotes.asObservable();
  }

  loadAll() {
    this.http
      .get(`${this.baseUrl}`)
      .map(res => res.json())
      .subscribe(
        data => {
          this.dataStore.quotes = data.quotes;
          this._quotes.next(Object.assign({}, this.dataStore).quotes);
        },
        error => console.log("Could not load quotes")
      );
  }
}
