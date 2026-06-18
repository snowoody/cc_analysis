// U.S. Bank Shopper Cash Rewards Visa Signature Card data
(function() {
  const terms = {
    "Sign-On Bonus": `In order to be eligible for the one-time $250 bonus, you will need to spend a minimum of $2,000 in Net Purchases on your new U.S. Bank Shopper Cash Rewards Visa Signature Card within 120 days after Account opening. Please allow 1-2 statement billing cycles for your bonus cash rewards to be credited to your Account. The bonus is not available to Cardmembers who currently have, or had, a U.S. Bank Shopper Cash Rewards Visa Signature account. This offer may not be combined with any other bonus offer.`,

    "First Year Annual Fee Waiver": `The $95 annual fee is waived for the first year. After the first year, the $95 annual fee applies each year.`,

    "6% Cash Back at Two Chosen Retailers": `Cardmember must enroll each quarter into two retailers of their choice, or all Net Purchases will earn no more than 1.5% Cash back. Allow up to 3 business days for registration to take effect. You will earn 6% Cash back on your first $1,500 in combined Net Purchases at your two chosen 6% retailers. During any calendar quarter in which you spend more than $1,500 combined at your two 6% retailers, you will earn 1.5% Cash Rewards for any additional spend at those retailers during that quarter. Choose from 24 retailers such as Amazon.com, Apple, Best Buy, Home Depot, Lowe's, Target, Walmart, Wayfair, and more. Retailer list is subject to change.`,

    "3% Cash Back on Everyday Category": `You will earn 3% Cash back on your first $1,500 in Net Purchases in your chosen 3% category (such as gas and EV charging stations, wholesale clubs, or bills and utilities). Gas station and electric vehicle charging station purchases at discount stores/supercenters, wholesale clubs and grocery stores/supermarkets will only earn 1.5% cash back. During any calendar quarter in which you spend more than $1,500 in your one 3% category, you will earn 1.5% Cash Rewards for any additional spend in that category during that quarter.`,

    "1.5% Cash Back on Other Purchases": `Earn 1.5% Cash Rewards for every $1 spent in all other eligible Net Purchases. There are no limits on your 1.5% Cash Rewards earnings.`,

    "5.5% Cash Back on Prepaid Travel": `In addition to earning 1.5% Cash Rewards for every $1 spent in eligible Net Purchases, Shopper Cash Rewards Cardmembers will earn an additional 4% Cash Rewards for every $1 in eligible Net Purchases spent on prepaid car and hotel reservations in the Rewards Center using your Shopper Cash Rewards card (5.5% total). Please allow 1-2 statement billing cycles for your bonus Cash Rewards to appear on your credit card statement.`,

    "Cash-Back Deals": `Get cash back from the brands you love via Cash-back deals, personalized offers based on your previous spending. Access them through the U.S. Bank Mobile App or online banking.`,

    "Flexible Redemption": `Get your cash back as a statement credit, a rewards card, merchant gift cards or directly deposited into your U.S. Bank checking or savings account. Cash Rewards do not expire. Maximum Cash Rewards value applies to Cash Rewards redeemed for a statement credit or deposit into an eligible U.S. Bank Account.`,

    "ExtendPay Plan": `U.S. Bank ExtendPay® Plans provide a payment option that allows you to divide eligible credit card purchases into affordable monthly payments with no interest – just a fixed monthly fee. Receive a new cardmember $0 fee offer on ExtendPay Plans opened in the first 60 days after account opening.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus", name: "Sign-On Bonus", desc: "$250 bonus after $2,000 spend in the first 120 days", min: 0, max: 250, default: 250, firstYearOnly: true },
    { name: "First Year Annual Fee Waiver", desc: "$95 annual fee waived for the first year (offsets the ongoing fee in year 1)", min: 0, max: 95, default: 95, firstYearOnly: true },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "6% Cash Back at Two Chosen Retailers", desc: "6% on first $1,500/quarter combined at two chosen retailers (Amazon, Apple, Target, Walmart, etc). Estimate annual dollar value earned.", min: 0, max: 360, default: 30, comment: "Capped at $1,500/quarter combined ($6,000/year), max ~$360/year. Choose 2 of 24 retailers each quarter. Retailer list subject to change." },
    { name: "3% Cash Back on Everyday Category", desc: "3% on first $1,500/quarter in one chosen everyday category (gas/EV, wholesale clubs, or bills/utilities). Estimate annual dollar value earned.", min: 0, max: 180, default: 10, comment: "Capped at $1,500/quarter ($6,000/year), max ~$180/year. Excludes discount stores/supercenters for gas/EV." },
    { name: "1.5% Cash Back on Other Purchases", desc: "1.5% on all other eligible purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "5.5% Cash Back on Prepaid Travel", desc: "5.5% on prepaid hotel and car reservations booked in the U.S. Bank Rewards Center. Estimate annual dollar value earned.", min: 0, max: 150, default: 0 },

    // Other Benefits
    { section: "Other Benefits", name: "Cash-Back Deals", desc: "Personalized brand offers in the U.S. Bank app/online banking. Estimate annual value redeemed.", min: 0, max: 100, default: 0 },
    { name: "Flexible Redemption", desc: "Redeem as statement credit, rewards card, gift cards, or deposit. Cash rewards don't expire.", min: 0, max: 50, default: 0 },
    { name: "ExtendPay Plan", desc: "$0 fee on ExtendPay Plans opened in first 60 days", min: 0, max: 50, default: 0, firstYearOnly: true },
  ];

  const card = {
    id: 'usbank-shopper-cash-rewards',
    detailUrl: 'usbank-shopper-cash-rewards.html',
    name: 'U.S. Bank Shopper Cash Rewards Visa Signature Card',
    issuer: 'U.S. Bank',
    network: 'Visa Signature',
    type: 'Personal',
    categories: ['Cash Back', 'Shopping', '$95 Annual Fee'],
    annualFee: 95,
    signOnBonusLabel: '$250',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
