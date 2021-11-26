import Date from "./date";

export default function Metadata({ id, title, date }) {
  return (
    <div class="flex justify-center my-8">
      {id} | {title} | <Date dateString={date}></Date>
    </div>
  );
}
