import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const GraphQLFetch: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <p>SWR FetchCheck</p>
      <button onClick={onClickHome}>to HOME</button>
    </>
  );
});
