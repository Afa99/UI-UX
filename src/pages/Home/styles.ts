import styled from "styled-components";

export const Hero = styled.section`
  padding: 140px 0 120px;
  text-align: center;
  background: radial-gradient(circle at 20% 30%, #6366F1 0%, #4F46E5 40%, #312E81 100%);

  color: white;
 
  .title {
    font-size: 64px;
    font-weight: 800;
    margin-bottom: 24px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.1;

  }

  .subtitle {
    font-size: 22px;
    opacity: 0.85;
    max-width: 600px;
    margin: 0 auto 40px auto;
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 20px;
  }
`;
export const FeaturesGrid = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 50px;
  padding-top: 40px;
`;

export const FeatureCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.05);
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.08);
  }

  .icon {
    font-size: 42px;
    margin-bottom: 20px;
  }

  .text {
    font-size: 18px;
    color: #475569;
    margin-top: 12px;
  }
`;
