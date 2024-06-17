import Button from "../Components/Button";
import IkkeFerdig from "../Components/IkkeFerdig";
import { Title } from "../Components/Title";

export default function Arrangementer() {
  return (
    <main className="flex flex-col items-center justify-center pt-24 gap-2 w-full">
      <span className="w-full">
        <Title text="Arrangementer" shortText="hva skjer?"/>
      </span>
      <IkkeFerdig />
    </main>
  );
}
