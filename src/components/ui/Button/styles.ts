import styled from "styled-components";

export const StyledButton = styled.button<{
  $variant: "primary" | "secondary" | "outline";
  $fullWidth?: boolean;
}>`
  padding: 14px 28px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
  user-select: none;

  /* ACTIVE (pressed) effect */
  &:active {
    transform: scale(0.96);
    opacity: 0.9;
  }

  /* Ripple effect */
  &:active::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: ripple 0.5s ease-out;
  }

  @keyframes ripple {
    from {
      opacity: 0.6;
      transform: translate(-50%, -50%) scale(1);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -50%) scale(18);
    }
  }

  ${({ $variant }) =>
    $variant === "primary" &&
    `
      background: linear-gradient(135deg, #ff8c42, #ff6a00);
      color: white;
      box-shadow: 0 6px 18px rgba(255, 122, 0, 0.35);

      &:hover {
        background: linear-gradient(135deg, #ff9c5e, #ff7a1a);
      }
    `}

  ${({ $variant }) =>
    $variant === "secondary" &&
    `
      background: #ffe3c2;
      color: #ff6a00;
      box-shadow: 0 6px 18px rgba(255, 122, 0, 0.25);

      &:hover {
        background: #ffd3a4;
      }
    `}

  ${({ $variant }) =>
    $variant === "outline" &&
    `
      background: transparent;
      color: #ff6a00;
      border: 2px solid #ff6a00;

      &:hover {
        background: rgba(255, 122, 0, 0.12);
      }
    `}
`;
