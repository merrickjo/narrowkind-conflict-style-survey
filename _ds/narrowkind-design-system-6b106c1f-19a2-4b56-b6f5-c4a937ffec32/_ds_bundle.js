/* @ds-bundle: {"format":4,"namespace":"NarrowkindDesignSystem_6b106c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"71c3867a9cc4","components/core/Button.jsx":"50471bd98bd3","components/core/Callout.jsx":"ddbb8f24a7ba","components/core/Card.jsx":"e51e154f215e","components/core/Divider.jsx":"6f30f22e77db","components/core/Tag.jsx":"a6f6a1f392c3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NarrowkindDesignSystem_6b106c = window.NarrowkindDesignSystem_6b106c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * @startingPoint section="Components" subtitle="Small pill for counts, categories, status" viewport="700x160"
 */
function Badge({
  children,
  tone = 'gold'
}) {
  const tones = {
    gold: {
      backgroundColor: 'var(--accent-gold)',
      color: 'var(--field-base)'
    },
    cream: {
      backgroundColor: 'var(--card-cream)',
      color: 'var(--illo-charcoal)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--illo-charcoal)',
      border: '1px solid var(--illo-charcoal)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--sans-weight-body)',
      fontSize: '13px',
      letterSpacing: '0.02em',
      padding: '4px 10px',
      borderRadius: 'var(--radius-tag)',
      display: 'inline-block',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * @startingPoint section="Components" subtitle="Flat, no-shadow button — primary/secondary/ghost" viewport="700x220"
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false
}) {
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--sans-weight-body)',
    border: '1px solid transparent',
    borderRadius: 'var(--radius)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    letterSpacing: '0.01em',
    transition: 'background-color 120ms ease, color 120ms ease, border-color 120ms ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '14px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '16px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '18px'
    }
  };
  const variants = {
    primary: {
      backgroundColor: 'var(--field-cover)',
      color: 'var(--card-cream)',
      borderColor: 'var(--field-cover)'
    },
    dark: {
      backgroundColor: 'var(--field-base)',
      color: 'var(--card-cream)',
      borderColor: 'var(--field-base)'
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--illo-charcoal)',
      borderColor: 'var(--illo-charcoal)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--field-cover)',
      borderColor: 'transparent',
      padding: '0',
      textDecoration: 'underline',
      textUnderlineOffset: '4px'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    onClick: onClick,
    disabled: disabled
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
/**
 * @startingPoint section="Components" subtitle="Scripture quote block — serif italic, evidence field" viewport="700x320"
 */
function Callout({
  reference,
  children,
  surface = 'evidence'
}) {
  const surfaces = {
    evidence: {
      backgroundColor: 'var(--field-evidence)',
      text: 'var(--card-cream)'
    },
    base: {
      backgroundColor: 'var(--field-base)',
      text: 'var(--card-cream)'
    },
    card: {
      backgroundColor: 'var(--card-cream)',
      text: 'var(--illo-charcoal)'
    }
  };
  const s = surfaces[surface];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: s.backgroundColor,
      color: s.text,
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 'var(--serif-weight)',
      fontSize: 'var(--text-quote)',
      lineHeight: 'var(--leading-snug)',
      margin: 0
    }
  }, children), reference && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--sans-weight-body)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-gold)'
    }
  }, reference));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * @startingPoint section="Components" subtitle="Cream comparison/list card, flat, no shadow" viewport="700x360"
 */
function Card({
  eyebrow,
  title,
  children,
  accent = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: 'var(--card-cream)',
      color: 'var(--illo-charcoal)',
      padding: 'var(--space-5)',
      borderRadius: 'var(--radius)',
      border: accent ? '1px solid var(--accent-gold)' : `1px solid ${'var(--border-hairline-color)'}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      boxShadow: 'none'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--sans-weight-body)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: accent ? 'var(--accent-gold)' : 'var(--field-cover)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--sans-weight-headline)',
      fontSize: '28px',
      lineHeight: 'var(--leading-tight)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--sans-weight-body)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/**
 * @startingPoint section="Components" subtitle="1px hairline rule, light or dark surface" viewport="700x120"
 */
function Divider({
  tone = 'light',
  accent = false
}) {
  const color = accent ? 'var(--accent-gold)' : tone === 'dark' ? 'var(--border-hairline-color-on-dark)' : 'var(--border-hairline-color)';
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      borderTop: `1px solid ${color}`,
      margin: 0,
      width: '100%'
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * @startingPoint section="Components" subtitle="Small uppercase eyebrow label" viewport="700x160"
 */
function Tag({
  children,
  tone = 'gold'
}) {
  const tones = {
    gold: {
      color: 'var(--accent-gold)'
    },
    cream: {
      color: 'var(--card-cream)'
    },
    charcoal: {
      color: 'var(--illo-charcoal)'
    },
    coral: {
      color: 'var(--illo-coral)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--sans-weight-body)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      display: 'inline-block',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

})();
