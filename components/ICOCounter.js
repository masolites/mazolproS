import { useEffect, useState } from "react";
export default function ICOCounter() {
  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    fetch("/api/main", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "ico" }),
    })
      .then((r) => r.json())
      .then((d) => setRemaining(d.remaining));
  }, []);
  return (
    <div className="card">
      <div>ICO Counter</div>
      <div style={{ fontSize: 28 }}>{remaining} MZLx</div>
    </div>
  );
}
