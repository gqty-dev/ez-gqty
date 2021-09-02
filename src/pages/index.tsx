import { useQuery } from "../gqty";

export default function Hello() {
  const { hello } = useQuery();

  return <p>{hello || "Loading..."}</p>;
}
