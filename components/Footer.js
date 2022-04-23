import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  let { t } = useTranslation();
  let router = useRouter();

  return (
    <footer className="flex justify-center mt-2 z-50 space-x-2">
      <p>© {new Date().getFullYear()}</p>
      <ul className="flex space-x-2">
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              <a>{locale === "zh-TW"? "中文" : "English"}</a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
