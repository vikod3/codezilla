import { BlurFade } from "@/components/ui/blur-fade";

const termsData = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using Logoipsum, you agree to comply with and be bound by these Terms of Use. If you do not agree, please do not use our services. Logoipsum offers software as a service (SaaS). We reserve the right to modify or discontinue services at any time.

One of the most significant advantages of SaaS solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the need for large capital expenditures and reduces ongoing IT costs, making it an affordable option for businesses with limited budgets.`,
  },
  {
    title: "2. Services Provided",
    content:
      "One of the most significant advantages of SaaS solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the need for large capital expenditures and reduces ongoing IT costs, making it an affordable option for businesses with limited budgets.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "One of the most significant advantages of SaaS solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the need for large capital expenditures and reduces ongoing IT costs.",
  },
  {
    title: "4. Privacy",
    content:
      "One of the most significant advantages of SaaS solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the, making it an affordable option for businesses with limited budgets.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "One of the most significant advantages of SaaS solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the need for large capital expenditures and reduces ongoing IT costs, making it an affordable option for businesses with limited budgets predictable monthly or annual fee.",
  },
  {
    title: "6. Changes to Terms",
    content:
      "One of the most significant advantages of SaaS solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the need for large capital expenditures and reduces ongoing IT costs, making it an affordable option for businesses with limited budgets.",
  },
];

const TermsContent = () => {
  return (
    <section className="pb-20 px-4">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-14">
        {termsData.map((term, index) => (
          <BlurFade key={index} delay={index * 0.1}>
            <div className="flex flex-col gap-6">
              <h2 className="text-foreground text-2xl font-medium leading-8">
                {term.title}
              </h2>
              <p className="text-muted-foreground text-base font-normal leading-7 whitespace-pre-line">
                {term.content}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default TermsContent;
