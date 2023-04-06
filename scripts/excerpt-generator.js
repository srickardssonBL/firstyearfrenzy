hexo.extend.filter.register('before_post_render', function(data) {
  if (!data.excerpt) {
    data.excerpt = data.content.slice(0, 200);
  }
});
