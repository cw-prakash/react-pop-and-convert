import Introduction from "./Introduction";
import InfoCard from "./InfoCard";

import { Link, Icon } from "../../components";

const informations = [
  {
    title: "Documentation",
    content:
      "Comprehensive and well-organized documentation that provides users with clear instructions and valuable information.",
    link: (
      <Link href="#">
        Explore Documentation <Icon icon="arrow" />
      </Link>
    ),
  },
  {
    title: "Support",
    content:
      "Empower your customer support team with this practical video tutorial, designed to enhance their skills and knowledge.",
    link: (
      <Link href="#">
        Contact Support Team <Icon icon="arrow" />
      </Link>
    ),
  },
  {
    title: "Video Tutorials",
    content:
      "Empower your customer support team with this practical video tutorial, designed to enhance their skills and knowledge.",
    link: (
      <Link href="#">
        Check Out Now <Icon icon="arrow" />
      </Link>
    ),
  },
];

export default function Welcome() {
  return (
    <div className="p-6 gap-8 flex flex-col max-w-7xl mx-auto">
      <Introduction />
      <div className="flex gap-4">
        {informations.map(({ title, content, link }, index) => {
          return (
            <InfoCard key={index} title={title}>
              <p>{content}</p>
              {link || null}
            </InfoCard>
          );
        })}
      </div>
    </div>
  );
}
