render() {
  const props = {
    class: 'world',
    href: 'https://www.oreilly.com/'
  };

  return (
    <a class="hello" {...props}>O'Reilly Media</a>
  );
}
