import { useState } from "react";
import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { TextFade } from "@/components/ui/text-fade";
import { BlurFade } from "@/components/ui/blur-fade";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactHero = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    try {
      const fieldSchema = contactSchema.shape[name as keyof typeof contactSchema.shape];
      fieldSchema.parse(value);
      return undefined;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.errors[0]?.message;
      }
      return "Invalid input";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  const inputBaseClasses = "w-full h-14 px-6 bg-gradient-to-b from-[#0F0F0F] to-[#1B1B1B] rounded-xl border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors";
  const inputErrorClasses = "border-destructive focus:ring-destructive/20";
  const inputNormalClasses = "border-white/10 focus:ring-white/20";

  return (
    <section className="pt-48 pb-20 px-4">
      <div className="max-w-[1224px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Content */}
          <TextFade direction="up" className="lg:w-1/2 flex flex-col items-start gap-6">
            <SectionBadge icon={Mail} label="Contact us" />
            <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[67px] font-normal leading-tight lg:leading-[72px]">
              Let's talk!
            </h1>
            <p className="max-w-[450px] text-muted-foreground text-base leading-7">
              Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
            </p>
          </TextFade>

          {/* Right Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <BlurFade delay={0.1}>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Full Name"
                    required
                    maxLength={100}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                    className={`${inputBaseClasses} ${errors.name ? inputErrorClasses : inputNormalClasses}`}
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" className="text-destructive text-sm mt-1" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
              </BlurFade>
              <BlurFade delay={0.2}>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email Address"
                    required
                    maxLength={255}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                    className={`${inputBaseClasses} ${errors.email ? inputErrorClasses : inputNormalClasses}`}
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" className="text-destructive text-sm mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </BlurFade>
              <BlurFade delay={0.3}>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Message"
                    required
                    maxLength={1000}
                    rows={6}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={!!errors.message}
                    className={`w-full px-6 py-4 bg-gradient-to-b from-[#0F0F0F] to-[#1B1B1B] rounded-xl border text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 transition-colors ${errors.message ? inputErrorClasses : inputNormalClasses}`}
                  />
                  {errors.message && touched.message && (
                    <p id="message-error" className="text-destructive text-sm mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
              </BlurFade>
              <BlurFade delay={0.4}>
                <PrimaryButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit mt-2"
                >
                  {isSubmitting ? "Sending..." : "Send a Message"}
                </PrimaryButton>
              </BlurFade>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
