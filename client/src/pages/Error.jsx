import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="grid w-screen h-screen place-items-center" id="error-page">
      <div>
        <img loading="lazy" src="./error.svg" alt="error" />
        <p className="my-3 text-xl font-bold text-center text-vivid-purple font-manerope">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="mt-4 text-2xl font-bold text-center font-comfortaa text-vivid-red">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
}
