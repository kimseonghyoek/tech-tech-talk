/* eslint-disable no-useless-escape */
import error_msg from "../../err_msg/error_msg";

interface validate {
  nameValidate: (name: string, post: boolean) => string | undefined;
  emailValidate: (email: string, post: boolean) => string | undefined;
  nicknameValidate: (nickname: string, post: boolean) => string | undefined;
  phonenumValidate: (phonenum: string, post: boolean) => string | undefined;
  passwordValidate: (pw: string, post: boolean) => string | undefined;
  reCheckPwValidate: (
    pw: string,
    rePw: string,
    post: boolean
  ) => string | undefined;
}

export const ValidateCommon: validate = {
  nameValidate: function (name: string, post: boolean) {
    const name_regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (name.match(name_regExp) || name.length >= 21) {
      post = false;
      return error_msg.WRONG_NICK_FORMAT;
    } else if (name === "") {
      post = false;
      return error_msg.EMPTY_NICK_SPACE;
    }
    return "";
  },
  emailValidate: function (email: string, post: boolean) {
    const email_regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!email.match(email_regExp) || email.length >= 51) {
      post = false;
      return error_msg.WRONG_EMAIL_FORMAT;
    } else if (email === "") {
      post = false;
      return error_msg.EMPTY_EMAIL_SPACE;
    }
    return "";
  },
  nicknameValidate: function (nickname: string, post: boolean) {
    const nickname_regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (nickname.match(nickname_regExp) || nickname.length >= 35) {
      post = false;
      return error_msg.WRONG_NAME_FORMAT;
    } else if (nickname === "") {
      post = false;
      return error_msg.EMPTY_NAME_SPACE;
    }
    return "";
  },
  phonenumValidate(phonenum: string, post: boolean) {
    const number_regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (!phonenum.match(number_regExp) || phonenum.length >= 12) {
      post = false;
      return error_msg.WRONG_NUMBER_FORMAT;
    } else if (phonenum === "") {
      return error_msg.EMPTY_NUMBER_SPACE;
    }
    return "";
  },
  passwordValidate(pw: string, post: boolean) {
    const pw_regExp =
      /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if (!pw.match(pw_regExp) || pw.length >= 30) {
      post = false;
      return error_msg.WRONG_PW_FORMAT;
    } else if (pw === "") {
      return error_msg.EMPTY_PW_SPACE;
    }
    return "";
  },
  reCheckPwValidate(pw: string, rePw: string, post: boolean) {
    if(pw !== rePw) {
      post = false;
      return error_msg.FAIL_MATCH_PW;
    }
    return "";
  },
};
