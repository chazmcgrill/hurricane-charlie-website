export function formValidator(data) {
  const { name, email, message } = data;
  const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nameRegx = /^[a-zA-Z ]/;
  const msgRegx = /[^A-Za-z0-9 .'?!,@$#\-_\n\r]/;
  let errors = { name: null, email: null, message: null };

  // check name
  if (name.length === 0) {
    errors.name = "name is required";
  } else if (!name.match(nameRegx)) {
    errors.name = "invalid characters entered";
  }

  // check email
  if (email.length === 0) {
    errors.email = "email is required";
  } else if (!email.match(emailRegx)) {
    errors.email = "incorrect email format";
  }

  // check message
  if (message.length < 10) {
    errors.message = "message is too short min length 10 characters";
  } else if (msgRegx.test(message)) {
    errors.message = "invalid characters entered"
  }

  const isValid = (() => {
    for (let e in errors) {
      if (errors[e]) return false;
    }
    return true;
  })();

  // return
  return { errMsgs: errors, isValid };
}