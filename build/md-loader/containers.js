const mdContainer = require("markdown-it-container");

module.exports = md => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo(:[a-zA-Z]*)?\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const isHide =
          m && m.length > 1 ? (m[1] ? m[1] === ":hide" : false) : false;
        const description = m && m.length > 1 ? m[2] : "";
        const content =
          tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : "";
        return `<demo-block ${isHide ? 'hide' : ""}>
        ${description ? `<div>${md.render(description)}</div>` : ""}
        <!--mo-demo: ${content}:mo-demo-->
        `;
      }
      return "</demo-block>";
    }
  });

  md.use(mdContainer, "tip");
  md.use(mdContainer, "warning");
};
