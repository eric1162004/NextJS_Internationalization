import useTranslation from "next-translate/useTranslation";
import Layout from "../components/Layout";

const About = () => {
  let { t } = useTranslation();
  return (
    <Layout>
      <div className="my-10 md:w-1/2 mx-4 md:mx-auto p-5 border-2 rounded-md">
        <img
          src="/eric_profile.jpg"
          alt="Picture of the author"
          className="rounded-md w-50 h-50 mx-auto my-2"
        />
        <h1 className="text-3xl my-4">{t("common:About")}</h1>
        <p className="">{t("about:introduction", { name: "Eric", age: 99 })}</p>
      </div>
    </Layout>
  );
};

export default About;
