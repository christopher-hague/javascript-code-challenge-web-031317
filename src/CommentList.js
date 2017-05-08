// 3. create a constructor for a `CommentList`. New comment lists should initialize with an array of comments (this will be empty to start).
// 4. instances of CommentList should have a method called 'render' that returns a string of a `ul`. Inside of the ul, the comment list should include the return value of the render method of all of it's comments.
// 5. instances of CommentList should have a method called 'addComment' that takes in a string. It should instantiate a new Comment and add it to the CommentList's array of comments.

class CommentList {
  constructor() {
    this.comments = []
  }

  render() {
    var result = "<ul>"
    this.comments.forEach(function(comment) {
      result += `<p>${comment.text}</p>`
    })
    result += "</ul>"
    return result
  }

  addComment(str) {
    const newComment = new Comment(str)
    this.comments.push(newComment)
  }
}
