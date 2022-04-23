import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const Navbar = () => {
  let { t } = useTranslation();
  return (
    <header>
      <nav className="flex justify-center justify-items-center items-center h-16 bg-slate-600 text-white space-x-2 text-2xl z-50">
        <Link href="/">
          <a className="">{t("common:Home")}</a>
        </Link>

        <Link href="/about">
          <a>{t("common:About")}</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
