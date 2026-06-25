// Citi® / AAdvantage® Platinum Select® World Elite Mastercard® data
(function() {
  const terms = {
    "80,000 Mile Sign-On Bonus": `Earn 80,000 American Airlines AAdvantage® bonus miles after spending $3,500 on purchases within the first 4 months of account opening. This is a limited-time offer (the standard public offer is 50,000 bonus miles).

New account bonus is not available if you have received a new account bonus for a Citi® / AAdvantage® Platinum Select® account in the past 48 months, or if you converted another Citi credit card account on which you earned a new account bonus in the last 48 months into a Citi® / AAdvantage® Platinum Select® account. Offer only available to U.S. residents (excluding Puerto Rico and the U.S. Virgin Islands) and may not be available if you leave the application page.

AAdvantage miles are commonly valued around 1.4–1.65¢ each (e.g., The Points Guy). Adjust the slider to your own per-mile value.`,

    "$99 First-Year Annual Fee Waiver": `The $99 annual fee is waived for the first 12 months of account opening. After the first year, the $99 annual fee applies each year. This waiver offsets the ongoing annual fee in year 1 only.`,

    "First Checked Bag Free": `First checked bag free on domestic American Airlines itineraries for you and up to 4 travel companions on the same reservation — savings of up to $400 per round trip (each passenger saves on their first standard checked bag).

The primary cardmember must be on the reservation. Value depends on how many domestic AA round trips you take and how many companions travel with you. A single checked bag is typically $35–$40 each way.`,

    "Preferred Boarding": `Enjoy preferred boarding on American Airlines flights. The primary cardmember and companions on the same reservation board in an earlier group, helping you secure overhead bin space. Available on American Airlines-operated flights.`,

    "Save 25% on Inflight Purchases": `Receive 25% savings on inflight food and beverage purchases on American Airlines flights when you pay with your Citi® / AAdvantage® Platinum Select® credit card. The savings are applied as a statement credit. Estimate your annual value based on how often you buy onboard.`,

    "$125 American Airlines Flight Discount": `Earn a $125 American Airlines Flight Discount after you spend $20,000 or more in purchases during your cardmembership year and renew your credit card. The discount is provided for use on a future eligible American Airlines flight.

Requires $20,000 in annual spend plus card renewal, so it is only realistically achievable if you put significant spend on the card.`,

    "Up to $180 Turo Credit (Limited-Time)": `Special offer: earn up to $30 in statement credits for each eligible Turo trip completed from October 19, 2025 to October 18, 2026, up to $180 in statement credits total. To qualify, link your card to your Turo account at Turo.com/AAdvantagePlatinum and pay for the trip with your card.

This is a limited-time promotional benefit (up to 6 qualifying trips). Value depends on whether you rent cars through Turo during the promotion window.`,

    "No Foreign Transaction Fees": `Pay no foreign transaction fee on purchases made outside of the United States. The typical 3% foreign transaction fee is waived. Estimate annual savings based on your international spend.`,

    "Add Authorized Users": `Add authorized user cards to your account at no additional charge and earn more AAdvantage® miles on their purchases. Authorized users may also extend certain travel benefits when traveling on the same reservation.`,

    "Loyalty Points for Status": `Earn 1 Loyalty Point for every 1 eligible AAdvantage® mile earned from purchases. Loyalty Points count toward AAdvantage® elite status (Gold, Platinum, Platinum Pro, Executive Platinum), separate from the redeemable miles you earn. Value depends on whether you are pursuing AAdvantage status.`,

    "2 Miles at Restaurants": `Earn 2 AAdvantage® miles for every $1 spent at restaurants. Purchases must be classified under the restaurant merchant category to earn the bonus rate.`,

    "2 Miles at Gas Stations": `Earn 2 AAdvantage® miles for every $1 spent at gas stations. Purchases must be classified under the gas station merchant category; superstores and warehouse clubs that sell gas may not qualify.`,

    "2 Miles on Eligible American Airlines Purchases": `Earn 2 AAdvantage® miles for every $1 spent on eligible American Airlines purchases.`,

    "1 Mile on Other Purchases": `Earn 1 AAdvantage® mile for every $1 spent on all other purchases.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "80,000 Mile Sign-On Bonus", desc: "80,000 AAdvantage miles after spending $3,500 on purchases within the first 4 months. Adjust your value per mile.", min: 0, max: 2.5, default: 1.5, miles: 80000, firstYearOnly: true, comment: "Limited-time offer (standard is 50,000 miles). AAdvantage miles valued ~1.4–1.65¢ each. Not eligible if you've received a Platinum Select bonus in the past 48 months." },

    // Annual fee waiver (first year only)
    { name: "$99 First-Year Annual Fee Waiver", desc: "$99 annual fee waived for the first 12 months (offsets the ongoing fee in year 1).", min: 0, max: 99, default: 99, firstYearOnly: true },

    // Travel Benefits
    { section: "Travel Benefits", name: "First Checked Bag Free", desc: "First checked bag free on domestic AA itineraries for you + up to 4 companions on the same reservation. Up to $400/round trip. Estimate your annual value.", min: 0, max: 400, default: 0 },
    { name: "Preferred Boarding", desc: "Board earlier on American Airlines flights (you + companions on same reservation). Helps secure overhead bin space.", min: 0, max: 50, default: 0 },
    { name: "Save 25% on Inflight Purchases", desc: "25% back as a statement credit on inflight food & beverage purchases on AA flights. Estimate annual value.", min: 0, max: 75, default: 0 },
    { name: "$125 American Airlines Flight Discount", desc: "$125 AA flight discount after $20,000 in annual spend and card renewal. Only count if you'll hit the spend threshold.", min: 0, max: 125, default: 0, comment: "Requires $20,000 in purchases during your cardmembership year plus renewal." },
    { name: "Up to $180 Turo Credit (Limited-Time)", desc: "$30 statement credit per eligible Turo trip (Oct 19, 2025–Oct 18, 2026), up to $180 total. Requires linking your card at Turo.com/AAdvantagePlatinum.", min: 0, max: 180, default: 0, comment: "Limited-time promo (up to 6 qualifying trips). Only valuable if you rent through Turo during the window." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "2 Miles at Restaurants", desc: "2x AAdvantage miles at restaurants. Estimate annual dollar value earned (miles ~1.4¢ each).", min: 0, max: 300, default: 0 },
    { name: "2 Miles at Gas Stations", desc: "2x AAdvantage miles at gas stations. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "2 Miles on Eligible American Airlines Purchases", desc: "2x AAdvantage miles on eligible American Airlines purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "1 Mile on Other Purchases", desc: "1x AAdvantage mile on all other purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "Loyalty Points for Status", desc: "1 Loyalty Point per eligible mile earned, counting toward AAdvantage elite status. Only count if you're pursuing status.", min: 0, max: 200, default: 0, comment: "Loyalty Points are separate from redeemable miles and only matter if you're chasing AAdvantage elite status." },

    // Other Benefits
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No 3% foreign transaction fee on international purchases. Estimate annual savings based on international spend.", min: 0, max: 200, default: 0 },
    { name: "Add Authorized Users", desc: "Add authorized user cards at no extra charge to earn more miles. Value depends on additional spend you route through them.", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'citi-aadvantage-platinum-select',
    detailUrl: 'citi-aadvantage-platinum-select.html',
    name: 'Citi® / AAdvantage® Platinum Select® World Elite Mastercard®',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Travel', 'Airline', 'Miles'],
    annualFee: 99,
    signOnBonusLabel: '80,000 miles',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
