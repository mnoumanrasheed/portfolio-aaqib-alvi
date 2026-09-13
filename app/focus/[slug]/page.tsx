import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { focusAreas } from "@/data/focusAreas";
import FocusClientView from "./FocusClientView";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return focusAreas.map((area) => ({
    slug: area.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const area = focusAreas.find((item) => item.slug === params.slug);
  if (!area) return { title: "Focus Area | Aaqib Alvi" };

  return {
    title: `${area.title} | Aaqib Alvi Executive Portfolio`,
    description: area.description,
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

export default function FocusPage({ params }: PageProps) {
  const area = focusAreas.find((item) => item.slug === params.slug);
  if (!area) {
    notFound();
    // notFound() throws, this line is never reached, but needed for TS narrowing
    return null;
  }

  return (
    <div className="relative -mt-20 font-sans tracking-normal bg-warmWhite dark:bg-charcoal text-charcoal dark:text-warmWhite">
      <FocusClientView item={area} />
    </div>
  );
}
