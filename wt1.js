"use latest";

import util from "util";

module.exports = (ctx, cb) => {
  //console.log(util.inspect(ctx.body, {depth:null}));
  console.log(util.inspect(ctx.body.issue.url));
  cb();
};
