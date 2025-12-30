import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import insight1 from "@/assets/insights/insight-1.png";
import insight2 from "@/assets/insights/insight-2.png";
import blog3 from "@/assets/blog/blog-3.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface BlogCard {
  image: string;
  date: string;
  title: string;
  slug: string;
}

const blogPosts: BlogCard[] = [
  {
    image: insight1,
    date: "27 Feb, 2024",
    title: "Exploring the Future of Digital Ownership",
    slug: "digital-ownership",
  },
  {
    image: insight2,
    date: "27 Feb, 2024",
    title: "Exploring the Future of Digital Ownership",
    slug: "digital-ownership-2",
  },
  {
    image: blog3,
    date: "27 Feb, 2024",
    title: "Exploring the Future of Digital Ownership",
    slug: "digital-ownership-3",
  },
];

const BlogCardItem = ({ post }: { post: BlogCard }) => (
  <div className="rounded-2xl border border-white/10 p-6 flex flex-col gap-6">
    {/* Image */}
    <div className="w-full h-48 rounded-lg overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col gap-2">
      <span className="text-muted-foreground text-sm leading-6">{post.date}</span>
      <h3 className="text-foreground text-xl md:text-2xl font-medium leading-8">
        {post.title}
      </h3>
    </div>

    {/* Read more link */}
    <Link 
      to={`/blog/${post.slug}`}
      className="flex items-center gap-2 text-foreground font-semibold text-base leading-7 hover:opacity-80 transition-opacity w-fit"
    >
      Learn more
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
);

const BlogGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="mb-12">
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
            Stay Current with the
            <br />
            Latest Insights.
          </h2>
        </TextFade>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlurFade key={index} delay={index * 0.1}>
              <BlogCardItem post={post} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
