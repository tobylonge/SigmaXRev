$(document).ready(function () {
  $("#summernote-editor").summernote({
    height: 250, // set editor height
    minHeight: null, // set minimum height of editor
    maxHeight: null, // set maximum height of editor
    focus: false, // set focus to editable area after initializing summernote
  });
  $("#summernote-inline").summernote({
    airMode: true,
  });
});
