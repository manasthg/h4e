// Option B — Milestone Path Timeline
// Inspired by classic ascending-line timeline infographics:
// numbered circles on an upward-trending line with dotted vertical guides
// per quarter, labels alternating above/below.
//
// Height of each node = cumulative releases delivered by that quarter (so the
// line literally climbs as we accumulate value over 2025–2027).

function OptionB() {
  const D = window.IDTRUST;
  const sB = optionBStyles;

  // Group features by delivery quarter
  const byQ = {};
  D.features.forEach(f => {
    const q = f.qStart + f.qSpan - 1;
    (byQ[q] = byQ[q] || []).push(f);
  });

  // Build stops: one per quarter that actually delivers something
  let cumulative = 0;
  const stops = D.quarters.map((q, i) => {
    const items = byQ[i] || [];
    cumulative += items.length;
    const state = i < D.nowIndex ? "past" : i === D.nowIndex ? "now" : "future";
    return { i, q, items, cumulative, state };
  }).filter(s => s.items.length > 0); // skip empty quarters

  // Layout geometry
  const W = 1700;          // svg width
  const H = 580;           // svg height
  const padL = 70;
  const padR = 70;
  const trackW = W - padL - padR;
  const yTop = 120;        // highest point
  const yBot = H - 200;    // lowest point
  const maxCum = stops[stops.length - 1].cumulative;

  // X per stop (evenly across visible quarters), Y by cumulative
  const positions = stops.map((s, idx) => {
    const x = padL + (idx / (stops.length - 1)) * trackW;
    const y = yBot - (s.cumulative / maxCum) * (yBot - yTop);
    return { ...s, x, y, idx };
  });

  // Build line path
  const linePath = positions.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");

  // Icon set — one per stop based on dominant theme/status
  const iconFor = (stop) => {
    if (stop.state === "past") return "check";
    if (stop.state === "now") return "bolt";
    const themes = stop.items.map(it => it.theme);
    if (themes.includes("ai")) return "ai";
    if (themes.includes("sovereign")) return "shield";
    return "layers";
  };

  // Strict alternation so neighbouring cards can never overlap.
  // Even indices below the line, odd above.
  const placement = (idx) => (idx % 2 === 0 ? "below" : "above");

  return (
    <div style={sB.root}>
      <Header subtitle="Milestone Path" title="Delivery climb, 2025 → 2027." />

      <div style={sB.legendRow}>
        <span style={sB.legendItem}>
          <svg width="22" height="3" style={{ marginRight: 8 }}><line x1="0" y1="1.5" x2="22" y2="1.5" stroke="#22C55E" strokeWidth="2.5" /></svg>
          Delivered
        </span>
        <span style={sB.legendItem}>
          <svg width="22" height="3" style={{ marginRight: 8 }}><line x1="0" y1="1.5" x2="22" y2="1.5" stroke="#605EFF" strokeWidth="2.5" /></svg>
          Now building
        </span>
        <span style={sB.legendItem}>
          <svg width="22" height="3" style={{ marginRight: 8 }}><line x1="0" y1="1.5" x2="22" y2="1.5" stroke="#8B6FFF" strokeWidth="2.5" strokeDasharray="4 4" /></svg>
          Planned
        </span>
        <span style={{ ...sB.legendItem, marginLeft: "auto", color: "var(--c-text-muted)", fontSize: 11 }}>
          Y-axis: cumulative releases delivered · X-axis: quarter
        </span>
      </div>

      <div style={sB.chartWrap}>
        <svg viewBox={`0 0 ${W} ${H}`} style={sB.svg} preserveAspectRatio="xMidYMid meet">
          {/* dotted vertical guides for every quarter */}
          {D.quarters.map((q, i) => {
            const x = padL + (i / (D.quarters.length - 1)) * trackW;
            const isNowCol = i === D.nowIndex;
            return (
              <g key={i}>
                <line
                  x1={x} y1={40} x2={x} y2={H - 60}
                  stroke={isNowCol ? "rgba(96,94,255,0.35)" : "rgba(255,255,255,0.10)"}
                  strokeWidth={isNowCol ? 1.2 : 1}
                  strokeDasharray={isNowCol ? "0" : "2 5"}
                />
                <text
                  x={x} y={H - 38}
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="var(--font-body)"
                  letterSpacing="0.1em"
                  fill={isNowCol ? "#605EFF" : "var(--c-text-muted)"}
                  fontWeight={isNowCol ? 600 : 400}
                >
                  {q}
                </text>
                {isNowCol && (
                  <text
                    x={x} y={H - 22}
                    textAnchor="middle"
                    fontSize="8"
                    letterSpacing="0.2em"
                    fontFamily="var(--font-body)"
                    fill="#605EFF"
                    fontWeight="600"
                  >
                    NOW
                  </text>
                )}
              </g>
            );
          })}

          {/* the climbing line — gradient stroke */}
          <defs>
            <linearGradient id="climb-grad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%"  stopColor="#22C55E" />
              <stop offset="42%" stopColor="#22C55E" />
              <stop offset="50%" stopColor="#605EFF" />
              <stop offset="60%" stopColor="#605EFF" />
              <stop offset="100%" stopColor="#8B6FFF" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Split path into 3 segments for status colouring + dashed future */}
          {positions.length > 1 && positions.slice(0, -1).map((p, i) => {
            const next = positions[i + 1];
            const segState = (p.state === "future" || next.state === "future")
              ? "future"
              : (p.state === "now" || next.state === "now" ? "now" : "past");
            const color = segState === "past" ? "#22C55E" : segState === "now" ? "#605EFF" : "#8B6FFF";
            return (
              <line
                key={i}
                x1={p.x} y1={p.y} x2={next.x} y2={next.y}
                stroke={color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={segState === "future" ? "6 5" : "0"}
                opacity={segState === "future" ? 0.7 : 1}
              />
            );
          })}

          {/* Numerals + circles + cards */}
          {positions.map((p, idx) => {
            const labelBelow = placement(idx) === "below";
            const color = p.state === "past" ? "#22C55E" : p.state === "now" ? "#605EFF" : "#8B6FFF";
            const r = p.state === "now" ? 26 : 22;
            const numY = labelBelow ? p.y - r - 12 : p.y + r + 22;
            const featured = p.items[0]; // representative feature

            return (
              <g key={p.i}>
                {/* number above/below */}
                <text
                  x={p.x}
                  y={numY}
                  textAnchor="middle"
                  fontFamily="var(--font-display)"
                  fontSize="34"
                  fontWeight="500"
                  fill={color}
                  opacity={0.85}
                >
                  {idx + 1}
                </text>

                {/* now pulse */}
                {p.state === "now" && (
                  <circle cx={p.x} cy={p.y} r={r + 8} fill="none" stroke={color} strokeWidth="1.2" opacity="0.5">
                    <animate attributeName="r" values={`${r+4};${r+16}`} dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* circle */}
                <circle
                  cx={p.x} cy={p.y} r={r}
                  fill={p.state === "future" ? "var(--c-background)" : `${color}22`}
                  stroke={color}
                  strokeWidth="2.5"
                  strokeDasharray={p.state === "future" ? "4 3" : "0"}
                  filter={p.state === "now" ? "url(#glow)" : ""}
                />

                {/* icon */}
                <Icon name={iconFor(p)} x={p.x} y={p.y} color={color} size={p.state === "now" ? 18 : 16} />
              </g>
            );
          })}
        </svg>

        {/* HTML overlay for rich cards (positioned absolutely over the SVG) */}
        <div style={sB.cardLayer}>
          {positions.map((p, idx) => {
            const labelBelow = placement(idx) === "below";
            const color = p.state === "past" ? "#22C55E" : p.state === "now" ? "#605EFF" : "#8B6FFF";
            const xPct = (p.x / W) * 100;
            const yPct = (p.y / H) * 100;
            const cardW = 150;

            return (
              <div
                key={p.i}
                style={{
                  ...sB.card(p.state, color),
                  width: cardW,
                  left: `calc(${xPct}% - ${cardW / 2}px)`,
                  top: labelBelow ? `calc(${yPct}% + 52px)` : `calc(${yPct}% - 132px)`
                }}
              >
                <div style={sB.cardHead}>
                  <span style={{ ...sB.cardQ, color }}>{p.q}</span>
                  <span style={sB.cardCount}>
                    {p.items.length} {p.items.length === 1 ? "release" : "releases"}
                  </span>
                </div>
                <div style={sB.cardTitle}>{p.items[0].title}</div>
                {p.items.length > 1 && (
                  <div style={sB.cardMore}>+ {p.items.length - 1} more {p.items.length === 2 ? "release" : "releases"}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Tiny inline icon set
function Icon({ name, x, y, color, size = 16 }) {
  const s = size;
  const props = {
    x: x - s / 2,
    y: y - s / 2,
    width: s,
    height: s
  };
  if (name === "check") {
    return (
      <svg {...props} viewBox="0 0 24 24" fill="none">
        <path d="M5 12 L10 17 L19 7" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "bolt") {
    return (
      <svg {...props} viewBox="0 0 24 24" fill={color}>
        <path d="M13 2 L4 14 L11 14 L11 22 L20 10 L13 10 Z" />
      </svg>
    );
  }
  if (name === "ai") {
    return (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <circle cx="9" cy="13" r="1.2" fill={color} />
        <circle cx="15" cy="13" r="1.2" fill={color} />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="2" y1="14" x2="4" y2="14" />
        <line x1="20" y1="14" x2="22" y2="14" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 L4 6 V12 C4 17 8 21 12 22 C16 21 20 17 20 12 V6 Z" />
        <path d="M9 12 L11.5 14.5 L15.5 10.5" />
      </svg>
    );
  }
  // layers
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 L22 8 L12 14 L2 8 Z" />
      <path d="M2 14 L12 20 L22 14" />
    </svg>
  );
}

const optionBStyles = {
  root: { background: "var(--c-background)", color: "var(--c-on-background)", padding: "40px 48px 32px", fontFamily: "var(--font-body)", minHeight: "100%", boxSizing: "border-box" },

  legendRow: {
    marginTop: 22,
    display: "flex",
    alignItems: "center",
    gap: 22,
    padding: "12px 16px",
    background: "var(--c-surface-container-low)",
    border: "1px solid var(--c-outline-variant)",
    borderRadius: 10
  },
  legendItem: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: 12,
    color: "var(--c-on-background)",
    fontWeight: 500
  },

  chartWrap: {
    position: "relative",
    marginTop: 18,
    width: "100%",
    aspectRatio: "1700 / 580"
  },
  svg: { width: "100%", height: "100%", display: "block" },

  cardLayer: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none"
  },
  card: (state, color) => ({
    position: "absolute",
    width: 150,
    padding: "10px 12px",
    background: state === "now"
      ? "rgba(96,94,255,0.08)"
      : "var(--c-surface-container-low)",
    border: "1px solid",
    borderColor: state === "now" ? "rgba(96,94,255,0.4)" : "var(--c-outline-variant)",
    borderLeft: `3px solid ${color}`,
    borderRadius: 10,
    boxShadow: state === "now"
      ? "0 12px 30px -12px rgba(96,94,255,0.45)"
      : "0 6px 20px -12px rgba(0,0,0,0.5)",
    pointerEvents: "auto"
  }),
  cardHead: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 5
  },
  cardQ: {
    fontFamily: "var(--font-display)",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.04em"
  },
  cardCount: {
    fontSize: 9,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--c-text-muted)"
  },
  cardTitle: {
    fontFamily: "var(--font-display)",
    fontSize: 13,
    fontWeight: 500,
    color: "var(--c-on-background)",
    lineHeight: 1.3,
    letterSpacing: "-0.005em"
  },
  cardMore: {
    marginTop: 6,
    fontSize: 10.5,
    color: "var(--c-text-muted)",
    fontStyle: "italic"
  }
};

window.OptionB = OptionB;
