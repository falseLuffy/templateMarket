
exports.default = async function (context) {
  const fs = require("fs");
  const localeDir = context.appOutDir + "/locales/";

  fs.readdir(localeDir, function (err, files) {
    //files is array of filenames (basename form)
    if (!(files && files.length)) return;
    for (let i = 0, len = files.length; i < len; i++) {
      // zh 和 en 开头的都不删
      if (!(files[i].startsWith("zh-CN"))) {
        fs.unlinkSync(localeDir + files[i]);
      }
    }
  });
};
