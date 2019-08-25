(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1476:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var v=a(31),o=Object(v.a)({},r,[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("常见问题")]),e._v(" "),a("p",[e._v("以下整理了一些 Ant Design Vue 社区常见的问题和官方答复，在提问之前建议找找有没有类似的问题。")]),e._v(" "),a("h3",{attrs:{id:"你们会提供-Sass/Stylus-等格式的样式文件吗？"}},[e._v("你们会提供 Sass/Stylus 等格式的样式文件吗？ "),a("a",{staticClass:"anchor",attrs:{href:"#你们会提供-Sass/Stylus-等格式的样式文件吗？","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),a("p",[e._v("不。事实上你可以使用工具（请自行 Google）将 Less 转换成 Sass/Stylus 等。")]),e._v(" "),a("h3",{attrs:{id:"当我点击-Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-内的另一个-popup-组件时它会消失，如何解决？"}},[e._v("当我点击 "),a("code",{pre:!0},[e._v("Select Dropdown DatePicker TimePicker Popover Popconfirm")]),e._v(" 内的另一个 popup 组件时它会消失，如何解决？ "),a("a",{staticClass:"anchor",attrs:{href:"#当我点击-Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-内的另一个-popup-组件时它会消失，如何解决？","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),a("p",[e._v("使用 "),a("code",{pre:!0},[e._v('<a-select :getPopupContainer="trigger => trigger.parentNode">')]),e._v(" 来在 Popover 中渲染组件，或者使用其他的 getXxxxContainer 参数。")]),e._v(" "),a("h3",{attrs:{id:"Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-会跟随滚动条上下移动？"}},[a("code",{pre:!0},[e._v("Select Dropdown DatePicker TimePicker Popover Popconfirm")]),e._v(" 会跟随滚动条上下移动？ "),a("a",{staticClass:"anchor",attrs:{href:"#Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-会跟随滚动条上下移动？","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),a("p",[e._v("使用 "),a("code",{pre:!0},[e._v('<a-select :getPopupContainer="trigger => trigger.parentNode">')]),e._v(" 来将组件渲染到滚动区域内，或者使用其他的 getXxxxContainer 参数。")]),e._v(" "),a("h3",{attrs:{id:"Form表单不支持双向绑定，不能使用v-model？"}},[a("code",{pre:!0},[e._v("Form")]),e._v("表单不支持双向绑定，不能使用"),a("code",{pre:!0},[e._v("v-model")]),e._v("？ "),a("a",{staticClass:"anchor",attrs:{href:"#Form表单不支持双向绑定，不能使用v-model？","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),a("p",[e._v("第一、我们不推荐在Form中使用双向绑定，同一份数据可能在多处使用，如果使用双向绑定，那么数据的修改会同时同步到各个组件，但这并不是我们想要的， 你应该在表单提交成功或失败或确认时同步数据，使用非双向绑定的表单，你会拥有最大限度的控制数据修改/同步的权限。")]),e._v(" "),a("p",[e._v("第二、如果你不使用表单的自动校验/收集功能，即没有使用"),a("code",{pre:!0},[e._v("v-decorator")]),e._v("修饰过得组件，你依然可以使用"),a("code",{pre:!0},[e._v("v-model")]),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"如何修改-Ant-Design-Vue-的默认主题？"}},[e._v("如何修改 Ant Design Vue 的默认主题？ "),a("a",{staticClass:"anchor",attrs:{href:"#如何修改-Ant-Design-Vue-的默认主题？","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),a("p",[e._v("参考"),a("a",{attrs:{href:"/docs/vue/customize-theme/"}},[e._v("主题定制")]),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"如何配置-webpack-以优化-momentjs-的打包大小？"}},[e._v("如何配置 webpack 以优化 momentjs 的打包大小？ "),a("a",{staticClass:"anchor",attrs:{href:"#如何配置-webpack-以优化-momentjs-的打包大小？","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),a("p",[e._v("参考：https://github.com/jmblog/how-to-optimize-momentjs-with-webpack 。")]),e._v(" "),a("h3",{attrs:{id:"当我动态改变-defaultValue,defaultOpenKeys,-initialValue等defaultXxxx的时候它并没有生效。"}},[e._v("当我动态改变 "),a("code",{pre:!0},[e._v("defaultValue")]),e._v(","),a("code",{pre:!0},[e._v("defaultOpenKeys")]),e._v(", "),a("code",{pre:!0},[e._v("initialValue")]),e._v("等"),a("code",{pre:!0},[e._v("defaultXxxx")]),e._v("的时候它并没有生效。 "),a("a",{staticClass:"anchor",attrs:{href:"#当我动态改变-defaultValue,defaultOpenKeys,-initialValue等defaultXxxx的时候它并没有生效。","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),a("p",[a("code",{pre:!0},[e._v("Input")]),e._v("/"),a("code",{pre:!0},[e._v("Select")]),e._v(" 等的 "),a("code",{pre:!0},[e._v("defaultXxxx")]),e._v("（例如 "),a("code",{pre:!0},[e._v("defaultValue")]),e._v("）只有在组件第一次渲染的时候有效，此特性参考自"),a("a",{attrs:{href:"https://reactjs.org/docs/forms.html#controlled-components"}},[e._v("React")]),e._v("。"),a("br"),e._v("\n切记：第一次、第一次、第一次...."),a("br")]),e._v(" "),a("h3",{attrs:{id:"当我设置了-Input/Select-等的-value-时它就无法修改了。"}},[e._v("当我设置了 "),a("code",{pre:!0},[e._v("Input")]),e._v("/"),a("code",{pre:!0},[e._v("Select")]),e._v(" 等的 "),a("code",{pre:!0},[e._v("value")]),e._v(" 时它就无法修改了。 "),a("a",{staticClass:"anchor",attrs:{href:"#当我设置了-Input/Select-等的-value-时它就无法修改了。","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),a("p",[e._v("尝试使用 "),a("code",{pre:!0},[e._v("defaultValue")]),e._v(" 或 "),a("code",{pre:!0},[e._v("change")]),e._v(" 或 "),a("code",{pre:!0},[e._v("v-model")]),e._v(" 来改变 "),a("code",{pre:!0},[e._v("value")]),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"ant-design-vue-覆盖了我的全局样式！"}},[e._v("ant-design-vue 覆盖了我的全局样式！ "),a("a",{staticClass:"anchor",attrs:{href:"#ant-design-vue-覆盖了我的全局样式！","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),a("p",[e._v("是的，ant-design-vue 在设计的时候就是用来开发一个完整的应用的，为了方便，我们覆盖了一些全局样式，现在还不能移除，想要了解更多请追踪这个 issue：https://github.com/ant-design/ant-design/issues/4331 ，或者参考这个教程 "),a("a",{attrs:{href:"docs/react/customize-theme#How-to-avoid-modifying-global-styles-?"}},[e._v("How to avoid modifying global styles?")])]),e._v(" "),a("h3",{attrs:{id:"ant-design-vue-在移动端体验不佳。"}},[a("code",{pre:!0},[e._v("ant-design-vue")]),e._v(" 在移动端体验不佳。 "),a("a",{staticClass:"anchor",attrs:{href:"#ant-design-vue-在移动端体验不佳。","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),a("p",[a("code",{pre:!0},[e._v("ant-design-vue")]),e._v(" 并非针对移动端设计。")])])}],!1,null,null,null);o.options.__file="docs/vue/faq.zh-CN.md";t.default=o.exports}}]);