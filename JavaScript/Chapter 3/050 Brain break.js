function sendIssue() {
  var coupons = fetchCouponsFromDB();
  var goodCoupons = selectCouponsByRank(coupons, "good");
  var bestCoupons = selectCouponsByRank(coupons, "best");
  var page = 0;
  var subscribers = fetchSubscribersFromDB(page);
  while(subscribers.length > 0) {
    var emails = emailsForSubscribers(subscribers,
                                      goodCoupons, bestCoupons);
    for(var e = 0; e < emails.length; e++) {
      var email = emails[e];
      emailSystem.send(email);
    }
    page++;
    subscribers = fetchSubscribersFromDB(page);
  }
}