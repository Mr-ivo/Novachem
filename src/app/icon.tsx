export const contentType = 'image/svg+xml';
export const size = { width: 32, height: 32 };

export default function Icon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="8" fill="#0f172a"/>
  <rect x="2" y="2" width="28" height="28" rx="6" fill="none" stroke="#14b8a6" stroke-width="1.5"/>
  <rect x="9" y="8" width="3" height="16" rx="1" fill="#2dd4bf"/>
  <polygon points="9,8 12,8 23,24 20,24" fill="#2dd4bf"/>
  <rect x="20" y="8" width="3" height="16" rx="1" fill="#2dd4bf"/>
  <circle cx="27" cy="27" r="2.5" fill="#14b8a6"/>
</svg>`;
  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
}
