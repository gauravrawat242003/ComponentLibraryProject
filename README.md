# VirtualUI – AI-Powered React Component Generator

VirtualUI is a full-stack MERN application that uses AI to generate reusable React components from simple text prompts. Users can generate, preview, save, and explore UI components, while administrators can publish components directly to an npm package.

## 🚀 Live Demo

- **Live Website:** https://virtual-ui-client.onrender.com
- **NPM Package:** [virtual-ui-lib](https://www.npmjs.com/package/virtual-ui-lib)

## ✨ Features

- **AI Component Generation:** Generate React components using natural-language prompts with OpenRouter and DeepSeek.
- **Live Preview:** Preview generated JSX components before saving them.
- **Component Management:** Save and manage generated components using MongoDB.
- **Component Explorer:** Browse and explore publicly available components.
- **Google Authentication:** Secure login using Firebase Google Authentication.
- **JWT Authentication:** Backend authentication using JWT and HTTP-only cookies.
- **Role-Based Access Control:** Separate permissions for Admin and User roles.
- **Credit-Based System:** Users receive credits for AI component generation.
- **Payment Integration:** Purchase additional credits using Razorpay with server-side signature verification.
- **NPM Publishing:** Admins can publish generated components directly to the npm package.
- **Reusable UI Library:** Includes 25+ reusable React components.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite, React Router |
| State Management | Redux Toolkit |
| Styling | Tailwind CSS |
| UI & Animation | Framer Motion, React Icons |
| Live Preview | React Live |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Firebase, JWT |
| AI Integration | OpenRouter API, DeepSeek |
| Payment Gateway | Razorpay |
| Package Management | NPM |
| Build Tool | tsup |

## 📂 Project Structure

```text
VirtualUI/
│
├── virtual-ui-client/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       ├── utils/
│       └── App.jsx
│
├── virtual-ui-server/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── utils/
│
└── virtual-ui-lib/
    ├── src/
    │   ├── components/
    │   └── index.js
    ├── dist/
    ├── package.json
    └── tsup.config.js
⚙️ Getting Started
Prerequisites
Make sure you have installed:
- Node.js
- npm
- MongoDB
- Firebase project
- OpenRouter API key
- Razorpay account (for payment functionality)
1. Clone the Repository
git clone <your-repository-url>
cd VirtualUI


2. Install Dependencies
Install dependencies separately for each folder.

Frontend:
cd virtual-ui-client
npm install


Backend:
cd ../virtual-ui-server
npm install


Component Library:
cd ../virtual-ui-lib
npm install


🔐 Environment Variables
Create a .env file inside the respective folders.
Backend – virtual-ui-server/.env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret


Frontend – virtual-ui-client/.env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id


Configure your Firebase project and enable Google Authentication in the Firebase Console.

Important: Never commit your actual API keys, passwords, or secrets to GitHub.
▶️ Running the Project
Open separate terminals for the frontend and backend.
Start Backend
cd virtual-ui-server
npm run dev


Start Frontend
cd virtual-ui-client
npm run dev


The frontend runs on:
http://localhost:5173


The backend runs on:
http://localhost:8000


🤖 AI Component Generation Workflow
1. User enters a natural-language prompt describing the required UI component.
2. Frontend sends the prompt to the backend API.
3. Backend checks the user's available credits.
4. OpenRouter API processes the prompt using the DeepSeek model.
5. AI generates component code in JSON format.
6. Backend parses the generated response and sends it to the frontend.
7. User previews the generated component using React Live.
8. User can save the component to MongoDB.
📦 NPM Component Library
VirtualUI includes a reusable React component library published as an npm package.
Installation
npm install virtual-ui-lib


Usage
Import the required components into your React application:
import {
  Button,
  Card,
  Navbar,
  PricingCard,
  RatingStars,
  Loader
} from "virtual-ui-lib";

function App() {
  return (
    <div>
      <Navbar />
      <Card />
      <Button text="Get Started" />
      <PricingCard />
      <RatingStars rating={4} />
      <Loader />
    </div>
  );
}

export default App;


Available Components
The library currently provides 25+ reusable components:
- AnimatedButton
- AnimatedForm
- AvatarCard
- BackgoundImageSlider
- Button
- Card
- Charts
- ColorPicker
- EcommerceCard
- FileUpload
- Footer
- ImageCard
- ImageSlider
- InvoiceCard
- Loader
- Navbar
- NotificationToast
- OTPInput
- PageLoader
- PricingCard
- ProgressBar
- RatingStars
- ReviewCard
- Sidebar
- StatCard
📤 NPM Publishing Workflow
VirtualUI provides an admin-only component publishing workflow.
1. Admin selects a saved component for publishing.
2. Backend verifies admin permissions.
3. Component JSX is written into the component library.
4. The component is added to the library's export file.
5. tsup builds the package.
6. Package patch version is incremented.
7. npm publish command publishes the updated package.
8. Component is marked as public in MongoDB.
💳 Payment Workflow
- Razorpay is integrated for purchasing additional AI credits.
- Backend creates Razorpay payment orders.
- Payment details are verified on the server.
- HMAC-SHA256 signature verification ensures payment authenticity.
- User credits are updated after successful verification.
🔗 API Endpoints
Method	Endpoint	Description
POST	/api/auth/googlesignup	Google authentication
GET	/api/auth/logout	User logout
GET	/api/user/currentuser	Get current user
GET	/api/user/all-users	Get all users
POST	/api/component/generate	Generate AI component
POST	/api/component/save	Save component
POST	/api/component/publish	Publish component
GET	/api/component/all-components	Get components
POST	/api/payment/order	Create payment order
POST	/api/payment/verify	Verify payment

🔒 Security
- JWT-based authentication.
- HTTP-only authentication cookies.
- Role-based access control.
- Server-side payment signature verification.
- Protected backend routes.
- Environment variables for sensitive credentials.
👨‍💻 Author
Gaurav Rawat
- GitHub: Your GitHub Profile
- LinkedIn: Your LinkedIn Profile

⭐ If you find this project interesting, consider giving it a star!

**Before publishing:** Replace the repository URL, GitHub username, and LinkedIn URL with your a ctual links. Also ensure your `.env` files are excluded through `.gitignore`.
