# Random Quote Generator

A modern and responsive *Random Quote Generator* built with *React.js* that fetches inspirational quotes from an external API and displays them in an elegant glassmorphism interface.

The project focuses on practicing React concepts like API integration, reusable components, hooks, environment variables, and modern CSS design.

---

## Features

-  Generate random quotes instantly
-  Fetch real-time quotes using an external API
-  Secure API key handling using environment variables
-  Built with React functional components
-  Dynamic UI updates without page refresh
-  Copy quote functionality
-  Loading state handling
-  Error handling for failed API requests
-  Modern glassmorphism UI design
-  Soft gradient background
-  Fully responsive design
-  Smooth animations and hover effects

---

## Technologies Used

### Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

### Tools & Libraries

- Vite
- React Icons
- Fetch API
- Git & GitHub

---

### API

- API Ninjas Quotes API

---

## Project Structure

```text
Random-Quote-Generator
│
├── public
│
├── src
│ │
│ ├── api
│ │ └── quoteApi.js
│ │
│ ├── components
│ │ ├── QuoteCard.jsx
│ │ └── Button.jsx
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
│
├── .env
├── package.json
├── package-lock.json
└── README.md
```
---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/kashafsarfrazcs-dev/Random-Quote-Generator.git

2. Navigate into the project
cd Random-Quote-Generator

3. Install dependencies
npm install

4. Create environment variables

Create a .env file in the root directory:

VITE_API_KEY=your_api_key_here

Replace your_api_key_here with your API Ninjas API key.

5. Start development server
npm run dev

The application will run on:

http://localhost:5173

---

## Environment Variables

This project uses an API key stored securely using Vite environment variables.

Example:

VITE_API_KEY=YOUR_API_KEY

---

## React Concepts Practiced

This project helped strengthen understanding of:

- Components
- Props
- useState Hook
- useEffect Hook
- API Requests
- Async/Await
- Conditional Rendering
- Event Handling
- Component Reusability
- Environment Variables

---

## Future Improvements

Possible improvements:

- Save favorite quotes
- Search quotes by category
- Dark mode support
- Share quotes on social media
- Store favorites using local storage
- Add more animations

---

## Author

Kashaf Sarfraz

Computer Science Student | Frontend Developer

---