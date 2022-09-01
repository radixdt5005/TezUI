
        import header from "/@/components/header.vue";import article from "/@/components/article.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/articles/what-s-inside-a-black-hole","slots":{"default":[{"name":"article","data":{"title":"What's inside a Black Hole","content":"<p>Well, we don't know yet...</p><p>Oct 8th 20</p>","slug":"/articles/what-s-inside-a-black-hole","componentName":"article","updatedAt":"2022-08-23T10:27:41.780Z","image":{"name":"what_s_inside_a_black_hole","alternativeText":"what_s_inside_a_black_hole","caption":"what_s_inside_a_black_hole","width":800,"height":466,"formats":{"thumbnail":{"name":"thumbnail_what_s_inside_a_black_hole","hash":"thumbnail_what_s_inside_a_black_hole_e338016a25","ext":".jpg","mime":"image/jpeg","width":245,"height":143,"size":1.55,"url":"/uploads/thumbnail_what_s_inside_a_black_hole_e338016a25.jpg"},"medium":{"name":"medium_what_s_inside_a_black_hole","hash":"medium_what_s_inside_a_black_hole_e338016a25","ext":".jpg","mime":"image/jpeg","width":750,"height":437,"size":6.94,"url":"/uploads/medium_what_s_inside_a_black_hole_e338016a25.jpg"},"small":{"name":"small_what_s_inside_a_black_hole","hash":"small_what_s_inside_a_black_hole_e338016a25","ext":".jpg","mime":"image/jpeg","width":500,"height":291,"size":3.88,"url":"/uploads/small_what_s_inside_a_black_hole_e338016a25.jpg"}},"hash":"what_s_inside_a_black_hole_e338016a25","ext":".jpg","mime":"image/jpeg","size":7.5,"url":"/uploads/what_s_inside_a_black_hole_e338016a25.jpg","updatedAt":"2022-08-23T10:27:41.563Z"},"categories":[{"name":"News","slug":"/categories/news","updatedAt":"2022-08-23T10:27:40.553Z"}],"author":{"name":"Sarah Baker","info":"Profession Writer","slug":"authors/sarah-baker","updatedAt":"2022-08-23T10:27:41.085Z","picture":{"name":"sarahbaker","alternativeText":"sarahbaker","caption":"sarahbaker","width":3321,"height":2746,"formats":{"thumbnail":{"name":"thumbnail_sarahbaker","hash":"thumbnail_sarahbaker_130e1acce9","ext":".jpg","mime":"image/jpeg","width":189,"height":156,"size":6.68,"url":"/uploads/thumbnail_sarahbaker_130e1acce9.jpg"},"large":{"name":"large_sarahbaker","hash":"large_sarahbaker_130e1acce9","ext":".jpg","mime":"image/jpeg","width":1000,"height":827,"size":102.01,"url":"/uploads/large_sarahbaker_130e1acce9.jpg"},"medium":{"name":"medium_sarahbaker","hash":"medium_sarahbaker_130e1acce9","ext":".jpg","mime":"image/jpeg","width":750,"height":620,"size":61.35,"url":"/uploads/medium_sarahbaker_130e1acce9.jpg"},"small":{"name":"small_sarahbaker","hash":"small_sarahbaker_130e1acce9","ext":".jpg","mime":"image/jpeg","width":500,"height":413,"size":30.57,"url":"/uploads/small_sarahbaker_130e1acce9.jpg"}},"hash":"sarahbaker_130e1acce9","ext":".jpg","mime":"image/jpeg","size":794.38,"url":"/uploads/sarahbaker_130e1acce9.jpg","updatedAt":"2022-08-23T10:27:41.069Z"}}},"id":"0-article"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"What's inside a Black Hole","canonical":"http://localhost:3000/articles/what-s-inside-a-black-hole","linkingData":"{'@context': 'http://www.schema.org','@type': 'Corporation','name': 'Radixweb','url': 'https://radixweb.com','sameAs': ['https://www.facebook.com/radixweb','https://twitter.com/radixweb','https://www.instagram.com/radixweb','https://www.youtube.com/user/Radixweb2000','https://www.linkedin.com/company/radixweb','https://in.pinterest.com/pin/141511613270009577/','https://radixweb.com/'],'logo': 'https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/logo_radix_4c5179b806.png','description': 'Radixweb is India’s top software development and consulting company for 20+ years offering customized software and web development services. Contact us now.','address': {'@type': 'PostalAddress','streetAddress': 'Ekyarth, B/H Nirma University, Chharodi','addressLocality': 'Ahmedabad','addressRegion': 'Gujarat','postalCode': '382481','addressCountry': 'India'},'geo': {'@type': 'GeoCoordinates','latitude': '23.1202° N','longitude': '72.5470° E'},'hasMap': 'https://g.page/radixweb'}\n--\n{'@context': 'http://www.schema.org','@type': 'Corporation','name': 'Ajay','url': 'https://radixweb.com','sameAs': ['https://www.facebook.com/radixweb','https://twitter.com/radixweb','https://www.instagram.com/radixweb','https://www.youtube.com/user/Radixweb2000','https://www.linkedin.com/company/radixweb','https://in.pinterest.com/pin/141511613270009577/','https://radixweb.com/'],'logo': 'https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/logo_radix_4c5179b806.png','description': 'Radixweb is India’s top software development and consulting company for 20+ years offering customized software and web development services. Contact us now.','address': {'@type': 'PostalAddress','streetAddress': 'Ekyarth, B/H Nirma University, Chharodi','addressLocality': 'Ahmedabad','addressRegion': 'Gujarat','postalCode': '382481','addressCountry': 'India'},'geo': {'@type': 'GeoCoordinates','latitude': '23.1202° N','longitude': '72.5470° E'},'hasMap': 'https://g.page/radixweb'}","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"article":article,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/articles/what-s-inside-a-black-hole/post.js")
            })
        }    