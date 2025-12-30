import { TextFade } from "@/components/ui/text-fade";

const BlogHero = () => {
  return (
    <section className="pt-56 pb-32 px-4">
      <TextFade direction="up" className="max-w-[1224px] mx-auto text-center">
        <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[67px] font-normal leading-tight lg:leading-[72px]">
          News & Blog
        </h1>
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-7">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </TextFade>
    </section>
  );
};

export default BlogHero;
