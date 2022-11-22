// Next
import fs from "fs/promises";
import path from "path";
import { getCookie, hasCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// Components
import Layout from "../../components/layout/Layout";
import CategorySection from "../../components/sections/Category.sections";
import NewestSection from "../../components/sections/Newest.Section";
import PopularSection from "../../components/sections/Popular.sections";

const CatalogPage = (props) => {
  // Data Props
  const { category, subscription } = props;
  // Hooks
  const router = useRouter();
  const cookieUser = getCookie("user");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (hasCookie("user")) {
      setUser(JSON.parse(cookieUser));
    } else {
      router.push("/signin");
    }
  }, []);

  return (
    <Layout>
      <CategorySection category={category} />
      <PopularSection data={subscription} />
      <NewestSection data={subscription} />
    </Layout>
  );
};

export async function getStaticProps(context) {
  // import dummy data
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data)
    return {
      notFound: true,
    };

  return {
    props: {
      category: data.category,
      subscription: data.subscription,
    },
  };
}

export default CatalogPage;
