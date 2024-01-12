import { Card } from "@/components/ui/";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  href: string;
}

export default function IntentionalCard(props: Props) {
  const { title, href } = props;
  return (
    <Link to={href}>
      <Card.Card>
        <Card.CardHeader>
          <Card.CardTitle>{title}</Card.CardTitle>
          <Card.CardDescription> Description</Card.CardDescription>
        </Card.CardHeader>
      </Card.Card>
    </Link>
  );
}
