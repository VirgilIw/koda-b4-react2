import { useEffect, useState } from "react";

export function RickandMorty() {
  const [rickmor, setRickmor] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  async function fetchRick(query = "") {
    try {
      const res = await fetch(`${url}?name=${query}`);
      const datas = await res.json();
      setRickmor(datas.results || []);
    } catch (err) {
      console.log("Error fetch:", err);
    }
  }

  useEffect(() => {
    fetchRick();
  }, []);

  return { rickmor, fetchRick };
}
