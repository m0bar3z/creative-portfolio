import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import TechList from "@/components/TechList";

import { type FC } from "react";

const Page: FC = () => {
  return (
    <>
      <Bounded>
        <div className="md:grid-cols-[2fr, 1fr] grid gap-x-8 gap-y-6">
          <Heading as="h1" size="xl" className="col-start-1">
            About Carl
          </Heading>
          <div className="prose prose-xl prose-slate prose-invert col-start-1">
            Hey, I’m Carl! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam natus
            impedit quis aut. Voluptates eaque quibusdam veritatis tempore sed magnam, accusamus
            harum quaerat libero deserunt,
            <br />
            <br />
            numquam odio doloribus tempora vitae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam natus impedit quis aut. Voluptates eaque quibusdam veritatis tempore sed
            magnam, accusamus harum quaerat libero deserunt, numquam odio doloribus tempora vitae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <br />
            Veniam natus impedit quis aut. Voluptates eaque quibusdam veritatis tempore sed magnam,
            accusamus harum quaerat libero deserunt, numquam odio doloribus tempora vitae.
          </div>
          <Button linkField="https://www.google.com" label="Resume" />
          <Avatar src="/avatar.webp" className="row-start-1 max-w-sm md:col-start-2 md:row-end-3" />
        </div>
      </Bounded>
      <TechList />
    </>
  );
};

export default Page;
