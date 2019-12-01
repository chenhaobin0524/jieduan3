(() => {
    interface Data {
        name: string,
        num: number,
    }
    const data: Data = {
        name: 'chen',
        num: 18,
    }
    const methods = {
        test() {
            console.log(1);

        },
         // 函数必须有return值，它就会多一个独特的用法
        renderNum() {
            return 2
        }
    }
    const  template = <div>
        <button onClick={methods.test}>触发事件</button>
        {/* 函数可以当成值渲染在标签中，组件 */}
        <p>{methods.renderNum()}</p>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el);
})()