export class Stack {
  private wmkey = {};
  private items = new WeakMap();

  constructor() {
    this.items.set(this.wmkey, []);
  }

  push(element) {
    const stack = this.items.get(this.wmkey);
    stack.push(element);
  }

  pop() {
    const stack = this.items.get(this.wmkey);
    return stack.pop();
  }

  peek() {
    const stack = this.items.get(this.wmkey);
    return stack[stack.length - 1];
  }

  clear() {
    this.items.set(this.wmkey, []);
  }

  size() {
    return this.items.get(this.wmkey).length;
  }
}
