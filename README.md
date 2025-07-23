# Modern Portfolio - Next.js

A modern, responsive portfolio website with stunning earth and space themes. Built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🌍 **Earth Theme (Light Mode)**: Beautiful natural landscape with animated elements
- 🚀 **Space Theme (Dark Mode)**: Cosmic experience with stars, planets, and nebulae
- 📱 **Fully Responsive**: Optimized for all devices
- ⚡ **Performance Optimized**: Built with Next.js 14 and modern best practices
- 🎨 **Smooth Animations**: Framer Motion and CSS animations
- 🔧 **TypeScript**: Type-safe development
- 💨 **TailwindCSS**: Utility-first styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── About.tsx
    ├── Background.tsx
    ├── Contact.tsx
    ├── Hero.tsx
    ├── Navigation.tsx
    ├── Projects.tsx
    ├── Skills.tsx
    └── ThemeProvider.tsx
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Lucide React** - Icons
- **Framer Motion** - Animations (optional)

## Customization

### Themes

The portfolio features two distinct themes:

- **Light Mode (Earth)**: Natural colors, earth elements, organic animations
- **Dark Mode (Space)**: Cosmic colors, space elements, celestial animations

### Colors

Theme colors are defined in `tailwind.config.js`:

```javascript
colors: {
  earth: {
    sky: '#87CEEB',
    grass: '#32CD32',
    forest: '#228B22',
    // ...
  },
  space: {
    void: '#000000',
    nebula: '#8B5CF6',
    star: '#FFFFFF',
    // ...
  }
}
```

## Deployment

The easiest way to deploy is to use [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/portfolio)

## License

This project is open source and available under the [MIT License](LICENSE).
