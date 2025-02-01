import React, { useEffect, useState } from "react";
import { fetchSuperheroes, addSuperhero } from "../api";
import styles from "./SuperHeroes.module.css";

interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

const SuperHeroes: React.FC = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState<number>(1);

  useEffect(() => {
    loadSuperheroes();
  }, []);

  const loadSuperheroes = async () => {
    const data = await fetchSuperheroes();
    setSuperheroes(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !superpower || humilityScore < 1 || humilityScore > 10) return;

    await addSuperhero(name, superpower, humilityScore);
    setName("");
    setSuperpower("");
    setHumilityScore(1);
    loadSuperheroes();
  };

  return (
    <div className={styles.container}>
      <h1>Humble Superhero Registry</h1>
      <form className={styles.superHeroForm} onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          required
        />
        <input
          type="number"
          min="1"
          max="10"
          value={humilityScore}
          onChange={(e) => setHumilityScore(Number(e.target.value))}
          required
        />
        <button type="submit">Add Superhero</button>
      </form>

      <h2>Superheroes (Sorted by Humility)</h2>
      <ul>
        {superheroes.map((hero, index) => (
          <li key={index}>
            <strong>{hero.name}</strong> - {hero.superpower} (Humility:{" "}
            {hero.humilityScore})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperHeroes;
