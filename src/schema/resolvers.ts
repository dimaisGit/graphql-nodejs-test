import { USERS_FAKE_DATA } from "./fakeData";

const resolvers = {
  Query: {
    users: () => {
      return USERS_FAKE_DATA;
    },
  },
};

export default resolvers;
