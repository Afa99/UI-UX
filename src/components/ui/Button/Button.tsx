import { StyledButton } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth,
  ...rest
}: Props) {
  return (
    <StyledButton $variant={variant} $fullWidth={fullWidth} {...rest}>
      {children}
    </StyledButton>
  );
}
