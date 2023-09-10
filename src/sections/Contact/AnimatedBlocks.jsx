import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

export default function AnimatedBlocks({ amount }) {
  const number = Math.floor(Math.sqrt(amount));

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function getPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=160"
        );
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * 160);
        const randomPokemonUrl = data.results[randomIndex].url;

        const detailsResponse = await fetch(randomPokemonUrl);
        const detailsData = await detailsResponse.json();

        setPokemon(detailsData.sprites.front_default);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    getPokemon();
  }, []);

  const blockArr = Array.from({ length: number * number }, (_, index) => (
    <motion.div
      className={styles.block}
      key={index}
      drag
      onDragEnd={(event, info) => event.target.classList.add(styles.dragged)}
    ></motion.div>
  ));

  console.log(blockArr[0]);

  return (
    <div
      className={`card ${styles.animatedCardContainer}`}
      style={{
        backgroundImage: `url(${pokemon})`,
        display: "grid",
        gridTemplateRows: `repeat(${Math.floor(Math.sqrt(amount))}, 1fr)`,
        gridTemplateColumns: `repeat(${Math.floor(Math.sqrt(amount))}, 1fr)`,
      }}
    >
      {blockArr}
    </div>
  );
}
