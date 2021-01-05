const {
  stripScript,
  stripTemplate,
  genInlineComponentText
} = require("./util");
const md = require("./config");

module.exports = function(source) {
  const content = md.render(source);
  // containers.js插件处理demo标签时将:::demo容器里面添加了内容的copy <!--mo-demo: ${content}:mo-demo-->
  const startTag = "<!--mo-demo:";
  const startTagLen = startTag.length;
  const endTag = ":mo-demo-->";
  const endTagLen = endTag.length;

  let componenetsString = "";
  let id = 0; // demo 的 id
  let output = []; // 输出的内容
  let start = 0; // 字符串开始位置

  let commentStart = content.indexOf(startTag);
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart));

    const commentContent = content.slice(
      commentStart + startTagLen,
      commentEnd
    );
    // 分别取出template和script标签里面的内容
    const html = stripTemplate(commentContent);
    const script = stripScript(commentContent);
    let demoComponentContent = genInlineComponentText(html, script);
    const demoComponentName = `mo-demo${id}`;
    output.push(`<template slot="source"><${demoComponentName} /></template>`);
    componenetsString += `${JSON.stringify(
      demoComponentName
    )}: ${demoComponentContent},`;

    // 重新计算下一次的位置
    id++;
    start = commentEnd + endTagLen;

    commentStart = content.indexOf(startTag, start);
    commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  }

  let pageScript = "";
  if (componenetsString) {
    pageScript = `<script>
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`;
  } else if (content.indexOf("<script>") === 0) {
    // 硬编码，有待改善
    start = content.indexOf("</script>") + "</script>".length;
    pageScript = content.slice(0, start);
  }

  output.push(content.slice(start));
  return `
    <template>
      <section class="content reasy-doc">
        ${output.join("")}
        <side-link></side-link>
      </section>
    </template>
    ${pageScript}
  `;
};
