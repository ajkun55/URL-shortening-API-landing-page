import Button from "./Button";

function Hero() {
  return (
    <section className="relative my-8 md:overflow-hidden">
      <div className="flex flex-col-reverse md:mx-auto md:w-11/12 md:max-w-[1110px] md:py-24 lg:flex-row">
        <div className="mt-8 px-[5%] md:px-0 lg:text-start">
          <h1 className="mx-auto text-[2.5rem] font-bold md:max-w-[30rem] md:text-[3.5rem]">
            More than just shorter links
          </h1>
          <p className="mx-auto px-8 text-Grayish-Violet md:max-w-[30rem] md:px-0">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button text={`Get Started`} margin={true} />
        </div>

        <div className="pl-[5%]">
          <img
            src="/images/illustration-working.svg"
            alt=""
            className="mx-auto lg:absolute lg:right-[-5vw] lg:top-[0] lg:h-[482px] lg:w-[733px] lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
