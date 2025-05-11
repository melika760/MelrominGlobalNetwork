# Melromin Global Network

## 🚀 Revolutionizing Freight Forwarding & Logistics
Melromin Global Network is a cutting-edge digital platform designed to streamline the freight forwarding industry. Our mission is to eliminate third-party intermediaries, reduce costs, and create a transparent and efficient ecosystem for suppliers and forwarders worldwide.

## 🌟 Key Features
- **Supplier & Forwarder Dashboards** – Dedicated interfaces for managing contracts, tracking shipments, and handling negotiations.
- **Real-time Chat & Contract Negotiation** – Secure, in-app communication for seamless deal-making.
- **Automated Payment System** – Integrated with Stripe to ensure fast and secure contract payments.
- **Booking & Contract Management** – A comprehensive system for handling shipping agreements efficiently.
- **Usability Testing with 50+ Users** – Currently refining our platform based on real-world feedback to prepare for full-scale adoption.

## 🛠 Tech Stack
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Firebase (Authentication, Firestore, Cloud Functions)
- **Payments:** Stripe API
- **State Management:** Redux Toolkit
- **Real-Time Communication:** Firebase Firestore (onSnapshot)
- **Hosting & Deployment:** Netlify

## 📦 Installation & Setup
To run the project locally:

1. **Clone the repository**
   ```sh
   git clone https://github.com/melromin/melromin-platform.git
   cd melromin-platform
   ```

2. **Install dependencies**
   ```sh
   npm install  # or yarn install
   ```

3. **Set up environment variables** (Create a `.env.local` file and add Firebase and Stripe credentials)
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_key
   ```

4. **Run the development server**
   ```sh
   npm run dev  # or yarn dev
   ```

5. **Open in Browser**
   ```
http://localhost:3000
   ```
