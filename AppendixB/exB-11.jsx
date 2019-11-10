render(h) {
  return (
    <ul>
      {this.items.map((item) => (
	<li class={{ active: item.selected }}>
	  {item.text}
	</li>
      ))}

      {this.items.length ? null : (
	<li>There are no items</li>
      )}
    </ul>
  );
}
