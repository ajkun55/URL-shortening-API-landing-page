function Button({ text, margin = true }) {
  return (
    <button
      className={
        `rounded-3xl bg-Cyan px-6 py-2 font-bold text-white hover:opacity-50 ` +
        `${margin && " mt-8"}`
      }
    >
      {text}
    </button>
  );
}

export default Button;
