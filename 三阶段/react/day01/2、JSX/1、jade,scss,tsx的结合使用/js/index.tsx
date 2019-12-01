(() => {
    interface dataType {
        name: string,
        age: number,
    }
    const data: dataType = {
        name: 'yao',
        age: 18
    }
    const template = <div>
        <p>姓名：{data.name}</p>
        <p>年龄{data.age}</p>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()
