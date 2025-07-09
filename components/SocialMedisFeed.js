import { useEffect, useState } from "react";
export default function SocialMediaFeed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/api/main", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "socialfeed" }),
    })
      .then((r) => r.json())
      .then((d) => setPosts(d.posts));
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#900000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {posts.length ? (
        <video
          src={posts[0].video}
          controls
          style={{ maxHeight: "80vh" }}
        />
      ) : (
        <div style={{ color: "#fff", fontSize: 32 }}>
          WeeYan Socials Video Feed
        </div>
      )}
    </div>
  );
}
