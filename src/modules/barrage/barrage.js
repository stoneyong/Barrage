require('./barrageStyle.less');
// require('../../styles/common');
function Barrager(params) {

    let defaults = {
        elementId: null,    // canvas 的ID
        messages: [],       // 弹幕内容
        font: '18px Microsoft YaHei',  // 字体样式
        contextHeight: [],   // canvas切分行数后 每行的参数数据
        isClear: false,
    }

    this.settings = $.extend(defaults, params);
    if (this.settings.elementId) {
        const el = document.getElementById(this.settings.elementId);
        this.canvas = el;
        this.canvasContext = this.canvas.getContext('2d');

        let canWidth = $('.livePlayer').width();
        let canHeight = $('.livePlayer').height();
        this.settings.width = el.width = canWidth;
        this.settings.height = el.height = canHeight;
        this.settings.interval = '';
    }

    if (this.canvas) {
        this.init();
    }
}

Barrager.prototype.init = function () {
    let self = this,
        canvas = self.canvas,
        cxt = self.canvasContext,
        settings = self.settings,
        rowsNum = parseInt(self.settings.height/(20 + 10));
    settings.isClear = false;

    settings.contextHeight.splice(0, settings.contextHeight.length);
    //填充canvas 每行的数据
    for (let i = 0; i < rowsNum - 1; i++) {
        settings.contextHeight.push({
            height: i * 30 + 20,
            priority: 1
        });
    }


    if (!settings.messages.length || settings.interval) return;
   
    let $commentCanvas = $('#commentCanvas');
    // console.log($commentCanvas.offset().left, $commentCanvas.offset().top, $commentCanvas.width(), $commentCanvas.height());

    // console.log('test=====', settings.contextHeight);
    // 画个矩形的画布
    // cxt.fillRect($commentCanvas.offset().left, $commentCanvas.offset().top, $commentCanvas.width(), $commentCanvas.height());
    cxt.font = settings.font;

    //文字阴影
    cxt.shadowOffsetX = 0.6;
    cxt.shadowOffsetY = 0.6;
    cxt.shadowColor = "#fff";
    cxt.shadowColor = '#666';
    settings.interval = setInterval(() => {
        let deleteList = [];
        cxt.clearRect(0, 0, self.canvas.width, self.canvas.height);
        cxt.save();

        //无消息时 清楚计时器
        if(!settings.messages.length) {
            clearInterval(self.settings.interval);
            settings.interval = ''
            // self.canvasContext.clearRect(0, 0, settings.width, settings.height);
            return;
        }
        
        //弹幕半屏 还是全屏的控制
        let halfIndex = settings.messages.length < (rowsNum/2) ?  Math.ceil(rowsNum/2) : settings.contextHeight.length;
        
        //修改每行追加弹幕的优先级
        settings.messages.forEach((msg) => {
            if(msg && msg.text && msg.width && msg.height) {
                settings.contextHeight.forEach((con, index) => {
                    if (con.height == msg.height) {
                        con.priority = (msg.width + cxt.measureText(msg.text).width < settings.width - 20) && index < halfIndex ? 1 : 0;
                    }
                });
            }
        });

        settings.messages.forEach((item, index, thisArr) => {
            if(item && item.text) {
                if (!item.width && item.width != 0) {
                    //每条消息的初始宽度
                    item.width = settings.width - (index%2 == 0 ? 0 : 40);
                } else {
                    item.width -= 2;
                }
                
                if (!item.height) {
                    let priorityHeight = settings.contextHeight.filter((ch, index) => {
                        return !!ch.priority && index < halfIndex;
                    });
                    // console.log('优先级：', priorityHeight, settings.contextHeight);
                    // if (!priorityHeight.length)  return;
                    let selectHeight = priorityHeight.length && priorityHeight || settings.contextHeight;
                    //随机取优先级高的数组下标
                    let randomNum = Math.floor(Math.random() * (selectHeight.length - 0) + 0);
                    
                    // console.log('原始：', settings.contextHeight)
                    // console.log(selectHeight[randomNum].height);
                    item.height = selectHeight[randomNum].height;
                    // console.log(item.text, item.height);
                }
                

                cxt.fillStyle = item.color;
                cxt.fillText(item.text, item.width, item.height);
                
                if( item.width && item.height) {
                    settings.contextHeight.forEach((con) => {
                        if (con.height == item.height) {
                            con.priority = item.width + cxt.measureText(item.text).width < settings.width - 20 ? 1 : 0;
                        }
                    });
                }
                // console.log('计算==', settings.contextHeight.filter((ch) => {
                //         return !!ch.priority
                //     }))
                if(item.width < -cxt.measureText(item.text).width) {
                    deleteList.push(index);
                }
            }
        });
        cxt.restore();
        deleteList.forEach((value) => {
            settings.messages.splice(value, 1);
        })
    }, 18);
}

Barrager.prototype.pushMessage = function (datas) {
    let self  = this;
    if (self.settings.isClear) return;

    datas && datas.length && datas.forEach((data) => {
        if(data && data.text) {
             self.settings.messages.push(data);
        }
    })
    
   if(!self.settings.interval) {
       self.init();
   }
}

Barrager.prototype.clear = function () {
    let self = this,
        settings = self.settings;
    settings.isClear= true;
    clearInterval(self.settings.interval);
    self.settings.interval = ''
    
    self.canvasContext.clearRect(0, 0, settings.width, settings.height);
    settings.messages = [];
}

Barrager.prototype.resize = function (resize) {
    let self = this;
    if(!resize) return;
    self.canvas.width = self.settings.width = resize.width || $('#jwPlayer-container').width();
    self.canvas.height = self.settings.height = resize.height || $('#jwPlayer-container').height();
    let settings = self.settings,
        rowsNum = parseInt(self.settings.height/(20 + 10));
    
    //重新计算平分的高度 平分的canvas 每行的数据 
    settings.contextHeight.splice(0, settings.contextHeight.length);
    for (let i = 0; i < rowsNum - 1; i++) {
        settings.contextHeight.push({
            height: i * 30 + 20,
            priority: 1
        });
    }

    self.canvasContext.font = settings.font;
}

module.exports = Barrager;
