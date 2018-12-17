//高亮关键字 text =>内容  words:关键词   tag 被包裹的标签

//匹配每一个关键字字符
function highLightKeywords(text, words, tag) {
    tag = tag || 'span';// 默认的标签，如果没有指定，使用span
    var i, len = words.length, re;
    
    for (i = 0; i < len; i++) {
        // 正则匹配所有的文本
        re = new RegExp(words[i], 'g');
        if (re.test(text)) {
            text = text.replace(re, '<'+ tag +' class="highlight">$&</'+ tag +'>');
        }
    }
}


    // return text;
    // }