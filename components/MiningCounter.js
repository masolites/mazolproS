import { useEffect, useState } from "react";
export default function MiningCounter() {
  const [mined, setMined] = useState(0);
  useEffect(() => {
    fetch("/api/main", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "mining" }),
    })
      .then((r) => r.json())
      .then((d) => setMined(d.mined));
  }, []);
  return (
    <div className="card">
      <div>Mining Totalizer</div>
      <div style={{ fontSize: 28 }}>{mined} MZLx</div>
    </div>
  );
}
