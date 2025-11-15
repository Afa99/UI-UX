"use client";

import { Wrapper } from "./styles";

interface Props {
  id?: string;
  title?: string;
  children: React.ReactNode;
  center?: boolean;
}

export default function Section({
  id,
  title,
  children,
  center = false,
}: Props) {
  return (
    <Wrapper id={id} $center={center} >
      {title && <h2 className="section-title">{title}</h2>}
      <div className="section-content">{children}</div>
    </Wrapper>
  );
}
