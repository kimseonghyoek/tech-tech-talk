/* eslint-disable no-useless-escape */
import error_msg from "../../err_msg/error_msg";

interface validate {
  nameValidate: (name: string, post: boolean) => string | undefined;
  emailValidate: (email: string, post: boolean) => string | undefined;
}

export const ValidateCommon: validate = {
  nameValidate: function(name: string, post: boolean) {
    const name_regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if(name.match(name_regExp) || name.length >= 21) {
      post = false;
      return error_msg.WRONG_NICK_FORMAT;
    } else if (name === "") {
      post = false;
      return error_msg.EMPTY_NICK_SPACE;
    }
    return "";
  },
  emailValidate: function(email: string, post: boolean) {
    const email_regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(email.match(email_regExp) || email.length >= 51) {
      post = false;
      return error_msg.WRONG_EMAIL_FORMAT;
    } else if (email === "") {
      post = false;
      return error_msg.EMPTY_EMAIL_SPACE;
    }
    return "";
  },
};
