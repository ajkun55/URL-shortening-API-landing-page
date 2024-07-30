import Button from "./Button";

function CTA() {
  return (
    <section className="bg-Dark-Violet bg-bg-boost-mobile bg-cover bg-center py-16 md:bg-bg-boost-desktop">
      <h2 className="text-2xl font-bold text-white md:text-4xl">
        Boost your links today
      </h2>
      <Button text={`Get Started`} />
    </section>
  );
}

export default CTA;
