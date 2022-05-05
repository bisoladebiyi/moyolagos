import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  page: boolean;
}
const Broadcasting: React.FC<Props> = ({ page }) => {
  const [showCaptions, setShowCaptions] = useState({
    lekki: false,
    iwfi: false,
    betway: false,
  });
  return (
    <div className="work-container">
      <h2 className="works-title">Broadcasting and Media</h2>
      <div className="work-videos">
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/lekkileisure.mp4"} type="video/mp4" />
          </video>
          <p className="caption">
            Scripted, voiced and presented by Moyosore Adebiyi
          </p>
          <div style={{ color: "#9b9b9b", fontSize:"15px", lineHeight:"23px" }}>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
                fontWeight: "700",
              }}
            >
              AD COPY WRITING STYLE
            </p>
            <p>
              I wanted the tone of the Ad to give off a sense of relaxation, fun
              and of course romance. The three essential elements for the
              perfect Valentine date.{" "}
              {!showCaptions.lekki && (
                <span
                  onClick={() =>
                    setShowCaptions({ ...showCaptions, lekki: true })
                  }
                  style={{
                    color: "#66adf3",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  ..See more
                </span>
              )}
            </p>
            {showCaptions.lekki && (
              <div>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "700",
                  }}
                >
                  Copy For Lekki Leisure (Lovenest) Valentine Ad
                </p>
                <p>
                  Love is in the air, Valentine’s Day is fast approaching and we
                  at lekki leisure are giving away an all expense paid dinner
                  for two, right here at The gabion court. Overlooking the vast
                  ocean, underneath the big blue skies. Now, if you want to
                  participate, all you have to do is make a video showing us how
                  you would ‘shoot your shot’ at a potential lover or how you
                  did with your current partner. When you make that video, post
                  it on Instagram, tag us @lekkieleisure and use the hashtag
                  #lovenest. We are waiting for it and you just might be our
                  winner.
                  <span
                    onClick={() =>
                      setShowCaptions({ ...showCaptions, lekki: false })
                    }
                    style={{
                      color: "#66adf3",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    See less
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/onthespot.mp4"} type="video/mp4" />
          </video>
          <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
        </div>
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/marriage.mp4"} type="video/mp4" />
          </video>
          <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
          <div style={{ color: "#9b9b9b", fontSize:"15px", lineHeight:"23px" }}>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
                fontWeight: "700",
              }}
            >
              AD COPY WRITING STYLE
            </p>
            <p>
              We wanted an ad that was relatable to our target audience and
              Succinct. Working through marriage can be tough and challenging,
              but it doesn’t always have to be. It can also be relaxing and
              gratifying. And I believe the ad conveyed that message{" "}
              {!showCaptions.iwfi && (
                <span
                  onClick={() =>
                    setShowCaptions({ ...showCaptions, iwfi: true })
                  }
                  style={{
                    color: "#66adf3",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  ..See more
                </span>
              )}
            </p>
            {showCaptions.iwfi && (
              <div>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "700",
                  }}
                >
                  Copy For IWFI (Married Couples Relationship Program)
                </p>
                <p>
                  Have you been searching for an opportunity to kindle the spark
                  in your marriage? If yes. The married couples Relationship
                  Programs, offers you the opportunity to strengthen the bond of
                  friendship between you and your spouse. It also provides a get
                  away from the routine and stress of everyday hustle. In this
                  programme, you’ll understand yourself better, as well as, your
                  spouse, how to communicate your feelings, draw a strategic
                  plan of sustaining happiness in your marriage, amongst other
                  key discussions. Join us, this September at the Jubilee
                  Chalet, Epe Resorts. What are you waiting for? Click the link
                  below it call the numbers in your screen to book your space in
                  this life transforming programme.
                  <span
                    onClick={() =>
                      setShowCaptions({ ...showCaptions, iwfi: false })
                    }
                    style={{
                      color: "#66adf3",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    See less
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/voiceoverchallenge.mp4"} type="video/mp4" />
          </video>
          <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
          <div style={{ color: "#9b9b9b", fontSize:"15px", lineHeight:"23px" }}>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
                fontWeight: "700",
              }}
            >
              AD COPY WRITING STYLE
            </p>
            <p>
              Betting as we know is all about taking risk, therefore, I wanted a
              copy that was bold and striking. In the same vain, capturing the
              target audiences passion for the game and endearing them to take a
              chance with Betway for better odds.
              {!showCaptions.betway && (
                <span
                  onClick={() =>
                    setShowCaptions({ ...showCaptions, betway: true })
                  }
                  style={{
                    color: "#66adf3",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  ..See more
                </span>
              )}
            </p>
            {showCaptions.betway && (
              <div>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "700",
                  }}
                >
                  Ad Copy For Betway (Moneyback boost)
                </p>
                <p>
                  This is for the sports lovers, the winners, the people. You
                  can win big with Betway, even when all seems lost. Because
                  with money back boost by Betway. Winning is for everyone!!!
                  <br />
                  Betway… The only way to bet.
                  <span
                    onClick={() =>
                      setShowCaptions({ ...showCaptions, betway: false })
                    }
                    style={{
                      color: "#66adf3",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    See less
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
        {page && (
          <>
            <div>
              <video controls width={500} height="300" className="vid">
                <source src={"/videos/aviation.mp4"} type="video/mp4" />
              </video>
              <p className="caption">
                Scripted, voiced and presented by Moyosore Adebiyi
              </p>
            </div>
            <div>
              <video controls width={500} height="300" className="vid">
                <source src={"/videos/election.mp4"} type="video/mp4" />
              </video>
              <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
            </div>
            <div>
              <video controls width={500} height="300" className="vid">
                <source src={"/videos/lagosfashionhub.mp4"} type="video/mp4" />
              </video>
              <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
            </div>
            <div>
              <video controls width={500} height="300" className="vid">
                <source src={"/videos/thetable.mp4"} type="video/mp4" />
              </video>
              <p className="caption">
                Scripted, voiced and presented by Moyosore Adebiyi
              </p>
            </div>
          </>
        )}
      </div>
      {!page && (
        <Link to="/works">
          <button className="view-all">View All Works</button>
        </Link>
      )}
    </div>
  );
};

export default Broadcasting;
