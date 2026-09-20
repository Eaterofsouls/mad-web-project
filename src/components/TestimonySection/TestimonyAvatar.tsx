import './TestimonyAvatar.css';

export function TestimonyAvatar() {
  return (
    <div className="testimony-avatar" aria-hidden="true">
      <svg width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="27" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="28" cy="21" r="8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 46C10 36.6 18 32 28 32C38 32 46 36.6 46 46" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}
