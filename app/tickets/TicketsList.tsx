import Link from "next/link";

async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function TicketsList() {
  const tickets = await getTickets();
  return (
    <div>
      {tickets.map((el: any) => (
        <div key={el.id} className="card my-5">
          <Link href={`/tickets/${el.id}`}>
            <h3>{el.title}</h3>
            <p>{el.body.slice(0, 200)}...</p>
            <div className={`pill ${el.priority}`}>{el.priority} priority</div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && <p>Тикеты не найдены</p>}
    </div>
  );
}
