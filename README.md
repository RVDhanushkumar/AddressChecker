# Address Checker

Address Checker is a web-based application built using **Next.js** and **Gemini (Google AI Studio)**. This project compares two input addresses to determine whether they are the same. It outputs a similarity status (**true/false**) and a confidence level as a percentage.

## Features

- Input two addresses for comparison.
- Outputs:
  - **Similarity:** `true` or `false` (are the addresses the same?)
  - **Confidence Level:** Percentage indicating how confident the system is about the similarity result.
- Uses the power of **Google AI Studio's Gemini model** for intelligent and accurate address parsing and comparison.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building fast, server-rendered applications.
- [Gemini (Google AI Studio)](https://ai.google/): Advanced AI model by Google used for natural language understanding and similarity computation.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for styling.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/address-checker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd address-checker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     GEMINI_API_KEY=your_google_ai_studio_api_key
     ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to view the application.

## Tailwind CSS Setup

Tailwind CSS is already configured in this project. If you need to customize it, you can modify the `tailwind.config.js` file.

To ensure Tailwind CSS works correctly, make sure the `globals.css` file is importing Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

1. Enter two addresses in the respective input fields.
2. Click on the **Compare** button.
3. View the results:
   - **Similarity:** Displays whether the addresses are the same (`true` or `false`).
   - **Confidence Level:** Displays the confidence percentage.

## Code Overview

### File Structure

```
📂 address-checker
├── 📂 app
│   ├── 📂 api
│   │   └── 📂 check
│   │       └── route.js        # API route for processing addresses using Gemini
│   ├── 📜 layout.js            # Layout component
│   ├── 📜 page.js              # Home page component
│   └── 📜 globals.css          # Global CSS with Tailwind setup
├── 📂 assets
│   └── bg.jpg                 # Background image
├── 📂 public
├── .env                       # Environment variables
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md                  # Project documentation
```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

---

Happy coding! 🎉
