"use client";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const FoldAnimeText = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
            <div>
              <h1 className="text-5xl mb-10 text-center">
                who is Tome Hardy ?
              </h1>
              <p className="text-2xl text-center">
                Tom Hardy (born September 15, 1977, London, England) British
                actor who was known for his striking good looks, idiosyncratic
                personality, and cerebral performances in both cult films and
                mainstream blockbusters. Hardy's childhood and early adulthood
                gave little indication that he would one day become a movie
                star.
              </p>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <div className="box2">
              <p className="text-center">
                - The Rise and Journey of Pete Davidson: Comedian, Actor, and
                Overall 'Saturday Night Live' Legend (2022) ... Self - Taron
                Egerton: The Rise and Journey of the Multi-Talented Star Surfing
                Drama-Musical-Action Genres (2022) ... Self - The Australian New
                Wave Movement: The Neglected Cinematic Revolution From the Land
                Down Under (2021) ... Self - Neon-Infused Enigma of Nicolas
                Winding Refn's Characters and Their Seven Deadly Sins - A
                Tribute (2021) ... Self - The Rise of Chris Pine: Examining the
                Journey of One of Hollywood's Most Versatile Stars (2021) ...
                Self - Hero Or Villain?: When You're Young, You Love The Hero,
                When You're Old, You Understand The Villain (2021) ... Self - 10
                Best Martial Arts Movies: An Intro and In-Depth Look at the
                Genre (2021) ... Self - 10 Must-Watch Tearjerker Movies for Both
                Women and Men (2021) ... Self - A Tribute to Hans Zimmer: The
                Greatest Film Composer of the Modern Era (2021) ... Self - Tom
                Hardy - Tracking the Master Actor's Epic Career &
                Transformations - The Winner's Journey (2020) ... Self - Finding
                the New James Bond? 'No Time to Die' Will Be Daniel Craig's
                Final 007 - The NEXT Bond Is? (2020) ... Self - Every Tom Hardy
                Role from 2001 to 2020 & All Performances Diverse - The Winner's
                Journey (2020) ... Self
              </p>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span
              style={{
                fontSize: "8em",
                color: "white",
                borderBottom: "white solid 5px",
              }}
            >
              Contact Me!
            </span>
          </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
          <Animator animation={batch(Fade(), Sticky())}>
            <div className="box-foter">
              <img
                src="https://i.pinimg.com/1200x/02/b8/1e/02b81e27ac9b90fad2ab13cb2f7f5ea5.jpg"
                width={1200}
                alt=""
                className="rounded-3xl mb-10"
              />

              <h4 className="text-center backdrop-blur-2xl bg-white-30 relative -top-28 p-10">
                This is Helgeland's fifth feature film. Tom Hardy, Emily
                Browning, David Thewlis and Christopher Eccleston star with
                Colin Morgan, Chazz Palminteri, Paul Bettany, Tara Fitzgerald
                and Taron Egerton as well as the singer Duffy featured in This
                is Helgeland's fifth feature film. Tom Hardy, Emily Browning,
                David Thewlis and Christopher Eccleston star with Colin Morgan,
                Chazz Palminteri, Paul Bettany, Tara Fitzgerald and Taron
                Egerton as well as the singer Duffy featured in supporting
                roles.
              </h4>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default FoldAnimeText;
