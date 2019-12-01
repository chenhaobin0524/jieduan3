(() => {
    //v-show
    const Vshow = () => {
        let num: number = 9;
        return <div style={{ display: num > 7 ? 'block' : 'none' }}>显示或者隐藏</div>
    }
    //view层
    const template = <div>
        <Vshow />
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()