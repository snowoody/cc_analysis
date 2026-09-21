// Delta SkyMiles Gold American Express Card data
(function() {
  const terms = {
    "Up to 80,000 Bonus Miles + $250 Statement Credit": `Welcome Offer: You may be eligible for as high as 80,000 Bonus Miles and a $250 Statement Credit after you spend $3,000 in eligible purchases on your new Card in your first 6 months of Card Membership. Apply to find out your offer. Offer ends 11/04/2026.

The actual welcome offer you receive depends on your eligibility and may be lower. To find your offer, click "Apply Now" on the card page.

Delta SkyMiles are valued at 1¢ per mile as a baseline (the Pay with Miles redemption rate). Award flight redemptions can yield higher value (1.2-2¢+), particularly for premium cabin and partner awards. TPG values SkyMiles at 1.2¢ each.

Welcome offer eligibility may be restricted if you currently have or have previously held this Card (Amex one-bonus-per-lifetime rule). Terms apply.`,

    "$200 Delta Flight Credit": `$200 Delta Flight Credit: After you spend $10,000 in purchases on your Card in a calendar year, you can receive a $200 Delta Flight Credit to use toward future travel.

This is a spend-based credit — you must hit $10,000 in total card spend during a calendar year to unlock it. The credit applies to Delta flights only.`,

    "$100 Delta Stays Credit": `Delta Stays Credit: Get up to $100 back per year as a statement credit after using your Delta SkyMiles® Gold American Express Card to book prepaid hotels or vacation rentals through Delta Stays on delta.com.

Only bookings made through Delta Stays on delta.com qualify. Standard hotel bookings through other channels do not count.`,

    "$120 Rideshare Credit": `Rideshare Credit: With your $120 Rideshare Credit, earn up to $10 back in statement credits each month after your first Card renewal when you use your Delta SkyMiles® Gold American Express Card for U.S. rideshare purchases with select providers. Enrollment required.

This credit begins after your first Card renewal — it is not available in the first year. Up to $10/month, $120/year. Must enroll in the benefit.`,

    "Check First Bag Free + Second Bag Free (Domestic)": `Free Checked Bags: Check your first bag for free on Delta flights worldwide and get your second bag free when flying domestically.

The benefit applies even if you don't pay for the flight with the card — your SkyMiles number just needs to be on the reservation. The benefit also extends to up to 8 companions on the same reservation.

Delta's standard checked bag fees are $45 for the first bag and $55 for the second bag on most domestic flights. For a round-trip domestic flight, free first and second bags save up to $200 per trip.`,

    "Zone 5 Priority Boarding": `Zone 5 Priority Boarding: Receive Zone 5 Priority Boarding on Delta flights; board early, stow your carry-on bag and settle in sooner.

Zone 5 boards before General Boarding but after Medallion members, premium cabin passengers, and Delta credit card holders with higher-tier cards. It helps ensure overhead bin space for your carry-on.`,

    "15% Off Award Travel": `TakeOff 15: Delta SkyMiles® Gold American Express Card Members get 15% off when using miles to book Award Travel on Delta flights through delta.com and the Fly Delta app. Discount not applicable to partner-operated flights or to taxes and fees.

Example: A 25,000-mile award ticket costs only 21,250 miles with this discount, saving 3,750 miles (~$45 at 1.2¢/mile).`,

    "20% Off Delta Inflight Purchases": `Inflight Savings: Receive a 20% savings in the form of a statement credit on eligible Delta in-flight purchases after using your Card. Includes food, beverages, and headsets. Wi-Fi purchases are excluded.`,

    "2X Miles at Delta": `2X Delta SkyMiles: Earn 2 miles per dollar on eligible purchases made directly with Delta. Includes flights, Delta Vacations, seat upgrades, Wi-Fi, and other Delta purchases.`,

    "2X Miles at Restaurants": `2X SkyMiles at Restaurants: Earn 2 miles per dollar at restaurants worldwide, including takeout and delivery in the U.S. This is one of the card's strongest everyday earning categories.`,

    "2X Miles at U.S. Supermarkets": `2X SkyMiles at U.S. Supermarkets: Earn 2 miles per dollar at U.S. supermarkets. Does not include superstores like Walmart and Target, or warehouse clubs like Costco.`,

    "1X Miles on Other Purchases": `1X SkyMiles: Earn 1 mile per dollar on all other eligible purchases made using the Delta SkyMiles® Gold American Express Card.`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: No additional fees on purchases made abroad. The standard 3% foreign transaction fee charged by most cards is waived.`,

    "Pay with Miles": `Pay with Miles: Take up to $50 off the cost of your flight for every 5,000 miles you redeem with Pay with Miles when you book on delta.com. This values miles at 1¢ each — generally not the best redemption but provides flexibility for when cash savings matter more than maximizing mile value.`,

    "Car Rental Loss and Damage Insurance": `Car Rental Loss and Damage Insurance: When you use your Eligible Card to reserve and pay for the Entire Rental and decline the collision damage waiver (CDW) at the Rental Company counter, you can be covered for Damage to or Theft of a Rental Vehicle in a Covered Territory. This product provides secondary coverage and does not include liability coverage. Not all vehicle types or rentals are covered. Coverage is not available for vehicles rented in Australia, Italy, and New Zealand.`,

    "Baggage Insurance Plan": `Baggage Insurance Plan: Coverage for lost, damaged, or stolen baggage when you purchase the entire fare on an Eligible Card. Coverage can be provided for up to $1,250 for carry-on baggage and up to $500 for checked baggage, in excess of coverage provided by the Common Carrier.`,

    "Extended Warranty": `Extended Warranty: When you use your Eligible Card to make a Covered Purchase, you can get up to one extra year added to the Original Manufacturer's Warranty. Applies to warranties of 5 years or less on Covered Purchases in the United States or its territories or possessions.`,

    "Purchase Protection": `Purchase Protection: When you use your Eligible Card for Covered Purchases, your Membership can help protect them for up to 90 days from the Covered Purchase date for theft, accidental damage, or loss. Up to $10,000 per Covered Purchase, up to $50,000 per calendar year.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "Up to 80,000 Bonus Miles + $250 Statement Credit", desc: "Up to 80k bonus miles + $250 credit after $3k spend in 6 months (ends 11/4/26). Adjust value per mile.", min: 0, max: 2.5, default: 1.0, miles: 80000, fixedExtra: 250, firstYearOnly: true, comment: "Pay with Miles values SkyMiles at 1¢/mile; TPG values them at 1.2¢. The \"up to\" 80k offer depends on eligibility — many applicants receive lower offers." },

    // Annual Credits
    { section: "Annual Credits", name: "$200 Delta Flight Credit", desc: "After spending $10,000 on the card in a calendar year, receive a $200 Delta flight credit", min: 0, max: 200, default: 0, comment: "Requires $10k annual card spend to unlock. Only valuable if you'd naturally hit that threshold." },
    { name: "$100 Delta Stays Credit", desc: "Up to $100/year on prepaid Delta Stays bookings (hotels/vacation rentals on delta.com)", min: 0, max: 100, default: 0 },
    { name: "$120 Rideshare Credit", desc: "Up to $10/month on U.S. rideshare purchases after first card renewal. Enrollment required.", min: 0, max: 120, default: 0, comment: "Only kicks in after your first renewal (not available year 1). $10/mo cap means you need consistent monthly use." },

    // Delta Flight Benefits
    { section: "Delta Flight Benefits", name: "Check First Bag Free + Second Bag Free (Domestic)", desc: "First checked bag free worldwide + second bag free on U.S. domestic Delta flights. Extends to 8 companions on same reservation.", min: 0, max: 500, default: 0, comment: "At $45+$55 = $100/way saved on domestic round-trips with two bags. Doesn't require paying for the flight with the card." },
    { name: "Zone 5 Priority Boarding", desc: "Board before general boarding on Delta flights; helps secure overhead bin space", min: 0, max: 50, default: 0 },
    { name: "15% Off Award Travel", desc: "15% miles discount on Delta award flights booked on delta.com or Fly Delta app", min: 0, max: 300, default: 0 },
    { name: "20% Off Delta Inflight Purchases", desc: "20% back as statement credit on eligible inflight purchases (food, beverages, headsets — excludes Wi-Fi)", min: 0, max: 50, default: 0 },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "2X Miles at Delta", desc: "2X SkyMiles on purchases made directly with Delta. Estimate annual value of bonus miles.", min: 0, max: 1000, default: 0 },
    { name: "2X Miles at Restaurants", desc: "2X SkyMiles at restaurants worldwide (including U.S. takeout/delivery). Estimate annual value.", min: 0, max: 1000, default: 0 },
    { name: "2X Miles at U.S. Supermarkets", desc: "2X SkyMiles at U.S. supermarkets (excludes superstores like Walmart/Target). Estimate annual value.", min: 0, max: 1000, default: 0 },
    { name: "1X Miles on Other Purchases", desc: "1X SkyMiles on all other eligible purchases. Estimate annual value.", min: 0, max: 1000, default: 0 },

    // Other Travel Benefits
    { section: "Other Travel Benefits", name: "No Foreign Transaction Fees", desc: "No 3% fee on international purchases", min: 0, max: 300, default: 0 },
    { name: "Pay with Miles", desc: "Redeem miles at 1¢/mile for Delta flights booked on delta.com ($50 off per 5,000 miles)", min: 0, max: 100, default: 0 },

    // Travel & Purchase Protections
    { section: "Travel & Purchase Protections", name: "Car Rental Loss and Damage Insurance", desc: "Secondary coverage for damage/theft of rental vehicles when paid in full with the card", min: 0, max: 100, default: 0 },
    { name: "Baggage Insurance Plan", desc: "Up to $1,250 carry-on, $500 checked when fare paid with the card", min: 0, max: 50, default: 0 },
    { name: "Extended Warranty", desc: "+1 year on manufacturer warranties of ≤5 years for purchases made with the card", min: 0, max: 50, default: 0 },
    { name: "Purchase Protection", desc: "90-day coverage for damage/theft/loss. Up to $10k/purchase, $50k/year.", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'amex-delta-gold',
    detailUrl: 'amex-delta-gold.html',
    name: 'Delta SkyMiles® Gold American Express Card',
    issuer: 'American Express',
    network: 'American Express',
    type: 'Personal',
    categories: ['Travel', 'Airline', 'Delta SkyMiles'],
    annualFee: 150,
    annualFeeFirstYear: 0,
    signOnBonusLabel: 'Up to 80,000 SkyMiles + $250',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
