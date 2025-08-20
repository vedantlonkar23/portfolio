import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const PowerBI = () => {
  // Auto-import all images from src/assets/telecom
  const modules = import.meta.glob(
    "@/assets/telecom/*.{png,jpg,jpeg,webp}",
    { eager: true, as: "url" }
  ) as Record<string, string>;
  const dashboards = Object.keys(modules).sort().map((key) => modules[key]);

  return (
    <section id="powerbi" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Power BI Dashboards</h2>
          <ul className="list-disc list-inside text-2xl font-semibold text-muted-foreground max-w-3xl mx-auto inline-block text-left">
            <li>Telecom Company Churn Rate</li>
          </ul>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel opts={{ align: "center", loop: true }} className="w-full">
            <CarouselContent>
              {dashboards.map((src, idx) => (
                <CarouselItem key={idx} className="basis-full">
                  <Card className="overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-500 bg-gradient-to-b from-background to-muted/30">
                    <div className="relative w-full aspect-[16/9] bg-muted/40">
                      <img
                        src={src}
                        alt={`Power BI Dashboard ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </div>

        {/* Details Panel */}
        <div className="max-w-4xl mx-auto mt-10">
          <Card className="p-8 border-border/50 bg-background/60 backdrop-blur-sm">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Telecom</Badge>
              <Badge variant="secondary">Churn</Badge>
              <Badge variant="secondary">Retention</Badge>
              <Badge variant="secondary">Power BI</Badge>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-3">Key insights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>High churn (~26.5%) mainly in early tenure and month-to-month contracts.</li>
                  <li>Customers without partners/dependents and senior citizens churn more.</li>
                  <li>Churn is higher among users without value-added services (security, backup, support).</li>
                  <li>Electronic check and paperless billing users have higher churn.</li>
                  <li>Fiber optic users churn more than DSL users.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Recommended actions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Encourage longer-term contracts with promotions/discounts.</li>
                  <li>Enhance onboarding and proactive support in early tenure.</li>
                  <li>Bundle and promote value-added services (security, backup, tech support).</li>
                  <li>Target at-risk segments with tailored retention offers and support.</li>
                  <li>Optimize payment options; encourage auto-pay/credit card billing.</li>
                  <li>Review fiber optic service issues; improve quality, pricing, communication.</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PowerBI;


