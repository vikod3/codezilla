import company1 from "@/assets/companies/company-1.png";
import company2 from "@/assets/companies/company-2.png";
import company3 from "@/assets/companies/company-3.png";
import company4 from "@/assets/companies/company-4.png";
import company5 from "@/assets/companies/company-5.png";

const companies = [
  { src: company1, alt: "Technology partner company logo" },
  { src: company2, alt: "Enterprise client company logo" },
  { src: company3, alt: "Strategic partner company logo" },
  { src: company4, alt: "Business partner company logo" },
  { src: company5, alt: "Innovation partner company logo" },
];

const Companies = () => {
  return (
    <section className="py-12 lg:py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company, index) => (
            <img
              key={index}
              src={company.src}
              alt={company.alt}
              loading="lazy"
              className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 active:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
