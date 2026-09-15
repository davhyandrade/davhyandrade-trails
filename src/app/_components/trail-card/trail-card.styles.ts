export const trailCardStyles = {
  card: {
    overflow: "hidden",
    borderRadius: 4,
    border: "1px solid rgba(18,53,31,.1)",
    bgcolor: "#FFFDF5",
    boxShadow: "0 16px 44px rgba(29,55,38,.08)",
    transition: "180ms ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 22px 56px rgba(29,55,38,.14)",
    },
  },
  art: {
    position: "relative",
    height: 174,
    p: 2.5,
    display: "flex",
    alignItems: "flex-end",
    color: "white",
  },
} as const;
