import { Card } from "@/components/ui/";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  href: string;
  image?: string;
  description?: string;
}

export default function IntentionalCard(props: Props) {
  const { title, href, description, image } = props;
  return (
    <Link to={href}>
      <Card.Card className=" hover:-translate-y-1 ease-in-out transition-all delay-100">
        {image && (
          <Card.CardContent className="p-0 rounded-t-md ">
            <img className="rounded-t-xl" alt="Imagem do card" src={image} />
          </Card.CardContent>
        )}
        <Card.CardHeader>
          <Card.CardTitle className="text-xl">{title}</Card.CardTitle>
          <Card.CardDescription className="text-gray-500">
            {description}
          </Card.CardDescription>
        </Card.CardHeader>
      </Card.Card>
    </Link>
  );
}
