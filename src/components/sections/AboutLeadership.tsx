import leaderImg from "@/assets/team/leader.png";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Galvin Widjaja",
    role: "CEO",
    image: leaderImg,
  },
  {
    name: "Jason Widjaja",
    role: "CTO",
    image: leaderImg,
  },
  {
    name: "Yuvanesh TS",
    role: "General Manager (SG)",
    image: leaderImg,
  },
  {
    name: "Petros Kotidis",
    role: "General Manager (US)",
    image: leaderImg,
  },
];

const AboutLeadership = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <TextFade direction="up" className="flex flex-col items-center gap-6 mb-12 lg:mb-16">
          <h2 className="text-center text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[56px]">
            Leadership
          </h2>
          <p className="max-w-[604px] text-center text-muted-foreground text-base leading-7">
            Lorem ipsum dolor sit amet consectetur lobortis sed ut urna orci
            libero eu laoreet sed augue leo placerat posuere scelerisque feugiat
            et eget ac morbi sit faucibus.
          </p>
        </TextFade>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <BlurFade key={index} delay={index * 0.1}>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover grayscale"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-foreground text-xl font-medium">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
