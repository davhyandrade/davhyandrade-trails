export const navigationStyles = {
  root: {
    position: { xs: "fixed", md: "sticky" },
    inset: { xs: "auto 0 0", md: "auto" },
    top: { md: 0 },
    zIndex: 20,
    backgroundColor: "rgba(17,45,30,.96)",
    backdropFilter: "blur(14px)",
  },
  inner: {
    maxWidth: 1200,
    minHeight: { xs: 76, md: 82 },
    mx: "auto",
    px: { xs: 2, md: 4 },
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "space-around", md: "space-between" },
  },
} as const;
