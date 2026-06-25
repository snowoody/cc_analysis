// Citi® / AAdvantage Business™ World Elite Mastercard® data
(function() {
  const terms = {
    "65,000 Mile Sign-On Bonus": `Earn 65,000 American Airlines AAdvantage® bonus miles after you or your employees spend $4,000 on purchases within the first 4 months of account opening.

New account bonus is not available if you have received a new account bonus for a CitiBusiness® / AAdvantage® Platinum Select® or a Citi® / AAdvantage Business™ World Elite Mastercard® account in the past 48 months. Offer only available to U.S. residents (excluding Puerto Rico and the U.S. Virgin Islands) and may not be available if you leave the application page.

AAdvantage miles are commonly valued around 1.4–1.65¢ each (e.g., The Points Guy). Adjust the slider to your own per-mile value.`,

    "$99 First-Year Annual Fee Waiver": `The $99 annual fee is waived for the first 12 months of account opening. After the first year, the $99 annual fee applies each year. This waiver offsets the ongoing annual fee in year 1 only.`,

    "First Checked Bag Free": `First checked bag free on domestic American Airlines itineraries for you and up to 4 travel companions on the same reservation — savings of up to $400 per round trip. The primary cardmember must be on the reservation. A single checked bag is typically $35–$40 each way.`,

    "Preferred Boarding": `Enjoy preferred boarding on American Airlines flights so you can save time and board earlier (helps secure overhead bin space). Available on American Airlines-operated flights.`,

    "Add Employees as Authorized Users": `Earn more AAdvantage® miles with purchases made by employees on authorized user cards, and stay in control with individual spend limits. Authorized user cards are available at no additional charge.`,

    "Save 25% on Inflight Purchases": `Enjoy 25% savings on inflight Wi-Fi, food, and beverage purchases on American Airlines flights when you pay with your Citi® / AAdvantage Business™ credit card. The savings are applied as a statement credit. Estimate your annual value based on how often you buy onboard.`,

    "American Airlines Companion Certificate": `Earn an American Airlines Companion Certificate for domestic travel after you spend $30,000 or more in purchases each cardmembership year and your cardmembership is renewed. Redeeming the certificate costs $99 for the ticketing fee, plus taxes and fees.

Requires $30,000 in annual spend plus renewal. Net value is roughly the price of a qualifying domestic ticket minus the $99 ticketing fee and applicable taxes/fees.`,

    "AAdvantage Business™ Membership Benefits": `Book and manage business travel easily on aa.com. Your AAdvantage Business™ membership includes travel management tools with essential reporting capabilities, duty of care, traveler activity, expense management, and more. Businesses earn AAdvantage miles and travelers earn Loyalty Points when booking travel on aa.com.`,

    "Mastercard Special Offers": `Save money and increase everyday efficiency with special offers on business solutions available with your World Elite Mastercard®.`,

    "Business Tools": `Access online account summaries to track expenses, check your balance anytime, and use your card on the go with the Citi Mobile® App and Mobile Wallet.`,

    "No Foreign Transaction Fees": `Pay no foreign transaction fee on purchases made outside of the United States. The typical 3% foreign transaction fee is waived. Estimate annual savings based on your international spend.`,

    "Loyalty Points for Status": `Each cardmember (primary and employees) earns 1 Loyalty Point for every $1 spent on their business card purchases. Loyalty Points count toward AAdvantage® elite status, separate from the redeemable miles your business earns. Value depends on whether you are pursuing AAdvantage status.`,

    "2 Miles on Eligible American Airlines Purchases": `Earn 2 AAdvantage® miles for every $1 spent on eligible American Airlines purchases.`,

    "2 Miles at Gas Stations & Car Rentals": `Earn 2 AAdvantage® miles for every $1 spent at gas stations and car rental merchants.`,

    "2 Miles at Telecommunications Merchants": `Earn 2 AAdvantage® miles for every $1 spent at telecommunications merchants and cable and satellite providers.`,

    "1 Mile on Other Purchases": `Earn 1 AAdvantage® mile for every $1 spent on all other purchases.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "65,000 Mile Sign-On Bonus", desc: "65,000 AAdvantage miles after you or your employees spend $4,000 on purchases within the first 4 months. Adjust your value per mile.", min: 0, max: 2.5, default: 1.5, miles: 65000, firstYearOnly: true, comment: "AAdvantage miles valued ~1.4–1.65¢ each. Not eligible if you've received a CitiBusiness/AAdvantage Platinum Select or AAdvantage Business bonus in the past 48 months." },

    // Annual fee waiver (first year only)
    { name: "$99 First-Year Annual Fee Waiver", desc: "$99 annual fee waived for the first 12 months (offsets the ongoing fee in year 1).", min: 0, max: 99, default: 99, firstYearOnly: true },

    // Travel Benefits
    { section: "Travel Benefits", name: "First Checked Bag Free", desc: "First checked bag free on domestic AA itineraries for you + up to 4 companions on the same reservation. Up to $400/round trip. Estimate your annual value.", min: 0, max: 400, default: 0 },
    { name: "Preferred Boarding", desc: "Board earlier on American Airlines flights. Helps secure overhead bin space.", min: 0, max: 50, default: 0 },
    { name: "Save 25% on Inflight Purchases", desc: "25% back as a statement credit on inflight Wi-Fi, food & beverage purchases on AA flights. Estimate annual value.", min: 0, max: 75, default: 0 },
    { name: "American Airlines Companion Certificate", desc: "Domestic companion certificate after $30,000 in annual spend + renewal ($99 fee + taxes). Estimate net value.", min: 0, max: 300, default: 0, comment: "Requires $30,000 in purchases each cardmembership year plus renewal. Net value ≈ ticket price minus $99 and taxes/fees." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "2 Miles on Eligible American Airlines Purchases", desc: "2x AAdvantage miles on eligible American Airlines purchases. Estimate annual dollar value earned (miles ~1.4¢ each).", min: 0, max: 400, default: 0 },
    { name: "2 Miles at Gas Stations & Car Rentals", desc: "2x AAdvantage miles at gas stations and car rental merchants. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "2 Miles at Telecommunications Merchants", desc: "2x AAdvantage miles at telecom merchants and cable/satellite providers. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "1 Mile on Other Purchases", desc: "1x AAdvantage mile on all other purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "Loyalty Points for Status", desc: "1 Loyalty Point per $1 spent (primary + employees), counting toward AAdvantage elite status. Only count if you're pursuing status.", min: 0, max: 200, default: 0, comment: "Loyalty Points are separate from redeemable miles and only matter if you're chasing AAdvantage elite status." },

    // Other Benefits
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No 3% foreign transaction fee on international purchases. Estimate annual savings based on international spend.", min: 0, max: 200, default: 0 },
    { name: "Add Employees as Authorized Users", desc: "Free employee authorized user cards with individual spend limits to earn more miles. Value depends on employee spend.", min: 0, max: 100, default: 0 },
    { name: "AAdvantage Business™ Membership Benefits", desc: "Travel management, reporting, duty of care, and expense tools when booking on aa.com.", min: 0, max: 100, default: 0 },
    { name: "Mastercard Special Offers", desc: "Special offers on business solutions with your World Elite Mastercard.", min: 0, max: 50, default: 0 },
    { name: "Business Tools", desc: "Online account summaries, balance tracking, Citi Mobile App and Mobile Wallet access.", min: 0, max: 20, default: 0 },
  ];

  const card = {
    id: 'citi-aadvantage-business',
    detailUrl: 'citi-aadvantage-business.html',
    name: 'Citi® / AAdvantage Business™ World Elite Mastercard®',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'Business',
    categories: ['Travel', 'Airline', 'Miles', 'Business'],
    annualFee: 99,
    signOnBonusLabel: '65,000 miles',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
