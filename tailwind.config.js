/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Inter var (Systemfallback; Apple nutzt SF Pro – fürs Web Inter)
        sans: [
          "Inter var",
          "Inter",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        // sehr subtile Schatten wie bei Apple
        soft: "0 10px 30px -15px rgba(0,0,0,0.15)",
        card: "0 8px 30px rgba(0,0,0,0.06)",
        lift: "0 18px 60px rgba(0,0,0,0.08)",
      },
      colors: {
        // dezente Neutrals für Text & UI
        ink: {
          900: "#0a0a0a",
          700: "#3a3a3a",
          600: "#525252",
        },
        // CSS-Variablen für deine Markenfarben
        "signum-blue": "var(--color-signum-blue)",
        "signum-darkblue": "var(--color-signum-darkblue)",
        "signum-lightgreen": "var(--color-signum-lightgreen)",
      },
      // optional schön: Container zentrieren
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
};
