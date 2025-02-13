# Simple Blog Website

A minimalistic blog website built using React.js and Appwrite as the backend. This application allows users to create, edit, and manage blog posts easily.

## Features

- 📝 Create, update, and delete blog posts
- 🔒 User authentication (if implemented)
- 📂 Organized and user-friendly interface
- 🚀 Fast and responsive design

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Appwrite
- **Database**: Appwrite Database
- **State Management**: Redux Toolkit (if used)
- **Authentication**: Appwrite Authentication

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- Appwrite instance (self-hosted or cloud)

### Steps to Run the Project

#### 1. Clone the repository
```sh
git clone https://github.com/akr-38/simple-blog-website.git
cd simple-blog-website
```

#### 2. Install dependencies
```sh
npm install
```

#### 3. Set up Appwrite
Configure your Appwrite project and update the required environment variables in a `.env` file:
```env
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

#### 4. Run the project
```sh
npm start
```

The app will be running at `http://localhost:3000`.

## API Endpoints (Handled by Appwrite)
The backend is managed by Appwrite, so all CRUD operations are performed via Appwrite's SDK.

## Contributing
Feel free to fork this repository and contribute by submitting pull requests. 

## License
This project is licensed under the MIT License.

## Contact
For any queries, feel free to reach out:
- GitHub: [akr-38](https://github.com/akr-38)
- Email: your-email@example.com


