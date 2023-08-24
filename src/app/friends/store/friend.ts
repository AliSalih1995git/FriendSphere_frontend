export interface Friend {
  _id: string;
  first_name: string;
  last_name: string;
  username: string;
  picture: string;
}
export interface FriendApiResponse {
  friends: Friend[];
  requests: Friend[];
  sentRequests: Friend[];
}
