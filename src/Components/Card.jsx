import CardQr from "./CardQr";
import CardText from "./CardText";
import CardTitle from "./CardTitle";

function Card() {
  return (
    <section className="p-4 w-[300px] bg-white h-[480px] rounded-2xl flex flex-col gap-4 items-center">
      <CardQr />
      <CardTitle> Improve your front-end skills by building projects</CardTitle>
      <CardText>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </CardText>
    </section>
  );
}

export default Card;
