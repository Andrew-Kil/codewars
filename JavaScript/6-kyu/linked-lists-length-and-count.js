// https://www.codewars.com/kata/linked-lists-length-and-count/train/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let tracker = 0;
  while (head) {
    head = head.next;
    tracker++;
  }
  return tracker;
}

function count(head, data) {
  let tracker = 0;
  while (head) {
    if (data === head.data) tracker++;
    head = head.next;
  }
  return tracker;
}
