import Container from "../../components/layout/Container";
import Section from "../../components/ui/Section/Section";
import Card from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";
import { Heading } from "../../components/ui/Typography/Heading";
import { Text } from "../../components/ui/Typography/Text";
import { Hero, FeaturesGrid,FeatureCard } from "./styles";
import { motion } from "framer-motion";

<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
  <Hero>...</Hero>
</motion.div>
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};


export default function Home() {
  return (
    <>
     <Hero>
  <Container>
    <h1 className="title">Design Better. Build Faster.</h1>
    <p className="subtitle">
      A modern UI system created with React, TypeScript, Material UI, and styled-components. 
      Perfect for product teams, SaaS projects, and professional portfolios.
    </p>

    <div className="cta-buttons">
    <Button
  variant="primary"
  onClick={() => scrollTo("why-ui-system")}
>
  View Components
</Button>

<Button
  variant="outline"
  onClick={() => scrollTo("pro-features")}
>
  Get Started
</Button>

    </div>
  </Container>
</Hero>
<Section id="why-ui-system" title="Why This UI System?">
  <Container>
    <FeaturesGrid>
      
      <Card
        onClick = {() => window.open("https://en.wikipedia.org/wiki/User_experience_design", "_blank")}
        style={{ cursor: "pointer" }}
      >
        <Heading>⚡ Fast Development</Heading>
        <Text>
          Build apps 3× faster using reusable components and consistent patterns.
        </Text>
      </Card>

      <Card
        onClick={() =>
          window.open("https://en.wikipedia.org/wiki/User_interface_design", "_blank")
        }
        style={{ cursor: "pointer" }}
      >
        <Heading>🎨 Clean Design</Heading>
        <Text>
          Balanced spacing, typography rules, visual clarity — all in one system.
        </Text>
      </Card>

      <Card
        onClick={() =>
          window.open("https://en.wikipedia.org/wiki/Modular_design", "_blank")
        }
        style={{ cursor: "pointer" }}
      >
        <Heading>🧩 Reusable Components</Heading>
        <Text>
          Fully modular UI: buttons, cards, grids, inputs, sections, typography.
        </Text>
      </Card>

      <Card
        onClick={() =>
          window.open("https://en.wikipedia.org/wiki/User_experience_design", "_blank")
        }
        style={{ cursor: "pointer" }}
      >
        <Heading>📐 UX Principles</Heading>
        <Text>
          Built using heuristics, visual hierarchy, and predictable interaction patterns.
        </Text>
      </Card>

      <Card
        onClick={() =>
          window.open("https://en.wikipedia.org/wiki/Web_accessibility", "_blank")
        }
        style={{ cursor: "pointer" }}
      >
        <Heading>♿ Accessibility</Heading>
        <Text>
          Colors, contrast, keyboard navigation, and readable typography by default.
        </Text>
      </Card>

      <Card
        onClick={() =>
          window.open("https://en.wikipedia.org/wiki/Design_tokens", "_blank")
        }
        style={{ cursor: "pointer" }}
      >
        <Heading>🎛 Design Tokens</Heading>
        <Text>
          Colors, spacing, radiuses, shadows — centralized and easily scalable.
        </Text>
      </Card>

    </FeaturesGrid>
  </Container>
</Section>

     <Section id="pro-features" title="Professional UI Features">

  <Container>
    <FeaturesGrid>

      <FeatureCard>
        <div className="icon">⚡</div>
        <h3>Lightning Fast</h3>
        <p className="text">Ship interfaces 3× faster with reusable UI components.</p>
      </FeatureCard>
 <FeatureCard>
        <div className="icon">🎨</div>
        <h3>Premium Design</h3>
        <p className="text">Modern colors, smooth shadows, and beautiful typography.</p>
      </FeatureCard>
      <FeatureCard>
        <div className="icon">🎨</div>
        <h3>Premium Design</h3>
        <p className="text">Modern colors, smooth shadows, and beautiful typography.</p>
      </FeatureCard>

      <FeatureCard>
        <div className="icon">🧩</div>
        <h3>Modular System</h3>
        <p className="text">Buttons, cards, layouts — everything is built to scale.</p>
      </FeatureCard>
    </FeaturesGrid>
  </Container>
</Section>

    </>
  );
}
