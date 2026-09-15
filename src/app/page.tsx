import Link from "next/link";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import TrailsList from "./_components/trails-list/trails-list.component";
function HomePage() {
  return (
    <Box
      component="main"
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2.25, sm: 4 },
        pt: { xs: 5, md: 7 },
        pb: { xs: 14, md: 9 },
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "flex-end" }}
        gap={3}
        sx={{ mb: { xs: 4, md: 5 } }}
      >
        <Box>
          <Typography
            sx={{
              color: "#52705D",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              mb: 1.2,
            }}
          >
            Diário de caminhos
          </Typography>
          <Typography
            component="h1"
            sx={{
              color: "#153823",
              fontFamily: "var(--font-display)",
              fontSize: { xs: 42, sm: 56 },
              lineHeight: 0.98,
              fontWeight: 700,
              letterSpacing: "-.045em",
            }}
          >
            Minhas trilhas
          </Typography>
        </Box>
        <Link href="/adicionar" style={{ textDecoration: "none" }}>
          <Button
            component="span"
            endIcon={<ArrowUpRight size={18} />}
            sx={{
              color: "#173E29",
              textTransform: "none",
              fontWeight: 700,
              borderBottom: "1px solid #78927E",
              borderRadius: 0,
              px: 0.25,
            }}
          >
            Adicionar trilha
          </Button>
        </Link>
      </Stack>
      <TrailsList />
    </Box>
  );
}
export default HomePage;
