// IHG One Rewards Credit Card (by Chase, $0 AF) data
(function() {
  const terms = {
    "125,000 Bonus Points": `New Cardmember Bonus: Earn 125,000 bonus points after spending $2,000 on purchases in the first 3 months from account opening.

Additionally, earn 10,000 bonus points after adding an authorized user to your account in the first 3 months from account opening.

This credit card is not available to current cardmembers of any personal IHG One Rewards Credit Card, or previous cardmembers who received a new cardmember bonus for any personal IHG One Rewards Credit Card within the last 24 months. Points transfer to your IHG One Rewards account after each billing cycle. Allow 6–8 weeks for bonus points to post.`,

    "Automatic Silver Elite Status": `Automatic IHG One Rewards Silver Elite Status as long as you remain an IHG One Rewards Credit Card cardmember. Benefits include:
- 20% bonus points on stays
- Priority check-in line (at select properties)

Allow 6–8 weeks after account opening for status to be applied.`,

    "Gold Elite Status ($15K spend)": `Gold Elite Status After $15,000 Annual Spend: Each calendar year you spend $15,000 on purchases, you qualify for IHG One Rewards Gold Elite Status for the remainder of the qualifying year and the following calendar year.

Gold Elite benefits include everything in Silver Elite plus:
- 40% bonus points on stays (up from 20%)
- Complimentary room upgrades (when available)
- Welcome amenity
- Late checkout (when available)

Allow up to 8 weeks after qualifying. Account must be open and not in default.`,

    "5 Elite Night Credits": `5 Elite Night Credits: Receive 5 Elite Night Credits (ENC) within 6–8 weeks of opening your card. After that, 5 ENC are deposited by February 1 each calendar year. Limited to 5 ENC regardless of the number of IHG One Rewards cards linked to your account.

ENC count toward status tiers and Milestone Rewards. Account must be open and not in default at time of fulfillment.`,

    "10,000 Bonus Points ($15K spend)": `10,000 Bonus Points After $15,000 Annual Spend: Earn 10,000 bonus points and Gold Elite Status after spending $15,000 on purchases each calendar year.

Allow 6–8 weeks for posting. Account must be open and not in default.`,

    "4th Reward Night Free ($5K spend, starting 2027)": `4th Reward Night Free After $5,000 Annual Spend (Starting 2027): Each calendar year you spend $5,000 on purchases, you qualify for the 4th Reward Night Free benefit for the remainder of that year and the following calendar year.

When you redeem points for a consecutive four-night stay at the same property, every 4th night is free (0 points charged). If the reservation is cancelled or you check out before the 4th night, the benefit is forfeited. Does not apply to paid stays or Points & Cash bookings.

Through 12/31/2026, this benefit is available without the spend requirement. After that date, you must spend $5,000 annually to unlock it.`,

    "30% Off IHG Points Purchases": `Save 30% on IHG One Rewards Points Purchases when you pay with your IHG One Rewards card. Non-Elite Qualifying points. Non-refundable.

The 30% discount cannot be combined with any other points purchase offer. Managed by Points.com.`,

    "Earn up to 17X at IHG Hotels": `Earn up to 17X total points at IHG Hotels & Resorts:
- 5X points per $1 with the IHG One Rewards Credit Card
- Up to 10X points per $1 from IHG as an IHG One Rewards member (base earning)
- Up to 2X points per $1 from IHG with Silver Elite Status (20% bonus)

Total: up to 17X points per $1 spent at IHG Hotels & Resorts.

Note: Earning rates may differ at extended-stay brands (Candlewood Suites, Staybridge Suites), IHG Army Hotels, and IHG Residence properties.`,

    "Earn 3X on Dining, Gas, Grocery": `Earn 3X points per $1 on dining at restaurants (including takeout and eligible delivery services), gas stations, and grocery stores.

Note: Through 12/31/2026, 3X also applies to utilities, internet/cable/phone services, and select streaming services. After that date, those categories drop to 2X.`,

    "Earn 2X on All Other Purchases": `Earn 2X points per $1 on all other purchases that don't qualify for higher earning rates.

Points are earned on eligible net purchases (purchases minus credits and returns). Cash advances, balance transfers, fees, and similar transactions are not eligible.`,

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
    { section: "Sign-On Bonus", name: "125,000 Bonus Points", desc: "125K IHG points after $2K spend in 3 months + 10K for adding authorized user", min: 0, max: 1200, default: 756, firstYearOnly: true, comment: "IHG points valued at ~0.56¢/pt. 135K points ≈ $756." },

    // IHG Benefits
    { section: "IHG Benefits", name: "4th Reward Night Free ($5K spend, starting 2027)", desc: "Every 4th consecutive reward night free. Requires $5K annual spend starting 2027.", min: 0, max: 300, default: 0 },
    { name: "Automatic Silver Elite Status", desc: "Free Silver Elite: 20% point bonus on stays", min: 0, max: 50, default: 0 },
    { name: "30% Off IHG Points Purchases", desc: "Save 30% when purchasing IHG points with this card", min: 0, max: 100, default: 0 },

    // Spend Threshold Benefits
    { section: "Spend Threshold Benefits", name: "10,000 Bonus Points ($15K spend)", desc: "10K bonus points + Gold Elite after $15K annual spend (~$56 at 0.56¢/pt)", min: 0, max: 100, default: 0 },
    { name: "Gold Elite Status ($15K spend)", desc: "Gold Elite after $15K annual spend: 40% point bonus, room upgrades, late checkout", min: 0, max: 150, default: 0 },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "Earn up to 17X at IHG Hotels", desc: "5x card + 10x base IHG + 2x Silver = 17x at IHG properties", min: 0, max: 500, default: 0 },
    { name: "Earn 3X on Dining, Gas, Grocery", desc: "3x on dining, gas stations, and grocery stores", min: 0, max: 300, default: 0 },
    { name: "Earn 2X on All Other Purchases", desc: "2x on all other purchases", min: 0, max: 300, default: 0 },

    // Elite Night Credits
    { section: "Elite Night Credits", name: "5 Elite Night Credits", desc: "5 ENC annually toward status tiers and Milestone Rewards", min: 0, max: 25, default: 0 },

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
    id: 'ihg-one-rewards',
    detailUrl: 'ihg-one-rewards.html',
    name: 'IHG One Rewards Credit Card',
    issuer: 'Chase',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Hotel', 'Travel'],
    annualFee: 0,
    signOnBonusLabel: '125K pts ($2K/3mo)',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
