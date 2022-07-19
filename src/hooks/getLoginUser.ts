import { GraphQLClient } from "graphql-request";
import useSWR from "swr";
import { GitHubData } from "../types/GitHubData";

const getLoginUserQuery = `
query loginUserQuery(
  $loginUser: String!
  ) { 
  user(login: $loginUser){
    id
    login
    url
  }
}
`;
const loginUser = "hiroharu8864";

export const getLoginUser = () => {
  const access_token = "ghp_token";
  const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      Authorization: `bearer ${access_token}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  const { data, error } = useSWR<GitHubData>(
    [getLoginUserQuery, loginUser],
    (query, login) => client.request(query, { loginUser: login }),
    {
      suspense: true
    }
  );

  return { data, error };
};
