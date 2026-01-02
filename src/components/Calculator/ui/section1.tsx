import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Cpu, Leaf, Coins } from "lucide-react";
export function Section1() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#13132b]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#00e2c1]">
          Why Mine with Signum?
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <Card className="bg-[#1c1c3b] border-[#2d2d5a]">
            <CardHeader>
              <Leaf className="h-8 w-8 mb-2 text-[#00e2c1]" />
              <CardTitle className="text-[#00e2c1]">Eco-Friendly</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#8f8fb1]">
                Signum uses sustainable Proof-of-Capacity consensus, reducing
                energy consumption.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#1c1c3b] border-[#2d2d5a]">
            <CardHeader>
              <Cpu className="h-8 w-8 mb-2 text-[#00e2c1]" />
              <CardTitle className="text-[#00e2c1]">
                Use Existing Hardware
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#8f8fb1]">
                Mine using your hard drive space. No need for expensive,
                specialized equipment.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#1c1c3b] border-[#2d2d5a]">
            <CardHeader>
              <Coins className="h-8 w-8 mb-2 text-[#00e2c1]" />
              <CardTitle className="text-[#00e2c1]">Earn Signa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#8f8fb1]">
                Get rewarded with Signa tokens for contributing to the networks
                security.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
