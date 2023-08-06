# Arooo test FE

## 목차

1. [Preview](#preview)
2. [Backlog](#backlog)
3. [구현 내용](#구현-내용)

<br />

# Preview

https://github.com/ju-kkim/payhere-test-fe/assets/68211156/7cd9da42-3398-42a2-8372-31fb583cb1f8

- [x] 목록 화면
- [x] 상세페이지 이동
- [x] 좋아요 업데이트
- [x] 상세페이지, 목록페이지 좋아요 연동

<br />

# Backlog

User Story 노션에 작성.  
[🔗Backlog 링크](https://energetic-cowl-a8c.notion.site/Backlog-8cfdb2e0af3f4bde85cbe9050b7946db?pvs=4)

<br />

# 구현 내용

## 목록, 상세 페이지

react-router-dom 사용.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/view/:contentId" element={<View />} />
</Routes>
```

Link 사용하여 view 페이지 이동.  
a태그 안에 button태그 넣을 수 없으므로 Title만 Link 하위로 작성.

```jsx
const ListItem = ({ id, title, likes, isLike }: Content) => {
  return (
    <Item>
      <Link to={`/view/${id}`}>
        <Title text={title} />
      </Link>
      <Like id={id} likes={likes} isLike={isLike} />
    </Item>
  );
};
```

## MSW

API Endpoint 작동이 되지 않기 때문에 Mock Data륾 만들어 MSW를 사용.  
명세서에 작성해 주신 id, title, likes, content 외에 좋아요 기능 구현 시 isLike 값이 필요하다고 생각하여 추가.
`src/mocks/handlers.ts` 파일에 Mock Data 사용하여 `GET`, `POST` 기능 구현

```json
[
  {
    "id": "1",
    "title": "title_1",
    "likes": 7,
    "content": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "isLike": false
  },
  ...(중략)
]
```

## 무한스크롤

skip, limit query 사용하여 데이터 나누어 가져오도록 구현.  
throttle 사용하여 scroll 이벤트를 제어할 수 있도록 구현. (`src/utils/throttle.ts`)

```jsx
const url = `/library/content?${querySkip}&${queryLimit}`;

const fetchMoreData = async () => {
  if (isEndData || isLoading) return;
  setIsLoading(true);

  try {
    const newContents = await fetchData<Content[]>(url);
    if (newContents.length < LIMIT) {
      setIsEndData(true);
    }
    setContents((prevContent) => [...prevContent, ...newContents]);
    skip.current += LIMIT;
  } catch (error) {
    throw new Error('ERROR CONTENTS');
  } finally {
    setIsLoading(false);
  }
}

const scrollFetchMoreData = throttle(() => {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - INTERVAL) {
    fetchMoreData();
  }
}, DELAY);
```

## 좋아요

요청 내용에는 좋아요 버튼을 누를 때마다 카운트가 올라가는 것이었지만,  
좋아요 기능은 토글 기능이 맞는 동작이라 생각되어 토글 방식으로 구현.

likes 만으로 사용자가 좋아요를 했었는지 안 했는지 판별할 수 없으므로 isLike 값이 필요하여 추가하여 구현.

```jsx
const Like = ({ id, likes, isLike }: LikeProps) => {
  const [isLikeState, setIsLikeState] = useState(isLike);
  const [likeNum, setLikeNum] = useState(likes);

  const clickLike = async () => {
    const { likes, isLike } = await fetchData<{ likes: Likes; isLike: boolean }>(
      `/library/content/${id}/like`,
      { method: 'POST' }
    );

    setIsLikeState(isLike);
    setLikeNum(likes);
  };

  return (
    <Button onClick={clickLike} buttonStyle={LikeStyle}>
      <span>{isLikeState ? '❤️' : '🤍'}</span>
      <span>{likeNum}</span>
    </Button>
  );
};
```

```ts
// src/mocks/handler.ts
// response data에 isLike 추가

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
```
