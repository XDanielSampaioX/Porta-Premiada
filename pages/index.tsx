import Porta from "@/components/Porta";
import PortaModel from "@/model/porta";
import { useState } from "react";

export default function Home() {

  const [p1, setP1] = useState(new PortaModel(1))
  return (
    <>
      <div style={{ display: "flex" }}>
        <Porta value={p1} onchange={novaPorta => setP1(novaPorta)}/>
      </div>
    </>
  );
}
