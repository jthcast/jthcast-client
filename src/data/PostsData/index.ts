export interface PostsDataProps {
  seq: string;
  title: string;
  tags?: string[];
  content: string;
  date: string;
  image?: string;
  series?: string;
}

const postsData: Array<PostsDataProps> = [];

const recentPosts = postsData.filter((post, index) => index < 3);

export { postsData, recentPosts };
