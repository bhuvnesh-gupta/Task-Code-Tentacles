import { useState, useEffect } from "react";
import PartnerSlider from "./PartnerSlider";
import PartnerItem from "./PartnerItem";
import { LINKS } from "../constants/Links";

import TrustWallet from "../../assets/svg/partner/TrustWallet.svg";
import Binance from "../../assets/svg/partner/Binance.svg";
import Coinbase from "../../assets/svg/partner/Coinbase.svg";
import DappRadar from "../../assets/svg/partner/DappRadar.svg";
import Domains from "../../assets/svg/partner/Domains.svg";
import GivingBlock from "../../assets/svg/partner/GivingBlock.svg";
import HuobiWallet from "../../assets/svg/partner/HuobiWallet.svg";
import Instad from "../../assets/svg/partner/Instad.svg";
import LiveCoin from "../../assets/svg/partner/LiveCoin.svg";
import Near from "../../assets/svg/partner/Near.svg";
import Pillar from "../../assets/svg/partner/Pillar.svg";
import Synthetix from "../../assets/svg/partner/Synthetix.svg";
import Unstoppable from "../../assets/svg/partner/Unstoppable.svg";
import Venly from "../../assets/svg/partner/Venly.svg";
import Zapper from "../../assets/svg/partner/Zapper.svg";
import Zerion from "../../assets/svg/partner/Zerion.svg";
import ATOken from "../../assets/svg/partner/ATOken.svg";
import BitPay from "../../assets/svg/partner/BitPay.svg";

const PARTNERS = [
  { name: "Near", logo: Near },
  { name: "Binance Chain", logo: Binance },
  { name: "Coinbase wallet", logo: Coinbase },
  { name: "Zerion", logo: Zerion },
  { name: "Zapper", logo: Zapper },
  { name: "InstaDapp", logo: Instad },
  { name: "ATOken", logo: ATOken },
  { name: "Trust Wallet", logo: TrustWallet },
  { name: "Giving Block", logo: GivingBlock },
  { name: "Venly", logo: Venly },
  { name: "Pillar", logo: Pillar },
  { name: "DappRadar", logo: DappRadar },
  { name: "Synthetix", logo: Synthetix },
  { name: "Unstoppable", logo: Unstoppable },
  { name: "Live Coin Watch", logo: LiveCoin },
  { name: "BitPay", logo: BitPay },
  { name: "Unstoppable Domains", logo: Domains },
  { name: "Huobi Wallet", logo: HuobiWallet },
];

const Partners = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center pl-[60px] pr-[60px] mt-[130px] mb-14 text-gray-700"
      id={LINKS.PARTNERS}>
      <div className="container mx-auto text-center">
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="lg:text-[44px] sm:text-3xl md:text-3xl font-normal text-gray-700 dark:text-gray-200 mb-8">
          <span className="text-green-500"> BINABOX </span>PARTNER
        </h2>
        {isMobile ? (
          <PartnerSlider partners={PARTNERS} />
        ) : (
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {PARTNERS.map((partner, index) => (
              <PartnerItem
                key={index}
                logo={partner.logo}
                name={partner.name}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Partners;
