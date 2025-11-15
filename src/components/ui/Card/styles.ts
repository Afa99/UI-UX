import styled from "styled-components";

export const Wrapper = styled.div<{ clickable: boolean }>`
  background: #ffffff;
  padding: 24px;
  border-radius: 20px;

  border: 1px solid rgba(108, 77, 246, 0.15);
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.06);

  transition: all 0.25s ease;
  cursor: ${(p) => (p.clickable ? "pointer" : "default")};

  position: relative;
  overflow: hidden;

  &:hover {
    ${(p) =>
      p.clickable &&
      `
      box-shadow: 0px 12px 36px rgba(108, 77, 246, 0.18);
      border-color: rgba(108, 77, 246, 0.45);
    `}
  }
`;
