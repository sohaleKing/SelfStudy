const products = [
  {
    key: "OLV1231",
    name: "Olive Oil",
    imgUrl:
      "https://goldencropsenterprises.ca/assets/img/products/Olive-600x800.jpg",
    description:
      "Olive oil is rich in vitamin E, a fat soluble vitamin that supports normal nerve conduction and plays a role in immunity.",
  },
  {
    key: "PMK1232",
    name: "Pumpkin Seed Oil",
    imgUrl:
      "https://goldencropsenterprises.ca/assets/img/products/Pumpkin-600x800.jpg",
    description:
      "Pumpkin Seed Oil for Hair Loss, A study found that when men took 400 milligrams of pumpkin seed oil per day (in capsule form) for 24 weeks, they saw an increase in hair growth.",
  },
  {
    key: "AVC1233",
    name: "Avocado Oil",
    imgUrl:
      "https://goldencropsenterprises.ca/assets/img/products/Avocado-600x800.jpg",
    description:
      "Rich in Oleic Acid, a Very Healthy Fat Almost 70% of avocado oil consists of heart-healthy oleic acid, a monounsaturated omega-9 fatty acid.",
  },
  {
    key: "BCS1234",
    name: "Black Caraway Seed Oil",
    imgUrl:
      "https://goldencropsenterprises.ca/assets/img/products/Black-600x800.jpg",
    description:
      "A look at the hundreds of peer-reviewed articles that have been published about black seed oil benefits one fact becomes clear: there are few issues that it cannot help the body overcome.",
  },
  {
    key: "SSM1235",
    name: "Sesame Oil",
    imgUrl:
      "https://goldencropsenterprises.ca/assets/img/products/Sesame-600x800.jpg",
    description:
      "Sesame oil has natural antibacterial, antiviral and antioxidant properties, and many studies prove its therapeutic and health-promoting benefits",
  },
  {
    key: "HMS1236",
    name: "Hemp Seed Oil",
    imgUrl:
      "https://goldencropsenterprises.ca/assets/img/products/Hemp-Seed-600x800.jpg",
    description:
      "Hemp Seed Oil Fights Inflammation, Hemp seed oil is rich in GLA (gamma linoleic acid), which is an omega-6 fat that boosts immunity and fights inflammation.",
  },
];

const container = document.getElementById("root");

const App = () => {
  return (
    <React.Fragment>
      <Header
        university="McGill University - Bobby"
        author="Soheyl Rahgozar"
        subject="React Introduction - Assignment #1"
      />
      <div className="container">
        {products.map((dataElem) => {
          return <Card {...dataElem} />;
        })}
      </div>
    </React.Fragment>
  );
};
const Header = (props) => {
  return (
    <div className="header">
      <h4>{props.university}</h4>
      <h1>{props.author}</h1>
      <h3>{props.subject}</h3>
    </div>
  );
};
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgUrl} />
      <h3>{`Product: ${props.name}`}</h3>
      <p>{`Description: ${props.description}`}</p>
    </div>
  );
};

ReactDOM.render(<App />, container);
