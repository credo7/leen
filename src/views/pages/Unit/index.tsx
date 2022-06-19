import { useParams } from "react-router-dom";

export default function Unit() {
  const params = useParams();
  return <div>Some info{params?.unitId}</div>;
}
