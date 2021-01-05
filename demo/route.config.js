import navConfig from "./nav.config";

const loadDocs = function(path) {
  // return  () => import(/* webpackChunkName: "true" */ `./docs/${path}.md`)
  return () =>
    import(
      /* webpackChunkName: "chunk-[request][index]" */ `./docs/${path}.md`
    );
};

const registerRoute = navConfig => {
  let route = [];
  route.push({
    path: `/component`,
    redirect: `/component/layout`,
    component: () =>
      import(/* webpackChunkName: "component" */ `./pages/component.vue`),
    children: []
  });

  navConfig.forEach(nav => {
    if (nav.href) return;
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav, 0);
        });
      });
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav, 0);
      });
    } else {
      addRoute(nav, 0);
    }
  });

  function addRoute(page, index) {
    const component = loadDocs(page.path);
    let child = {
      path: page.path,
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      name: "component-" + (page.title || page.name),
      component: component.default || component
    };

    route[index].children.push(child);
  }

  return route;
};

let route = registerRoute(navConfig);

let defaultPath = "/component";

route = route.concat([
  {
    path: "/",
    redirect: defaultPath
  },
  {
    path: "*",
    redirect: defaultPath
  }
]);

export default route;
