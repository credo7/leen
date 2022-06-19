import "./style.styl";
import { Link } from "react-router-dom";

const courses: String[] = ["Active Voice", "Passive Voice", "Predictions"];

function App() {
  return (
    <div className="container">
      <div className="course_list">
        {courses.map((course, index) => (
          <Link
            className="course_list_element"
            key={index}
            to={`/unit/${index}`}
          >
            {course}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
