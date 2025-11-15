import styled from "styled-components";

export const Wrapper = styled.section<{ $center: boolean }>`
  padding: 60px 0;

  .section-title {
    text-align: center;
    color: #6C4DF6;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  .section-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${(props) =>
      props.$center &&
      `
      text-align: center;
    `}
  }
`;
