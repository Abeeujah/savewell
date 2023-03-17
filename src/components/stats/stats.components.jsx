import { Container } from "react-bootstrap";
import "./stats.component.css";

const statsProps = [
  {
    id: 0,
    header: "5",
    text: "sites",
  },
  {
    id: 1,
    header: "100",
    text: "properties",
  },
  {
    id: 2,
    header: "12",
    text: "facilities",
  },
];

const CompanyStats = () => {
  return (
    <>
      <Container fluid={true} className="black-background py-3">
        <Container>
          <div className="stats-container">
            {statsProps.map(({ id, header, text }) => (
              <div key={id} className="text-white text-center">
                <h3>{header}+</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </>
  );
};

export default CompanyStats;
