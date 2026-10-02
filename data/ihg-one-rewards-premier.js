// IHG One Rewards Premier Credit Card (by Chase) data
(function() {
  const terms = {
    "180,000 Bonus Points": `New Cardmember Bonus: Earn 180,000 bonus points after spending $3,000 on purchases in the first 3 months from account opening.

Additionally, earn 10,000 bonus points after adding an authorized user to your account in the first 3 months from account opening.

This credit card is not available to current cardmembers of any personal IHG One Rewards Credit Card, or previous cardmembers who received a new cardmember bonus for any personal IHG One Rewards Credit Card within the last 24 months. Points transfer to your IHG One Rewards account after each billing cycle. Allow 6–8 weeks for bonus points to post.`,

    "Anniversary Free Night (50K cap)": `Anniversary Free Night: Available each year on your account anniversary date. Valid at IHG Hotels & Resorts with a point redemption value of 50,000 points or less (one standard room night and tax only).

You can add points from your IHG One Rewards account to redeem at hotels above the 50,000-point level. Must be redeemed, and stay completed, within 12 months from date of issue. Non-transferable, no cash value. Account must be open and not in default at time of fulfillment.`,

    "Up to $100 in Annual Food & Beverage Rewards": `Up to $100 in Annual IHG Food & Beverage Rewards: Receive one $25 Food & Beverage Reward voucher each calendar quarter (Q1 Jan–Mar, Q2 Apr–Jun, Q3 Jul–Sep, Q4 Oct–Dec), up to $100 per calendar year.

Each voucher is valid only for the quarter in which it was issued and expires at the end of that quarter. Each voucher can only be used once—if charges total less than $25, the remaining value is forfeited. Eligible charges generally include food, beverage (including alcohol), and gratuities captured on the primary cardmember's room bill.

Not applicable to vending machines, third-party food deliveries, restaurants that don't allow charges to a guest room bill, gift shop purchases, or taxes. Available at all IHG brands except IHG Army Hotels and select Six Senses locations. Not available at Iberostar Beachfront Resorts, Royal Resorts by Holiday Inn Club Vacations, or InterContinental Alliance Resorts (Macau).`,

    "$100 Airline Statement Credit": `$100 Airline Statement Credit: One-time $100 statement credit per calendar year when you spend at least $250 on flight tickets booked directly with the airline, through 12/31/27.

Statement credits should post within 3 business days but may take up to 4 weeks. Credits may be reversed if the eligible purchase is returned, canceled, or modified, or if you close your account within 90 days. Account must be open and not in default at time of fulfillment.`,

    "4th Night Free on Reward Stays": `Redeem 3 Nights, Get 4th Night Free: For standard room Reward Night stays of 4 or more consecutive nights at the same property, every 4th night is free (0 points charged).

If the reservation is cancelled or you check out before the 4th night, the 4th Reward Night is forfeited and has no cash or point value. Unlimited uses per year. Does not apply to paid stays or Points & Cash bookings. Subject to room availability.`,

    "Automatic Gold Elite Status": `Automatic IHG One Rewards Gold Elite Status as long as you remain a Premier cardmember. Benefits include:
- 40% bonus points on stays
- Complimentary room upgrades (when available)
- Welcome amenity
- Late checkout (when available)

Allow 6–8 weeks after account opening for status to be applied.`,

    "Platinum Elite Status ($15K spend)": `Platinum Elite Status After $15,000 Annual Spend: Each calendar year you spend $15,000 on purchases, you qualify for IHG One Rewards Platinum Elite Status for the remainder of the qualifying year and the following calendar year.

Platinum Elite benefits include everything in Gold Elite plus:
- 60% bonus points on stays (up from 40%)
- Guaranteed room availability when booked 72 hours in advance

Allow up to 8 weeks after qualifying. Account must be open and not in default.`,

    "Diamond Elite Status ($40K spend)": `Diamond Elite Status After $40,000 Annual Spend: Each calendar year you spend $40,000 on purchases, you qualify for IHG One Rewards Diamond Elite Status for the remainder of the qualifying year and the following calendar year.

Diamond Elite benefits include everything in Platinum Elite plus:
- 100% bonus points on stays
- Guaranteed room availability when booked 24 hours in advance
- Choice of welcome amenity

Allow up to 8 weeks after qualifying. Account must be open and not in default.`,

    "15 Elite Night Credits": `15 Elite Night Credits: Receive 15 Elite Night Credits (ENC) within 6–8 weeks of opening your card. After that, 15 ENC are deposited by February 1 each calendar year. Limited to 15 ENC regardless of the number of IHG One Rewards cards linked to your account.

ENC count toward status tiers and Milestone Rewards. Account must be open and not in default at time of fulfillment.`,

    "2 Elite Night Credits per $5,000 Spent": `Earn 2 Elite Night Credits for every $5,000 spent on purchases. No cap on the number of ENC you can earn through spend. Allow 6–8 weeks for posting.

ENC count toward status tiers and Milestone Rewards.`,

    "5 Bonus ENC + 15,000 Points ($15K spend)": `$15,000 Annual Spend Benefits: After spending $15,000 each calendar year, earn Platinum Elite Status, 5 additional Elite Night Credits, and 15,000 bonus points.

The 5 ENC are in addition to the 2 ENC per $5,000 you earn through regular spend. Allow 6–8 weeks for posting. Account must be open and not in default.`,

    "30% Off IHG Points Purchases": `Save 30% on IHG One Rewards Points Purchases when you pay with your IHG One Rewards Premier card. Non-Elite Qualifying points. Non-refundable.

The 30% discount cannot be combined with any other points purchase offer. Managed by Points.com.`,

    "Earn up to 24X at IHG Hotels": `Earn up to 24X total points at IHG Hotels & Resorts:
- 10X points per $1 with the IHG One Rewards Premier Credit Card
- Up to 10X points per $1 from IHG as an IHG One Rewards member (base earning)
- Up to 4X points per $1 from IHG with Gold Elite Status (40% bonus)

Total: up to 24X points per $1 spent at IHG Hotels & Resorts.

Note: Earning rates may differ at extended-stay brands (Candlewood Suites, Staybridge Suites), IHG Army Hotels, and IHG Residence properties.`,

    "Earn 5X on Flights, Car Rentals, Dining, Grocery, Gas": `Earn 5X points per $1 on flights booked directly with airlines, car rental agencies, dining at restaurants (including takeout and eligible delivery services), grocery stores, and gas stations.

Note: After 12/31/2026, the 5X travel earning narrows to only airline tickets purchased directly and car rental agencies. All other travel earns 3X after that date.`,

    "Earn 3X on All Other Purchases": `Earn 3X points per $1 on all other purchases that don't qualify for higher earning rates.

Points are earned on eligible net purchases (purchases minus credits and returns). Cash advances, balance transfers, fees, and similar transactions are not eligible.`,

    "Global Entry / TSA PreCheck / NEXUS Credit": `Global Entry, TSA PreCheck, or NEXUS Application Fee Credit: Receive a statement credit of up to $120 every four years as reimbursement for the application fee when charged to your card.

Only purchases made directly with DHS, eligible partners on ttp.cbp.dhs.gov, or authorized enrollment providers on tsa.gov/precheck are eligible. Purchases through third-party services or travel agencies are not eligible. Statement credit posts within 1–2 billing cycles.`,

    "Up to $50 United TravelBank Cash": `Up to $50 United Airlines TravelBank Cash Each Year: Receive one $25 deposit for January 1–June 30 and another $25 deposit for July 1–December 31 each calendar year, after one-time registration at ihg.com/united.

Must have a United MileagePlus account. TravelBank Cash from H1 expires July 15; from H2 expires January 15 of the following year. Subject to United TravelBank program rules.`,

    "Complimentary DashPass": `Complimentary DashPass: 12 months of complimentary DashPass when activated between 02/01/2025 and 12/31/2027. Provides $0 delivery fees and lower service fees on eligible DoorDash and Caviar orders above the minimum subtotal.

After the complimentary period, you are automatically charged the then-current monthly DashPass rate unless you cancel. Service fees, taxes, tips, and other charges still apply.`,

    "DoorDash Non-Restaurant Promo": `DoorDash Non-Restaurant Promo: Up to $10 off per month on one qualifying non-restaurant DoorDash order (groceries, everyday essentials, etc.) through 12/31/2027, while enrolled in DashPass.

For those who activated DashPass between 02/01/2025 and 08/31/2026, the discount is $10 per quarter instead. Unused monthly value does not roll over.`,

    "Up to $120 in Instacart Credits": `Instacart Credits: Receive a $10 Instacart credit monthly, up to $120 total each calendar year, for purchases made directly through Instacart with your card.

Requires an active Instacart+ membership (a 3-month complimentary membership is included). Each credit is valid only for the calendar month issued and does not roll over. Minimum $10 purchase required. Benefits end 12/31/27.`,

    "3-Month Instacart+ Membership": `3-Month Complimentary Instacart+ Membership: Includes unlimited deliveries with $0 delivery fees on eligible orders. Activate at instacart.com/p/chase-cobrands between 5/1/2025 and 12/31/2027.

After the complimentary period, you are automatically enrolled in Instacart+ at $99/year unless you cancel. Service fees and Terms apply. Benefits end 12/31/27.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: No foreign transaction fees on purchases made outside the United States. Saves the typical 3% fee charged by most cards.`,

    "Trip Cancellation / Interruption Insurance": `Trip Cancellation / Interruption Insurance: If your trip is canceled or cut short by sickness, severe weather, or other covered situations, you can be reimbursed up to $5,000 per covered traveler and $10,000 per trip for pre-paid, non-refundable travel expenses including passenger fares, tours, and hotels.

Restrictions, limitations, and exclusions apply. See Guide to Benefits for full details.`,

    "Purchase Protection": `Purchase Protection: Covers eligible new purchases for 120 days from the date of purchase against damage or theft, up to $500 per item.

For New York State residents, the coverage period is 90 days. Restrictions, limitations, and exclusions apply.`,

    "Baggage Delay Insurance": `Baggage Delay Insurance: Reimburses you up to $100 a day for up to 3 days for essential purchases like toiletries and clothing when baggage is delayed over 6 hours.

Coverage applies when the entire common carrier ticket is paid with your card. Restrictions, limitations, and exclusions apply.`,

    "Lost Luggage Reimbursement": `Lost Luggage Reimbursement: Provides reimbursement up to $3,000 per covered traveler for the cost to repair or replace checked or carry-on baggage that is lost, damaged, or stolen during a covered trip.

For New York State residents: additionally limited to $2,000 per bag and $10,000 for all covered travelers per trip. Restrictions apply.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus", name: "180,000 Bonus Points", desc: "180K IHG points after $3K spend in 3 months + 10K for adding authorized user", min: 0, max: 1500, default: 1064, firstYearOnly: true, comment: "IHG points valued at ~0.56¢/pt. 190K points ≈ $1,064." },

    // Annual IHG Benefits
    { section: "Annual IHG Benefits", name: "Anniversary Free Night (50K cap)", desc: "Free night certificate each year (50K point cap, can top up with points for higher-value hotels)", min: 0, max: 400, default: 150, comment: "50K points covers most Holiday Inn and many Crowne Plaza properties. Lower cap than the Premier Select's 60K." },
    { name: "Up to $100 in Annual Food & Beverage Rewards", desc: "$25/quarter in F&B vouchers at IHG hotels (use-it-or-lose-it each quarter)", min: 0, max: 100, default: 25, comment: "Each $25 voucher expires at end of quarter and must be used in a single transaction. Value depends on IHG stay frequency." },
    { name: "$100 Airline Statement Credit", desc: "$100 credit/year when spending $250+ on flights booked directly with an airline (through 12/31/27)", min: 0, max: 100, default: 50 },
    { name: "4th Night Free on Reward Stays", desc: "Every 4th consecutive reward night is free at the same property. Unlimited uses.", min: 0, max: 400, default: 0 },
    { name: "Automatic Gold Elite Status", desc: "Free Gold Elite: 40% point bonus, room upgrades, late checkout", min: 0, max: 150, default: 0 },
    { name: "30% Off IHG Points Purchases", desc: "Save 30% when purchasing IHG points with this card", min: 0, max: 100, default: 0 },

    // Spend Threshold Benefits
    { section: "Spend Threshold Benefits", name: "5 Bonus ENC + 15,000 Points ($15K spend)", desc: "Platinum Elite + 5 ENC + 15K bonus points after $15K annual spend", min: 0, max: 150, default: 0 },
    { name: "Diamond Elite Status ($40K spend)", desc: "Diamond Elite after $40K annual spend: 100% point bonus, better upgrades", min: 0, max: 200, default: 0 },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "Earn up to 24X at IHG Hotels", desc: "10x card + 10x base IHG + 4x Gold = 24x at IHG properties", min: 0, max: 800, default: 0 },
    { name: "Earn 5X on Flights, Car Rentals, Dining, Grocery, Gas", desc: "5x on flights booked direct, car rentals, dining, grocery, gas", min: 0, max: 500, default: 0 },
    { name: "Earn 3X on All Other Purchases", desc: "3x on all other purchases", min: 0, max: 400, default: 0 },

    // Elite Night Credits
    { section: "Elite Night Credits", name: "15 Elite Night Credits", desc: "15 ENC annually, jump-starting status tiers and Milestone Rewards", min: 0, max: 75, default: 0 },
    { name: "2 Elite Night Credits per $5,000 Spent", desc: "Earn 2 ENC for every $5K in purchases (no cap)", min: 0, max: 100, default: 0 },

    // Travel Credits
    { section: "Travel Credits", name: "Global Entry / TSA PreCheck / NEXUS Credit", desc: "Up to $120 every 4 years (~$30/yr amortized) for trusted traveler application fee", min: 0, max: 30, default: 0 },
    { name: "Up to $50 United TravelBank Cash", desc: "$25 in H1 + $25 in H2 each year for United flights. Registration required. Short expiry windows.", min: 0, max: 50, default: 0, comment: "TravelBank Cash expires quickly (mid-July for H1, mid-January for H2). Only useful if you fly United regularly." },

    // DoorDash Benefits
    { section: "DoorDash Benefits (through 12/31/27)", name: "Complimentary DashPass", desc: "12-month complimentary DashPass ($0 delivery fees on eligible orders). $120/yr value.", min: 0, max: 120, default: 0 },
    { name: "DoorDash Non-Restaurant Promo", desc: "Up to $10/month off non-restaurant DoorDash orders (groceries, essentials). Up to $120/yr.", min: 0, max: 120, default: 0 },

    // Instacart Benefits
    { section: "Instacart Benefits (through 12/31/27)", name: "Up to $120 in Instacart Credits", desc: "$10/month Instacart credit (up to $120/yr). Requires Instacart+ membership.", min: 0, max: 120, default: 0 },
    { name: "3-Month Instacart+ Membership", desc: "3-month complimentary Instacart+ ($0 delivery fees). Auto-enrolls at $99/yr after.", min: 0, max: 25, default: 0, firstYearOnly: true },

    // Travel Perks
    { section: "Travel Perks", name: "No Foreign Transaction Fees", desc: "No 3% fee on international purchases", min: 0, max: 200, default: 0 },
    { name: "Trip Cancellation / Interruption Insurance", desc: "Up to $5K/person, $10K/trip for pre-paid non-refundable expenses", min: 0, max: 100, default: 0 },
    { name: "Baggage Delay Insurance", desc: "Up to $100/day for 3 days for essentials when baggage delayed 6+ hours", min: 0, max: 30, default: 0 },
    { name: "Lost Luggage Reimbursement", desc: "Up to $3,000 per covered traveler for lost, damaged, or stolen baggage", min: 0, max: 30, default: 0 },
    { name: "Purchase Protection", desc: "Covers new purchases 120 days against damage/theft, up to $500/item", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'ihg-one-rewards-premier',
    detailUrl: 'ihg-one-rewards-premier.html',
    name: 'IHG One Rewards Premier Credit Card',
    issuer: 'Chase',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Hotel', 'Travel'],
    annualFee: 150,
    signOnBonusLabel: '180K pts ($3K/3mo)',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
