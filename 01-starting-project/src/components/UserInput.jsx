export default function UserInputBlock({label}) {
  return (
    <>
      <div>
        <label >{label}</label>
        <input type="number" />
      </div>
    </>
  );
}
