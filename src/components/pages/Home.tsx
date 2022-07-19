import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickFetchCheck = useCallback(() => {
    navigate("/fetch");
  }, [navigate]);
  return (
    <>
      <p>SWR FetchCheck</p>
      <button onClick={onClickFetchCheck}>GraphQL API Response Check</button>
    </>
  );
});
