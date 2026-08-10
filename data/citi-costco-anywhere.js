// Costco Anywhere Visa® Card by Citi data
(function() {
  const terms = {
    "5% Gas at Costco / 4% Other Gas & EV Charging": `Earn 5% cash back on gas purchased at Costco warehouse locations worldwide and 4% cash back on other eligible gas and electric vehicle (EV) charging purchases worldwide. The 5% and 4% earn is on a combined $7,000 per year in combined Costco gas and other eligible gas and EV charging purchases, then 1% thereafter.`,

    "3% Restaurants & Eligible Travel": `Earn 3% cash back on restaurant purchases (including cafes, bars, lounges, and fast food restaurants) and eligible travel purchases worldwide, including airfare, hotels, car rentals, travel agencies, cruise lines, and Costco Travel. However, 1% cash back is earned on purchases made at certain bakeries, department store restaurants, grocery or warehouse clubs, timeshares, campgrounds, bed & breakfasts, and for train and commuter travel.`,

    "2% Costco & Costco.com Purchases": `Earn 2% cash back on all other purchases from Costco and Costco.com.`,

    "1% All Other Purchases": `Earn 1% cash back on all other purchases anywhere Visa is accepted.`,

    "Annual Reward Certificate": `Cash back will be provided as an annual credit card reward certificate once your February billing statement closes. Certificates are redeemable for cash or merchandise, in a single transaction at any U.S. Costco Warehouse (including Puerto Rico) through December 31 of each year. _Rewards are not redeemable for cash outside of Costco warehouses or via statement credit._`,

    "Damage & Theft Purchase Protection": `Shop with more confidence — Damage & Theft Purchase Protection may cover you for repairs or a refund if purchases made with your Citi card are damaged or stolen within 120 days of purchase (90 days for New York residents). Certain terms, limitations, and exclusions apply. These benefits are underwritten by Virginia Surety Company, Inc.`,

    "Worldwide Car Rental Insurance": `Worldwide car rental insurance is included as a part of the Costco Anywhere Visa Card. Certain terms, limitations, and exclusions apply. Underwritten by Virginia Surety Company, Inc. More information will be provided in your Guide to Protection Benefits if you are approved for the card.`,

    "Travel Accident Insurance": `Travel accident insurance is included as a part of the Costco Anywhere Visa Card. Certain terms, limitations, and exclusions apply. Underwritten by Virginia Surety Company, Inc.`,

    "No Foreign Transaction Fees": `No foreign transaction fees on purchases made outside the United States.`,

    "Roadside Assistance": `Roadside assistance dispatch service is included. Certain terms, limitations, and exclusions apply. Administered by a third-party provider.`,
  };

  const benefits = [
    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "5% Gas at Costco / 4% Other Gas & EV Charging", desc: "5% at Costco gas, 4% other gas & EV charging (combined $7,000/yr cap, then 1%). Estimate annual dollar value earned.", min: 0, max: 350, default: 18, comment: "Combined cap of $7,000 spend = max $350 at 5%. Mix of Costco gas (5%) and other gas (4%) will vary." },
    { name: "3% Restaurants & Eligible Travel", desc: "3% on restaurants, airfare, hotels, car rentals, cruise lines, Costco Travel. Estimate annual dollar value earned.", min: 0, max: 600, default: 0 },
    { name: "2% Costco & Costco.com Purchases", desc: "2% on all other Costco and Costco.com purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "1% All Other Purchases", desc: "1% on all other purchases anywhere Visa is accepted. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },

    // Card Benefits
    { section: "Card Benefits", name: "No Foreign Transaction Fees", desc: "No fees on international purchases", min: 0, max: 100, default: 0 },
    { name: "Annual Reward Certificate", desc: "All rewards paid once/year in February as a certificate redeemable at Costco warehouses", min: 0, max: 0, default: 0, comment: "Not a benefit per se — this is the only redemption method. No statement credit or direct deposit option. Certificate must be used in one transaction at a Costco warehouse." },
    { name: "Citi Entertainment", desc: "Access to presale tickets and exclusive experiences for concerts, sports, dining", min: 0, max: 50, default: 0 },
    { name: "Costco Membership ID", desc: "Card doubles as your Costco membership card", min: 0, max: 10, default: 0 },

    // Protection Benefits
    { section: "Protection Benefits", name: "Damage & Theft Purchase Protection", desc: "Covers repairs or refund if purchases are damaged or stolen within 120 days", min: 0, max: 100, default: 0 },
    { name: "Worldwide Car Rental Insurance", desc: "Coverage for rental car damage when you pay with the card", min: 0, max: 150, default: 0 },
    { name: "Travel Accident Insurance", desc: "Accidental death & dismemberment coverage on travel purchased with the card", min: 0, max: 25, default: 0 },
    { name: "Roadside Assistance", desc: "Dispatch service for roadside emergencies", min: 0, max: 25, default: 0 },
  ];

  const card = {
    id: 'citi-costco-anywhere',
    detailUrl: 'citi-costco-anywhere.html',
    name: 'Costco Anywhere Visa® Card by Citi',
    issuer: 'Citi',
    network: 'Visa',
    type: 'Personal',
    categories: ['Cash Back', 'Gas', 'Restaurants', 'No Annual Fee'],
    annualFee: 0,
    signOnBonusLabel: 'None',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
