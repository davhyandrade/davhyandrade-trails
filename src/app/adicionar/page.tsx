import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { ArrowLeft } from "lucide-react";
import TrailForm from "./_components/trail-form/trail-form.component";
function AddTrailPage() {
  return (
    <Box
      component="main"
      sx={{
        maxWidth: 720,
        mx: "auto",
        px: { xs: 2.25, sm: 4 },
        pt: { xs: 4, md: 6 },
        pb: { xs: 14, md: 9 },
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <Button
          component="span"
          startIcon={<ArrowLeft size={17} />}
          sx={{ color: "#536B5B", textTransform: "none", px: 0, mb: 3 }}
        >
          Voltar para as trilhas
        </Button>
      </Link>
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
        Nova memória
      </Typography>
      <Typography
        component="h1"
        sx={{
          color: "#153823",
          fontFamily: "var(--font-display)",
          fontSize: { xs: 40, sm: 52 },
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        Adicionar trilha
      </Typography>
      <Typography sx={{ color: "#617067", mt: 1.5, mb: 4, fontSize: 16 }}>
        Guarde o caminho em três detalhes essenciais.
      </Typography>
      <TrailForm />
    </Box>
  );
}
export default AddTrailPage;
