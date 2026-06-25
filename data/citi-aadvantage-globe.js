// Citi® / AAdvantage® Globe™ Mastercard® data
(function() {
  const terms = {
    "90,000 Mile Sign-On Bonus": `Earn 90,000 American Airlines AAdvantage® bonus miles after spending $5,000 on purchases within the first 4 months of account opening. This is a limited-time offer (the standard public offer is 60,000 bonus miles).

New account bonus is not available if you have received a new account bonus for a Citi® / AAdvantage® Globe™ Mastercard® account in the past 48 months, or if you converted another Citi credit card account on which you earned a new account bonus in the last 48 months into a Citi® / AAdvantage® Globe™ Mastercard® account. Offer only available to U.S. residents (excluding Puerto Rico and the U.S. Virgin Islands) and may not be available if you leave the application page.

AAdvantage miles are commonly valued around 1.4–1.65¢ each (e.g., The Points Guy). Adjust the slider to your own per-mile value.`,

    "American Airlines Admirals Club® Passes": `Every calendar year, receive four Admirals Club® Globe™ Passes for access to nearly 50 Admirals Club® lounges (over $300 in value).

Passes are single-use day passes (4 per calendar year). Value is highest for travelers flying American Airlines through airports with Admirals Club lounges. Each walk-up day pass is typically ~$79+.`,

    "Up to $100 Annual Splurge Credit℠": `Every calendar year, earn up to $100 in statement credits on your choice of up to two of the following brands: 1stDibs, eligible AAdvantage Hotels™ bookings, Future Personal Training, and Live Nation® (exclusions apply).

You select your preferred brand(s); the credit posts as a statement credit on qualifying purchases. Enrollment/selection may be required through your Citi account. Resets each calendar year.`,

    "Up to $240 Annual Turo Credit": `Earn up to $30 in statement credits for each eligible Turo trip completed, for a total of up to $240 in statement credits annually (up to 8 qualifying trips). To qualify, link your card to your Turo account at Turo.com/Globe and pay for the trip with your card.

Value depends on whether you rent cars through Turo. Resets annually.`,

    "Up to $100 Annual Inflight Credit": `Every calendar year, earn up to $100 in statement credits on inflight purchases when you use your card on American Airlines flights. Estimate your annual value based on how often you buy food, beverages, or Wi-Fi onboard.`,

    "American Airlines Companion Certificate": `Earn an American Airlines Companion Certificate starting in your second cardmembership year, as long as your cardmembership is renewed. The certificate is good for a qualifying single round-trip main cabin domestic flight for a companion. Redeeming the certificate costs $99 for the ticketing fee, plus taxes and fees based on the itinerary.

This benefit does not apply in year 1 (it starts in your second cardmembership year). Net value is roughly the price of a domestic round-trip main cabin ticket minus the $99 ticketing fee and applicable taxes/fees.`,

    "First Checked Bag Free": `First checked bag free on domestic American Airlines itineraries for you and up to 8 companions traveling with you on the same reservation.

The primary cardmember must be on the reservation. Value depends on how many domestic AA round trips you take and how many companions travel with you. A single checked bag is typically $35–$40 each way.`,

    "Preferred Boarding": `Enjoy preferred boarding on American Airlines flights for you and up to 8 companions traveling with you on the same reservation. Helps you secure overhead bin space. Available on American Airlines-operated flights.`,

    "Global Entry® or TSA PreCheck® Credit": `Receive a statement credit, up to $120 every four years, as reimbursement for your Global Entry® or TSA PreCheck® application fee. One statement credit per account every 4 years. Annualized value: ~$30/year (Global Entry $120/4yrs) or ~$21/year (TSA PreCheck $85/4yrs).`,

    "Travel Protection Benefits": `Help protect your next trip with Enhanced Trip Cancellation and Trip Interruption, Lost or Damaged Luggage, MasterRental® Coverage (car rental), Trip Delay, and Extended Warranty and Purchase Assurance Plus. Coverage is provided through Mastercard®; terms, limits, and exclusions apply — see your Guide to Benefits.`,

    "Flight Streak™ Loyalty Point Bonus": `Earn a 5,000 Loyalty Point bonus after every four qualifying American Airlines flights (up to 15,000 additional Loyalty Points each status qualification year). Loyalty Points count toward AAdvantage® elite status, not redeemable miles. Value depends on whether you are pursuing status.`,

    "No Foreign Transaction Fees": `Pay no foreign transaction fee on purchases made outside of the United States. The typical 3% foreign transaction fee is waived. Estimate annual savings based on your international spend.`,

    "Add Authorized Users": `Add authorized user cards to your account at no additional charge and earn more AAdvantage® miles on their purchases.`,

    "Loyalty Points for Status": `Earn 1 Loyalty Point for every 1 eligible AAdvantage® mile earned from purchases. Loyalty Points count toward AAdvantage® elite status (Gold, Platinum, Platinum Pro, Executive Platinum), separate from the redeemable miles you earn. Value depends on whether you are pursuing AAdvantage status.`,

    "6 Miles on Eligible AAdvantage Hotels™": `Earn 6 AAdvantage® miles for every $1 spent on eligible AAdvantage Hotels™ bookings.`,

    "3 Miles on Eligible American Airlines Purchases": `Earn 3 AAdvantage® miles for every $1 spent on eligible American Airlines purchases.`,

    "2 Miles at Restaurants": `Earn 2 AAdvantage® miles for every $1 spent at restaurants, including takeout and delivery.`,

    "2 Miles on Rides and Rails™": `Earn 2 AAdvantage® miles for every $1 spent on eligible transit purchases, including taxis, rideshares, and public transit.`,

    "1 Mile on Other Purchases": `Earn 1 AAdvantage® mile for every $1 spent on all other purchases.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "90,000 Mile Sign-On Bonus", desc: "90,000 AAdvantage miles after spending $5,000 on purchases within the first 4 months. Adjust your value per mile.", min: 0, max: 2.5, default: 1.5, miles: 90000, firstYearOnly: true, comment: "Limited-time offer (standard is 60,000 miles). AAdvantage miles valued ~1.4–1.65¢ each. Not eligible if you've received a Globe bonus in the past 48 months." },

    // Annual Credits
    { section: "Annual Credits", name: "Up to $100 Annual Splurge Credit℠", desc: "$100 in statement credits on up to 2 of: 1stDibs, AAdvantage Hotels, Future Personal Training, Live Nation. Estimate your usable value.", min: 0, max: 100, default: 50, comment: "You choose the brand(s). Easiest to use via AAdvantage Hotels bookings. Resets each calendar year." },
    { name: "Up to $240 Annual Turo Credit", desc: "$30 statement credit per eligible Turo trip, up to $240/year (8 trips). Requires linking your card at Turo.com/Globe.", min: 0, max: 240, default: 0, comment: "Only valuable if you rent through Turo. Resets annually." },
    { name: "Up to $100 Annual Inflight Credit", desc: "$100/year in statement credits on inflight purchases on American Airlines flights. Estimate annual value.", min: 0, max: 100, default: 20 },
    { name: "Global Entry® or TSA PreCheck® Credit", desc: "$120 (GE) or $85 (TSA PreCheck) every 4 years. Annualized ~$30/yr.", min: 0, max: 30, default: 0 },

    // Travel Benefits
    { section: "Travel Benefits", name: "American Airlines Admirals Club® Passes", desc: "4 single-use Admirals Club passes per calendar year (over $300 value). Best for American Airlines flyers.", min: 0, max: 300, default: 0, comment: "4 day passes/year to nearly 50 Admirals Club lounges. Each walk-up day pass is typically ~$79+." },
    { name: "American Airlines Companion Certificate", desc: "Domestic round-trip main cabin companion certificate starting in your 2nd cardmembership year ($99 fee + taxes). Estimate net value.", min: 0, max: 300, default: 0, comment: "Does not apply in year 1 — starts in your second cardmembership year and requires renewal. Net value ≈ ticket price minus $99 and taxes/fees." },
    { name: "First Checked Bag Free", desc: "First checked bag free on domestic AA itineraries for you + up to 8 companions on the same reservation. Estimate your annual value.", min: 0, max: 400, default: 0 },
    { name: "Preferred Boarding", desc: "Board earlier on AA flights for you + up to 8 companions on the same reservation. Helps secure overhead bin space.", min: 0, max: 50, default: 0 },
    { name: "Travel Protection Benefits", desc: "Trip cancellation/interruption, lost luggage, car rental coverage, trip delay, extended warranty & purchase assurance.", min: 0, max: 150, default: 0 },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "6 Miles on Eligible AAdvantage Hotels™", desc: "6x AAdvantage miles on eligible AAdvantage Hotels bookings. Estimate annual dollar value earned (miles ~1.4¢ each).", min: 0, max: 400, default: 0 },
    { name: "3 Miles on Eligible American Airlines Purchases", desc: "3x AAdvantage miles on eligible American Airlines purchases. Estimate annual dollar value earned.", min: 0, max: 400, default: 0 },
    { name: "2 Miles at Restaurants", desc: "2x AAdvantage miles at restaurants, including takeout and delivery. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "2 Miles on Rides and Rails™", desc: "2x AAdvantage miles on transit, taxis, rideshares, and public transit. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "1 Mile on Other Purchases", desc: "1x AAdvantage mile on all other purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "Flight Streak™ Loyalty Point Bonus", desc: "5,000 Loyalty Points per 4 qualifying AA flights (up to 15,000/year). Only count if you're pursuing status.", min: 0, max: 200, default: 0, comment: "Loyalty Points are separate from redeemable miles and only matter if you're chasing AAdvantage elite status." },
    { name: "Loyalty Points for Status", desc: "1 Loyalty Point per eligible mile earned, counting toward AAdvantage elite status. Only count if you're pursuing status.", min: 0, max: 200, default: 0, comment: "Loyalty Points are separate from redeemable miles and only matter if you're chasing AAdvantage elite status." },

    // Other Benefits
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No 3% foreign transaction fee on international purchases. Estimate annual savings based on international spend.", min: 0, max: 200, default: 0 },
    { name: "Add Authorized Users", desc: "Add authorized user cards at no extra charge to earn more miles. Value depends on additional spend you route through them.", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'citi-aadvantage-globe',
    detailUrl: 'citi-aadvantage-globe.html',
    name: 'Citi® / AAdvantage® Globe™ Mastercard®',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Travel', 'Airline', 'Miles', 'Premium'],
    annualFee: 350,
    signOnBonusLabel: '90,000 miles',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
