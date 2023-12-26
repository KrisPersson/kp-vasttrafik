import "./SubHeader.scss";
import endpoints from "../../endpoints.json";

console.log(endpoints);

export default function SubHeader({ selectedOrigin, setSelectedOrigin }) {
  const liItems = endpoints.map((endpoint, i) => {
    const isSelected = selectedOrigin === endpoint.name;
    return (
      <li
        onClick={() => setSelectedOrigin(endpoint.name)}
        key={i}
        className={`endpoint-li${isSelected ? " endpoint-li--selected" : ""}`}
      >
        {endpoint.name}
      </li>
    );
  });

  return (
    <section className="sub-header">
      <h2>Var vill du resa ifrån?</h2>
      <article className="origin-alternatives-container">
        <ul>{liItems.length > 0 && liItems}</ul>
      </article>
    </section>
  );
}
