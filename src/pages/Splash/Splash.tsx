import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Splash.css";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <body className="splash-body overflow-hidden">
      <section className="d-flex justify-content-center align-items-center flex-column vh-100 hero-section text-center px-3">
        <h6 className="tiny-heading uppercase text-sm">Happy Birthday</h6>
        <h1 className="big-name">otitodilichukwu nzekwesi</h1>
        <p className="sub-text-lovely">
          An exceptional and inspiring woman, hardworking, determined, and
          admired for her strength, grace, and unwavering commitment.
        </p>
        <button
          className="btn btn-celebrate mt-4"
          onClick={() => navigate("/greeting")}
        >
          click to celebrate
        </button>
      </section>
    </body>
  );
};

export default Splash;
