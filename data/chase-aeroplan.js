// The Aeroplan® Card (Chase) data
(function() {
  const terms = {
    "60,000 Point Sign-On Bonus": `Earn 60,000 bonus points after you spend $3,000 on purchases in the first 3 months after your account is open.

This product is not available to either (i) current cardmembers of the Chase Aeroplan Card, or (ii) previous cardmembers of the Chase Aeroplan Card who received a new cardmember bonus for this card within the last 24 months. "Purchases" do not include balance transfers, cash advances, fees of any kind (including the annual fee), or other cash-like transactions. After qualifying, please allow 6 to 8 weeks for bonus points to post.

Aeroplan points are commonly valued around 1.3–1.5¢ each (e.g., The Points Guy). Adjust the slider to your own per-point value.`,

    "3X Points at Grocery Stores": `You'll earn 3 points for each $1 spent on purchases made at grocery stores. Purchases must be classified under the grocery store merchant category to earn the bonus rate; superstores, warehouse clubs, and some specialty retailers may not qualify.`,

    "3X Points on Dining": `You'll earn 3 points for each $1 spent on dining at restaurants, including takeout and eligible delivery services.`,

    "3X Points on Air Canada": `You'll earn 3 points for each $1 spent on purchases made with Air Canada® directly. Purchases of gift cards; car rentals, hotel bookings, and other third-party partner products and services that can be purchased through aircanada.com; and onboard Wi-Fi are excluded. Air Canada tickets purchased through travel agencies, discount travel sites, vacation clubs, tour operators, or booked as part of a travel package offered by non-airline merchants will not qualify.`,

    "1X Points on Other Purchases": `You'll earn 1 point for each $1 spent on all other purchases. Points are automatically transferred to Aeroplan after the end of each billing cycle and won't expire as long as your card account is open.`,

    "500 Monthly Bonus Points per $2,000 Spent": `You, as the primary cardmember, will earn 500 bonus points for each $2,000 spent each calendar month on up to $6,000 in purchases (for a possible total of 1,500 bonus points each calendar month).

At ~1.4¢/point, the full 1,500 points/month (18,000 points/year) is worth roughly $250/year — but only if you put at least $6,000 of spend on the card every month.`,

    "Free First Checked Bags": `You, as the primary cardmember, and up to eight (8) other passengers traveling on the same reservation (up to a maximum of nine travelers) are each entitled to a free first checked bag up to 50 lb. Benefit only applies when checking in with Air Canada for a flight operated by Air Canada, Air Canada Rouge, or under the Air Canada Express brand.

If the first checked bag is already complimentary (e.g., due to Aeroplan Elite Status or fare purchased), there is no additional benefit. Value depends on how many Air Canada trips you take and how many companions travel with you.`,

    "Global Entry / TSA PreCheck® / NEXUS Fee Credit": `Receive one statement credit of up to $120 every four years as reimbursement for the application fee charged to your Aeroplan Card (Global Entry, TSA PreCheck®, or NEXUS). Only purchases made directly with the program or an authorized enrollment provider are eligible; third-party services are not.

Spread over 4 years this is about $30/year if you would have paid the fee anyway.`,

    "Aeroplan 25K Elite Status": `As a new cardmember, receive automatic Aeroplan 25K Status for the remainder of the calendar year your account is opened, plus the following calendar year. Maintain Aeroplan 25K Status with $15,000 in account spend during a calendar year.

This benefit is not available to current or previous cardmembers who received it within the last 60 months. Value depends on whether you fly Air Canada enough to use elite benefits (priority services, upgrades, etc.).`,

    "Upgrade to Aeroplan 35K Status": `Achieve Aeroplan 35K Status after spending $75,000 on purchases during a calendar year. Enjoy benefits such as Priority Security Clearance and upgrades to premium cabins on Air Canada operated flights.

Requires very high annual spend, so only realistically achievable if you put significant spend on the card.`,

    "Status Qualifying Credits (SQC)": `Each calendar year you are a primary cardmember you receive 5,000 Status Qualifying Credits (SQC), plus 10,000 SQC once you spend $25,000 in purchases and another 10,000 SQC once you spend $50,000 in purchases — up to 25,000 SQC combined across all Aeroplan credit cards per calendar year.

SQC are not redeemable for rewards; they only count toward Aeroplan Elite Status qualification. Only valuable if you are pursuing Aeroplan elite status.`,

    "10% Bonus on Ultimate Rewards® Transfers": `If you, as the primary cardmember, also have an eligible Chase credit card with Ultimate Rewards®, you receive a 10% bonus after transferring 50,000 or more Ultimate Rewards points in a single transaction to Aeroplan. Maximum of 25,000 bonus points per calendar year.

Only valuable if you hold a points-earning Chase card and transfer large amounts of Ultimate Rewards to Aeroplan.`,

    "Pay Yourself Back®": `Aeroplan points may be redeemed for a statement credit using Pay Yourself Back toward eligible purchases (travel, dining, grocery, gas station purchases, and even your annual fee) made with your Aeroplan card within 90 days from the purchase date. Eligible categories may change from time to time.`,

    "Preferred Pricing on Flight Rewards": `As the primary cardmember, you will often require fewer Aeroplan points to redeem for flight rewards through the Aeroplan program than members who do not hold an Aeroplan co-branded credit card. Preferred pricing applies only to flight rewards on Air Canada, not on partner airlines.`,

    "24/7 Concierge": `World Elite Mastercard Concierge can help you locate hard-to-find items or reserve a table. Call the number on the back of your card. Cardmembers are responsible for the cost of any goods or services purchased through the concierge.`,

    "No Foreign Transaction Fees": `Pay no foreign transaction fees when you use your card for purchases made outside the United States. Estimate annual savings based on your international spend.`,

    "Trip Cancellation / Interruption Insurance": `If your trip is canceled or cut short by sickness, severe weather, or other covered situations, you can be reimbursed for non-refundable passenger fares, up to the coverage limits, when you pay for the trip with your card.`,

    "Trip Delay Reimbursement": `If your common carrier travel is delayed more than a covered number of hours or requires an overnight stay, you and your family are covered for unreimbursed expenses such as meals and lodging, up to the coverage limits, when you pay with your card.`,

    "Baggage Delay Insurance": `Reimburses you for essential purchases like toiletries and clothing for baggage delays over a covered number of hours, up to the coverage limits per covered traveler.`,

    "Auto Rental Coverage": `Decline the rental company's collision insurance and charge the entire rental cost to your card to receive coverage for theft and collision damage for most rental vehicles. Coverage is secondary in the U.S.`,

    "Roadside Assistance": `If you have a roadside emergency, call the service provider to dispatch help. Service fees are billed to your card at the time of dispatch.`,

    "Purchase Protection": `Covers your eligible new purchases for 120 days against damage or theft, up to the per-claim and per-account coverage limits.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "60,000 Point Sign-On Bonus", desc: "60,000 Aeroplan bonus points after spending $3,000 on purchases in the first 3 months. Adjust your value per point.", min: 0, max: 2.5, default: 1.4, miles: 60000, firstYearOnly: true, comment: "Aeroplan points valued ~1.3–1.5¢ each. Not eligible if you've received a Chase Aeroplan bonus in the past 24 months." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "3X Points at Grocery Stores", desc: "3x Aeroplan points at grocery stores. Estimate annual dollar value earned (points ~1.4¢ each).", min: 0, max: 400, default: 0 },
    { name: "3X Points on Dining", desc: "3x Aeroplan points on dining at restaurants, including takeout and eligible delivery. Estimate annual dollar value earned.", min: 0, max: 400, default: 0 },
    { name: "3X Points on Air Canada", desc: "3x Aeroplan points on purchases made directly with Air Canada. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "1X Points on Other Purchases", desc: "1x Aeroplan point on all other purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "500 Monthly Bonus Points per $2,000 Spent", desc: "500 bonus points per $2,000 spent each calendar month, up to 1,500 points/month (18,000/year). Estimate annual dollar value.", min: 0, max: 300, default: 0, comment: "Requires up to $6,000 in monthly spend to max out the 1,500 points/month." },

    // Travel Benefits
    { section: "Travel Benefits", name: "Free First Checked Bags", desc: "Free first checked bag (up to 50 lb) for you + up to 8 companions on the same reservation on Air Canada-operated flights. Estimate your annual value.", min: 0, max: 400, default: 0 },
    { name: "Aeroplan 25K Elite Status", desc: "Automatic Aeroplan 25K Status as a new cardmember (plus the following year); maintain with $15,000 annual spend. Only count if you fly Air Canada.", min: 0, max: 300, default: 0, comment: "Not available if you received this benefit within the last 60 months." },
    { name: "Preferred Pricing on Flight Rewards", desc: "Often book Air Canada flight rewards for fewer Aeroplan points as the primary cardmember. Estimate annual value.", min: 0, max: 200, default: 0 },
    { name: "Global Entry / TSA PreCheck® / NEXUS Fee Credit", desc: "Up to $120 statement credit every 4 years for application fees (~$30/year). Only count if you'd pay the fee anyway.", min: 0, max: 30, default: 0 },
    { name: "24/7 Concierge", desc: "World Elite Mastercard concierge for reservations and hard-to-find items. Estimate annual value.", min: 0, max: 50, default: 0 },

    // Elite Status Acceleration
    { section: "Elite Status Acceleration", name: "Upgrade to Aeroplan 35K Status", desc: "Aeroplan 35K Status after $75,000 in annual purchases (priority security, premium cabin upgrades). Only count if you'll hit the spend threshold.", min: 0, max: 300, default: 0, comment: "Requires $75,000 in purchases during a calendar year." },
    { name: "Status Qualifying Credits (SQC)", desc: "5,000 SQC/year, plus 10,000 SQC at $25k spend and another 10,000 at $50k spend (up to 25,000 SQC). Only count if pursuing Aeroplan status.", min: 0, max: 200, default: 0, comment: "SQC only count toward elite status qualification, not redeemable for rewards." },

    // Other Benefits
    { section: "Other Benefits", name: "10% Bonus on Ultimate Rewards® Transfers", desc: "10% bonus when transferring 50,000+ Ultimate Rewards points in one transaction to Aeroplan (max 25,000 bonus points/year). Only count if you hold a UR-earning Chase card.", min: 0, max: 200, default: 75 },
    { name: "Pay Yourself Back®", desc: "Redeem Aeroplan points for statement credits toward travel, dining, grocery, gas, and even the annual fee. Estimate annual value.", min: 0, max: 200, default: 0 },
    { name: "No Foreign Transaction Fees", desc: "No foreign transaction fees on purchases made outside the U.S. Estimate annual savings based on international spend.", min: 0, max: 200, default: 0 },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Trip Cancellation / Interruption Insurance", desc: "Reimburses non-refundable fares when a trip is canceled or cut short for a covered reason. Estimate annual value.", min: 0, max: 150, default: 0 },
    { name: "Trip Delay Reimbursement", desc: "Reimburses meals and lodging for covered common-carrier delays. Estimate annual value.", min: 0, max: 100, default: 0 },
    { name: "Baggage Delay Insurance", desc: "Reimburses essential purchases when baggage is delayed beyond a covered period. Estimate annual value.", min: 0, max: 100, default: 0 },
    { name: "Auto Rental Coverage", desc: "Secondary coverage in the U.S. for theft and collision damage on most rental vehicles.", min: 0, max: 150, default: 0 },
    { name: "Roadside Assistance", desc: "Pay-per-use dispatch for roadside emergencies.", min: 0, max: 50, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage against damage or theft on eligible new purchases.", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'chase-aeroplan',
    detailUrl: 'chase-aeroplan.html',
    name: 'The Aeroplan® Card',
    issuer: 'Chase',
    network: 'World Elite Mastercard',
    type: 'Personal',
    categories: ['Travel', 'Airline', 'Points'],
    annualFee: 95,
    signOnBonusLabel: '60,000 points',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
