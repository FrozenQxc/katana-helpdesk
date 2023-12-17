import TicketsList from "./TicketsList";

export default function Tickets() {
  return (
    <main className="">
      <nav>
        <div>
          <h2>Тикеты</h2>
          <p>
            <small>Открытые тикеты </small>
          </p>
        </div>
      </nav>
      <TicketsList />
    </main>
  );
}
