
# Libya Mother & Child Exhibition Website

A beautiful, responsive static website for the Libya Mother & Child Exhibition 2025.

## 🌟 Features

- **Modern Design**: Clean, family-friendly design with soft color palette
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with React 19, TypeScript, and Tailwind CSS
- **SEO Ready**: Complete meta tags, structured data, and social media optimization
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Animation**: Smooth animations and transitions using Tailwind CSS
- **Static Export**: Fully static site deployable anywhere

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd libya-mother-child-exhibition
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components (auto-generated)
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Section.tsx      # Layout section wrapper
│   └── GalleryGrid.tsx  # Gallery image grid
├── pages/               # Page components
│   ├── Index.tsx        # Home page
│   ├── About.tsx        # About the exhibition
│   ├── Gallery.tsx      # Photo gallery
│   ├── Partners.tsx     # Companies and products
│   ├── Contact.tsx      # Contact information and form
│   └── NotFound.tsx     # 404 error page
├── lib/                 # Utilities and data
│   ├── utils.ts         # Helper functions
│   └── data.ts          # Exhibition data and content
├── hooks/               # Custom React hooks
└── App.tsx              # Main application component
```

## 🎨 Design System

### Color Palette
- **Primary Pink**: Maternal care and nurturing
- **Secondary Blue**: Healthcare and trust
- **Accent Amber**: Warmth and optimism
- **Supporting Green**: Growth and education

### Typography
- Clean, readable fonts optimized for accessibility
- Responsive font sizes that scale across devices
- Proper heading hierarchy for SEO and accessibility

### Components
- Built with shadcn/ui for consistent, accessible components
- Custom animations and hover effects
- Mobile-first responsive design

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Netlify

1. Connect your repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Enable automatic deploys

### Manual Static Export

1. Build the static site:
```bash
npm run build
```

2. The `dist` folder contains the complete static site
3. Upload to any static hosting service

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with event details
- Exhibition categories showcase
- Key statistics and call-to-action sections

### About Page (`/about`)
- Comprehensive exhibition information
- Event timeline and history
- Detailed venue and schedule information

### Gallery Page (`/gallery`)
- Photo gallery with category filtering
- Responsive masonry layout
- Optimized image loading

### Partners Page (`/partners`)
- Categorized list of companies and products
- Partnership benefits and opportunities
- Contact information for exhibitors

### Contact Page (`/contact`)
- Contact form (frontend only)
- Exhibition contact details
- Social media links and information

## 🔧 Customization

### Adding New Content

1. **Exhibition Data**: Edit `src/lib/data.ts` to update exhibition information
2. **Images**: Replace placeholder images with actual exhibition photos
3. **Contact Information**: Update contact details in the data file and contact page

### Styling Changes

1. **Colors**: Modify the color palette in `tailwind.config.ts`
2. **Fonts**: Add new fonts in `index.html` and `tailwind.config.ts`
3. **Animations**: Customize animations in the Tailwind config

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🛠️ Built With

- **React 19** - UI framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Lucide React** - Beautiful, customizable icons
- **React Router** - Client-side routing
- **Vite** - Fast build tool and development server

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Support

For technical support or questions about the website:
- Email: tech@libyamotherandchild.com
- Create an issue on GitHub

For exhibition inquiries:
- Email: info@libyamotherandchild.com
- Phone: +218 XX XXX XXXX

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Libya Mother & Child Exhibition 2025**  
August 24-26, 2025 | Hawari Exhibition Center, Benghazi  
Building the future for mothers and children in Libya.
