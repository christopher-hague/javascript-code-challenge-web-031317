// create an element to display each comment. This element will contain a series of <ul>'s for each comment in a Commentlist
$(document).ready(function(){
  $("#note-form").on("submit", function(event) {
    event.preventDefault()
    var text = $("#user_input").val()
    var newCommentList = new CommentList()
    var newComment = new Comment(text)
    newCommentList.addComment(newComment)
    // displays text of comment to DOM
    $("#comment-list").append(newComment.render())

    // displays comment [object Object] to DOM
    $("#comments").append(newCommentList.render())
  })
})
