function emailCheck(email) {
  const rgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(rgx);
}

function nameCheck(name) {
  const rgx = /^[a-zA-Z ]/;
  return name.match(rgx);
}

function msgCheck(msg) {
  const rgx = /[A-Za-z0-9\w\.'?!,@$#\-_\n\r]/;
  return msg.match(rgx);
}

export function formValidator(data) {
  const { name, email, message } = data;
  let errors = { name: null, email: null, message: null };

  // check name
  if (name.length === 0) {
    errors.name = "name is required";
  } else if (!nameCheck(name)) {
    errors.name = "invalid characters entered";
  }

  // check email
  if (email.length === 0) {
    errors.email = "email is required";
  } else if (!emailCheck(email)) {
    errors.email = "incorrect email format";
  }

  // check message
  if (message.length < 10) {
    errors.message = "message is too short min length 10 characters";
  } else if (!msgCheck(message)) {
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