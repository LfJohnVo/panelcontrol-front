import Typography from "@mui/material/Typography";

export const TypographyCustom = ({
  title,
  component,
  variant,
  fontSize,
  sx,
}) => {
  return (
    <Typography
      component={component}
      variant={variant}
      fontSize={fontSize}
      sx={sx}
    >
      {title}
    </Typography>
  );
};
