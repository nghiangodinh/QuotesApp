import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Quote } from '../../models/quotes';

@Component({
  selector: "page-quotes-detail",
  templateUrl: "quotes-detail.html"
})
export class QuotesDetailPage {
  quoteDetail: Quote = { quote: "", author: "" };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing
  ) {
    this.quoteDetail = this.navParams.get("quote");
  }

  twitterShare() {
    console.log("in twitter share");

    const quote: string = this.quoteDetail.quote;
    this.socialSharing
      .shareViaTwitter(
        quote.substring(0, 110) + "..",
        null /*Image*/,
        "http://ionicframework.com/img/homepage/ionicview-icon_2x.png"
      )
      .then(
        data => {
          alert("Success " + data);
        },
        err => {
          alert("failed " + err);
        }
      );
  }
}
