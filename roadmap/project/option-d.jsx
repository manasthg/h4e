// Option D — Theme Lanes (Streams)
// Group by strategic theme/stream — much fewer rows than per-feature Gantt.
// Each lane shows continuous "story" of work in that theme across time.
// Best for showing strategic narrative + workload balance across themes.

function OptionD() {
  const D = window.IDTRUST;
  const sD = optionDStyles;

  const themeOrder = ["sovereign", "ai", "governance"];
  const lanes = themeOrder.map(k => ({
    key: k,
    ...D.themes[k],
    features: D.features.filter(f => f.theme === k)
  }));

  return (
    <div style={sD.root}>
      <Header subtitle="Strategic Streams" title="Roadmap by theme." />

      <div style={sD.gridWrap}>
        {/* Year headers */}
        <div style={sD.yearRow}>
          <div style={sD.yearLabelCell}>Stream</div>
          <div style={{ ...sD.yearCell, color: "var(--c-text-muted)" }}>2025</div>
          <div style={{ ...sD.yearCell, color: "#605EFF" }}>2026</div>
          <div style={{ ...sD.yearCell, color: "#8B6FFF" }}>2027</div>
        </div>

        {/* Quarter headers */}
        <div style={sD.qRow}>
          <div style={sD.qLabelCell}></div>
          {D.quarters.map((q, i) => (
            <div key={i} style={sD.qCell(i === D.nowIndex)}>
              {q}
              {i === D.nowIndex && <div style={sD.nowMarker}>NOW</div>}
            </div>
          ))}
        </div>

        {/* NOW vertical line overlay */}
        <div style={sD.nowLine}></div>

        {/* Lanes */}
        {lanes.map((lane, li) => (
          <div key={lane.key} style={sD.lane}>
            <div style={sD.laneLabelCell}>
              <div style={{ ...sD.laneAccent, background: lane.color }}></div>
              <div style={sD.laneLabelText}>
                <div style={sD.laneName}>{lane.label}</div>
                <div style={sD.laneCount}>{lane.features.length} releases</div>
              </div>
            </div>

            <div style={sD.laneTrack}>
              {/* faint flow ribbon behind cards */}
              <div style={sD.flowRibbon(lane.color)}></div>

              {lane.features.map(f => {
                const left = (f.qStart / 12) * 100;
                const width = (f.qSpan / 12) * 100;
                const isProgress = f.status === "progress";
                const isShipped = f.status === "shipped";
                return (
                  <div
                    key={f.id}
                    style={{
                      ...sD.chip(f.status, lane.color),
                      left: `calc(${left}% + 4px)`,
                      width: `calc(${width}% - 8px)`
                    }}
                    title={f.title + " — " + f.desc}
                  >
                    <span style={sD.chipDot(f.status)}></span>
                    <span style={sD.chipLabel}>{f.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* footer: cadence summary */}
        <div style={sD.footer}>
          {Object.entries(D.statuses).map(([k, s]) => {
            const count = D.features.filter(f => f.status === k).length;
            return (
              <div key={k} style={sD.footerStat}>
                <div style={{ ...sD.footerDot, background: s.color }}></div>
                <div>
                  <div style={sD.footerNum}>{count}</div>
                  <div style={sD.footerLabel}>{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const colTemplate = "180px repeat(12, 1fr)";

const optionDStyles = {
  root: { background: "var(--c-background)", color: "var(--c-on-background)", padding: "40px 48px 48px", fontFamily: "var(--font-body)", minHeight: "100%", boxSizing: "border-box" },
  gridWrap: { marginTop: 28, position: "relative", border: "1px solid var(--c-outline-variant)", borderRadius: 14, background: "var(--c-surface-container-low)", overflow: "hidden" },

  yearRow: { display: "grid", gridTemplateColumns: "180px 4fr 4fr 4fr", borderBottom: "1px solid var(--c-outline-variant)", background: "rgba(255,255,255,0.02)" },
  yearLabelCell: { padding: "10px 16px", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--c-text-muted)" },
  yearCell: { padding: "10px 16px", textAlign: "center", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", borderLeft: "1px solid var(--c-outline-variant)", fontWeight: 500 },

  qRow: { display: "grid", gridTemplateColumns: colTemplate, borderBottom: "1px solid var(--c-outline-variant)", background: "rgba(255,255,255,0.01)" },
  qLabelCell: { padding: "10px 16px" },
  qCell: (now) => ({
    padding: "10px 6px",
    textAlign: "center",
    fontSize: 9.5,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: now ? "#605EFF" : "var(--c-text-muted)",
    fontWeight: now ? 600 : 400,
    borderLeft: "1px solid var(--c-outline-variant)",
    position: "relative"
  }),
  nowMarker: { fontSize: 7, letterSpacing: "0.18em", color: "#605EFF", marginTop: 2, fontWeight: 600 },

  nowLine: {
    position: "absolute",
    top: 0,
    bottom: 60,
    left: "calc(180px + (100% - 180px) * 5.5 / 12)",
    width: 1,
    background: "linear-gradient(to bottom, transparent 0%, rgba(96,94,255,0.4) 8%, rgba(96,94,255,0.4) 92%, transparent 100%)",
    pointerEvents: "none",
    zIndex: 1
  },

  lane: { display: "grid", gridTemplateColumns: colTemplate, borderBottom: "1px solid var(--c-outline-variant)", minHeight: 88, position: "relative" },
  laneLabelCell: { padding: "16px 16px", display: "flex", alignItems: "center", gap: 10, borderRight: "1px solid var(--c-outline-variant)", background: "var(--c-surface-container)" },
  laneAccent: { width: 4, height: 32, borderRadius: 4, flexShrink: 0 },
  laneLabelText: { minWidth: 0 },
  laneName: { fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 500, color: "var(--c-on-background)", letterSpacing: "-0.005em", lineHeight: 1.2 },
  laneCount: { fontSize: 10, color: "var(--c-text-muted)", marginTop: 3, letterSpacing: "0.06em" },

  laneTrack: { gridColumn: "2 / -1", position: "relative", padding: "12px 0", minHeight: 88 },
  flowRibbon: (color) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: 4,
    right: 4,
    height: 56,
    background: `linear-gradient(90deg, ${color}05 0%, ${color}12 50%, ${color}05 100%)`,
    borderRadius: 28,
    pointerEvents: "none"
  }),

  chip: (status, themeColor) => {
    const base = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      height: 32,
      padding: "0 12px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 11,
      fontWeight: 500,
      borderRadius: 8,
      cursor: "pointer",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      transition: "transform .15s, box-shadow .15s"
    };
    if (status === "shipped") {
      return { ...base, background: "rgba(34,197,94,0.13)", border: "1px solid rgba(34,197,94,0.4)", color: "#dffce9" };
    }
    if (status === "progress") {
      return {
        ...base,
        background: `linear-gradient(90deg, ${themeColor}26 0%, ${themeColor}1a 100%)`,
        border: `1px solid ${themeColor}80`,
        color: "var(--c-on-background)",
        boxShadow: `0 6px 18px -10px ${themeColor}80`
      };
    }
    if (status === "planned") {
      return {
        ...base,
        background: `repeating-linear-gradient(45deg, ${themeColor}1c 0 6px, transparent 6px 11px)`,
        border: `1px dashed ${themeColor}60`,
        color: "var(--c-on-background)"
      };
    }
    return base;
  },
  chipDot: (status) => ({
    width: 6, height: 6, borderRadius: 999, flexShrink: 0,
    background: status === "shipped" ? "#22C55E" : status === "progress" ? "#605EFF" : status === "planned" ? "#A1A1AA" : "#F59E0B"
  }),
  chipLabel: { overflow: "hidden", textOverflow: "ellipsis" },

  footer: {
    display: "flex",
    gap: 36,
    padding: "16px 20px",
    background: "var(--c-surface-container)",
    borderTop: "1px solid var(--c-outline-variant)"
  },
  footerStat: { display: "flex", alignItems: "center", gap: 10 },
  footerDot: { width: 10, height: 10, borderRadius: 999 },
  footerNum: { fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, color: "var(--c-on-background)", lineHeight: 1 },
  footerLabel: { fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--c-text-muted)", marginTop: 2 }
};

window.OptionD = OptionD;
