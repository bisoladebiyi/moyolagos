import React from "react";
import { Link } from "react-router-dom";

interface Props {
  page: boolean;
}
const Broadcasting: React.FC<Props> = ({ page }) => {
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
        </div>
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/voiceoverchallenge.mp4"} type="video/mp4" />
          </video>
          <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
        </div>
        {page &&      <><div>
                  <video controls width={500} height="300" className="vid">
                      <source src={"/videos/aviation.mp4"} type="video/mp4" />
                  </video>
                  <p className="caption">
                      Scripted, voiced and presented by Moyosore Adebiyi
                  </p>
              </div><div>
                      <video controls width={500} height="300" className="vid">
                          <source src={"/videos/election.mp4"} type="video/mp4" />
                      </video>
                      <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
                  </div><div>
                      <video controls width={500} height="300" className="vid">
                          <source src={"/videos/lagosfashionhub.mp4"} type="video/mp4" />
                      </video>
                      <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
                  </div><div>
                      <video controls width={500} height="300" className="vid">
                          <source src={"/videos/thetable.mp4"} type="video/mp4" />
                      </video>
                      <p className="caption">
                          Scripted, voiced and presented by Moyosore Adebiyi
                      </p>
                  </div></>}
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
