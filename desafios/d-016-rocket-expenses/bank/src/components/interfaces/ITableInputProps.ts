export default interface ITableInputProps {
  type: "income" | "outcome";
  title: string;
  subject: string;
  date: string;
  value: number;
}