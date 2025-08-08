# 🍿 The Movie app

A modern movie discovery app built with React.js, Tailwind CSS, and Appwrite, featuring responsive design and real-time with search optimization.

![preview](./preview.gif)

## 🛠️ Getting Started – Run It on Your System

To run this project locally, follow these steps:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/anjsachu/dev-labs/tree/main/Reactjs/movie-app
cd movie-app
```

### 2️⃣ Install Dependencies

Make sure you have Node.js installed. Then run:

```bash
npm install
```

### 3️⃣ Create a .env.local File

In the root of the project, create a .env.local file and add the following environment variables:

```bash
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

**Where to get these:**

- TMDB API Key → [TMDB API Settings](https://www.themoviedb.org/settings/api)
- Appwrite Credentials → [Appwrite Console](https://cloud.appwrite.io/)  
  Set up a project, database, and collection in Appwrite to get the required IDs.

### 4️⃣ Start the Development Server

Run

```bash
npm run dev
```

### 🧪 **Build for Production**

Run

```bash
npm run build
```

## 🧠 What I Learned (and Googled a lot)

- Mastered the art of convincing React to rerender _only_ when necessary — thanks to the magical `useDebounce` hook that said "no" to API overloads.
- Built a search bar so smart it could probably guess what you're thinking (just kidding... or are we?).
- Fetched movie data from the **TMDB API** like a Netflix intern on a deadline.
- Learned how to _rank_ trending movies/series based on user searches — basically built our own tiny IMDb.
- Styled everything with **Tailwind CSS** because writing regular CSS is so last season.
- Accidentally fell in love with `useEffect` and `useState` while debugging... repeatedly.

## 🙌 Credits

This project was built by following the [React JS 19 Full Course 2025](https://youtu.be/dCLhUialKPQ?si=rD1AKUK-9txQI4uK) tutorial by **JS Mastery**.  
All design, logic, and implementation patterns are based on the video content. Huge thanks to JS Mastery for the clear and insightful walkthrough!
