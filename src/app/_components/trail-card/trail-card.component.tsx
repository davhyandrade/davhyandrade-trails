import { Box, Stack, Typography } from "@mui/material";
import { CalendarDays, MapPin, Mountain } from "lucide-react";
import { formatTrailDate } from "../../_utils/trails/trails";
import { trailCardStyles } from "./trail-card.styles";
import type { TrailCardProps } from "./trail-card.types";
const gradients = [
  "linear-gradient(145deg,#143C29,#2F6844 55%,#92B86B)",
  "linear-gradient(145deg,#253F32,#52795A 55%,#C4A568)",
  "linear-gradient(145deg,#173C31,#326657 58%,#8FAE9A)",
];
function TrailCard({ trail, index }: TrailCardProps) {
  return (
    <Box component="article" sx={trailCardStyles.card}>
      <Box
        sx={{
          ...trailCardStyles.art,
          background: gradients[index % gradients.length],
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            width: 230,
            height: 230,
            border: "1px solid rgba(255,255,255,.2)",
            borderRadius: "43% 57%",
            top: -115,
            right: -65,
            transform: "rotate(28deg)",
          }}
        />
        <Mountain
          aria-hidden
          size={36}
          strokeWidth={1.35}
          style={{ position: "absolute", top: 22, left: 22, opacity: 0.78 }}
        />
        <Typography
          sx={{
            position: "relative",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: ".15em",
            textTransform: "uppercase",
            opacity: 0.78,
          }}
        >
          Trilha realizada
        </Typography>
      </Box>
      <Box sx={{ p: 2.75 }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: "var(--font-display)",
            fontSize: 25,
            lineHeight: 1.15,
            fontWeight: 700,
            color: "#173423",
            mb: 2.25,
          }}
        >
          {trail.name}
        </Typography>
        <Stack gap={1.15}>
          <Stack direction="row" gap={1} alignItems="center">
            <MapPin size={17} />
            <Typography sx={{ color: "#526158", fontSize: 14 }}>
              {trail.location}
            </Typography>
          </Stack>
          <Stack direction="row" gap={1} alignItems="center">
            <CalendarDays size={17} />
            <Typography
              component="time"
              dateTime={trail.date}
              sx={{ color: "#526158", fontSize: 14 }}
            >
              {formatTrailDate(trail.date)}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default TrailCard;
