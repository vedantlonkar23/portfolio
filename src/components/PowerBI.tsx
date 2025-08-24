import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PowerBI = () => {
  // Auto-import all images from src/assets/telecom
  const telecomModules = import.meta.glob(
    "@/assets/telecom/*.{png,jpg,jpeg,webp}",
    { eager: true, as: "url" }
  ) as Record<string, string>;
  const telecomDashboards = Object.keys(telecomModules).sort().map((key) => telecomModules[key]);

  // Auto-import all images from src/assets/shipment
  const shipmentModules = import.meta.glob(
    "@/assets/shipment/*.{png,jpg,jpeg,webp}",
    { eager: true, as: "url" }
  ) as Record<string, string>;
  const shipmentDashboards = Object.keys(shipmentModules).sort().map((key) => shipmentModules[key]);

  return (
    <section id="powerbi" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Power BI Dashboards</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive data visualizations and business intelligence solutions
          </p>
        </div>

        <Tabs defaultValue="telecom" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="telecom" className="text-lg">Telecom Churn Analysis</TabsTrigger>
            <TabsTrigger value="shipment" className="text-lg">Shipment Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="telecom" className="space-y-8">
            <div className="relative max-w-5xl mx-auto">
              <Carousel opts={{ align: "center", loop: true }} className="w-full">
                <CarouselContent>
                  {telecomDashboards.map((src, idx) => (
                    <CarouselItem key={idx} className="basis-full">
                      <Card className="overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-500 bg-gradient-to-b from-background to-muted/30">
                        <div className="relative w-full aspect-[16/9] bg-muted/40">
                          <img
                            src={src}
                            alt={`Telecom Dashboard ${idx + 1}`}
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

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 border-border/50 bg-background/60 backdrop-blur-sm">
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
          </TabsContent>

          <TabsContent value="shipment" className="space-y-8">
            <div className="relative max-w-5xl mx-auto">
              <Carousel opts={{ align: "center", loop: true }} className="w-full">
                <CarouselContent>
                  {shipmentDashboards.map((src, idx) => (
                    <CarouselItem key={idx} className="basis-full">
                      <Card className="overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-500 bg-gradient-to-b from-background to-muted/30">
                        <div className="relative w-full aspect-[16/9] bg-muted/40">
                          <img
                            src={src}
                            alt={`Shipment Dashboard ${idx + 1}`}
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

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 border-border/50 bg-background/60 backdrop-blur-sm">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Insights</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>1,000 shipments are on time with 35% delayed; average waiting time is 35 days.</li>
                      <li>Average asset utilization is 79.6%, showing good but improvable efficiency.</li>
                      <li>Traffic detours are the leading cause of shipment delays, impacting delivery reliability.</li>
                      <li>Inventory levels exceed demand by 1.5 times, leading to overstock and possible holding costs.</li>
                      <li>Stockouts have been reported across trucks, indicating supply chain imbalances.</li>
                      <li>Customer purchase frequency is steady, with monthly transaction amounts peaking seasonally.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Recommendations</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Optimize shipment routing to reduce delays caused by traffic detours and heavy congestion.</li>
                      <li>Improve inventory planning to better match demand and reduce excess stock.</li>
                      <li>Reallocate assets to regions and routes with high utilization and delay to improve efficiency.</li>
                      <li>Use predictive analytics for better demand forecasting and proactive delay management.</li>
                      <li>Enhance customer communication with real-time tracking and delay notifications.</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PowerBI;


