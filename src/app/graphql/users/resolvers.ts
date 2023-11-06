const queries = {};
const mutations = {
  createUser: async (
    _: any,
    { firstName: string }: Record<string, unknown>
  ) => {
    return "randomId";
  },
};
const resolvers = {
  queries,
  mutations,
};
export default resolvers;
