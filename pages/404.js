import Header from "../components/header";
import Footer from "../components/footer";

export default function PageNotFound() {
  return (
    <>
      <Header />
      <div className="error-container">
        <h1 className="error-title">Error 404</h1>
        <p className="error-message">Oops! This page was not found</p>
        <button onClick={() => window.location.href = "/"} className="error-link">
          Return Home
        </button>
      </div>
      <Footer />
    </>
  );
}