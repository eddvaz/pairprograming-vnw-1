import React from "react";
import Bolo from "../img/bolodemorango.png";
import pizza from "../img/pizza.png";
import batidaAmendoim from "../img/batida-de-amendoim.png";
import spoon from "../img/Spoon.png";
import * as S from "../styles/styledMain";

const Main = () => {
  return (
    <S.conatinerMain>
      <div>
        <S.h2Recipes>Latest Recipes</S.h2Recipes>
      </div>
      <S.containerimgs>
        <S.backgroundfood>
          <S.imgMain src={Bolo} alt="" />
          <S.textFoodbolo>Red Velvet Cake</S.textFoodbolo>
        </S.backgroundfood>
        <S.backgroundfood>
          <S.imgMain src={pizza} alt="" />
          <S.textFoodpizza>Margherita Pizza</S.textFoodpizza>
        </S.backgroundfood>
        <S.backgroundfood>
          <S.imgMain src={batidaAmendoim} alt="" />
          <S.textFoodpeanut>Peanut Smoothie</S.textFoodpeanut>
        </S.backgroundfood>
      </S.containerimgs>
      <S.conatinerAbout>
        <div>
          <S.imgAbout src={spoon} alt="" />
        </div>
        <div>
          <h2>ABOUT</h2>
          <S.AboutP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
            tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
            dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
            quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
            sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
            Pellentesque mattis hendrerit semper. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Ut
            vestibulum nisl ante, et ultricies sapien facilisis aliquam.
          </S.AboutP>
        </div>
      </S.conatinerAbout>
      <S.containersubcribe>
        <h2>SUBSCRIBE</h2>
        <p>Sign up for newsletter</p>
        <S.subscribeInput placeholder="Your Email" />
        <S.subscribebutton>SUBMITt</S.subscribebutton>
      </S.containersubcribe>
    </S.conatinerMain>
  );
};

export default Main;
