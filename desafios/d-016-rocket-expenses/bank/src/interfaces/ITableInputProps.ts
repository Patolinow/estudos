export default interface ITableInputProps {
  id: number;
  type: "income" | "outcome";
  title: string;
  subject: string;
  date: string;
  value: number;
}
