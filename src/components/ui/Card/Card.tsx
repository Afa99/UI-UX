import { Wrapper } from "./styles";
import { motion } from "framer-motion";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clickable?: boolean;
}

export default function Card({ children, clickable = false, ...rest }: Props) {
  return (
    <Wrapper
      as={motion.div}
      whileHover={clickable ? { scale: 1.03 } : undefined}
      whileTap={clickable ? { scale: 0.98 } : undefined}
      clickable={clickable}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}
