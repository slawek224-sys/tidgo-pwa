# TidGo Backend TODO

## OCR receipt amount

- If a receipt shows split payment, for example cash plus debit card, do not use only one payment method as the receipt total.
- Prefer the final grand total / total paid / amount due.
- If no grand total is visible but cash and card payment lines clearly belong to the same transaction, sum those payment lines.
- Ignore change, cashback, cash tendered, card number fragments, loyalty points, VAT, tax, discounts and savings as possible totals.

## OCR date

- Keep extracting the transaction date from the receipt where visible.
- Treat two-digit receipt years as the current century unless the receipt clearly proves otherwise, for example `01/07/26` should become `2026-07-01`, not `2006-07-01`.
- If OCR returns a very old date from a modern-looking receipt, flag it for review instead of silently saving it.
- If the receipt date is missing or unclear, use upload date.
- Consider returning a confidence / warning when date was guessed.
- Add a "re-check receipt date" option for old receipts, so records uploaded before OCR/date fixes can be corrected without deleting and uploading again.

## OCR cost control

- Send the compressed receipt image to OpenAI, not the original full-size upload.
- Keep OCR and humour in one OpenAI call.
- Add image hash / duplicate guard so retries do not run OCR twice for the same image.

## Request missing docs

- Add backend endpoint for accountant "request missing docs".
- Send email through Resend from TidGo to the connected client.
- Store a small audit log: accountant email, client id, message type, timestamp.

## Accountant portal summaries

- Make sure accountant downloads can request monthly, calendar quarter and UK tax quarter packs explicitly.
- Use the same UK tax quarter boundaries as the PWA: 6 Apr, 6 Jul, 6 Oct and 6 Jan.

## Storage

- Current receipt photos are stored in MongoDB as base64 data.
- Income proofs in the PWA are currently kept as lightweight "proof attached" metadata only, to avoid mobile browser storage quota errors.
- Add backend storage for income proof photos/PDFs before relying on them as full downloadable evidence.
- Income proof files should not go through OpenAI/OCR by default. Users enter amount, date and description manually, while the proof file goes straight to storage and Mongo keeps only metadata plus a file reference.
- Expense uploads currently support image files/screenshots for OCR. PDF invoices/receipts should go to storage first, then either use a PDF extraction path or ask the user to upload a screenshot/photo until PDF support is added.
- Plan migration to external file storage later, keeping only metadata and file URL/reference in MongoDB.

## Admin panel / user management

PWA route prepared: `/admin/`.

Backend must be the source of truth and must protect every admin endpoint. Do not rely on the PWA to hide admin controls.

### Suggested auth

- Environment variable: `ADMIN_EMAILS=hello@tidgo.co.uk,...`
- `POST /api/admin/auth/request`
  - body: `{ "email": "admin@example.com" }`
  - send a six-digit login code only if the email is in `ADMIN_EMAILS`
  - always return a generic success response so unknown emails are not leaked
- `POST /api/admin/auth/verify`
  - body: `{ "email": "admin@example.com", "code": "123456" }`
  - return: `{ "admin_email": "...", "token": "short_lived_admin_jwt", "expires_at": "..." }`
  - token should be short-lived and checked on every `/api/admin/*` endpoint
- Later optional 2FA: add WhatsApp/admin TOTP after email-code admin works reliably. Do not use WhatsApp as the first admin login method.

### User fields to add/normalise in Mongo

- `customer_ref` such as `TID-000184` for support and admin work
- `account_plan`: `early_access`, `free_trial`, `paid`, `lifetime_free`, `blocked`
- `account_status`: `active`, `payment_required`, `tester`, `suspicious`, `blocked`
- `trial_started_at`
- `trial_ends_at`
- `free_until`
- `lifetime_free`
- `subscription_status`
- `stripe_customer_id`
- `admin_notes`
- usage counters / rollups:
  - `receipts_count`
  - `income_count`
  - `whatsapp_records_count`
  - `email_records_count`
  - `storage_mb`
  - `last_active_at`
  - `accountant_connected`

### Admin endpoints expected by PWA

- `GET /api/admin/users`
  - returns `{ "users": [...] }` or a plain array
  - each user can include masked email (`email_masked`) rather than full email if preferred
- `PATCH /api/admin/users/{user_id}`
  - body fields:
    - `account_plan`
    - `account_status`
    - `free_until`
    - `lifetime_free`
    - `admin_notes`
  - stores an audit log entry: admin email, user id, changed fields, timestamp

### Access decision logic

- Allow access if `lifetime_free` is true.
- Allow access if `free_until` is in the future.
- Allow access if Stripe/subscription status is active.
- Allow access during early access while global early-access mode is enabled.
- If trial/free access expired, return a clear status so PWA/Android can show a payment screen later.
- If account is blocked, return a clear support/contact message.
