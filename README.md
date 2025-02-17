# Milestone 5: API Integration for All Pages

This milestone builds upon the previous milestones by replacing static, hardcoded data with dynamic data fetched from an API.  This will involve modifying the existing components and pages to handle API requests, loading states, error handling, and dynamic data rendering.

## Key Features

* **API Integration:**  Integration with a REST API for fetching property data, bookings, and reviews.
* **Dynamic Data Display:**  Dynamically display fetched data on all relevant pages.
* **Loading State Handling:**  Display loading indicators while fetching data.
* **Error Handling:**  Gracefully handle API errors and display informative messages.
* **Code Refactoring:**  Refactor existing components and pages to accommodate API integration.


## Project Structure

The project structure is organized to maintain a clear separation of concerns:

alx-listing-app-04/
├── components/ // Reusable components (PropertyCard, BookingForm, ReviewList, etc.)
├── pages/ // Page components (Home, PropertyDetails, Booking, Reviews, etc.)
├── api/ // API interaction logic (properties.js, bookings.js, reviews.js, apiConfig.js)
└── index.js // Entry point
├── public/ // Public assets
└── README.md // This file


The `api` folder centralizes all API interaction logic, making it easy to manage and maintain API requests.

## API Endpoints (Example)

* **Get all properties:** `/api/properties`
* **Get single property:** `/api/properties/{id}`
* **Create booking:** `/api/bookings`
* **Get reviews for property:** `/api/reviews/{propertyId}`


## Getting Started

1. **Clone the repository:** `git clone git@github.com:yuslove1/alx-listing-app-04.git`
2. **Navigate directory:** `cd alx-listing-app-04`
2. **Install dependencies:** `npm install`
3. **Start the development server:** `npm start`


## Challenges and Solutions

* **Challenge:** Handling asynchronous API calls and updating the component state.
* **Solution:** Used async/await and Promises to manage asynchronous operations.


## Future Improvements

* **Caching:** Implement caching to reduce API calls and improve performance.
* **Pagination:** Implement pagination for large datasets.
* **Real-time Updates:** Explore real-time updates using technologies like WebSockets.