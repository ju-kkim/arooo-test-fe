export type Likes = number;

export type Content = {
  id: string;
  title: string;
  likes: Likes;
};

export type ContentDetail = Content & {
  content: string;
};
