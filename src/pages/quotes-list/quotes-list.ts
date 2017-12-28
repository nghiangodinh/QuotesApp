import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { OnInit } from "@angular/core";
import { QuotesDetailPage } from "../pages";
import { QuotesService } from '../../services/quotes';

@Component({
  selector: "page-quotes-list",
  templateUrl: "quotes-list.html"
})
export class QuotesListPage implements OnInit {
  quotesList = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public quotesService: QuotesService
  ) {}

  ngOnInit() {
    this.quotesService.loadAll();
    this.quotesService.quotes.subscribe(
      quotes => {
        this.quotesList = quotes;
      },
      err => console.log("error: ", err)
    );
  }

  itemTapped(event, quote) {
    console.log(quote);

    this.navCtrl.push(QuotesDetailPage, {
      quote: quote
    });
  }
}
