# SMTP2GO Setup

This project uses a Netlify serverless function to process contact form submissions and send them through SMTP2GO.

## Required Variables

Add these variables in Netlify:

- `CONTACT_FORM_RECIPIENT`
- `SMTP2GO_API_KEY`
- `SMTP2GO_SENDER`

You can mirror the same values in a local `.env` file when testing with `netlify dev`.

## Recommended SMTP2GO Setup

1. Verify the sender address or sender domain you want to use for `SMTP2GO_SENDER`.
2. Create an API key in SMTP2GO with permission to call the `/email/send` endpoint.
3. In Netlify, set the three environment variables above for all deploy contexts you use.
4. Deploy the site.
5. Submit the form on `/kontakt` or in the contact section on the homepage.

## Function Flow

1. The browser sends a `POST` request to `/api/contact`.
2. Netlify redirects `/api/contact` to `/.netlify/functions/contact`.
3. The function validates the payload and checks the honeypot field.
4. The function calls the SMTP2GO `/email/send` API.
5. A success or error response is returned to the form UI.

## Notes

- The function uses the `X-Smtp2go-Api-Key` header and posts to `https://api.smtp2go.com/v3/email/send`.
- SMTP2GO requires the sender address to be authorized on your account.
- If the environment variables are missing, the function returns a configuration error response.

## Troubleshooting

- `500` from the function usually means one or more environment variables are missing.
- `502` from the function usually means SMTP2GO rejected the request or returned a send failure.
- If messages do not arrive, first confirm that `SMTP2GO_SENDER` is a verified sender and that the API key has send permissions.
