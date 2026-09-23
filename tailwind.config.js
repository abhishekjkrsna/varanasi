/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { ink:'#241b18', paper:'#f7f1e7', clay:'#a6462d', saffron:'#e6b05d', river:'#31566a' }, fontFamily: { display:['Playfair Display','Georgia','serif'], sans:['DM Sans','ui-sans-serif','system-ui'], mono:['DM Mono','ui-monospace','monospace'] }, boxShadow: { float:'0 20px 60px rgba(63,32,20,.18)' } } },
  plugins: []
}
