# Full-Stack Link Shortener

A simple URL shortener application built using Next.js and Supabase.

## Live URL

https://full-stack-link-shortener.vercel.app

## GitHub Repository

https://github.com/sravyasri916-bit/Full-Stack-Link-Shortener
## Tech Stack

* Next.js
* TypeScript
* Supabase (PostgreSQL)
* Vercel

## Features

* Shorten long URLs
* Generate unique short codes
* Redirect users to original URLs
* Store links in database

## Environment Variables

Create a `.env.local` file and add:

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

## Database Schema

Table: `links`

| Column       | Type      |
| ------------ | --------- |
| id           | bigint    |
| short_code   | text      |
| original_url | text      |
| created_at   | timestamp |

## Run Locally

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables in `.env.local`

4. Start the development server

```bash
npm run dev
```

5. Open http://localhost:3000

## Future Improvements

* Click tracking
* Custom short codes
* URL validation
* Analytics dashboard

## Notes

This project was built as part of the Dridha Technologies Full-Stack Link Shortener take-home assignment.
