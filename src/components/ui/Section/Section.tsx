import { Wrapper } from "./styles";

interface Props {
  title?: string;
  children: React.ReactNode;
  center?: boolean;

}

export default function Section({ title, children, center = false }: Props) {
  return (
    <Wrapper $center={center}>
      {title && <h2 className="section-title">{title}</h2>}
      <div className="section-content">{children}</div>
    </Wrapper>
  );
}
