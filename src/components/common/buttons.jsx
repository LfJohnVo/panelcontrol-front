import Button from "@mui/material/Button";

export const ButtonCustom = ({
  title,
  type,
  variant,
  onClick,
  sx,
  startIcon,
  fullWidth,
}) => {
  return (
    <Button
      type={type}
      fullWidth={fullWidth || false}
      variant={variant || "contained"}
      onClick={onClick || null}
      startIcon={startIcon || null}
      sx={sx}
    >
      {title}
    </Button>
  );
};
