<template>
  <!--Comment Modal -->
  <div
    class="modal fade"
    id="Comment"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleCommentLongTitle">
            Leave a Comment
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="Comment-name"
              placeholder="Your Name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="Comment-email"
              placeholder="Email Address"
            />
          </div>
          <div class="form-group mb-0">
            <textarea
              class="form-control"
              name="example-textarea-input"
              rows="6"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-success">Send</button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Comment Modal -->
</template>

<script>
export default {
  name: "CommentModal"
};
</script>

<style></style>
