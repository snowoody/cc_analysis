// IHG One Rewards Select Credit Card (legacy, by Chase) data
(function() {
  const terms = {
    "Anniversary Free Night": `Anniversary Free Night Certificate: You earn an Anniversary Free Night certificate each year on your account anniversary date, which you can redeem at participating IHG® Hotels & Resorts.

The certificate is valid for one standard room per night. Certain restrictions may apply (e.g., point cap on the room). Certificate expires 12 months after issuance and is non-transferable. Account must be open and not in default at the time of fulfillment to receive the certificate.`,

    "10% Redemption Bonus Points": `Redemption Bonus Points: Every time you redeem points for a reward, we automatically return 10% of the points to you (up to 100,000 points returned per calendar year on legacy versions of this benefit).

This effectively reduces the cost of point redemptions by ~9.1%. Posted automatically upon redemption.`,

    "Platinum Elite Status": `IHG One Rewards Platinum Elite Status: As an IHG One Rewards Select Credit Cardmember, you've automatically earned IHG One Rewards Platinum Elite status. Benefits include:
- Welcome amenities at participating properties
- Complimentary room upgrades (when available)
- 60% bonus points on stays
- Late checkout (when available)
- Guaranteed room availability when booked 72 hours in advance

Status is maintained as long as your card account remains open and in good standing.`,

    "Earn up to 21X points at IHG Hotels": `Earn up to 21X total points at IHG Hotels & Resorts:
- 5X points per $1 with the IHG One Rewards Select Credit Card
- 10X points per $1 from IHG as an IHG One Rewards member (base earning)
- 6X points per $1 from IHG as a Platinum Elite member (status bonus)

Total: up to 21X points per $1 spent at IHG Hotels & Resorts.

Earn rates for non-stay charges (incidentals, F&B at hotel) may differ. See IHG One Rewards program rules for details.`,

    "Earn 2 points at gas stations, grocery stores, restaurants": `Bonus Category Earning: Earn 2 points per $1 spent on purchases at gas stations, grocery stores, and restaurants.

Each merchant's business is identified by a category code established by the network (Mastercard). A purchase may not earn additional rewards if the category code applied to a merchant is not in an eligible category. We do not determine the category codes applied to merchants' businesses.`,

    "Earn 1 point on every purchase": `Base Earning: Earn 1 point per $1 spent on all eligible purchases that don't qualify for higher earning rates.

Rewards are earned on eligible Net Purchases. Net Purchases are purchases minus credits and returns. Cash advances, balance transfers, fees, and similar transactions are not eligible.`,

    "Complimentary DashPass Membership": `Complimentary DashPass Membership: $0 delivery fees on eligible orders from DoorDash and Caviar after activating by 12/31/27.

Activation required. Eligible orders include those above the minimum subtotal as defined by DoorDash. Service fees, taxes, tips, and other charges still apply. Other restrictions and exclusions may apply.

After 12/31/27, the benefit may not auto-renew at the same terms. See DoorDash terms for full DashPass details.`,

    "DoorDash Non-Restaurant Promo": `DoorDash Non-Restaurant Promo: Get up to $10 off each quarter on non-restaurant DoorDash orders while enrolled in DashPass. Up to $40 in savings annually.

Eligible non-restaurant categories include grocery, retail, convenience, alcohol (where permitted), and similar. Restaurant orders do not qualify for this credit.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: Pay no foreign transaction fees when you use your card on purchases made outside the United States. Standard 3% foreign transaction fee on most cards is waived. Value depends on your annual international spend.`,

    "Auto Rental Coverage": `Auto Rental Collision Damage Waiver: Decline the rental company's collision insurance and charge the entire rental cost to your card. Coverage provides reimbursement for theft and collision damage for most rental vehicles.

This is SECONDARY coverage when renting for personal use (primary for business rentals). Coverage limits apply. Not all vehicle types are covered. Coverage is not available in all countries (e.g., excluded in Israel, Jamaica, Northern Ireland, the Republic of Ireland). Read your Guide to Benefits for full details.`,

    "Purchase Protection": `Purchase Protection: Covers your eligible new purchases for 120 days from the date of purchase against damage or theft up to $500 per item.

For New York State residents, the coverage period is 90 days from the date of purchase.

Restrictions, limitations, and exclusions apply. See your Guide to Benefits for full details.`,

    "Extended Warranty Protection": `Extended Warranty Protection: Extends the time period of the manufacturer's U.S. warranty by an additional year, on eligible warranties of three years or less.

Limit per claim and lifetime claim limits apply. Restrictions, limitations, and exclusions apply.`,

    "Travel Accident Insurance": `Travel Accident Insurance: When you pay for your air, bus, train, or cruise transportation with your card, you are eligible to receive automatic insurance for a covered loss.

Coverage applies to the cardmember and qualifying family members when the entire fare for the common carrier is paid with the card. Restrictions, limitations, and exclusions apply.`,

    "Baggage Delay Insurance": `Baggage Delay Insurance: Reimburses you up to $100 a day for up to 3 days for essential purchases like toiletries and clothing when baggage is delayed over 6 hours.

Coverage applies when the entire common carrier ticket is paid with your card. Restrictions, limitations, and exclusions apply.`,

    "Lost Luggage Reimbursement": `Lost Luggage Reimbursement: Provides reimbursement up to $3,000 per covered traveler for the cost to repair or replace checked or carry-on baggage that is lost, damaged, or stolen during a covered trip.

For New York State residents: additionally limited to $2,000 per bag and $10,000 for all Covered Travelers per Trip.

Restrictions, limitations, and exclusions apply.`,

    "Trip Cancellation and Interruption": `Trip Cancellation and Interruption Insurance: If your trip is canceled or cut short by sickness, severe weather, or other covered situations, you can be reimbursed for your pre-paid, non-refundable travel expenses, including passenger fares, tours, and hotels.

Coverage limits apply. Restrictions, limitations, and exclusions apply. See your Guide to Benefits for full details.`,

    "Travel and Emergency Assistance": `Travel and Emergency Assistance: If you run into a problem while traveling away from home, this benefit provides legal and medical referrals and emergency assistance services.

Cardmembers are responsible for the cost of any goods or services obtained. The service is provided to help coordinate, but doesn't pay for, professional services.`,

    "Roadside Assistance": `Roadside Assistance: If you have a roadside emergency, call the service provider to dispatch the help you need.

Roadside service fees may apply. Cardmembers are responsible for the cost of services provided. See your Guide to Benefits for full details.`,

    "Mastercard Concierge": `Mastercard Concierge: Enjoy exclusive, personal assistance with dinner reservations, event tickets, locating hard-to-find items, buying gifts, travel research, and more.

Cardmembers are responsible for the cost of any goods or services purchased through the Concierge. Service is available 24/7.`,
  };

  const benefits = [
    // Annual IHG Benefits
    { section: "Annual IHG Benefits", name: "Anniversary Free Night", desc: "Free night certificate each year (40k point cap on legacy Select card). Adjust based on typical room rate you'd redeem.", min: 0, max: 300, default: 100, comment: "Legacy Select Anniversary Night is capped at 40,000 points (~$200 max retail value at properties up to 40k cost). Most users get $100–$200 in actual value." },
    { name: "10% Redemption Bonus Points", desc: "10% of redeemed points returned. Up to 100k points/year on legacy benefit. Estimate annual value.", min: 0, max: 100, default: 20, comment: "Most cardholders see modest value (a few thousand points back per redemption). Active redeemers may see $20–$50/yr." },
    { name: "Platinum Elite Status", desc: "Free Platinum Elite: 60% point bonus, room upgrades, late checkout. Estimate annual value based on IHG stays.", min: 0, max: 200, default: 0, comment: "Value depends entirely on number of IHG stays per year. Frequent IHG stayers may value it at $50–$200; occasional stayers at $0–$50." },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "Earn up to 21X points at IHG Hotels", desc: "5x card + 10x base IHG + 6x Platinum = 21x at IHG hotels. Estimate annual cash-equivalent value.", min: 0, max: 800, default: 0 },
    { name: "Earn 2 points at gas stations, grocery stores, restaurants", desc: "2x at gas/grocery/restaurants. Estimate annual cash-equivalent value (spend × 2 × value per point).", min: 0, max: 300, default: 0 },
    { name: "Earn 1 point on every purchase", desc: "1x on all other purchases. Estimate annual cash-equivalent value.", min: 0, max: 200, default: 0 },

    // DoorDash Benefits
    { section: "DoorDash Benefits (through 12/31/27)", name: "Complimentary DashPass Membership", desc: "$0 delivery fees on eligible orders. Activation required. Benefit ends 12/31/27.", min: 0, max: 120, default: 0, comment: "DashPass standalone is $9.99/mo ($120/yr). Value depends on order frequency. Estimate based on delivery fees actually saved." },
    { name: "DoorDash Non-Restaurant Promo", desc: "Up to $10/quarter ($40/yr) on non-restaurant DoorDash orders while enrolled in DashPass", min: 0, max: 40, default: 0, comment: "Easy to use if you order groceries/retail through DoorDash. Default reflects partial use." },

    // Travel Perks
    { section: "Travel Perks", name: "No Foreign Transaction Fees", desc: "No 3% fee on international purchases. Estimate annual savings based on international spend.", min: 0, max: 200, default: 0 },
    { name: "Travel and Emergency Assistance", desc: "24/7 legal/medical referrals and emergency coordination while traveling", min: 0, max: 50, default: 0 },
    { name: "Roadside Assistance", desc: "Pay-per-use dispatch for roadside emergencies. Cardholder pays for services.", min: 0, max: 20, default: 0 },

    // Travel & Purchase Protections
    { section: "Travel & Purchase Protections", name: "Auto Rental Coverage", desc: "Secondary coverage for damage/theft of rental vehicles when paid with card", min: 0, max: 50, default: 0 },
    { name: "Travel Accident Insurance", desc: "Automatic accident insurance when fare is paid with the card", min: 0, max: 50, default: 0 },
    { name: "Baggage Delay Insurance", desc: "Up to $100/day for 3 days for essentials when baggage delayed 6+ hours", min: 0, max: 30, default: 0 },
    { name: "Lost Luggage Reimbursement", desc: "Up to $3,000 per covered traveler for lost, damaged, or stolen baggage", min: 0, max: 30, default: 0 },
    { name: "Trip Cancellation and Interruption", desc: "Reimbursement for non-refundable expenses if trip canceled/cut short for covered reasons", min: 0, max: 100, default: 0 },
    { name: "Purchase Protection", desc: "Covers new purchases 120 days against damage/theft, up to $500/item", min: 0, max: 50, default: 0 },
    { name: "Extended Warranty Protection", desc: "+1 year on manufacturer warranties of ≤3 years", min: 0, max: 30, default: 0 },

    // Other
    { section: "Other Benefits", name: "Mastercard Concierge", desc: "24/7 personal assistance for reservations, tickets, gifts, travel", min: 0, max: 50, default: 0 },
  ];

  const card = {
    id: 'ihg-one-rewards-select',
    detailUrl: 'ihg-one-rewards-select.html',
    name: 'IHG One Rewards Select Credit Card',
    issuer: 'Chase',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Hotel', 'Travel'],
    annualFee: 49,
    signOnBonusLabel: 'No longer accepting new applications',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
