
/** @type {import('tailwindcss').Config} */
module.exports = {
    // Specify where Tailwind should look for classes
    content: [
        "./src/**/*.{ts,tsx,md,mdx}", // Default content directory
        "./src/pages/**/*.{ts,tsx,md,mdx}", // Legacy pages directory (if used)
        "./src/components/**/*.{ts,tsx}", // Reusable components
        "./src/app/**/*.{ts,tsx}", // App Router files
    ],

    theme: {
        extend: {
            // Custom font families from Google Fonts
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Clean, modern sans-serif
                serif: ["Merriweather", "serif"], // Elegant serif for prose
            },

            // Gradient colors for a sleek, modern design
            colors: {
                gradientStart: "#4f46e5", // Indigo for vibrant gradients
                gradientEnd: "#9333ea", // Purple for a trendy finish
            },

            // Customize typography plugin for blog content
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.gray.800"), // Readable text in light mode
                        "h1, h2, h3": {
                            fontFamily: theme("fontFamily.serif"), // Serif headings for flair
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme("colors.gray.200"), // Crisp text in dark mode
                    },
                },
            }),
        },
    },

    // Enable Tailwind plugins
    plugins: [
        require("@tailwindcss/typography"), // Beautiful prose styling
    ],

    // Use class-based dark mode
    darkMode: "class",
};