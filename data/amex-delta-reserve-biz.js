// Delta SkyMiles Reserve Business American Express Card data
(function() {
  const terms = {
    "Up to 200,000 Bonus Miles": `Welcome Offer: For a limited time, earn up to 200,000 Bonus Miles after spending $20,000 in purchases on your new Card in your first 6 months of Card Membership. Offer ends 11/4/26.

The actual welcome offer you receive depends on your eligibility and may be lower (commonly 50,000-80,000 miles). To find your offer, click "Apply Now" on the card page.

Delta SkyMiles are valued at 1¢ per mile as a baseline (the Pay with Miles redemption rate). Award flight redemptions can yield higher value (1.2-2¢+), particularly for premium cabin and partner awards.

Welcome offer eligibility may be restricted if you currently have or have previously held this Card. Terms apply.`,

    "Delta Sky Club Access (15 Visits / Unlimited at $75k)": `Delta Sky Club® Access: As a Delta SkyMiles® Reserve Business Card Member, you receive 15 Visits each Medallion® Year to the Delta Sky Club® when flying Delta. You can unlock Unlimited Delta Sky Club Access after spending $75,000 in purchases on your Card during a calendar year.

Plus, you receive four One-Time Guest Passes each Medallion Year, so you can share the experience with others when traveling on Delta together.

Amex estimates up to $950 in annual value if you use all 15 Visits and all 4 Guest Passes (based on $50 per-Visit rate).

You must be flying Delta on a same-day flight to access the Sky Club.`,

    "Centurion Lounge & Escape Lounge Access": `Centurion Lounge & Escape Lounge Access: Enjoy complimentary access to The Centurion® Lounge in the U.S. and select international locations, Sidecar by The Centurion® Lounge in the U.S., and Escape Lounges when flying on a Delta flight booked with the Delta SkyMiles® Reserve Business Card.

Card Members must arrive within 90 minutes of their departing flight to access Sidecar by The Centurion Lounge and within 3 hours of their departing flight to access The Centurion Lounge. Terms apply.`,

    "Annual Companion Certificate": `Annual Companion Certificate: Receive a Companion Certificate each year after renewal of your Card for a round-trip ticket in Delta First, Delta Comfort+, or Delta Main cabin on domestic, Caribbean, or Central American flights.

The Companion Certificate requires payment of government-imposed taxes and fees of between $22 and $250 (for itineraries with up to four flight segments). Baggage charges and other restrictions apply. Delta Basic experiences are not eligible for this benefit.

Value varies widely depending on the route and cabin class. Domestic First Class companion tickets can save $300-$800+.`,

    "$240 Resy Credit": `Resy Credit: Earn up to $240 back in statement credits annually at over 10,000 qualifying U.S. Resy restaurants after making eligible purchases on your enrolled Card. Card member can earn up to $20 each month in statement credits. Enrollment required.`,

    "$120 Rideshare Credit": `Rideshare Credit: Earn up to $10 back in statement credits each month on U.S. rideshare purchases with select providers after you pay with your Card. That's up to $120 back annually. Enrollment required.`,

    "Up to $250 Delta Stays Credit": `Delta Stays Credit: Earn an annual statement credit of up to $250 after using your Delta SkyMiles® Reserve Business Card to book prepaid hotels or vacation rentals through Delta Stays on delta.com.`,

    "MQD Headstart ($2,500)": `MQD Headstart: Receive $2,500 Medallion® Qualification Dollars (MQDs) each Medallion Qualification Year automatically. That means you can get halfway to Silver Medallion Status (which requires $5,000 MQDs) for next Medallion Year without any spending.`,

    "MQD Boost ($1 MQD per $10 spend)": `MQD Boost: Earn $1 Medallion® Qualification Dollar for each $10 of purchases made on your Card in a calendar year. This provides a boost toward achieving elevated Medallion Status for next Medallion Year.

At $50,000 annual spend: $5,000 MQDs (Silver Medallion)
At $100,000 annual spend: $10,000 MQDs (Gold Medallion)
At $150,000 annual spend: $15,000 MQDs (Platinum Medallion)
At $200,000 annual spend: $20,000 MQDs (Diamond Medallion)

Combined with the $2,500 MQD Headstart, reaching status is easier.`,

    "Check Two Bags Free": `Free Checked Bags: Your first checked bag flies free on international and domestic Delta flights. Your second bag also flies free on domestic Delta flights.

Delta's standard checked bag fees are $35 for the first bag and $45 for the second bag each way. For a round-trip domestic flight, free first and second bags save up to $160 per trip.`,

    "15% Off Award Travel": `15% Off Award Travel: Save 15% anytime you book Award Travel with miles on Delta flights when using delta.com or the Fly Delta app. Discount not applicable to partner-operated flights or to taxes and fees.

Example: A 25,000-mile award ticket costs only 21,250 miles with this discount.`,

    "Upgrade Priority": `Upgrade Priority: Receive upgrade priority over others with your Medallion tier, product and fare experience purchased, and Million Miler milestone when you fly with Delta. This means you'll be prioritized for complimentary upgrades ahead of other passengers at the same Medallion level who do not hold the Reserve card.`,

    "1.5X Miles Boost After $150k Spend": `Spending Boost: After you spend $150,000 in purchases on your Card in a calendar year, earn 1.5X miles on all eligible purchases for the rest of the year. If your purchase qualifies for a category that has a higher mileage accelerator (like 3X at Delta), only the higher accelerator will apply.`,

    "3X Miles at Delta": `3X Delta SkyMiles: Earn 3 miles per dollar on eligible purchases made directly with Delta. Includes flights, Delta Vacations, seat upgrades, Wi-Fi, and other Delta purchases.`,

    "1.5X Miles on Transit, Shipping, Office Supplies": `1.5X SkyMiles: Earn 1.5 miles per dollar on eligible transit purchases, U.S. shipping purchases, and U.S. office supply store purchases.`,

    "1X Miles on Other Purchases": `1X SkyMiles: Earn 1 mile per dollar on all other eligible purchases made using the Delta SkyMiles® Reserve Business Card.`,

    "Hertz President's Circle Status": `Hertz President's Circle® Status: Complimentary Hertz President's Circle status — the highest tier in Hertz Gold Plus Rewards. Benefits include guaranteed car or upgrade, special vehicles, 50% bonus points, and expedited service.

Enrollment in the Hertz Gold Plus Rewards program required. You must add your Hertz account number to your SkyMiles account and enroll in the promotion at delta.com/hertz.`,

    "Global Entry / TSA PreCheck Credit": `Fee Credit for Global Entry or TSA PreCheck®: Receive a statement credit for a five-year membership every 4 years after applying for Global Entry ($120) or TSA PreCheck® (up to $85 through a TSA PreCheck official enrollment provider) and paying the application fee with your card. Annualized value: ~$30/year (Global Entry) or ~$21/year (TSA PreCheck).`,

    "No Foreign Transaction Fees": `No Foreign Transaction Fees: No additional fees on purchases made abroad. Standard 3% foreign transaction fee on most cards is waived.`,

    "Pay with Miles": `Pay with Miles: Take up to $50 off the cost of your flight for every 5,000 miles you redeem with Pay with Miles when you book on delta.com. This values miles at 1¢ each — generally not the best redemption but provides flexibility.`,

    "Cell Phone Protection": `Cell Phone Protection: You can be reimbursed up to $800 per claim for repair or replacement of your damaged or stolen cell phone, with a limit of 2 approved claims per 12-month period, when your cell phone line is listed on a wireless bill and the prior month's wireless bill was paid by an Eligible Card Account. A $50 deductible applies to each approved claim. Coverage provided by New Hampshire Insurance Company, an AIG Company.`,

    "Car Rental Loss and Damage Insurance": `Car Rental Loss and Damage Insurance: When you use your Eligible Card to reserve and pay for the Entire Rental and decline the collision damage waiver (CDW) at the Rental Company counter, you can be covered for Damage to or Theft of a Rental Vehicle in a Covered Territory. This product provides secondary coverage and does not include liability coverage. Not all vehicle types or rentals are covered. Coverage is not available for vehicles rented in Australia, Italy, and New Zealand.`,

    "Trip Delay Insurance": `Trip Delay Insurance: If a round-trip is paid for entirely with your Eligible Card and a covered reason delays your trip more than 6 hours, Trip Delay Insurance can help reimburse certain additional expenses purchased on the same Eligible Card, up to $500 per trip, maximum 2 claims per Eligible Card per 12 consecutive month period. Coverage provided by New Hampshire Insurance Company, an AIG Company.`,

    "Trip Cancellation and Interruption Insurance": `Trip Cancellation and Interruption Insurance: If a round-trip is paid for entirely with your Eligible Card and a covered reason cancels or interrupts your trip, Trip Cancellation and Interruption Insurance can help reimburse the non-refundable travel expenses purchased with the same Eligible Card, up to $10,000 per trip and up to $20,000 per Eligible Card per 12 consecutive month period. Coverage provided by New Hampshire Insurance Company, an AIG Company.`,

    "Baggage Insurance Plan": `Baggage Insurance Plan: Coverage for lost, damaged, or stolen baggage when you purchase the entire fare on an Eligible Card. Coverage can be provided for up to $1,250 for carry-on baggage and up to $500 for checked baggage, in excess of coverage provided by the Common Carrier.`,

    "Extended Warranty": `Extended Warranty: When you use your Eligible Card to make a Covered Purchase, you can get up to one extra year added to the Original Manufacturer's Warranty. Applies to warranties of 5 years or less on Covered Purchases in the United States or its territories or possessions.`,

    "Purchase Protection": `Purchase Protection: When you use your Eligible Card for Covered Purchases, your Membership can help protect them for up to 90 days from the Covered Purchase date for theft, accidental damage, or loss. Up to $10,000 per Covered Purchase, up to $50,000 per calendar year.`,

    "Premium Global Assist Hotline": `Premium Global Assist® Hotline: 24/7 medical, legal, financial, and other select emergency coordination and assistance services while traveling more than 100 miles from home. Emergency medical transportation assistance may be provided at no cost only if approved and coordinated by Premium Global Assist Hotline. Card Members may be responsible for the costs charged by third-party service providers.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "Up to 200,000 Bonus Miles", desc: "Up to 200,000 bonus miles after $20k spend in 6 months (limited-time offer, ends 11/4/26). Adjust value per mile.", min: 0, max: 2.5, default: 1.0, miles: 200000, firstYearOnly: true, comment: `Pay with Miles values SkyMiles at 1¢/mile. Award flight redemptions can yield 1.2-2¢+. The "up to" 200k offer depends on eligibility — many applicants receive 50k-80k.` },

    // Annual Credits
    { section: "Annual Credits", name: "$240 Resy Credit", desc: "Up to $20/month at 10,000+ qualifying U.S. Resy restaurants. Enrollment required.", min: 0, max: 240, default: 120, comment: "Easy to use if you dine at Resy restaurants, but $20/mo cap means you need consistent monthly use." },
    { name: "$120 Rideshare Credit", desc: "Up to $10/month on U.S. rideshare purchases. Enrollment required.", min: 0, max: 120, default: 80 },
    { name: "Up to $250 Delta Stays Credit", desc: "Annual credit on prepaid Delta Stays bookings (hotels/vacation rentals on delta.com)", min: 0, max: 250, default: 0 },

    // Delta Flight Benefits
    { section: "Delta Flight Benefits", name: "Delta Sky Club Access (15 Visits / Unlimited at $75k)", desc: "15 Sky Club visits/Medallion Year + 4 guest passes. Unlimited access after $75k annual spend.", min: 0, max: 1200, default: 0, comment: "Amex estimates up to $950 value (at $50/visit × 15 + 4 guest passes). Only usable when flying Delta." },
    { name: "Centurion Lounge & Escape Lounge Access", desc: "Complimentary Centurion Lounge and Escape Lounge access when flying Delta on a ticket purchased with the card", min: 0, max: 500, default: 0 },
    { name: "Annual Companion Certificate", desc: "Companion cert for domestic/Caribbean/Central America round-trip in First, Comfort+, or Main (after renewal)", min: 0, max: 800, default: 150, comment: "Value depends heavily on route and cabin. Domestic First Class companion tickets can save $300-$800+. Taxes/fees of $22-$250 still apply." },
    { name: "Check Two Bags Free", desc: "First + second checked bags free on Delta flights (domestic & international first bag, domestic second bag)", min: 0, max: 500, default: 0, comment: "At $35+$45 = $80/trip saved on domestic round-trips. Estimate based on number of Delta flights/year." },
    { name: "15% Off Award Travel", desc: "15% miles discount on Delta award flights booked on delta.com or Fly Delta app", min: 0, max: 300, default: 0, comment: "Value depends on how many award flights you book. A 25k-mile ticket saves 3,750 miles (~$45 at 1.2cpp)." },
    { name: "Upgrade Priority", desc: "Priority for complimentary upgrades over same-tier Medallion members without the Reserve card", min: 0, max: 300, default: 0 },

    // Medallion Status Benefits
    { section: "Medallion Status Acceleration", name: "MQD Headstart ($2,500)", desc: "$2,500 MQDs automatically each Medallion Year — halfway to Silver status", min: 0, max: 500, default: 0, comment: "Valued at what it would cost in Delta spend to earn equivalent MQDs. Only valuable if actively pursuing Medallion status." },
    { name: "MQD Boost ($1 MQD per $10 spend)", desc: "Earn MQDs from everyday card spending ($1 MQD per $10). Estimate annual value of status earned.", min: 0, max: 1000, default: 0, comment: "Value depends on your spend level and how much you value Medallion status. At $50k spend = Silver; $100k = Gold." },
    { name: "1.5X Miles Boost After $150k Spend", desc: "All purchases earn 1.5X miles after $150k annual spend. Estimate extra miles value.", min: 0, max: 500, default: 0 },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "3X Miles at Delta", desc: "3X SkyMiles on purchases made directly with Delta. Estimate annual value of bonus miles.", min: 0, max: 1500, default: 0 },
    { name: "1.5X Miles on Transit, Shipping, Office Supplies", desc: "1.5X SkyMiles on transit, U.S. shipping, and U.S. office supply stores. Estimate annual value.", min: 0, max: 500, default: 0 },
    { name: "1X Miles on Other Purchases", desc: "1X SkyMiles on all other eligible purchases. Estimate annual value.", min: 0, max: 1000, default: 0 },

    // Other Travel Benefits
    { section: "Other Travel Benefits", name: "Hertz President's Circle Status", desc: "Top-tier Hertz status: guaranteed car/upgrade, special vehicles, 50% bonus points", min: 0, max: 200, default: 0 },
    { name: "Global Entry / TSA PreCheck Credit", desc: "$120 (GE) or $85 (TSA PreCheck) every 4 years. Annualized ~$30/yr.", min: 0, max: 30, default: 0 },
    { name: "No Foreign Transaction Fees", desc: "No 3% fee on international purchases", min: 0, max: 300, default: 0 },
    { name: "Pay with Miles", desc: "Redeem miles at 1¢/mile for Delta flights booked on delta.com ($50 off per 5,000 miles)", min: 0, max: 100, default: 0 },
    { name: "Premium Global Assist Hotline", desc: "24/7 emergency coordination while traveling 100+ miles from home", min: 0, max: 50, default: 0 },

    // Travel & Purchase Protections
    { section: "Travel & Purchase Protections", name: "Cell Phone Protection", desc: "Up to $800/claim, 2 claims/12mo, $50 deductible. Pay wireless bill with the card.", min: 0, max: 100, default: 0 },
    { name: "Car Rental Loss and Damage Insurance", desc: "Secondary coverage for damage/theft of rental vehicles when paid in full with the card", min: 0, max: 100, default: 0 },
    { name: "Trip Delay Insurance", desc: "Up to $500/trip if delayed 6+ hours. Max 2 claims per 12 months.", min: 0, max: 100, default: 0 },
    { name: "Trip Cancellation and Interruption Insurance", desc: "Up to $10k/trip, $20k/yr for non-refundable expenses if covered cancellation/interruption", min: 0, max: 200, default: 0 },
    { name: "Baggage Insurance Plan", desc: "Up to $1,250 carry-on, $500 checked when fare paid with the card", min: 0, max: 50, default: 0 },
    { name: "Extended Warranty", desc: "+1 year on manufacturer warranties of ≤5 years for purchases made with the card", min: 0, max: 50, default: 0 },
    { name: "Purchase Protection", desc: "90-day coverage for damage/theft/loss. Up to $10k/purchase, $50k/year.", min: 0, max: 100, default: 0 },
  ];

  const card = {
    id: 'amex-delta-reserve-biz',
    detailUrl: 'amex-delta-reserve-biz.html',
    name: 'Delta SkyMiles® Reserve Business Card',
    issuer: 'American Express',
    network: 'American Express',
    type: 'Business',
    categories: ['Travel', 'Airline', 'Delta SkyMiles'],
    annualFee: 650,
    signOnBonusLabel: 'Up to 200,000 SkyMiles',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
