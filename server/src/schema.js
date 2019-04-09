const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    posts: [Post]
    post(id: Int!): Post!
  }

  type Mutation {
    createUser(email: String!, first_name: String!, last_name: String): User!
    createPost(title: String, describtion: String, link: String, price: Int, image_path: String, vincode: String): Post!
    updatePost(id: Int!, title: String, link: String, price: Int!, describtion: String, image_path: String, vincode: String): Post!
    deletePost(id: Int!): Post!

  }

  #
  type User {
    id: ID!
    email: String!
    first_name: String
    last_name: String
  }

  type Post {
    id: ID!
    vincode: String
    title: String
    describtion: String
    link: String
    price: Int
    image_path: String
    createdAt: String
    updatedAt: String
    userId: String
  }
`;

module.exports = {
  typeDefs
};
