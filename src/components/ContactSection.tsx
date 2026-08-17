import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, MapPin, Phone } from "lucide-react";

const CONTACT_EMAIL = "info@dosita.com.tr";

const contactFormSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || "Not provided",
          message: data.message,
          _subject: `New message from ${data.name} — DOSITA Contact Form`,
          _replyto: data.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      reset();
    } catch {
      toast.error("Failed to send message", {
        description: "Please try again later or contact us by phone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Centered heading */}
        <div className="text-center mb-20">
          <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter text-engineering-navy md:text-6xl">
            Get in
            <br />
            <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Reach our specialized teams in Turkiye, Italy, and the U.A.E. for
            customized water engineering solutions.
          </p>
        </div>

        {/* Office cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              country: "Turkiye",
              address: "Ciftlik, Bilgin Caddesi No 34, 41650 Golcuk Kocaeli",
              phone: "+90 262 5023097",
            },
            {
              country: "Italy",
              address: "V. Dottor Renato Balducci, 39, 02043, Contigliano Rieti",
              phone: "+39 393 8917942",
            },
            {
              country: "U.A.E.",
              address: "U.A.E., Sharjah, SAIF Zone, Q9-01, P.O. Box 9430",
              phone: "+971 50 3701692",
            },
          ].map((office) => (
            <div
              key={office.country}
              className="p-8 rounded-2xl bg-secondary border border-border hover:shadow-[var(--shadow-card)] transition-all"
            >
              <h4 className="font-bold text-xl mb-4 text-primary">{office.country}</h4>
              <div className="flex items-start gap-2 mb-3 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-engineering-navy" />
                <p className="text-sm leading-relaxed">{office.address}</p>
              </div>
              <div className="flex items-center gap-2 text-engineering-navy">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm font-mono">{office.phone}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto bg-secondary rounded-[2.5rem] p-8 md:p-10 text-engineering-navy">
          <h3 className="text-2xl font-bold mb-8 text-center">Send Us A Message</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest opacity-60">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Full Name"
                  className="bg-background border-none rounded-xl p-4 h-auto"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest opacity-60">
                  Company
                </Label>
                <Input
                  id="company"
                  placeholder="Company"
                  className="bg-background border-none rounded-xl p-4 h-auto"
                  {...register("company")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest opacity-60">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="email@company.com"
                className="bg-background border-none rounded-xl p-4 h-auto"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest opacity-60">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="How can we help?"
                rows={5}
                className="bg-background border-none rounded-xl p-4 resize-none"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 rounded-xl bg-primary text-white font-bold text-base hover:brightness-110 transition-all disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
