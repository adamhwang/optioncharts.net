import Link from "next/link";

import options from "../options.json";
import { toSlug } from "../utils";

const Nav = () => (
  <ul className="nav nav-pills flex-column flex-nowrap mb-sm-auto mb-0 align-items-start small text-nowrap h-100">
    {options
      .sort((a, b) => clean(a.title).localeCompare(clean(b.title)))
      .map((o) => {
        const slug = toSlug(o.title);
        return (
          <li key={`nav-item-${slug}`} className="nav-item">
            <Link href="/[strat]" as={`/${slug}`}>
              <a className="nav-link link-dark ps-0 py-1">{o.title}</a>
            </Link>
          </li>
        );
      })}
  </ul>
);

const clean = (s: string) => s.replace(/^Long /i, "").replace(/^Short /i, "");

export default Nav;
