import animate from "tailwindcss-animate";

export default {
  plugins: {
    '@tailwindcss/postcss': {
      darkMode: "class",
      content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
      ],
      prefix: "",
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px'
          }
        },
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
          colors: {
            border: 'oklch(var(--border))',
            input: 'oklch(var(--input))',
            ring: 'oklch(var(--ring))',
            background: 'oklch(var(--background))',
            foreground: 'oklch(var(--foreground))',
            primary: {
              DEFAULT: 'oklch(var(--primary))',
              foreground: 'oklch(var(--primary-foreground))'
            },
            secondary: {
              DEFAULT: 'oklch(var(--secondary))',
              foreground: 'oklch(var(--secondary-foreground))'
            },
            destructive: {
              DEFAULT: 'oklch(var(--destructive))',
              foreground: 'oklch(var(--destructive-foreground))'
            },
            muted: {
              DEFAULT: 'oklch(var(--muted))',
              foreground: 'oklch(var(--muted-foreground))'
            },
            accent: {
              DEFAULT: 'oklch(var(--accent))',
              foreground: 'oklch(var(--accent-foreground))'
            },
            popover: {
              DEFAULT: 'oklch(var(--popover))',
              foreground: 'oklch(var(--popover-foreground))'
            },
            card: {
              DEFAULT: 'oklch(var(--card))',
              foreground: 'oklch(var(--card-foreground))'
            },
            sidebar: {
              DEFAULT: 'oklch(var(--sidebar))',
              foreground: 'oklch(var(--sidebar-foreground))',
              primary: 'oklch(var(--sidebar-primary))',
              'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
              accent: 'oklch(var(--sidebar-accent))',
              'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
              border: 'oklch(var(--sidebar-border))',
              ring: 'oklch(var(--sidebar-ring))'
            },
            spotify: '#1DB954',
            youtube: '#FF0000'
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
          },
          keyframes: {
            'accordion-down': {
              from: { height: '0' },
              to: { height: 'var(--radix-accordion-content-height)' }
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: '0' }
            },
            'float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' }
            }
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'float': 'float 3s ease-in-out infinite'
          }
        }
      },
      plugins: [animate]
    },
  },
}