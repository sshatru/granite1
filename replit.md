# ISKCON Granite Website

## Overview

This is a modern, responsive website for ISKCON Granite, a granite and stone product supplier. The application is built as a full-stack web application featuring a React frontend with a Node.js/Express backend. The site showcases granite products, includes a contact form, and provides information about the company's services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API endpoints
- **Development**: Hot reload with Vite middleware in development
- **Production**: Static file serving with esbuild compilation

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Shared schema definitions between frontend and backend
- **Development Storage**: In-memory storage implementation for development
- **Production Ready**: Configured for PostgreSQL with Neon database support

## Key Components

### Frontend Components
- **Layout Components**: Header with navigation, Hero section, Footer, Categories section
- **Product Showcase**: Grid-based product display with category filtering and 8 granite products
- **Interactive Elements**: Gallery with 12 project images including cobblestone projects, testimonials carousel
- **Contact Form**: Validated form with project type selection and message submission
- **WhatsApp Integration**: Floating WhatsApp button for instant communication
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Product Categories**: Premium Granite, Cobblestones, Construction Stone, Custom Work

### Backend Services
- **Contact API**: Handles form submissions with validation
- **Storage Layer**: Abstracted storage interface supporting both in-memory and database implementations
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Request Logging**: Detailed API request logging for debugging

### UI Component System
- **Design System**: shadcn/ui components with consistent styling
- **Theme**: Granite-inspired color palette (neutral grays, sandstone beige, charcoal)
- **Accessibility**: ARIA-compliant components with keyboard navigation
- **Animations**: Smooth transitions and hover effects

## Data Flow

1. **User Interaction**: Users browse products, view gallery, and submit contact forms
2. **Form Submission**: Contact form data is validated client-side with Zod schemas
3. **API Request**: Form data sent to `/api/contact` endpoint via React Query
4. **Server Processing**: Express route validates data and stores contact messages
5. **Response Handling**: Success/error feedback displayed via toast notifications
6. **Data Persistence**: Contact messages stored in configured database or memory

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form, React Query
- **UI Framework**: Radix UI primitives, Tailwind CSS, shadcn/ui components
- **Validation**: Zod for schema validation and type safety
- **Database**: Drizzle ORM, Neon Database for PostgreSQL
- **Icons**: Lucide React, React Icons for social media icons
- **Build Tools**: Vite, esbuild, TypeScript compiler

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Development Server**: Express with Vite middleware for hot reload
- **Type Checking**: TypeScript with strict configuration
- **CSS Processing**: PostCSS with Tailwind and Autoprefixer

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend
- **Hot Reload**: Full-stack hot reload with Vite middleware integration
- **Environment Variables**: Database URL and other configuration via environment variables

### Production Build
- **Frontend**: Vite build process generating optimized static assets
- **Backend**: esbuild compilation to ES modules for Node.js
- **Static Serving**: Express serves built React application
- **Database**: PostgreSQL database with Drizzle migrations

### Configuration
- **Monorepo Structure**: Shared types and schemas between frontend and backend
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/)
- **Asset Handling**: Attached assets support for images and documents
- **Error Boundaries**: Production error handling with proper fallbacks