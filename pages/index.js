import { ProtectRoute } from "../components/context/Auth";
import HomeComp from "./home";
import useSWR from 'swr';

function Home() {
  const { user, loading } = useAuth();
  const { data: { data: pages } = {}, isValidating } = useSWR(
    loading ? false : "/pages",
    api.get
  );

  const showSkeleton = isValidating || loading;
  return <HomeComp />;
}

export default ProtectRoute(Home);
