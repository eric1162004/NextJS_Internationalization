import useTranslation from "next-translate/useTranslation";
import Layout from "../components/Layout";

const Home = () => {
  let { t } = useTranslation();
  
  return (
    <Layout>
    <div className="w-full mx-auto text-center">
      <h1 className="text-3xl mt-10">{t("common:greeting")}</h1>
      <h1 className="text-3xl mt-10">{t("common:greeting")}</h1>
      <h1 className="text-3xl mt-10">{t("common:greeting")}</h1>
      <h1 className="text-3xl mt-10">{t("common:greeting")}</h1>
      <h1 className="text-3xl mt-10">{t("common:greeting")}</h1>
      <h1 className="text-3xl mt-10">{t("common:greeting")}</h1>
      <h1 className="text-3xl mt-10">{t("common:greeting")}</h1>
      <h1 className="text-3xl mt-10">{t("common:greeting")}</h1>
      <h1 className="text-3xl mt-10">{t("common:greeting")}</h1>
      <h1 className="text-3xl mt-10">{t("common:greeting")}</h1>
      <h1 className="text-3xl mt-10">{t("common:greeting")}</h1>
    </div>
    </Layout>
  );
};

export default Home;
