// 类组件
class List extends React.Component {
    render() {
        // 这里需要用一个标签包起来，所以react提供了Fragment
        return (
            <React.Fragment>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </React.Fragment>
        )
    }
}
// 上面的也可以写成这样
{/* <React.Fragment> </React.Fragment> 简写成<></> */ }
class List2 extends React.Component {
    render() {
        return (
            <>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </>
        )
    }
}

const template = <ul>
    <List />
    <List2 />
</ul>
const el = document.querySelector('#demo')
ReactDOM.render(template, el)
