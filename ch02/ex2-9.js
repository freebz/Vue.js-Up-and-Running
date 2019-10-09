price: {
  type: Number,
  required: true,
  validator(value) {
    return value >= 0;
  }
}
