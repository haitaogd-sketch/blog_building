import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neo-black text-white border-t-4 border-neo-black mt-20">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <h3 className="text-3xl lg:text-4xl font-black tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 title-neo">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"
              className="inline-block mx-3 bg-neo-yellow hover:bg-neo-blue text-neo-black border-4 border-neo-white font-black py-3 px-8 duration-200 transition-all mb-6 lg:mb-0 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-black hover:text-neo-yellow transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
        {/* 装饰条纹 */}
        <div className="h-4 bg-stripe" />
      </Container>
    </footer>
  );
}

export default Footer;
