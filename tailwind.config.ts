
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                brainblue: {
                    50: '#f0f6ff',
                    100: '#e4eeff',
                    200: '#cde0ff',
                    300: '#a7c7ff',
                    400: '#78a6ff',
                    500: '#4e7fff',
                    600: '#2b55ff',
                    700: '#1c3ced',
                    800: '#1c32cc',
                    900: '#1c30a0',
                    950: '#121c59',
                },
                braindark: {
                    950: '#080a14',
                    900: '#101323',
                    800: '#1A1F2C',
                    700: '#272c3d',
                    600: '#343a4f',
                    500: '#454c66',
                },
                neon: {
                    blue: '#00eeff',
                    purple: '#8a2be2',
                    pink: '#ff00ff',
                    green: '#00ff9d',
                },
			},
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-out': {
                    '0%': { opacity: '1', transform: 'translateY(0)' },
                    '100%': { opacity: '0', transform: 'translateY(10px)' }
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                'floating': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' }
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-40rem 0' },
                    '100%': { backgroundPosition: '40rem 0' }
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'fade-out': 'fade-out 0.6s ease-out',
                'scale-in': 'scale-in 0.6s ease-out',
                'floating': 'floating 6s ease-in-out infinite',
                'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
                'gradient-x': 'gradient-x 8s ease infinite',
                'shimmer': 'shimmer 2s linear infinite',
			},
            backgroundImage: {
                'hero-pattern': 'radial-gradient(circle at 50% 50%, rgba(28, 50, 204, 0.2) 0%, rgba(8, 10, 20, 0) 50%)',
                'neon-glow': 'linear-gradient(90deg, #00eeff, #8a2be2)',
                'card-gradient': 'linear-gradient(135deg, rgba(26, 31, 44, 0.9) 0%, rgba(16, 19, 35, 0.95) 100%)',
                'blue-gradient': 'linear-gradient(135deg, rgba(28, 50, 204, 0.5) 0%, rgba(78, 127, 255, 0.2) 100%)',
                'shimmer': 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0) 40%)',
            },
            boxShadow: {
                'neon-blue': '0 0 10px rgba(0, 238, 255, 0.5)',
                'neon-purple': '0 0 10px rgba(138, 43, 226, 0.5)',
                'glass': '0 0 20px rgba(0, 0, 0, 0.1)',
            },
            transitionDuration: {
                '2000': '2000ms',
                '3000': '3000ms',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
