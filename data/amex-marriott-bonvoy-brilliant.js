// Marriott Bonvoy Brilliant American Express Card data
(function() {
  const terms = {
    "150,000 Marriott Bonvoy Points": `Welcome Offer: Earn 150,000 Marriott Bonvoy® Bonus Points plus a $250 Statement Credit after you use your new Card to make $6,000 in purchases within the first 6 months of Card Membership. Offer ends 9/30/26.

Marriott Bonvoy points are generally valued at approximately 0.7–0.8¢ per point for hotel redemptions. At 0.7¢/point, 150,000 points ≈ $1,050 in hotel value, plus the $250 statement credit = ~$1,300 total. Points can also be transferred to over 38 airline partners at a 3:1 ratio (with a 5,000-mile bonus per 60,000 points transferred).

Welcome offer eligibility may be restricted if you currently have or have previously held certain Marriott Bonvoy cards from American Express. Terms apply.`,

    "$300 Brilliant Dining Credit": `$300 Brilliant Dining Credit: Each calendar year, get up to $300 (up to $25 per month) in statement credits for eligible purchases made on the Marriott Bonvoy Brilliant® Card at restaurants worldwide.

The credit resets monthly—unused portions do not roll over. Eligible restaurant purchases are identified by merchant category codes set by the payment network. Some restaurants may not be classified in the restaurant category.`,

    "Free Night Award (Annual)": `Marriott Bonvoy Brilliant® Free Night Award: Receive 1 Free Night Award every year after your Card renewal month. Award can be used for one night (redemption level at or under 85,000 Marriott Bonvoy® points) at hotels participating in Marriott Bonvoy®.

Certain hotels have resort fees. The Free Night Award expires 12 months after issuance. Award is non-transferable and has no cash value. Account must be open and in good standing at time of fulfillment.`,

    "Marriott Bonvoy Platinum Elite Status": `Marriott Bonvoy® Platinum Elite Status: As a Marriott Bonvoy Brilliant® Card Member, you receive complimentary Marriott Bonvoy Platinum Elite status. Benefits include:
- 50% Bonus Points on stays (up to 5X additional points from Marriott Bonvoy)
- Suite Night Awards (earned at 50+ nights)
- Room upgrades including suites (when available upon check-in)
- Lounge access at properties with lounges
- Welcome gift (choice of points, breakfast, or amenity)
- 4 PM late checkout (guaranteed when available)
- Enhanced internet access

Status is maintained as long as your card account remains open and in good standing. Enrollment required.`,

    "25 Elite Night Credits": `25 Elite Night Credits: Each calendar year, receive 25 Elite Night Credits towards the next level of Marriott Bonvoy® Elite status.

Limitations apply per Marriott Bonvoy member account. Benefit is not exclusive to Cards offered by American Express. Elite Night Credits from credit cards count toward achieving higher elite status tiers (e.g., 50 nights for Platinum Elite, 75 nights for Titanium Elite).`,

    "Brilliant Earned Choice Award": `Brilliant Earned Choice Award: Each calendar year after spending $60,000 on eligible purchases on your Marriott Bonvoy Brilliant® American Express® Card, you will be eligible to select a Brilliant Earned Choice Award benefit. Limited to one award per calendar year. Options include:
- 5 Nightly Upgrade Awards (upgrade to premium rooms/suites, subject to availability)
- 1 Free Night Award valued at up to 85,000 points
- 50,000 Marriott Bonvoy® points

If no selection is made by the deadline, 5 Nightly Upgrade Awards will be deposited as your default selection. You must sign in at choice-benefit.marriott.com/brilliant to make your selection.`,

    "$100 Marriott Bonvoy Property Credit": `$100 Marriott Bonvoy® Property Credit: Receive up to a $100 property credit for qualifying charges at The Ritz-Carlton® or St. Regis® when you book direct using a special rate for a 2-night minimum stay.

The credit can be used toward on-property dining, spa services, and other qualifying charges. Must book using the special Brilliant card rate. Not combinable with other promotional rates or third-party bookings.`,

    "Priority Pass": `Priority Pass™ Select Membership: With your Marriott Bonvoy Brilliant® American Express® Card, you can enroll in Priority Pass™, with an unlimited number of visits to over 1,300 airport lounges in over 130 countries, regardless of which carrier or class you are flying.

Enjoy snacks, drinks, and internet access in a comfortable location before or between flights. Enrollment required. Guests are not included and must pay separately.`,

    "Premium Internet Access": `Premium Internet Access: Receive free in-room, premium Internet access at participating Marriott Bonvoy properties.

Booking requirements apply. Must be booked with a Qualifying Rate directly through Marriott. Premium internet provides faster speeds than the standard complimentary WiFi available to all Marriott Bonvoy members.`,

    "Fee Credit for Global Entry or TSA PreCheck": `Fee Credit for Global Entry or TSA PreCheck®: Receive either a $120 statement credit for Global Entry or a statement credit for up to $85 for TSA PreCheck® (through an official enrollment provider) for a 5-year plan.

Only one credit will be given in a 4-year period for whichever application fee is charged to your Card first. If approved for Global Entry, you also receive access to TSA PreCheck at no additional charge.`,

    "Earn up to 21X at Marriott Properties": `Earn up to 21X Marriott Bonvoy® points on eligible purchases at hotels participating in Marriott Bonvoy:
- 6X points with the Marriott Bonvoy Brilliant® Card
- Up to 10X points from Marriott Bonvoy for being a member
- Up to 5X points from Marriott Bonvoy with the 50% Bonus Points on Stays (Platinum Elite benefit)

Total: up to 21X points per $1 spent at participating Marriott hotels. Earn rates for non-stay charges may differ.`,

    "3X at Restaurants and on Flights": `Bonus Category Earning: Earn 3X Marriott Bonvoy points per $1 spent at restaurants worldwide and on flights booked directly with airlines.

Merchants are identified by category codes established by the payment network. A purchase may not earn the higher rate if the merchant's code does not fall in an eligible category.`,

    "2X on All Other Purchases": `Base Earning: Earn 2X Marriott Bonvoy points per $1 spent on all other eligible purchases that don't qualify for higher earning rates.

Eligible purchases exclude cash advances, fees, interest charges, balance transfers, and returns/credits.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: Pay no foreign transaction fees from American Express when you use your Card on purchases made outside the United States. The standard ~3% foreign transaction fee charged by most cards is waived.`,

    "Cell Phone Protection": `Cell Phone Protection: You can be reimbursed the lesser of your repair or replacement costs following damage or theft, up to $800 per claim, with a limit of 2 approved claims per 12-month period.

Your cell phone line must be listed on a wireless bill and the prior month's wireless bill must have been paid by an Eligible Card Account. A $50 deductible applies to each approved claim. Coverage is provided by New Hampshire Insurance Company, an AIG Company.`,

    "Trip Cancellation and Interruption Insurance": `Trip Cancellation and Interruption Insurance: If you purchase a round trip entirely with your Eligible Card and a covered reason cancels or interrupts your trip, you can be reimbursed for non-refundable expenses purchased with the same Eligible Card.

Up to $10,000 per trip and up to $20,000 per Eligible Card per 12 consecutive month period. Coverage is provided by New Hampshire Insurance Company, an AIG Company. Terms, conditions and limitations apply.`,

    "Trip Delay Insurance": `Trip Delay Insurance: If a round-trip is paid for entirely with your Eligible Card and a covered reason delays your trip more than 6 hours, Trip Delay Insurance can help reimburse certain additional expenses purchased with your same Eligible Card.

Up to $500 per trip, maximum 2 claims per Eligible Card per 12 consecutive month period. Coverage is provided by New Hampshire Insurance Company, an AIG Company. Terms, conditions and limitations apply.`,

    "Return Protection": `Return Protection: You may return eligible purchases to American Express if the seller won't take them back, up to 90 days from the date of purchase.

American Express may refund the full purchase price excluding shipping and handling, up to $300 per item, up to a maximum of $1,000 per calendar year per Card account. Purchases must be made in the U.S. or its territories.`,

    "Car Rental Loss and Damage Insurance": `Car Rental Loss and Damage Insurance: When you use your Eligible Card to reserve and pay for the Entire Rental and decline the collision damage waiver (CDW) at the Rental Company counter, you can be covered for Damage to or Theft of a Rental Vehicle in a Covered Territory.

This is secondary coverage and does not include liability coverage. Not all vehicle types or rentals are covered. Coverage is not available for vehicles rented in Australia, Italy, and New Zealand.`,

    "Premium Global Assist Hotline": `Premium Global Assist® Hotline: 24/7 medical, legal, financial, and other select emergency coordination and assistance services while traveling more than 100 miles from home.

Services include medical and legal referrals, prescription replacement coordination, emergency hotel check-ins, cash wires, missing luggage assistance, and more. Emergency medical transportation assistance may be provided at no cost only if approved and coordinated by Premium Global Assist Hotline. Card Members may be responsible for costs charged by third-party service providers.`,

    "Baggage Insurance Plan": `Baggage Insurance Plan: Coverage for lost, damaged, or stolen Baggage when you purchase the Entire Fare for a Common Carrier Vehicle ticket on an Eligible Card.

Coverage: up to $2,000 for checked Baggage and up to a combined maximum of $3,000 for checked and carry-on Baggage, in excess of coverage provided by the Common Carrier. The coverage is also subject to a $3,000 aggregate limit per Covered Trip.`,

    "Purchase Protection": `Purchase Protection: When you use your Eligible Card for Covered Purchases, your Membership can help protect them for up to 90 days from the Covered Purchase date against theft, accidental damage, or loss.

Up to $10,000 per Covered Purchase, up to $50,000 per calendar year. Please read important exclusions and restrictions.`,

    "Extended Warranty": `Extended Warranty: When you use your Eligible Card to make a Covered Purchase, you can get up to one extra year added to the Original Manufacturer's Warranty.

Applies to warranties of 5 years or less on Covered Purchases in the United States or its territories or possessions. Please read important exclusions and restrictions.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "150,000 Marriott Bonvoy Points", desc: "150,000 points + $250 statement credit after $6,000 spend in first 6 months. Adjust your value per point.", min: 0, max: 1.5, default: 0.7, miles: 150000, firstYearOnly: true, comment: "Marriott Bonvoy points are generally valued at 0.7–0.8¢/point for hotel redemptions. The 150K points offer ends 9/30/26." },
    { name: "Sign-On Statement Credit", desc: "$250 statement credit as part of the welcome offer.", min: 0, max: 250, default: 250, firstYearOnly: true },

    // Annual Marriott Benefits
    { section: "Annual Marriott Benefits", name: "$300 Brilliant Dining Credit", desc: "Up to $300/year ($25/month) in statement credits at restaurants worldwide.", min: 0, max: 300, default: 250, comment: "$25/mo cap means unused months don't roll over. Most diners can use $200–$300 of the $300 annually." },
    { name: "Free Night Award (Annual)", desc: "1 Free Night Award each year after card renewal. Redeemable at properties up to 85,000 points.", min: 0, max: 700, default: 200, comment: "85K cap covers premium properties (Ritz-Carlton, W, St. Regis on off-peak). Typical valuation $300–$600." },
    { name: "Marriott Bonvoy Platinum Elite Status", desc: "50% bonus points on stays, suite upgrades, lounge access, welcome gift choice, 4PM late checkout.", min: 0, max: 400, default: 0 },
    { name: "25 Elite Night Credits", desc: "25 ENCs toward higher Marriott elite status tiers each calendar year.", min: 0, max: 200, default: 0, comment: "Value depends on proximity to next elite tier. Worth $0 if you don't stay at Marriott enough to use them." },
    { name: "Brilliant Earned Choice Award", desc: "After $60K spend: choose 5 Suite Night Awards, 1 Free Night (85K cap), or 50K points.", min: 0, max: 500, default: 0, comment: "Requires $60K annual spend to unlock. Not relevant for most cardholders." },
    { name: "$100 Marriott Bonvoy Property Credit", desc: "$100 credit at Ritz-Carlton or St. Regis for 2+ night direct bookings with special rate.", min: 0, max: 100, default: 0 },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "Earn up to 21X at Marriott Properties", desc: "6x card + 10x Marriott member + 5x Platinum Elite = 21x at Marriott hotels. Estimate annual value.", min: 0, max: 1000, default: 0 },
    { name: "3X at Restaurants and on Flights", desc: "3x at restaurants worldwide and flights booked directly with airlines. Estimate annual value.", min: 0, max: 500, default: 0 },
    { name: "2X on All Other Purchases", desc: "2x on all other eligible purchases. Estimate annual cash-equivalent value.", min: 0, max: 400, default: 0 },

    // Travel Perks
    { section: "Travel Perks", name: "Priority Pass", desc: "Unlimited visits to 1,300+ airport lounges worldwide. Enrollment required. Guests not included.", min: 0, max: 300, default: 0 },
    { name: "Fee Credit for Global Entry or TSA PreCheck", desc: "$120 Global Entry or $85 TSA PreCheck credit once per 4-year period.", min: 0, max: 30, default: 0, comment: "Annualized: $120 / 4 years = $30/yr for Global Entry, $85 / 4 = ~$21/yr for PreCheck." },
    { name: "Premium Internet Access", desc: "Free premium (faster) WiFi at participating Marriott properties.", min: 0, max: 50, default: 0 },
    { name: "No Foreign Transaction Fees", desc: "No ~3% fee on international purchases. Estimate annual savings.", min: 0, max: 200, default: 0 },
    { name: "Premium Global Assist Hotline", desc: "24/7 emergency coordination with premium services including emergency medical transportation.", min: 0, max: 50, default: 0 },

    // Travel & Purchase Protections
    { section: "Travel & Purchase Protections", name: "Cell Phone Protection", desc: "Up to $800/claim for damage/theft, 2 claims per 12 months, $50 deductible. Must pay wireless bill with card.", min: 0, max: 100, default: 0 },
    { name: "Trip Cancellation and Interruption Insurance", desc: "Up to $10K/trip for non-refundable expenses if trip canceled/interrupted for covered reasons.", min: 0, max: 100, default: 0 },
    { name: "Trip Delay Insurance", desc: "Up to $500/trip for expenses when delayed 6+ hours. Max 2 claims per 12 months.", min: 0, max: 50, default: 0 },
    { name: "Car Rental Loss and Damage Insurance", desc: "Secondary coverage for damage/theft of rental vehicles when paid with card.", min: 0, max: 50, default: 0 },
    { name: "Baggage Insurance Plan", desc: "Up to $3,000 combined carry-on/checked for lost, damaged, or stolen baggage.", min: 0, max: 30, default: 0 },
    { name: "Return Protection", desc: "Return items up to 90 days if seller won't accept. Up to $300/item, $1K/year.", min: 0, max: 50, default: 0 },
    { name: "Purchase Protection", desc: "Covers purchases 90 days against damage/theft, up to $10K/item, $50K/year.", min: 0, max: 50, default: 0 },
    { name: "Extended Warranty", desc: "+1 year on manufacturer warranties of ≤5 years.", min: 0, max: 30, default: 0 },
  ];

  const card = {
    id: 'amex-marriott-bonvoy-brilliant',
    detailUrl: 'amex-marriott-bonvoy-brilliant.html',
    name: 'Marriott Bonvoy Brilliant® American Express® Card',
    issuer: 'American Express',
    network: 'Amex',
    type: 'Personal',
    categories: ['Hotel', 'Travel', 'Dining'],
    annualFee: 650,
    signOnBonusLabel: '150K pts + $250',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
