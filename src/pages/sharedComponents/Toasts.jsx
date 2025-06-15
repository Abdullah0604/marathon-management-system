import Swal from "sweetalert2";

function confirmationAlert(msg, btnText) {
  return Swal.fire({
    title: "Are you sure?",
    text: msg ? msg : "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: btnText ? btnText : "Yes, delete it!",
  });
}

function successAlert(title, successMsg) {
  return Swal.fire({
    title: title,
    text: successMsg,
    icon: "success",
  });
}

export { confirmationAlert, successAlert };
