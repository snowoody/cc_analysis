# Credit Card Analysis Project Conventions

## Benefit Comments

Only add a `comment` to a benefit if there is something special or non-obvious to explain that isn't already clear from the `name` and `desc` fields. Keep comments concise and limit the number of comments per card — most benefits should not need one.

Good reasons to add a comment:
- The default value is derived from a non-obvious calculation (e.g., miles valuation at a specific cpp)
- There's a key restriction or caveat that materially affects the value (e.g., requires another card to unlock full value)
- The benefit works differently than expected

Do NOT add comments that:
- Restate what's already in the description
- Provide basic math the user can figure out (e.g., "At $50K spend = $1,000 cash back")
- Explain obvious things (e.g., "Useful for businesses with variable purchasing needs")

## Benefit Descriptions

Keep `desc` fields short and informative. Do not include instructions like "Enter estimated annual value" — the UI makes the slider purpose obvious.

## Terms

The `terms` object provides expanded details shown when a user clicks on a benefit name. These should include the full official terms, restrictions, and useful context from the card issuer.
