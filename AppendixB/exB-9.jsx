// JSX Versus Templates

render() {
  return (
    <ul>
      {this.state.items.map((item) => (
	<li className={classNames({ active: item.selected })}>
	  {item.text}
	</li>
      ))}

      {this.state.items.length ? null : (
	<li>There are no items</li>
      )}
    </ul>
  );
}
