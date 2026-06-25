// Citi® / AAdvantage® Executive World Elite Mastercard® data
(function() {
  const terms = {
    "70,000 Mile Sign-On Bonus": `Earn 70,000 American Airlines AAdvantage® bonus miles after spending $7,000 on purchases within the first 3 months of account opening.

New account bonus is not available if you have received a new account bonus for a Citi® / AAdvantage® Executive account in the past 48 months, or if you converted another Citi credit card account on which you earned a new account bonus in the last 48 months into a Citi® / AAdvantage® Executive account. Offer only available to U.S. residents (excluding Puerto Rico and the U.S. Virgin Islands) and may not be available if you leave the application page.

AAdvantage miles are commonly valued around 1.4–1.65¢ each (e.g., The Points Guy). Adjust the slider to your own per-mile value.`,

    "Complimentary Admirals Club® Membership": `Primary cardmembers enjoy a complimentary Admirals Club® membership — a value of up to $850 (the standalone Admirals Club membership fee is $700–$850/year). Access Admirals Club lounges worldwide plus partner lounges, with complimentary drinks and snacks, free Wi-Fi, conference rooms, and more.

This is the card's headline benefit and the only Citi / AAdvantage card to include full Admirals Club membership. Value is highest if you would otherwise pay for an Admirals Club membership or fly American Airlines frequently. If already a member, you may be eligible for a prorated refund.`,

    "Up to 20,000 Additional Loyalty Points": `Earn a 10,000 Loyalty Point bonus after reaching 50,000 Loyalty Points in a status qualification year, and another 10,000 Loyalty Point bonus after reaching 90,000 Loyalty Points in the same status qualification year (up to 20,000 additional Loyalty Points).

Loyalty Points count toward AAdvantage® elite status, not redeemable miles. Value depends on whether you are pursuing status and can hit these thresholds.`,

    "Global Entry® or TSA PreCheck® Credit": `Receive a statement credit, up to $120 every four years, as reimbursement for your Global Entry® or TSA PreCheck® application fee. One statement credit per account every 4 years. Annualized value: ~$30/year (Global Entry $120/4yrs) or ~$21/year (TSA PreCheck $85/4yrs).`,

    "Enhanced Airport Experience": `Enjoy an enhanced airport experience including priority check-in, priority security screening (where available), and priority boarding when flying with American Airlines. Availability varies by airport.`,

    "First Checked Bag Free": `First checked bag free on domestic American Airlines itineraries for you and up to 8 travel companions on the same reservation. The primary cardmember must be on the reservation. A single checked bag is typically $35–$40 each way; value depends on how many domestic AA round trips you take and how many companions travel with you.`,

    "Save 25% on Inflight Purchases": `Receive 25% savings on inflight food and beverage purchases on American Airlines flights when you pay with your Citi® / AAdvantage® Executive credit card. The savings are applied as a statement credit. Estimate your annual value based on how often you buy onboard.`,

    "Up to $120 Avis/Budget Car Rental Credit": `Earn up to $120 in statement credits every calendar year when eligible prepaid car rentals are booked directly on avis.com or budget.com and paid with your card. Value depends on whether you rent from Avis or Budget.`,

    "Up to $120 Lyft Credit": `After taking 3 eligible Lyft rides in a calendar month, earn a $10 Lyft credit, for a total of up to $120 back in Lyft credits annually. Requires linking your card to your Lyft account. Value depends on monthly Lyft usage (you must take 3+ rides in a month to earn that month's $10 credit).`,

    "Up to $120 Grubhub Credit": `Earn a statement credit of up to $10 per monthly billing statement on eligible Grubhub purchases, for a total of up to $120 every 12 billing statements. Value depends on whether you order through Grubhub at least monthly.`,

    "Travel Protection Benefits": `Help protect your next trip with Trip Cancellation & Interruption Protection, Trip Delay Protection, Lost Baggage Protection, and Worldwide Car Rental Insurance Coverage. Coverage is provided through Mastercard®; terms, limits, and exclusions apply — see your Guide to Benefits.`,

    "No Foreign Transaction Fees": `Pay no foreign transaction fee on purchases made outside of the United States. The typical 3% foreign transaction fee is waived. Estimate annual savings based on your international spend.`,

    "Loyalty Points for Status": `Earn 1 Loyalty Point for every 1 eligible AAdvantage® mile earned from purchases. Loyalty Points count toward AAdvantage® elite status (Gold, Platinum, Platinum Pro, Executive Platinum), separate from the redeemable miles you earn. Value depends on whether you are pursuing AAdvantage status.`,

    "10 Miles on Eligible Hotels & Car Rentals": `Earn 10 AAdvantage® miles for every $1 spent on eligible hotels booked through aadvantagehotels.com and on eligible car rentals booked through aadvantagecars.com.`,

    "4 Miles on Eligible American Airlines Purchases": `Earn 4 AAdvantage® miles for every $1 spent on eligible American Airlines purchases.`,

    "5 Miles on AA Purchases (after $150k spend)": `After you spend $150,000 in purchases in a calendar year, earn a total of 5 AAdvantage® miles for every $1 spent on eligible American Airlines purchases for the remainder of the year. Only relevant for very high spenders.`,

    "1 Mile on Other Purchases": `Earn 1 AAdvantage® mile for every $1 spent on all other purchases.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "70,000 Mile Sign-On Bonus", desc: "70,000 AAdvantage miles after spending $7,000 on purchases within the first 3 months. Adjust your value per mile.", min: 0, max: 2.5, default: 1.5, miles: 70000, firstYearOnly: true, comment: "AAdvantage miles valued ~1.4–1.65¢ each. Not eligible if you've received an Executive bonus in the past 48 months." },

    // Lounge & Travel Perks
    { section: "Lounge & Travel Perks", name: "Complimentary Admirals Club® Membership", desc: "Full Admirals Club membership (standalone fee $700–$850/yr). The card's headline perk. Estimate your personal annual value.", min: 0, max: 850, default: 0, comment: "Worth the most if you'd otherwise pay for Admirals Club access or fly American frequently. The only Citi/AAdvantage card with full membership." },
    { name: "Enhanced Airport Experience", desc: "Priority check-in, screening, and boarding when flying American Airlines. Availability varies by airport.", min: 0, max: 50, default: 0 },
    { name: "First Checked Bag Free", desc: "First checked bag free on domestic AA itineraries for you + up to 8 companions on the same reservation. Estimate your annual value.", min: 0, max: 400, default: 0 },
    { name: "Travel Protection Benefits", desc: "Trip cancellation/interruption, trip delay, lost baggage, and worldwide car rental insurance coverage.", min: 0, max: 150, default: 0 },

    // Annual Credits
    { section: "Annual Credits", name: "Up to $120 Lyft Credit", desc: "$10 Lyft credit after 3 rides in a calendar month, up to $120/year. Estimate your usable value.", min: 0, max: 120, default: 20, comment: "Requires 3+ Lyft rides in a month to earn that month's $10 credit. Requires linking your card to Lyft." },
    { name: "Up to $120 Grubhub Credit", desc: "$10/month statement credit on eligible Grubhub purchases, up to $120/year. Estimate your usable value.", min: 0, max: 120, default: 20, comment: "Easy to use if you order through Grubhub at least monthly." },
    { name: "Up to $120 Avis/Budget Car Rental Credit", desc: "$120/year in statement credits on eligible prepaid Avis/Budget rentals booked directly. Estimate your usable value.", min: 0, max: 120, default: 50, comment: "Only valuable if you rent from Avis or Budget and book prepaid directly on their sites." },
    { name: "Save 25% on Inflight Purchases", desc: "25% back as a statement credit on inflight food & beverage purchases on AA flights. Estimate annual value.", min: 0, max: 75, default: 0 },
    { name: "Global Entry® or TSA PreCheck® Credit", desc: "$120 (GE) or $85 (TSA PreCheck) every 4 years. Annualized ~$30/yr.", min: 0, max: 30, default: 0 },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "10 Miles on Eligible Hotels & Car Rentals", desc: "10x AAdvantage miles on hotels via aadvantagehotels.com and car rentals via aadvantagecars.com. Estimate annual value (miles ~1.4¢ each).", min: 0, max: 500, default: 0 },
    { name: "4 Miles on Eligible American Airlines Purchases", desc: "4x AAdvantage miles on eligible American Airlines purchases. Estimate annual value.", min: 0, max: 500, default: 0 },
    { name: "5 Miles on AA Purchases (after $150k spend)", desc: "5x on eligible AA purchases after $150,000 in calendar-year spend. Only relevant for very high spenders.", min: 0, max: 300, default: 0, comment: "Requires $150,000 in purchases in a calendar year before the boosted rate kicks in." },
    { name: "1 Mile on Other Purchases", desc: "1x AAdvantage mile on all other purchases. Estimate annual value.", min: 0, max: 300, default: 0 },
    { name: "Up to 20,000 Additional Loyalty Points", desc: "10k LP bonus at 50k LP + 10k LP bonus at 90k LP in a status year. Only count if you're pursuing status.", min: 0, max: 200, default: 0, comment: "Loyalty Points are separate from redeemable miles and only matter if you're chasing AAdvantage elite status." },
    { name: "Loyalty Points for Status", desc: "1 Loyalty Point per eligible mile earned, counting toward AAdvantage elite status. Only count if you're pursuing status.", min: 0, max: 200, default: 0, comment: "Loyalty Points are separate from redeemable miles and only matter if you're chasing AAdvantage elite status." },

    // Other Benefits
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No 3% foreign transaction fee on international purchases. Estimate annual savings based on international spend.", min: 0, max: 200, default: 0 },
  ];

  const card = {
    id: 'citi-aadvantage-executive',
    detailUrl: 'citi-aadvantage-executive.html',
    name: 'Citi® / AAdvantage® Executive World Elite Mastercard®',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Travel', 'Airline', 'Miles', 'Premium'],
    annualFee: 595,
    signOnBonusLabel: '70,000 miles',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
