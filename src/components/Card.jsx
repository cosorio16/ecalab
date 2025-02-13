import services from "../lib/def";

function Card({
  title,
  description,
  recommendations,
  ventajas,
  metodos,
  image,
}) {
  console.log(services[0]);

  return (
    <div className="w-full max-w-150 shadow rounded-lg border border-slate-300">
      <img
        src={image}
        alt=""
        className="rounded-t-lg h-56 w-full object-cover"
      />
      <div className="flex flex-col gap-2 py-8 px-5">
        <h1 className="text-2xl font-medium uppercase">{title}</h1>
        <p className="text-lg font-medium">{description}</p>
        {recommendations && (
          <ul className="flex items-start flex-col gap-2">
            {recommendations.map((r, i) => (
              <li key={i} className="flex items-center gap-3">
                <span>
                  <svg width="25" height="25" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
                    />
                  </svg>
                </span>
                {r}
              </li>
            ))}
          </ul>
        )}

        {ventajas && (
          <ul className="flex items-start flex-col gap-2">
            {ventajas.map((r, i) => (
              <li key={i} className="flex items-center gap-3">
                <span>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
                    />
                  </svg>
                </span>
                {r}
              </li>
            ))}
          </ul>
        )}
        {metodos && (
          <ul className="flex items-start flex-col gap-2">
            {metodos.map((r, i) => (
              <li key={i} className="flex items-center gap-3">
                <span>
                  <svg width="25" height="25" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M3.9 11.175q-.275-.3-.275-.712T3.9 9.75l2.8-2.8l-1.075-1.075l-.3.3q-.3.3-.712.3t-.713-.3q-.275-.3-.275-.712t.275-.688l2-2q.3-.3.713-.3t.712.3q.3.275.3.7t-.3.7l-.3.3L8.1 5.55l2.8-2.8q.3-.3.713-.3t.712.3t.3.713t-.3.712l-.675.65l1.55 1.55l-2.825 2.8q-.275.3-.275.713t.275.712q.3.3.713.3t.712-.3l2.8-2.825l1.525 1.5L13.3 12.1q-.3.3-.3.713t.3.712q.275.275.688.263t.712-.288l2.8-2.825l1.525 1.525q.575.575.575 1.413t-.575 1.412l-.7.725l4.725 4.7H20.2l-3.3-3.3l-.7.725q-.575.575-1.412.575t-1.413-.575L6 10.5l-.675.675q-.3.275-.712.275t-.713-.275"
                    />
                  </svg>
                </span>
                {r}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Card;
