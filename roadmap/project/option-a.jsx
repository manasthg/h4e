// Option A — Quarterly Release Calendar
// Vertical scroll of quarter "stations". Past collapsed, NOW expanded, future visible.
// Reads ship-quarter (qStart+qSpan) rather than spans → much less visual noise than Gantt.

function OptionA() {
  const D = window.IDTRUST;
  // Group features by completion quarter (qStart + qSpan - 1)
  const byQuarter = {};
  D.features.forEach(f => {
    const q = f.qStart + f.qSpan - 1; // delivery quarter
    (byQuarter[q] = byQuarter[q] || []).push(f);
  });

  const styles = optionAStyles;

  return (
    <div style={styles.root}>
      <Header subtitle="Quarterly Release Calendar" title="What ships, when." />

      <div style={styles.timeline}>
        {/* spine */}
        <div style={styles.spine}></div>

        {D.quarters.map((q, i) => {
          const features = byQuarter[i] || [];
          const isPast = i < D.nowIndex;
          const isNow = i === D.nowIndex;
          const isFuture = i > D.nowIndex;
          const year = q.split(" '")[1];
          const period = q.split(" '")[0];

          return (
            <div key={i} style={styles.row(isPast, isNow)}>
              {/* node */}
              <div style={styles.nodeWrap}>
                <div style={styles.node(isPast, isNow, isFuture)}>
                  {isPast && <span style={styles.checkmark}>✓</span>}
                  {isNow && <span style={styles.pulse}></span>}
                </div>
                {isNow && <div style={styles.nowLabel}>NOW</div>}
              </div>

              {/* quarter label */}
              <div style={styles.qLabel}>
                <div style={styles.qPeriod(isPast)}>{period}</div>
                <div style={styles.qYear(isPast)}>20{year}</div>
                <div style={styles.qCount}>
                  {features.length} {features.length === 1 ? "release" : "releases"}
                </div>
              </div>

              {/* feature cards */}
              <div style={styles.featList}>
                {features.length === 0 && (
                  <div style={styles.emptyCard}>— no releases scheduled —</div>
                )}
                {features.map(f => {
                  const status = D.statuses[f.status];
                  const theme = D.themes[f.theme];
                  return (
                    <div key={f.id} style={styles.featCard(f.status, theme.color)}>
                      <div style={styles.featLeft}>
                        <div style={styles.featDot(status.color, f.status === "progress")}></div>
                      </div>
                      <div style={styles.featBody}>
                        <div style={styles.featTitle}>{f.title}</div>
                        <div style={styles.featDesc}>{f.desc}</div>
                        <div style={styles.featMeta}>
                          <span style={styles.featTag(theme.color)}>{theme.short}</span>
                          <span style={styles.featStatus(status.color)}>{status.label}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const optionAStyles = {
  root: {
    background: "var(--c-background)",
    color: "var(--c-on-background)",
    padding: "40px 56px 56px",
    fontFamily: "var(--font-body)",
    minHeight: "100%",
    boxSizing: "border-box"
  },
  timeline: {
    position: "relative",
    paddingLeft: 0,
    marginTop: 28
  },
  spine: {
    position: "absolute",
    left: 27,
    top: 12,
    bottom: 12,
    width: 1,
    background: "linear-gradient(to bottom, var(--c-outline-variant) 0%, var(--c-outline-variant) 45%, rgba(96,94,255,0.5) 50%, var(--c-outline-variant) 55%, var(--c-outline-variant) 100%)"
  },
  row: (isPast, isNow) => ({
    display: "grid",
    gridTemplateColumns: "56px 120px 1fr",
    gap: 24,
    alignItems: "flex-start",
    paddingBottom: 28,
    opacity: isPast ? 0.55 : 1,
    transition: "opacity .2s"
  }),
  nodeWrap: {
    position: "relative",
    width: 56,
    display: "flex",
    justifyContent: "center",
    paddingTop: 6
  },
  node: (isPast, isNow, isFuture) => ({
    width: isNow ? 22 : 14,
    height: isNow ? 22 : 14,
    borderRadius: 999,
    background: isPast ? "#22C55E" : isNow ? "#605EFF" : "var(--c-surface-container-high)",
    border: isFuture ? "1px dashed var(--c-outline)" : "none",
    boxShadow: isNow ? "0 0 0 6px rgba(96,94,255,0.18), 0 0 30px rgba(96,94,255,0.5)" : isPast ? "0 0 0 3px rgba(34,197,94,0.15)" : "none",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 11,
    fontWeight: 700,
    zIndex: 2
  }),
  checkmark: { fontSize: 9, lineHeight: 1 },
  pulse: {
    position: "absolute",
    inset: -6,
    borderRadius: 999,
    border: "1px solid rgba(96,94,255,0.4)",
    animation: "h4ePulse 2s ease-out infinite"
  },
  nowLabel: {
    position: "absolute",
    top: 36,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: 9,
    letterSpacing: "0.18em",
    color: "#605EFF",
    fontWeight: 600
  },
  qLabel: { paddingTop: 0 },
  qPeriod: (isPast) => ({
    fontFamily: "var(--font-display)",
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: "-0.01em",
    color: isPast ? "var(--c-text-muted)" : "var(--c-on-background)",
    lineHeight: 1.1
  }),
  qYear: (isPast) => ({
    fontSize: 11,
    color: "var(--c-text-muted)",
    letterSpacing: "0.06em",
    marginTop: 2
  }),
  qCount: {
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--c-text-muted)",
    marginTop: 8
  },
  featList: { display: "flex", flexDirection: "column", gap: 8 },
  emptyCard: {
    padding: "14px 18px",
    border: "1px dashed var(--c-outline-variant)",
    borderRadius: 10,
    color: "var(--c-text-muted)",
    fontSize: 12,
    fontStyle: "italic"
  },
  featCard: (status, themeColor) => ({
    display: "flex",
    gap: 14,
    padding: "14px 18px",
    background: status === "progress"
      ? "linear-gradient(135deg, rgba(96,94,255,0.06), rgba(96,94,255,0.02))"
      : "var(--c-surface-container-low)",
    border: "1px solid",
    borderColor: status === "progress" ? "rgba(96,94,255,0.3)" : "var(--c-outline-variant)",
    borderLeft: `3px solid ${themeColor}`,
    borderRadius: 10,
    transition: "transform .15s, box-shadow .15s",
    cursor: "pointer"
  }),
  featLeft: { paddingTop: 4 },
  featDot: (color, pulse) => ({
    width: 8,
    height: 8,
    borderRadius: 999,
    background: color,
    boxShadow: pulse ? `0 0 0 4px ${color}22` : "none",
    animation: pulse ? "h4ePulse 2s ease-out infinite" : "none"
  }),
  featBody: { flex: 1, minWidth: 0 },
  featTitle: {
    fontFamily: "var(--font-display)",
    fontSize: 15,
    fontWeight: 500,
    color: "var(--c-on-background)",
    marginBottom: 4,
    letterSpacing: "-0.005em"
  },
  featDesc: {
    fontSize: 12.5,
    color: "var(--c-text-muted)",
    lineHeight: 1.5,
    marginBottom: 10
  },
  featMeta: { display: "flex", gap: 8, flexWrap: "wrap" },
  featTag: (color) => ({
    fontSize: 9,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: color,
    padding: "3px 8px",
    background: `${color}14`,
    border: `1px solid ${color}30`,
    borderRadius: 999,
    fontWeight: 500
  }),
  featStatus: (color) => ({
    fontSize: 9,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--c-text-muted)",
    padding: "3px 8px",
    border: "1px solid var(--c-outline-variant)",
    borderRadius: 999,
    fontWeight: 500
  })
};

window.OptionA = OptionA;
