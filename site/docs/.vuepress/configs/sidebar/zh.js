export const sidebarZH = {
  "/doc/": [
    {
      text: "文档",
      children: [
        "/doc/README.md",
        "/doc/quick-start.md",
        "/doc/install-detail.md",
        "/doc/download.md",
        "/doc/advanced-use.md",
        {
          text: "其他特性",
          collapsible: true,
          children: [
            "/doc/async.md",
            "/doc/save-log.md",
            "/doc/batch-support.md",
            {
              text: "ognl 表达式用法",
              link: "",
              children: [
                {
                  text: "活用ognl表达式",
                  link: "https://github.com/alibaba/arthas/issues/11",
                },
                {
                  text: "一些ognl特殊用法",
                  link: "https://github.com/alibaba/arthas/issues/71",
                },
              ],
            },
          ],
        },
        {
          text: "命令列表",
          link: "/doc/commands.md",
          collapsible: true,
          children: [
            "/doc/dashboard.md",
            "/doc/getstatic.md",
            "/doc/heapdump.md",
            "/doc/jvm.md",
            "/doc/logger.md",
            "/doc/mbean.md",
            "/doc/memory.md",
            "/doc/ognl.md",
            "/doc/perfcounter.md",
            "/doc/sysenv.md",
            "/doc/sysprop.md",
            "/doc/thread.md",
            "/doc/vmoption.md",
            "/doc/vmtool.md",
            "/doc/classloader.md",
            "/doc/dump.md",
            "/doc/jad.md",
            "/doc/mc.md",
            "/doc/redefine.md",
            "/doc/retransform.md",
            "/doc/sc.md",
            "/doc/sm.md",
            "/doc/monitor.md",
            "/doc/stack.md",
            "/doc/trace.md",
            "/doc/tt.md",
            "/doc/watch.md",
            "/doc/profiler.md",
            "/doc/jfr.md",
            "/doc/auth.md",
            "/doc/options.md",
            "/doc/base64.md",
            "/doc/cat.md",
            "/doc/cls.md",
            "/doc/echo.md",
            "/doc/grep.md",
            "/doc/help.md",
            "/doc/history.md",
            "/doc/keymap.md",
            "/doc/pwd.md",
            "/doc/quit.md",
            "/doc/reset.md",
            "/doc/session.md",
            "/doc/stop.md",
            "/doc/tee.md",
            "/doc/version.md",
          ],
        },
        "/doc/web-console.md",
        "/doc/tunnel.md",
        "/doc/http-api.md",
        "/doc/docker.md",
        "/doc/spring-boot-starter.md",
        "/doc/idea-plugin.md",
        "/doc/faq.md",
        {
          text: "用户案列",
          link: "https://github.com/alibaba/arthas/issues?q=label%3Auser-case",
        },
        {
          text: "Star me at github",
          link: "https://github.com/alibaba/arthas",
        },
        {
          text: "编译调试/参与贡献",
          link: "https://github.com/alibaba/arthas/blob/master/CONTRIBUTING.md",
        },
        {
          text: "Release Notes",
          link: "https://github.com/alibaba/arthas/releases",
        },
        {
          text: "QQ群/钉钉群",
          link: "/doc/contact-us.md",
        },
      ],
    },
  ],
};
