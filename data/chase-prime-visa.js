// Prime Visa (Amazon Prime Rewards Visa Signature Card) data
(function() {
  const terms = {
    "$200 Amazon Gift Card": `Prime members, get a $200 Amazon Gift Card (limited-time offer; normally $150) instantly loaded into your Amazon account's Gift Card Balance on approval of your credit card application. This credit card is available to you if you do not currently have an Amazon Visa or Prime Visa credit card. The Gift Card is only awarded to new cardmembers and at the time of card approval. The Gift Card cannot be used for other gift card purchases. Amazon.com Gift Cards are issued by ACI Gift Cards, Inc., a Washington company.`,

    "5% Back at Amazon & Whole Foods": `You'll earn 5% back with an eligible Prime membership for each $1 of eligible purchases made using your card account at Amazon.com (including digital downloads, Amazon.com Gift Cards, Amazon Fresh orders, Amazon Prime subscriptions, and items sold by third-party merchants through Amazon.com's marketplace), Audible.com, Whole Foods Market locations in the United States, and the participating Amazon stores and sites. 5% back equates to $0.05 for each $1 spent (5 points). Not earned on purchases made via Amazon Pay, at international Amazon retail sites, or at international Whole Foods Markets. Eligible Prime memberships only apply to Amazon.com accounts and include annual/monthly Amazon Prime subscriptions and members of their Amazon Household, Amazon Prime Fresh, Amazon Family, Amazon Prime Student and trial memberships.`,

    "5% Back on Chase Travel": `You'll earn 5% back with an eligible Prime membership for each $1 spent on purchases made using your card account through Chase Travel. 5% back is not earned on purchases made directly with travel suppliers including airline, hotel, car rentals and cruises.`,

    "2% Back at Gas, Restaurants & Transit": `You'll earn 2% back for each $1 spent in the following rewards categories: gas stations; local transit and commuting (including rideshare); restaurants. This equates to $0.02 for each $1 spent (2 points).`,

    "1% Back on All Other Purchases": `You'll earn 1% back for each $1 spent on all other purchases anywhere Visa is accepted. This equates to $0.01 for each $1 spent (1 point). Your points don't expire as long as your card account remains open.`,

    "Prime Card Bonus (10% or more)": `Eligible Prime cardmembers earn 10% back or more on a rotating selection of items and categories on Amazon.com. These are limited-time offers that change periodically.`,

    "No Foreign Transaction Fees": `You will pay no foreign transaction fees when you use your card for purchases made outside the United States.`,

    "Extended Warranty Protection": `Extends the time period of the manufacturer's U.S. warranty by an additional year, on eligible warranties of three years or less, up to four years from the date of purchase.`,

    "Purchase Protection": `Covers your eligible new purchases for 120 days from the date of purchase against damage or theft up to $500 per item. _Specific limitations apply to New York residents: coverage period is 90 days from the date of purchase._`,

    "Baggage Delay Insurance": `Reimburses you up to $100 a day for up to 3 days for essential purchases like toiletries and clothing when baggage is delayed over 6 hours.`,

    "Lost Luggage Reimbursement": `Provides reimbursement up to $3,000 per covered traveler for the cost to repair or replace checked or carry-on baggage that is lost, damaged or stolen during a covered trip. _Specific limitations apply to New York residents: additionally limited to $2,000 per bag and $10,000 for all covered travelers per trip._`,

    "Travel Accident Insurance": `When you pay for your air, bus, train or cruise transportation with your card, you are eligible to receive up to $500,000 in accidental death or dismemberment coverage.`,

    "Auto Rental Coverage": `Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage provides reimbursement for theft and collision damage for most rental vehicles. In the U.S., coverage is secondary to your personal insurance.`,

    "Roadside Assistance": `If you have a roadside emergency, call the service provider to dispatch the help you need. Roadside service fees will be billed to your card at time of dispatch.`,

    "Travel & Emergency Assistance": `If you run into a problem while traveling away from home, this benefit provides legal and medical referrals and access to other travel and emergency assistance services. (You will be responsible for the cost of any goods or services obtained.)`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "$200 Amazon Gift Card", desc: "$200 Amazon Gift Card (limited-time; normally $150) loaded instantly on approval. Requires an eligible Prime membership.", min: 0, max: 200, default: 190, firstYearOnly: true },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "5% Back at Amazon & Whole Foods", desc: "5% back at Amazon.com, Audible, and Whole Foods Market with an eligible Prime membership. Estimate annual dollar value earned.", min: 0, max: 1000, default: 30, comment: "Requires an eligible Prime membership (otherwise 3%). Unlimited, no cap. Does not include Prime membership cost — factor that in separately when comparing to the Amazon Visa." },
    { name: "5% Back on Chase Travel", desc: "5% back on travel booked through Chase Travel (with Prime). Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "2% Back at Gas, Restaurants & Transit", desc: "2% back at gas stations, restaurants, and on local transit/commuting (including rideshare). Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "1% Back on All Other Purchases", desc: "1% back on all other purchases anywhere Visa is accepted. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "Prime Card Bonus (10% or more)", desc: "10% back or more on a rotating selection of items/categories at Amazon.com (limited-time offers). Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Auto Rental Coverage", desc: "Secondary coverage in the U.S. for theft and collision damage on most rental vehicles", min: 0, max: 150, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage against damage or theft, up to $500 per item", min: 0, max: 150, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year (on warranties ≤3 years)", min: 0, max: 100, default: 0 },
    { name: "Baggage Delay Insurance", desc: "Up to $100/day for 3 days when baggage is delayed over 6 hours", min: 0, max: 100, default: 0 },
    { name: "Lost Luggage Reimbursement", desc: "Up to $3,000 per covered traveler for lost, damaged, or stolen baggage", min: 0, max: 100, default: 0 },
    { name: "Travel Accident Insurance", desc: "Up to $500,000 accidental death or dismemberment coverage on common-carrier travel", min: 0, max: 100, default: 0 },
    { name: "Roadside Assistance", desc: "Pay-per-use dispatch for roadside emergencies", min: 0, max: 50, default: 0 },
    { name: "Travel & Emergency Assistance", desc: "Legal and medical referrals and emergency assistance while traveling", min: 0, max: 50, default: 0 },

    // Other
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No fees on purchases made outside the United States. Estimate annual savings.", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'chase-prime-visa',
    detailUrl: 'chase-prime-visa.html',
    name: 'Prime Visa',
    issuer: 'Chase',
    network: 'Visa Signature',
    type: 'Personal',
    categories: ['Cash Back', 'No Annual Fee', 'No FX Fee'],
    annualFee: 0,
    signOnBonusLabel: '$200 Amazon Gift Card',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
