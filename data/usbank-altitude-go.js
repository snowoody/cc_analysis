// U.S. Bank Altitude Go Visa Signature Card data
(function() {
  const terms = {
    "Sign-On Bonus": `One-time 20,000 bonus Points will be awarded if you are approved for a new U.S. Bank Altitude Go Visa Signature Card and make $1,000 or more in total eligible Net Purchases to your Account within 90 days of Account opening. Please allow 1-2 billing cycles for your bonus Points to be credited to your Account. Existing or previous U.S. Bank Altitude Go Visa Signature cardmembers are not eligible if you have received a new account bonus for this product in the last five years.`,

    "4X Points on Dining": `Earn 4 Points (1 base and 3 bonus Points) for every $1 spent on your first $2,000 each quarter on restaurant, fast-food restaurant and bar purchases.`,

    "2X Points on Groceries & Gas/EV": `Earn 2 Points (1 base and 1 bonus Point) for every $1 spent on purchases in the following categories: grocery store and supermarket (wholesale clubs and discount stores/supercenters such as Target and Walmart will earn only 1 Point); gas station and electric vehicle charging station (wholesale clubs, discount stores/supercenters and grocery stores/supermarkets will earn only 1 Point).`,

    "2X Points on Streaming": `Earn 2 Points (1 base and 1 bonus Point) for every $1 spent on qualifying streaming subscription services. Refer to Program Rules for official list of qualifying streaming services merchants.`,

    "1X Points on Other Purchases": `Earn 1X point on all other eligible purchases.`,

    "0% Intro APR": `The 0% introductory APR applies to Purchases and is valid for the first 15 billing cycles. The 0% introductory APR applies to Balance Transfers made within 60 days of account opening and is valid for the first 15 billing cycles. Balance Transfer fee of 5% of each transfer amount, $5 minimum will apply.`,

    "$15 Streaming Credit": `An automatic statement credit of $15 per 12-month period will be applied to your Account within 2 statement billing cycles following 11 consecutive calendar months of eligible streaming service purchases, such as Netflix, Hulu, Apple Music, if the Account is in good standing. Refer to Program Rules for official list of qualifying streaming services merchants.`,

    "ExtendPay Plan": `U.S. Bank ExtendPay Plans provide a payment option that allows you to divide eligible credit card purchases into affordable monthly payments with no interest – just a fixed monthly fee. New cardmember $0 fee offer on ExtendPay Plans opened in the first 60 days after account opening.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus", name: "Sign-On Bonus", desc: "20,000 bonus points after $1,000 spend in 90 days (~$190 value at 0.95cpp)", min: 0, max: 200, default: 190, firstYearOnly: true },
    { name: "0% Intro APR", desc: "0% APR on purchases and balance transfers for 15 billing cycles. Estimate interest savings.", min: 0, max: 1000, default: 200, firstYearOnly: true },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "4X Points on Dining", desc: "4X on dining, takeout, restaurant delivery on first $2,000/quarter. Estimate annual dollar value earned.", min: 0, max: 240, default: 0, comment: "Max $8,000/year in spend at 3 bonus points = 24,000 bonus points (~$240). Does not include groceries." },
    { name: "2X Points on Groceries & Gas/EV", desc: "2X on groceries and gas/EV charging. Estimate annual dollar value earned.", min: 0, max: 300, default: 0, comment: "Excludes discount stores/supercenters and wholesale clubs." },
    { name: "2X Points on Streaming", desc: "2X on streaming services (Netflix, Hulu, Spotify, etc). Estimate annual dollar value earned.", min: 0, max: 50, default: 0 },
    { name: "1X Points on Other Purchases", desc: "1X on all other eligible purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },

    // Annual Credits
    { section: "Annual Credits", name: "$15 Streaming Credit", desc: "$15 statement credit after 11 consecutive months of streaming purchases", min: 0, max: 15, default: 0 },

    // Other Benefits
    { section: "Other Benefits", name: "ExtendPay Plan", desc: "$0 fee on ExtendPay Plans opened in first 60 days", min: 0, max: 50, default: 0, firstYearOnly: true },
  ];

  const card = {
    id: 'usbank-altitude-go',
    detailUrl: 'usbank-altitude-go.html',
    name: 'U.S. Bank Altitude Go Visa Signature Card',
    issuer: 'U.S. Bank',
    network: 'Visa Signature',
    type: 'Personal',
    categories: ['Dining', 'Groceries', 'Gas', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: '20,000 pts',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
