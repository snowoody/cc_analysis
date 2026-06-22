// Citi Strata Elite℠ Card data
(function() {
  const terms = {
    "75,000 Point Sign-On Bonus": `Earn 75,000 bonus ThankYou® Points after spending $6,000 on purchases within the first 3 months of account opening.

New cardmembers only; subject to credit approval. Bonus ThankYou® Points are not available if you have received a new account bonus for a Citi Strata Elite℠ account in the past 48 months, or if you converted another Citi credit card account on which you earned a new account bonus in the last 48 months into a Citi Strata Elite. Offers may vary and may not be available if you leave the application page.

Reference: A limited-time elevated offer of 100,000 points (after $6,000 spend) was available in late 2025 (reported by The Points Guy). The standard public offer is 75,000 points. The Points Guy valued 75,000 ThankYou points at roughly $1,425 (≈1.9¢/point) per its October 2025 valuations. Adjust the slider to your own per-point value.`,

    "Up to $300 Annual Hotel Benefit": `Each calendar year, enjoy up to $300 off a single hotel stay of 2 nights or more (excluding taxes and fees) when booked through cititravel.com. The benefit is applied instantly at the time of booking.

Because it is a calendar-year benefit, you can potentially use it twice in your first cardmembership year (once in each calendar year). Value depends on whether you book a qualifying 2+ night hotel stay through Citi Travel.`,

    "Up to $200 Annual Splurge Credit℠": `Every calendar year, earn up to $200 in statement credits on your choice of up to 2 of the following brands: 1stDibs, American Airlines (exclusions apply), Best Buy®, Future Personal Training, and Live Nation (exclusions apply).

You select your preferred brand(s); the credit posts as a statement credit on qualifying purchases. Enrollment/selection may be required through your Citi account. Resets each calendar year.`,

    "Up to $200 Annual Blacklane® Credit": `Every calendar year, earn up to $200 in statement credits when you book with Blacklane, a premium global chauffeur service. The credit is split: up to $100 on Blacklane purchases January through June, and up to $100 July through December.

Because it is split by half-year, unused first-half credit does not roll over to the second half. Value depends on whether you use Blacklane chauffeur service.`,

    "Priority Pass™ Select Membership": `Complimentary Priority Pass™ Select membership provides access to 1,500+ airport lounges worldwide. The annual membership fee is valued at $469.

Enrollment is required. Lounge access policies, guest fees, and restaurant/dining-credit availability vary by location and are subject to Priority Pass terms. Value depends on how often you travel and use participating lounges.`,

    "American Airlines Admirals Club® Passes": `Every calendar year, receive 4 Admirals Club® Citi Strata Elite℠ Passes for access to nearly 50 Admirals Club® lounges (over $300 in value). Inside the lounges you can enjoy a selection of snacks, complimentary cocktails, personal travel assistance and more.

Passes are single-use day passes (4 per calendar year). Value is highest for travelers flying American Airlines through airports with Admirals Club lounges.`,

    "Up to $120 Global Entry® / TSA PreCheck® Credit": `Receive a statement credit, up to $120 every four years, as reimbursement for your application fee for Global Entry® or TSA PreCheck®.

One statement credit per account every 4 years, applied to the application fee charged to your card. Annualized value: ~$30/year (Global Entry $120/4yrs) or ~$21/year (TSA PreCheck $85/4yrs).`,

    "12x Points on Citi Travel Hotels, Cars & Attractions": `Earn 12 ThankYou® Points per dollar spent on Hotels, Car Rentals, and Attractions booked on cititravel.com. ThankYou Points are unlimited and do not expire while your account is open. Estimate the annual dollar value of points earned (points valued ~1¢ each for cash, more via transfer partners).`,

    "6x Points on Citi Travel Air Travel": `Earn 6 ThankYou® Points per dollar spent on Air Travel booked on cititravel.com. ThankYou Points are unlimited and do not expire while your account is open.`,

    "6x Points at Restaurants on Citi Nights℠": `Earn 6 ThankYou® Points per dollar spent at Restaurants on Citi Nights℠ purchases — Friday and Saturday from 6 PM to 6 AM ET. Purchases must be classified under the restaurant merchant category and fall within the Citi Nights window to earn the elevated rate.`,

    "3x Points at Restaurants (Other Times)": `Earn 3 ThankYou® Points per dollar spent at Restaurants at any other time (outside the Citi Nights℠ window). Purchases must be classified under the restaurant merchant category to qualify.`,

    "1.5x Points on All Other Purchases": `Earn 1.5 ThankYou® Points per dollar spent on All Other Purchases. ThankYou Points are unlimited and do not expire while your account is open and can be redeemed for travel, transfers to partners, gift cards, cash back and more.`,

    "Points Transfer to Travel Partners": `Transfer ThankYou® Points to airline and hotel loyalty programs including American Airlines, JetBlue, Virgin Atlantic, Cathay Pacific, Eva Air, Choice Hotels, The Leading Hotels of the World®, and others. There is no fee, and the minimum transfer is 1,000 points.

Transfer-partner redemptions typically yield the best per-point value. This is largely reflected if you set your per-point value above 1¢ on the sign-on bonus slider; use this only if you value transfer optionality separately.`,

    "Citigold® Relationship Credit": `Qualifying Citigold clients receive a $145 Banking Relationship Annual Credit if the primary cardmember has an open and current Citi Strata Elite℠ Card account with an assessed Annual Membership Fee.

Requires a qualifying Citigold banking relationship. Citigold Private Clients receive a $595 first-year banking relationship credit and a $145 credit each year thereafter. Only count this if you are (or plan to be) a Citigold customer.`,

    "Travel & Purchase Protections": `Help stay protected with travel insurances, including Trip Delay Protection, Enhanced Trip Cancellation and Trip Interruption Protection, Lost or Damaged Luggage, MasterRental Coverage (car rental insurance), and Extended Warranty and Purchase Assurance Plus.

Benefits are provided through Mastercard®. Coverage terms, limits, and exclusions apply — see your Guide to Benefits for details.`,

    "No Foreign Transaction Fees": `Pay no fee on purchases made outside of the United States. The typical 3% foreign transaction fee is waived. Estimate annual savings based on your international spend.`,

    "Citi Entertainment®": `Citi Entertainment® offers special access to purchase tickets to thousands of events, including presale tickets and exclusive experiences to concerts, sporting events, arts and culture experiences.`,

    "Citi® Flex Pay": `Buy now, pay later with Citi® Flex Pay. Pay over time in fixed monthly payments and continue to earn points on purchases. Available on eligible purchases of $75 or more. A monthly fee or APR may apply depending on the plan.`,

    "Free FICO® Score Access": `Get free access to your FICO® Score online to review your credit history. The score provided is based on data from one credit bureau and may differ from other scores used by lenders.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "75,000 Point Sign-On Bonus", desc: "75,000 ThankYou Points after spending $6,000 on purchases within the first 3 months. Adjust your value per point.", min: 0, max: 2.5, default: 1.5, miles: 75000, firstYearOnly: true, comment: "TPG valued these points at ~1.9¢ each (≈$1,425). 1¢/point is the floor for cash/gift cards. A limited-time 100,000-point offer was available in late 2025. Not eligible if you've received a Strata Elite bonus in the past 48 months." },

    // Annual Credits
    { section: "Annual Credits", name: "Up to $300 Annual Hotel Benefit", desc: "$300 off a 2+ night hotel stay booked via cititravel.com, once per calendar year. Estimate how much you'll actually use.", min: 0, max: 300, default: 150, comment: "Calendar-year benefit, so it may be usable twice in your first cardmembership year. Requires a qualifying 2+ night stay booked through Citi Travel." },
    { name: "Up to $200 Annual Splurge Credit℠", desc: "$200 in statement credits on up to 2 of: 1stDibs, American Airlines, Best Buy, Future Personal Training, Live Nation. Estimate your usable value.", min: 0, max: 200, default: 170, comment: "You choose the brand(s). Easiest to use if you shop Best Buy or fly American. Resets each calendar year." },
    { name: "Up to $200 Annual Blacklane® Credit", desc: "$200/year in statement credits on Blacklane chauffeur service ($100 Jan–Jun + $100 Jul–Dec). Niche unless you use premium car service.", min: 0, max: 200, default: 0, comment: "Split by half-year and does not roll over. Only valuable if you use Blacklane chauffeur service." },
    { name: "Up to $120 Global Entry® / TSA PreCheck® Credit", desc: "$120 (GE) or $85 (TSA PreCheck) every 4 years. Annualized ~$30/yr.", min: 0, max: 30, default: 0 },

    // Lounge & Travel Perks
    { section: "Lounge & Travel Perks", name: "Priority Pass™ Select Membership", desc: "Access to 1,500+ airport lounges worldwide (membership valued at $469). Estimate your personal annual value based on travel frequency.", min: 0, max: 469, default: 0, comment: "Value depends heavily on how often you travel and visit participating lounges. Frequent travelers can realize hundreds of dollars; infrequent travelers little." },
    { name: "American Airlines Admirals Club® Passes", desc: "4 single-use Admirals Club passes per calendar year (over $300 value). Best for American Airlines flyers.", min: 0, max: 300, default: 0, comment: "4 day passes/year to nearly 50 Admirals Club lounges. Each walk-up day pass is typically ~$79+." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "12x Points on Citi Travel Hotels, Cars & Attractions", desc: "12x ThankYou Points on hotels, car rentals & attractions booked on cititravel.com. Estimate annual value (points ~1¢ each).", min: 0, max: 600, default: 0 },
    { name: "6x Points on Citi Travel Air Travel", desc: "6x ThankYou Points on air travel booked on cititravel.com. Estimate annual value.", min: 0, max: 400, default: 0 },
    { name: "6x Points at Restaurants on Citi Nights℠", desc: "6x ThankYou Points at restaurants Fri & Sat 6 PM–6 AM ET. Estimate annual value.", min: 0, max: 400, default: 36 },
    { name: "3x Points at Restaurants (Other Times)", desc: "3x ThankYou Points at restaurants outside the Citi Nights window. Estimate annual value.", min: 0, max: 400, default: 0 },
    { name: "1.5x Points on All Other Purchases", desc: "1.5x ThankYou Points on everything else. Estimate annual value.", min: 0, max: 500, default: 0 },
    { name: "Points Transfer to Travel Partners", desc: "Transfer points to AA, JetBlue, Virgin Atlantic, Cathay, Choice and more. Boosts effective point value.", min: 0, max: 200, default: 0, comment: "Already factored in if you set the per-point value above 1¢ on the sign-on bonus slider. Use only if you value transfer optionality separately." },

    // Banking Relationship
    { section: "Banking Relationship", name: "Citigold® Relationship Credit", desc: "$145/year banking relationship credit for qualifying Citigold clients (Private Clients get $595 first year). Only count if you bank with Citigold.", min: 0, max: 595, default: 0, comment: "Requires a qualifying Citigold or Citigold Private Client relationship. Can dramatically reduce the effective annual fee for existing Citi banking customers." },

    // Other Benefits
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No 3% foreign transaction fee on international purchases. Estimate annual savings based on international spend.", min: 0, max: 200, default: 0 },
    { name: "Travel & Purchase Protections", desc: "Trip delay/cancellation/interruption, lost luggage, car rental coverage, extended warranty & purchase assurance", min: 0, max: 150, default: 0 },
    { name: "Citi Entertainment®", desc: "Presale and exclusive access to concerts, sports, and cultural events", min: 0, max: 100, default: 0 },
    { name: "Citi® Flex Pay", desc: "Pay over time on eligible purchases of $75+ in fixed monthly payments while still earning points", min: 0, max: 50, default: 0 },
    { name: "Free FICO® Score Access", desc: "Free access to your FICO® Score online", min: 0, max: 20, default: 0 },
  ];

  const card = {
    id: 'citi-strata-elite',
    detailUrl: 'citi-strata-elite.html',
    name: 'Citi Strata Elite℠ Card',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Travel', 'Premium', 'Points'],
    annualFee: 595,
    signOnBonusLabel: '75,000 points',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
