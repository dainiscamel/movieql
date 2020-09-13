// resolver란 ? Query를 해결함

import { people } from "./db"


const resolvers = {
  Query: {
   people: () => people
 }
};
export default resolvers;