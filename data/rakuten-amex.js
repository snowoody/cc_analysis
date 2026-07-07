// Rakuten American Express Card data
(function() {
  const terms = {
    "$100 Welcome Bonus": `Earn $100 cash back (or 10,000 Membership Rewards/Bilt points if linked) after meeting the spending requirement within the first 90 days of account opening. The Rakuten American Express Card is issued by First Electronic Bank, pursuant to a license from American Express. Powered by Imprint Payments, Inc.`,

    "4 pts/$1 on Rakuten Purchases": `Earn 4 points per dollar on eligible Rakuten purchases (online or in-store) up to $10,000 per calendar year, then 1 pt/$1 afterward. This stacks on top of any Rakuten portal cash back or Membership Rewards points you earn through Rakuten's special offers. Cash back can be converted to Amex Membership Rewards points or Bilt Rewards points.`,

    "Extra 5 pts/$1 at Rakuten Restaurant Partners": `Earn an extra 5 points per dollar at Rakuten restaurant partners, stacking on top of the standard 5% Rakuten portal rewards for those restaurants. This elevated rate applies when you use the Rakuten American Express Card at participating Rakuten restaurant network locations.`,

    "2 pts/$1 on Groceries & Restaurants": `Earn 2 points per dollar at grocery stores and restaurants on all eligible purchases made with the card. This rate applies to purchases made directly at these merchants, separate from any Rakuten portal bonuses.`,

    "1 pt/$1 on All Other Purchases": `Earn 1 point per dollar on all other eligible purchases made with the card. Points don't expire as long as your account remains open.`,

    "Purchase Protection": `Covers eligible new purchases against theft or damage within 90 days of purchase. Contact Imprint Customer Support for coverage details and claim filing.`,

    "Extended Warranty Protection": `Extends the time period of eligible manufacturer warranties by up to 12 months. Coverage applies to eligible items purchased with the Rakuten American Express Card.`,

    "Amex Offers": `Cardholders gain access to Amex Offers, which provide bonus cash back or Membership Rewards points with select merchants. These offers can be stacked with Rakuten portal offers for additional savings.`,

    "No Foreign Transaction Fees": `If a purchase is made in a foreign currency, the credit card network (American Express) will convert the amount to U.S. dollars. A currency conversion fee may apply per the card network's procedures. Check your Cardholder Agreement for specific details.`,

    "Membership Rewards / Bilt Points Option": `Cash back earned with this card can be converted to Amex Membership Rewards points or Bilt Rewards points (at a rate of 100 points per $1 of cash back). This adds transfer partner versatility for travel rewards including airline and hotel partners.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "$100 Welcome Bonus", desc: "$100 cash back or 10,000 MR/Bilt points after meeting spend requirement in the first 90 days. Points can be worth more than 1cpp via transfer partners.", min: 0, max: 200, default: 150, firstYearOnly: true, comment: "10,000 points at 1.5cpp = $150. Adjust based on your expected redemption value." },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "4 pts/$1 on Rakuten Purchases", desc: "4 pts/$1 on eligible Rakuten purchases (online or in-store), up to $10,000/year spend cap (max $400/year). Estimate annual dollar value earned.", min: 0, max: 800, default: 50, comment: "Stacks on top of Rakuten portal rewards. After $10,000 in Rakuten spend, drops to 1 pt/$1. Points convertible to Amex MR or Bilt." },
    { name: "Extra 5 pts/$1 at Rakuten Restaurant Partners", desc: "Extra 5 pts/$1 at Rakuten restaurant partners (stacks with standard portal rewards). Estimate annual dollar value earned.", min: 0, max: 200, default: 0, comment: "Applies only at participating Rakuten restaurant network partners." },
    { name: "2 pts/$1 on Groceries & Restaurants", desc: "2 pts/$1 at grocery stores and restaurants. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "1 pt/$1 on All Other Purchases", desc: "1 pt/$1 on all other eligible purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "Amex Offers", desc: "Targeted offers for bonus cash back or points at select merchants. Estimate annual dollar value earned.", min: 0, max: 200, default: 0 },

    // Purchase Protection
    { section: "Purchase & Warranty Protection", name: "Purchase Protection", desc: "90-day coverage against theft or damage on eligible purchases", min: 0, max: 100, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends eligible manufacturer warranties by up to 12 months", min: 0, max: 100, default: 0 },

    // Other
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No foreign transaction fees charged by the card issuer. Estimate annual savings.", min: 0, max: 100, default: 0, comment: "Currency conversion is handled by the Amex network. No additional fee is charged by the issuer." },
  ];

  const card = {
    id: 'rakuten-amex',
    detailUrl: 'rakuten-amex.html',
    name: 'Rakuten American Express Card',
    issuer: 'First Electronic Bank / Imprint',
    network: 'American Express',
    type: 'Personal',
    categories: ['Points', 'No Annual Fee', 'Shopping Rewards'],
    annualFee: 0,
    signOnBonusLabel: '$100 / 10,000 pts',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
