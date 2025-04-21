import { AnimatedGridPattern } from "@/components/globals/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden xl:h-[860px] lg:h-[850px] md:h-[850px] sm:h-[850px] h-[840px]">
      <div className="relative flex h-screen w-full px-5 items-center flex-col justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatedGridPattern
            numSquares={80}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
              "inset-0 h-full w-full skew-y-12"
            )}
          />
        </div>

        <div className="z-20 flex items-center justify-center flex-col">
          <Button variant="outline">
            <FaDiscord />
            Discord community
          </Button>
          <p className="relative text-center py-8 text-5xl font-black lg:text-7xl">
            <span className="text-neutral-700 dark:text-neutral-500">
              Level Up Your
            </span>{" "}
            <br /> UI Kit Even Further
          </p>
          <p className="lg:text-xl text-base text-muted-foreground text-center">
            Take Shadcn UI even further with an extended library of components
            and layouts.
            Unlock more building blocks to design faster, build better, and
            create bolder, more powerful applications.
          </p>
          <div className="flex items-center justify-center gap-2 lg:mt-3 mt-5">
            <Button variant="default">Get Started</Button>
            <Button variant="outline">
              <FaGithub />
              Github
            </Button>
          </div>
          <div className="flex mt-3 text-sm text-muted-foreground items-center gap-1">
            <p>Built by</p>
            <Link href="#" className="hover:underline">
              Kyle Andre Lim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
