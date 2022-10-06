function capitalize(string) {
    string = string.replace(string.charAt(0), string.charAt(0).toUpperCase());
    return string;
  }
  module.exports = capitalize;