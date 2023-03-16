import type { NextPage } from "next";
import DashboardHeader from "@/components/Dashboard/DashboardHeader.tsx/DashboardHeader";
import { GetServerSideProps } from "next";
import { Cookies, Pages, Routes } from "@/constants/enums";
import { CookieValueTypes, getCookie } from "cookies-next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import UserDashboard from "@/components/UserDashboard";

export interface PostPageQuery extends ParsedUrlQuery {
  page?: string;
  sort_by?: string;
  sort_order?: string;
  slug?: string;
}

const Dashboard: NextPage = () => {
  const router = useRouter();
  const query = router.query as PostPageQuery;

  return (
    <>
      <DashboardHeader />
      <UserDashboard slug={query.slug!} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookieSession: CookieValueTypes = getCookie(Cookies.ACCESS_TOKEN, {
    req,
    res,
  });

  if (!cookieSession) {
    return {
      redirect: {
        destination: `/${Routes.ACCOUNTS}/${Pages.LOGIN}`,
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Dashboard;
