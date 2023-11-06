import mutations from "./mutations";
import queries from "./queries";

const typeDefs = `
type Query {
   ${queries}
}
type Mutation {
    ${mutations}
}
`;

export default typeDefs;
