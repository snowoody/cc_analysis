// Chase United℠ Explorer Card data
// Used by both index.html (card directory) and chase-united-explorer.html (analysis page)
(function() {
  const terms = {
    "Up to 70,000 Bonus Miles": `New Cardmember Bonus – Up to 70,000 Miles: To qualify for the 60,000-mile bonus, you must make $3,000 in purchases during the first 3 months from account opening. You will also earn 10,000 bonus miles after adding an authorized user to your account in the first 3 months. After qualifying, please allow 6 to 8 weeks for bonus to post to your United MileagePlus account. To be eligible for this bonus offer, your credit card account must be open and not in default at the time of fulfillment. Purchases are when you, or an authorized user, use a card to make purchases of products and services. However, the following types of transactions won't count as purchases: balance transfers, cash advances, cash-like transactions including, but not limited to: travelers checks, foreign currency, money orders, wire transfers, cryptocurrency, other similar digital or virtual currency and other similar transactions; lottery tickets, casino gaming chips, race track wagers, or similar offline and online betting transactions; person-to-person money transfers and account-funding transactions that transfer currency, any checks that access your account, interest, unauthorized or fraudulent charges, and fees of any kind, including an annual fee, if applicable. These miles do not count toward Premier status. If your account is not open for at least six months, United and Chase reserve the right to deduct the bonus miles from your MileagePlus account.`,

    "9x Miles on United Flights": `Earning in the Rewards Program: You'll earn miles on purchases of products and services, minus returns or refunds, made with a United℠ credit card by you or an authorized user of the account. Buying products and services with your card, in most cases, will count as a purchase; however, the following types of transactions won't count and won't earn miles: balance transfers, cash advances and other cash-like transactions, lottery tickets, casino gaming chips, race track wagers or similar betting transactions, any checks that access your account, interest, unauthorized or fraudulent charges, and fees of any kind, including an annual fee, if applicable.

9x miles total on United flights: You'll earn 9 miles total for each $1 spent on airline tickets purchased directly from United (6 miles from MileagePlus base earning + 3 additional card bonus miles). United tickets booked through some discount travel websites or as part of a third-party travel package will not qualify.`,

    "3x Miles on Other United Purchases": `3 miles: You'll earn 3 miles total for each $1 spent on the following purchases made from United: seat upgrades; Economy Plus®; inflight food, beverages and Wi-Fi; baggage service charges or other United fees. Other United related purchases, such as United Cruises®, United MileagePlus X, DIRECTV® and Merchandise Awards, are excluded.`,

    "2x Miles on Dining": `2 miles on dining: You'll earn 2 miles total for each $1 spent (1 additional mile on top of the 1 mile per $1 earned on each purchase) at restaurants. For important information about Chase rewards categories, see chase.com/RewardsCategoryFAQs.`,

    "2x Miles on Hotels": `2 miles on hotels: You'll earn 2 miles total for each $1 spent (1 additional mile on top of the 1 mile per $1 earned on each purchase) on hotel accommodations when booked directly with the hotel. Third-party booking sites may not qualify.`,

    "1x Miles on All Other Purchases": `Earning in the Rewards Program – 1 mile: You'll earn 1 mile for each $1 spent on all other purchases. Buying products and services with your card, in most cases, will count as a purchase; however, the following types of transactions won't count and won't earn miles: balance transfers, cash advances and other cash-like transactions, lottery tickets, casino gaming chips, race track wagers or similar betting transactions, any checks that access your account, interest, unauthorized or fraudulent charges, and fees of any kind, including an annual fee, if applicable.

Information about earning/transferring miles to United: Miles earned during a billing cycle will be automatically transferred to United after the end of each billing cycle.`,

    "$100 United Travel Credit": `Earn $100 United Travel Credit: Earn $100 in United TravelBank cash each calendar year after you spend $10,000 or more on purchases with your United℠ Explorer Card. United travel credits, in the form of United TravelBank cash, must be used for bookings on a United- or United Express®-operated flight or as otherwise permitted by United, and the reservation must be made prior to the expiration date of the credit. TravelBank cash may not be combined, transferred, extended beyond expiration date, or re-credited for miles. Unused TravelBank cash will expire 12 months after date of issue. TravelBank cash can be used alone or in combination with most other forms of payment. You can't combine TravelBank cash with travel certificates, future flight credit or miles.`,

    "10,000-Mile Award Flight Discount": `10,000-Mile Award Flight Discount: The primary Cardmember will earn a 10,000-mile discount on one eligible award flight after making purchases totaling $20,000 or more in a calendar year on your United℠ Explorer Card. The discount will be applied automatically to one eligible United or United Express award flight booking. After qualifying, please allow 6-8 weeks for the discount to become available. ("Purchases" do not include balance transfers, cash advances, travelers checks, foreign currency, money orders, wire transfers or similar cash-like transactions, lottery tickets, casino gaming chips, race track wagers or similar betting transactions, any checks that access your account, interest, unauthorized or fraudulent charges, and fees of any kind, including an annual fee, if applicable.)`,

    "$100 United Hotels Credit": `Up to $100 United Hotels Statement Credit: A statement credit of $50 will be automatically posted to your account for your first and second hotel stays of $50 or more when you book and prepay with your card directly through United Hotels, up to a maximum accumulation of up to $100 annually. Annual means the year beginning with your account open date through the first statement date after your account open date anniversary, and the 12 monthly billing cycles after that each year. To qualify for the statement credit, you must utilize "Pay Now" at booking. Please allow 6 to 8 weeks for statement credit(s) to post to your account.`,

    "$60 Rideshare Credit": `$60 Rideshare Statement Credit: Earn up to $5 back as a statement credit each month when you pay for rideshare purchases using your United℠ Explorer Card. That means you can earn up to a maximum accumulation of $60 in statement credits each calendar year. You must enroll to receive this benefit each calendar year. You will receive this benefit starting the day after enrollment, continuing each month through the end of the calendar year. Please allow 6 to 8 weeks for statement credit(s) to post to your account. Eligible purchases will qualify for this benefit the month enrollment is completed and each month thereafter. Statement credit(s) will be issued for the calendar month in which the transaction posts to your account.`,

    "$100 JSX Credit": `$100 JSX Statement Credit: A statement credit will automatically be applied to your account when your card is used to make purchases directly with JSX, up to a maximum accumulation of $100 annually. Annual means the year beginning with your account open date through the first statement date after your account open date anniversary, and the 12 monthly billing cycles after that each year. Please allow 6 to 8 weeks for statement credit(s) to post to your account. Annual statement credits will be issued for the year in which the transaction posts to your account.`,

    "$50 Avis/Budget Car Rental Credit": `Up to $50 Avis or Budget Travel Credit: Earn $25 in United TravelBank cash on your first eligible Avis or Budget purchase and $25 in United TravelBank cash on your second eligible Avis or Budget purchase when you use your United℠ Explorer Card on Avis or Budget rental car purchases made directly through cars.united.com, up to a maximum accumulation of $50 annually. To be eligible for this offer, the Avis or Budget rental car reservation must be for a minimum of 2 days from a participating Avis/Budget location, the Primary Cardmember must include their MileagePlus® number in the reservation, and one of the following discount codes must be applied: Avis AWD A7915000 or A7909000 or Budget BCD B2049000 or B2048000.`,

    "$120 Instacart Credits": `Receive one $10 credit per month in the Instacart App: As a United℠ Explorer Card Primary cardmember, you can receive one $10 credit in your Instacart account each month you have an active Instacart+ membership after you activate your complimentary Chase Instacart+ membership on https://www.instacart.com/p/chase-united from 3/23/2025 through 12/31/2027. The monthly credit will be made available to you in your Instacart+ account at the beginning of each month and will only be available on that platform for the remainder of that calendar month; the monthly credit will not roll over into a subsequent month. Each monthly credit is only eligible on one purchase of $10 or more made on Instacart.com with one retailer and using your United℠ Explorer Card. Benefits end 12/31/27. Also includes 3-month complimentary Instacart+ membership.`,

    "Free First Checked Bag": `Free Checked Bag: The primary Cardmember and one traveling companion on the same reservation are each eligible to receive their first standard checked bag free; authorized users are only eligible if they are on the same reservation as the primary Cardmember. To receive first standard checked bag free, the primary Cardmember must use their United℠ Explorer Card to purchase their ticket(s) (this purchase requirement is waived for flights completed during the 90 days following the account open date) and include their MileagePlus® number in their reservation. First standard checked bag free is only available on United- and United Express-operated flights; codeshare partner-operated flights are not eligible. Service charges for oversized, overweight and extra baggage may apply. Cardmembers who are already exempt from other checked baggage service charges will not receive an additional free standard checked bag.`,

    "2 United Club Passes/Year": `Anniversary United Club Passes: Two (2) United Club℠ one-time passes will be deposited into the primary Cardmember's MileagePlus Program account after account opening and every 12 months thereafter as long as the credit card account remains open. Please allow 4 weeks for your United Club passes to be deposited into your MileagePlus Program account. Each pass grants one person — either the primary Cardmember or guests accompanied by the cardmember — one-time access to a United Club location subject to United Club terms & conditions and Club access policies. Access is subject to space availability. United Club passes issued as a Cardmember benefit have no cash value, cannot be sold, gifted or transferred and cannot be replaced if lost or stolen.`,

    "25% Back on United Inflight Purchases": `25% back on food, beverage and Wi-Fi purchases on board United and United Express-operated flights and United Club premium drink purchases: You will receive 25% back, in the form of a credit card account statement credit, on purchases of food, beverages and Wi-Fi on board United and United Express-operated flights, and Wi-Fi subscription purchases, when you use your United℠ Explorer Card to make such purchases. You will also receive 25% back, in the form of a credit card account statement credit, on premium drink purchases at United Clubs. The statement credit will post to your account within 24 hours of your onboard purchase posting to your account.`,

    "Priority Boarding": `Priority Boarding: The primary Cardmember and companions traveling on the same reservation are eligible for priority boarding; authorized users are only eligible if they are on the same reservation as the primary Cardmember. To receive priority boarding, the primary Cardmember must include their MileagePlus® number in their reservation. Priority boarding is only available on United- and United Express-operated flights; codeshare partner-operated flights are not eligible. United℠ Explorer Cardmembers can board the plane before general boarding, after MileagePlus Premier® members, customers with Premier Access® and travelers requiring special assistance.`,

    "Cardmember Award Pricing": `Award Flight Pricing: Eligible primary Cardmembers will be eligible to book award flights on United® or United® Express with discounted award pricing. Cardmember award pricing is valid on award flights on United or United Express only; Cardmember award pricing does not apply to Money + Miles tickets, tickets purchased with cash, or other redemption products. Eligible primary Cardmembers without MileagePlus Premier status will be eligible to book award flights on United or United Express with at least 10% fewer miles than the base price paid by members without an eligible card, and Primary Cardmembers with MileagePlus Premier status will be eligible to book award flights on United or United Express with at least 15% fewer miles than the base price paid by members without an eligible card. To receive Award Pricing, the qualifying award reservation must be booked with the primary Cardmember's MileagePlus account.`,

    "$120 Global Entry/TSA PreCheck Credit": `Global Entry or TSA PreCheck Fee Credit: You will receive a statement credit of up to $120 as reimbursement for the application fee for Global Entry (including Global Entry issued through the U.S. Customs and Border Protection's Trusted Traveler Programs) or TSA PreCheck® (different from TSA PreCheck® Application Program) every 4 years when you use your card to apply. The statement credit will be posted to your account within 24 hours of the application fee posting to your account.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: No foreign transaction fees will be assessed on purchases made outside of the United States.`,

    "Up to 1,000 PQP": `Earn Premier Qualifying Points (PQP) ongoing: The primary Cardmember will earn 1 PQP for every $20 in net purchases (including purchases made by authorized users) up to a maximum of 1,000 PQP within the calendar year. PQP will apply toward Premier status tiers up to and including Premier 1K®. Qualification requirements for Premier status may vary by MileagePlus program year.`,

    "Auto Rental Coverage": `Auto Rental Collision Damage Waiver: Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage is primary and provides reimbursement up to the actual cash value of the vehicle for theft and collision damage for most rental cars in the U.S. and abroad. Coverage is limited to vehicles with a Manufacturer's Suggested Retail Price (MSRP) of $125,000 or less. Maximum benefit: $60,000.`,

    "Trip Cancellation/Interruption Insurance": `Trip Cancellation/Trip Interruption Insurance: If your trip is canceled or cut short by sickness, severe weather and other covered situations, you can be reimbursed up to $1,500 per person and $6,000 per trip for your pre-paid, non-refundable travel expenses, including passenger fares, tours, and hotels. Coverage is secondary to other applicable insurance.`,

    "Baggage Delay Insurance": `Baggage Delay Insurance: Reimburses you for essential purchases like toiletries and clothing for baggage delays over 6 hours by passenger carrier, up to $100 a day for 3 days.`,

    "Purchase Protection": `Purchase Protection: Covers your new purchases for 120 days against damage or theft, up to $10,000 per claim and $50,000 per account.`,

    "Extended Warranty Protection": `Extended Warranty Protection: Extends the time period of the U.S. manufacturer's warranty by an additional year, on eligible warranties of three years or less.`,
  };

  const benefits = [
    // Sign-on Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "Up to 70,000 Bonus Miles", desc: "60,000 miles after $3,000 in 3 months + 10,000 miles for adding authorized user. Adjust value per mile.", min: 0, max: 3.0, default: 1.2, miles: 70000, firstYearOnly: true },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "9x Miles on United Flights", desc: "9x total miles (6x MileagePlus base + 3x card bonus) on eligible United flights. Estimate annual miles value.", min: 0, max: 800, default: 0 },
    { name: "3x Miles on Other United Purchases", desc: "3x miles on United seat upgrades, Economy Plus, inflight, baggage fees.", min: 0, max: 200, default: 0 },
    { name: "2x Miles on Dining", desc: "2x miles at restaurants.", min: 0, max: 300, default: 0 },
    { name: "2x Miles on Hotels", desc: "2x miles on hotel stays booked directly with hotels.", min: 0, max: 200, default: 0 },
    { name: "1x Miles on All Other Purchases", desc: "1 mile per $1 on all other purchases.", min: 0, max: 300, default: 0 },

    // Annual Credits
    { section: "Annual Credits", name: "$100 United Travel Credit", desc: "$100 in United TravelBank cash after spending $10,000 in a calendar year. For United/United Express flights.", min: 0, max: 100, default: 0 },
    { name: "10,000-Mile Award Flight Discount", desc: "10,000-mile discount on eligible award flight after $20,000 spend in calendar year. Value depends on redemption.", min: 0, max: 200, default: 0 },
    { name: "$100 United Hotels Credit", desc: "$50 back on 1st and 2nd prepaid stays through United Hotels, up to $100/yr.", min: 0, max: 100, default: 0 },
    { name: "$60 Rideshare Credit", desc: "Up to $5/month back on rideshare purchases ($60/yr). Yearly opt-in required.", min: 0, max: 60, default: 0 },
    { name: "$100 JSX Credit", desc: "Up to $100/yr back on JSX flight purchases.", min: 0, max: 100, default: 0 },
    { name: "$50 Avis/Budget Car Rental Credit", desc: "$25 United TravelBank cash for 1st and 2nd Avis/Budget rental via cars.united.com ($50/yr).", min: 0, max: 50, default: 0 },
    { name: "$120 Instacart Credits", desc: "$10/month Instacart credit ($120/yr) through 12/31/2027. Plus 3-month complimentary Instacart+ membership.", min: 0, max: 120, default: 0 },

    // United Travel Perks
    { section: "United Travel Perks", name: "Free First Checked Bag", desc: "Primary cardmember + 1 companion get first bag free on United flights. Worth up to $160/roundtrip.", min: 0, max: 320, default: 0 },
    { name: "2 United Club Passes/Year", desc: "2 one-time United Club lounge passes per year (over $100 value).", min: 0, max: 100, default: 0 },
    { name: "25% Back on United Inflight Purchases", desc: "25% back on food, beverages, Wi-Fi on United flights and Club premium drinks.", min: 0, max: 50, default: 0 },
    { name: "Priority Boarding", desc: "Board United flights before general boarding. Estimate personal value.", min: 0, max: 50, default: 0 },
    { name: "Cardmember Award Pricing", desc: "10%+ savings on United award flights (15%+ for Premier members).", min: 0, max: 200, default: 0 },
    { name: "$120 Global Entry/TSA PreCheck Credit", desc: "Up to $120 every 4 years (~$30/yr) for application fee.", min: 0, max: 30, default: 0 },
    { name: "No Foreign Transaction Fees", desc: "No fees on purchases outside the U.S.", min: 0, max: 100, default: 0 },
    { name: "Up to 1,000 PQP", desc: "1 PQP per $20 spent, up to 1,000 PQP/yr toward Premier status.", min: 0, max: 100, default: 0 },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Auto Rental Coverage", desc: "Primary coverage up to $60,000 for theft/collision (vehicles MSRP ≤$125,000).", min: 0, max: 150, default: 0 },
    { name: "Trip Cancellation/Interruption Insurance", desc: "Up to $1,500/person, $6,000/trip.", min: 0, max: 100, default: 0 },
    { name: "Baggage Delay Insurance", desc: "Up to $100/day for 3 days if baggage delayed 6+ hours.", min: 0, max: 50, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage, up to $10,000 per item.", min: 0, max: 100, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year.", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'chase-united-explorer',
    detailUrl: 'chase-united-explorer.html',
    name: 'United℠ Explorer Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Personal',
    categories: ['Airline', 'Travel'],
    annualFee: 95,
    signOnBonusLabel: 'Up to 70,000 miles',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
