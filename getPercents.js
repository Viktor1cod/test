function getPercents(percent, number) {
  return (percent / 100) * number;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = getPercents;
}

if (typeof window !== 'undefined') {
  window.getPercents = getPercents;
}