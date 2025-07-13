# ISKCON Granite Website

A modern, responsive website for ISKCON Granite showcasing premium granite and stone products with professional design and mobile optimization.

## Quick Start

### Prerequisites
- Node.js (version 18 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

### Installation & Setup

1. **Download and Extract**
   - Download the project as a zip file
   - Extract it to your desired folder
   - Open terminal/command prompt and navigate to the project folder:
   ```bash
   cd path/to/iskcon-granite-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - The website will be available at: `http://localhost:5000`
   - The development server will automatically reload when you make changes

### Production Build

To create a production-ready build:

```bash
npm run build
npm start
```

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utility functions
│   │   └── hooks/       # Custom React hooks
├── server/              # Backend Express server
├── shared/              # Shared types and schemas
└── public/              # Static assets
```

## Features

- **Modern Design**: Clean, professional granite industry website
- **Responsive Layout**: Mobile-first design that works on all devices
- **Product Categories**: Premium Granite, Cobblestones, Construction Stone, Custom Work
- **Interactive Gallery**: Lightbox image gallery with project photos
- **Contact Form**: Validated contact form with email integration
- **WhatsApp Integration**: Direct WhatsApp communication buttons
- **Product Filtering**: Filter products by category
- **SEO Optimized**: Proper meta tags and semantic HTML

## Customization

### Update Company Information
- Edit contact details in `client/src/components/contact.tsx`
- Update phone numbers in `client/src/components/header.tsx` and `client/src/components/whatsapp-button.tsx`
- Modify company information in `client/src/components/about.tsx`

### Add/Modify Products
- Edit the products array in `client/src/components/products.tsx`
- Add new product images to the gallery in `client/src/components/gallery.tsx`

### Change Colors/Styling
- Update the color scheme in `client/src/index.css`
- Modify component styles using Tailwind CSS classes

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: In-memory storage (production ready for PostgreSQL)
- **UI Components**: shadcn/ui, Radix UI
- **Build Tool**: Vite
- **Forms**: React Hook Form with Zod validation

## Support

For technical support or customization requests, please contact the development team or refer to the documentation in the project files.

## License

This project is created for ISKCON Granite. All rights reserved.