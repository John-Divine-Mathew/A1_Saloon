/**
 * Stand-in for real photography. Renders a warm, textured
 * block with a label so it's obvious what the final photo
 * should show. Swap for <img src="..." alt="..." /> once the
 * client's photography is available — no layout changes needed
 * since this component fills its parent (width/height: 100%).
 */
export default function Placeholder({ label, className = '' }) {
  return (
    <div className={`placeholder ${className}`} role="img" aria-label={label}>
      <svg className="placeholder__pattern" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="100" x2="100" y2="0" />
        <line x1="0" y1="70" x2="70" y2="0" />
        <line x1="30" y1="100" x2="100" y2="30" />
      </svg>
      <span className="placeholder__label">{label}</span>
    </div>
  )
}
