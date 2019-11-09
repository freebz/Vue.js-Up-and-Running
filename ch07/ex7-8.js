const wrapper = mount(BlogPost, {
  slots: {
    default: BlogContentComponent,
    header: '<h2>Blog post title</h2>'
  },
  propsData: {
    author: blogAuthor
  }
});
