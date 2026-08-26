// Marriott Bonvoy Bevy American Express Card data
(function() {
  const terms = {
    "125,000 Marriott Bonvoy Points": `Welcome Offer: Earn 125,000 Marriott Bonvoy® Bonus Points plus a $150 Statement Credit after you use your new Card to make $5,000 in purchases within the first 6 months of Card Membership. Offer ends 9/30/26.

Marriott Bonvoy points are generally valued at approximately 0.7–0.8¢ per point for hotel redemptions. At 0.7¢/point, 125,000 points ≈ $875 in hotel value, plus the $150 statement credit = ~$1,025 total. Points can also be transferred to over 38 airline partners at a 3:1 ratio (with a 5,000-mile bonus per 60,000 points transferred).

Welcome offer eligibility may be restricted if you currently have or have previously held certain Marriott Bonvoy cards from American Express. Terms apply.`,

    "Free Night Award (after $15K spend)": `Marriott Bonvoy Bevy® Free Night Award: Card Members can earn 1 Free Night Award after spending $15,000 on eligible purchases with their Marriott Bonvoy Bevy® American Express® Card in a calendar year. Award can be used for one night (redemption level at or under 50,000 Marriott Bonvoy® points) at a participating hotel.

Certain hotels have resort fees. The Free Night Award expires 12 months after issuance. Award is non-transferable and has no cash value. Account must be open and in good standing at time of fulfillment.`,

    "Marriott Bonvoy Gold Elite Status": `Marriott Bonvoy® Gold Elite Status: As a Marriott Bonvoy Bevy® Card Member, you receive complimentary Marriott Bonvoy Gold Elite status. Benefits include:
- 25% Bonus Points on stays (up to 2.5X additional points from Marriott Bonvoy)
- Enhanced room upgrades (subject to availability)
- 2 PM late checkout (subject to availability)
- Welcome gift (points)

Status is maintained as long as your card account remains open and in good standing. Enrollment required.`,

    "15 Elite Night Credits": `15 Elite Night Credits: Each calendar year with your Marriott Bonvoy Bevy® American Express® Card, you can receive 15 Elite Night Credits towards the next level of Marriott Bonvoy® Elite status.

Limitations apply per Marriott Bonvoy member account. Benefit is not exclusive to Cards offered by American Express. Elite Night Credits from credit cards count toward achieving higher elite status tiers (e.g., 50 nights for Platinum Elite, 75 nights for Titanium Elite).`,

    "1,000 Bonus Points Per Stay": `Marriott Bonvoy® 1K Bonus Points Per Stay: Earn 1,000 Marriott Bonvoy® bonus points per paid eligible stay booked directly with Marriott for properties participating in Marriott Bonvoy.

A "stay" is defined as consecutive nights at the same property. This benefit applies regardless of the length of stay (1 night or 7 nights = 1,000 bonus points). Must be booked directly with Marriott (not through third-party booking sites). Terms apply. See www.marriott.com/loyalty/terms/default.mi for more information.`,

    "Earn up to 18.5X at Marriott Properties": `Earn up to 18.5X Marriott Bonvoy® points on eligible purchases at hotels participating in Marriott Bonvoy:
- 6X points with the Marriott Bonvoy Bevy® Amex Card
- Up to 10X points from Marriott Bonvoy for being a member
- Up to 2.5X points from Marriott Bonvoy with the 25% Bonus Points on Stays (Gold Elite benefit)

Total: up to 18.5X points per $1 spent at participating Marriott hotels. Earn rates for non-stay charges may differ.`,

    "4X at Restaurants and U.S. Supermarkets": `Bonus Category Earning: Earn 4X Marriott Bonvoy points per $1 spent at restaurants worldwide (including takeout and delivery in the U.S.) and at U.S. Supermarkets, on up to $15,000 in combined purchases at restaurants and U.S. supermarkets per calendar year, then 2X points.

Merchants are identified by codes established by the payment network. A purchase may not earn the higher rate if the merchant's code does not fall in an eligible category.`,

    "2X on All Other Purchases": `Base Earning: Earn 2X Marriott Bonvoy points per $1 spent on all other eligible purchases that don't qualify for higher earning rates.

Eligible purchases exclude cash advances, fees, interest charges, balance transfers, and returns/credits.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: Pay no foreign transaction fees from American Express when you use your Card on purchases made outside the United States. The standard ~3% foreign transaction fee charged by most cards is waived.`,

    "Car Rental Loss and Damage Insurance": `Car Rental Loss and Damage Insurance: When you use your Eligible Card to reserve and pay for the Entire Rental and decline the collision damage waiver (CDW) at the Rental Company counter, you can be covered for Damage to or Theft of a Rental Vehicle in a Covered Territory.

This is secondary coverage and does not include liability coverage. Not all vehicle types or rentals are covered. Coverage is not available for vehicles rented in Australia, Italy, and New Zealand. Please read important exclusions and restrictions.`,

    "Global Assist Hotline": `Global Assist® Hotline: 24/7 access to emergency coordination and assistance services when traveling more than 100 miles from home. Services include:
- Medical and legal referrals
- Emergency transportation coordination
- Lost luggage assistance
- Emergency hotel check-in assistance

Card Members are responsible for the costs charged by third-party service providers.`,

    "Baggage Insurance Plan": `Baggage Insurance Plan: Coverage for lost, damaged, or stolen Baggage when you purchase the Entire Fare for a Common Carrier Vehicle ticket on an Eligible Card.

Coverage: up to $1,250 for carry-on Baggage and up to $500 for checked Baggage, in excess of coverage provided by the Common Carrier. For New York State residents, there is a $10,000 aggregate maximum limit for all Covered Persons per Covered Trip.`,

    "Trip Delay Insurance": `Trip Delay Insurance: If a round-trip is paid for entirely with your Eligible Card and a covered reason delays your trip more than 12 hours, Trip Delay Insurance can help reimburse certain additional expenses purchased on the same Eligible Card, up to $300 per trip, maximum 2 claims per Eligible Card per 12 consecutive month period.

Coverage is provided by New Hampshire Insurance Company, an AIG Company. Terms, conditions and limitations apply.`,

    "Purchase Protection": `Purchase Protection: When you use your Eligible Card for Covered Purchases, your Membership can help protect them for up to 90 days from the Covered Purchase date against theft, accidental damage, or loss.

Up to $10,000 per Covered Purchase, up to $50,000 per calendar year. Please read important exclusions and restrictions.`,

    "Extended Warranty": `Extended Warranty: When you use your Eligible Card to make a Covered Purchase, you can get up to one extra year added to the Original Manufacturer's Warranty.

Applies to warranties of 5 years or less on Covered Purchases in the United States or its territories or possessions. Please read important exclusions and restrictions.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "125,000 Marriott Bonvoy Points", desc: "125,000 points + $150 statement credit after $5,000 spend in first 6 months. Adjust your value per point.", min: 0, max: 1.5, default: 0.7, miles: 125000, firstYearOnly: true, comment: "Marriott Bonvoy points are generally valued at 0.7–0.8¢/point for hotel redemptions. Transfer to airlines at 3:1 (60K Marriott = 20K airline + 5K bonus at 60K) can yield higher value on premium awards." },
    { name: "Sign-On Statement Credit", desc: "$150 statement credit as part of the welcome offer.", min: 0, max: 150, default: 150, firstYearOnly: true },

    // Annual Marriott Benefits
    { section: "Annual Marriott Benefits", name: "Free Night Award (after $15K spend)", desc: "1 Free Night Award after $15K annual spend. Redeemable at properties up to 50,000 points.", min: 0, max: 400, default: 0, comment: "Requires $15K spend to earn. Award capped at 50K points (~Category 5 properties). Most users value at $150–$300 if earned." },
    { name: "Marriott Bonvoy Gold Elite Status", desc: "25% bonus points on stays, room upgrades, late checkout. Estimate value based on Marriott stays.", min: 0, max: 200, default: 0 },
    { name: "15 Elite Night Credits", desc: "15 ENCs toward higher Marriott elite status tiers each calendar year.", min: 0, max: 150, default: 0, comment: "Value depends on proximity to next elite tier. Worth $0 if you don't stay at Marriott enough to use them toward a higher tier." },
    { name: "1,000 Bonus Points Per Stay", desc: "1K Marriott Bonvoy bonus points per paid eligible stay booked directly with Marriott.", min: 0, max: 100, default: 15 },

    // Earning Potential (annual estimate)
    { section: "Earning Potential (annual estimate)", name: "Earn up to 18.5X at Marriott Properties", desc: "6x card + 10x Marriott member + 2.5x Gold Elite = 18.5x at Marriott hotels. Estimate annual value.", min: 0, max: 800, default: 0 },
    { name: "4X at Restaurants and U.S. Supermarkets", desc: "4x at restaurants/supermarkets (up to $15K combined, then 2x). Estimate annual cash-equivalent value.", min: 0, max: 500, default: 0 },
    { name: "2X on All Other Purchases", desc: "2x on all other eligible purchases. Estimate annual cash-equivalent value.", min: 0, max: 400, default: 0 },

    // Travel Perks
    { section: "Travel Perks", name: "No Foreign Transaction Fees", desc: "No ~3% fee on international purchases. Estimate annual savings.", min: 0, max: 200, default: 0 },
    { name: "Global Assist Hotline", desc: "24/7 emergency coordination when traveling 100+ miles from home. Card Member pays for services.", min: 0, max: 50, default: 0 },

    // Travel & Purchase Protections
    { section: "Travel & Purchase Protections", name: "Car Rental Loss and Damage Insurance", desc: "Secondary coverage for damage/theft of rental vehicles when paid with card.", min: 0, max: 50, default: 0 },
    { name: "Baggage Insurance Plan", desc: "Up to $1,250 carry-on / $500 checked for lost, damaged, or stolen baggage.", min: 0, max: 30, default: 0 },
    { name: "Trip Delay Insurance", desc: "Up to $300/trip for expenses when delayed 12+ hours. Max 2 claims per 12 months.", min: 0, max: 50, default: 0 },
    { name: "Purchase Protection", desc: "Covers purchases 90 days against damage/theft, up to $10K/item, $50K/year.", min: 0, max: 50, default: 0 },
    { name: "Extended Warranty", desc: "+1 year on manufacturer warranties of ≤5 years.", min: 0, max: 30, default: 0 },
  ];

  const card = {
    id: 'amex-marriott-bonvoy-bevy',
    detailUrl: 'amex-marriott-bonvoy-bevy.html',
    name: 'Marriott Bonvoy Bevy® American Express® Card',
    issuer: 'American Express',
    network: 'Amex',
    type: 'Personal',
    categories: ['Hotel', 'Travel', 'Dining'],
    annualFee: 250,
    signOnBonusLabel: '125K pts + $150',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
