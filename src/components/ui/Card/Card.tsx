"use client";

import { motion } from "framer-motion";
import { Wrapper } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clickable?: boolean;
}

export default function Card({ children, clickable = false, ...rest }: Props) {
  return (
    <motion.div
      whileHover={clickable ? { scale: 1.04 } : undefined}
      whileTap={clickable ? { scale: 0.97 } : undefined}
    >
      <Wrapper clickable={clickable} {...rest}>
        {children}
      </Wrapper>
    </motion.div>
  );
}
