import { FC, memo, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getLoginUser } from "../../hooks/getLoginUser";

const ResultComponent = () => {
  const { data, error } = getLoginUser();

  return (
    <>
      <h2>Fetch Login Users Data is below</h2>
      <div>
        <p>{data?.user.id}</p>
        <p>{data?.user.login}</p>
        <p>{data?.user.url}</p>
      </div>
    </>
  );
};

export const GraphQLFetch: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <Suspense fallback={<p>厄介な広告ページの表示</p>}>
        <ResultComponent />
      </Suspense>
      <button onClick={onClickHome}>to HOME</button>
    </>
  );
});
