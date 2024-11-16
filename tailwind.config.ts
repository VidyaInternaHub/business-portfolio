import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0057D8", // Blue (Reliable and Professional)
        primaryDark: "#0F172A", // Dark Blue (Trustworthy and Secure)
        secondary: "#6B7280", // Gray (Balanced and Modern)
        accent: "#66CCFF", // Sky Blue (Clean, Approachable, and Fresh)
        background: "#F7F8FA", // Off-White (Light and Minimal)
        highlight: "#FF6F3C", // Orange (Adds a subtle call to action)
        bgFooter: "#1f2937",
      },
      backgroundImage: {
        // Blue to Sky Blue
        // "gradient-blue-sky": "linear-gradient(90deg, #0057D8, #66CCFF)",
        "gradient-blue-sky-primary": "linear-gradient(90deg, #0057D8, #66CCFF)",

        // Sky Blue to Light Gray
        // "gradient-sky-lightgray": "linear-gradient(90deg, #66CCFF, #F7F8FA)",
        "gradient-sky-lightgray-tertary":
          "linear-gradient(90deg, #66CCFF, #F7F8FA)",

        // Blue to Dark Navy
        // "gradient-blue-navy": "linear-gradient(90deg, #0057D8, #1C1F2A)",
        "gradient-blue-navy-secondary":
          "linear-gradient(90deg, #0057D8, #1C1F2A)",

        // Peachy Orange to Soft Yellow
        // "gradient-orange-yellow": "linear-gradient(90deg, #FF6F3C, #FFD361)",
        "gradient-orange-yellow-highlight":
          "linear-gradient(90deg, #FF6F3C, #FFD361)",

        // Slate Gray to Blue
        // "gradient-gray-blue": "linear-gradient(90deg, #6B7280, #0057D8)",
        "gradient-gray-blue-accent": "linear-gradient(90deg, #6B7280, #0057D8)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
    // extend: {
    //   colors: {
    //     primary: {
    //       DEFAULT: "hsl(var(--primary))",
    //       foreground: "hsl(var(--primary-foreground))",
    //     },
    //     secondary: {
    //       DEFAULT: "hsl(var(--secondary))",
    //       foreground: "hsl(var(--secondary-foreground))",
    //     },
    //     accent: {
    //       DEFAULT: "hsl(var(--accent))",
    //       foreground: "hsl(var(--accent-foreground))",
    //     },
    //     background: "hsl(var(--background))",
    //     highlight: "#FF6F3C",
    //     bgFooter: "#1f2937",
    //     foreground: "hsl(var(--foreground))",
    //     card: {
    //       DEFAULT: "hsl(var(--card))",
    //       foreground: "hsl(var(--card-foreground))",
    //     },
    //     popover: {
    //       DEFAULT: "hsl(var(--popover))",
    //       foreground: "hsl(var(--popover-foreground))",
    //     },
    //     muted: {
    //       DEFAULT: "hsl(var(--muted))",
    //       foreground: "hsl(var(--muted-foreground))",
    //     },
    //     destructive: {
    //       DEFAULT: "hsl(var(--destructive))",
    //       foreground: "hsl(var(--destructive-foreground))",
    //     },
    //     border: "hsl(var(--border))",
    //     input: "hsl(var(--input))",
    //     ring: "hsl(var(--ring))",
    //     chart: {
    //       "1": "hsl(var(--chart-1))",
    //       "2": "hsl(var(--chart-2))",
    //       "3": "hsl(var(--chart-3))",
    //       "4": "hsl(var(--chart-4))",
    //       "5": "hsl(var(--chart-5))",
    //     },
    //   },
    //   backgroundImage: {
    //     "gradient-blue-sky-primary": "linear-gradient(90deg, #0057D8, #66CCFF)",
    //     "gradient-sky-lightgray-tertary":
    //       "linear-gradient(90deg, #66CCFF, #F7F8FA)",
    //     "gradient-blue-navy-secondary":
    //       "linear-gradient(90deg, #0057D8, #1C1F2A)",
    //     "gradient-orange-yellow-highlight":
    //       "linear-gradient(90deg, #FF6F3C, #FFD361)",
    //     "gradient-gray-blue-accent": "linear-gradient(90deg, #6B7280, #0057D8)",
    //   },
    //   fontFamily: {
    //     poppins: ["var(--font-poppins)", "sans-serif"],
    //     roboto: ["var(--font-roboto)", "sans-serif"],
    //     montserrat: ["var(--font-montserrat)", "sans-serif"],
    //   },
    //   borderRadius: {
    //     lg: "var(--radius)",
    //     md: "calc(var(--radius) - 2px)",
    //     sm: "calc(var(--radius) - 4px)",
    //   },
    // },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
