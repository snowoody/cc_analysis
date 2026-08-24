// Citi® / AAdvantage® Executive World Legend Mastercard® data
(function() {
  const terms = {
    "125,000 Mile Sign-On Bonus": `Earn 125,000 American Airlines AAdvantage® bonus miles after spending $15,000 on purchases within the first 5 months of account opening.

New account bonus is not available if you have received a new account bonus for a Citi® / AAdvantage® Executive account in the past 48 months, or if you converted another Citi credit card account on which you earned a new account bonus in the last 48 months into a Citi® / AAdvantage® Executive account. Offer only available to U.S. residents (excluding Puerto Rico and the U.S. Virgin Islands) and may not be available if you leave the application page.

AAdvantage miles are commonly valued around 1.4–1.65¢ each (e.g., The Points Guy). Adjust the slider to your own per-mile value.`,

    "Complimentary Admirals Club® Membership": `Primary cardmembers enjoy a complimentary Admirals Club® membership — a value of up to $1,400 (the standalone Admirals Club membership fee is $1,200–$1,400/year). Access over 100 Admirals Club® lounges and partner lounges worldwide, with complimentary drinks and snacks, free Wi-Fi, conference rooms, and more.

Primary cardmembers may bring up to 2 guests or immediate family members per visit. This is the card's headline benefit and the only Citi / AAdvantage card to include full Admirals Club membership. If already a member, you may be eligible for a prorated refund on your existing membership.`,

    "Up to 40,000 Additional Loyalty Points": `Earn a 10,000 Loyalty Point bonus after reaching 50,000, 90,000, 165,000, and 240,000 Loyalty Points in the same status qualification year (up to 40,000 additional Loyalty Points).

Loyalty Points count toward AAdvantage® elite status (Gold, Platinum, Platinum Pro, Executive Platinum), not redeemable miles. Value depends on whether you are pursuing status and can hit these thresholds through a combination of flying and card spending.`,

    "Global Entry® or TSA PreCheck® Credit": `Receive a statement credit, up to $120 every four years, as reimbursement for your Global Entry® or TSA PreCheck® application fee. One statement credit per account every 4 years. Annualized value: ~$30/year (Global Entry $120/4yrs) or ~$21/year (TSA PreCheck $85/4yrs).`,

    "Enhanced Airport Experience": `Enjoy priority check-in, airport screening (where available), and priority boarding when flying American Airlines for you and up to 8 companions traveling with you on the same reservation.`,

    "First Checked Bag Free": `First checked bag free on domestic American Airlines itineraries for you and up to 8 companions traveling with you on the same reservation. A savings of up to $900 per round trip (AA's claim based on maximum companions). A single checked bag is typically $35–$40 each way; value depends on how many domestic AA round trips you take and how many companions travel with you.`,

    "Up to $100 Inflight & Admirals Club Credit": `Every calendar year, earn up to $100 in statement credits on inflight and eligible Admirals Club® purchases when you use your card. Covers food, beverages, Wi-Fi, and other purchases made inflight or at Admirals Club lounges.`,

    "Up to $500 AA Vacations℠ Credit": `Every calendar year, earn up to $500 in statement credits on eligible American Airlines Vacations℠ travel packages or experiences. Earn up to $250 on purchases January through June and up to $250 July through December.

This is a new benefit. Value depends on whether you book travel packages through American Airlines Vacations (aa.com/vacations). The semi-annual structure means you need to book in both halves of the year to maximize the full $500.`,

    "Up to $120 Avis/Budget Car Rental Credit": `Earn up to $120 in statement credits every calendar year when eligible prepaid car rentals are booked directly on avis.com or budget.com and paid with your card. Value depends on whether you rent from Avis or Budget.`,

    "Up to $180 Lyft Credit": `After taking 3 eligible Lyft rides in a calendar month, earn a $15 Lyft credit, for a total of up to $180 back in Lyft credits annually. Requires linking your card to your Lyft account. Value depends on monthly Lyft usage (you must take 3+ rides in a month to earn that month's $15 credit).`,

    "Omni Free Night Award & Champion Status": `Primary cardmembers are eligible to enroll in Omni Hotels and Resorts Champion Status. Plus, once per calendar year, primary cardmembers can earn an Omni Free Night Award after completing a qualifying stay. Enrollment into the Champion Status benefit is required.

Champion Status benefits include room upgrades (when available), early check-in/late checkout, and other perks. The Free Night Award requires a qualifying stay first and is earned once per calendar year.`,

    "Complimentary Avis President's Club® Status": `Primary cardmembers are eligible to enroll in complimentary Avis President's Club® status through August 31, 2028. President's Club enrollment can be accessed via the primary cardmember's AAdvantage® Rewards page located in their AAdvantage® account (or by visiting aa.com/aadvantage-program/profile/wallet).

President's Club benefits include counter bypass, preferred car selection, and upgrades when available.`,

    "Travel Protection Benefits": `Help protect your next trip with Trip Cancellation & Interruption Protection, Trip Delay Protection, Lost Baggage Protection, and Worldwide Car Rental Insurance Coverage. Coverage is provided through Mastercard®; terms, limits, and exclusions apply — see your Guide to Benefits.`,

    "No Foreign Transaction Fees": `Pay no foreign transaction fee on purchases made outside of the United States. The typical 3% foreign transaction fee is waived. Estimate annual savings based on your international spend.`,

    "Loyalty Points for Status": `Earn 1 Loyalty Point for every 1 eligible AAdvantage® mile earned from purchases. Loyalty Points count toward AAdvantage® elite status (Gold, Platinum, Platinum Pro, Executive Platinum), separate from the redeemable miles you earn. Value depends on whether you are pursuing AAdvantage status.`,

    "12 Miles on Eligible Hotels & Car Rentals": `Earn 12 AAdvantage® miles for every $1 spent on eligible AAdvantage Hotels® bookings and eligible AAdvantage Cars® bookings. This is an upgraded benefit (previously 10x).`,

    "4 Miles on Eligible American Airlines Purchases": `Earn 4 AAdvantage® miles for every $1 spent on eligible American Airlines purchases.`,

    "5 Miles on AA Purchases (after $150k spend)": `After you spend $150,000 in purchases in a calendar year, earn a total of 5 AAdvantage® miles for every $1 spent on eligible American Airlines purchases for the remainder of the year. Only relevant for very high spenders.`,

    "1 Mile on Other Purchases": `Earn 1 AAdvantage® mile for every $1 spent on all other purchases.`,
  };

  const benefits = [
    // Sign-On Bonus (first year only)
    { section: "Sign-On Bonus (First Year Only)", name: "125,000 Mile Sign-On Bonus", desc: "125,000 AAdvantage miles after spending $15,000 on purchases within the first 5 months. Adjust your value per mile.", min: 0, max: 2.5, default: 1.5, miles: 125000, firstYearOnly: true, comment: "AAdvantage miles valued ~1.4–1.65¢ each. Not eligible if you've received an Executive bonus in the past 48 months." },

    // Lounge & Travel Perks
    { section: "Lounge & Travel Perks", name: "Complimentary Admirals Club® Membership", desc: "Full Admirals Club membership (standalone fee $1,200–$1,400/yr) with access to 100+ lounges worldwide. Up to 2 guests or immediate family.", min: 0, max: 1400, default: 0, comment: "The only Citi/AAdvantage card with full membership. Worth the most if you'd otherwise pay for Admirals Club access." },
    { name: "Enhanced Airport Experience", desc: "Priority check-in, screening, and boarding on AA flights for you + up to 8 companions on the same reservation.", min: 0, max: 50, default: 0 },
    { name: "First Checked Bag Free", desc: "First checked bag free on domestic AA itineraries for you + up to 8 companions on the same reservation. Estimate your annual value.", min: 0, max: 400, default: 0 },
    { name: "Travel Protection Benefits", desc: "Trip cancellation/interruption, trip delay, lost baggage, and worldwide car rental insurance coverage.", min: 0, max: 150, default: 0 },

    // Annual Credits
    { section: "Annual Credits", name: "Up to $500 AA Vacations℠ Credit", desc: "$500/year in statement credits on AA Vacations packages ($250 Jan–Jun + $250 Jul–Dec). Estimate your usable value.", min: 0, max: 500, default: 0, comment: "Split into two semi-annual periods. Must book through AA Vacations (aa.com/vacations) to qualify." },
    { name: "Up to $180 Lyft Credit", desc: "$15 Lyft credit after 3 rides in a calendar month, up to $180/year. Estimate your usable value.", min: 0, max: 180, default: 0, comment: "Requires 3+ Lyft rides in a month to earn that month's $15 credit." },
    { name: "Up to $120 Avis/Budget Car Rental Credit", desc: "$120/year in statement credits on eligible prepaid Avis/Budget rentals booked directly. Estimate your usable value.", min: 0, max: 120, default: 0, comment: "Only valuable if you rent from Avis or Budget and book prepaid directly on their sites." },
    { name: "Up to $100 Inflight & Admirals Club Credit", desc: "$100/year in statement credits on inflight and eligible Admirals Club purchases. Estimate annual value.", min: 0, max: 100, default: 0 },
    { name: "Global Entry® or TSA PreCheck® Credit", desc: "$120 (GE) or $85 (TSA PreCheck) every 4 years. Annualized ~$30/yr.", min: 0, max: 30, default: 0 },

    // Hotel & Car Perks
    { section: "Hotel & Car Perks", name: "Omni Free Night Award & Champion Status", desc: "Omni Hotels Champion Status + one Free Night Award per year after a qualifying stay. Estimate annual value.", min: 0, max: 250, default: 0, comment: "Requires enrollment and a qualifying stay to earn the free night. Champion Status provides room upgrades and other perks." },
    { name: "Complimentary Avis President's Club® Status", desc: "Counter bypass, preferred car selection, and upgrades when available through Avis.", min: 0, max: 50, default: 0, comment: "Available through August 31, 2028. Enrollment required via AAdvantage account." },

    // Earning Potential
    { section: "Earning Potential (annual estimate)", name: "12 Miles on Eligible Hotels & Car Rentals", desc: "12x AAdvantage miles on hotels via AAdvantage Hotels and car rentals via AAdvantage Cars. Estimate annual dollar value earned (miles ~1.4¢ each).", min: 0, max: 500, default: 0, comment: "Upgraded from 10x. Book through aadvantagehotels.com / aadvantagecars.com." },
    { name: "4 Miles on Eligible American Airlines Purchases", desc: "4x AAdvantage miles on eligible American Airlines purchases. Estimate annual dollar value earned.", min: 0, max: 500, default: 0 },
    { name: "5 Miles on AA Purchases (after $150k spend)", desc: "5x on eligible AA purchases after $150,000 in calendar-year spend. Only relevant for very high spenders.", min: 0, max: 300, default: 0, comment: "Requires $150,000 in purchases in a calendar year before the boosted rate kicks in." },
    { name: "1 Mile on Other Purchases", desc: "1x AAdvantage mile on all other purchases. Estimate annual dollar value earned.", min: 0, max: 300, default: 0 },
    { name: "Up to 40,000 Additional Loyalty Points", desc: "10k LP bonus at 50k, 90k, 165k, and 240k LP in a status year. Only count if you're pursuing status.", min: 0, max: 400, default: 0, comment: "Upgraded from 20,000 (previously only 2 tiers). Now 4 tiers for up to 40,000 bonus LP." },
    { name: "Loyalty Points for Status", desc: "1 Loyalty Point per eligible mile earned, counting toward AAdvantage elite status. Only count if you're pursuing status.", min: 0, max: 200, default: 0, comment: "Loyalty Points are separate from redeemable miles and only matter if you're chasing AAdvantage elite status." },

    // Other Benefits
    { section: "Other Benefits", name: "No Foreign Transaction Fees", desc: "No 3% foreign transaction fee on international purchases. Estimate annual savings based on international spend.", min: 0, max: 200, default: 0 },
  ];

  const card = {
    id: 'citi-aadvantage-executive',
    detailUrl: 'citi-aadvantage-executive.html',
    name: 'Citi® / AAdvantage® Executive World Legend Mastercard®',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'Personal',
    categories: ['Travel', 'Airline', 'Miles', 'Premium'],
    annualFee: 695,
    signOnBonusLabel: '125,000 miles',
    benefits: benefits,
    terms: terms,
  };

  window.CARDS = window.CARDS || [];
  window.CARDS.push(card);
})();
