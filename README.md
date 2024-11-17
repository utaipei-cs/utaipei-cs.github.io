# UTCSSA Tech-Group Website

## Prerequisites

### Locally

1. Install [PNPM](https://pnpm.io/)
2. Run `cp .env.development.local.template .env.development.local`
   > If you'd like to build the website locally, you will need to run `cp .env.development.local.template .env.development.local` as well and provide your env variables.
3. Run `pnpm i && pnpm dev`

## Deploy to GitHub Pages

1. Run `pnpm run build`
2. Run `pnpm run deploy`

## Built with

- Next js
- Tailwindcss
- TypeScript
- VSCode
- And these useful of JavaScript libraries [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details
