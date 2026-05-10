# ICDIS 2025 Conference Website

## Overview

The Department of Fashion Design & Department of Interior Design, School of Architecture & Design, FoSTA, Manipal University Jaipur, India is organizing the International Conference on Urban Cultures: Heritage, Design & Sustainable Futures (UC-HDSF 2026) on October 22–23, 2026. The conference invites industry professionals, academicians, researchers, and students to submit original, high-quality, and previously unpublished research papers. The conference aims to explore the intersection of cultural heritage, design practices, and sustainable development within the framework of contemporary human settlements. It seeks to address critical challenges related to urban transformation, cultural continuity, and future-oriented design innovation. UC-HDSF 2026 will provide an interdisciplinary platform for dialogue across architecture, interiors, craft, fashion, and human-centred design, encouraging knowledge exchange between academia, industry, and policy domains. Eminent keynote speakers from across the globe will share their expertise and perspectives on emerging trends and future directions.
Selected papers will be considered for publication in a Scopus-indexed conference proceeding in the form of book. 


## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing without the complexity of React Router
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for full-stack type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple

### Data Storage Solutions
- **Primary Database**: PostgreSQL hosted on Neon Database for production scalability
- **ORM**: Drizzle ORM chosen for its TypeScript-first approach and performance
- **Schema Validation**: Zod schemas for runtime type validation and API contract enforcement
- **Development Storage**: In-memory storage fallback for development and testing environments

### API Design
- **Architecture**: RESTful API with clear endpoint structure
- **Endpoints**:
  - `/api/registrations` - Conference registration management (GET, POST)
  - `/api/contact` - Contact message handling (GET, POST)
- **Validation**: Zod schemas ensure data integrity at API boundaries
- **Error Handling**: Centralized error handling with consistent response formats
- **Request Logging**: Comprehensive logging for API requests and responses

### Authentication and Authorization
- **Current State**: Basic session-based architecture in place
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple
- **User Schema**: Prepared user table structure for future authentication implementation
- **Security**: CORS configuration and session security measures

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL) for production data storage
- **UI Library**: Radix UI for accessible, unstyled component primitives
- **Component System**: shadcn/ui for pre-built, customizable React components
- **Validation**: Zod for schema validation and type inference
- **HTTP Client**: Native fetch API with TanStack Query for caching and synchronization

### Development Tools
- **Build System**: Vite with React plugin for fast development and optimized builds
- **TypeScript**: Full-stack type safety with shared types between client and server
- **CSS Framework**: Tailwind CSS for utility-first styling approach
- **Database Tools**: Drizzle Kit for schema management and migrations

### Hosting and Deployment
- **Platform**: Configured for Replit deployment with development-specific plugins
- **Static Assets**: Vite handles static asset optimization and serving
- **Environment**: Separate development and production configurations

### Third-Party Integrations
- **Fonts**: Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Lucide React for consistent iconography
- **Development**: Replit-specific plugins for enhanced development experience
- **Error Handling**: Replit error modal for development debugging

### Database Schema
- **Users**: Basic user authentication structure (username, password)
- **Registrations**: Comprehensive conference registration with participant details, institution info, and research areas
- **Contact Messages**: Contact form submissions with timestamp tracking
- **Extensibility**: Schema designed for easy extension with additional conference features