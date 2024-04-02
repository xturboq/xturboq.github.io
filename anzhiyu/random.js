var posts=["2024/03/31/hello-world/","2024/03/31/第一篇文章/","2024/04/02/Redis 入门/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };