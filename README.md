# Mini-Project-1-Beta-Ver-1.0-

This is a simple Express-based Node.js application developed as part of **Microproject #1**. It demonstrates the creation of a static website with an API that loads and displays JSON data from the backend.

## 📁 Project Structure

```
microproject1/
├── data/
│   └── items.json
├── public/
│   ├── index.html
│   ├── page2.html
│   ├── page3.html
│   ├── api-demo.html
│   ├── style.css
│   └── script.js
├── src/
│   └── app.js
├── .gitignore
├── package.json
└── package-lock.json
```

## 🔧 Technologies Used

- Node.js
- Express.js
- HTML5 / CSS3
- JavaScript (DOM + Fetch API)
- IntelliJ IDEA (for development)
- Git & GitHub (for version control)

## ⚙️ Features

- Static website with at least 4 pages:
  - Home
  - About (page2)
  - Contact (page3)
  - API demo
- A JSON file (`items.json`) containing at least 6 data objects
- An Express server that:
  - Serves static files from the `public/` directory
  - Responds with JSON data through an API route (`/api/items`)
- A front-end button (in `api-demo.html`) that:
  - Sends a request to the server using `fetch()` and Async/Await
  - Displays the loaded data in a nicely formatted layout

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/microproject1.git
   cd microproject1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npx nodemon src/app.js
   ```

4. Open in browser:
   ```
   http://localhost:3000
   ```

## 📷 Screenshots

All required screenshots for the project submission are provided in the attached PDF.

## 📎 Submission Info

- PDF with screenshots showing:
  - Project structure
  - Terminal output
  - Each webpage in browser
  - JSON data loaded dynamically
- GitHub repositories from all team members

## 👥 Team Members

- Annie Castillo – [https://github.com/annie/microproject1](https://github.com/annie/microproject1)

---

> Created for academic purposes – Web Development Course
