import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  actionType: string;
  href: string;
}

export default function Register(props: Props) {
  const { title, href, actionType } = props;
  const navigate = useNavigate();

  console.log(location);
  const handleRedirect = () => {
    navigate(href, { state: { type: actionType } });
  };

  return (
    <div className="flex flex-col justify-center items-center w-96 h-[630px]">
      <h4 className="text-4xl text-center">Nenhum {title} cadastrado</h4>
      <Button
        type="button"
        variant="link"
        className="rounded-[5px] font-light text-gray-700 my-12"
        onClick={handleRedirect}
      >
        Cadastrar {title}
      </Button>
    </div>
  );
}
