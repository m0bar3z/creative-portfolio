import { type FC } from "react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import ContentList from "@/components/Blog/ContentList";
import { type ContentType } from "@/types/cutsomTypes";

const contents: ContentType[] = [
  {
    title: "Mastering JavaScript Animations",
    tags: ["JS", "Animation"],
    imageUrl: "/tech.jpg",
    id: 1,
  },
  {
    title: "Making Cool CSS Art",
    tags: ["CSS"],
    imageUrl: "/art.webp",
    id: 2,
  },
];

const Page: FC = () => {
  return (
    <Bounded>
      <Heading size="xl" className="mb-8">
        Blog
      </Heading>
      <div className="prose prose-xl prose-invert mb-10">
        I write about wha I have learned so others can benefit.
      </div>

      <ContentList isBlog contents={contents} />
    </Bounded>
  );
};

export default Page;
