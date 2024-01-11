import "./aboutmain.css";

import AboutLeft from "../../../Components/AboutComponent/AboutLeft";
import AboutRight from "../../../Components/AboutComponent/AboutRight";
import Medals from "../../../Components/AboutComponent/Medals";
import React from "react";
import useFetch from "../../../hooks/useFeatch";
import { useTranslation } from "react-i18next";

const AboutMain = ({ selectedLanguage }) => {
  const { t, i18n } = useTranslation();
  const { data: about, loading } = useFetch(`/api/v1/about`);
  return (
    <section className="product_container aboutright">
      <div className="product pb-4 about-us ">
        <AboutRight
          title={t("title")}
          head={
            about && selectedLanguage === "ar"
              ? about[0]?.about_header_ar
              : about[0]?.about_header_en
          }
          description2=""
          aboutAr={
            about && selectedLanguage === "ar"
              ? about[0]?.about_description_ar
              : about[0]?.about_description_en
          }
          aboutImage={about && about[0]?.about_image}
          loading={loading}
        />
        <AboutLeft
          title={t("about_title2")}
          aboutAr={
            about && selectedLanguage === "ar"
              ? about[0]?.building_description_ar
              : about[0]?.building_description_en
          }
          aboutImage={about && about[0]?.building_image}
          loading={loading}
        />
        <AboutRight
          title={t("about_title3")}
          head=""
          head2={
            about && selectedLanguage === "ar"
              ? about[0]?.quality_header_ar
              : about[0]?.quality_header_en
          }
          description2={
            about && selectedLanguage === "ar"
              ? about[0]?.quality_description2_ar
              : about[0]?.quality_description2_en
          }
          aboutAr={
            about && selectedLanguage === "ar"
              ? about[0]?.quality_description1_ar
              : about[0]?.quality_description1_en
          }
          aboutImage={about && about[0]?.quality_image}
          loading={loading}
        />
        <div className="m-right medals">
          <Medals
            title={t("about_title4")}
            head={
              about && selectedLanguage === "ar"
                ? about[0]?.certifications_short_description_ar
                : about[0]?.certifications_short_description_en
            }
            aboutAr={
              about && selectedLanguage === "ar"
                ? about[0]?.certifications_ar
                : about[0]?.certifications_en
            }
            aboutImage={about && about[0]?.certifications_image}
            description2=""
            loading={loading}
          />
          {/* <AboutLeft head={about&&about[0]?.certifications_short_description_ar} aboutAr={about&&about[0]?.certifications_ar} description2='' loading={loading}/> */}
        </div>
        <div className="ma-right aboutleft">
          <AboutRight
            title={t("about_title5")}
            head=""
            description2=""
            aboutAr={
              about && selectedLanguage === "ar"
                ? about[0]?.market_description_ar
                : about[0]?.market_description_en
            }
            aboutImage={about && about[0]?.market_image}
            loading={loading}
          />
        </div>

        <div className="m-right aboutleft mb-5 pb-3">
          <AboutLeft
            title={t("about_title6")}
            description2=""
            aboutAr={
              about && selectedLanguage === "ar"
                ? about[0]?.expanding_description_ar
                : about[0]?.expanding_description_en
            }
            aboutImage={about && about[0]?.expanding_image}
            loading={loading}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
