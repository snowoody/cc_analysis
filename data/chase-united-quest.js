// Chase United Quest℠ Card data
// Used by both index.html (card directory) and chase-united-quest.html (analysis page)
(function() {
  const terms = {
    "Up to 100,000 Bonus Miles": `New Cardmember Bonus – Up to 100,000 Miles: To qualify for 60,000 bonus miles and 500 Premier Qualifying Points (PQP), you must make $4,000 in purchases during the first 3 months from account opening. You will also earn 10,000 bonus miles after adding an authorized user to your account in the first 3 months. Limited-time offers may provide higher bonus amounts. After qualifying, please allow 6 to 8 weeks for bonus to post to your United MileagePlus account. To be eligible for this bonus offer, your credit card account must be open and not in default at the time of fulfillment. Purchases are when you, or an authorized user, use a card to make purchases of products and services. However, the following types of transactions won't count as purchases: balance transfers, cash advances, cash-like transactions including, but not limited to: travelers checks, foreign currency, money orders, wire transfers, cryptocurrency, other similar digital or virtual currency and other similar transactions; lottery tickets, casino gaming chips, race track wagers, or similar offline and online betting transactions; person-to-person money transfers and account-funding transactions that transfer currency, any checks that access your account, interest, unauthorized or fraudulent charges, and fees of any kind, including an annual fee, if applicable. These miles do not count toward Premier status. If your account is not open for at least six months, United and Chase reserve the right to deduct the bonus miles from your MileagePlus account.`,

    "10x Miles on United Flights": `Earning in the Rewards Program – 10x miles on United flights: You'll earn 10 miles total for each $1 spent on airline tickets purchased directly from United (6 miles from MileagePlus base earning + 4 additional miles from your card). Other United related purchases, such as United Cruises®, United MileagePlus X, DIRECTV® and Merchandise Awards, are excluded. United tickets booked through some discount travel websites or as part of a third-party travel package will also not qualify. Buying products and services with your card, in most cases, will count as a purchase; however, the following types of transactions won't count and won't earn miles: balance transfers, cash advances and other cash-like transactions, lottery tickets, casino gaming chips, race track wagers or similar betting transactions, any checks that access your account, interest, unauthorized or fraudulent charges, and fees of any kind, including an annual fee, if applicable.`,

    "4x Miles on Other United Purchases": `Earning in the Rewards Program – 4x miles: You'll earn 4 miles total for each $1 spent on the following purchases made from United: seat upgrades; Economy Plus®; inflight food, beverages and Wi-Fi; baggage service charges or other United fees. For important information about Chase rewards categories, see chase.com/RewardsCategoryFAQs.`,

    "2x Miles on Dining": `Earning in the Rewards Program – 2x miles on dining: You'll earn 2 miles total for each $1 spent (1 additional mile on top of the 1 mile per $1 earned on each purchase) at restaurants. For important information about Chase rewards categories, see chase.com/RewardsCategoryFAQs.`,

    "2x Miles on Travel": `Earning in the Rewards Program – 2x miles on travel: You'll earn 2 miles total for each $1 spent (1 additional mile on top of the 1 mile per $1 earned on each purchase) on all other travel purchases. For important information about Chase rewards categories, see chase.com/RewardsCategoryFAQs.`,

    "2x Miles on Streaming": `Earning in the Rewards Program – 2x miles on streaming: You'll earn 2 miles total for each $1 spent (1 additional mile on top of the 1 mile per $1 earned on each purchase) on select streaming services. For important information about Chase rewards categories, see chase.com/RewardsCategoryFAQs.`,

    "5x Miles on Renowned Hotels": `Earning in the Rewards Program – 5x miles on Renowned Hotels: You'll earn 5 miles total for each $1 spent on pre-paid Renowned Hotels stays booked through the United Renowned Hotels program. To qualify, you must book and prepay using your United Quest Card directly through the Renowned Hotels platform.`,

    "1x Miles on All Other Purchases": `Earning in the Rewards Program – 1 mile: You'll earn 1 mile for each $1 spent on all other purchases. Buying products and services with your card, in most cases, will count as a purchase; however, the following types of transactions won't count and won't earn miles: balance transfers, cash advances and other cash-like transactions, lottery tickets, casino gaming chips, race track wagers or similar betting transactions, any checks that access your account, interest, unauthorized or fraudulent charges, and fees of any kind, including an annual fee, if applicable. Miles earned during a billing cycle will be automatically transferred to United after the end of each billing cycle.`,

    "$200 United Travel Credit": `$200 United Travel Credit: Receive $200 in United TravelBank cash automatically after account opening and each account anniversary. United TravelBank cash must be used for bookings on a United- or United Express®-operated flight or as otherwise permitted by United, and the reservation must be made prior to the expiration date of the credit. TravelBank cash may not be combined, transferred, extended beyond expiration date, or re-credited for miles. Unused TravelBank cash will expire 12 months after date of issue. TravelBank cash can be used alone or in combination with most other forms of payment. You can't combine TravelBank cash with travel certificates, future flight credit or miles.`,

    "10,000-Mile Award Flight Discount": `10,000-Mile Award Flight Discount: Starting with your first account anniversary and each anniversary year thereafter, receive a 10,000-mile discount on an eligible United or United Express award flight booked with your MileagePlus account. The discount will be automatically applied at checkout when booking an eligible award flight. Award flight must be booked within 12 months of the discount becoming available. To be eligible, your account must be open and not in default at the time of fulfillment.`,

    "$100 Rideshare Credit": `$100 Rideshare Statement Credit: Earn up to $8 back as a statement credit each month from January to November and up to $12 back as a statement credit in December when you pay for rideshare purchases using your United Quest Card. That means you can earn up to a maximum accumulation of $100 in statement credits each calendar year. You must enroll to receive this benefit. You will receive this benefit starting the day after enrollment, continuing each month through the end of the calendar year. Please allow 6 to 8 weeks for statement credit(s) to post to your account. Eligible purchases will qualify for this benefit the month enrollment is completed and each month thereafter. Statement credit(s) will be issued for the calendar month in which the transaction posts to your account.`,

    "$150 Renowned Hotels Credit": `$150 Renowned Hotels Statement Credit: A statement credit will automatically be applied to your account when your card is used for prepaid Renowned Hotels stays, up to a maximum accumulation of $150 annually. Annual means the year beginning with your account open date through the first statement date after your account open date anniversary, and the 12 monthly billing cycles after that each year. Please allow 6 to 8 weeks for statement credit(s) to post to your account. To qualify, you must book and prepay using your United Quest Card directly through the Renowned Hotels platform.`,

    "$150 JSX Credit": `$150 JSX Statement Credit: A statement credit will automatically be applied to your account when your card is used to make purchases directly with JSX, up to a maximum accumulation of $150 annually. Annual means the year beginning with your account open date through the first statement date after your account open date anniversary, and the 12 monthly billing cycles after that each year. Please allow 6 to 8 weeks for statement credit(s) to post to your account. Annual statement credits will be issued for the year in which the transaction posts to your account. Delays by JSX could extend the transaction posting date beyond the annual period end date and will be allocated towards the following year's annual JSX statement credit maximum of $150.`,

    "$80 Avis/Budget Car Rental Credit": `Up to $80 Avis or Budget Travel Credit: Earn $40 in United TravelBank cash on your first eligible Avis or Budget purchase and $40 in United TravelBank cash on your second eligible Avis or Budget purchase when you use your United Quest Card on Avis or Budget rental car purchases made directly through cars.united.com, up to a maximum accumulation of $80 annually. To be eligible for this offer, the Avis or Budget rental car reservation must be for a minimum of 2 days from a participating Avis/Budget location, the Primary Cardmember must include their MileagePlus® number in the reservation, and the applicable discount code must be applied. You can select "Apply discounted rates" on cars.united.com to apply the discount codes.`,

    "$180 Instacart Credits": `Receive $10 + $5 per month in the Instacart App: As a United Quest Card Primary cardmember, you can receive Instacart credits each month you have an active Instacart+ membership after you activate your complimentary Chase Instacart+ membership from the activation page through 12/31/2027. The monthly credit will be made available to you in your Instacart+ account at the beginning of each month and will only be available on that platform for the remainder of that calendar month; the monthly credit will not roll over into a subsequent month. Any unused portion of a monthly credit will not be available for future use. Limit 1 credit per order. Excludes restaurant orders powered by Uber Eats. Benefits end 12/31/27. After your complimentary Instacart+ period ends, you will be automatically enrolled at 50% off the then current annual Instacart+ Membership rate.`,

    "Free First & Second Checked Bags": `Free First & Second Checked Bags: The primary Cardmember and one traveling companion on the same reservation are each eligible to receive their first and second standard checked bags free. To receive free checked bags, the primary Cardmember must use their United Quest Card to purchase their ticket(s) and include their MileagePlus® number in their reservation. Free checked bags are only available on United- and United Express-operated flights; codeshare partner-operated flights are not eligible. Service charges for oversized, overweight and extra baggage may apply. Cardmembers who are already exempt from other checked baggage service charges will not receive additional free bags. For new primary Cardmembers, please allow 2 weeks after account opening for your free checked bags to be available on eligible United reservations.`,

    "25% Back on United Inflight Purchases": `25% back on food, beverage and Wi-Fi purchases on board United and United Express-operated flights and United Club premium drink purchases: You will receive 25% back, in the form of a credit card account statement credit, on purchases of food, beverages and Wi-Fi on board United and United Express-operated flights, and Wi-Fi subscription purchases, when you use your United Quest Card to make such purchases. You will also receive 25% back, in the form of a credit card account statement credit, on premium drink purchases at United Clubs. The statement credit will post to your account within 24 hours of your onboard purchase posting to your account.`,

    "Priority Boarding": `Priority Boarding: The primary Cardmember and companions traveling on the same reservation are eligible for priority boarding. To receive priority boarding, the primary Cardmember must include their MileagePlus® number in their reservation. Priority boarding is only available on United- and United Express-operated flights; codeshare partner-operated flights are not eligible. United Quest Cardmembers can board the plane before general boarding, after MileagePlus Premier® members, customers with Premier Access® and travelers requiring special assistance. Please allow 2 weeks after account opening for priority boarding to be available on your United reservation.`,

    "Cardmember Award Pricing": `Award Flight Pricing: Eligible primary Cardmembers will be eligible to book award flights on United® or United® Express with discounted award pricing. Cardmember award pricing is valid on award flights on United or United Express only; Cardmember award pricing does not apply to Money + Miles tickets, tickets purchased with cash, or other redemption products. Eligible primary Cardmembers without MileagePlus Premier status will be eligible to book award flights on United or United Express with at least 10% fewer miles than the base price paid by members without an eligible card, and Primary Cardmembers with MileagePlus Premier status will be eligible to book award flights on United or United Express with at least 15% fewer miles than the base price paid by members without an eligible card. To receive Award Pricing, the qualifying award reservation must be booked with the primary Cardmember's MileagePlus account.`,

    "Complimentary Premier Upgrades on Awards": `Complimentary Premier Upgrades on Award Tickets: Primary Cardmembers with MileagePlus Premier status are eligible for complimentary Premier Upgrades on award tickets, the same as on revenue tickets. This means Premier members who book award flights with their MileagePlus account can be added to the upgrade waitlist for eligible flights. Upgrade availability and eligibility are subject to the standard Premier Upgrade rules and conditions.`,

    "2 Economy Plus Upgrades (after $40K spend)": `Earn 2 global Economy Plus® seat upgrades: The Primary Cardmember will earn 2 credits that can be redeemed to upgrade an Economy seat on an eligible flight to an Economy Plus seat after making Purchases totaling $40,000 or more in a calendar year on your United Quest Card. ("Purchases" do not include balance transfers, cash advances, travelers checks, foreign currency, money orders, wire transfers or similar cash-like transactions, lottery tickets, casino gaming chips, race track wagers or similar betting transactions, any checks that access your account, interest, unauthorized or fraudulent charges, and fees of any kind, including an annual fee, if applicable.) After qualifying, please allow 6-8 weeks for the Economy Plus upgrade certificates to post to your account. Economy Plus Upgrades are valid for Primary Cardmember only and are not transferable. Economy Plus upgrades must be used within 12 months from the issue date.`,

    "$120 Global Entry/TSA PreCheck Credit": `Global Entry or TSA PreCheck® Fee Credit: You will receive a statement credit of up to $120 as reimbursement for the application fee for Global Entry (including Global Entry for different citizenship types), TSA PreCheck®, or NEXUS charged to your card. This benefit is available once every 4 years. Please allow 6-8 weeks for the statement credit to post to your account after the application fee is charged to your card.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: There is no fee for purchases made outside the United States. Foreign transactions are any transaction that you complete or a merchant completes on your card when you or the merchant are outside of the United States. "Outside of the United States" means a country (including its territories) other than the United States.`,

    "Up to 18,000 PQP + 1,000 Card Bonus PQP": `Earn Premier Qualifying Points (PQP): The primary Cardmember will earn 1 PQP for every $20 in net purchases (including purchases made by authorized users) up to a maximum of 18,000 PQP within the calendar year. Additionally, you will automatically earn 1,000 Card Bonus PQP each calendar year. PQP will apply toward Premier status tiers up to and including Premier 1K®. Qualification requirements for Premier status may vary by MileagePlus program year. To be eligible for PQP earning, account must be open and not in default.`,

    "Auto Rental Coverage": `Auto Rental Collision Damage Waiver: Your benefit provides primary coverage for damage due to collision or theft up to the actual cash value of most rental vehicles when you use your card to reserve and pay for the entire eligible vehicle rental and decline the rental company's collision damage waiver (CDW/LDW) at the time of rental. Coverage is primary and applies to vehicles with a manufacturer's suggested retail price (MSRP) of $125,000 or less. Maximum benefit is $60,000. See your Guide to Benefits for complete details, exclusions, and limitations.`,

    "Trip Cancellation/Interruption Insurance": `Trip Cancellation/Interruption Insurance: If your trip is cancelled or cut short by sickness, severe weather, and other covered situations, you can be reimbursed up to $1,500 per person and $6,000 per trip for your pre-paid, non-refundable travel expenses. You must purchase your trip with your card. Coverage applies to the cardholder, spouse or domestic partner, and dependent children. See your Guide to Benefits for complete details, exclusions, and limitations.`,

    "Baggage Delay Insurance": `Baggage Delay Insurance: If your checked baggage is delayed by 6 hours or more, you can claim up to $100 per day for 3 days to purchase essential items such as toiletries and clothing. The trip must be paid for with your card. See your Guide to Benefits for complete details, exclusions, and limitations.`,

    "Purchase Protection": `Purchase Protection: Covers eligible items purchased with your card for 120 days against damage or theft, up to $10,000 per claim. Certain items and conditions are excluded. See your Guide to Benefits for complete details, exclusions, and limitations.`,

    "Extended Warranty Protection": `Extended Warranty Protection: Extends the time period of the U.S. manufacturer's warranty by an additional year, on eligible warranties of three years or less. Coverage is limited to the original purchase price of the item, up to $10,000. See your Guide to Benefits for complete details, exclusions, and limitations.`,
  };

  const benefits = [
    // Sign-on Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "Up to 100,000 Bonus Miles", desc: "60,000 miles + 500 PQP after $4,000 in 3 months, plus 10,000 miles for authorized user. Limited-time offers may be higher. Adjust value per mile.", min: 0, max: 3.0, default: 1.2, miles: 100000, firstYearOnly: true },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "10x Miles on United Flights", desc: "10x total miles (6x MileagePlus base + 4x card bonus) on eligible United flights.", min: 0, max: 1000, default: 0 },
    { name: "4x Miles on Other United Purchases", desc: "4x miles on United seat upgrades, Economy Plus, inflight, baggage fees.", min: 0, max: 200, default: 0 },
    { name: "2x Miles on Dining", desc: "2x miles at restaurants.", min: 0, max: 300, default: 0 },
    { name: "2x Miles on Travel", desc: "2x miles on all other travel purchases.", min: 0, max: 300, default: 0 },
    { name: "2x Miles on Streaming", desc: "2x miles on select streaming services.", min: 0, max: 50, default: 0 },
    { name: "5x Miles on Renowned Hotels", desc: "5x miles on pre-paid Renowned Hotels stays.", min: 0, max: 300, default: 0 },
    { name: "1x Miles on All Other Purchases", desc: "1 mile per $1 on all other purchases.", min: 0, max: 300, default: 0 },

    // Annual Credits & Perks
    { section: "Annual Credits & Perks", name: "$200 United Travel Credit", desc: "$200 in United TravelBank cash automatically after account opening and each anniversary. For United/United Express flights.", min: 0, max: 200, default: 150 },
    { name: "10,000-Mile Award Flight Discount", desc: "Annual 10,000-mile discount on an eligible award flight starting with first anniversary.", min: 0, max: 200, default: 0 },
    { name: "$100 Rideshare Credit", desc: "Up to $8/mo Jan-Nov + $12 Dec ($100/yr) back on rideshare. Yearly opt-in required.", min: 0, max: 100, default: 80 },
    { name: "$150 Renowned Hotels Credit", desc: "Up to $150/yr back on prepaid Renowned Hotels stays.", min: 0, max: 150, default: 0 },
    { name: "$150 JSX Credit", desc: "Up to $150/yr back on JSX flight purchases.", min: 0, max: 150, default: 0 },
    { name: "$80 Avis/Budget Car Rental Credit", desc: "$40 United TravelBank cash for 1st and 2nd rental via cars.united.com ($80/yr).", min: 0, max: 80, default: 0 },
    { name: "$180 Instacart Credits", desc: "$10 + $5 per month Instacart credits ($180/yr) through 12/31/2027. Plus 3-month Instacart+ at 50% off after.", min: 0, max: 180, default: 0 },

    // United Travel Perks
    { section: "United Travel Perks", name: "Free First & Second Checked Bags", desc: "Primary + 1 companion get first and second bags free on United. Worth up to $360/roundtrip.", min: 0, max: 360, default: 0 },
    { name: "25% Back on United Inflight Purchases", desc: "25% back on food, beverages, Wi-Fi on United flights and Club premium drinks.", min: 0, max: 50, default: 0 },
    { name: "Priority Boarding", desc: "Board United flights before general boarding.", min: 0, max: 50, default: 0 },
    { name: "Cardmember Award Pricing", desc: "10%+ savings on United award flights (15%+ for Premier members).", min: 0, max: 200, default: 0 },
    { name: "Complimentary Premier Upgrades on Awards", desc: "Premier members get upgrade eligibility on award tickets.", min: 0, max: 200, default: 0 },
    { name: "2 Economy Plus Upgrades (after $40K spend)", desc: "2 global Economy Plus seat upgrades after $40,000 calendar year spend.", min: 0, max: 100, default: 0 },
    { name: "$120 Global Entry/TSA PreCheck Credit", desc: "Up to $120 every 4 years (~$30/yr).", min: 0, max: 30, default: 0 },
    { name: "No Foreign Transaction Fees", desc: "No fees on purchases outside the U.S.", min: 0, max: 100, default: 0 },
    { name: "Up to 18,000 PQP + 1,000 Card Bonus PQP", desc: "1 PQP per $20 spent up to 18,000 PQP/yr + 1,000 automatic Card Bonus PQP each year.", min: 0, max: 300, default: 0 },

    // Travel & Purchase Protection
    { section: "Travel & Purchase Protection", name: "Auto Rental Coverage", desc: "Primary coverage up to $60,000 for theft/collision (vehicles MSRP ≤$125,000).", min: 0, max: 150, default: 0 },
    { name: "Trip Cancellation/Interruption Insurance", desc: "Up to $1,500/person, $6,000/trip.", min: 0, max: 100, default: 0 },
    { name: "Baggage Delay Insurance", desc: "Up to $100/day for 3 days if delayed 6+ hours.", min: 0, max: 50, default: 0 },
    { name: "Purchase Protection", desc: "120-day coverage, up to $10,000 per item.", min: 0, max: 100, default: 0 },
    { name: "Extended Warranty Protection", desc: "Extends manufacturer warranty by 1 year.", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'chase-united-quest',
    detailUrl: 'chase-united-quest.html',
    name: 'United Quest\u2120 Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'Personal',
    categories: ['Airline', 'Travel', 'Premium'],
    annualFee: 350,
    signOnBonusLabel: 'Up to 100,000 miles + 3,000 PQP',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
