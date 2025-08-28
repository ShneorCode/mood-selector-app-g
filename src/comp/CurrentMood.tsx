type Mood = {
  emoji: string;
  label: string;
};

export default function CurrentMood({ mood }: { mood: Mood }) {
  return (
    <div className="CurrentMood">
      <span>{mood.emoji}</span>
      <p>{mood.label}</p>
    </div>
  );
}
