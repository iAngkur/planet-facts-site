import Link from "next/link";
import React from "react";

interface NavLinkProps {
  planetName: string;
  planetId: string;
}

function NavLink({ planetName, planetId }: NavLinkProps) {
  return (
    <Link href={planetId} style={{ marginRight: "1rem" }}>
      {planetName.toUpperCase()}
    </Link>
  );
}

export default NavLink;
