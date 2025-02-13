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
    <div className="w-120 shadow rounded-lg">
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
        {metodos && (
          <ul className="flex items-start flex-col gap-2">
            {metodos.map((r, i) => (
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
      </div>
    </div>
  );
}

export default Card;
