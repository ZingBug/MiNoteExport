// 便签元素在 frame 里，不能直接用 artoo 处理，得先得到内部的 dom 元素，然后传给 artoo。
const iframe = 'iframe#js_note_mod_ctn.js_sandbox.business-mod-ctn.note-mod-ctn';
let get_container = (str)=>{return $(iframe)[0].contentDocument.body.querySelector(str)};
let notes_container = get_container('.home-bd .briefs-ctn.js_home_briefs_ctn');

// 开始抓取
let is_in_box = (this_)=>{
    return (this_.attr('class')=='js_folder_brief folder-brief js_normal_folder js_lock') ||
    (this_.attr('class')=='js_folder_brief folder-brief js_normal_folder')
};
let parse_item = (item)=>{
    console.log('Find item');
    return artoo.scrape(item, {
        created_time: function($){
            return $(this).find('.note-brief-hd span').attr('title');
        },
        content: function($){
            return $(this).find('.js_snippet.js_note_brief_bd.note-brief-bd').text();
        }
    });
}
let schema_func = function(){
        if(is_in_box($(this))){
            let result = {};
            result.box_name = $(this).find('.folder-brief-hd').text().replace(/\s/g,'');
            console.log('Enter box: '+result.box_name);
            result.content = artoo.scrape($(this).find('.js_note_brief_ctn.folder-brief-bd > div'), function(){
                return parse_item($(this))[0];
            });
            return result;
        }
        else{
            return parse_item($(this))[0];
        };
};
let data = artoo.scrape(notes_container, function() {
  return artoo.scrape($(this).find('> div'), schema_func);
});
artoo.savePrettyJson(data[0]);