// Wells Fargo Autograph Journey Visa Signature Card data
(function() {
  const terms = {
    "Sign-On Bonus": `Earn 60,000 bonus points when you spend $4,000 in purchases in the first 3 months from account opening – that's $600 toward your next trip. Points are redeemable for travel, gift cards, statement credits, and transfers to select travel loyalty partners. Bonus points are typically posted 1-2 billing cycles after the qualifying spend requirement is met. Offers may differ from time to time and depend on the marketing channel.`,

    "5X Points on Hotels": `Earn 5X points on hotels when booked directly with the hotel or through a travel provider. Spend is categorized by merchant category code; stays booked through third-party travel sites that do not code as hotels may not qualify.`,

    "4X Points on Airlines": `Earn 4X points on airfare purchased directly from the airline. Purchases must be classified as airline merchants to qualify; travel agencies and online travel bookings may code as general travel (3X) rather than airlines.`,

    "3X Points on Other Travel & Dining": `Earn 3X points on restaurants and other travel. Other travel includes car rentals, taxis, rideshare, trains, cruises, tolls, parking, and transit. Dining includes restaurants, bars, and fast food. Categorization is based on the merchant category code.`,

    "1X Points on Other Purchases": `Earn 1X points on all other eligible net purchases.`,

    "$50 Annual Airline Statement Credit": `Receive a $50 annual statement credit after making a minimum $50 airline purchase with your card each year. The credit is applied automatically after a qualifying purchase posts. The credit resets each cardmember year.`,

    "No Foreign Transaction Fees": `Using your card abroad is like using it at home. Wells Fargo won't charge a fee for converting your purchases to U.S. dollars.`,

    "Rewards Points Transfer": `Transfer your points directly to select airline and hotel travel loyalty programs, in any amount. Points never expire as long as your account is open.`,

    "Worldwide Common Carrier Travel Accident Insurance": `Get Travel Accident Insurance protection of up to $1,000,000 when you purchase your airline or other common carrier ticket with your eligible card. Certain terms, conditions and exclusions apply.`,

    "Lost Baggage Reimbursement": `Receive up to $3,000 in luggage reimbursement per trip if your bags are lost due to theft or misdirection by a common carrier while traveling. Certain terms, conditions and exclusions apply.`,

    "Trip Cancellation/Interruption Protection": `Use an eligible card to pay for your trip and get reimbursed up to $15,000 for lodging, flights, and activities if the trip is canceled or interrupted for a covered reason. Certain terms, conditions and exclusions apply.`,

    "Auto Rental Collision Damage Waiver": `Pay for rental cars using an eligible card and get reimbursed for covered damage or theft. Coverage is secondary in the U.S. and may be primary abroad. Certain vehicle types and countries are excluded.`,

    "Visa Signature Concierge": `Find tickets to top sports and entertainment events, book travel, make dinner reservations and more with your complimentary 24/7 Visa Signature Concierge.`,

    "Visa Signature Luxury Hotel Collection": `Enjoy a premium collection of benefits at a selection of the world's most intriguing and prestigious properties, including room upgrades when available, complimentary in-room Wi-Fi, late checkout, and a dining or spa credit. Learn more at VisaSignatureHotels.com.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus", name: "Sign-On Bonus", desc: "60,000 bonus points after $4,000 spend in 3 months (~$600 value at 1cpp)", min: 0, max: 900, default: 600, firstYearOnly: true },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "5X Points on Hotels", desc: "5X points on hotels booked directly. Estimate annual dollar value earned.", min: 0, max: 1000, default: 0 },
    { name: "4X Points on Airlines", desc: "4X points on airfare booked directly with airlines. Estimate annual dollar value earned.", min: 0, max: 1000, default: 0 },
    { name: "3X Points on Other Travel & Dining", desc: "3X points on restaurants and other travel. Estimate annual dollar value earned.", min: 0, max: 1000, default: 0 },
    { name: "1X Points on Other Purchases", desc: "1X points on all other eligible purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },

    // Statement Credits
    { section: "Statement Credits", name: "$50 Annual Airline Statement Credit", desc: "$50 annual statement credit after a minimum $50 airline purchase", min: 0, max: 50, default: 50 },

    // Travel Benefits
    { section: "Travel Benefits", name: "No Foreign Transaction Fees", desc: "No fees on international purchases", min: 0, max: 100, default: 0 },
    { name: "Rewards Points Transfer", desc: "Transfer points to select airline and hotel partners for outsized value", min: 0, max: 300, default: 0, comment: "Transfer partners can push point value well above 1cpp, but value depends on redemption." },
    { name: "Visa Signature Concierge", desc: "Complimentary 24/7 concierge for tickets, travel, and reservations", min: 0, max: 100, default: 0 },
    { name: "Visa Signature Luxury Hotel Collection", desc: "Room upgrades, late checkout, and property credits at participating hotels", min: 0, max: 200, default: 0 },

    // Protection Benefits
    { section: "Protection Benefits", name: "Trip Cancellation/Interruption Protection", desc: "Up to $15,000 reimbursement if a trip is canceled/interrupted for a covered reason", min: 0, max: 200, default: 0 },
    { name: "Lost Baggage Reimbursement", desc: "Up to $3,000 per trip for lost luggage", min: 0, max: 100, default: 0 },
    { name: "Auto Rental Collision Damage Waiver", desc: "Reimbursement for covered rental car damage or theft", min: 0, max: 150, default: 0 },
    { name: "Worldwide Common Carrier Travel Accident Insurance", desc: "Up to $1,000,000 travel accident coverage", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'wellsfargo-autograph-journey',
    detailUrl: 'wellsfargo-autograph-journey.html',
    name: 'Wells Fargo Autograph Journey Visa Signature Card',
    issuer: 'Wells Fargo',
    network: 'Visa Signature',
    type: 'Personal',
    categories: ['Travel', 'Dining', 'Hotels', 'Airlines'],
    annualFee: 95,
    signOnBonusLabel: '60,000 pts',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
