import { useEffect, useRef, useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

function Utilitity() {
  const [input, setInput] = useState("");
  const output = useRef("");
  const [list, setList] = useLocalStorageState([]);
  const [error, setError] = useState(true);

  async function query(input) {
    if (!input) {
      setError(true);
      return;
    }

    let data;
    const api = new XMLHttpRequest();
    const finalUrl =
      "https://corsproxy.io/?" + "https://cleanuri.com/api/v1/shorten";
    api.open("POST", finalUrl, true);
    api.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    api.send(`url=${input}`);
    try {
      api.onload = (e) => {
        data = JSON.parse(api.responseText);
        output.current = data["result_url"];
        console.log(data);
        const newList = [...list, { input, output: output.current }];
        setList(newList);
        setError(false);
      };
    } catch {
      (error) => console.log(error);
    }
  }

  useEffect(() => {
    query(input);
    setError(false);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    query(input);
    input.length === 0 ? setError(true) : setError(false);
  }

  function handleClick(e, id) {
    e.target.textContent =
      e.target.textContent === "Copied!" ? "Copy" : "Copied!";

    navigator.clipboard.writeText(list[id].output);
  }

  return (
    <section className="before:z-1 bg-lightgray relative py-8 before:absolute before:left-0 before:top-[-1rem] before:h-[8rem] before:w-[100%] before:bg-white">
      <div className="md:mx-auto md:w-11/12 md:max-w-[1110px]">
        <form
          onSubmit={handleSubmit}
          className={`relative z-[20] mx-auto grid w-[90%] grid-rows-2 rounded-md bg-Dark-Violet bg-bg-shorten-mobile bg-right-top bg-no-repeat px-4 py-8 md:flex md:w-full md:items-center md:justify-between md:bg-bg-shorten-desktop md:bg-[length:100%_100%] md:px-[65px] md:py-[50px]`}
        >
          <input
            type="text"
            value={input}
            placeholder="Shorten a link here..."
            onChange={(e) => setInput(e.target.value)}
            className={`h-10 rounded-md pl-4 md:flex-1 ${error && "border-2 border-Red outline-2 outline-Red"}`}
          />
          <button
            type="submit"
            className="mt-2 rounded-md bg-Cyan py-2 font-bold text-white hover:opacity-50 md:ml-8 md:mt-0 md:px-4"
          >
            Shorten It!
          </button>
          {error && (
            <p className="absolute bottom-0 left-4 text-Red md:bottom-4 md:left-16">
              Please add a link
            </p>
          )}
        </form>

        {list
          .filter((l) => l.output)
          .map((l, id) => (
            <div
              key={id}
              className="mx-auto my-4 grid w-[90%] grid-rows-3 rounded-md bg-white p-4 text-start md:flex md:w-full md:justify-between md:gap-6"
            >
              <p className="border-b border-Gray py-2 md:border-0">{l.input}</p>

              <p className="mt-2 text-Cyan md:mx-auto">{l.output}</p>
              <button
                onClick={(e) => handleClick(e, id)}
                className="rounded-md bg-Cyan text-white hover:opacity-50 focus:bg-Very-Dark-Blue md:px-4"
              >
                Copy
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Utilitity;
