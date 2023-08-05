/* eslint-disable no-sequences */
import { rest } from 'msw';
import contentData from './data.json';

type Data = {
  id: string;
  title: string;
  likes: number;
  content: string;
  isLike: boolean;
};

export const handlers = [
  rest.get('/library/content', (req, res, ctx) => {
    const skip = req.url.searchParams.get('skip');
    const limit = req.url.searchParams.get('limit');

    if (skip !== null && limit !== null) {
      const slicedData = contentData.slice(parseInt(skip), parseInt(skip) + parseInt(limit));
      const responseData = getContents(slicedData);
      return res(ctx.status(200), ctx.json(responseData));
    }

    const responseData = getContents(contentData);
    return res(ctx.status(200), ctx.json(responseData));
  }),

  rest.get('/library/content/:contentId', (req, res, ctx) => {
    const { contentId } = req.params;

    const viewContent = contentData.find((content) => content.id === contentId);

    return res(ctx.status(200), ctx.json(viewContent));
  }),

  rest.post('/library/content/:contentId/like', (req, res, ctx) => {
    const { contentId } = req.params;

    const contentIdx = contentData.findIndex((content) => content.id === contentId);
    const content = contentData[contentIdx];
    const currentLikes = content.likes;
    const currentIsLike = content.isLike;

    const updateLikes = currentIsLike ? currentLikes - 1 : currentLikes + 1;

    const updateContent = {
      ...content,
      isLike: !currentIsLike,
      likes: updateLikes,
    };

    contentData[contentIdx] = updateContent;

    const likeInfo = {
      isLike: !currentIsLike,
      likes: updateLikes,
    };

    return res(ctx.status(200), ctx.json(likeInfo));
  }),
];

function getContents(arr: Data[]) {
  return arr.map((content) => ({
    id: content.id,
    title: content.title,
    likes: content.likes,
    isLike: content.isLike,
  }));
}
