export const contentType = 'image/svg+xml';
export const size = { width: 180, height: 180 };

export default function AppleIcon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <rect width="180" height="180" rx="40" fill="#0f172a"/>
  <rect x="10" y="10" width="160" height="160" rx="30" fill="none" stroke="#14b8a6" stroke-width="4"/>
  <rect x="52" y="45" width="16" height="90" rx="4" fill="#2dd4bf"/>
  <polygon points="52,45 68,45 128,135 112,135" fill="#2dd4bf"/>
  <rect x="112" y="45" width="16" height="90" rx="4" fill="#2dd4bf"/>
  <circle cx="152" cy="152" r="10" fill="#14b8a6"/>
</svg>`;
  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
}
