export interface Post {
  _id: string;
  type: 'profilePicture' | 'coverPicture' | null;
  text: string;
  images: string[];
  user: User;
  background: string;
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  picture: string;
  username: string;
  cover: string;
}

export interface Comment {
  comment: string;
  image: string;
  commentBy: User;
  commentAt: Date;
}
