// data/projects.ts

export const projectsData = [
    {
        slug: 'auto-workshop',
        title: 'Gray Manager System',
        subtitle: 'B2B Web Application & POS',
        overview: {
            role: 'Lead Product Designer',
            timeline: '3 Months',
            industry: 'Automotive / Enterprise SaaS',
            platform: 'Web Application (Desktop & iPad)',
            tools: ['Figma', 'React/Next.js UI structuring']
        },
        problem: 'Auto workshops often struggle with fragmented, manual processes that lead to stockouts, delayed invoicing, and untracked sales. The business needed a system to handle real-time material sales on the shop floor via iPads, track finishing material inventory to prevent workflow halts, and allow mechanics to log jobs seamlessly.',
        users: [
            { role: 'The Admin', needs: 'High-level oversight on financials, profit margins, and inventory health from a desktop environment.' },
            { role: 'The Sales Staff', needs: 'A fast, touch-friendly, iPad-optimized POS interface to process material sales rapidly.' },
            { role: 'The Mechanics', needs: 'A straightforward, distraction-free way to report car problems and generate client invoices.' }
        ],
        insights: [
            'Speed is Revenue: Sales users operating on iPads cannot be slowed down by complex dropdowns. The POS needed large touch targets.',
            'Proactive over Reactive: Inventory health alerts needed to be on the primary dashboard, not buried in a settings menu.',
            'Separation of Concerns: Authentication and user flows had to be strictly siloed to prevent data leaks between public and internal users.'
        ],
        strategy: [
            "The core strategy focused on flattening the Information Architecture (IA). Instead of nesting critical actions deep within menus, I utilized a persistent left-hand navigation and a 'Quick Actions' module on the primary dashboard so admins could initiate sales or add stock in a single click.",
            "By implementing strict Role-Based Access Control (RBAC), the system dynamically shifts its layout based on the user. Admins see comprehensive financial analytics and inventory alerts, while sales staff are immediately routed to a streamlined, touch-friendly POS interface.",
            "This modular approach ensured data security between public-facing elements and internal management tools, while drastically reducing the cognitive load and training time for mechanics and floor staff."
        ], 
        heroImage: '/images/graymanager/hero-banner.png',
        uiScreens: [
            '/images/graymanager/login.png',
            '/images/graymanager/dashboard.png',
            '/images/graymanager/sales.png',
            '/images/graymanager/settings.png'
        ]
    },
{
    slug: 'ready-cash',
    title: 'Ready Cash',
    subtitle: 'Financial Inclusion Fintech Platform',
    overview: {
      role: 'Lead UI/UX Designer',
      timeline: '4 Months', // Feel free to adjust this
      industry: 'Fintech / Financial Services',
      platform: 'Mobile App & Web Platform',
      tools: ['Figma', 'Wireframing', 'User Research', 'Prototyping']
    },
    problem: 'Africa’s financial ecosystem faces significant challenges, including a large unbanked population, limited access to formal banking services, and the high costs associated with traditional financial systems. Over 50% of the continent’s population remains excluded from formal financial services, creating a significant barrier to economic growth and development. Ready Cash needed a digital solution to provide affordable, scalable financial services like mobile wallets, microloans, and cross-border transactions.',
    users: [
      { role: 'Unbanked Individuals', needs: 'Affordable, easy-to-understand digital financial solutions to gain financial independence.' },
      { role: 'SMEs & Merchants', needs: 'Accessible payment tools, digital transaction capabilities, and financing solutions to grow their businesses.' },
      { role: 'Migrant Workers', needs: 'Cost-effective, fast, and highly secure cross-border remittance options to support their families.' }
    ],
    insights: [
      'Accessibility is Paramount: To serve the unbanked population, the platform required a highly intuitive, user-centric design that feels approachable and functions seamlessly across all device types.',
      'Trust Through Transparency: Features like microloans require transparent terms and robust security measures to build trust within communities heavily reliant on cash.',
      'Ecosystem Integration: The solution needed seamless compatibility with existing telecommunication and financial systems to allow frictionless onboarding.'
    ],
    strategy: [
      "The core UX strategy for Ready Cash was to eliminate the friction typically associated with formal banking. I designed a highly accessible, user-friendly interface that prioritizes clear navigation and straightforward terminology.",
      "To accommodate users with varying levels of digital literacy, the mobile wallet dashboard was simplified into core actions: Send Money, Pay Bills, and Request Loan. Progressive disclosure was used to reveal complex features like cross-border remittances and merchant analytics only when necessary.",
      "Because scalability and reliability were core business objectives, the design system was built to be lightweight, ensuring fast load times even on low-bandwidth networks, which is crucial for the target demographic."
    ],
    impactList: [
      "Projected to onboard 1 million unbanked individuals within three years.",
      "Designed to facilitate $50 million in cross-border transactions annually.",
      "Aims to process $20 million in microloans annually to empower SMEs and drive job creation."
    ],
    // Image Paths for your Wireframes!
    heroImage: '/images/readycash/hero-banner.png',
    uiScreens: [
      '/images/readycash/wireframe.png',
      '/images/readycash/loan.png',
      '/images/readycash/home.png',
        '/images/readycash/save.png'
    ]
  },
  {
    slug: 'eatme-kitchen',
    title: 'EatMe Kitchen',
    subtitle: 'Unified Food Delivery & Table Reservation App',
    overview: {
      role: 'UI/UX Designer',
      timeline: '8 Weeks', // Feel free to adjust this
      industry: 'Food & Beverage / Hospitality',
      platform: 'iOS & Android Mobile App',
      tools: ['Figma', 'UI Design', 'Interaction Design', 'Prototyping']
    },
    problem: 'Restaurants often struggle with fragmented customer experiences—balancing dine-in reservations, takeout orders, and loyalty programs across different platforms. Customers face long wait times and cumbersome ordering processes. EatMe Kitchen needed a centralized mobile application to allow diners to seamlessly order meals for delivery, book tables, and track their food in real-time, all within a single, appetizing interface.',
    users: [
      { role: 'Busy Professionals', needs: 'Quick meal delivery, transparent order tracking, and frictionless checkout.' },
      { role: 'Dine-In Customers', needs: 'An easy way to reserve tables for special occasions (like birthdays or dates) without having to call the restaurant.' },
      { role: 'Loyal Patrons', needs: 'To easily access and apply exclusive deals, promotions, and loyalty rewards.' }
    ],
    insights: [
      'Visual Appetite: In food apps, high-quality imagery directly impacts conversion rates. The UI needed to "get out of the way" and let the food photography shine.',
      'Frictionless Checkout: Cart abandonment is high if payment is difficult. It was crucial to integrate localized payment methods like Mobile Money alongside standard bank cards and cash.',
      'Complex Variables: Combining delivery orders with a dynamic table reservation system (which charges based on duration and guest count) required extremely clear form design.'
    ],
    strategy: [
      "I designed a warm, inviting interface utilizing a vibrant red brand color to stimulate appetite, guide calls-to-action, and highlight active states.",
      "The Information Architecture was structured around distinct user flows: a quick-add cart system for delivery, and a step-by-step progressive form for table reservations. Complex interactions, like adding meal extras or calculating reservation fees based on time, were handled with clear radio buttons and interactive steppers.",
      "To build user trust, I integrated a comprehensive notification center and a clear order-confirmation modal, keeping the user informed at every stage from payment to meal preparation."
    ],
    impactList: [
      "Streamlined the checkout process by accommodating diverse, localized payment options.",
      "Digitized the table booking experience, replacing manual phone reservations with an automated, monetizable reservation flow.",
      "Reduced cognitive load during ordering with categorized menus, sticky cart summaries, and progressive disclosure of meal add-ons."
    ],
    // Image Paths for EatMe Kitchen
    heroImage: '/images/eatme/onboarding.png', // We can generate a banner for this later if you want!
    uiScreens: [
    //   '/images/eatme/onboarding.png',
      '/images/eatme/home-and-notifications.png',
      '/images/eatme/menu-details.png',
      '/images/eatme/payment-flow.png',
      '/images/eatme/table-reservation.png'
    ]
  }

];