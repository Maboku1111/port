import { TypingAnimation } from "@/components/magicui/typing-animation";

function Hero() {
  return (
    <section>
      <div className="mt-16 min-h-screen px-16 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>

          <div>
            {/* <SparklesText className="navbar" text="Maboku Seimela" /> */}
            <TypingAnimation
              duration="3000"
              delay="200"
              className="navbar opacity-0"
            >
              Maboku Seimela
            </TypingAnimation>
          </div>

          <p className="bio m-16 opacity-0">
            Innovation isn’t just about invention
            <svg
              className="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z"
                  fill="#1464EC"
                ></path>
                <path
                  d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z"
                  fill="#1464EC"
                ></path>
                <path
                  d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z"
                  fill="#1464EC"
                ></path>
                <path
                  d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z"
                  fill="#2F4BFF"
                ></path>
              </g>
            </svg>
            it’s about{" "}
            <span className="inner-text">
              creating solutions that truly matter
            </span>
            . With a blend of{" "}
            <span className="inner-text">
              strategy, creativity, and technical expertise
            </span>
            , I ensure that every innovation is{" "}
            <span className="inner-text">
              functional, scalable, and built to last
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
