import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function BetweenBox({text}){
  const {t} = useTranslation();
  
  return (
    <Container className="text-center p-5">
      <p className="fsBig borel-regular m-0">{text}</p>
    </Container>
  )

}

export default BetweenBox; 