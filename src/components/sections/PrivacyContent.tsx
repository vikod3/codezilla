import { BlurFade } from "@/components/ui/blur-fade";

const privacyData = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.

This may include:
• Name and contact information
• Account credentials
• Payment information
• Communication preferences
• Any other information you choose to provide`
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:
• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices, updates, and support messages
• Respond to your comments, questions, and requests
• Communicate with you about products, services, and events
• Monitor and analyze trends, usage, and activities`
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share your information with:
• Service providers who assist in our operations
• Professional advisors such as lawyers and accountants
• Authorities when required by law
• Business partners with your consent`
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`
  },
  {
    title: "5. Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information, including:
• Access to your personal data
• Correction of inaccurate data
• Deletion of your data
• Data portability
• Objection to processing
• Withdrawal of consent

To exercise these rights, please contact us using the information provided below.`
  },
  {
    title: "6. Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to collect and track information about your browsing activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our service may not function properly without cookies.`
  },
  {
    title: "7. Third-Party Links",
    content: `Our service may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.`
  },
  {
    title: "8. Children's Privacy",
    content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.`
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.`
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:

Email: privacy@logoipsum.com
Address: 123 Business Street, Suite 100, City, State 12345`
  }
];

const PrivacyContent = () => {
  return (
    <section className="pb-20 px-4">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-14">
        {privacyData.map((section, index) => (
          <BlurFade key={index} delay={index * 0.1}>
            <div className="flex flex-col gap-6">
              <h2 className="text-foreground text-2xl font-medium leading-8">
                {section.title}
              </h2>
              <p className="text-muted-foreground text-base font-normal leading-7 whitespace-pre-line">
                {section.content}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default PrivacyContent;
