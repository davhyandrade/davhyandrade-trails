"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { ArrowRight, CalendarDays, MapPin, Mountain } from "lucide-react";
import { addTrail, createTrailId } from "../../../_utils/trails/trails";
import { trailFormStyles } from "./trail-form.styles";
import type { TrailFormValues } from "./trail-form.types";

const emptyValues: TrailFormValues = {
  name: "",
  location: "",
  date: "",
};

const fields = [
  {
    key: "name" as const,
    label: "Nome da trilha",
    placeholder: "Ex.: Pico do Jaraguá",
    icon: <Mountain size={19} />,
  },
  {
    key: "location" as const,
    label: "Local",
    placeholder: "Ex.: São Paulo, SP",
    icon: <MapPin size={19} />,
  },
  {
    key: "date" as const,
    label: "Data",
    placeholder: "",
    icon: <CalendarDays size={19} />,
  },
];

function TrailForm() {
  const router = useRouter();
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState<Partial<TrailFormValues>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors: Partial<TrailFormValues> = {};

    if (!values.name.trim())
      validationErrors.name = "Informe o nome da trilha.";
    if (!values.location.trim()) validationErrors.location = "Informe o local.";
    if (!values.date) validationErrors.date = "Informe a data.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    addTrail({
      id: createTrailId(values.name, values.date),
      name: values.name.trim(),
      location: values.location.trim(),
      date: values.date,
    });

    router.push("/");
  }

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={trailFormStyles.form}
    >
      <Stack gap={3}>
        {fields.map((field) => (
          <Box key={field.key}>
            <Typography
              component="label"
              htmlFor={field.key}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
                color: "#274534",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              {field.icon}
              {field.label}
            </Typography>
            <TextField
              id={field.key}
              type={field.key === "date" ? "date" : "text"}
              value={values[field.key]}
              onChange={(event) => {
                setValues((currentValues) => ({
                  ...currentValues,
                  [field.key]: event.target.value,
                }));
                setErrors((currentErrors) => ({
                  ...currentErrors,
                  [field.key]: undefined,
                }));
              }}
              placeholder={field.placeholder}
              error={Boolean(errors[field.key])}
              helperText={errors[field.key]}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#FAF8ED",
                  borderRadius: 2.5,
                },
                "& .MuiInputBase-input": {
                  fontSize: 16,
                  py: 1.6,
                },
              }}
            />
          </Box>
        ))}
        <Button
          type="submit"
          variant="contained"
          endIcon={<ArrowRight size={19} />}
          sx={{
            mt: 1,
            minHeight: 52,
            bgcolor: "#173E29",
            borderRadius: 2.5,
            textTransform: "none",
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          Registrar trilha
        </Button>
      </Stack>
    </Box>
  );
}

export default TrailForm;
