/* eslint-disable no-useless-escape */
import error_msg from "../../err_msg/error_msg";

interface validate {
  nameValidate: (name: string, post: boolean) => string | undefined;
}

export const ValidateCommon: validate = {
  nameValidate: function(name: string, post: boolean) {
    const name_regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if(name.match(name_regExp) || name.length >= 51) {
      post = false;
      return error_msg.WRONG_NAME_FORMAT;
    } else if (name === "") {
      post = false;
      return error_msg.EMPTY_NAME_SPACE;
    }
    return "";
  },
};
