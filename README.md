# Wedding Invitation

A responsive wedding invitation built with React and Vite. It includes English and Kannada content, a live countdown, photo gallery, family blessings, venue directions, WhatsApp RSVP, and background music.

## Requirements

- Node.js 18 or later
- npm

## Run Locally

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Vite prints the local URL in the terminal, usually `http://localhost:5173`.

## Available Commands

```sh
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Languages

All invitation text is loaded from [`public/languages.json`](public/languages.json). Each top-level key is a language code, and each language object contains a `label` used by the language switcher plus the text values used by the page.

To add a language:

1. Add another language object to `public/languages.json`, using a unique language code such as `ta`.
2. Copy the keys from the existing `en` or `kn` object and translate each value. Keep the same keys so every part of the invitation has a translation.
3. Set `label` to the text that should appear on the language button.
4. If the new language needs a special font, add its font to `src/WeddingInvitation.jsx` and update the `bodyFont` selection there.

The language buttons are generated from the JSON entries, so no separate button needs to be added in the component.

## Static Assets

Place these files in `public/` using the names referenced by the app:

- `classical.mp3` for the background music
- `couple.jpg`, `1.jpg`, `2.jpg`, and `3.jpg` for the invitation photos
- `languages.json` for translated text

Audio autoplay depends on browser policy. Some mobile browsers, especially older Android browsers, require a user tap before audible playback; the invitation shows a tap-to-start prompt when automatic playback is blocked.

## Invitation Details

The countdown target date is configured in `src/WeddingInvitation.jsx`. Event wording, family names, RSVP text, and other translated content are configured in `public/languages.json`.
