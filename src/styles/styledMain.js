import styled from "styled-components";

export const conatinerMain = styled.div`
  background-color: #f2f4f1;
  height: 100%;
  border: solid #f2f4f1;
`;

export const h2Recipes = styled.h2`
  & {
    margin-top: 327px;
    text-align: center;
  }

  &::before {
    border: solid #373737;
    border-top: solid -10px;
    transform: translateX(-50%);
    position: absolute;
    top: 50px;

    content: "";
    top: 150%;
    bottom: 20px;
    left: 50%;
    height: 0;
    width: 8vw;
  }
`;

export const containerimgs = styled.div`
  display: flex;
  margin-top: 200px;
  height: 778px;
  justify-content: space-around;
`;

export const backgroundfood = styled.div`
  background-color: white;
  text-align: center;
  box-shadow: 0px 7px 6px #00000029;
  height: 700px;
`;

export const textFoodbolo = styled.h3`
  & {
    margin-top: 200px;
  }

  &::before {
    border: solid #373737;
    transform: translateX(-50%);
    position: absolute;

    content: "";
    top: 224%;
    bottom: 20px;
    left: 17%;
    height: 0;
    width: 4vw;
  }
`;

export const textFoodpizza = styled.h3`
  & {
    margin-top: 200px;
  }

  &::before {
    border: solid #373737;
    transform: translateX(-50%);
    position: absolute;

    content: "";
    top: 224%;
    bottom: 20px;
    left: 83%;
    height: 0;
    width: 4vw;
  }
`;

export const textFoodpeanut = styled.h3`
  & {
    margin-top: 200px;
  }

  &::before {
    border: solid #373737;
    transform: translateX(-50%);
    position: absolute;

    content: "";
    top: 224%;
    bottom: 20px;
    left: 50%;
    height: 0;
    width: 4vw;
  }
`;

export const imgMain = styled.img`
  display: flex;
  width: 27.91vw;
  height: 41.51vh;
`;

export const conatinerAbout = styled.div`
  display: flex;
  text-align: center;
`;

export const imgAbout = styled.img`
  width: 750px;
  height: 600px;
`;

export const AboutP = styled.p`
  padding: 40px;
`;

export const containersubcribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dfe4de;
  height: 764px;
`;

export const subscribeInput = styled.input`
  width: 792px;
  height: 120px;
  margin-top: 40px;
`;

export const subscribebutton = styled.button`
  width: 240px;
  height: 81px;
  border: 6px solid #373737;
  font-family: "DM Sans", sans-serif;
  font-size: 24px;
  letter-spacing: 6.14px;
  margin-top: 40px;
`;