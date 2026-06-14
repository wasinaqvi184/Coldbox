module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
      colors: { ink: { 900:'#070314',800:'#0B0620',700:'#130A2E',600:'#1B1140' } },
      boxShadow: {
        glow: '0 0 40px -8px rgba(124,58,237,0.55)',
        glowblue: '0 0 50px -10px rgba(37,99,235,0.6)',
      }
    }
  }
}
