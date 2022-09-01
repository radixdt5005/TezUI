
        import header from "/@/components/header.vue";import components from "/@/components/components.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/components","slots":{"default":[{"name":"components","data":{"componentName":"components"},"id":"0-components"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Blogs Site","canonical":"http://localhost:3000/components","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"components":components,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/components/post.js")
            })
        }    