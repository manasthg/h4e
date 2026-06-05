// Shared bits across roadmap options

function Header({ subtitle, title, right }) {
  return (
    <div style={sharedStyles.headerRoot}>
      <div>
        <div style={sharedStyles.eyebrow}>
          <span style={sharedStyles.eyeRule}></span>
          <span>{subtitle}</span>
        </div>
        <div style={sharedStyles.title}>{title}</div>
      </div>
      <div style={sharedStyles.headerRight}>
        {right || (
          <Legend />
        )}
      </div>
    </div>
  );
}

function Legend() {
  const items = [
    { c: "#22C55E", l: "Shipped" },
    { c: "#605EFF", l: "In Progress" },
    { c: "#A1A1AA", l: "Planned" },
    { c: "#F59E0B", l: "Exploring" }
  ];
  return (
    <div style={sharedStyles.legend}>
      {items.map(it => (
        <span key={it.l} style={sharedStyles.legendItem}>
          <span style={{ ...sharedStyles.legendDot, background: it.c }}></span>
          {it.l}
        </span>
      ))}
    </div>
  );
}

const sharedStyles = {
  headerRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 24,
    paddingBottom: 24,
    borderBottom: "1px solid var(--c-outline-variant)"
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 10,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--c-text-muted)",
    fontWeight: 500,
    marginBottom: 12
  },
  eyeRule: {
    width: 28,
    height: 1,
    background: "var(--c-outline)",
    display: "inline-block"
  },
  title: {
    fontFamily: "var(--font-display)",
    fontSize: 38,
    fontWeight: 500,
    letterSpacing: "-0.02em",
    lineHeight: 1.05,
    color: "var(--c-on-background)"
  },
  headerRight: { flexShrink: 0 },
  legend: {
    display: "flex",
    gap: 18,
    flexWrap: "wrap"
  },
  legendItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    fontSize: 10,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--c-text-muted)",
    fontWeight: 500
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    display: "inline-block"
  }
};

// Pulse keyframes (injected once)
if (typeof document !== "undefined" && !document.getElementById("h4e-keyframes")) {
  const s = document.createElement("style");
  s.id = "h4e-keyframes";
  s.textContent = `
    @keyframes h4ePulse {
      0%   { transform: scale(1); opacity: .9; }
      80%  { transform: scale(1.7); opacity: 0; }
      100% { transform: scale(1.7); opacity: 0; }
    }
    @keyframes h4eFlow {
      0% { background-position: 0% 0; }
      100% { background-position: 200% 0; }
    }
  `;
  document.head.appendChild(s);
}

Object.assign(window, { Header, Legend });
