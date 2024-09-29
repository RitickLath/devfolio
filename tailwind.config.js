/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// Helper function to flatten color objects (like red: { 100: '#...' })
function flattenColors(colors) {
  const flattened = {};

  Object.keys(colors).forEach((colorKey) => {
    const value = colors[colorKey];

    if (typeof value === "object") {
      Object.keys(value).forEach((shade) => {
        flattened[`${colorKey}-${shade}`] = value[shade];
      });
    } else {
      flattened[colorKey] = value;
    }
  });

  return flattened;
}

function addVariablesForColors({ addBase, theme }) {
  const colors = flattenColors(theme("colors"));
  
  const newVars = Object.fromEntries(
    Object.entries(colors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
