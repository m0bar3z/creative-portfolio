import { type FC } from "react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import ContentList from "@/components/ContentList";
import { type ContentType } from "@/types/cutsomTypes";

const contents: ContentType[] = [
  {
    title: "My SAAS Project",
    tags: ["React", "Next"],
    imageUrl: "/tech.jpg",
    id: 1,
  },
];

const Page: FC = () => {
  return (
    <Bounded>
      <Heading size="xl" className="mb-8">
        Projects
      </Heading>
      <div className="prose prose-xl prose-invert mb-10">My Projects are the best</div>

      <ContentList contents={contents} />
    </Bounded>
  );
};

export default Page;
