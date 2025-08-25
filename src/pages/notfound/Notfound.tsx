import { JSX } from "react";
import "./NotFound.css";

function NotFound(): JSX.Element {
  return (
    <div className="notFound">
      <NotFound />
      <h1>
        PAGE NOT FOUND <br />
        404
      </h1>
    </div>
  );
}

export default NotFound;
