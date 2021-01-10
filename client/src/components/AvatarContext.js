import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import SubHeader from "./SubHeader";
import useStickyState from "../useLocalStorageHook";
import ButtonWrapper from "./buttonWrapper";
<<<<<<< HEAD
import LogoImg from "../components/logo";

const AvatarProvider = () => {
=======
import { UserInfoContext } from "../UserInfoContext";

const AvatarProvider = () => {
  const history = useHistory();
  const { setAvatarUrl } = React.useContext(UserInfoContext);
>>>>>>> parent/main
  //Features useState
  const [topType, setTopType] = useStickyState("LongHairMiaWallace", "topType");
  const [accessoriesType, setAccessoriesType] = useStickyState(
    "Prescription02",
    "accessoriesType"
  );
  const [hairColor, setHairColor] = useStickyState("BrownDark", "hairColor");
  const [clotheType, setClotheType] = useStickyState("Hoodie", "clotheType");
  const [clotheColor, setClotheColor] = useStickyState(
    "PastelBlue",
    "clotheColor"
  );
  const [eyeType, setEyeType] = useStickyState("Happy", "eyeType");
  const [eyebrowType, setEyebrowType] = useStickyState(
    "Default",
    "eyebrowType"
  );
  const [mouthType, setMouthType] = useStickyState("Smile", "mouthType");
  const [skinColor, setSkinColor] = useStickyState("Light", "skinColor");

  let baseURL = `https://avataaars.io/?avatarStyle=Circle&topType=${topType}&accessoriesType=${accessoriesType}&hairColor=${hairColor}&facialHairType=Blank&clotheType=${clotheType}&clotheColor=${clotheColor}&eyeType=${eyeType}&eyebrowType=${eyebrowType}&mouthType=${mouthType}&skinColor=${skinColor}`;

  const [url, setUrl] = React.useState(baseURL);

  React.useEffect(() => {
    setAvatarUrl(url);
  }, [url]);

  //Functions to change features
  const changeTopType = (event) => {
    setTopType(event.target.value);
  };
  const changeAccessoriesType = (event) => {
    setAccessoriesType(event.target.value);
  };
  const changeHairColor = (event) => {
    setHairColor(event.target.value);
  };
  const changeClotheType = (event) => {
    setClotheType(event.target.value);
  };
  const changeClotheColor = (event) => {
    setClotheColor(event.target.value);
  };
  const changeEyeType = (event) => {
    setEyeType(event.target.value);
  };
  const changeEyebrowType = (event) => {
    setEyebrowType(event.target.value);
  };
  const changeMouthType = (event) => {
    setMouthType(event.target.value);
  };
  const changeSkinColor = (event) => {
    setSkinColor(event.target.value);
  };

  //Render Return
  React.useEffect(() => {
    setUrl(baseURL);
  }, [
    topType,
    accessoriesType,
    hairColor,
    clotheType,
    clotheColor,
    eyeType,
    eyebrowType,
    mouthType,
    skinColor,
  ]);

  return (
    <>
      <Wrapper>
        <LogoImg />
        <SubHeader>Create Your Avatar!</SubHeader>
        <WrapperAvatar>
          <img src={url} alt="user-avatar" />
          <WrapperFeatures>
            <div>
              Hairstyle:
              <select onChange={changeTopType} value={topType}>
                <option value="NoHair">No Hair</option>
                <option value="Eyepatch">Eyepatch</option>
                <option value="Hat">Hat</option>
                <option value="Hijab">Hijab</option>
                <option value="Turban">Turban</option>
                <option value="WinterHat1">Winter Hat</option>
                <option value="WinterHat4">Kitty Hat</option>
                <option value="LongHairBigHair">Long Wavy Hair</option>
                <option value="LongHairBob">Long Hair Bob</option>
                <option value="LongHairBun">Long Hair Bun</option>
                <option value="LongHairCurly">Long Hair Curly</option>
                <option value="LongHairCurvy">Long Hair Curvy</option>
                <option value="LongHairDreads">Long Hair Dreads</option>
                <option value="LongHairFrida">Long Hair Frida</option>
                <option value="LongHairFro">Long Hair Fro</option>
                <option value="LongHairFroBand">Long Hair Fro Band</option>
                <option value="LongHairNotTooLong">
                  Long Hair Not Too Long
                </option>
                <option value="LongHairShavedSides">
                  Long Hair Shaved Sides
                </option>
                <option value="LongHairMiaWallace">
                  Long Hair Mia Wallace
                </option>
                <option value="LongHairStraight">Long Hair Straight 1</option>
                <option value="LongHairStraight2">Long Hair Straight 2</option>
                <option value="LongHairStraightStrand">
                  Long Hair Straight Strand
                </option>
                <option value="ShortHairDreads01">Short Hair Dreads 1</option>
                <option value="ShortHairDreads02">Short Hair Dread 2</option>
                <option value="ShortHairFrizzle">Short Hair Frizzle</option>
                <option value="ShortHairShaggyMullet">
                  Short Hair Shaggy Mullet
                </option>
                <option value="ShortHairShortCurly">Short Hair Curly</option>
                <option value="ShortHairShortFlat">Short Hair Flat</option>
                <option value="ShortHairShortRound">Short Hair Round</option>
                <option value="ShortHairShortWaved">Short Hair Waved</option>
              </select>
            </div>
            <div>
              Hair Color:
              <select onChange={changeHairColor} value={hairColor}>
                <option value="Auburn">Auburn</option>
                <option value="Black">Black</option>
                <option value="Blonde">Blonde</option>
                <option value="BlondeGolden">Blonde Golden</option>
                <option value="Brown">Brown</option>
                <option value="BrownDark">Brown Dark</option>
                <option value="PastelPink">Pastel Pink</option>
                <option value="Platinum">Platinum</option>
                <option value="Red">Red</option>
                <option value="SilverGray">Silver Gray</option>
              </select>
            </div>
            <div>
              Skin Color:
              <select onChange={changeSkinColor} value={skinColor}>
                <option value="Tanned">Tanned</option>
                <option value="Yellow">Yellow</option>
                <option value="Pale">Pale</option>
                <option value="Light">Light</option>
                <option value="Brown">Brown</option>
                <option value="DarkBrown">Dark Brown</option>
                <option value="Black">Black</option>
              </select>
            </div>
            <div>
              Glasses:
              <select onChange={changeAccessoriesType} value={accessoriesType}>
                <option value="Blank">Blank</option>
                <option value="Kurt">Kurt</option>
                <option value="Prescription01">White</option>
                <option value="Prescription02">Black</option>
                <option value="Round">Round</option>
                <option value="Sunglasses">Sunglasses</option>
                <option value="Wayfarer">Wayfarer</option>
              </select>
            </div>
            <div>
              Eyes:
              <select onChange={changeEyeType} value={eyeType}>
                <option value="Default">Default</option>
                <option value="Close">Close</option>
                <option value="Cry">Cry</option>
                <option value="Dizzy">Dizzy</option>
                <option value="EyeRoll">EyeRoll</option>
                <option value="Happy">Happy</option>
                <option value="Hearts">Hearts</option>
                <option value="Side">Side</option>
                <option value="Squint">Squint</option>
                <option value="Surprised">Surprised</option>
                <option value="Wink">Wink</option>
                <option value="WinkWacky">Wink Wacky</option>
              </select>
            </div>
            <div>
              Eyebrow Type:
              <select onChange={changeEyebrowType} value={eyebrowType}>
                <option value="Angry">Angry</option>
                <option value="AngryNatural">Angry Natural</option>
                <option value="Default">Default</option>
                <option value="DefaultNatural">Default Natural</option>
                <option value="FlatNatural">Flat Natural</option>
                <option value="RaisedExcited">Raised Excited 1</option>
                <option value="RaisedExcitedNatural">Raised Excited 2</option>
                <option value="SadConcerned">Sad Concerned 1</option>
                <option value="SadConcernedNatural">Sad Concerned 2</option>
                <option value="UnibrowNatural">Unibrow</option>
                <option value="UpDown">Up Down</option>
                <option value="UpDownNatural">Up Down Natural</option>
              </select>
            </div>
            <div>
              Mouth Type:
              <select onChange={changeMouthType} value={mouthType}>
                <option value="Concerned">Concerned</option>
                <option value="Default">Default</option>
                <option value="Disbelief">Disbelief</option>
                <option value="Eating">Eating</option>
                <option value="Grimace">Grimace</option>
                <option value="Sad">Sad</option>
                <option value="ScreamOpen">Scream Open</option>
                <option value="Serious">Serious</option>
                <option value="Smile">Smile</option>
                <option value="Tongue">Tongue</option>
                <option value="Twinkle">Twinkle</option>
              </select>
            </div>
            <div>
              Outfit Type:
              <select onChange={changeClotheType} value={clotheType}>
                <option value="BlazerShirt">Blazer Shirt</option>
                <option value="BlazerSweater">Blazer Sweater</option>
                <option value="CollarSweater">Collar Sweater</option>
                <option value="Graphic Shirt">Graphic Shirt</option>
                <option value="Hoodie">Hoodie</option>
                <option value="Overall">Overall</option>
                <option value="ShirtCrewNeck">Shirt Crew Neck</option>
                <option value="ShirtScoopNeck">Shirt V Neck</option>
              </select>
            </div>
            <div>
              Outfit Color:
              <select onChange={changeClotheColor} value={clotheColor}>
                <option value="Black">Black</option>
                <option value="Gray01">Gray Tone 1</option>
                <option value="Gray02">Gray Tone 2</option>
                <option value="Heather">Heather</option>
                <option value="PastelBlue">Pastel Blue</option>
                <option value="PastelGreen">Pastel Green</option>
                <option value="PastelOrange">Pastel Orange</option>
                <option value="PastelRed">Pastel Red</option>
                <option value="PastelYellow">Pastel Yellow</option>
                <option value="Pink">Pink</option>
                <option value="Red">Red</option>
                <option value="White">White</option>
              </select>
            </div>
          </WrapperFeatures>
        </WrapperAvatar>
        <ButtonWrapper nextLink="/learnaboutmoney" />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapperAvatar = styled.div`
  margin-top: 20px;
  display: flex;
`;

const WrapperFeatures = styled.div`
  font-size: 25px;

  & select {
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
  }
`;

export default AvatarProvider;
