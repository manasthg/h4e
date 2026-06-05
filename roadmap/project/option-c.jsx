// Option C — Horizontal Journey / Story Timeline
// Single horizontal scrubbable timeline. Each delivery quarter becomes a "stop".
// Cards alternate above/below the line. Best for "narrative" presentation:
// gives a clear sense of past momentum + future direction.

function OptionC() {
  const D = window.IDTRUST;
  const sC = optionCStyles;

  // Group features by delivery quarter index
  const byQ = {};
  D.features.forEach(f => {
    const q = f.qStart + f.qSpan - 1;
    (byQ[q] = byQ[q] || []).push(f);
  });

  const milestones = D.quarters.map((q, i) => ({
    index: i,
    label: q,
    period: q.split(" '")[0],
    year: "20" + q.split(" '")[1],
    items: byQ[i] || [],
    state: i < D.nowIndex ? "past" : i === D.nowIndex ? "now" : "future"
  }));

  return (
    <div style={sC.root}>
      <Header subtitle="Product Journey" title="The road, end to end." />

      <div style={sC.scrollOuter}>
        <div style={sC.scrollInner}>
          {/* the rail */}
          <div style={sC.rail}>
            <div style={sC.railPast}></div>
            <div style={sC.railNow}></div>
            <div style={sC.railFuture}></div>
          </div>

          {/* stops */}
          <div style={sC.stopsRow}>
            {milestones.map((m, i) => {
              const above = i % 2 === 0;
              return (
                <div key={m.index} style={sC.stop}>
                  {/* card */}
                  <div style={{ ...sC.cardWrap, ...(above ? sC.cardAbove : sC.cardBelow) }}>
                    <div style={sC.connector(above, m.state)}></div>
                    <div style={sC.qCard(m.state)}>
                      <div style={sC.qCardHead}>
                        <div style={sC.qCardPeriod(m.state)}>{m.period}</div>
                        <div style={sC.qCardYear}>{m.year}</div>
                      </div>
                      <div style={sC.qCardCount}>
                        {m.items.length} {m.items.length === 1 ? "release" : "releases"}
                      </div>
                      <div style={sC.qCardList}>
                        {m.items.slice(0, 4).map(f => {
                          const theme = D.themes[f.theme];
                          return (
                            <div key={f.id} style={sC.qCardItem}>
                              <span style={{ ...sC.qCardItemDot, background: theme.color }}></span>
                              <span style={sC.qCardItemText}>{f.title}</span>
                            </div>
                          );
                        })}
                        {m.items.length > 4 && (
                          <div style={sC.qCardMore}>+{m.items.length - 4} more</div>
                        )}
                        {m.items.length === 0 && (
                          <div style={sC.qCardEmpty}>—</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* dot on rail */}
                  <div style={sC.dotWrap}>
                    <div style={sC.dot(m.state)}>
                      {m.state === "past" && <span style={sC.dotCheck}>{"\u2713"}</span>}
                    </div>
                    {m.state === "now" && (
                      <>
                        <div style={sC.dotPulse}></div>
                        <div style={sC.nowFlag}>YOU ARE HERE</div>
                      </>
                    )}
                  </div>

                  {/* axis label */}
                  <div style={sC.axisLabel(m.state)}>{m.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* theme summary bar */}
      <div style={sC.themeBar}>
        <div style={sC.themeBarLabel}>Strategic streams</div>
        {Object.entries(D.themes).map(([k, t]) => {
          const count = D.features.filter(f => f.theme === k).length;
          return (
            <div key={k} style={sC.themeBarItem}>
              <span style={{ ...sC.themeBarDot, background: t.color }}></span>
              <span style={sC.themeBarName}>{t.label}</span>
              <span style={sC.themeBarCount}>{count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const optionCStyles = {
  root: { background: "var(--c-background)", color: "var(--c-on-background)", padding: "40px 48px 48px", fontFamily: "var(--font-body)", minHeight: "100%", boxSizing: "border-box" },
  scrollOuter: { marginTop: 36, overflowX: "auto", overflowY: "visible", paddingBottom: 12 },
  scrollInner: { position: "relative", minWidth: 1600, padding: "180px 24px 80px" },
  rail: { position: "absolute", left: 24, right: 24, top: 220, height: 2, display: "flex", overflow: "hidden", borderRadius: 99 },
  railPast: { width: "42%", background: "linear-gradient(90deg, rgba(34,197,94,0.15), rgba(34,197,94,0.55))" },
  railNow:  { width: "8%",  background: "linear-gradient(90deg, rgba(34,197,94,0.55), rgba(96,94,255,0.9) 50%, rgba(96,94,255,0.55))", boxShadow: "0 0 16px rgba(96,94,255,0.6)" },
  railFuture: { flex: 1, background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 4px, transparent 4px 9px)" },

  stopsRow: { display: "grid", gridTemplateColumns: "repeat(12, 1fr)", position: "relative" },
  stop: { position: "relative", display: "flex", flexDirection: "column", alignItems: "center" },

  cardWrap: { position: "absolute", left: "50%", transform: "translateX(-50%)", width: 200, display: "flex", flexDirection: "column", alignItems: "center" },
  cardAbove: { bottom: "calc(100% - 32px)" },
  cardBelow: { top: "32px" },

  connector: (above, state) => ({
    width: 1,
    height: 30,
    background: state === "now" ? "rgba(96,94,255,0.6)" : state === "past" ? "rgba(34,197,94,0.4)" : "rgba(255,255,255,0.18)",
    order: above ? 2 : 0
  }),
  qCard: (state) => ({
    width: "100%",
    padding: "12px 14px",
    background: state === "now" ? "rgba(96,94,255,0.06)" : "var(--c-surface-container-low)",
    border: "1px solid",
    borderColor: state === "now" ? "rgba(96,94,255,0.35)" : "var(--c-outline-variant)",
    borderRadius: 10,
    boxShadow: state === "now" ? "0 12px 36px -16px rgba(96,94,255,0.45)" : "none",
    opacity: state === "past" ? 0.7 : 1
  }),
  qCardHead: { display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 },
  qCardPeriod: (state) => ({
    fontFamily: "var(--font-display)",
    fontSize: 16,
    fontWeight: 500,
    color: state === "now" ? "#605EFF" : "var(--c-on-background)",
    letterSpacing: "-0.005em"
  }),
  qCardYear: { fontSize: 10, color: "var(--c-text-muted)", letterSpacing: "0.06em" },
  qCardCount: { fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--c-text-muted)", marginBottom: 10 },
  qCardList: { display: "flex", flexDirection: "column", gap: 6 },
  qCardItem: { display: "flex", alignItems: "flex-start", gap: 8, fontSize: 11.5, color: "var(--c-on-background)", lineHeight: 1.4 },
  qCardItemDot: { width: 5, height: 5, borderRadius: 999, marginTop: 6, flexShrink: 0 },
  qCardItemText: { flex: 1 },
  qCardMore: { fontSize: 10, color: "var(--c-text-muted)", fontStyle: "italic", marginTop: 2, paddingLeft: 13 },
  qCardEmpty: { fontSize: 11, color: "var(--c-text-muted)", fontStyle: "italic" },

  dotWrap: { position: "absolute", top: 213, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" },
  dot: (state) => ({
    width: state === "now" ? 18 : 12,
    height: state === "now" ? 18 : 12,
    borderRadius: 999,
    background: state === "past" ? "#22C55E" : state === "now" ? "#605EFF" : "var(--c-surface-container-high)",
    border: state === "future" ? "1px dashed var(--c-outline)" : "none",
    boxShadow: state === "now" ? "0 0 0 5px rgba(96,94,255,0.16), 0 0 18px rgba(96,94,255,0.55)" : "none",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "#01010A", fontSize: 8, fontWeight: 700,
    position: "relative",
    zIndex: 2
  }),
  dotCheck: { fontSize: 8, color: "#01010A", fontWeight: 700 },
  dotPulse: { position: "absolute", inset: -6, borderRadius: 999, border: "1.5px solid rgba(96,94,255,0.5)", animation: "h4ePulse 2s ease-out infinite" },
  nowFlag: {
    position: "absolute", top: 28, fontSize: 9, letterSpacing: "0.18em",
    color: "#605EFF", fontWeight: 600, whiteSpace: "nowrap"
  },
  axisLabel: (state) => ({
    position: "absolute", top: 250, fontSize: 10, letterSpacing: "0.12em",
    color: state === "past" ? "var(--c-text-muted)" : "var(--c-on-background)",
    fontWeight: state === "now" ? 600 : 400,
    textTransform: "uppercase"
  }),

  themeBar: {
    marginTop: 24,
    padding: "14px 18px",
    background: "var(--c-surface-container-low)",
    border: "1px solid var(--c-outline-variant)",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    gap: 24,
    flexWrap: "wrap"
  },
  themeBarLabel: { fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--c-text-muted)", fontWeight: 500, paddingRight: 18, borderRight: "1px solid var(--c-outline-variant)" },
  themeBarItem: { display: "inline-flex", alignItems: "center", gap: 8 },
  themeBarDot: { width: 10, height: 10, borderRadius: 999, display: "inline-block" },
  themeBarName: { fontSize: 12, color: "var(--c-on-background)" },
  themeBarCount: { fontSize: 11, color: "var(--c-text-muted)", fontFamily: "var(--font-mono, monospace)" }
};

window.OptionC = OptionC;
