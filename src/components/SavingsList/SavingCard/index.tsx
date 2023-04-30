import { useTravelContext } from "../../../providers/TravelContext";

export const SavingsCard = () => {
  const { savings } = useTravelContext();

  return (
    <>
      {savings.map((saving) => (
        <li key={saving.id}>
          <h3>
            Em {saving.month} economizei: <span  style={saving.value > 100 ?  { color: "#FF0000" } : { color: "#0B8800" }}>{saving.value}</span>
          </h3>
        </li>
      ))}
    </>
  );
};
