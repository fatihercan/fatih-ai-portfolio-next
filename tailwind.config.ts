import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#060914', panel: '#101725', cyan: '#80d8ff', violet: '#a78bfa' }, boxShadow: { glow: '0 0 60px rgba(128,216,255,.18)' } } }, plugins: [] };
export default config;
