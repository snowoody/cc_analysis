// IHG One Rewards Premier Select Credit Card (by Chase) data
(function() {
  const terms = {
    "200,000 Bonus Points": `New Cardmember Bonus: Earn 200,000 bonus points after spending $5,000 on purchases in the first 3 months from account opening. Apply by 11/18/2026.

Additionally, earn 10,000 bonus points after adding an authorized user to your account in the first 3 months from account opening.

Points are transferred to your IHG One Rewards account after each billing cycle. Allow 6–8 weeks for bonus points to post. Account must be open and not in default at time of fulfillment. This card is not available if you currently have this card or received a new cardmember bonus for it in the past 24 months.`,

    "Anniversary Free Night (60K cap)": `Anniversary Free Night: Available each year on your account anniversary date. Valid at IHG Hotels & Resorts with a point redemption value of 60,000 points or less (one standard room night and tax only).

You can add points from your IHG One Rewards account to redeem at hotels above the 60,000-point level. Must be redeemed, and stay completed, within 12 months from date of issue. Non-transferable, no cash value. Account must be open and not in default at time of fulfillment. Individual hotel cancellation policies apply.`,

    "Up to $300 in Annual Food & Beverage Rewards": `Up to $300 in Annual IHG Food & Beverage Rewards: Receive one $75 Food & Beverage Reward voucher each calendar quarter (Q1 Jan–Mar, Q2 Apr–Jun, Q3 Jul–Sep, Q4 Oct–Dec), up to $300 per calendar year.

Each voucher is valid only for the quarter in which it was issued and expires at the end of that quarter. Each voucher can only be used once—if charges total less than $75, the remaining value is forfeited. Eligible charges generally include food, beverage (including alcohol), and gratuities captured on the primary cardmember's room bill. The room reservation must be under the primary cardmember's name.

Not applicable to vending machines, third-party food deliveries, restaurants that don't allow charges to a guest room bill, gift shop purchases, taxes on minibar charges, or taxes. Available at all IHG brands except IHG Army Hotels and select Six Senses locations. Not available at Iberostar Beachfront Resorts, Royal Resorts by Holiday Inn Club Vacations, or InterContinental Alliance Resorts (Macau).`,

    "$200 Airline Statement Credit": `$200 Airline Statement Credit: One-time $200 statement credit per calendar year when you spend at least $250 on flight tickets booked directly with the airline, through 12/31/27.

Statement credits should post within 3 business days but may take up to 4 weeks. Credits may be reversed if the eligible purchase is returned, canceled, or modified, or if you close your account within 90 days. Account must be open and not in default at time of fulfillment.`,

    "Earn Additional Anniversary Free Night ($40K spend)": `Free Night After $40,000 Annual Spend: After spending $40,000 on purchases each calendar year, earn an additional Free Night with a point redemption value of 60,000 points or less. You can add points from your IHG One Rewards account to redeem above the 60,000-point level.

Allow up to 8 weeks for posting to your IHG One Rewards account. Must be redeemed, and stay completed, within 12 months from date of issue. Non-transferable, no cash value.`,

    "4th Night Free on Reward Stays": `Redeem 3 Nights, Get 4th Night Free: For standard room Reward Night stays of 4 or more consecutive nights at the same property, every 4th night is free (0 points charged).

If the reservation is cancelled or you check out before the 4th night, the 4th Reward Night is forfeited and has no cash or point value. Unlimited uses per year. Does not apply to paid stays or Points & Cash bookings. Subject to room availability.`,

    "Automatic Platinum Elite Status": `Automatic IHG One Rewards Platinum Elite Status as long as you remain a Premier Select cardmember. Benefits include:
- 60% bonus points on stays
- Complimentary room upgrades (when available)
- Welcome amenity
- Late checkout (when available)
- Guaranteed room availability when booked 72 hours in advance

Allow 6–8 weeks after account opening for status to be applied.`,

    "Diamond Elite Status ($25K spend)": `Diamond Elite Status After $25,000 Annual Spend: Each calendar year you spend $25,000 on purchases, you qualify for IHG One Rewards Diamond Elite Status for the remainder of the qualifying year and the following calendar year.

Diamond Elite benefits include everything in Platinum Elite plus:
- 100% bonus points on stays
- Guaranteed room availability when booked 24 hours in advance
- Choice of welcome amenity (points, food & beverage, or amenity)

Allow up to 8 weeks after qualifying. Account must be open and not in default.`,

    "20 Elite Night Credits": `20 Elite Night Credits: Receive 20 Elite Night Credits (ENC) within 6–8 weeks of opening your card. After that, 20 ENC are deposited by February 1 each calendar year. Limited to 20 ENC regardless of the number of IHG One Rewards cards linked to your account.

ENC count toward status tiers and Milestone Rewards. Account must be open and not in default at time of fulfillment.`,

    "2 Elite Night Credits per $5,000 Spent": `Earn 2 Elite Night Credits for every $5,000 spent on purchases. No cap on the number of ENC you can earn through spend. Allow 6–8 weeks for posting.

ENC count toward status tiers and Milestone Rewards.`,

    "5 Bonus Elite Night Credits ($15K spend)": `5 Bonus Elite Night Credits After $15,000 Annual Spend: In addition to the 2 ENC per $5,000, earn 5 additional ENC after spending $15,000 each calendar year.

Also earn 20,000 bonus points at the same $15,000 threshold. Allow 6–8 weeks for posting.`,

    "20,000 Bonus Points ($15K spend)": `20,000 Bonus Points After $15,000 Annual Spend: Earn 20,000 bonus points after spending $15,000 on purchases each calendar year.

This is in addition to the 5 Elite Night Credits earned at the same spend threshold. Allow 6–8 weeks for posting. Account must be open and not in default.`,

    "30% Off IHG Points Purchases": `Save 30% on IHG One Rewards Points Purchases when you pay with your IHG One Rewards Premier Select card. Non-Elite Qualifying points. Non-refundable.

The 30% discount cannot be combined with any other points purchase offer. Managed by Points.com.`,

    "Earn up to 28X at IHG Hotels": `Earn up to 28X total points at IHG Hotels & Resorts:
- 12X points per $1 with the IHG One Rewards Premier Select Credit Card
- Up to 10X points per $1 from IHG as an IHG One Rewards member (base earning)
- Up to 6X points per $1 from IHG with Platinum Elite Status (60% bonus)

Total: up to 28X points per $1 spent at IHG Hotels & Resorts.

Note: Earning rates may differ at extended-stay brands (Candlewood Suites, Staybridge Suites), IHG Army Hotels, and IHG Residence properties.`,

    "Earn 6X on Dining and Travel": `Earn 6X points per $1 on dining at restaurants (including takeout and eligible delivery services) and all other travel (excluding IHG Hotels & Resorts which earn 12X).

Travel includes airlines, car rentals, cruises, rideshare, hotels not in IHG, and other travel merchants as classified by Mastercard category codes.`,

    "Earn 3X on All Other Purchases": `Earn 3X points per $1 on all other purchases that don't qualify for higher earning rates.

Points are earned on eligible net purchases (purchases minus credits and returns). Cash advances, balance transfers, fees, and similar transactions are not eligible.`,

    "$200 Airline Statement Credit (terms)": `$200 Airline Statement Credit: One-time $200 statement credit per calendar year when you spend at least $250 on flights purchased directly with the airline, through 12/31/27. Processing delays can cause purchases near year-end to count toward the following year's credit.`,

    "Global Entry / TSA PreCheck / NEXUS Credit": `Global Entry, TSA PreCheck, or NEXUS Application Fee Credit: Receive a statement credit of up to $120 every four years as reimbursement for the application fee when charged to your card.

Only purchases made directly with DHS, eligible partners on ttp.cbp.dhs.gov, or authorized enrollment providers on tsa.gov/precheck are eligible. Purchases through third-party services or travel agencies are not eligible. Statement credit posts within 1–2 billing cycles.`,

    "Up to $50 United TravelBank Cash": `Up to $50 United Airlines TravelBank Cash Each Year: Receive one $25 deposit for January 1–June 30 and another $25 deposit for July 1–December 31 each calendar year, after one-time registration at ihg.com/united.

Must have a United MileagePlus account. TravelBank Cash from H1 expires July 15; from H2 expires January 15 of the following year. Requires linking your Premier Select card with your MileagePlus account. Subject to United TravelBank program rules.`,

    "Complimentary DashPass": `Complimentary DashPass: 12 months of complimentary DashPass when activated between 02/01/2025 and 12/31/2027. Provides $0 delivery fees and lower service fees on eligible DoorDash and Caviar orders above the minimum subtotal.

After the complimentary period, you are automatically charged the then-current monthly DashPass rate unless you cancel. Must use the IHG Premier Select card for payment at checkout. Service fees, taxes, tips, and other charges still apply.`,

    "DoorDash Non-Restaurant Promo": `DoorDash Non-Restaurant Promo: Up to $10 off per month on one qualifying non-restaurant DoorDash order (groceries, everyday essentials, etc.) through 12/31/2027, while enrolled in DashPass.

For those who activated DashPass between 02/01/2025 and 08/31/2026, the discount is $10 per quarter instead. Must use the card used to enroll in DashPass at checkout. Unused monthly value does not roll over. Not valid for gift cards. Merchant exclusions may apply.`,

    "Up to $120 in Instacart Credits": `Instacart Credits: Receive a $10 Instacart credit monthly, up to $120 total each calendar year, for purchases made directly through Instacart with your card.

Requires an active Instacart+ membership (a 3-month complimentary membership is included). Each credit is valid only for the calendar month issued and does not roll over. Minimum $10 purchase required. Excludes taxes, fees, tips, and restaurant orders. Benefits end 12/31/27.`,

    "3-Month Instacart+ Membership": `3-Month Complimentary Instacart+ Membership: Includes unlimited deliveries with $0 delivery fees on eligible orders. Activate at instacart.com/p/chase-cobrands between 5/1/2025 and 12/31/2027.

After the complimentary period, you are automatically enrolled in Instacart+ at 25% off the annual rate ($99/year or then-current rate) unless you cancel. Service fees and Terms apply. Benefits end 12/31/27.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: No foreign transaction fees on purchases made outside the United States. Saves the typical 3% fee charged by most cards.`,

    "Trip Cancellation / Interruption Insurance": `Trip Cancellation / Interruption Insurance: If your trip is canceled or cut short by sickness, severe weather, or other covered situations, you can be reimbursed up to $5,000 per covered traveler and $10,000 per trip for pre-paid, non-refundable travel expenses including passenger fares, tours, and hotels.

Restrictions, limitations, and exclusions apply. Benefits provided by unaffiliated companies. See Guide to Benefits for full details.`,

    "Purchase Protection": `Purchase Protection: Covers eligible new purchases for 120 days from the date of purchase against damage or theft, up to $500 per item.

For New York State residents, the coverage period is 90 days. Restrictions, limitations, and exclusions apply.`,
  };

  const benefits = [
    // Sign-On Bonus
    { section: "Sign-On Bonus", name: "200,000 Bonus Points", desc: "200K IHG points after $5K spend in 3 months + 10K for adding authorized user", min: 0, max: 2000, default: 1200, firstYearOnly: true, comment: "IHG points are generally valued at ~0.5–0.6¢ each. At 0.56¢/pt, 210K points ≈ $1,176. Default uses ~0.57¢/pt." },

    // Annual IHG Benefits
    { section: "Annual IHG Benefits", name: "Anniversary Free Night (60K cap)", desc: "Free night certificate each year (60K point cap, can top up with points for higher-value hotels)", min: 0, max: 500, default: 200, comment: "60K points covers most Holiday Inn, Crowne Plaza, and some InterContinental properties. Can top up from your points balance for pricier hotels." },
    { name: "Up to $300 in Annual Food & Beverage Rewards", desc: "$75/quarter in F&B vouchers at IHG hotels (use-it-or-lose-it each quarter)", min: 0, max: 300, default: 75, comment: "Each $75 voucher expires at end of quarter and must be used in a single transaction. Value depends on how often you stay at IHG properties." },
    { name: "$200 Airline Statement Credit", desc: "$200 credit/year when spending $250+ on flights booked directly with an airline (through 12/31/27)", min: 0, max: 200, default: 100 },
    { name: "4th Night Free on Reward Stays", desc: "Every 4th consecutive reward night is free at the same property. Unlimited uses.", min: 0, max: 400, default: 50 },
    { name: "Automatic Platinum Elite Status", desc: "Free Platinum Elite: 60% point bonus, room upgrades, late checkout", min: 0, max: 200, default: 0 },
    { name: "30% Off IHG Points Purchases", desc: "Save 30% when purchasing IHG points with this card", min: 0, max: 100, default: 0 },

    // Spend Threshold Benefits
    { section: "Spend Threshold Benefits", name: "20,000 Bonus Points ($15K spend)", desc: "20K bonus points after $15K annual spend (~$112 at 0.56¢/pt)", min: 0, max: 150, default: 0 },
    { name: "5 Bonus Elite Night Credits ($15K spend)", desc: "5 additional ENC after $15K annual spend, on top of 2 ENC per $5K", min: 0, max: 50, default: 0 },
    { name: "Diamond Elite Status ($25K spend)", desc: "Diamond Elite after $25K annual spend: 100% point bonus, better upgrades", min: 0, max: 200, default: 0 },
    { name: "Earn Additional Anniversary Free Night ($40K spend)", desc: "Second free night (60K cap) after $40K annual spend", min: 0, max: 500, default: 0 },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "Earn up to 28X at IHG Hotels", desc: "12x card + 10x base IHG + 6x Platinum = 28x at IHG properties", min: 0, max: 1000, default: 0 },
    { name: "Earn 6X on Dining and Travel", desc: "6x on dining and all other travel (excluding IHG hotels)", min: 0, max: 500, default: 0 },
    { name: "Earn 3X on All Other Purchases", desc: "3x on all other purchases", min: 0, max: 500, default: 0 },

    // Elite Night Credits
    { section: "Elite Night Credits", name: "20 Elite Night Credits", desc: "20 ENC annually, jump-starting status tiers and Milestone Rewards", min: 0, max: 100, default: 0 },
    { name: "2 Elite Night Credits per $5,000 Spent", desc: "Earn 2 ENC for every $5K in purchases (no cap)", min: 0, max: 100, default: 0 },

    // Travel Credits
    { section: "Travel Credits", name: "Global Entry / TSA PreCheck / NEXUS Credit", desc: "Up to $120 every 4 years (~$30/yr amortized) for trusted traveler application fee", min: 0, max: 30, default: 0 },
    { name: "Up to $50 United TravelBank Cash", desc: "$25 in H1 + $25 in H2 each year for United flights. Registration required. Short expiry windows.", min: 0, max: 50, default: 0, comment: "TravelBank Cash expires quickly (mid-July for H1, mid-January for H2). Only useful if you fly United regularly." },

    // DoorDash Benefits
    { section: "DoorDash Benefits (through 12/31/27)", name: "Complimentary DashPass", desc: "12-month complimentary DashPass ($0 delivery fees on eligible orders). $120/yr value.", min: 0, max: 120, default: 0 },
    { name: "DoorDash Non-Restaurant Promo", desc: "Up to $10/month off non-restaurant DoorDash orders (groceries, essentials). Up to $120/yr.", min: 0, max: 120, default: 0 },

    // Instacart Benefits
    { section: "Instacart Benefits (through 12/31/27)", name: "Up to $120 in Instacart Credits", desc: "$10/month Instacart credit (up to $120/yr). Requires Instacart+ membership.", min: 0, max: 120, default: 0 },
    { name: "3-Month Instacart+ Membership", desc: "3-month complimentary Instacart+ ($0 delivery fees). Auto-enrolls at 25% off annual rate after.", min: 0, max: 25, default: 0, firstYearOnly: true },

    // Travel Perks
    { section: "Travel Perks", name: "No Foreign Transaction Fees", desc: "No 3% fee on international purchases", min: 0, max: 200, default: 0 },
    { name: "Trip Cancellation / Interruption Insurance", desc: "Up to $5K/person, $10K/trip for pre-paid non-refundable expenses", min: 0, max: 100, default: 0 },
    { name: "Purchase Protection", desc: "Covers new purchases 120 days against damage/theft, up to $500/item", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'ihg-one-rewards-premier-select',
    detailUrl: 'ihg-one-rewards-premier-select.html',
    name: 'IHG One Rewards Premier Select Credit Card',
    issuer: 'Chase',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Hotel', 'Travel'],
    annualFee: 350,
    signOnBonusLabel: '200K pts ($5K/3mo)',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
