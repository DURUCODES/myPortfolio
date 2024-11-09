import React from "react";
import { SiWebauthn } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const AboutMe = () => {
  return (
    <div className="">
      <div>
        <p className="mb-4 text">
          Hey! Kingsley Duruchukwu <strong>DURU</strong> for short. a Devoted
          frontend developer in Nigeria. I'm enthusiastic about bringing both
          the technical and visual aspects of digital products to life. User
          experience, beautiful pixels and writing clean human codes.
        </p>
        <p className="mb-4 text">
          As a Frontend Developer, I focus on creating seamless, user-friendly
          interfaces with a variety of modern web technologies. My Ardent lies
          in translating design concepts into functional, high-quality code,
          ensuring a smooth and enjoyable user experience on every project
        </p>

        <p className="mb-4 text">
          yea so that was about my tech/nerdy side, apart from that, I love to
          play football. I'm also skilled in <strong>Coummincation</strong>
          <strong> Networking, building connections,</strong>
          <strong>Contributing to open Source.</strong> So that's a little
          glimpse of who I am. If you want to know more about me, feel free to
          reach out to me on Email, Twitter, or LinkedIn!
        </p>
      </div>

      <div>
        <h1 className="text-3xl font-bold">My Process</h1>
        <div className="flex flex-col md:flex-row relative ">
          {/* dshchsdhcsjsdsddsdsds */}

          <div class=" md:mr-4 my-4 border-2 border-[rgba(216,209,225,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
            <div className="md:py-6 py-3 flex flex-col md:flex-row md:items-start items-center text-center md:text-start ">
              <div className="md:mr-3">
                <SiWebauthn className="text-5xl mr-2 text-yellow-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2"> Web development</h2>
                <p>
                  I can create websites and web applications. I have experience
                  in ReactJS, Nextjs, TypeScript, Vanilla JavaScript
                </p>
              </div>
            </div>
          </div>
          {/* dhdhdjkdhsdhdshdsdsdhdshshdds */}

          {/* dshchsdhcsjsdsddsdsds */}

          <div class=" relative md:mr-4 my-4 border-2 border-[rgba(216,209,225,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
            <div className="md:py-6 py-3 flex flex-col md:flex-row md:items-start items-center text-center  md:text-start">
              <div className="md:mr-3">
                <FaGithub className="text-5xl mr-2 text-yellow-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold  mb-2"> Version Control:</h2>
                <ul>
                  <li>
                    Utilize version control systems like Git for tracking
                    changes
                  </li>
                  <li>Follow branching strategies for organized development</li>
                  <li>Collaborate with team members using Github</li>
                </ul>
              </div>
            </div>
          </div>
          {/* dhdhdjkdhsdhdshdsdsdhdshshdds */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
