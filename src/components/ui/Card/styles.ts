import styled from "styled-components";

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "clickable"
})<{
  clickable?: boolean;
}>`
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  /* rest of your styles */
`;
