import Container from "../../components/layout/Container";
import Section from "../../components/ui/Section/Section";
import Button from "../../components/ui/Button/Button";
import Card from "../../components/ui/Card/Card";
import { Heading} from "../../components/ui/Typography/Heading";
import  { Text } from "../../components/ui/Typography/Text"
export default function Showcase() {
  return (
    <Container>
      <Section title="Components Showcase" center>
        <Card>
          <Heading>Button Variants</Heading>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </Card>

        <Card>
          <Heading>Typography System</Heading>
          <Text>This is body text.</Text>
        </Card>
      </Section>
    </Container>
  );
}
