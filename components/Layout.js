import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  let { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("common:i18n Example")}</title>
      </Head>
      <div className="pb-20 h-screen">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
