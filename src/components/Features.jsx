function Features() {
  const contents = [
    {
      image: "/images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      margin: "md:top-4",
      text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },

    {
      image: "/images/icon-detailed-records.svg",
      title: "Detailed Records",
      margin: "md:top-14",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },

    {
      image: "/images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      margin: "md:top-24",
      text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <section className="bg-lightgray py-8 md:py-24">
      <div className="md:mx-auto md:w-11/12 md:max-w-[1110px]">
        <div className="md:mt-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Advanced Statistics
          </h2>
          <p className="text-Grayish-Violet md:mx-auto md:max-w-[32rem]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="mx-auto my-8 w-[90%] md:grid md:w-full md:grid-cols-3 md:gap-[25px] md:overflow-hidden">
          {contents.map((c) => (
            <div
              className={`relative mx-auto my-16 max-w-[350px] rounded-md bg-white px-5 py-12 md:px-[30px] md:text-start md:after:absolute md:after:right-[-25px] md:after:top-1/2 md:after:h-[4px] md:after:w-[25px] md:after:bg-Cyan ${c.margin}`}
              key={c.title}
            >
              <span className="absolute left-1/2 top-0 mx-auto translate-x-[-50%] translate-y-[-50%] rounded-full bg-Dark-Violet p-4 md:left-[4rem]">
                <img src={c.image} alt="" className="" />
              </span>
              <h3 className="text-xl font-bold">{c.title}</h3>

              <p className="my-4 text-base text-Gray">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
