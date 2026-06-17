// U.S. Bank Cash+ Visa Signature Card data
(function() {
  const terms = {
    "Sign-On Bonus": `One-time $250 bonus will be awarded for redemption when you are approved for a new U.S. Bank Cash+® Visa Signature® Card and after eligible net purchases totaling $1,000 or more are made to your account within 90 days from account opening. Please allow 1-2 statement billing cycles after you have met the spend requirement for your bonus to be credited to your rewards balance. Existing and previous Cash Rewards accounts do not qualify for this one-time bonus. One-time bonus cash does not apply toward account upgrades. This offer may not be combined with any other bonus offer. Offer is subject to credit approval.`,

    "5% Cash Back on Choice Categories": `Cardmember must enroll each quarter into categories of their choice, or all Net Purchases will earn no more than 1% cash back. You will earn 5% cash back on your first $2,000 in combined Net Purchases (purchases minus returns or credits) in your two chosen 5% categories. Purchases over $2,000 in the 5% categories will earn 1% cash back. Category options (such as fast food, home utilities, TV/internet/streaming, department stores, cell phone, electronics stores, and more) may change on a quarterly basis.`,

    "2% Cash Back on Everyday Category": `Earn 2% cash back in your chosen everyday category each quarter, such as gas stations and EV charging stations, grocery stores, or restaurants. Grocery store and supermarket purchases at discount stores/supercenters such as Target and Walmart and wholesale clubs will only earn 1% cash back. Gas station and electric vehicle charging station purchases at discount stores/supercenters, wholesale clubs and grocery stores/supermarkets will only earn 1% cash back. There are no limits on your 2% cash back earnings.`,

    "1% Cash Back on Other Purchases": `Earn 1% cash back for every $1 spent in all other eligible Net Purchases. There are no limits on your 1% cash back earnings.`,

    "5% Cash Back on Prepaid Travel": `In addition to earning 1% cash back for every $1 spent in eligible Net Purchases, Cash+ Cardmembers will earn an additional 4% cash back for every $1 in eligible Net Purchases spent on prepaid air, car and hotel reservations in the Travel Center using your Cash+ Card (5% total). Please allow 1-2 statement billing cycles for your bonus cash back to appear on your credit card statement.`,

    "0% Intro APR": `The 0% introductory APR applies to purchases and is valid for the first 15 billing cycles. The 0% introductory APR applies to balance transfers made within 60 days of account opening and is valid for the first 15 billing cycles. The introductory rate does not apply to cash advances. Balance Transfer fee of 5% of each transfer amount, $5 minimum will apply.`,

    "Cash-Back Deals": `Get cash back from the brands you love via Cash-back deals, personalized offers based on your previous spending. Access them through the U.S. Bank Mobile App or online banking.`,

    "ExtendPay Plan": `U.S. Bank ExtendPay® Plans provide a payment option that allows you to divide eligible credit card purchases into affordable monthly payments with no interest – just a fixed monthly fee. Receive a new cardmember $0 fee offer on ExtendPay Plans opened in the first 60 days after account opening.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus", name: "Sign-On Bonus", desc: "$250 rewards bonus after $1,000 spend in the first 90 days", min: 0, max: 250, default: 250, firstYearOnly: true },
    { name: "0% Intro APR", desc: "0% APR on purchases and balance transfers for 15 billing cycles. Estimate interest savings.", min: 0, max: 1000, default: 200, firstYearOnly: true },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "5% Cash Back on Choice Categories", desc: "5% on two chosen categories (fast food, utilities, streaming, etc) on first $2,000/quarter combined. Estimate annual dollar value earned.", min: 0, max: 400, default: 50, comment: "Capped at $2,000/quarter. Eligible 5% categories: fast food, home utilities, TV/internet/streaming, department stores, cell phone providers, electronics stores, sporting goods stores, furniture stores, movie theaters, ground transportation, gyms/fitness centers, and select clothing stores." },
    { name: "2% Cash Back on Everyday Category", desc: "2% on one chosen everyday category (gas/EV, groceries, or restaurants). Estimate annual dollar value earned.", min: 0, max: 200, default: 0, comment: "Excludes discount stores/supercenters and wholesale clubs. No earning cap." },
    { name: "1% Cash Back on Other Purchases", desc: "1% on all other eligible purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "5% Cash Back on Prepaid Travel", desc: "5% on prepaid air, hotel, and car reservations booked in the U.S. Bank Travel Center. Estimate annual dollar value earned.", min: 0, max: 150, default: 0 },

    // Other Benefits
    { section: "Other Benefits", name: "Cash-Back Deals", desc: "Personalized brand offers in the U.S. Bank app/online banking. Estimate annual value redeemed.", min: 0, max: 100, default: 0 },
    { name: "ExtendPay Plan", desc: "$0 fee on ExtendPay Plans opened in first 60 days", min: 0, max: 50, default: 0, firstYearOnly: true },
  ];

  const card = {
    id: 'usbank-cash-plus',
    detailUrl: 'usbank-cash-plus.html',
    name: 'U.S. Bank Cash+ Visa Signature Card',
    issuer: 'U.S. Bank',
    network: 'Visa Signature',
    type: 'Personal',
    categories: ['Cash Back', 'No Annual Fee', '0% Intro APR'],
    annualFee: 0,
    signOnBonusLabel: '$250',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
