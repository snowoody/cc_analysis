// Chase United Club Infinite Card data
(function() {
  const terms = {
    "Up to 100,000 Bonus Miles": `Welcome Offer: Earn 90,000 bonus miles and 3,000 Premier Qualifying Points (PQP) after you spend $5,000 on purchases in the first 3 months from account opening. Plus, earn 10,000 bonus miles after adding an authorized user to your account.

Total sign-on value up to 100,000 bonus miles + 3,000 PQP. The authorized user must make a purchase within the first 3 months.

United MileagePlus miles can be redeemed for United flights, Star Alliance partner flights, upgrades, hotel stays, car rentals, merchandise, and gift cards. Best value is typically on United saver award flights. Miles do not expire as long as MileagePlus account has qualifying activity within 18 months.

Not eligible if you have received a new cardmember bonus for this product in the past 24 months.`,

    "United Club Membership": `United Club Membership: Full United Club airport lounge membership is included with your card at no additional cost (normally $750/year for purchased memberships or $650/year for MileagePlus members).

Access to 50+ United Club locations worldwide, plus Star Alliance partner lounges on international itineraries. Membership includes:
- Complimentary snacks, beverages, and premium cocktails
- Wi-Fi access
- Comfortable seating and workspace areas
- Flight assistance from United representatives
- Shower facilities at select locations

Membership is active as long as the card account is open and in good standing. Two complimentary one-time passes issued annually for guests or when traveling without the card. Additional guests may be admitted for a fee.`,

    "$200 United Travel Credit": `United TravelBank Credit: Receive $200 in United TravelBank cash each card anniversary year. The credit is automatically deposited into your United TravelBank account.

TravelBank cash can be used to pay for United and United Express flights. It cannot be used for upgrades, baggage fees, inflight purchases, or partner airline bookings. TravelBank cash expires 24 months from issue date if not used.

The $200 credit posts within 6-8 weeks of your account anniversary date. Account must be open and in good standing at time of credit fulfillment.`,

    "$200 Renowned Hotels Credit": `Renowned Hotels Credit: Earn up to $200 back per calendar year as a statement credit on prepaid Renowned Hotels stays booked through united.com.

Qualifying purchases are prepaid hotel reservations made through the Renowned Hotels collection on united.com. Statement credit posts within 1-2 billing cycles of the qualifying purchase. The $200 cap resets each calendar year.

Renowned Hotels properties offer additional on-property benefits including room upgrades when available, complimentary breakfast, early check-in/late checkout, and resort or spa credits (varies by property).`,

    "$100 Rideshare Credit": `Rideshare Credit: Earn up to $100 back per calendar year on rideshare purchases. Monthly caps apply: up to $8 back per month January through November, and up to $12 back in December.

Qualifying purchases include Uber, Lyft, and other rideshare services coded under merchant category code 4121. Statement credits post within 1-2 billing cycles. Annual opt-in through chase.com or the Chase Mobile app is required each calendar year.

Credits reset each calendar year. Unused monthly credits do not roll over to subsequent months.`,

    "$100 JSX Credit": `JSX Credit: Earn up to $100 back per calendar year on JSX purchases made with your United Club Infinite card.

JSX is a semi-private air carrier operating hop-on jet service between select cities. Qualifying purchases are flights booked directly through JSX. Statement credit posts within 1-2 billing cycles.

Credit resets each calendar year.`,

    "$80 Avis/Budget Car Rental Credit": `Avis/Budget Car Rental Credit: Receive $40 in United TravelBank cash after your 1st qualifying Avis or Budget car rental, and another $40 after your 2nd qualifying rental each calendar year (up to $80/year total).

Qualifying rentals must be booked through Avis or Budget and paid with your United Club Infinite card. TravelBank cash posts within 6-8 weeks of the qualifying rental completion. Resets each calendar year.`,

    "$180 Instacart Credits": `Instacart Credits: Receive $10 in statement credit for the first Instacart order each month, plus $5 for a second order each month, for up to $180 per year through 12/31/2027.

Additionally, receive a complimentary 3-month Instacart+ membership trial, followed by 50% off the standard Instacart+ annual membership ($49/year instead of $99/year) for the duration of your cardmembership through 12/31/2027.

Qualifying purchases must be made on Instacart.com or the Instacart app with your United Club Infinite card. Statement credits post within 1-2 billing cycles. Monthly credits do not roll over.`,

    "11x Miles on United Flights": `11x Total Miles on United Flights: Earn 11 miles per dollar spent on eligible United Airlines purchases. This consists of 6x miles earned through your MileagePlus frequent flyer account (base earning) plus 5x bonus miles from the card.

Eligible purchases include United and United Express flight tickets purchased directly from United. Excludes award ticket taxes/fees, United TravelBank purchases, and United Club purchases. Miles post after the transaction posts to your card account.`,

    "4x Miles on Other United Purchases": `4x Miles on Other United Purchases: Earn 4 miles per dollar on other United purchases including seat upgrades, Economy Plus purchases, inflight food and beverages, checked baggage fees, and other ancillary United services.

Qualifying purchases must be coded to United Airlines merchant category. Award ticket taxes and fees typically qualify at this rate.`,

    "2x Miles on Dining": `2x Miles on Dining: Earn 2 miles per dollar spent at restaurants including sit-down restaurants, fast food, cafes, bars, and lounges.

Qualifying purchases are determined by merchant category code (MCC 5812, 5813, 5814). Some restaurants may not be coded correctly and may earn at the base 1x rate. Delivery services like DoorDash or UberEats typically qualify.`,

    "2x Miles on Travel": `2x Miles on Travel: Earn 2 miles per dollar spent on all other travel purchases not already earning at a higher rate.

Qualifying travel includes airlines (non-United), hotels, car rentals, cruise lines, travel agencies, trains, buses, taxis, limousines, tolls, parking, and campgrounds. Purchases must be coded under travel-related merchant category codes.`,

    "1x Miles on All Other Purchases": `1x Miles on All Other Purchases: Earn 1 mile per dollar spent on all other purchases that do not qualify for a bonus category.

Miles are earned on net purchases (purchases minus returns/credits). Cash advances, balance transfers, account fees, and interest charges do not earn miles.`,

    "Free First & Second Checked Bags": `Free Checked Bags: The primary cardmember and one companion on the same reservation receive their first and second checked bags free on United and United Express flights.

Bags must meet United's standard size/weight requirements (50 lbs, 62 linear inches for domestic). Saves up to $40 per bag each way ($70 for second bag on some routes). Potential savings of up to $360 per roundtrip for two travelers checking two bags each.

Companion must be on the same reservation (PNR) as the primary cardmember. Benefit applies automatically when the MileagePlus number is associated with the reservation. Does not apply to Basic Economy fares for first bag on some routes.`,

    "25% Back on United Inflight Purchases": `25% Back as Statement Credit: Receive 25% back as a statement credit on eligible United inflight purchases including food, beverages, and Wi-Fi made with your card on United and United Express flights.

Also applies to premium alcoholic beverages purchased at United Club locations. Statement credit posts within 1-2 billing cycles of the qualifying purchase.`,

    "Priority Boarding": `Priority Boarding: Board United and United Express flights before general boarding as a Group 2 boarding benefit.

Priority boarding allows earlier access to overhead bin space and helps ensure a smooth boarding experience. Applies to the primary cardmember when their MileagePlus number is on the reservation. Does not apply to Basic Economy fares.`,

    "Cardmember Award Pricing": `Cardmember Award Pricing: Save 10% or more on United award flights when booking with miles. Premier members save 15% or more.

Discount applies to the miles required for award tickets on United and United Express flights. Discount is automatically applied during booking when logged into your MileagePlus account. Applies to standard and everyday award tickets. Savings vary by route, date, and cabin class.`,

    "Complimentary Premier Upgrades on Awards": `Complimentary Premier Upgrades on Awards: MileagePlus Premier members with the United Club Infinite card are eligible for complimentary upgrades on award tickets, subject to availability.

Normally, award tickets are not eligible for Premier complimentary upgrades. This card benefit extends upgrade eligibility to award bookings. Upgrades are processed based on Premier status level and availability at the airport, same as revenue ticket upgrades.`,

    "$120 Global Entry/TSA PreCheck Credit": `Global Entry / TSA PreCheck Credit: Receive a statement credit of up to $120 for Global Entry or TSA PreCheck application fees charged to your card.

One credit per account every 4 years. Global Entry application fee is $120 (includes TSA PreCheck). TSA PreCheck alone is $85. Statement credit posts within 1-2 billing cycles of the application fee being charged. Annualized value approximately $30/year.

Account must be open and in good standing at time of credit fulfillment.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: No fee on purchases made outside the United States or in a foreign currency. The standard 3% foreign transaction fee charged by most cards is waived.

Applies to all purchases made in a foreign currency or processed by a foreign merchant, regardless of whether you are physically abroad. Value depends on annual international spending volume.`,

    "Up to 18,000 PQP + 2,000 Card Bonus PQP": `Premier Qualifying Points (PQP): Earn 1 PQP for every $20 spent on purchases with your United Club Infinite card, up to 18,000 PQP per calendar year.

Additionally, receive 2,000 Card Bonus PQP automatically each calendar year, regardless of spend.

PQP contribute toward earning or maintaining MileagePlus Premier status (Silver: 4,000 PQP, Gold: 8,000 PQP, Platinum: 12,000 PQP, 1K: 18,000 PQP). Combined with flight PQP, card PQP can help you reach or maintain status faster.

Card PQP resets each calendar year. The 2,000 Card Bonus PQP posts early in the calendar year.`,

    "Auto Rental Coverage": `Auto Rental Collision Damage Waiver: PRIMARY coverage for damage due to collision or theft of a rental vehicle when you use your United Club Infinite card to reserve and pay for the entire rental.

Coverage up to $75,000 per incident. Primary coverage means it pays before your personal auto insurance, so you don't need to file a claim with your own insurer first. Decline the rental company's CDW/LDW at the counter to activate. Covers most rental vehicles (excludes exotic/antique cars, trucks, vans seating 8+, off-road vehicles). Maximum rental period of 31 consecutive days.`,

    "Trip Cancellation/Interruption Insurance": `Trip Cancellation/Interruption Insurance: If your trip is cancelled or interrupted for a covered reason, you can be reimbursed up to $10,000 per person and $20,000 per trip for prepaid, non-refundable travel expenses.

Covered reasons include sickness, injury, severe weather, and other specified events. You must use your card to purchase the travel tickets/reservations. Claims must be filed within 60 days of the covered event. Does not cover trip cancellation for non-covered reasons (e.g., change of mind, work conflicts).`,

    "Baggage Delay Insurance": `Baggage Delay Insurance: If your checked baggage is delayed more than 6 hours, you are covered for the purchase of essential items up to $100 per day for 5 days.

Essential items include clothing, toiletries, and other necessities. Original receipts required for claims. Coverage applies when the trip ticket is purchased with your card. Maximum benefit $500 per trip.`,

    "Lost Luggage Reimbursement": `Lost Luggage Reimbursement: Coverage up to $3,000 per passenger for lost, damaged, or stolen luggage and personal property when you travel via a common carrier and purchase your ticket with your card.

Covers checked and carry-on baggage. Items must be appropriately packed. Certain exclusions apply (cash, jewelry over specified limits, perishables, etc.). Claims must be filed with the carrier first; this coverage supplements carrier liability.`,

    "Purchase Protection": `Purchase Protection: Covers new purchases made with your card against damage or theft for 120 days from the date of purchase.

Coverage up to $10,000 per claim and $50,000 per account. Items must be purchased entirely with your card. Excludes motorized vehicles, land, animals, perishables, and items you damage through misuse. File claims within 120 days of the incident.`,

    "Return Protection": `Return Protection: If a store won't accept a return within 90 days of purchase, you may be eligible for reimbursement.

Coverage up to $500 per item and $1,000 per year. Item must have been purchased entirely with your card. Excludes perishables, living things, items damaged through misuse, and items not in original condition.`,

    "Extended Warranty Protection": `Extended Warranty Protection: Extends the time period of a U.S. manufacturer's warranty by an additional year, on eligible warranties of 3 years or less.

Coverage up to $10,000 per claim. Item must be purchased entirely with your card. Applies to items with a valid U.S. manufacturer's warranty. Keep original receipt and warranty documentation.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "Up to 100,000 Bonus Miles", desc: "90,000 miles + 3,000 PQP after $5,000 in 3 months + 10,000 miles for authorized user. Adjust value per mile.", min: 0, max: 3.0, default: 1.2, miles: 100000, firstYearOnly: true, comment: "United miles typically valued at 1.2-1.5¢/mile for award flights. Saver awards offer best value. Not eligible if you received this bonus in the past 24 months." },

    // Annual Credits & Perks
    { section: "Annual Credits & Perks", name: "United Club Membership", desc: "Full United Club airport lounge membership included (normally $750/yr value). Access to 50+ United Club locations worldwide.", min: 0, max: 750, default: 0, comment: "Value depends on how often you fly United and use lounges. Standalone membership costs $750/yr or $650 for MileagePlus members. Set to $0 if you rarely use lounges." },
    { name: "$200 United Travel Credit", desc: "$200 in United TravelBank cash automatically each anniversary for United/United Express flights.", min: 0, max: 200, default: 150, comment: "Easy to use if you fly United at least once per year. TravelBank cash works like a flight credit." },
    { name: "$200 Renowned Hotels Credit", desc: "Up to $200/yr back on prepaid Renowned Hotels stays.", min: 0, max: 200, default: 0, comment: "Requires booking through united.com Renowned Hotels collection. Set to $0 if you don't typically book luxury hotels through United." },
    { name: "$100 Rideshare Credit", desc: "Up to $8/mo Jan-Nov + $12 Dec ($100/yr) back on rideshare. Yearly opt-in required.", min: 0, max: 100, default: 80, comment: "Monthly caps apply. Must opt in each calendar year through Chase. Covers Uber, Lyft, and similar rideshare services." },
    { name: "$100 JSX Credit", desc: "Up to $100/yr back on JSX purchases.", min: 0, max: 100, default: 0, comment: "JSX operates semi-private hop-on jet service in limited markets. Set to $0 if JSX doesn't serve your routes." },
    { name: "$80 Avis/Budget Car Rental Credit", desc: "$40 TravelBank cash for 1st and 2nd Avis/Budget rental ($80/yr).", min: 0, max: 80, default: 0, comment: "Paid as TravelBank cash after qualifying rentals. Requires renting from Avis or Budget specifically." },
    { name: "$180 Instacart Credits", desc: "$10 + $5 per month ($180/yr) through 12/31/2027. Plus Instacart+ at 50% off after 3-month free trial.", min: 0, max: 180, default: 0, comment: "Monthly statement credits for Instacart orders. Limited-time benefit through end of 2027. Also includes discounted Instacart+ membership." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "11x Miles on United Flights", desc: "11x total miles (6x MileagePlus base + 5x card bonus) on eligible United flights.", min: 0, max: 1500, default: 0, comment: "Estimate annual value: United spend × 5 bonus miles × your value per mile. The 6x base miles are earned regardless of which card you use." },
    { name: "4x Miles on Other United Purchases", desc: "4x miles on United seat upgrades, Economy Plus, inflight, baggage fees.", min: 0, max: 200, default: 0, comment: "Covers ancillary United purchases not included in flight ticket price." },
    { name: "2x Miles on Dining", desc: "2x miles at restaurants.", min: 0, max: 300, default: 0, comment: "Includes sit-down, fast food, cafes, bars. Estimate: annual dining spend × 2 × value per mile." },
    { name: "2x Miles on Travel", desc: "2x miles on all other travel purchases.", min: 0, max: 300, default: 0, comment: "Non-United airlines, hotels, car rentals, trains, cruises, etc." },
    { name: "1x Miles on All Other Purchases", desc: "1 mile per $1 on all other purchases.", min: 0, max: 300, default: 0, comment: "Base earning on non-category spend." },

    // United Travel Perks
    { section: "United Travel Perks", name: "Free First & Second Checked Bags", desc: "Primary + 1 companion get first and second bags free on United. Worth up to $360/roundtrip.", min: 0, max: 360, default: 0, comment: "Saves $35-$70 per bag per direction. Estimate based on number of United roundtrips where you check bags." },
    { name: "25% Back on United Inflight Purchases", desc: "25% back on food, beverages, Wi-Fi on United flights and Club premium drinks.", min: 0, max: 50, default: 0, comment: "Statement credit on inflight Wi-Fi, food, drinks. Small but automatic savings." },
    { name: "Priority Boarding", desc: "Board United flights before general boarding.", min: 0, max: 50, default: 0, comment: "Group 2 boarding. Helps secure overhead bin space on full flights." },
    { name: "Cardmember Award Pricing", desc: "10%+ savings on United award flights (15%+ for Premier members).", min: 0, max: 200, default: 0, comment: "Reduces miles needed for award flights. Value depends on how many award flights you book." },
    { name: "Complimentary Premier Upgrades on Awards", desc: "Premier members get upgrade eligibility on award tickets.", min: 0, max: 200, default: 0, comment: "Only valuable if you hold Premier status and book award tickets. Upgrades are space-available." },
    { name: "$120 Global Entry/TSA PreCheck Credit", desc: "Up to $120 every 4 years (~$30/yr).", min: 0, max: 30, default: 0, comment: "One-time credit every 4 years. Annualized to ~$30/yr for Global Entry." },
    { name: "No Foreign Transaction Fees", desc: "No fees on purchases outside the U.S.", min: 0, max: 100, default: 0, comment: "Saves 3% on international purchases. Estimate based on annual foreign spend × 3%." },
    { name: "Up to 18,000 PQP + 2,000 Card Bonus PQP", desc: "1 PQP per $20 spent up to 18,000 PQP/yr + 2,000 automatic Card Bonus PQP each year.", min: 0, max: 300, default: 0, comment: "Valuable if pursuing or maintaining United Premier status. Requires $360,000/yr spend to max card PQP." },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Auto Rental Coverage", desc: "Primary coverage up to $75,000 for theft/collision.", min: 0, max: 200, default: 0, comment: "PRIMARY coverage—pays before personal insurance. Decline rental company CDW to activate." },
    { name: "Trip Cancellation/Interruption Insurance", desc: "Up to $10,000/person, $20,000/trip.", min: 0, max: 200, default: 0, comment: "Covers prepaid non-refundable travel expenses for covered cancellation reasons." },
    { name: "Baggage Delay Insurance", desc: "Up to $100/day for 5 days if delayed 6+ hours.", min: 0, max: 50, default: 0, comment: "Covers essential purchases while waiting for delayed luggage." },
    { name: "Lost Luggage Reimbursement", desc: "Up to $3,000 per traveler for lost/damaged/stolen bags.", min: 0, max: 50, default: 0, comment: "Supplements airline liability for lost/damaged luggage." },
    { name: "Purchase Protection", desc: "120-day coverage, up to $10,000 per item.", min: 0, max: 100, default: 0, comment: "Covers new purchases against damage or theft for 120 days." },
    { name: "Return Protection", desc: "Up to $500/item, $1,000/yr for items store won't accept back within 90 days.", min: 0, max: 50, default: 0, comment: "Backup return policy when merchants refuse returns within 90 days." },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year.", min: 0, max: 50, default: 0, comment: "Adds 1 year to warranties of 3 years or less on eligible items." },
  ];

  const card = {
    id: 'chase-united-club',
    detailUrl: 'chase-united-club.html',
    name: 'United Club\u2120 Infinite Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Personal',
    categories: ['Airline', 'Travel', 'Premium', 'Lounge'],
    annualFee: 695,
    signOnBonusLabel: 'Up to 100,000 miles + PQP',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
