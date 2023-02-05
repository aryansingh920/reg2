import React, { useState } from "react";
import "./SIGNUPBASEBALL2.css";

function SIGNUPBASEBALL2(props) {
  const {
    registration,
    x2023OlympicIndoo,
    screenshot20230123At8321,
    place,
    theFacility,
    memberships,
    battingCages,
    programsEvents,
    contactUs,
    ois,
    eazy,
    base1,
    title,
    browse,
    letsCreateYourCustomPlayersCard,
    firstUploadYourPhoto,
    number,
    upload,
  } = props;
  const [file, setFile] = useState();
  // function handleChange(e) {
  //   console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      localStorage.setItem("image", reader.result);
    };
  };
  return (
    <div className="container-center-horizontal">
      <div className="sign-up-baseball screen">
        <div className="overlap-group4">
          <div className="overlap-group2">
            <div className="rectangle-42"></div>
            <div className="registration dohyeon-normal-white-37px">
              {registration}
            </div>
            <div className="rectangle-43"></div>
            <div className="rectangle-44"></div>
            <div className="rectangle-23"></div>
            <p className="x2023-olympic-indoo chakrapetch-normal-white-15px">
              {x2023OlympicIndoo}
            </p>
            <div className="rectangle-33"></div>
            <div className="rectangle-5"></div>
            <img
              className="screenshot-2023-01-23-at-832-1"
              src={screenshot20230123At8321}
              alt="Screenshot 2023-01-23 at 8.32 1"
            />
            <div className="place akshar-normal-black-19px">{place}</div>
            <div className="the-facility akshar-normal-black-19px">
              {theFacility}
            </div>
            <div className="memberships akshar-normal-black-19px">
              {memberships}
            </div>
            <div className="batting-cages akshar-normal-black-19px">
              {battingCages}
            </div>
            <div className="programs-events akshar-normal-black-19px">
              {programsEvents}
            </div>
            <div className="contact-us akshar-normal-black-19px">
              {contactUs}
            </div>
            <div className="rectangle-6"></div>
            <div className="ois coda-extra-bold-inchworm-46px">{ois}</div>
            <img
              className="iconsax-linearusersquare"
              src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/iconsax-linear-usersquare-2.svg"
              alt="Iconsax/Linear/usersquare"
            />
            <div className="eazy inter-bold-white-21px">SIGN UP</div>
            <img className="base-1" src={base1} alt="BASE 1" />
          </div>
          <h1 className="title inter-bold-white-46px">{title}</h1>
          <div className="overlap-group">
            <div
              className="rectangle-61"
              style={{ backgroundImage: `${file}` }}
            ></div>
            {/* <img
              className="iconsax-linearcamera"
              src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/iconsax-linear-camera.svg"
              alt="Iconsax/Linear/camera"
            /> */}

            <div className="rectangle-63"></div>
            <div className="browse">
              {/* {browse} */}
              {/* <label className="custom-upload">BROWSE</label> */}
              <input type="file" onChange={handleChange} label={browse} />
            </div>
          </div>
          <p className="lets-create-your-custom-players-card inter-light-white-26px">
            {letsCreateYourCustomPlayersCard}
          </p>
          <div className="first-upload-your-photo akshar-light-white-26px">
            {firstUploadYourPhoto}
          </div>
          <div className="overlap-group1">
            <div className="ellipse-1"></div>
            <div className="number inter-bold-black-36px">{number}</div>
          </div>
          <a href="http://54.250.152.173:36475/">
            <div className="overlap-group3">
              <div className="rectangle-62"></div>
              <div className="upload inter-bold-black-30px">{upload}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SIGNUPBASEBALL2;
