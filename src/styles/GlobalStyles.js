import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
   :root {


    --color-orange-50: #f5f0ff;
    --color-orange-100: #e2d6ff;
    --color-orange-200: #c5adff;
    --color-orange-300: #a683ff;
    --color-orange-500: #854eff;
    --color-orange-600: #7321ff;
    --color-orange-700: #6100e6;
    --color-orange-800: #4d00b3;
    --color-orange-900: #3b0080;
//commented

  --color-brand-50: #f5f0ff;
  --color-brand-100: #e2d6ff;
  --color-brand-200: #c5adff;
  --color-brand-300: #a683ff;
  --color-brand-500: #854eff;
  --color-brand-600: #7321ff;
  --color-brand-700: #6100e6;
  --color-brand-800: #4d00b3;
  --color-brand-900: #3b0080;

  /* Blue (Trust, Reliability) */
  /* --color-orange-50: #e7f3ff;
  --color-orange-100: #c2e0ff;
  --color-orange-200: #94ccff;
  --color-orange-300: #47a4f2;
  --color-orange-500: #339af0; 
  --color-orange-600: #1d7bd1;
  --color-orange-700: #1665a1;
  --color-orange-800: #104d7a;
  --color-orange-900: #0a3755; */

  /* Blue (Trust, Reliability) */
  --color-blue-50: #e7f3ff;
  --color-blue-100: #c2e0ff;
  --color-blue-200: #94ccff;
  --color-blue-300: #47a4f2;
  --color-blue-500: #339af0;
  --color-blue-600: #1d7bd1;
  --color-blue-700: #1665a1;
  --color-blue-800: #104d7a;
  --color-blue-900: #0a3755;
  /* Orange (Enthusiasm, Creativity) */
  /* --color-blue-50: #fff4e6;
  --color-blue-100: #ffddb3;
  --color-blue-200: #ffbc80;
  --color-blue-300: #ff8b3e;
  --color-blue-500: #ff7e29; 
  --color-blue-600: #e6681b;
  --color-blue-700: #c55516;
  --color-blue-800: #a34311;
  --color-blue-900: #82320d; */
      /* Orange (Enthusiasm, Creativity) */
  /* --color-orange-50: #fff4e6;
  --color-orange-100: #ffddb3;
  --color-orange-200: #ffbc80;
  --color-orange-300: #ff8b3e;
  --color-orange-500: #ff7e29; 
  --color-orange-600: #e6681b;
  --color-orange-700: #c55516;
  --color-orange-800: #a34311;
  --color-orange-900: #82320d; */

  /* Grey (Neutral colors) */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  /* Additional colors */
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 15px;

  /* Dark mode adjustments */
  --image-grayscale: 0;
  --image-opacity: 100%;
}
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
    }

    html {
    font-size: 62.5%;
    }

    body {
    font-family: "Poppins", sans-serif;
    color: var(--color-grey-700);

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
    }

    input,
    button,
    textarea,
    select {
    font: inherit;
    color: inherit;
    }

    button {
    cursor: pointer;
    }

    *:disabled {
    cursor: not-allowed;
    }

    select:disabled,
    input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
    }

    input:focus,
    button:focus,
    textarea:focus,
    select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
    }

    /* Parent selector, finally 😃 */
    button:has(svg) {
    line-height: 0;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    ul {
    list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    overflow-wrap: break-word;
    hyphens: auto;
    }

    img {
    max-width: 100%;

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
    }

    /*
    FOR DARK MODE

    --color-grey-0: #18212f;
    --color-grey-50: #111827;
    --color-grey-100: #1f2937;
    --color-grey-200: #374151;
    --color-grey-300: #4b5563;
    --color-grey-400: #6b7280;
    --color-grey-500: #9ca3af;
    --color-grey-600: #d1d5db;
    --color-grey-700: #e5e7eb;
    --color-grey-800: #f3f4f6;
    --color-grey-900: #f9fafb;

    --color-blue-100: #075985;
    --color-blue-700: #e0f2fe;
    --color-green-100: #166534;
    --color-green-700: #dcfce7;
    --color-yellow-100: #854d0e;
    --color-yellow-700: #fef9c3;
    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;
    --color-indigo-100: #3730a3;
    --color-indigo-700: #e0e7ff;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
    */

`;
export default GlobalStyles;
