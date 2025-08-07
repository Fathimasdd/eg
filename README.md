# BasketBloom - Grocery Store Application

A frontend-only grocery store application with user authentication and admin dashboard functionality using static data.

## Features

- **User Authentication**: Signup and login for regular users
- **Admin Dashboard**: Single admin account with product management
- **Product Management**: Add, edit, delete products (admin only)
- **Static Data**: 80+ products across 8 categories
- **Responsive Design**: Modern UI with Tailwind CSS
- **Easy Deployment**: No backend required

## Admin Credentials

The system uses a single admin account with the following credentials:
- **Email**: admin@basketbloom.com
- **Password**: admin123

## Product Categories

The application includes 10 products for each of these 8 categories:
- **Fruits**: Apples, Bananas, Oranges, Strawberries, Grapes, Pineapple, Mangoes, Pears, Peaches, Watermelon
- **Vegetables**: Tomatoes, Carrots, Broccoli, Spinach, Bell Peppers, Onions, Potatoes, Cucumber, Cauliflower, Green Beans
- **Dairy**: Milk, Cheese, Yogurt, Butter, Cream, Cottage Cheese, Sour Cream, Mozzarella, Eggs, Ice Cream
- **Bakery**: Bread, Croissants, Cake, Muffins, Cookies, Donuts, Pizza Dough, Bagels, Pie, Cupcakes
- **Beverages**: Orange Juice, Coffee, Tea, Soda, Water, Energy Drink, Lemonade, Hot Chocolate, Beer, Wine
- **Household**: Dish Soap, Laundry Detergent, Paper Towels, Toilet Paper, Trash Bags, Cleaner, Air Freshener, Batteries, Light Bulbs, Storage Containers
- **Snacks**: Potato Chips, Popcorn, Nuts, Crackers, Pretzels, Trail Mix, Granola Bars, Cheese Puffs, Rice Cakes, Jerky
- **Personal Care**: Shampoo, Toothpaste, Deodorant, Soap, Lotion, Razor, Sunscreen, Face Wash, Hair Brush, Nail Clippers

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be running on `http://localhost:5173`

## Usage

### Regular Users

1. Visit the application at `http://localhost:5173`
2. Click "Sign Up" to create a new account
3. Fill in your details and create an account
4. Login with your credentials
5. Browse products by category and add them to cart

### Admin Access

1. Login with admin credentials:
   - Email: admin@basketbloom.com
   - Password: admin123
2. You will be automatically redirected to the admin dashboard
3. Manage products, view orders, and monitor revenue

## Features

### Authentication
- **Static Authentication**: Uses local storage for user management
- **Admin Protection**: Only admin can access product management
- **Session Persistence**: Login state persists across browser sessions

### Product Management (Admin Only)
- **Add Products**: Create new products with images, descriptions, and pricing
- **Edit Products**: Modify existing product details
- **Delete Products**: Remove products from inventory
- **Stock Management**: Track product availability

### Shopping Features
- **Category Browsing**: Browse products by category
- **Search & Sort**: Find and sort products by price, name
- **Shopping Cart**: Add items to cart and manage quantities
- **Responsive Design**: Works on all device sizes

## Deployment

This is a frontend-only application that can be easily deployed to:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: `npm run build && gh-pages -d dist`
- **Firebase Hosting**: `firebase deploy`

No backend setup required!

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── admin/
│   │   │   └── AdminDashboard.jsx
│   │   ├── Home.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── CartModal.jsx
│   │   └── Navbar.jsx
│   ├── services/
│   │   ├── authService.js
│   │   └── productService.js
│   ├── data/
│   │   └── products.js
│   └── App.jsx
├── package.json
└── index.html
```

## Technologies Used

- **React.js**: Frontend framework
- **React Router**: Navigation and routing
- **Tailwind CSS**: Styling and responsive design
- **Local Storage**: Data persistence
- **Static Data**: Product and user management

## Security Features

- **Admin-only Routes**: Protected admin dashboard
- **Input Validation**: Form validation and error handling
- **Static Authentication**: Simple but effective user management
- **Single Admin Account**: Prevents unauthorized admin access

## Development

To add new features or modify existing ones:

1. **Add Products**: Edit `src/data/products.js`
2. **Modify UI**: Update components in `src/components/`
3. **Add Categories**: Update the categories array in `Home.jsx`
4. **Customize Styling**: Modify Tailwind classes

## License

This project is for educational purposes. 