// function showList () {
//     console.log('Works!');
// }


function DropDown(el) {
    console.log('dd')
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        console.log('initEvents')
        var obj = this;

        obj.dd.on('click', function(event){
            console.log('dd on click')
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            console.log('opts onclick')
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        console.log('getValue')
        return this.val;
    },
    getIndex : function() {
        console.log('getIndex')
        return this.index;
    }
}