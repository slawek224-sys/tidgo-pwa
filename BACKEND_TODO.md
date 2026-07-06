# TidGo Backend TODO

## OCR receipt amount

- If a receipt shows split payment, for example cash plus debit card, do not use only one payment method as the receipt total.
- Prefer the final grand total / total paid / amount due.
- If no grand total is visible but cash and card payment lines clearly belong to the same transaction, sum those payment lines.
- Ignore change, cashback, cash tendered, card number fragments, loyalty points, VAT, tax, discounts and savings as possible totals.

## OCR date

- Keep extracting the transaction date from the receipt where visible.
- If the receipt date is missing or unclear, use upload date.
- Consider returning a confidence / warning when date was guessed.

## OCR cost control

- Send the compressed receipt image to OpenAI, not the original full-size upload.
- Keep OCR and humour in one OpenAI call.
- Add image hash / duplicate guard so retries do not run OCR twice for the same image.

## Request missing docs

- Add backend endpoint for accountant "request missing docs".
- Send email through Resend from TidGo to the connected client.
- Store a small audit log: accountant email, client id, message type, timestamp.

## Storage

- Current receipt photos are stored in MongoDB as base64 data.
- Plan migration to external file storage later, keeping only metadata and file URL/reference in MongoDB.
