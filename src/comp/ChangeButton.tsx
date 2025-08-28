export default function ChangeButton({
  textButton,
  setButtonText,
}: {
  textButton: string;
  setButtonText: () => void;
}) {
  return (
    <button className="change-button" onClick={setButtonText}>
      {textButton}
    </button>
  );
}
