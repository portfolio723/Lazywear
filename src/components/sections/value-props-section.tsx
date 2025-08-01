
import { Truck, Undo2, ShieldCheck, MessageCircle } from "lucide-react";

const valueProps = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over ₹2000",
  },
  {
    icon: Undo2,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description: "Collaborated with the best",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Via WhatsApp and Email",
  },
];

export function ValuePropsSection() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div key={index} className="flex items-center gap-4">
              <prop.icon className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold text-base">{prop.title}</h3>
                <p className="text-muted-foreground text-sm">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

    