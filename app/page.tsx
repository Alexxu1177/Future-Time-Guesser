"use client";

import { useState } from "react";
import { scenarios, years, type Year } from "../data/scenarios";

export default function Game() {
  const [screen, setScreen] = useState<"intro" | "play" | "results">("intro");
  const [guesses, setGuesses] = useState<Year[]>([]);
  const [selected, setSelected] = useState<Year | null>(null);
  const index = Math.min(guesses.length, scenarios.length - 1);
  const scene = scenarios[index];

  function start() {
    setGuesses([]);
    setSelected(null);
    setScreen("play");
  }

  function submit() {
    if (selected === null) return;
    setGuesses([...guesses, selected]);
    setSelected(null);
    if (index === scenarios.length - 1) setScreen("results");
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-7 sm:px-10">
      <header><span className="mark" aria-hidden="true">◷</span> Future Time Guesser</header>
      {screen === "results" ? (
        <section className="results">
          <p className="label">Session complete</p>
          <h1>Your predictions</h1>
          <p>You explored five possible futures. Here are the decades you chose.</p>
          <ol>{scenarios.map((item, i) => (
            <li key={item.title}><img src={item.image} alt="" /><span>{item.title}</span><strong>{guesses[i]}</strong></li>
          ))}</ol>
          <button className="primary" onClick={start}>Play again</button>
        </section>
      ) : (
        <section className="game">
          <div className="photo">
            <img src={screen === "intro" ? scenarios[2].image : scene.image} alt={screen === "intro" ? scenarios[2].alt : scene.alt} />
          </div>
          <div className="panel" aria-live="polite">
            {screen === "intro" ? <>
              <p className="label">2030 — 2070</p>
              <h1>Guess the<br /><em>future.</em></h1>
              <p>Explore five imagined scenarios. For each one, choose the decade you think it belongs to.</p>
              <button className="primary" onClick={start}>Start game</button>
            </> : <>
              <p className="label">Scenario {index + 1} of {scenarios.length}</p>
              <h1 className="scene-title">{scene.title}</h1>
              <p>{scene.description}</p>
              <fieldset>
                <legend>Which decade would you choose?</legend>
                <div className="choices">{years.map(year => (
                  <label key={year}><input type="radio" name="year" checked={selected === year} onChange={() => setSelected(year)} /><span>{year}</span></label>
                ))}</div>
              </fieldset>
              <button className="primary" disabled={selected === null} onClick={submit}>{index === scenarios.length - 1 ? "Finish and view results" : "Submit and continue"}</button>
            </>}
          </div>
        </section>
      )}
    </main>
  );
}
