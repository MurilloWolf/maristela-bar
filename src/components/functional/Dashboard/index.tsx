import { Card } from "@/components/ui";

interface Props {
  className?: string;
}

export default function Dashboard(props: Props) {
  return (
    <section
      className={"flex flex-row flex-wrap gap-4 w-full " + props.className}
    >
      <Card.Card className="">
        <Card.CardHeader>
          <Card.CardTitle className="text-md font-normal">
            Vendas do dia
          </Card.CardTitle>
        </Card.CardHeader>
        <Card.CardContent className="flex flex-col w-38 h-38 justify-between items-center">
          <p className="text-2xl font-bold">{1000.0}</p>
          <p className="text-sm font-extralight">Total: ${1000.0}</p>
        </Card.CardContent>
      </Card.Card>
      <Card.Card className="">
        <Card.CardHeader>
          <Card.CardTitle className="text-md font-normal">
            Produto mais vendido
          </Card.CardTitle>
        </Card.CardHeader>
        <Card.CardContent className="flex flex-col w-38 h-38 justify-between items-center">
          <p className="text-2xl font-bold">{1000.0} unidades</p>
          <p className="text-sm font-extralight">coca cola lata 350ml</p>
        </Card.CardContent>
      </Card.Card>
    </section>
  );
}
