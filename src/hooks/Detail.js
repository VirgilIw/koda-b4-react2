import { useEffect, useState } from "react";

export function Detail(id) {
  const [character, setCharacter] = useState("");

  async function fetchDetail() {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharacter(data);
    } catch (err) {
      console.log("Error fetch detail:", err);
    }
  }

  useEffect(() => {
    fetchDetail();
  }, []);

  return { character };
}
