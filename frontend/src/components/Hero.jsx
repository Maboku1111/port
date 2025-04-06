import { SparklesText } from "@/components/magicui/sparkles-text";
import ScrollBasedVelocityDemo from "./Scroll";

function Hero() {
  return (
    <section className="min-h-screen relative -top-4 -left-4 mb-96">
      <div className="relative h-16 w-16 mt-28 max-w-lg float-end">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="mb-24">
        <SparklesText className="navbar text-8xl " text="Maboku Seimela" />

        <p className="bio m-16 text-4xl">
          Innovation isn’t just about invention it’s about{" "}
          <span className="inner-text opacity-50">
            creating solutions that truly matter
          </span>
          . With a blend of{" "}
          <span className="inner-text opacity-50">
            strategy, creativity, and technical expertise
          </span>
          , I ensure that every innovation is{" "}
          <span className="inner-text opacity-50">
            functional, scalable, and built to last
          </span>
          .
        </p>
        <ScrollBasedVelocityDemo />
      </div>
    </section>
  );
}

export default Hero;
