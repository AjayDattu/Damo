import { Link } from "react-router-dom";
import { Arrow } from "./ui";

export const fmtDate = (d) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

function ArticleCard({ a }) {
  return (
    <Link to={`/learn/${a.slug}`} className="group flex min-h-[260px] flex-col justify-between rounded-2xl bg-soft p-7 transition-colors duration-300 hover:bg-peach">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wide text-orange">{a.category}</span>
        <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink">{a.title}</h3>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-mute">{a.description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-mute">
        <span>{fmtDate(a.date)} · {a.read} min read</span>
        <Arrow className="h-5 w-5 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

export default ArticleCard;
