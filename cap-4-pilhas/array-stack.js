class StackArr {
  constructor() {
    this.items = [];
  }

  // adicionar elemento
  push(element) {
    this.items.push(element);
  }

  // remover ultimo elemento
  pop() {
    this.items.pop();
  }

  // retorna ultimo elemento array
  peek() {
    return this.items[this.items.length - 1];
  }

  // retorna se esta vazio
  isEmpty() {
    return this.items.length === 0;
  }

  // retorna tamanho
  size() {
    return this.items.length;
  }

  // remove todos
  clear() {
    this.items = [];
  }
}

const stackArr = new StackArr();

console.log(stackArr.isEmpty());

stackArr.push(5);
stackArr.push(8);

console.log(stackArr.peek());

stackArr.push(11);

console.log(stackArr.size());
console.log(stackArr.isEmpty());

stackArr.push(15);

stackArr.pop();
stackArr.pop();

console.log(stackArr.size());
