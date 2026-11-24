# Future Time Guesser

A local, five-scenario game built with Next.js App Router, React, TypeScript and Tailwind CSS. Choose a decade for each pictured future, review your predictions, then play again.

## Run locally

Install Git and Node.js 24 LTS (including npm). If you use nvm on macOS or Linux, run `nvm install` in the checkout. With nvm-windows use `nvm install 24` and `nvm use 24`.

These commands work in Windows PowerShell, macOS Terminal (zsh), and Linux bash. The explicit checkout folder keeps its capitalization consistent on case-sensitive systems.

```
git clone https://github.com/Alexxu1177/Future-Time-Guesser.git future-time-guesser
cd future-time-guesser
npm ci
npm run dev
```

Open http://localhost:3000. Keep the terminal open while playing. Press Ctrl+C to stop. If port 3000 is occupied, stop the other process and retry. If PowerShell blocks npm.ps1, use `npm.cmd ci` and `npm.cmd run dev` in that terminal.

Installation needs internet access. The game serves its images, scenario data and styles locally. It requires no account, API key, environment file or database.

## Team checks

Run `npm run typecheck` and `npm run build` with the dev server stopped. Use `npm start` to serve the completed build locally. To smoke-test the game, start a session, select and submit a year for each of the five scenarios, verify the five years on the results screen, then play again. Check keyboard navigation and a narrow browser window.

## Project structure and design status

- `app/page.tsx` handles the start screen, year selection, session results and replay. Session state resets on refresh.
- `data/scenarios.ts` holds the allowed years and five replaceable demo captions. The images illustrate speculative settings. The team has yet to supply official scenarios, an answer key or scoring rules. The demo records predictions and displays the selected decades.
- `public/images/` contains all five photos. Replace a photo and its caption and alt text together.
- `app/layout.tsx` and `app/globals.css` define the English document, metadata and responsive layout.

## Demo image sources

Photos sourced from Unsplash and bundled locally:

- [Scene 1](https://images.unsplash.com/photo-1518770660439-4636190af475)
- [Scene 2](https://images.unsplash.com/photo-1518005020951-eccb494ad742)
- [Scene 3](https://images.unsplash.com/photo-1446776811953-b23d57bd21aa)
- [Scene 4](https://images.unsplash.com/photo-1509391366360-2e959784a276)
- [Scene 5](https://images.unsplash.com/photo-1518837695005-2083093ee35b)
