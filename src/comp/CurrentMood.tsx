import React from "react";

type Mood = {
  emoji: string;
  label: string;
};

export default function CurrentMood({ mood }: { mood: Mood }) {
  return (
    <div className="CurrentMood">
      <span style={{ fontSize: "2rem" }}>{mood.emoji}</span>
      <p>{mood.label}</p>
    </div>
  );
}
